import $ from 'jquery';
import * as d3 from 'd3';
import * as DataManager from './datamanager.js';
import * as myKMeans from './mykmeans.js';
import * as MapRender from './maprender.js';
import * as HoneyComb from './honeycomb.js';
import * as ShowMap from './showmap.js';
import * as TrajMatrix from './trajmatrix.js';
import '../css/semanticlist.css';

export let div_;
const trajList=[];
const slList = [];
let slId = 0;
const chooseTraj = [];
const chooseStop = [];

export function onClick(node, clusters, map) {
  let parent = d3.select($(node).parents().eq(1).get(0));
  let thisData = parent.data()[0];
  let thisLevel = HoneyComb.currentLevel;
  // if (thisLevel == 0) {
  //   let isSelect = parent.classed('ClusterClicked');
  //   isSelect = !isSelect;
  //   parent.classed('ClusterClicked', isSelect) 
  //       .selectAll('.topic_cluster').classed('ClusterClicked', isSelect)
  //       .selectAll('.cluster_element').classed('ClusterClicked', isSelect);
  // } else if (thisLevel == 1) {
  //   let thisLevelParent = d3.select($(node).parent().get(0));
  //   let isSelect = thisLevelParent.classed('ClusterClicked');
  //   isSelect = !isSelect;
  //   thisLevelParent.classed('ClusterClicked', isSelect)
  //       .selectAll('.cluster_element').classed('ClusterClicked', isSelect);
  // } else if (thisLevel == 2) {
  //   let isSelect = d3.select(node).classed('ClusterClicked');
  //   isSelect = !isSelect;
  //   d3.select(node).classed('ClusterClicked', isSelect);
  // }
  console.log(thisData, ' ********  ')
  const trajs = TrajMatrix.getTrajData(parent, thisData, map);
  TrajMatrix.showSemanticList(trajs);
  // updateLists(parent, thisData, map);
  // updateTrajAndStop(parent, thisData, map);
  // showChooseTrajStop();
  // updateToView();
};

let changeId = -1;

function updateLists(parent, parentData, map) {
  let thisId = parentData.parent;
  let list = slList;
  let pattern = DataManager.pattern;
  changeId = thisId;   // 每次都修改一次即可
  list[thisId] = {clusterId: thisId, childrenData: []};
  parent.selectAll('.topic_cluster').selectAll('.cluster_element').each(function(d, i) {
    let isSelect = d3.select(this).classed('ClusterClicked');
    if (!isSelect) {
      return;
    }
    let thisData = d3.select(this).data();
    let pat = map.get(thisData[0].id*1);
    let thisnode = $.extend(true, [], pattern.get(pat).data);
    let aData = pat.split(',').map(o => o*1);
    for (let j = 0 ; j < thisnode.length; j ++) {   //n^2
      if (thisnode[j].hasOwnProperty('stoppoint')) {
        aData[aData.indexOf(thisnode[j].site*(-1))] = thisnode[j];
      }
    }
    aData.x = 0;
    aData.y = 0;
    aData.id = thisData[0].id * 1;
    list[thisId].childrenData.push(aData);
  });
  if(list[thisId].childrenData.length == 0) {
    slList.splice(thisId, 1);
  }
};

const colors = ['#e41a1c', '#377eb8', '#4daf4a', '#984ea3', '#ff7f00', '#ffff33', '#a65628', '#f781bf', '#999999'];
function updateTrajAndStop(parent, parentData, map) {
  let thisId = parentData.parent;
  let pattern = DataManager.pattern;
  let ids = [];
  parent.selectAll('.topic_cluster').selectAll('.cluster_element').each(function(d, i) {
    let isSelect = d3.select(this).classed('ClusterClicked');
    if (!isSelect) {
      return;
    }
    let thisData = d3.select(this).data();
    ids.push(thisData[0].id*1);
  });
  if (ids.length == 0) {
    let color = chooseTraj[thisId].color;
    colors.push(color);
    chooseTraj.splice(thisId, 1);
    chooseStop.splice(thisId, 1);
  } else {
    let len = colors.length;
    let {trajs: trajs, sites: sites} = getTrajStopData(ids, map);
    chooseTraj[thisId] = trajs;
    chooseTraj[thisId].show = true;
    chooseTraj[thisId].color = colors[len-1];
    if (len > 1) {
      colors.pop();
    }
    chooseStop[thisId] = sites;
  }
};

