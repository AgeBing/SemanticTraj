import $ from 'jquery';
import * as d3 from 'd3';
import * as DataManager from './datamanager.js';
import * as HoneyComb from './honeycomb.js';

const r = 20;
export const ratio = 2 * r / 115;
export const stopwidth = 34 * ratio;
export const normalWidth = 4 * ratio;
export const CLWidth = 2*r;
export const ratio2 = 55/115;
// const stopwidth2 = 25 * ratio;
export const stopwidth2 = 3.5;
export const normalWidth2 = 3;

export function renderPopup(x, y, data) {
  const popup = HoneyComb.g3.append('g')
      .attr('class', 'cluster_popup');
  let back = popup.append('image')
        .attr('xlink:href', 'images/tooltip3.svg')
        .attr('x', x - 60)
        .attr('y', y - 75)
        .attr('width', 120)
        .attr('height', 75)
        .style('fill', 'white')
    data.x = 0;
    data.y = 0;
    let pgD = popup.selectAll('.popup_group')
        .data([data]);
    let pg = pgD.enter()
        .append('g').classed('popup_group', true);
    centerSem(pg, stopwidth2, ratio2);
    pg.attr('transform', function(o) {
      let p = calcHeadTail(o, stopwidth2, ratio2);
      let len = (p[1] - p[0]) + stopwidth2;
      let scale = 1, ox, oy = 37.5;
      let divWidth = 120;
      let divHeight = 75;
      if (len == stopwidth2) {
        scale = 4.5;
      } else {
        scale = divWidth * 0.6 / len;
        scale = Math.min(divHeight*0.6/stopwidth2/2, scale)
      }
      ox = (divWidth - len*scale) / 2;
      oy = (divHeight - stopwidth2*2) / 2;
      return `translate(${x-60+ox}, ${y-75+oy})scale(${scale})`;
    })
}

export function renderHighPopup(x, y, data) {
  const popup = HoneyComb.g3.append('g')
      .attr('class', 'cluster_popup');
  let back = popup.append('image')
        .attr('xlink:href', 'images/tooltip.svg')
        .attr('x', x - 60)
        .attr('y', y - 75)
        .attr('width', 120)
        .attr('height', 75)
        .style('fill', 'white')
    data.x = 0;
    data.y = 0;
    let pgD = popup.selectAll('.popup_group')
        .data([data]);
    let pg = pgD.enter()
        .append('g').classed('popup_group', true);
    centerSem(pg, stopwidth2, ratio2);
    createStopHigh(pg.selectAll('.stopsite'));
    pg.attr('transform', function(o) {
      let p = calcHeadTail(o, stopwidth2, ratio2);
      let len = (p[1] - p[0]) + stopwidth2;
      let scale = 1, ox, oy = 37.5;
      let divWidth = 120;
      let divHeight = 75;
      if (len == stopwidth2) {
        scale = 4.5;
      } else {
        scale = divWidth * 0.6 / len;
        scale = Math.min(divHeight*0.6/stopwidth2/2, scale)
      }
      ox = (divWidth - len*scale) / 2;
      oy = (divHeight - stopwidth2*2) / 2;
      return `translate(${x-60+ox}, ${y-75+oy})scale(${scale})`;
    })
}

export function showLevel3() {
  const nodes = getLevel3Nodes(),
      data = getLevel3Data(nodes);
  let pgD = HoneyComb.g3.selectAll('.level3semtraj')
        .data(data, function(d) {
          return d.pat;
        });
    let pg = pgD.enter()
        .append('g').classed('level3semtraj', true)
        .attr('level3id', d => d.id)
        .attr('pos', d => d.preX + ',' + d.preY)
    centerSem(pg, stopwidth2, ratio2);
    pg.attr('transform', function(o) {
      let p = calcHeadTail(o, stopwidth2, ratio2);
      let len = (p[1] - p[0]) + stopwidth2;
      let scale = 1, ox, oy = 37.5;
      let divWidth = 2 * r;
      let divHeight = r * 2 * HoneyComb.Sqrt3 / 3;
      if (len == stopwidth2) {
        scale = 2;
      } else {
        scale = divWidth * 0.6 / len;
        scale = Math.min(divHeight*0.6/stopwidth2/2, scale)
      }
      ox = (divWidth - len*scale) / 2;
      oy = (divHeight - stopwidth2*2) / 2;
      return `translate(${o.preX-r+ox}, ${o.preY})scale(${scale})`;
    })
    pgD.exit().remove();
}

