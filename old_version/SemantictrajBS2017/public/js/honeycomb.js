import $ from 'jquery';
import * as d3 from 'd3';
import * as DataManager from './datamanager.js';
import * as myKMeans from './mykmeans.js';
import {FastPriorityQueue} from './fastpriorityqueue.js';
import '../css/honeycomb.css';
import * as SemanticList from './semanticlist.js';
import * as MapRender from './maprender.js';
import ClipperLib from './clipper.js';
import * as RenderSemtraj from './rendersemtraj.js';
import * as HoneyCombPath from './honeycombpath.js';

export const r = 20;
let hexNodes = d3.quadtree();
let minQueue, minQueue2;
export const Sqrt3 = 1.732; //Math.sqrt(3) * 1;
export const hexagonD = [[2, 0], [1, Sqrt3], [-1, Sqrt3], [-2, 0], [-1, -Sqrt3], [1, -Sqrt3]];
//const hexagonD2 = [[0, -2*Sqrt3/3], [-1, -Sqrt3/3], [-1, Sqrt3/3], [0, Sqrt3*2/3], [1, Sqrt3/3], [1, -Sqrt3/3]];
export const hexagonD2 = [[0, -1.155], [-1, -0.577], [-1, 0.577], [0, 1.155], [1, 0.577], [1, -0.577]];
const hexagonDr = [];
for (let i = 0; i < 6; i ++) {
  hexagonDr.push([hexagonD[i][0]*r, hexagonD[i][1]*r]);
}

export let quad = d3.quadtree()
    .x(d => d.x)
    .y(d => d.y)

export const centerX = 300, centerY = 400;
export const paddingC = 4, paddingT = 0;

const clusterColor = d3.scaleOrdinal()
    .domain([0, 1, 2, 3, 4, 5, 6, 7, 8])
    .range(['#e41a1c','#377eb8', '#4daf4a', '#984ea3', '#ff7f00', '#ffff33', 
        '#a65628', '#f781bf', '#999999']);

export let currentEvent, currentLevel;

const clusterZoom = d3.zoom()
  .scaleExtent([-100, 100])
  .on('zoom', function() {
    let t = d3.event.transform;
    currentEvent = d3.event;
    g.attr('transform', `translate(${t.x}, ${t.y})scale(${t.k})`);
    g2.attr('transform', `translate(${t.x}, ${t.y})scale(${t.k})`);
    g3.attr('transform', `translate(${t.x}, ${t.y})scale(${t.k})`);
    currentLevel = checkLevel();
    const path = d3.event.sourceEvent.path;
    if (path.length == 10) {
      clusterPopup(path[0]);
    }
  })

// export const svg = d3.select('#bottomrow')
//     .append('svg')
//     .attr('id', 'honeycomb')
//     .call(clusterZoom)
// export let g = svg.append('g')
//     .attr('class', 'honeycomb_group')
//     .on('mouseleave', function() {
//       if (d3.event.toElement && d3.event.toElement.tagName == 'svg') {
//         MapRender.clusterTraj.setLatLngs([]);
//         g2.selectAll('.cluster_border_mouseover').remove();
//         g3.selectAll('.cluster_popup').remove();
//       }
//     }), 
//     g2 = svg.append('g')
//         .attr('class', 'honeycomb_other'), 
//     g3 = svg.append('g')
//         .attr('class', 'honeycomb_no_zoom');

export const line = d3.line()
    .defined(d => d)
    .x(d => d[0])
    .y(d => d[1]);

