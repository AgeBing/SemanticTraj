import $ from 'jquery';
import * as d3 from 'd3';
import * as DataManager from './datamanager.js';
import * as myKMeans from './mykmeans.js';
import {FastPriorityQueue} from './fastpriorityqueue.js';
import '../css/groupmap.css';
import * as SemanticList from './semanticlist.js';
import * as MapRender from './maprender.js';
import * as NewSemanticList from './newsemanticlist.js';
import * as TrajMatrix from './trajmatrix.js';
import * as ShowProjection from './showprojection.js';
import * as ShowMap from './showmap.js';
import * as ConfigPanel from './configpanel.js';
// import * as MapRender from './maprender.js';
export const groups = [];
export const standardVec = [];
export const group3topic = [];
export const groupSiteTime = [];
export const avgStandVec = [];
// export const groupColor = ['#8dd3c7', '#bebada','#fb8072','#80b1d3','#fdb462','#b3de69','#fccde5','#d9d9d9','#bc80bd','#ccebc5','#ffed6f', '#ffffb3'];
export const groupColor = [];
for (let i = 0; i < 100; ++ i) {
  groupColor.push('#ef8a62');
}
// export const topicColor = ['#76d6c7','#ff5722','#bfb9dd','#ff776b','#72b2d7','#ffb24f','#a6e153','#ffcae6','#d9d9d9','#c77ac1','#c4edc1','#ffee53', '#b25117'];
export const topicColor = ['#8dd3c7', '#bebada','#fb8072','#80b1d3','#fdb462','#b3de69','#fccde5','#d9d9d9','#bc80bd','#ccebc5','#ffed6f', '#1f78b4', '#fb9a99']
export let groupScale = d3.scaleLinear()
    // .range(['rgb(216, 234, 248)', 'rgb(20, 104, 171)'])
    .range(['rgb(217,217,217)', 'rgb(179,179,179)'])
export let trajShow = [];

const Sqrt3 = 1.732; //Math.sqrt(3) * 1;
const hexagonD = [[2, 0], [1, Sqrt3], [-1, Sqrt3], [-2, 0], [-1, -Sqrt3], [1, -Sqrt3]];
const hexagonD2 = [[0, -2*Sqrt3/3], [-1, -Sqrt3/3], [-1, Sqrt3/3], [0, Sqrt3*2/3], 
    [1, Sqrt3/3], [1, -Sqrt3/3]];
const nodeD = [[1, 0], [0, 1], [-1, 1], [-1, 0], [0, -1], [1, -1]];

const maxR = 50;
const rScale = d3.scaleLinear().range([0, maxR]);
const line = d3.line()
    .defined(d => d)
    .x(d => d[0])
    .y(d => d[1]);

let groupNodes = [];

export function run(patterns) {
  devideGroupByTopics(patterns);
  genarateHex();
  getGroupSiteTime();
  showGroups();
}

