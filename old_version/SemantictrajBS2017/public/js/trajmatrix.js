/*
author: Lin Bingru and Gao Shengjie
*/
import '../css/trajmatrix.css';

import * as DataManager from './datamanager.js';
import * as d3 from 'd3';
import * as MapRender from './maprender.js';

const margin = { top: 20, right: 20, bottom: 20, left: 0 };
const gridSize = 20,
    colors = ['#f7fcfd','#e5f5f9','#ccece6','#99d8c9','#66c2a4','#41ae76','#238b45','#006d2c','#00441b'],
    // colors = ["#ffffd9", "#edf8b1", "#c7e9b4", "#7fcdbb", "#41b6c4", 
    //     "#1d91c0", "#225ea8", "#253494", "#081d58"],
    // hours = ["00", "02", "04", "06", "08", "10", "12", "14", "16", "18", 
    //     "20", "22", "(00)"];
    hours = ['00:00', '12:00', '24:00'];

export function getTrajData(parent, parentData, map) {
  let ids = [];
  parent.selectAll('.topic_cluster').selectAll('.cluster_element').each(function(d, i) {
    let thisData = d3.select(this).data();
    ids.push(thisData[0].id*1);
  });
  const trajs = [];
  for (let i = 0; i < ids.length; i ++) {
    let d = map.get(ids[i]);
    let trajsdata = DataManager.trajPatternSet.get(d);
    for (let atraj of trajsdata) {
      trajs.push(atraj);
    }
  }
  return trajs;
}

export function getTrajDataByGroup(patterns) {
  const trajs = [];
  for (let i = 0; i < patterns.length; ++ i) {
    let trajsdata = DataManager.trajPatternSet.get(patterns[i].pattern);
    for (let atraj of trajsdata) {
      trajs.push(atraj);
    }
  }
  return trajs;
}

export function clean() {
  d3.select('#semantictraj_list-container')
      .remove();
}

export function showSemanticList(PeoSet) {
  d3.select('#semantictraj_list-container')
      .remove();
  const div = d3.select('#semantictraj_list')
      .append('div')
      .attr('id', 'semantictraj_list-container')
      .on('mouseenter', function() {
        MapRender.groupTraj.shallow();
      })
      .on('mouseleave', function() {
        MapRender.groupTraj.deep();
      })
  const svg = d3.select("#semantictraj_list-container")
      .append("svg")
      .attr("width", "100%")
      .attr("height", "100%")
      .attr('id', 'trajmatrixbottom')
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
      .attr("id", "listSVG");
  const [clusterSet, maxCnt, maxStoptime] = trajTimeCluster(PeoSet);
  const colorScale = d3.scaleQuantile()
      .domain([0, maxStoptime])
      .range(colors);

  const barScale = d3.scaleLinear()
      .domain([1, maxCnt])
      .range([1, 300]);

  const g = svg.append("g")
      .attr("transform", "translate(0, 0)");

  svg.append("clipPath")
      .attr("id", "clip")
      .append("rect")
      .attr("width", 683 - margin.left - margin.right)
      .attr("height", clusterSet.length * gridSize)
      .attr("transform", "translate(-6, 0)")
      .attr("fill", "none");
  svg.on('mouseenter', function() {
    MapRender.groupTraj.shallow();
  })
  .on('mouseleave', function() {
    MapRender.groupTraj.deep();
  })
  g.attr("clip-path", "url(#clip)");
  const g1 = g.append("g")
      .attr("transform", "translate(0, 0)");

  let hourLabels = svg.selectAll(".hourLabel")  //添加横坐标
      .data(hours)
      .enter().append('text')
      .text(d => d)
      .attr('x', (d, i) => i * gridSize * 6 - 10.5)
      .attr('y', 0)
      .style('text-anchor', 'middle')
      .attr("transform", "translate(" + gridSize / 2 + ", -6)")
      .attr("class", function(d) { return "hourLabel " + d; });

  const list = g1.selectAll(".list") //添加矩阵元素
      .data(clusterSet)
      .enter()
      .append("g")
      .attr("class", "list")
      .attr("transform", (d, i) => "translate(0, " + i * gridSize + ")")
      .on('mouseenter', function(d) {
        showChooseTrajs(d.data);
      })
      .on('mouseleave', function(d) {
        MapRender.matrixTraj.remove();
        // MapRender.groupTraj.deep();
      })

  list.selectAll("row")
      .data(function(d, i) { return d["val"]; })
      .enter()
      .append("rect")
      .attr("x", (d, i) => i * gridSize)
      .attr("y", 0)
      .attr("width", gridSize - 1.5)
      .attr("height", gridSize - 1.5)
      .attr("rx", 4)
      .attr("ry", 4)
      .style("fill", function(d, i) { return d < 0 ? "#f28538" : colorScale(d); })
      .on("mouseover", function() {
        d3.select(this).style("stroke", "black")
      })
      .on("mouseout", function() {
        d3.select(this).style("stroke", "#E6E6E6")
      })
      .append("title")
      .text(function(d, i) { return d < 0 ? "stoppoint" : d; });

  const bar = g1.selectAll(".bars") //添加柱状图元素
      .data(clusterSet)
      .enter()
      .append("rect")
      .attr("x", 0)
      .attr("y", (d, i) => i * gridSize)
      .attr("width", (d, i) => barScale(d["cnt"]))
      .attr("height", gridSize - 2)
      .attr("rx", 4)
      .attr("ry", 4)
      .attr("transform", "translate(" + 13 * gridSize + ", 0)")
      .attr("class", (d, i) => "barClass c" + i)
  bar.append("title")
      .text((d, i) => d["cnt"])
  bar.on('mouseenter', function(d) {
        showChooseTrajs(d.data);
      })
      .on('mouseleave', function(d) {
        MapRender.matrixTraj.remove();
        // MapRender.groupTraj.deep();
      })

  let Y = 0;  // g1相对于g的初始坐标

  let drag = d3.drag()
      .on("drag", dragged);
   
  g1.call(drag)
      .attr("clip-path", "url(#clip)");

  function dragged() {
    if(Y >= 0 && d3.event.dy > 0) return;
    if(Y > 0 || Y + d3.event.dy > 0) {
      d3.select(this).attr("transform", "translate(0, 0)");
      Y = 0;
      return;
    }
    Y += d3.event.dy;
    d3.select(this).attr("transform", "translate(0, " + Y + ")");
  }
  const svgLen = $(div.node())[0].offsetWidth,
        gLen = $(svg.node())[0].getBBox().width,
        scale = gLen > svgLen * 0.9 ? svgLen * 0.9 / gLen : 1;
  const dx = svgLen/2 - gLen*scale / 2;
  svg.attr('transform', `translate(${dx}, ${margin.top})scale(${scale})`);
}

