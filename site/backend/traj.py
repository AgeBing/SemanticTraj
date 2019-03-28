from . import querymysqlutil
from datetime import datetime, timedelta
import math
from . import datamanager
from ctypes import *

# 认定在某个地点停留的时间长度阈值
STOPTIME_THRESHOLD = 20 * 60

class CA(Structure):
    _fields_ = [('peopleid',c_char_p),
                ('traj', c_char_p)]
    def __init__(self, peopleid, traj):
      self.peopleid = peopleid.encode('utf8')
      self.traj = traj.encode('utf8')

class CNode(Structure):
  _fields_ = [('isStop', c_bool),
              ('startTime', c_char_p),
              ('endTime', c_char_p),
              ('stopTime', c_int),
              ('site', c_char_p),
              ('stoppoint', c_int)]

class Traj(Structure):
  _fields_ = [('peopleid', c_char_p),
              ('matching', c_bool),
              ('trajs', POINTER(CNode)),
              ('trajLen', c_int)]

class returnType(Structure):
  _fields_ = [('traj', POINTER(Traj)),
              ('cnt', c_int)]

class Traj(object):
  def __init__(self, stop_num, sites, site_cover, 
      start_time_str = '2014-01-14 00:01:00.00', 
      end_time_str = '2014-01-14 23:59:00.00'):
    self.__stop_num = stop_num
    self.__sites = sites
    self.__site_cover = site_cover
    self.__format_str = '%Y-%m-%d %H:%M:%S.%f'
    self.__start_time = datetime.strptime(start_time_str, self.__format_str)
    self.__end_time = datetime.strptime(end_time_str, self.__format_str)

  def __get_traj_pid_by_time(self):
    """
    按照时间和基站查询轨迹ID
    @return {site, plist} 字典数组
    """
    start_time = int(self.__start_time.strftime('%m%d%H%M'))
    end_time = int(self.__end_time.strftime('%m%d%H%M'))
    start_time = math.floor(start_time / 10) * 10
    end_time = math.floor(end_time / 10) * 10 + 10
    times = [str(x) for x in range(start_time, end_time + 10, 10)]
    if len(self.__sites) == 0:
      print('没有符合条件的基站')
      return []
    mysql = querymysqlutil.Mysql()
    sql_str = """select site, plist
              from phonetrajectory_index_bysite 
              where site in ({0}) and datetime in ({1})
        """.format(','.join(map(lambda x: str(x), self.__sites)), ','.join(times))
    # print(sql_str)
    return mysql.get_all_new_con(sql_str)

  def __filter_pid(self, pids):
    """
    @param pids: {site, plist} 字典数组
    @return 符合条件的轨迹ID的set
    """
    pid_site = {}
    valid_pids = set()
    for node in pids:
      site_state = self.__site_cover.get(int(node['site']), 0)
      if site_state == 0:
        continue
      for pid in node['plist'].split(';'):
        pid = "'" + pid + "'"
        if not pid:
          continue
        state = pid_site.get(pid, 0)
        if ((state | site_state) == (1 << self.__stop_num) - 1):
          valid_pids.add(pid)
        pid_site[pid] = state | site_state
    print('pid len:', len(valid_pids))
    return valid_pids

  def __wrap_traj(self, traj_results):
    ca_list = [CA(d['peopleid'], d['traj']) for d in traj_results]
    ca_array = (CA * len(ca_list))(*ca_list)
    k_list = []
    v_list = []
    for k, v in self.__site_cover.items():
      k_list.append(str(k).encode('utf8'))
      v_list.append(v)
    k_array = (c_char_p * len(k_list))(*k_list)
    v_array = (c_int * len(v_list))(*v_list)
    return ca_array, k_array, v_array

  def __use_c_handle_traj(self, traj_results):
    preTime = datetime.now()
    ca_array, k_array, v_array = self.__wrap_traj(traj_results)
    time1 = datetime.now()
    print('传输+整理轨迹完成：' , (time1 - preTime).seconds)
    lib = cdll.LoadLibrary("c_traj_handle.dll") 
    lib.c_handle_traj.argtypes = POINTER(CA), c_int, c_int, POINTER(c_char_p), POINTER(c_int), c_int, c_int
    lib.c_handle_traj.restype = returnType
    ans = lib.c_handle_traj(ca_array, STOPTIME_THRESHOLD, len(ca_array), 
        k_array, v_array, len(k_array), self.__stop_num)
    time2 = datetime.now()
    print('C++ 计算时间：', (time2 - time1).seconds)
    traj_list = [None] * ans.cnt
    print(ans.cnt, ' ________')
    for i in range(0, ans.cnt):
      tmp_trajs = [None] * ans.traj[i].trajLen
      for j in range(0, ans.traj[i].trajLen):
        now_node = ans.traj[i].trajs[j];
        tmp_trajs[j] = {
          'isStop': now_node.isStop,
          'startTime': now_node.startTime.decode(),
          'endTime': now_node.endTime.decode(),
          'stopTime': now_node.stopTime,
          'site': now_node.site.decode(),
        }
        if (now_node.stoppoint >= 0):
          tmp_trajs[j]['stoppoint'] = now_node.stoppoint
      traj_list[i] = {
        'peopleid': ans.traj[i].peopleid.decode(),
        'matching': ans.traj[i].matching,
        'traj': tmp_trajs
      }
    print('整理轨迹时间', (datetime.now() - time2).seconds)
    return traj_list

  def __get_trajs_by_pids(self, pids):
    """
    根据轨迹ID找到所有轨迹
    @return {pid, traj:[]} 形式的数组
    """
    # '460000000000000' 为异常ID
    if '460000000000000' in pids:
      pids.remove('460000000000000')
    if len(pids) == 0:
      print('没有符合条件的轨迹')
      return []
    start_time = int(self.__start_time.strftime('%m%d'))
    end_time = int(self.__end_time.strftime('%m%d'))
    dates = [str(x) for x in range(start_time, end_time + 1)]
    mysql = querymysqlutil.Mysql()
    # 限制人数为100000
    sql_str = """
        select peopleid, traj
        from phonetrajectory_sortbyid
        where date in ({0}) and peopleid in ({1})
        order by peopleid
        """.format(','.join(dates), ','.join(pids))
    print(sql_str)
    traj_results = mysql.get_all_new_con(sql_str)
    print('query sql finish')
    return traj_results
    # trajs = {}
    # for node in traj_results:
    #   now_traj = trajs.get(node['peopleid'], {
    #     'pid': node['peopleid'],
    #     'traj': []
    #     })
    #   traj_strs = filter(lambda x: len(x) > 0, node['traj'].split(';'))
    #   now_traj['traj'].extend(
    #     [dict(zip(
    #       ('time', 'site'), x.split(','))) for x in traj_strs
    #     ]
    #   )
    #   trajs[node['peopleid']] = now_traj
    # print('get trajs finished!')
    return trajs

  def __get_diff_seconds(self, t1, t2):
    return (datetime.strptime(t2, self.__format_str) - 
        datetime.strptime(t1, self.__format_str)).seconds

  def __handle_traj(self, trajs):
    """
    合并相邻的相同节点
    """
    for key, traj in trajs.items():
      tmp_traj = []
      for now_node in traj['traj']:
        # now_node = traj['traj'][i];
        if len(tmp_traj) == 0:
          now_node['isStop'] = True
          now_node['startTime'] = now_node['time']
          now_node['endTime'] = now_node['time']
          now_node['stopTime'] = 0
          del now_node['time']
          tmp_traj.append(now_node)
        else:
          pre = tmp_traj[-1]
          if now_node['site'] == pre['site']:
            pre['endTime'] = now_node['time']
            pre['stopTime'] = self.__get_diff_seconds(pre['startTime'], 
                pre['endTime'])
            if pre['stopTime'] >= STOPTIME_THRESHOLD:
              pre['isStop'] = True
          else:
            now_node['startTime'] = pre['endTime']
            now_node['endTime'] = now_node['time']
            now_node['stopTime'] = self.__get_diff_seconds(
                now_node['startTime'], now_node['endTime'])
            if now_node['stopTime'] >= STOPTIME_THRESHOLD:
              now_node['isStop'] = True
            else:
              now_node['isStop'] = False
            del now_node['time']
            tmp_traj.append(now_node)
      traj['traj'] = tmp_traj
    print ('handle traj finished')
    return trajs

  def __filter_trajs(self, trajs):
    """
    过滤轨迹
    @return 合法的轨迹数组
    """
    traj_array = []
    for key, traj in trajs.items():
      traj['matching'] = False
      num = 0
      state = 0
      begin_index = -1
      end_index = -1
      for idx, now_node in enumerate(traj['traj']):
        if now_node['isStop'] and int(now_node['site']) in self.__site_cover:
          now_state = self.__site_cover[int(now_node['site'])]
          # 先经过A后经过B
          if ((1 << num) & (state | now_state)) != 0:
            if num == 0:
              begin_index = idx
            now_node['stoppoint'] = num
            num += 1
            state |= now_state
          if num == self.__stop_num:
            end_index = idx + 1
            break
      # 经过一个关键点：截取的轨迹为A到末尾
      end_index = len(traj['traj']) if end_index - begin_index == 1 else end_index
      if num == self.__stop_num:
        traj['matching'] = True
        # 截断
        traj['traj'] = traj['traj'][begin_index : end_index]
        traj_array.append(traj)
    print('filter traj finished')
    return traj_array

  def get_traj(self):
    # 优化内存，用相同变量
    print('get traj pid by time .....')
    o = self.__get_traj_pid_by_time()
    print('filter pid ....')
    o = self.__filter_pid(o)
    print('get trajs by pids ...')
    o = self.__get_trajs_by_pids(o)
    return self.__use_c_handle_traj(o)
    # print('handle traj ....')
    # o = self.__handle_traj(o)
    # return self.__filter_trajs(o)


  