function getTrajStopData(ids, map) {
  let sitemap = DataManager.sites;
  let data = [], sites = [];
  for (let i = 0; i < ids.length; i ++) {
    let d = map.get(ids[i]);
    let trajsdata = DataManager.trajPatternSetComplete.get(d);
    for (let atraj of trajsdata) {
      let latlngs = [];
      for (let sample of atraj) {
        if (!sitemap.get(sample.site*1)) {
          continue ;
        }
        latlngs.push([sitemap.get(sample.site*1).latitude, 
            sitemap.get(sample.site*1).longitude]);
        if (sample.isStop) {
          sites.push([sitemap.get(sample.site*1).latitude,
              sitemap.get(sample.site*1).longitude,1]);
        }
      }
      if(latlngs.length>1)
        data.push(latlngs);
    }
  }
  return {trajs: data, sites: sites};
};

function showChooseTrajStop() {
  let ct = chooseTraj;
  let cs = chooseStop;
  let mct = MapRender.clickedTraj, mcs = MapRender.clickedStop;
  for (let i = 0; i < mct.length; i ++) {
    mct[i].setLatLngs([]);
  }
  for (let i = 0; i < mcs.length; i ++) {
    mcs[i].setLatLngs([]);
  }
  mcs.length = 0;
  mct.length = 0;
  for (let i = 0; i < ct.length; i ++) {
    if (!ct[i]) {
      continue;
    }
    if (!ct[i].show) {
      continue;
    }
    let tmp = L.polyline([], MapRender.TRAJ).addTo(ShowMap.map);
    tmp.setLatLngs(ct[i]).setStyle({weight:0.8,opacity:0.8, color:ct[i].color});
    mct.push(tmp);
  }
  for (let i = 0; i < cs.len; i ++) {
    if (!cs[i]) {
      continue;
    }
    let tmp = L.heatLayer([], MapRender.STOPPOINT).addTo(ShowMap.map);
    tmp.setLatLngs(cs[i]);
    mcs.push(tmp);
  }
};

const divWidth = 380;
function updateToView() {
  let thisId = changeId;
  let list = slList;
  let thisColumn = d3.select('#semantictraj_list').select('#SLcolumn-' + thisId);
  if (!list[thisId] && thisColumn.node()) {  //  !优先级？
    thisColumn.remove();
    return;
  }
  if (!thisColumn.node()) {
    thisColumn = d3.select('#semantictraj_list').append('div').attr('id', 'SLcolumn-' + thisId)
        .classed('SLcolumn', true);
  }
  thisColumn.selectAll('.SLcolumnRaw').remove();
  thisColumn.selectAll('.SLtitle').remove();
  thisColumn.selectAll('input').remove();
  thisColumn.append('div').classed('SLtitle', true)
      .text('Cluster'+thisId)
      .on('mouseover', function() {
        let id = d3.select(this).text().split('Cluster')[1] * 1;
        // HoneyComb.g2.selectAll('.cluster_border_mouseover').remove();
        const thisData = d3.select('#Cluster' + id).data()[0];
        // HoneyComb.g2.append('path')
        //     .classed('cluster_border_mouseover', true)
        //     .attr('d', o => HoneyComb.line(thisData.border))
      })
      .on('mouseout', function() {
        // HoneyComb.g2.selectAll('.cluster_border_mouseover').remove();
      })
  thisColumn.append("input")
    .attr("type","checkbox")
    .attr("value","")
    .attr("id","clusterCheckbox")
    .attr("data-toggle","checkbox")
    .attr("checked",MapRender.isTrajShow)
    .on("click",function(){
      let is = d3.select(this)._groups[0][0].checked;
      chooseTraj[thisId].show = is;
      showChooseTrajStop();
    })
  let svg = thisColumn.selectAll('.SLcolumnRaw')
      .data(list[thisId].childrenData)
      .enter()
      .append('div')
      .classed('SLcolumnRaw', true)
      .append('svg')
      .classed('SLcolumnRawSvg', true)
  // svg.on('mouseenter', function(o) {
  //   SemanticList.whenMover(this);
  //   let parent = d3.select($('#clusterElement'+o.id).parent().get(0));
  //   d3.select('#clusterElement' + o.id)
  //       .classed('.clusterMouseover', true);
  // })
  // .on('mouseleave', function() {
  //   SemanticList.whenMout(this);
  //   d3.select('#clusterElement' + o.id)
  //       .classed('.clusterMouseover', false);
  // })
  let node = svg.append('g')
      .classed('SLcolumnRawSvgG', true)
  spr(node);
  node.attr('transform', function() {
    let p = d3.select(this).node().getBBox();
    let scale = 1, ox, oy = 40;
    if (p.width > divWidth*0.8) {
      scale = divWidth*0.8/p.width;
    } else {
    }
    ox = (divWidth-p.width*scale) / 2;
    return `translate(${ox}, ${oy})scale(${scale})`;
  })
}
const SLstopwidth = 34;
function spr(node, bgc = 'white', flag = false){ // bgc:background-color
  node.selectAll(".SLstopsiteH")
      .remove();
  node.append("line")
      .attr("y1", o => o.y)
      .attr("y2", o => o.y)
      .attr("x1", o => o.x+calcHeadTail(o, SLstopwidth)[0], flag)
      .attr("x2", o => o.x+calcHeadTail(o, SLstopwidth)[1], flag)
      .style("stroke", "#7B68EE")
      .style("stroke-width", 3);
  let siteDatas = node.selectAll(".SLsitelistEle")
      .data(o => {
        let data = [];
        o.forEach((d,i) => {
          data.push({sum: o.length, data:d, index: i, x: o.x, y: o.y, pos: o.pos[i]});
        })
        return data;
  });
  let now = siteDatas.enter()
      .append("g")
      .attr("class", o => o.data.hasOwnProperty("stoppoint") ? 
          "SLstopsite" : "SLnormalsite")
      .classed("SLsitelistEle", true)
  if (!flag) {
    node.selectAll(".SLstopsite")
        .call(createStop, bgc)
  } else {
    node.selectAll('.SLstopsite')
        .call(createStopHigh, bgc);
  }
  node.selectAll(".SLnormalsite")
      .call(createNormal, bgc);
};

