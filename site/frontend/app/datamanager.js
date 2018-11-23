import * as QueryDb from './querydb.js';
import $ from 'jquery';
import * as d3 from 'd3';
// import * as myKMeans from './mykmeans.js';
// import * as MapRender from './maprender.js';
// import * as ConfigPanel from './configpanel.js';
import * as NewQueryView from './newqueryview.js';
// import * as TrajMatrix from './trajmatrix.js';
// import * as GroupMap from './groupmap.js';

export const siteTopic = new Map();
export const wordIndex2Topic = new Map();
export const topic2WordIndex = new Map();
export const dataReady = false;
export const poiResults = [];
export const standardVector = []; // 标准向量
export const siteCondition = new Map();      // site id 到 某几个condition的映射
// traj
export let peopleTraj;
export const drawTraj = [];
export const filtedTraj = [];
export const sites = new Map();
export const matchingTraj = new Map();
export const pattern = new Map();
export const trajPatternSet = new Map();
export const trajPatternSetComplete = new Map();
export const maxStopTime = new Map();
export const reverseMap = new Map();
export let maxScale = 0;
export let redScale;
export const stationFlow = new Map();
export const flowInterval = 30;
//pattern各时间段流量
export const patternTime = new Map();
export const colorRef = new Map();

export function init(){
  return getTopicPoi()
      .then(o => getIndexTopic())
      .then(o => QueryDb.getSites())
      // .then(o => loadImg());
}

export const type17CN = ["公司企业","购物","丽人","休闲娱乐","医疗","教育培训","汽车服务","美食","宾馆","旅游景点",
"生活服务","运动健身","交通设施","政府机构","房地产","自然地物","金融", '医疗生活'];
export const type17 = ['Enterprise', 'Shop', 'Beauty', 'Entertainment', 'Hospital', 
    'Education', 'Car', 'Food', 'Hotel', 'Tourist_attractions', 'Life', 'Sports',
    'Traffic', 'Government', 'Uptown', 'Scenicspot', 'Finance', 'Hospital'];
function getTopicPoi () {
  return QueryDb.pquery({   // 23 551865  || 5 469070
    reqType: "readText",
    begin: 3,
    fileName: "type.txt",
    readLineLimit: 308,
  }).then(result => {
    $.each(result, (i, o) => {
      let maxIndex = -1, maxValue = 0;
      o.map((x, j) => {
        // if (x.indexOf("E") == -1) {
          // let nowV = parseFloat(x);
          if (x - maxValue > 0) {
            maxValue = x;
            maxIndex = j;
          }
        // }
      });
      wordIndex2Topic.set(i*1, type17[maxIndex]);
      topic2WordIndex.set(type17[maxIndex], i*1);
    });
    const tmp = [...topic2WordIndex].sort((a, b) => a[1] - b[1]);
    // for (let i = 0; i < tmp.length; ++ i) {
    //   colorRef.set(tmp[i][0], GroupMap.topicColor[i]);
    // }
    // console.log(colorRef);
    console.log(topic2WordIndex)
  });
}


function getIndexTopic() {
  return QueryDb.pquery({   // 23 551865  || 5 469070
    reqType: "readText",
    begin: 23,
    fileName: "topic17.txt",
    readLineLimit: 496678,
  }).then(result => {
    $.each(result, (i, o) => {
      let tmp = new Map();
      o.map((x, j) => {
        x = parseFloat(x);
        let topic = wordIndex2Topic.get(j);
        if (!tmp.has(topic)) {
          tmp.set(topic, x);
        }
        let pre = tmp.get(topic);
        if (x > pre) {
          tmp.set(topic, pre);
        }
      });
      let aRes = [];
      tmp.forEach((val, topic) => {
        aRes.push({topic:topic, val: val});
      })
      aRes.sort((a, b) => b.val - a.val);
      siteTopic.set(i+'', aRes);
    });
  });
};