export function showClusters() {
  const clusters = myKMeans.KMeans.clusters,
      centers = myKMeans.KMeans.centroids,
      map = DataManager.reverseMap;
  const data = getClustersData(clusters, map, centers);
  HoneyCombPath.getHexagonPath();
  if (!data) {
    return;
  }
  console.log('data done!!!');
  const cData = g.selectAll('Cluster')
      .data(data);
  const cluster = cData.enter()
      .append('g')
      .classed('Cluster', true)
      .attr('zoomLevel', 0)
      .attr('id', o => 'Cluster' + o.parent)
      .on('mouseleave', function() {
      })
  let topicClusterData = cluster.selectAll('.topic_cluster')
      .data(o => o.children);
  const topicCluster = topicClusterData.enter()
      .append('g')
      .classed('topic_cluster', true)
  const topicBorder = topicCluster.append('path')
      .classed('topic_border', true)
      .attr('d', o => line(o.border))
      .style('fill', 'none');
  cluster.append('path')
      .attr('d', o => line(o.border))
      .classed('cluster_border', true)
      .style('stroke', (o, i) => '#A9A9A9')
      .style('stroke-width', 2)
      .style('fill', 'none')
  let clusterElement = topicCluster.selectAll('.cluster_element')
      .data(o => o.data)
      .enter()
      .append('path')
      .classed('cluster_element', true)
      .attr('id', o => 'cluster_element' + o.id)
      .attr('pos', o => o.x + ',' + o.y)
      // .attr('pathA', o => HoneyCombPath.hexagonPath.get(o.id).path)
      .attr('d', o => line(getHexbin2(r, o.x, o.y)))
      // .attr('d', o => {
      //   const hpath = HoneyCombPath.hexagonPath.get(o.id),
      //       path = hpath.path,
      //       reg = /\{[0-9]\}/g;
      //   let x = 0, y = 0, res;
      //   while(res = reg.exec(path)) {
      //     const idx = res[0].split(/\{|\}/g)[1]*1;
      //     x += hexagonD[idx][0] / 2 * 10;
      //     y += hexagonD[idx][1] / 2 * 10;
      //   }
      //   return line(getHexbin2(r-3, hpath.x + x, hpath.y + y));
      // })
      .style('fill', o => {
        let pat = map.get(o.id*1);
        let sites = pat.split(',').filter(o => o.indexOf('-') >= 0).map(o => o*(-1));
        let vecs = [];
        for (let j = 0; j < sites.length; j ++) {
          let now = DataManager.siteTopic.get(sites[j] + '');
          let node = new Map();
          for (let i = 0; i < now.length; i ++) {
            node.set(now[i].topic, now[i].val);
          }
          vecs.push(node);
        }
        let d = DataManager.getdistance(vecs);
        return DataManager.redScale(Math.sqrt(d));
      })
      .on('mouseenter', function() {
        if (currentEvent) {
          onElementZoom(this);
        }
        clusterPopup(this);
      })
      .on('mouseleave', function() {
      })
      .on('click', function() {
        SemanticList.onClick(this, clusters, map);
      })
}

function checkLevel() {
  if (currentEvent.transform.k - 1 < 0) {
    return 0;
  } else if (currentEvent.transform.k - 2 < 0) {
    return 1;
  } else {
    return 2;
  }
}

function onElementZoom(node) {
  // const parent = d3.select($(this).parents().eq(1).get(0));
  // const thisData = parent.data()[0];
  // parent.attr('zoomLevel', checkLevel());
  // console.log('checklevel: ', checkLevel())
  // if (checkLevel() == 1) {
  // }
  // currentEvent = '';
}

// ----------------------------------------------
let preMouseStr = '';