function devideGroupByTopics(patterns) {
  groups.length = 0;
  standardVec.length = 0;
  const groupId = new Map();
  const tmp = new Map();
  const topicWeight = DataManager.topic2WordIndex;
  trajShow.length = 0;
  for (let [pat, value] of patterns) {
    let sites = pat.split(',').filter(o => o.indexOf('-') >= 0).map(o => o*(-1));
    //根据最大的topic分组，统计前3名
    const topicArr = [];
    //每个site的前三名
    const g3 = [];
    const vecs = [];
    for (let j = 0; j < sites.length; j ++) {
      // now是降序排序
      let now = DataManager.siteTopic.get(sites[j] + '');
      topicArr.push(now[0].topic);
      g3.push(now.slice(0, 3));
      const node = new Map();
      for (let k = 0; k < now.length; ++ k) {
        node.set(now[k].topic, now[k].val);
      }
      vecs.push(node);
    }
    const topicStr = topicArr.toString();
    if (!groupId.has(topicStr)) {
      let initA = [];
      for (let j = 0; j < sites.length; j ++) {
        initA.push(new Map());
      }
      tmp.set(topicStr, initA);
      groups.push({str: topicStr, patterns:[{pattern: pat, generalTraj: value.data}]});
      groupId.set(topicStr, groups.length - 1);
      standardVec.push([]);
    } else {
      const id = groupId.get(topicStr);
      groups[id].patterns.push({pattern: pat, generalTraj: value.data});
    }
    //计算每个pattern的标准向量
    const id = groupId.get(topicStr);
    const trajVec = [];
    for (let j = 0; j < sites.length; ++ j) {
      const siteVec = [];
      //按照topic排序，确保所有的顺序不变
      //JS 这种傻逼语言 对字符串排序要小心
      const tmpA = [...vecs[j]].sort((a, b) => topicWeight.get(a[0]) - topicWeight.get(b[0]));
      // console.log(tmpA);
      for (let k = 0; k < tmpA.length; ++ k) {
        siteVec.push(tmpA[k][1]);
      }
      trajVec.push(siteVec);
    }
    trajVec.id = id;
    standardVec[id].push(trajVec);
    //更新每个分组的前三名
    const topicG3 = tmp.get(topicStr);
    for (let j = 0; j < sites.length; ++ j) {
      for (let k = 0; k < 3; ++ k) {
        if (!topicG3[j].has(g3[j][k].topic)) {
          topicG3[j].set(g3[j][k].topic, {cnt:1, val:g3[j][k].val});
        } else {
          const d = topicG3[j].get(g3[j][k].topic);
          d.val = (d.cnt * d.val + g3[j][k].val) / (d.cnt + 1);
          d.cnt ++;
        }
      }
    }
  }
  for (let [k, v] of tmp) {
    const id = groupId.get(k);
    group3topic[id] = [];
    for (let i = 0; i < v.length; ++ i) {
      group3topic[id].push([...v[i]].sort((l, r) => r[1].val - l[1].val).slice(0, 3));
    }
  }
  console.log('groups:', groups);
  console.log('g3:', group3topic);
  console.log('standardVec:', standardVec);
  getAvgStandardVev();
}

function showGroupTraj(id) {
  const data = [];
  // MapRender.groupTraj.remove();
  // MapRender.groupTraj.addTo(ShowMap.map);
  for (let i = 0; i < groups[id].patterns.length; ++ i) {
    const pat = groups[id].patterns[i].pattern;
    const trajSet = DataManager.trajPatternSet.get(pat);
    // console.log(trajSet, ' *** ')
    for (let j = 0; j < trajSet.length; ++ j) {
      const latlngs = [];
      for (let k = 0; k < trajSet[j].length; ++ k) {
        const site = DataManager.sites.get(trajSet[j][k].site * 1);
        latlngs.push([site.latitude, site.longitude]);
      }
      data.push(latlngs);
    }
  }
  // console.log('show Data: ', data);
  // MapRender.trajs.shallow();
  MapRender.groupTraj.setStyle({color: groupColor[id]});
  MapRender.groupTraj.setLatLngs(data);
}

function getAvgStandardVev() {
  avgStandVec.length = 0;
  const topicInd = [...DataManager.topic2WordIndex].sort((a, b) => a[1] - b[1]);
  let maxV = 0;
  for (let i = 0; i < standardVec.length; ++ i) {
    avgStandVec.push([]);
    const tmp = [];
    for (let j = 0; j < standardVec[i].length; ++ j) { //pattern
      for (let k = 0; k < standardVec[i][j].length; ++ k) { //stoppoit
        if (!tmp[k]) tmp.push([]);
        for (let m = 0; m < standardVec[i][j][k].length; ++ m) {
          if (j == 0) {
            tmp[k].push(standardVec[i][j][k][m]);
          } else {
            tmp[k][m] += standardVec[i][j][k][m];
          }
        }
      }
    }
    avgStandVec[i] = [];
    for (let j = 0; j < tmp.length; ++ j) {
      const topic = new Map();
      for (let k = 0; k < tmp[j].length; ++ k) {
        tmp[j][k] /= standardVec[i].length;
        topic.set(topicInd[k][0], tmp[j][k]);
      }
      avgStandVec[i].push(topic);
    }
    maxV = Math.max(maxV, DataManager.getdistance(avgStandVec[i]));
  }
  console.log('maxVectorValue:', maxV);
  console.log('avgStandVec:', avgStandVec);
  groupScale.domain([0, maxV]);
}

