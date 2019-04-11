import $ from 'jquery';
import * as DataManager from './datamanager.js';
import * as d3 from 'd3';

export function pquery(myData) {
  return new Promise((resolve, reject) => {
    const ws = new WebSocket('ws://localhost:8000/ws/');
    ws.onopen = function() {
      // console.log(JSON.stringify(myData));
      ws.send(JSON.stringify(myData));
    }
    ws.onmessage = function(e) {
      // console.log(JSON.parse(e.data), 'query WebSocket')
      resolve(JSON.parse(e.data));
    }
    // $.ajax({
    //   dataType: "json",
    //   url: "http://localhost:3001/",
    //   type: "POST",
    //   data: myData,
    //   success: resolve,
    //   error: reject,
    // });
  });
}

export function getSites() {
  let data = {
    reqType: "queryDb",
    operate: "select",panel up-panel
    column: "id, longitude, latitude, vertice, neighbor, base_station",
    table: "site",
    limit: `where id >= 0 and id <= 28746`, //  all stations in 温州
  };
  return pquery(data)
    .then(result => {
      let sites = DataManager.sites;
      result.forEach(o => {
        sites.set(o.id, {
            longitude: o.longitude,
            latitude: o.latitude,
            vertice: o.vertice,
            neighbor: o.neighbor,
            base_station: o.base_station,
        });
      })
      console.log("read sites done");
    });
};

export function getPidByCondition(siteList, conditionNum, time1 = 
    '2014-01-14 00:00:00.00', time2 = '2014-01-14 00:20:00.00') {
  const siteCondition = `site in (${siteList.toString()})`;
  const timeFormat = d3.timeFormat('%m%d%H%M');
  const begin = timeFormat(new Date(time1)) * 1;
  const end = timeFormat(new Date(time2)) * 1;
  let timeCondition = '';
  for (let time = Math.floor(begin/10) * 10; time <= (Math.floor(end/10)+1) * 10; 
      time += 10) {
    timeCondition += "'" + time + "',";
  }
  timeCondition = timeCondition.substring(0, timeCondition.length - 1);
  const data = {
    reqType: "queryDb",
    operate: "select",
    column: "*",
    table: "phonetrajectory_index_bysite",
    limit:`where datetime in (${timeCondition}) and ${siteCondition}`,
  };
  console.log('getPidByCondition ... ')
  return pquery(data)
      .then(result => getPidByResult(result, siteList, conditionNum))
}

// 合并people id : 经过所有要查找的点的pid
function getPidByResult(result, siteList, conditionNum) {
  console.log('getPidByCondition',result)
  const siteCondition = DataManager.siteCondition;
  const ans = new Set();
  const pidSites = new Map();
  const tar = (1 << conditionNum) - 1;
  result.forEach(data => {
    for (let pid of data.plist.split(';')) {
      if (!pidSites.has(pid)) {
        pidSites.set(pid, 0);
      }
      const preS = pidSites.get(pid);
      const newS = siteCondition.get(data.site*1);
      if ((preS | newS) == tar) {
        ans.add(pid);
        continue;
      }
      pidSites.set(pid, preS | newS);
    }
  });
  // console.log([...ans], ' ------ ');
  // for (let [pid, sites] of pidSites) {
  //   let s = 0;
  //   for (let site of sites) {
  //     const newS = siteCondition.get(site*1);
  //     if ((s | newS) == tar) {
  //       ans.add(pid);
  //       break;
  //     }
  //     s |= newS;
  //   }
  // }
  if (ans.size > 31000) {
    console.log('pid is too large ans split');

  }
  console.log('pid length:', ans.size)
  return [...ans].slice(0, 31000);
}

export function getTrajByPid(pidList, time1 = '2014-01-14 00:00:00.00', 
    time2 = '2014-01-14 00:20:00.00') {
  let pCondition = '';
  // for (let pid of pidList) {
  //   pCondition += "'" + pid + "',";
  // }

  //*************  for Test *************   
  for (let pid of pidList.slice(0,100)) {
    pCondition += "'" + pid + "',";
  }
  pCondition = pCondition.substring(0, pCondition.length - 1);
  const timeFormat = d3.timeFormat('%m%d'); // day
  const begin = timeFormat(new Date(time1));
  const end = timeFormat(new Date(time2));
  let dateCondition = '';
  for (let time = begin; time <= end; time ++) {
    dateCondition += "'" + time + "',";
  }
  dateCondition = dateCondition.substring(0, 
      dateCondition.length - 1);
  const data = {
    reqType: 'queryDb',
    operate: 'select',
    column: '*',
    table: 'phonetrajectory_sortbyid',
    limit: `where date in (${dateCondition}) and peopleid in (${pCondition})`
  };
  console.log(data)
  return pquery(data)
      .then(result => parseTraj(result));
}

function parseTraj(result) {
  console.log('traj',result)
  const ans = new Map();
  for (let data of result) {
    if (!ans.has(data.peopleid)) {
      ans.set(data.peopleid, {pid: data.peopleid, traj: []});
    }
    const preTraj = ans.get(data.peopleid).traj;
    data.traj.split(';').forEach(trajPoint => {
      if (!trajPoint) {
        return;
      }
      let [time, site] = trajPoint.split(',');
      if (preTraj.length == 0 || preTraj[preTraj.length-1].site != site) {
        preTraj.push({time: time, site: site});
      }
    });
  }
  return ans;
}