function clusterPopup(node) {
  const clusters = myKMeans.KMeans.clusters,
      map = DataManager.reverseMap,
      parent = d3.select($(node).parents().eq(1).get(0)),
      thisData = $.extend(true, {}, parent.data()[0]),
      parentId = thisData.parent;
  if (!thisData) {
    return ;
  }
  g2.selectAll('.cluster_border_mouseover').remove();
  g3.selectAll('.cluster_popup').remove();
  if (currentLevel == 0) {
    g3.selectAll('.level3semtraj').remove();
    g2.append('path')
        .classed('cluster_border_mouseover', true)
        .attr('d', o => line(thisData.border))
    if (preMouseStr != thisData.parent) {
      clusterOnMouseEnter(parent.data()[0], clusters, map, 0);
      preMouseStr = thisData.parent;
    }
    let nowData = d3.select(node).data();
    let thisCenter = getCenter(thisData.bounds);
    RenderSemtraj.renderPopup(thisCenter.x, thisCenter.y, thisData.centerData);
  } else if (currentLevel == 1) {
    g3.selectAll('.level3semtraj').remove();
    const topicData = d3.select($(node).parent().get(0)).data()[0];
    const nowData = d3.select(node).data();
    g2.append('path')
        .classed('cluster_border_mouseover', true)
        .attr('d', o => line(topicData.border))
    // if (preMouseStr != parentId + '-' + topicData.center.val+topicData.center.x+topicData.center.y) {
    //   clusterOnMouseEnter(d3.select($(node).parents().eq(0).get(0)).data()[0], clusters, map, 0);
    //   preMouseStr = parentId + '-' + topicData.center.val+topicData.center.x+topicData.center.y;
    // }
    RenderSemtraj.renderPopup(topicData.center.x, topicData.center.y, 
        topicData.centerData);
  } else if (currentLevel == 2) {
    const nodeData = d3.select(node).data(),
        pat = map.get(nodeData[0].id*1),
        data = pat.split(',').map(o => o * 1);
    let num = 0;
    for (let i = 0; i < data.length; i ++) {
      if (data[i] < 0) {
        data[i] = {
          name: DataManager.siteTopic.get((data[i]*-1) + '')[0].topic,
          id: data[i]*-1,
          stoppoint: num++
        }
      }
    }
    RenderSemtraj.showLevel3();
    RenderSemtraj.renderHighPopup(nodeData[0].x, nodeData[0].y, data);
  }
}

function getCenter(bounds) {
  let x = (bounds[0][0] + bounds[0][1]) / 2;
  let y = (bounds[1][0] + bounds[1][1]) / 2;
  let dx = bounds[0][1] - bounds[0][0];
  let dy = bounds[1][1] - bounds[1][0];
  return {x: x, y: y, dx: dx, dy: dy};
};

function getClustersData(clusters, map, centers) {
  let Data = [], 
      pre = {x: centerX, y: centerY}, 
      pre2 = {x: centerX, y: centerY};
  // hexNodes.clear();
  hexNodes = d3.quadtree();
  minQueue = new FastPriorityQueue();
  minQueue2 = new FastPriorityQueue();
  quad = d3.quadtree()
      .x(d => d.x)
      .y(d => d.y);
  let sum = 0;
  for (let i = 0; i < clusters.length; i ++) {
    let num = clusters[i].length;
    if (num == 0) {
      continue;
    }
    let allNodes = [];
    let ob = [];
    let topicCluster = clusterByTopic(clusters[i], map);
    minQueue = new FastPriorityQueue();  // 每次对一个CLuster的topic划分必须清空
    for (let [key, value] of topicCluster) {
      let topicLevel = [];
      let nodes = getHexagonNodes2(pre.x, pre.y, r, value.length, i, 1, 1);
      updateMinQueue(nodes, pre.x, pre.y, centerX, centerY, 1, 1);
      if (nodes.length != value.length) {
        console.log('get layout failed!!    restart')
        myKMeans.clusterDataByKMeans();
        return ;
      }
      for (let j = 0; j < value.length && j < nodes.length; j ++) {
        topicLevel.push({id: value[j], x: nodes[j].x, y: nodes[j].y});
        quad.add({id: value[j], x: nodes[j].x, y: nodes[j].y, identify: 
            i + '@' + key});
      }
      allNodes = [...allNodes, ...nodes];
      let border = getHexagonborder(nodes, r);
      ob.push({topic:key, data:topicLevel, border: border, nodes: nodes, 
          centerData: topicCenterData(topicLevel, map),
          bounds: getBounds(nodes, r), center: nodes[parseInt(nodes.length/2)]});
      pre.x = -1, pre.y = -1;
      while(minQueue.size() > 0) {
        let now = minQueue.pop();
        if (!hasHexNodes(now.x, now.y) && !checkGenerateHole(now.x, now.y, r)
            && !checkIntersection(now.x, now.y)) {
          pre.x = now.x;
          pre.y = now.y;
          break;
        }
      }
      if (pre.x == -1 || pre.y == -1) {
        console.log('Get nearst Failed 1: ');
      }
    }
    pre.x = -1, pre.y = -1;
    while(minQueue2.size() > 0) {
      let now = minQueue2.pop();
      if (!hasHexNodes(now.x, now.y) && !checkGenerateHole(now.x, now.y, r)
          && !checkIntersection(now.x, now.y)) {
        pre.x = now.x;
        pre.y = now.y;
        pre2.x = now.x;
        pre2.y = now.y;
        break;
      }
    }
    let border = getHexagonborder(allNodes, r);
    Data.push({parent: i, children:ob, border: border, nodes: allNodes,
        centerData: KMCenterData(centers[i]),
        bounds: getBounds(allNodes, r), center: allNodes[allNodes.length/2]});
    if (pre.x == -1 || pre.y == -1) {
        console.log('Get nearst node Failed !!!!!', pre.x, pre.y);
    }
    console.log('iteration .........', i, clusters.length);
  }
  console.log('cluster Data done !!');
  return Data;
};