function getRelPos(x, y) {
  return `${x}#${y}`;
}

function genarateHex() {
  const nodes = [];
  const minPadding = 10;
  for (let i = 0; i < groups.length; ++ i) {
    nodes.push({id: i, r: groups[i].patterns.length});
  }
  nodes.sort((l, r) => r.r - l.r);
  rScale.domain([0, Math.sqrt(nodes[0].r)]);
  for (let i = 0; i < nodes.length; ++ i) {
    nodes[i].r = rScale(Math.sqrt(nodes[i].r));
  }
  const vis = new Map();
  const que = [];
  const ans = [];
  const cwidth = svg.node().getBoundingClientRect().width/2;
  const cheight = svg.node().getBoundingClientRect().height/2;
  que.push({relX:0, relY: 0, x: cwidth, y: cheight, id: nodes[0].id, r: nodes[0].r});
  vis.set(getRelPos(0, 0), 1);
  nodes.reverse();
  nodes.pop();
  while (que.length > 0 && nodes.length > 0 && 
        que.length + ans.length < groups.length) {
    const now = que.shift();
    ans.push(now);
    let next = nodes[nodes.length - 1];
    for (let i = 0; i < 6; ++ i) {
      const relX1 = now.relX + nodeD[i][0],
          relY1 = now.relY + nodeD[i][1],
          dx = hexagonD[i][0] / 2,
          dy = hexagonD[i][1] / 2,
          x1 = now.x + dx * (now.r + next.r + minPadding),
          y1 = now.y + dy * (now.r + next.r + minPadding);
      if (!vis.has(getRelPos(relX1, relY1)) && 
            que.length + ans.length < groups.length) {
        vis.set(getRelPos(relX1, relY1));
        que.push({relX: relX1, relY: relY1, x: x1, y: y1, id: next.id, r: next.r});
        nodes.pop();
        if (nodes.length > 0) {
          next = nodes[nodes.length - 1];
        } else {
          break;
        }
      }
    }
  }
  while (que.length > 0) {
    ans.push(que.pop());
  }
  for (let i = 0; i < ans.length; ++ i) {
    ans[i].path = line(getHexEdge(ans[i].x, ans[i].y, ans[i].r));
  }
  groupNodes = ans;
}

function getHexEdge(x, y, r) {
  let now = [];
  for (let i = 0; i < 6; i ++) {
    now.push([hexagonD2[i][0]*r, hexagonD2[i][1]*r]);
  }
  now.push(now[0]);
  return now;
}

function getGroupSiteTime() {
  groupSiteTime.length = 0;
  for (let i = 0; i < groups.length; ++ i) {
    groupSiteTime.push([]);
    for (let j = 0; j < groups[i].patterns.length; ++ j) {
      const tmpPat = groups[i].patterns[j].pattern,
          tmpTime = DataManager.patternTime.get(tmpPat);
      if (groupSiteTime[i].length == 0) {
        // console.log('groupSite: ---- ', i, tmpTime, tmpPat);
        for (let k = 0; k < tmpTime.length; ++ k) {
          for (let m = 0; m < tmpTime[k].length; ++ m) {
            if (k == 0) {
              groupSiteTime[i].push(tmpTime[k][m]);
            } else {
              groupSiteTime[i][m] += tmpTime[k][m];
            }
          }
        }
      } else {
        for (let k = 0; k < tmpTime.length; ++ k) {
          // if (!groupSiteTime[i][k])console.log('groupSite: ---- ', i, k, groupSiteTime[i], tmpTime);
          for (let m = 0; m < tmpTime[k].length; ++ m) {
            groupSiteTime[i][m] += tmpTime[k][m];
          }
        }
      }
    }
  }
  console.log('groupSiteTime:', groupSiteTime);
}


