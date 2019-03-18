import MySQLdb
from MySQLdb.cursors import DictCursor, SSDictCursor, Cursor
from DBUtils.PooledDB import PooledDB
from datetime import datetime, timedelta
import math

connection = MySQLdb.connect( host="10.76.0.184",user="root",
        passwd="123456",db="mobiledata",
        cursorclass = SSDictCursor, charset = 'utf8', use_unicode = True)

def inserts(sql, vals):
    con = MySQLdb.connect( host="10.76.0.184",user="root",
        passwd="123456",db="mb10w",
        charset = 'utf8', use_unicode = True)
    cursor = con.cursor()
    cursor.executemany(sql, vals)
    con.commit()

def str_to_datetime(time_str):
    start_time = int(datetime.strptime(time_str, '%Y-%m-%d %H:%M:%S.%f').strftime('%m%d%H%M'))
    start_time = math.floor(start_time / 10) * 10
    return start_time

def get_10w_trajs():
    sql = """
        select peopleid, count, traj
        from phonetrajectory_sortbyid
        where date = 114
        order by peopleid, count
        limit 150000
    """
    cursor = connection.cursor()
    cursor.execute(sql)
    people_cnt = 0
    trajs = {}
    now_traj_id = ''
    pre_traj_id = ''
    same_traj_count = 0
    for node in cursor:
        if node['peopleid'] != pre_traj_id:
            pre_traj_id = node['peopleid']
            now_traj_id = pre_traj_id + '#0'
            same_traj_count = 1
        if now_traj_id not in trajs:
            trajs[now_traj_id] = {
                'pid': now_traj_id,
                'traj': []
            }
        traj_strs = filter(lambda x: len(x) > 0, node['traj'].split(';'))
        tmp_traj = [dict(zip(
                ('time', 'site'), x.split(','))) for x in traj_strs
            ]
        for traj_node in tmp_traj:
            if (len(trajs[now_traj_id]['traj']) == 0 or 
                    trajs[now_traj_id]['traj'][-1]['time'] < traj_node['time']):
                trajs[now_traj_id]['traj'].append(traj_node)
            elif trajs[now_traj_id]['traj'][-1]['time'] == traj_node['time']:
                continue
            else:
                now_traj_id = pre_traj_id + '#' + str(same_traj_count)
                same_traj_count += 1
                trajs[now_traj_id] = {
                    'pid': now_traj_id,
                    'traj': []
                }
                trajs[now_traj_id]['traj'].append(traj_node)
    print('get all data')
    insert_list = []
    date_site = {}
    for traj_pid, traj_list in trajs.items():
        if len(traj_list['traj']) < 5:
            continue
        insert_list.append((114, traj_list['pid'], ';'.join([x['time']+','+x['site'] for x in traj_list['traj']])))
        for node in traj_list['traj']:
            dt = str_to_datetime(node['time'])
            dt_site = str(dt) + '_' + node['site']
            if dt_site not in date_site:
                date_site[dt_site] = set()
            date_site[dt_site].add(traj_list['pid'])
    print('insert int phonetrajectory_sortbyid ....', len(insert_list))
    insert_sql = """
        insert into phonetrajectory_sortbyid (date, peopleid, traj)
        values(%s, %s, %s)
    """         
    inserts(insert_sql, insert_list)

    date_site_list = []
    for k, v in date_site.items():
        dt, site = k.split('_')
        date_site_list.append((dt, site, ';'.join(v)))
    insert_sql2 = """
        insert into phonetrajectory_index_bysite (datetime, site, plist)
        values(%s, %s, %s)
    """
    print('insert into phonetrajectory_index_bysite....', len(date_site_list))
    inserts(insert_sql2, date_site_list)

if __name__ == '__main__':
    get_10w_trajs()