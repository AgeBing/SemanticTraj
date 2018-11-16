import * as d3 from 'd3';
import * as BundlePath from './bundlepath.js';
import * as MapRender from './maprender.js';
import * as ShowMap from './showmap.js';
import $ from 'jquery';
import L from 'leaflet';
// import './L.D3SvgOverlay.js'
export default class TrajPath {
  constructor(g, options) {
    this.options = $.extend(true, {}, MapRender.TRAJ);
    if (arguments.length == 2) {
      for (let o in options) {
        if (o) {
          this.options[o] = options[o];
        }
      }
    }
    this.g = g;
    this.weightScale = d3.scaleSqrt()
        .range([this.options.weight, 4])
    this.opacityScale = d3.scaleSqrt()
        .range([this.options.opacity, 1])
  }
  static updatePos() {
    d3.selectAll('.traj-path-ele')
        .attr('d', d => TrajPath._line(d))
  }
  setLatLngs(data) {
    this.remove();
    const trajs = BundlePath.transform(data);
    this.preData = data;
    this.weightScale.domain([trajs.minCnt, trajs.maxCnt]);
    this.opacityScale.domain([trajs.minCnt, trajs.maxCnt]);
    // let that = this, map = this.map;
    // this.layer = L.d3SvgOverlay(function(sel, proj) {
    //   sel.selectAll('.traj-path-ele')
    //     .data(trajs)
    //     .enter()
    //     .append('path')
    //     .classed('traj-path-ele', true)
    //     .attr('d', d => TrajPath._line(d))
    //     .style('stroke-width', d => that.weightScale(d.cnt))
    //     .style('fill', 'none')
    //     .style('stroke', that.options.color)
    //     .style('stroke-opacity', d => that.opacityScale(d.cnt))
    // });
    // this.layer.addTo(map);
    this.g.selectAll('path')
        .remove();
    this.g.selectAll('.traj-path-ele')
        .data(trajs)
        .enter()
        .append('path')
        .classed('traj-path-ele', true)
        .attr('d', d => TrajPath._line(d))
        .style('stroke-width', d => this.weightScale(d.cnt))
        .style('fill', 'none')
        .style('stroke', this.options.color)
        .style('stroke-opacity', d => this.opacityScale(d.cnt))
  }
  setStyle(options) {
    for (let o in options) {
      if (o) {
        this.options[o] = options[o];
        if (o === 'opacity') {
          this.opacityScale.range([+options[o], 1]);
          // if (!this.layer) continue;
          this.g.selectAll('path')
              .style('stroke-opacity', d => this.opacityScale(d.cnt));
        } else if (o === 'weight') {
          this.weightScale.range([+options[o], 4]);
          // if (!this.layer) continue;
          this.g.selectAll('path')
              .style('stroke-width', d => this.weightScale(d.cnt));
        } else if (o === 'color') {
          // if (!this.layer) continue;
          this.g.selectAll('path')
              .style('stroke', options[o])
        }
      }
    }
  }
  remove() {
    // if (this.layer) {
    //   this.layer.remove();
    // }
    this.g.selectAll('path')
        .remove();
  }
  addTo() {
    // if (this.layer) {
    //   this.layer.remove();
    // }
    if (this.preData) {
      this.setLatLngs(this.preData);
    }
  }
  shallow() {
    // if (this.layer) {
    //   this.layer.getSelection().style('opacity', 0.11);
    // }
    this.g.style('opacity', 0.15);
  }
  deep() {
    // if (this.layer) {
    //   this.layer.getSelection().style('opacity', 1);
    // }
    this.g.style('opacity', 1);
  }
  getOptions() {
    return this.options;
  }
}
TrajPath._line = d3.line()
    .x(d => ShowMap.map.latLngToLayerPoint([d.x, d.y]).x)
    .y(d => ShowMap.map.latLngToLayerPoint([d.x, d.y]).y)