function clusterByTopic(aCluster, map) {
  let newC = new Map();
  for (let i = 0; i < aCluster.length; i ++) {
    let id = aCluster[i]*1;
    let d = map.get(id);
    let sites = d.split(',').map(o => o*1).filter(o => o < 0);
    let types = [];
    for (let j = 0; j < sites.length; j ++) {
      let siteId = sites[j] * -1;
      types.push(DataManager.siteTopic.get(siteId + '')[0].topic);
    }
    types.sort();
    if (!newC.has(types.toString())) {
      newC.set(types.toString(), []);
    }
    newC.get(types.toString()).push(id);
  }
  let num = 0;
  for (let [k, v] of newC) {
    num += v.length;
  }
  if (num != aCluster.length) {
    console.log('clusterByTopic failed  !!!!!!!!!!!!!!!!*****************************');
  }
  return newC;
};

function topicCenterData(aTopic, map) {
  let ans = [];
  let num =  0;
  for (let i = 0; i < aTopic.length; i ++) {
    let id = aTopic[i].id * 1;
    let d = map.get(id);
    let sites = d.split(',').map(o => o*1);
    if (sites[0] < 0) sites.splice(0, 0, 0);
    if (sites[sites.length-1] < 0) sites.push(0);
    for (let j = 0; j < sites.length; j ++) {
      if (sites[j] >= 0)
        ans[j] = ans[j] ? ans[j] + sites[j] : sites[j];
      else {
        if (!ans[j]) {
          ans[j] = {
            name: DataManager.siteTopic.get((sites[j]*-1) + '')[0].topic,
            stoppoint: num ++,
            site: sites[j]*-1
          }
        }
      }
    }
  }
  for (let i = 0; i < ans.length; i += 2) {
    ans[i] = parseInt(ans[i] / aTopic.length);
  }
  if (ans[0] == 0) ans.splice(0, 1);
  if (ans[ans.length-1]) ans.pop();
  return ans;
}

function KMCenterData(center) {
  let start = 0;
  let ans = [];
  let num = 0;
  while(start < center.length) {
    if (center[start] > 1) {
      ans.push(parseInt(center[start]));
    }
    start += 3;
    let map = new Map();
    [...DataManager.topic2WordIndex].sort((a, b) => a[1] - b[1]).forEach(
        (d, j) => {
      const name = d[0];
      let old = map.get(name) || 0;
      map.set(name, Math.max(old, center[start]));
      start ++;
    });
    num ++;
    let res = [...map].sort((a, b) => b[1] - a[1]);
    ans.push({name: res[0][0], stoppoint: num});
  }
  let a = parseInt(Math.random()*10) % 6; //  假的
  if (a > 0) ans.push(a);
  return ans;
};