//----------------华丽的分割线-----------------------
// poiResults

export function addPoiResults(condition, results) {
  const nowList = new Map();
  if (getIdxInPoiResultsByCondition(condition) != -1) {
    return ;
  }
  if (results.length == 0) {
    return;
  }
  results.forEach(poi => {
    // let idx;
    // for (idx = 0; idx < type17CN.length; idx ++) {
    //   if (poi.type.indexOf(type17CN[idx]) != -1) {
    //     break;
    //   }
    // }
    // console.log(poi, ' ###')
    const type = siteTopic.get(poi.site+'')[0].topic;
    if (!type) {
      return ;
    }
    poi.isSelect = true;
    poi.isMouseover = false;
    if (nowList.has(type)) {
      nowList.get(type).push(poi);
    } else {
      const tmp = [];
      tmp.isSelect = true;
      tmp.isMouseover = false;
      tmp.isShow = false;
      tmp.push(poi);
      nowList.set(type, tmp);
    }
  });
  const data = [...nowList];
  data[0][1].isShow = true;
  poiResults.push({condition: condition, data: data, isShow: true,showType: 0});
}

export function removePoiResults(dif) {
  for (let o of dif) {
    const idx = getIdxInPoiResultsByCondition(o);
    poiResults.splice(idx, 1);
  }
}

export function getIdxInPoiResultsByCondition(condition) {
  let ans = -1;
  poiResults.forEach((data, i) => {
    if (data.condition == condition) ans = i;
  });
  return ans;
}

export function getPoiResultsByCondition(condition) {
  for (let i = 0; i < poiResults.length; i ++) {
    if (poiResults[i].condition == condition) {
      return poiResults[i];
    }
  }
}

//延迟更新？
export function modifyPoiResultsOne(ids, property, val) {
  let sum = 0;
  let tmp = poiResults[ids[0]].data[ids[1]][1];
  tmp[ids[2]][property] = val;
  // 不更新上一层 以后解决   用一个sum位记录？
  for (let i = 0; i < tmp.length; i ++) {
    if (tmp[i][property] == val) {
      sum ++;
    }
  }
  if (sum == tmp.length) {
    tmp[property] = val;
  }
}
export function modifyPoiResultsShowType(ids) {
  const preId = getPoiResultsShowType(ids);
  poiResults[ids[0]].data[preId][1].isShow = false;
  poiResults[ids[0]].isShow = true;
  poiResults[ids[0]].showType = ids[1];
  poiResults[ids[0]].data[ids[1]][1].isShow = true;
}

export function getPoiResultsShowType(ids) {
  return poiResults[ids[0]].showType;
}

export function modifyPoiResultsGroup(ids, property, val) {
  let tmp = poiResults[ids[0]].data[ids[1]][1];
  tmp[property] = val;
  for (let i = 0; i < tmp.length; i ++) {
    tmp[i][property] = val;
  }
}

export function modifyPoiResults(id, property, val) {
  let tmp = poiResults[id].data;
  for (let i = 0; i < tmp.length; i ++) {
    for (let j = 0; j < tmp[i][1].length; j ++) {
      tmp[i][1][j][property] = val;
    }
    tmp[i][1][property] = val;
  }
}

export function modifyPoiResultsShow(id, val) {
  poiResults[id].isShow = !poiResults[id].isShow;
}

export function modifyPoisBound(NW, SE, flag = false, id) {
  let now = poiResults[id].data;
  for (let i = 0; i < now.length; i ++) {
    let sum = 0;
    for (let j = 0; j < now[i][1].length; j ++) {
      if (inTheBound(...NW, ...SE, now[i][1][j].latitude*1, 
          now[i][1][j].longitude)) {
        sum ++;
        now[i][1][j].isSelect = flag;
      } else if (now[i][1][j].isSelect == flag) {
        sum ++;
      }
    }
    // 同样只更新了一层
    if (sum == now[i][1].length) {
      now[i][1].isSelect = flag;
    }
  }
}