// --------------------开始绘制---------------------------------
const clusterZoom = d3.zoom()
  .scaleExtent([-100, 100])
  .on('zoom', function() {
    let t = d3.event.transform;
    // currentEvent = d3.event;
    g.attr('transform', `translate(${t.x}, ${t.y})scale(${t.k})`);
  });

const svg = d3.select('#group-map')
    .on('mouseenter', function() {
      MapRender.trajs.shallow();
    })
    .on('mouseleave', function() {
      MapRender.trajs.deep();
      if (!click) {
        MapRender.groupTraj.remove();
      }
    })
    // .append('svg')
    // .attr('id', 'group-map')
    .call(clusterZoom)
let g = svg.append('g')
    .attr('class', 'group-map-g')
    .on('mouseleave', function() {
      if (d3.event.toElement && d3.event.toElement.tagName == 'svg') {
        // MapRender.clusterTraj.setLatLngs([]);
        // g2.selectAll('.cluster_border_mouseover').remove();
        // g3.selectAll('.cluster_popup').remove();
      }
    });
console.log(d3.version, ' ******* ')
let click = false;
function showGroups() {
  // console.log(groupNodes);
  // let tmpData = [];
  // for (let i = 0; i < standardVec.length; ++ i) {
  //   tmpData = tmpData.concat(standardVec[i]);
  //   // ShowProjection.showProjection(standardVec[i], groupColor[i]);
  // }
  // ShowProjection.showProjection(tmpData);
  const data = g.selectAll('hex-group')
      .data(groupNodes);
  const thisGroup = data.enter()
      .append('g')
      .classed('hex-group', true)
      .attr('group-id', d => d.id)
      .attr('transform', d => `translate(${d.x}, ${d.y})`)
      .on('click', function(d, i) {
        click = !click;
        ConfigPanel.setGroupId(d.id);
        d3.select('#pick-a-color-1').select('.current-color')
            .style('background-color', groupColor[d.id]);
        NewSemanticList.showSemanticList(d.id);
        const trajs = TrajMatrix.getTrajDataByGroup(groups[d.id].patterns);
        TrajMatrix.showSemanticList(trajs);
        ShowProjection.showProjection(standardVec[d.id]);
        showGroupTraj(d.id);
      })
      .on('mouseleave', function(d, i) {
        if (!click) {
          NewSemanticList.clean();
          TrajMatrix.clean();
          // MapRender.groupTraj.remove();
          MapRender.trajs.deep();
        }
      })
      .on('mouseenter', function(d, i) {
        if (click) return;
        ConfigPanel.setGroupId(d.id);
        d3.select('#pick-a-color-1').select('.current-color')
            .style('background-color', groupColor[d.id]);
        NewSemanticList.showSemanticList(d.id);
        const trajs = TrajMatrix.getTrajDataByGroup(groups[d.id].patterns);
        TrajMatrix.showSemanticList(trajs);
        showGroupTraj(d.id);
      })
  thisGroup.append('path')
      .classed('group-edge', true)
      .attr('d', d => d.path)
      .style('stroke', d => groupScale(DataManager.getdistance(avgStandVec[d.id])))
      .style('stroke-width', 2)
      .style('fill', d => groupScale(DataManager.getdistance(avgStandVec[d.id])));
  thisGroup.call(renderInner);
}

export function reColor() {
  d3.selectAll('.group-edge')
      .style('fill', d => groupScale(DataManager.getdistance(avgStandVec[d.id])));
}