function getHexagonNodes2(x, y, r, num, id=0, height = 1, width = 1) {
  let queue = new FastPriorityQueue();
  let ans = [];
  queue.add({x:x, y:y, val: getDis(x, y, x, y, width, height)});
  if (hasHexNodes(x, y)) {
    console.log('BFS Failed *****************************')
  }
  updateHexNodes(x, y, id);
  const holeQueue = [];
  while (queue.size()+ans.length < num && queue.size() > 0) {
    let node = queue.pop();
    ans.push(node);
    let cnt = 0;
    for (let i = 0; i < 6; i ++) {
      let nx = hexagonD[i][0] * r + node.x;
      let ny = hexagonD[i][1] * r + node.y;
      if (!hasHexNodes(nx, ny) && queue.size()+ans.length < num && 
          !checkIntersection(nx, ny)) {
        if (checkGenerateHole(nx, ny, r)) {
          holeQueue.push([nx, ny]);
          continue;
        }
        updateHexNodes(nx, ny, id);
        queue.add({x: nx, y:ny, val: getDis(nx, ny, x, y, width, height)});
      }
      if (queue.size()+ans.length == num) {
        break;
      }
    }
    // for (let i = 0; i < holeQueue.length && queue.size()+ans.length < num; i ++) {
    //   let pos = holeQueue[i];
    //   if (!hasHexNodes(pos[0], pos[1]) && checkGenerateHole(pos[0], pos[1], r)) {
    //     updateHexNodes(pos[0], pos[1], id);
    //     queue.add({x: pos[0], y: pos[1], val: getDis(pos[0], pos[1], x, y, width, height)});
    //   }
    // }
    if (queue.size()+ans.length == num) {
      break;
    }
  }
  while(queue.size() > 0) {
    let node = queue.pop();
    ans.push(node);
  }
  return ans;
};

//x,y为要加入的点， 当且仅当它的周围存在两个不连续的非加入点时，蜂窝图中会形成空腔
function checkGenerateHole(x, y, r) {
  let startN = 0;
  for (let i = 0; i < 6; i ++) {
    let nx = hexagonD[i][0] * r + x,
        ny = hexagonD[i][1] * r + y,
        prex = hexagonD[(i-1+6)%6][0] * r + x,
        prey = hexagonD[(i-1+6)%6][1] * r + y;
    if (!hasHexNodes(prex, prey) && hasHexNodes(nx, ny)) {
      startN ++;
    }
  }
  if (startN > 1) {
    return true;
  }
  return false;
}

function updateMinQueue(ans, x1, y1, x2, y2, width, height) {
  const allNodes = [];
  for (let i = 0; i < ans.length; i ++) {
    allNodes.push([ans[i].x, ans[i].y]);
  }
  let hull = d3.polygonHull(allNodes);
  if (!hull && allNodes.length < 3) {
    hull = allNodes;
  }
  if (hull) {
    for (let i = 0; i < hull.length; i ++) {
      for (let j = 0; j < 6; j ++) {
        let nx = hexagonD[j][0] * r + hull[i][0];
        let ny = hexagonD[j][1] * r + hull[i][1];
        const ox0 = paddingC * hexagonD[j][0],
            oy0 = paddingC * hexagonD[j][1] ,
            ox1 = paddingT * hexagonD[j][0] ,
            oy1 = paddingT * hexagonD[j][1] ;
        if (hasHexNodes(nx, ny)) {
          continue;
        }
        if (!checkIntersection(nx + ox0, ny + oy0)) {
          const val = getDis(nx + ox0, ny + oy0, x2, y2, width, height);
          minQueue2.add({x: nx+ox0, y: ny + oy0, val: val});
        }
        if (!checkIntersection(nx + ox1, ny + oy1)) {
          const val = getDis(nx + ox1, ny + oy1, x1, y1, width, height);
          minQueue.add({x: nx + ox1, y: ny + oy1, val: val});
        }
      }
    }
  }
}

function xyToString(x, y) {
  return `${x},${y}`;
};

function aToString(a) {
  return xyToString(a[0], a[1]);
}

