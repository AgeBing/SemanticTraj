import $ from 'jquery';
import * as d3 from 'd3';
import * as DataManager from './datamanager.js';
import * as myKMeans from './mykmeans.js';
import {FastPriorityQueue} from './fastpriorityqueue.js';
import '../css/newsemanticlist.css';
import * as SemanticList from './semanticlist.js';
import * as MapRender from './maprender.js';
import * as GroupMap from './groupmap.js';

export function clean() {
  d3.select('#new-semanticlist-list-container')
      .remove();
}

export function showSemanticList(id) {
  const innerRadius = 29,
      outterRadius = 35,
      imgW = 35,
      imgH = 35,
      Y = 60,
      sr = 5,
      lineLen = 80,
      numCirR = 15, //数字圆的半径,
      offset = 11,
      arc = d3.arc()
          .innerRadius(innerRadius)
          .outerRadius(outterRadius)
          .startAngle(d => d[0])
          .endAngle(d => d[1]),
      interval = 24 * 60,
      angleLinear = d3.scaleLinear()
          .domain([0, interval])
          .range([0, 2 * Math.PI]);

  d3.select('#new-semanticlist-list-container')
      .remove();
  const div = d3.select('#new-semanticlist-list')
      .append('div')
      .attr('id', 'new-semanticlist-list-container')
      .on('mouseenter', function() {
        MapRender.groupTraj.shallow();
      })
      .on('mouseleave', function() {
        MapRender.groupTraj.deep();
        MapRender.singleTraj.remove();
      })

  const textLineAngle = [-40, 0, 40],
      textLinePos = [],
      textLineLen = [80, 65, 60];
  for (let i = 0; i < textLineAngle.length; ++ i) {
    const radians = Math.PI / 180 * textLineAngle[i];
    const dx = Math.cos(radians) * outterRadius,
        dy = Math.sin(radians) * outterRadius;
    textLinePos.push([dx, dy]);

  }

  for (let i = 0; i < GroupMap.groups[id].patterns.length; ++ i) {
    const tmpData = GroupMap.groups[id].patterns[i],
        single = div.append('svg')
            .classed('single-semantic', true)
            .selectAll('g')
            .data([tmpData.pattern])
            .enter()
            .append('g'),
        sites = tmpData.pattern.split(',').map(d => d*1);
    single.on('mouseenter', function(d) {
      showSingleTraj(d);
    })
    let nowx = 0;
    for (let j = 0; j < sites.length; ++ j) {
      if (j > 0) {
        single.append('g')
            .attr('transform', `translate(${nowx}, ${Y})`)
            .append('line')
            .attr('x1', 0)
            .attr('y1', 0)
            .attr('x2', lineLen)
            .attr('y2', 0)
            .style('stroke', 'gray')
            .style('stroke-width', 3);
        nowx += lineLen + offset;
      }
      //画基站
      if (sites[j] < 0) {
        if (nowx > 0) {
          nowx += outterRadius - 5;
        } else {
          nowx += 35
        }
        const g = single.append('g')
            .attr('transform', `translate(${nowx}, ${Y})`);
        const o = tmpData.generalTraj
            .filter(d => d.hasOwnProperty('stoppoint') && d.site === '' + (-1*sites[j]))[0];
        const topics = DataManager.siteTopic.get('' + o.site);
        //overtime
        g.append('path')
            .attr('d', function() {
              const tmpTime = new Date(o.time),
                  startTime = tmpTime.getHours() * 60 + tmpTime.getMinutes(),
                  stopTime = parseInt(o.stopTime) / 1000 / 60,
                  endTime = (startTime + stopTime) % interval;
              return arc([angleLinear(startTime), angleLinear(endTime)]);
            })
            .style('fill', DataManager.colorRef.get(topics[0].topic))
        g.append('circle')
            .attr('cx', 0)
            .attr('cy', 0)
            .attr('r', innerRadius - 5)
            .style('fill', DataManager.colorRef.get(topics[0].topic))
        g.append('image')
            .attr('xlink:href', 'images/' + topics[0].topic.toLowerCase() + '.svg')
            .attr('x', - imgW / 2)
            .attr('y', - imgH / 2 - 2.5)
            .attr('width', imgW)
            .attr('height', imgH);
        g.append('text')
            .attr('x', - imgW / 2 + 4)
            .attr('y', imgH / 2)
            .text((topics[0].val * 100).toFixed(2) + `%`)
            .style('fill', 'white')
            .style('font-size', '8px')
        for (let k = 0; k < textLinePos.length; ++ k) {
          g.append('line')
              .attr('x1', textLinePos[k][0])
              .attr('y1', textLinePos[k][1])
              .attr('x2', textLinePos[k][0] + textLineLen[k])
              .attr('y2', textLinePos[k][1])
              .style('stroke', DataManager.colorRef.get(topics[1+k].topic))
              .style('stroke-width', 2)
          g.append('circle')
              .attr('cx', textLinePos[k][0] + textLineLen[k] + sr)
              .attr('cy', textLinePos[k][1])
              .attr('r', sr)
              .style('fill', 'none')
              .style('stroke', DataManager.colorRef.get(topics[1+k].topic))
              .style('stroke-width', 2)
          g.append('text')
              .attr('x', outterRadius + 8)
              .attr('y', textLinePos[k][1] - 7.5)
              .classed('semantic-text', true)
              .text(topics[1+k].topic + ': ' + (topics[k+1].val * 100).toFixed(2) + `%`)
              .style('fill', DataManager.colorRef.get(topics[1+k].topic))
        }
        nowx += outterRadius + textLineLen[1] + offset + 5;
          // console.log(nowx, ' ------ ', outterRadius, textLineLen[1])
      } else {
        const g = single.append('g')
            .attr('transform', `translate(${nowx}, ${Y})`);
        g.append('circle')
            .attr('cx', numCirR)
            .attr('cy', 0)
            .attr('r', numCirR)
            .style('fill', 'gray')
        g.append('text')
            .attr('x', numCirR)
            .attr('y', 2)
            .attr('text-anchor', 'middle')
            .attr('alignment-baseline', 'middle')
            .text(sites[j])
            .style('fill', 'white')
            .style('font-size', '15px');
        nowx += numCirR * 2 + offset;
      }
    }
    const svgLen = $(div.node())[0].offsetWidth,
        gLen = $(single.node())[0].getBBox().width,
        scale = gLen > svgLen * 0.95 ? svgLen * 0.95 / gLen : 1;
    const dx = svgLen/2 - gLen*scale / 2;
    // console.log($(single.node())[0].getBBox().width, $(div.node())[0].offsetWidth)

    single.attr('transform', `translate(${dx}, 0)scale(${scale})`);
  }
}
function showSingleTraj(pat) {
  const data = [];
  const trajSet = DataManager.trajPatternSet.get(pat);
  for (let j = 0; j < trajSet.length; ++ j) {
    const latlngs = [];
    for (let k = 0; k < trajSet[j].length; ++ k) {
      const site = DataManager.sites.get(trajSet[j][k].site * 1);
      latlngs.push([site.latitude, site.longitude]);
    }
    data.push(latlngs);
  }
  MapRender.singleTraj.setStyle({
    color: MapRender.groupTraj.getOptions().color
  });
  MapRender.singleTraj.setLatLngs(data);
}