function inTheBound(lat0, lng0, lat1, lng1, lat, lng) {
  if (lat >= lat0 && lat <= lat1 && lng >= lng0 && lng <= lng1) {
    return true;
  }
  return false;
}

export function getSelectSites() {
  const result = new Set();
  siteCondition.clear();
  for (let i = 0; i < poiResults.length; i ++) {
    const tmp = poiResults[i].data;
    for (let j = 0; j < tmp.length; j ++) {
      if (!tmp[j][1].isSelect) {
        continue;
      }
      for (let k = 0; k < tmp[j][1].length; k ++) {
        if (tmp[j][1][k].isSelect) {
          result.add(tmp[j][1][k].site);
          let S = siteCondition.get(tmp[j][1][k].site) || 0;
          S |= (1 << i);
          siteCondition.set(tmp[j][1][k].site, S);
        }
      }
    }
  }
  console.log('siteCondition:', siteCondition)
  return [...result];
}


//people traj
export function setPeopleTraj(traj) {
  peopleTraj = traj;
}

export function handleTraj() {
  detectTrajStopPoint();
  detectTrajMatchLocation();
  NewQueryView.filterAll();
  // MapRender.reRendering();
  // TrajList.showSemanticList(drawTraj);
  loadMatchingTraj();
  updateTrajPatternAndSet();
  // myKMeans.clusterDataByKMeans();

  
}

function detectTrajStopPoint() {
  const stopTime = 20;
  peopleTraj.forEach(function(trajs) {
    for (let i = 0; i < trajs.traj.length; i ++) {
      if (i == 0) {
        trajs.traj[i].isStop = true;
      } else {
        const preTime = new Date(trajs.traj[i-1].time).getTime();
        const nowTime = new Date(trajs.traj[i].time).getTime();
        if (nowTime - preTime >= 1000 * 60 * stopTime) {
          trajs.traj[i].isStop = true;
        } else {
          trajs.traj[i].isStop = false;
        }
      }
    }
    trajs.matching = false;
    trajs.filter = false;
  });
  console.log('detect Traj Stop Point done!')
}

function detectTrajMatchLocation() {
  const tarLen = poiResults.length;
  drawTraj.length = 0;
  filtedTraj.length = 0;
  peopleTraj.forEach(function(trajs) {
    let S = 0, num = 0;
    for (let i = 0; i < trajs.traj.length; i ++) {
      if (trajs.traj[i].isStop && siteCondition.has(trajs.traj[i].site*1)) {
        trajs.traj[i].stopCondition = siteCondition.get(trajs.traj[i].site*1) || 0;
        // 必须是先经过A后经过B
        if (((1 << num) & trajs.traj[i].stopCondition) != 0) {
          trajs.traj[i].stoppoint = num ++; 
        }
        if (num == tarLen) {
          break;
        }
      }
    }
    if (num == tarLen) {
      trajs.matching = true;
      drawTraj.push(trajs);
    }
  });
  console.log('match traj location done!', peopleTraj.size, drawTraj.length);
  console.log(drawTraj, ' drawTraj')

  console.log(sites,' sites')
}

function loadMatchingTraj() {
  matchingTraj.clear();
  for (let peopleTraj of drawTraj) {
    if (!peopleTraj.matching) continue;
    if (peopleTraj.filter) continue;
    let matchStr = '';
    for (let traj of peopleTraj.traj) {
      if (traj.isStop) {
        matchStr += ',' + traj.site;
      }
    }
    addMatchingTraj(matchStr, peopleTraj);
  }
  // console.log('matchingTraj:', matchingTraj);
  console.log('load matching traj complete!');
}

function addMatchingTraj(matchStr, peopleTraj) {
  if (matchingTraj.has(matchStr)) {
    matchingTraj.get(matchStr).push(peopleTraj);
  } else {
    matchingTraj.set(matchStr, [peopleTraj]);
  }
}