function createStop(node, bgc = 'white', spr) {
  node.selectAll(".SLstopsiteH")
      .remove();
  node.selectAll(".SLcircle")
      .remove();
  node.selectAll('.SLcircle2')
      .remove();
  node.selectAll(".QIPolygon")
      .remove();
  node.selectAll(".circleFlow")
      .remove();
  node.append('circle')
      .classed("SLStop", true)
      .attr('cx', o => o.pos)
      .attr('cy', o => o.y)
      .attr('r', 27)
      .style('fill', bgc)
      .style('stroke', '#3280ff')
      .style('stroke-width', 1)
  node.append("image")
      .attr("class", "SLStop")
      .attr("xlink:href",o => "images/"+ 
          DataManager.siteTopic.get(""+o.data.site)[0].topic.toLowerCase()+ ".svg")
      .attr("x", (o, i) => {
        return o.pos - 30;
      })
      .attr("y", o => o.y - 30)
      .style("opacity", 1)
      .attr('width', 60)
      .attr('height', 60)
};

function createNormal(node, bgc = 'white') {
  node.append('circle')
      .attr('cx', o => o.pos + 8)
      .attr('cy', o => o.y)
      .attr('r', 18)
      .style('stroke', '#3280ff')
      .style('stroke-width', 1)
      .style('fill', bgc);
  node.append("text")
      .attr("x", o => {
        return o.pos + ((o.data+'').length == 2 ? -8 : 0);
      })
      .attr("y", o => {
        return o.y + 10;
      })
      .text(o => o.data)
      .style('font-size', '28px')
      .style('fill', '#3280ff')
};

function calcHeadTail(o, SLstopwidth, flag = false) { // flag true 为HIGH 
  o.pos = [];
  if (!flag) {
    let interval = 60;
    let sum = o.length*1, offset;
    for (let i = 0; i < o.length; i ++) {
      o.pos[i] = i * (interval+SLstopwidth);
    }
    return [8, 8+(sum-1) * (interval+SLstopwidth)];
  } else {
    let interval = 60;
    let sum = o.length*1, offset;
    let cnt = 0;
    for (let i = 0; i < o.length; i ++) {
      o.pos[i] = i * (interval+SLstopwidth);
      if (i > 0 && o[i].hasOwnProperty('stoppoint') && o[i-1].hasOwnProperty('stoppoint')) {
        cnt ++;
        o.pos[i] += 60;
      }
    }
    return [8, 8+(sum-1) * (interval+SLstopwidth) + cnt*60];
  }
};