function renderInner(node) {
  const maxRadius = 45,
      innerRadius = 20,
      outterRadius = 35;
  const angleLinear = d3.scaleLinear()
      .domain([0, groupSiteTime[0].length - 1])
      .range([0, 2 * Math.PI]);
  const rad = d3.scalePow().exponent(0.3)
      .domain([d3.min(groupSiteTime, d => d3.min(d)), d3.max(groupSiteTime, d => d3.max(d))])
      .range([innerRadius, outterRadius]);
  const lineRadial = d3.lineRadial()
      .curve(d3.curveCatmullRomClosed.alpha(0.6))
      .angle(d => angleLinear(d[0]))
      .radius(d => rad(d[1]))

  const g = node.append('g')
      .classed('site-map-inner', true);
  g.append('circle')
      .attr('r', innerRadius)
      .style('fill', 'white')
  const text4 = ['00', '06', '12', '18'];
  const dir4 = [[0, -1], [1, 0], [0, 1], [-1, 0]];
  const off = [[-5, -2], [2, 2], [-6, 10], [-12, 2]]
  for (let i = 0; i < dir4.length; ++ i) {
    const tx = dir4[i][0] * outterRadius + off[i][0],
        ty = dir4[i][1] * outterRadius + off[i][1];
    g.append('text')
        .text(text4[i])
        .attr('x', tx)
        .attr('y', ty)
        .style('fill', 'black')
        .style('font-size', '9px')
  }
  //虚线圆
  for (let i = 0; i < 3; ++ i) {
    const nowRadius = outterRadius - 5 * i;
    g.append('circle')
        .attr('r', nowRadius)
        .style('fill', 'none')
        .style('stroke-dasharray', '1.5,1.5')
        .style('stroke-width', 0.9)
        .style('stroke', 'black')
  }
  g.append('path')
      .classed('site-circle-flow', true)
      .attr('d', d => {
        return lineRadial(groupSiteTime[d.id].map((d, i) => [i, d]));
      })
      .style('fill', 'none')
      .style('stroke', 'black')
  const recW = 30, recH = recW/2;
  const allsite = g.append('g')
      .classed('all-site-3-topic', true)
      // .attr('transform', d => {
      //   const len = group3topic[d.id].length;
      //   const dx = len / 2 * recW,
      //       dy = recH / 2;
      //   return `translate(${-dx}, ${-dy})`
      // })
  const rec = allsite.selectAll('site-3-rec')
      .data(d => {
        const tmp = group3topic[d.id];
        const ans = [];
        for (let i = 0; i < tmp.length; ++ i) {
          let sum = 0, x0 = 0, y0 = 0, x1, y1, x2, y2, y3;
          for (let j = 1; j < tmp[i].length; ++ j) { //只算后两个的比例
            sum += tmp[i][j][1].val;
          }
          x1 = recH;
          y1 = recH;
          y2 = recH - tmp[i][1][1].val / sum * recH;
          y3 = y2 - tmp[i][2][1].val / sum * recH;
          ans.push([]);
          ans[i].push({x: x0, y: y0, width: x1, height: y1, topic: tmp[i][0][0]});
          ans[i].push({x: x1, y: y2, width: y1 - y2, height: y1 - y2, 
              topic: tmp[i][1][0]});
          ans[i].push({x: x1, y: y3, width: y2 - y3, height: y2 - y3, topic: tmp[i][2][0]});
        }
        // console.log(ans, ' --------- ');
        return ans;
      });
  const tcData = rec.enter()
      .append('g')
      .classed('site-3-rec', true)
      .attr('transform', (d, i) => `translate(${i*recW}, 0)`)
      .selectAll('single-rec')
      .data(d => d)
      .enter()
  tcData.append('rect')
      .attr('x', d => d.x)
      .attr('y', d => d.y)
      .attr('width', d => d.width)
      .attr('height', d => d.height)
      .style('fill', d => DataManager.colorRef.get(d.topic))
  tcData.append('image')
      .attr('x', d => d.x)
      .attr('y', d => d.y)
      .attr('width', d => d.width)
      .attr('height', d => d.height)
      .attr('xlink:href', d => 'images/' + d.topic.toLowerCase() + '.svg')
  const w0 = allsite.node().getBBox().width,
      maxw = calTri(innerRadius, recH/2) * 2,
      scale = w0 > maxw * 0.96 ? maxw * 0.96 / w0 : 1,
      dx = -w0 * scale / 2;
  console.log(w0, maxw, ' &&&& ')
  allsite.attr('transform', `translate(${dx}, ${-recH*scale/2})scale(${scale})`)

  g.attr('transform', function(d) {
    return `translate(0, 0)scale(${d.r/maxRadius})`
  });
}

//直角三角形的垂边
function calTri(dia, h) {
  return Math.sqrt(dia * dia - h * h);
}