function updateTrajPatternAndSet() {
  pattern.clear();
  trajPatternSet.clear();
  trajPatternSetComplete.clear();
  stationFlow.clear();
  for (let [key, peopleTrajs] of matchingTraj) {
    // peopleTrajs.forEach((peopleTraj, i) => {
    //改为从后向前
    for (let i = peopleTrajs.length - 1; i >= 0; -- i) {
      peopleTraj = peopleTrajs[i];
      if (!peopleTraj.matching) return ;
      let trajs = [], preTime, nowTime;
      peopleTraj.traj.forEach((traj, j) => {
        nowTime = new Date(traj.time);
        if (j == 0) {
          preTime = new Date(new Date(traj.time).toLocaleDateString()+' 24:00:00');
        }
        if (traj.isStop) {
          traj.stopTime = (preTime.getTime() - nowTime.getTime() + 86400000) % 86400000;
          trajs.push($.extend(true, {}, traj)); //push后会是深复制
          if (traj.hasOwnProperty('stoppoint')) {
            if (!maxStopTime.has(traj.site)) {
              maxStopTime.set(traj.site, traj.stopTime);
            } else {
              let preMax = maxStopTime.get(traj.site);
              maxStopTime.set(traj.site, Math.max(preMax, preMax));
            }
            updateStationFlow(traj.site, nowTime);
          }
        }
        preTime = nowTime;
      });
      trajs.reverse();
      const patternStr = trajToPatternStr(peopleTraj.traj);
      // -- updateScale
      updateScale(patternStr);
      addTrajPatternSet(patternStr, trajs);
      updatePatternTime(patternStr, trajs);
      addTrajPatternSetComplete(patternStr, peopleTraj.traj);
      if (!pattern.has(patternStr)) {
        pattern.set(patternStr, {num: 1, data: trajs});
      } else {
        const pre = pattern.get(patternStr);
        pre.data.forEach((traj, i) => {
          if (traj.hasOwnProperty('stoppoint')) {
            return ;
          } else {
            traj.stopTime += trajs[i].stopTime;
          }
        });
        pre.num ++;
        // pattern.set(patternStr, pre);  //   没有必要
      }
    }
  }
  // myKMeans.updateRawDocuments(pattern);
  for (let [pat, d] of pattern) {
    d.data.forEach((o, i) => {
      o.pattern = pat;
      if (o.hasOwnProperty('stoppoint')) {
        return ;
      } else {
        o.stopTime /= d.num;
      }
    });
  }
  console.log('pattern:', pattern);
  console.log('trajPatternSet:', trajPatternSet);
  console.log('patternTime:', patternTime); 

  console.log('siteTopic:', siteTopic); 
  // GroupMap.run(pattern);
}

function updatePatternTime(pat, trajs) {
  const sites = pat.split(',').filter(o => o.indexOf('-') >= 0).map(o => o*(-1)),
      len = sites.length;
  const interval = 10;
  const intCnt = 24 * 60 / interval;
  if (!patternTime.has(pat)) {
    const init = [];
    for (let i = 0; i < len; ++ i) {
      const timeArr = [];
      for (let j = 0; j < intCnt; ++ j) {
        timeArr[j] = 0;
      }
      init.push(timeArr);
    }
    patternTime.set(pat, init);
  }
  //目前只统计stoppoint
  const now = patternTime.get(pat);
  for (let i = 0; i < trajs.length; ++ i) {
    if (trajs[i].hasOwnProperty('stoppoint')) {
      const id = sites.findIndex(o => o == 1*trajs[i].site),
          thisDate = new Date(trajs[i].time),
          hour = thisDate.getHours(),
          minu = thisDate.getMinutes() + hour * 60,
          start = parseInt(minu / interval),
          end = (parseInt((start + trajs[i].stopTime/1000/60) / interval) + 1) 
              % intCnt;
      now[id][start] ++;
      // for (let j = start; j != end; ) {
      //   now[id][j] ++;
      //   j = (j + 1) % intCnt;
      // }
    }
  }
}