function checkIntersection(x0, y0) {
  const nodes = [],
      radius = (r + paddingC)*2 * 2 * Sqrt3 / 3,
      x1 = x0 - radius,
      y1 = y0 - radius,
      x2 = x0 + radius,
      y2 = y0 + radius;
  hexNodes.visit(function(node, x3, y3, x4, y4) {
    if (!node.length) {
      do {
        const d = node.data;
        if (d[0] >= x1 && d[0] <= x2 && d[1] >= y1 && d[1] <= y2)
            nodes.push({x: d[0], y: d[1]});
      } while(node = node.next);
    }
    return x3 > x2 || y3 > y2 || x4 < x1 || y4 < y1;
  })
  if (nodes.length == 0) {
    return 0;
  }
  nodes.push({x: x0, y: y0});
  const nodesArray = getAllHexagonBorders(nodes, r);
  const hexagons = new ClipperLib.Paths();
  const ans = new ClipperLib.Paths();
  for (let i = 0; i < nodesArray.length - 1; i ++) {
    const hexagon = new ClipperLib.Path();
    for (let j = 0; j < nodesArray[i].length; j ++) {
      hexagon.push(new ClipperLib.DoublePoint(nodesArray[i][j][0], 
          nodesArray[i][j][1]));
    }
    if (ClipperLib.JS.AreaOfPolygon(hexagon) < 0)
    {
      hexagon.reverse();
    }
    hexagons.push(hexagon);
  }
  const clip = new ClipperLib.Paths(),
      len = nodesArray.length,
      aClipPath = new ClipperLib.Path();
  for (let j = 0; j < nodesArray[len-1].length; j ++) {
    aClipPath.push(new ClipperLib.DoublePoint(nodesArray[len-1][j][0],
        nodesArray[len-1][j][1]));
  }
  clip.push(aClipPath);
  const clipper = new ClipperLib.Clipper();
  clipper.AddPaths(hexagons, ClipperLib.PolyType.ptSubject, true);
  clipper.AddPaths(clip, ClipperLib.PolyType.ptClip, true);
  const succeeded = clipper.Execute(ClipperLib.ClipType.ctIntersection, ans, ClipperLib.PolyFillType.pftNonZero, ClipperLib.PolyFillType.pftNonZero);
  if (ans.length > 0) {
    return 1;
  } else {
    return 0;
  }
}

function getAllHexagonBorders(nodes, r) {
  const nodesArray = [];
  for (let i = 0; i < nodes.length; i ++) {
    nodesArray.push([]);
    for (let j = 0; j < 6; j ++) {
      let nx = nodes[i].x + hexagonD2[j][0] * r;
      let ny = nodes[i].y + hexagonD2[j][1] * r;
      nodesArray[i].push([nx.toFixed(2)*1, ny.toFixed(2)*1]);
    }
    nodesArray[i].push([(nodes[i].x + hexagonD2[0][0]*r).toFixed(2)*1, 
        (nodes[i].y + hexagonD2[0][1]*r).toFixed(2)*1]);
  } 
  return nodesArray;
}

function getHexagonborder(nodes, r) {
  // use Clipper Lib
  let ans = convergeHexagon(getAllHexagonBorders(nodes, r));
  ans.push(ans[0]); //首尾相连
  // console.log(ans, ' ----------- ');
  return ans;
};

function convergeHexagon(nodes) {
  const hexagons = new ClipperLib.Paths();
  const ans = new ClipperLib.Paths();
  const ans2 = new ClipperLib.Paths();
  for (let i = 0; i < nodes.length; i ++) {
    const hexagon = new ClipperLib.Path();
    for (let j = 0; j < nodes[i].length; j ++) {
      hexagon.push(new ClipperLib.DoublePoint(nodes[i][j][0], nodes[i][j][1]));
    }
    if (ClipperLib.JS.AreaOfPolygon(hexagon) < 0) {
      hexagon.reverse();
    }
    hexagons.push(hexagon);
  }
  const clipper = new ClipperLib.Clipper();
  clipper.AddPaths(hexagons, ClipperLib.PolyType.ptSubject, true);
  const succeeded = clipper.Execute(ClipperLib.ClipType.ctUnion, ans, ClipperLib.PolyFillType.pftNonZero, ClipperLib.PolyFillType.pftNonZero);
  const co = new ClipperLib.ClipperOffset(1, 0.250);
  co.AddPaths(ans, ClipperLib.JoinType.jtRound, ClipperLib.EndType.etClosedPolygon);
  co.Execute(ans2, 1);
  if (ans2.length > 1) {
    console.log('Converge Hexagon Failed!!');
    for (let i = 1; i < ans2.length; i ++) {
      if (ans2[i].length > ans2[0].length) {
        ans2[0] = ans2[i];
      }
    }
  }
  const border = [];
  for (let i = 0; i < ans2[0].length; i ++) {
    border.push([ans2[0][i].X, ans2[0][i].Y]);
  }
  return border;
}