//按时间对轨迹聚类
function trajTimeCluster(peoSet, trajNum = 12) {
  const trajs = new Map(),
      interval = 24 * 3600 / trajNum;
  //遍历每个人
  for(let i = 0; i < peoSet.length; ++ i) {
    const traj = peoSet[i];
    let valtmp = [];
    for (let j = 0; j < trajNum; ++ j) {
      valtmp.push(0);
    }
    let str = '';
    for (let j = 0; j < traj.length; ++ j) {
      const thisTime = new Date(traj[j].time),
          seconds = thisTime.getHours() * 3600 + thisTime.getMinutes() * 60 + 
              thisTime.getSeconds(),
          idx = parseInt(seconds / interval);
      if (idx >= trajNum) console.log('failed !!!');
      valtmp[idx] ++;
      if (traj[j].hasOwnProperty('stoppoint')) {
        str += '[' + idx + ']';
      }
    }
    updateTrajSet(trajs, str, traj, valtmp, trajNum);
  }

  const trajArray = [], reg = /\[\d+\]/g;
  let maxTrajNum = 0, maxCnt = 0, res;
  for (let [trajStr, d] of trajs) {
    trajArray.push({
      name: trajStr,
      cnt: d.data.length,
      val: d.val,
      data: d.data
    })
    maxCnt = Math.max(d.data.length, maxCnt);
    for (let i = 0; i < d.val.length; ++ i) {
      maxTrajNum = Math.max(d.val[i], maxTrajNum);
    }
    while (res = reg.exec(trajStr)) {
      const idx = res[0].split(']')[0].split('[')[1] * 1;
      d.val[idx] = -1;
    }
  }
  trajArray.sort((a, b) => b.cnt - a.cnt);
  return [trajArray, maxCnt, maxTrajNum];
}

function updateTrajSet(set, key, traj, nowVal, trajNum) {
  if (!set.has(key)) {
    const val = [];
    for (let i = 0; i < trajNum; i ++) {
      val.push(0);
    }
    set.set(key, {name: key, cnt: 0, val: val, data: []});
  }
  const preVal = set.get(key).val;
  for (let i = 0; i < nowVal.length; ++ i) {
    preVal[i] += nowVal[i];
  }
  set.get(key).data.push(traj);
}

function showChooseTrajs(trajSet) {
  console.log(trajSet, ' **** ')
  const sitemap = DataManager.sites,
      data = [];
  for (let i = 0; i < trajSet.length; ++ i) {
    const latlngs = [];
    for (let j = 0; j < trajSet[i].length; ++ j) {
      const site = sitemap.get(trajSet[i][j].site * 1);
      latlngs.push([site.latitude, site.longitude]);
    }
    data.push(latlngs);
  }
  // MapRender.groupTraj.shallow();
  MapRender.matrixTraj.setStyle({
    color: MapRender.groupTraj.getOptions().color
  });
  MapRender.matrixTraj.setLatLngs(data);
}