function updateStationFlow(id, time) {
  if (!stationFlow.get(id*1)) {
    stationFlow.set(id*1, new Map());
  }
  const sf = stationFlow.get(id*1),
      [H, M, S] = time.toString().split(' ')[4].split(':').map(o => o*1),
      s = H * 3600 + M * 60 + S;
  const now = parseInt(s / flowInterval);
  if (!sf.has(now)) {
    sf.set(now, 0);
  }
  let num = sf.get(now);
  sf.set(now, num + 1);
}

function trajToPatternStr(aTraj) {
  let t = [], cont = 0, siteSets_ = new Set();
  aTraj.forEach((traj, j) => {
    if (traj.isStop) {
      if (traj.hasOwnProperty("stoppoint")) {
        siteSets_.add(traj.stoppoint);
        if (cont > 0) {
          t.push(cont);
        }
        t.push("-" + traj.site);
        cont = 0;
      } else {
        cont ++;
      }
    }
  });
  if (cont > 0) {
    t.push(cont);
  }
  return t.toString();
}

function addTrajPatternSet(pattern, traj) {
  if (!trajPatternSet.has(pattern)) {
    trajPatternSet.set(pattern, []);
  }
  trajPatternSet.get(pattern).push(traj);
}

function addTrajPatternSetComplete(pattern, traj) {
  if (!trajPatternSetComplete.has(pattern)) {
    trajPatternSetComplete.set(pattern, []);
  }
  trajPatternSetComplete.get(pattern).push(traj);
}

function updateScale(pat) {
  let sites = pat.split(',').filter(o => o.indexOf('-') >= 0).map(o => o*(-1));
  let vecs = [];
  for (let j = 0; j < sites.length; j ++) {
    let now = siteTopic.get(sites[j] + '');
    let node = new Map();
    for (let i = 0; i < now.length; i ++) {
      node.set(now[i].topic, now[i].val);
    }
    vecs.push(node);
  }
  let d = getdistance(vecs);
  maxScale = Math.max(maxScale, Math.sqrt(d));
  redScale = d3.scaleLinear()
    .domain([0, maxScale])
    // .range(['rgb(3, 78, 123)', 'rgb(255, 247, 251)'])
    .range(['rgb(216, 234, 248)', 'rgb(20, 104, 171)'])
}


//standardVector
export function getStandardVector() {
  standardVector.length = 0;
  poiResults.forEach(condition => {
    let num = 0;
    const vector = new Map();
    condition.data.forEach(data => {
      if (!data[1].isSelect) {
        return;
      }
      data[1].forEach(node => {
        if (node.isSelect) {
          num ++;
          let topics = siteTopic.get(node.site+'');
          for (let o of topics) {
            if (!vector.has(o.topic)) {
              vector.set(o.topic, 0);
            }
            vector.set(o.topic, vector.get(o.topic) + o.val);
          }
        }
      })
    });
    for (let [topic, val] of vector) {
      vector.set(topic, val / num);
    }
    standardVector.push(vector);
  });
  console.log('standardVector: ', standardVector);
}

export function getdistance(trajdata) {
  let distance = 0;
  let sta = standardVector;
  // console.log('distance  trajdata:', trajdata);
  trajdata.forEach((condition,i) => {
    for (let ele of condition.keys()) {
      // distance += Math.abs(condition.get(ele)-sta[i].get(ele)) * 
      //     NewQueryView.vec[i].get(ele);
      const w = NewQueryView.vec[i] && NewQueryView.vec[i].has(ele) ? 
          NewQueryView.vec[i].get(ele) : 1;
      distance += Math.abs(condition.get(ele) - sta[i].get(ele)) * w;
    }
  })
  return distance;
}