function getBounds(list) {
  let bd = [[1e25, -1e25], [1e25, -1e25]];
  for (let i = 0; i < list.length; i ++) {
    for (let j = 0; j < 6; j ++) {
      let nx = list[i].x*1 + hexagonD[j][0] * r;
      let ny = list[i].y*1 + hexagonD[j][1] * r;
      bd[0][0] = Math.min(bd[0][0], nx);
      bd[0][1] = Math.max(bd[0][1], nx);
      bd[1][0] = Math.min(bd[1][0], ny);
      bd[1][1] = Math.max(bd[1][1], ny);
    }
  }
  return bd;
}; 

function getHexbin2(r, x, y, idx) {
  let now = [];
  for (let i = 0; i < 6; i ++) {
    now.push([x + hexagonD2[i][0]*r, y + hexagonD2[i][1]*r]);
  }
  if (idx >= 0 && idx < 6) {
    return now[idx];
  } else {
    return now;
  }
};

function updateHexNodes(x, y, id = 0) {
  // hexNodes.set(xyToString(x, y), id);
  hexNodes.add([x, y]);
};

function hasHexNodes(x, y, r = 5.0) {
  // return hexNodes.has(xyToString(x, y));
  return hexNodes.find(x, y, r);
};

function getHexagonXY(x, y, ox, oy, r=1) {
  return {x: x+ox*r, y: y+oy*r};
};
function getDis(x0, y0, x1, y1, width, height) {
  return Math.abs((x0-x1)/width) + Math.abs((y0-y1)/height);
}

const colorFunc = d3.scaleOrdinal(d3.schemeCategory20c);

function clusterOnMouseEnter(o, clusters, map, level, parent) {
  let sitemap = DataManager.sites;
  let data, color;
  let stopData;
  if (level == 0) {
    let clusterId = o.parent * 1;
    color = colorFunc(clusterId);
    data = getTrajData(clusters[clusterId], map);
    stopData = getStopData(clusters[clusterId], map);
  } else if (level == 1) {
    let ids = [];
    for (let i = 0; i < o.data.length; i ++) {
      ids.push(o.data[i].id);
    }
    data = getTrajData(ids, map);
    stopData = getStopData(ids, map);
    color = colorFunc(parent);
  } else if (level == 2) {
    let ids = [o.id];
    data = getTrajData(ids, map);
    stopData = getStopData(ids, map);
    color = colorFunc(parent);
  }
  // MapRender.clusterTraj.setLatLngs(data)
  //     .setStyle(MapRender.TRAJ).setStyle({weight:1});
  // MapRender.clusterStop.setLatLngs(stopData);
  MapRender.trajs.setLatLngs([]);
  MapRender.stops.setLatLngs([]);
}

function getTrajData(ids, map) {
  let sitemap = DataManager.sites;
  let data = [], sites = [];
  for (let i = 0; i < ids.length; i ++) {
    let d = map.get(ids[i]);
    let trajsdata= DataManager.trajPatternSetComplete.get(d);
    for (let atraj of trajsdata) {
      let latlngs = [];
      for (let sample of atraj) {
        if(sitemap.get(sample.site*1)==undefined){
          continue ;
        }
        latlngs.push([sitemap.get(sample.site*1).latitude,sitemap.get(sample.site*1).longitude]);
        sites.push([sitemap.get(sample.site*1).latitude,sitemap.get(sample.site*1).longitude,1]);
      }
      if(latlngs.length>1)
        data.push(latlngs);
    }
  }
  return data;
};

function getStopData(ids, map) {
  let sitemap = DataManager.sites;
  let sites = [];
  for (let i = 0; i < ids.length; i ++) {
    let d = map.get(ids[i]);
    let trajsdata = DataManager.trajPatternSetComplete.get(d);
    for (let atraj of trajsdata) {
      for (let sample of atraj) {
        if(sitemap.get(sample.site*1)==undefined){
          continue ;
        }
        if (sample.isStop == false) {  // 判断停留点
          continue;
        }
        sites.push([sitemap.get(sample.site*1).latitude,sitemap.get(sample.site*1).longitude,1]);
      }
    }
  }
  return sites;
}