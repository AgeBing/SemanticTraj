import $ from 'jquery';
import * as d3 from 'd3';
import * as DataManager from './datamanager.js';
import * as myKMeans from './mykmeans.js';
import {FastPriorityQueue} from './fastpriorityqueue.js';
import '../css/showprojection.css';
import * as SemanticList from './semanticlist.js';
import * as MapRender from './maprender.js';
import * as NewSemanticList from './newsemanticlist.js';
import * as TrajMatrix from './trajmatrix.js';
import PCA from 'ml-pca';
import Matrix from 'ml-matrix';
import * as GroupMap from './groupmap.js'

const zoom = d3.zoom()
  .scaleExtent([-100, 100])
  .on('zoom', function() {
    let t = d3.event.transform;
    g.attr('transform', `translate(${t.x}, ${t.y})scale(${t.k})`);
    d3.select('.force-nodes').attr('transform', `translate(${t.x}, ${t.y})scale(${t.k})`);
    d3.select('.force-links').attr('transform', `translate(${t.x}, ${t.y})scale(${t.k})`);
  });
const svg = d3.select('#tsne-panel')
    .call(zoom);
const g = svg.append("g")

export function showProjection(data, color='red') {
  // const [nodes, links] = getRes(data);
  // const width = svg.node().getBoundingClientRect().width;
  // const height = svg.node().getBoundingClientRect().height;
  // const widthScale = d3.scaleSqrt()
  //     .domain(d3.extent(links, d => d.value))
  //     .range([0.2, 0.6])
  // console.log('range:   ', d3.extent(links, d => d.value))
  // const simulation = d3.forceSimulation()
  //   .force("link", d3.forceLink().id(function(d) { return d.id; }))
  //   .force("charge", d3.forceManyBody())
  //   .force("center", d3.forceCenter(width / 2, height / 2));
  // const link = svg.append("g")
  //     .attr("class", "force-links")
  //     .selectAll("line")
  //     .data(links)
  //     .enter().append("line")
  //     .attr("stroke-width", function(d) { return widthScale(d.value); })
  //     .attr('stroke', '#b3b3b3')
  // const node = svg.append("g")
  //     .attr("class", "force-nodes")
  //     .selectAll("circle")
  //     .data(nodes)
  //     .enter().append("circle")
  //     .attr("r", 5)
  //     .attr("fill", function(d) { return GroupMap.groupColor[d.group]; })
  // simulation
  //     .nodes(nodes)
  //     .on("tick", ticked);

  // simulation.force("link")
  //     .links(links);

  // function ticked() {
  //   link
  //       .attr("x1", function(d) { return d.source.x; })
  //       .attr("y1", function(d) { return d.source.y; })
  //       .attr("x2", function(d) { return d.target.x; })
  //       .attr("y2", function(d) { return d.target.y; });

  //   node
  //       .attr("cx", function(d) { return d.x; })
  //       .attr("cy", function(d) { return d.y; });
  // }
}

function getRes(data) {
  const tmpData = [];
  for (let i = 0; i < data.length; ++ i) {
    tmpData.push([]);
    for (let j = 0; j < data[i].length; ++ j) {
      tmpData[i] = tmpData[i].concat(data[i][j].map(d => d*10));
    }
  }
  const tmpMatrix = new Matrix(tmpData);
  console.log('befor : ', tmpMatrix);
  const pca = new PCA(tmpData, {isCovarianceMatrix: false, center: false, scale: true});
  const results = tmpMatrix.mmul(pca.getEigenvectors().subMatrixColumn([0, 1]));
  console.log('results: ', results);

  const nodes = [], links = [], gIn = [];
  const randomR = getRandomArray(results);
  for (let j = 0; j < randomR.length; ++ j) {
    let i = randomR[j];
    if (gIn.length == 0 || data[gIn[gIn.length-1]].id != data[i].id) {
      gIn.push(i);
    }
    const preId = gIn[gIn.length-1];
    nodes.push({id: i, group: data[i].id});
    if (preId != i) {
      const val = getDis(results[preId], results[i]);
      // if (val - 1.5 < 0) {
      //   continue;
      // }
      links.push({source:preId, target: i, value: val});
    }
  }
  console.log('gIn:  ', gIn);
  for (let i = 1; i < gIn.length; ++ i) {
    for (let j = i + 1; j < gIn.length; ++ j) {
      // let j = i - 1;
      const val = getDis(results[gIn[i]], results[gIn[j]])
      // if (val - 1.5 < 0) {
      //   continue;
      // }
      links.push({source:gIn[i], target:gIn[j], value: val});
    }
  }
  return [nodes, links];
}

function getRandomArray(d) {
  let ans = [], raw = [];
  for (let i = 0; i < d.length; ++ i) {
    raw.push(i);
  }
  for (let i = 0; i < raw.length; ++ i) {
    const id = Math.floor(Math.random() * raw.length);
    ans = ans.concat(raw.splice(i, 1));
  }
  ans.sort((a, b) => a - b);
  console.log(ans, ' **** ')
  return ans;
}

function getDis(lhs, rhs) {
  return Math.abs(lhs[0] - rhs[0]) + Math.abs(lhs[1] - rhs[1]);
}