function getLevel3Nodes() {
  const width = parseInt(d3.select('#honeycomb').style('width')),
      height = parseInt(d3.select('#honeycomb').style('height')),
      t = HoneyComb.currentEvent.transform,
      x0 = -t.x / t.k,
      y0 = -t.y / t.k,
      x3 = (width - t.x) / t.k,
      y3 = (height - t.y) / t.k,
      nodes = [];
  // console.log(x0, y0, x3, y3);
  HoneyComb.quad.visit(function(node, x1, y1, x2, y2) {
    if (!node.length) {
      do {
        const d = node.data;
        nodes.push(d);
      } while(node = node.next);
    }
    return x1 > x3 || y1 > y3 || x2 < x0 || y2 < y0;
  })
  return nodes;
}

function getLevel3Data(nodes) {
  const map = DataManager.reverseMap,
      data = [];
  for(let i = 0; i < nodes.length; i ++) {
    const pat = map.get(nodes[i].id),
        sites = pat.split(',').map(d => d*1);
    let cnt = 0;
    for(let j = 0; j < sites.length; j ++) {
      if (sites[j] < 0) {
        sites[j] = {
          name: DataManager.siteTopic.get((sites[j]*-1) + '')[0].topic,
          stoppoint: cnt ++
        }
      }
    }
    sites.id = nodes[i].id;
    sites.pat = pat;
    sites.x = 0;
    sites.y = 0;
    sites.preX = nodes[i].x;
    sites.preY = nodes[i].y;
    data.push(sites);
  }
  return data;
}

function centerSem(node, stopwidth, ratio) {
  node.append("line")
      .attr("y1", o => o.y)
      .attr("y2", o => o.y)
      .attr("x1", o => {
        return o.x + calcHeadTail(o, stopwidth2, ratio)[0];})
      .attr("x2", o => o.x + calcHeadTail(o, stopwidth2, ratio)[1])
      .classed("trajsClusterPath", true)
      .style("stroke", "#7B68EE")
      .style("stroke-width", 0.2);
  let siteDatas = node.selectAll(".trajAllSites")
      .data(o => {
        let data = [];
        o.forEach((d,i) => {
          data.push({sum: o.length, data:d, index: i, x: o.x, y: o.y});
        })
        return data;
      });
  let now = siteDatas.enter()
      .append("g")
      .attr("class", o => o.data.hasOwnProperty("stoppoint") ? 
          "stopsite" : "normalsite")
      .classed("trajAllSites", true)
  node.selectAll(".stopsite")
      .call(createStop);
  node.selectAll('.normalsite')
      .call(createNormal);
}

function createStop(node, bgc = 'white') {
  node.append('circle')
      .classed("QIStop", true)
      .attr('cx', o => o.x+calcPx(o, stopwidth2, ratio2) + stopwidth2/2)
      .attr('cy', o => o.y)
      .attr('r', stopwidth2)
      .style('fill', bgc)
      .style('stroke', '#3280ff')
      .style('stroke-width', 0.1)
  node.append("image")
      .attr("class", "QIStop")
      .attr("xlink:href",o => "images/"+ o.data.name.toLowerCase() + ".svg")
      .attr("x", (o, i) => {
        return o.x + calcPx(o, stopwidth2, ratio2) - stopwidth2/2;
      })
      .attr("sum", o => o.sum)
      .attr("y", o => o.y - stopwidth2)
      .style("opacity", 1)
      .attr('width', stopwidth2*2)
      .attr('height', stopwidth2*2)
};

function createStopHigh(node, bgc = 'white') {
  node.selectAll(".QIStop")
      .remove();
  node.append('circle')
      .classed('QIcircle2', true)
      .attr('cx', o => o.x + calcPx(o, stopwidth2, ratio) + stopwidth2/2)
      .attr('cy', o => o.y)
      .attr('r', stopwidth2)
      .style('fill', bgc)
  let sixD = node.append("g")
      .classed("stopsiteH", true)
      .selectAll(".stopsiteEle")
      .data(o => {
        const topics = DataManager.siteTopic.get(o.data.id+''),
            data = [];
        for (let i = 0; i < 6 && i < topics.length; i ++) {
          data.push({data: topics[i], sum: o.sum, index: o.index,
              x: o.x + calcPx(o, stopwidth2, ratio), y: o.y});
        }
        console.log(data, '$$$')
        return data;
      });
  node.append("circle")
      .classed("QIcircle", true)
      .attr("cx", o => o.x + calcPx(o, stopwidth2, ratio))
      .attr("cy", o => o.y)
      .attr("r", stopwidth2)
      .style("fill", bgc)

  const flow = node.append("g")
      .classed("circleFlow", true)
      .attr("transform", o => 
          `translate(${calcPx(o, stopwidth2, ratio)}, ${o.y})`)
  flow.append('path')
      .attr('d', o => {
        const flow = [...DataManager.stationFlow.get(o.data.id)]
            .sort((a, b) => a[0] - b[0]);
        const angle = d3.scalePow()
            .exponent(0.3)
            .domain([0, parseInt(24 * 3600 / DataManager.flowInterval)])
            .range([0, 2 * Math.acos(-1)]);
        console.log(d3.extent(flow, d => d[1])[1], ' *****  ');
        const y = d3.scalePow()
            .exponent(0.3)
            .domain([0, d3.extent(flow, d => d[1])[1]])
            .range([0, stopwidth2]);
        const areaRadial = d3.lineRadial()
            .angle(d => angle(d[0]))
            .radius(d => y(d[1]))
            // .innerRadius(d => 0.2)
            // .outerRadius(d => 0.2+y(d[1]))
            .curve(d3.curveCatmullRomClosed.alpha(0.5))
        console.log(flow, '   ********----------- ')
        return areaRadial(flow);
      })
      .style('fill', 'red');

  sixD.enter()
      .append('line')
      .attr('x1', (o, i) => o.x + HoneyComb.hexagonD2[i][0]*stopwidth2)
      .attr('y1', (o, i) => o.y + HoneyComb.hexagonD2[i][1]*stopwidth2)
      .attr('x2', (o, i) => o.x + HoneyComb.hexagonD2[i][0]*(stopwidth2+2))
      .attr('y2', (o, i) => o.y + HoneyComb.hexagonD2[i][1]*(stopwidth2+2))
      .style('stroke', '#4d7dfd')
      .style('stroke-width', 0.3)
  sixD.enter()
      .append('line')
      .attr('x1', (o, i) => o.x + HoneyComb.hexagonD2[i][0]*(stopwidth2+4))
      .attr('y1', (o, i) => o.y + HoneyComb.hexagonD2[i][1]*(stopwidth2+4))
      .attr('x2', (o, i) => o.x + HoneyComb.hexagonD2[(i+1)%6][0]*(stopwidth2+4))
      .attr('y2', (o, i) => o.y + HoneyComb.hexagonD2[(i+1)%6][1]*(stopwidth2+4))
      .style('stroke', '#D3D3D3')
      .style('stroke-width', 0.3)
  sixD.enter()
      .append('circle')
      .attr('cx', (o, i) => o.x + HoneyComb.hexagonD2[i][0]*(stopwidth2+4))
      .attr('cy', (o, i) => o.y + HoneyComb.hexagonD2[i][1]*(stopwidth2+4))
      .attr('r', 2)
      .style('fill', bgc)
  sixD.enter()
      .append('image')
      .attr("xlink:href", o => "images/"+o.data.topic.toLowerCase()+".svg")
      .style('width', 5)
      .style('height',5) 
      .attr('x', (o, i) => o.x + HoneyComb.hexagonD2[i][0]*(stopwidth2+4) - 2.5)
      .attr('y', (o, i) => o.y + HoneyComb.hexagonD2[i][1]*(stopwidth2+4) - 2.5)
  sixD.enter()
      .append('text')
      .classed('clusterText', true)
      .text(o => toPercent(o.data.val))
      .attr('x', (o, i) => o.x + HoneyComb.hexagonD2[i][0]*(stopwidth2+4) - 1)
      .attr('y', (o, i) => o.y + HoneyComb.hexagonD2[i][1]*(stopwidth2+4) + 2.6)
      .style('fill', 'black')
      .style('font-size', '1.2px')
};

function createNormal(node, bgc = 'white') {
  node.append('circle')
      .attr('cx', o => o.x + calcPx(o, stopwidth2, ratio2)  + 2)
      .attr('cy', o => o.y - 0.1)
      .attr('r', normalWidth2)
      .style('stroke', '#3280ff')
      .style('stroke-width', 0.1)
      .style('fill', bgc);
  node.append("text")
      .attr("x", o => {
        return (o.data+'').length == 1 ? o.x + calcPx(o, stopwidth2, ratio2) 
            + 0.9 : o.x + calcPx(o, stopwidth2, ratio2) - 0.2;
      })
      .attr("y", o => {
        return o.y + 1.4;
      })
      .text(o => o.data)
      .style('font-size', '4px')
      .style('fill', '#3280ff')
};

function calcHeadTail(o, stopwidth, ratio) {
  let interval = 8;
  let sum = o.length*1, offset;
  return [0, (sum-1) * (interval+stopwidth)];
};

function calcPx(o, stopwidth, ratio) {
  let interval = 8;
  let sum = o.sum, offset;
  return o.index * (interval + stopwidth);
};

function toPercent(point){
  let str = Number(point*100).toFixed(1);
  str += "%";
  return str;
}


