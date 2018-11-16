import '../css/showmap.css';

import * as d3 from 'd3';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import './leaflet-heat.js';

import * as DataManager from './datamanager.js';
// import * as QueryView from './queryview.js';
import * as NewQueryView from './newqueryview.js';
import * as ConfigPanel from './configpanel.js';
import * as MapRender from './maprender.js';
import TrajPath from './trajpath.js';

export const map = L.map('map', {zoomControl: false, attributionControl: false})
    .setView([28, 120.7], 12);
export const svg = d3.select(map.getPanes().overlayPane).append('svg')
      .attr('id', 'mapSvg')
      .attr('class', 'leaflet-zoom-hide')
      // .style('z-index', '450')

const type17CN = ["公司企业","购物","丽人","休闲娱乐","医疗","教育培训","汽车服务","美食","宾馆","旅游景点",
"生活服务","运动健身","交通设施","政府机构","房地产","自然地物","金融", '医疗生活', '医疗丽人', '行政区划', '房地产美', '美食教育'];
const type17 = ['Enterprise', 'Shop', 'Beauty', 'Entertainment', 'Hospital', 
    'Education', 'Car', 'Food', 'Hotel', 'Tourist_attractions', 'Life', 'Sports',
    'Traffic', 'Government', 'Uptown', 'Scenicspot', 'Finance', 'Hospital', 'Hospital', 'Government', 'Uptown', 'Food'];
const poiColor = ['#b3b3b3', '#969696', '#ffda00'];
const poiBordor = ['#d9d9d9', '#bdbdbd', '#f7f7f7'];
// #878787 '#ff776b'

for (let i = 0; i < type17.length; ++ i) {
  const name = type17[i].toLowerCase();
  let defs=svg.append('defs')
    .append('pattern')
    .attr('id', name + '-poi')
    .attr('patternUnits', 'objectBoundingBox')
    .attr('patternContentUnits', 'objectBoundingBox')
    .attr('height', 1)
    .attr('width', 1)
  defs.insert('circle')
    .attr('cx', 0.5)
    .attr('cy', 0.5)
    .attr('r', 0.5)
    .style('fill', poiColor[0])
  defs.append('image')
    .attr('xlink:href', '../images/' + name + '-poi-h2.svg')
    .attr('height', 0.7)
    .attr('weight', 0.7)
    .attr('x', 0.15)
    .attr('y', 0.15)

  defs = svg.append('defs')
    .append('pattern')
    .attr('id', name + '-poi-h')
    .attr('patternUnits', 'objectBoundingBox')
    .attr('patternContentUnits', 'objectBoundingBox')
    .attr('height', 1)
    .attr('width', 1)
  defs.insert('circle')
    .attr('cx', 0.5)
    .attr('cy', 0.5)
    .attr('r', 0.5)
    .style('fill', poiColor[1])
  defs.insert('image')
    .attr('xlink:href', '../images/' + name + '-poi-h2.svg')
    .attr('height', 0.7)
    .attr('weight', 0.7)
    .attr('x', 0.15)
    .attr('y', 0.15)

  defs = svg.append('defs')
    .append('pattern')
    .attr('id', name + '-poi-h2')
    .attr('patternUnits', 'objectBoundingBox')
    .attr('patternContentUnits', 'objectBoundingBox')
    .attr('height', 1)
    .attr('width', 1)
  defs.insert('circle')
    .attr('cx', 0.5)
    .attr('cy', 0.5)
    .attr('r', 0.5)
    .style('fill', poiColor[2])
  defs.append('image')
    .attr('xlink:href', '../images/' + name + '-poi-h2.svg')
    .attr('height', 0.7)
    .attr('weight', 0.7)
    .attr('x', 0.15)
    .attr('y', 0.15)
}
export const g = svg.append('g');

let svgBounds = {
  maxLat: '',
  minLat: '',
  maxLng: '',
  maxLng: ''
};

export function loadMap() {
  L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoicHNjb2RhIiwiYSI6ImNpejZxMHd2NjAwNGcyd25xM3c5MzY1cnAifQ.4tWdB9iDN26nr5hN27gseA'
      ,{attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}).addTo(map);
  addListener();
}

function addListener() {
  map.on('zoom', function() {
    adjustSvg();
    d3.selectAll('.mappoielement')
        .attr('cx', o => map.latLngToLayerPoint([o.latitude, o.longitude]).x)
        .attr('cy', o => map.latLngToLayerPoint([o.latitude, o.longitude]).y);
    // d3.selectAll('.traj-path-ele')
    //     .attr('d', d => MapRender.line(d))
    TrajPath.updatePos();
  });
}

export function renderPois() {
  const poiResults = DataManager.poiResults;
  g.selectAll('.mappoi').remove();
  const data = g.selectAll('.mappoi').data(poiResults, d => d.condition);
  data.exit().remove();
  const poilayer = data.enter().append('g').classed('mappoi', true)
      .merge(data).attr('dataindex', (d, i) => i)

  const typeData = poilayer.selectAll('.mappoitype')
      .data(d => d.data, d => d[0]);
  typeData.exit().remove();
  const types = typeData.enter().append('g').classed('mappoitype', true)
  .merge(typeData).attr('dataindex', function(d, i) {
        return this.parentNode.getAttribute('dataindex') + '-' + i;
      })
  const elementData = types.selectAll('.mappoielement')
      .data(d => d[1], d => d.uid);
  elementData.exit().remove();
  const element = elementData.enter().append('circle')
      .classed('mappoielement', true)
      .attr('cx', d => map.latLngToLayerPoint([d.latitude, d.longitude]).x)
      .attr('cy', d => map.latLngToLayerPoint([d.latitude, d.longitude]).y)
      .attr('r', 12.5)
      .style('stroke', d => d.isMouseover ? poiBordor[2] : (d.isSelect ? poiBordor[1] : poiBordor[0]))
      .style('stroke-width', '2')
      .style('fill', d => {
          console.log(d.type.split('/')[0].slice(0, 4), ' ---')
          const name = type17[
              type17CN.indexOf(d.type.split('/')[0].slice(0, 4))].toLowerCase();
          if (d.isMouseover) {
            return 'url(#' + name + '-poi-h2)';
          }
          if (d.isSelect) {
            return 'url(#' + name + '-poi-h)';
          }
          return 'url(#' + name + '-poi)';
        })
      .attr('latlng', d => {
        adjustSvg(d.latitude, d.longitude);
        return `${d.latitude},${d.longitude}`;
      })
      .attr('height', '25px')
      .call(addElementListener);
  // element.merge(elementData).style('fill', d => {
  //   const name = type17[
  //             type17CN.indexOf(d.type.split('/')[0].slice(0, 4))].toLowerCase();
  //   if (d.isMouseover) {
  //     return 'url(#' + name + '-poi-h2)';
  //   }
  //   if (d.isSelect) {
  //     return 'url(#' + name + '-poi-h)';
  //   }
  //   return 'url(#' + name + '-poi)';
  // })
  // .style('stroke', d => d.isMouseover ? poiBordor[1] : poiBordor[0])
  // .style('stroke-width', '2')
    // .style('opacity', d => {
    //   if (d.isMouseover) {
    //     return 1;
    //   }
    //   if (d.isSelect) {
    //     return 0.8;
    //   }
    //   return 0.5;
    // })
}

function addElementListener(node) {
  node.on('click', function(d, i) {
    const ids = NewQueryView.getIdsOnPoiResult(this, i);
    DataManager.modifyPoiResultsOne(ids, 'isSelect', !d.isSelect);
    renderPois();
    NewQueryView.renderPoilistsFoot(
        d3.select('.poilistcontainer'));
  })
  .on('mouseenter', function(d, i) {
    // console.log(d);
    // console.log(DataManager.poiResults);
    const ids = NewQueryView.getIdsOnPoiResult(this, i);
    DataManager.modifyPoiResultsOne(ids, 'isMouseover', true);
    //reorder
    // const arr = DataManager.poiResults[ids[0]].data[ids[1]][1];
    // const ext = arr.splice(ids[2], 1);
    // DataManager.poiResults[ids[0]].data[ids[1]][1] = arr.concat(ext);
    // console.log(DataManager.poiResults[ids[0]].data[ids[1]][1])
    // d3.select(this).attr('xlink:href', d => '../images/POIhighlight.svg');
    d3.select(this).style('fill', d => {
      const name = type17[
      type17CN.indexOf(d.type.split('/')[0].slice(0, 4))].toLowerCase();
      return 'url(#' + name + '-poi-h2)';
    })
    .style('stroke', d => {
      return poiBordor[2];
    })
    const xy = map.latLngToLayerPoint([d.latitude, d.longitude]); 
    g.append('rect').classed('mappoirect', true)
        .attr('x', xy.x + 15).attr('y', xy.y - 17.5)
        .attr('height', '30px').attr('width', d.name.length * 18)
    g.append('text').classed('mappoitext', true)
        .attr('x', xy.x + 20).attr('y', xy.y + 2)
        .text(d.name);
    // renderPois();
  })
  .on('mouseleave', function(d, i) {
    const ids = NewQueryView.getIdsOnPoiResult(this, i);
    DataManager.modifyPoiResultsOne(ids, 'isMouseover', false);
    // d3.select(this).attr('xlink:href', d => d.isSelect ? 
    //     '../images/POIlight.svg' : '../images/POI.svg');
    d3.select(this).style('fill', d => {
      const name = type17[
      type17CN.indexOf(d.type.split('/')[0].slice(0, 4))].toLowerCase();
      return 'url(#' + name + (d.isSelect ? '-poi-h)' : '-poi)');
    })
    .style('stroke', d => {
      return d.isSelect ? poiBordor[1] : poiBordor[0];
    })
    g.selectAll('.mappoirect').remove();
    g.selectAll('.mappoitext').remove();
  })
}

function updateBounds(lat, lng, val) {
  if (!svgBounds.maxLat) {
    svgBounds.minLat = val ? lat - val : lat - 0.1;
    svgBounds.maxLat = val ? lat + val : lat + 0.1;
    svgBounds.minLng = val ? lng - val : lng - 0.1;
    svgBounds.maxLng = val ? lng + val : lng + 0.1; 
  } else {
    const lat0 = val ? lat + val : lat + 0.1;
    const lat1 = val ? lat - val : lat - 0.1;
    const lng0 = val ? lng + val : lng + 0.1;
    const lng1 = val ? lng - val : lng - 0.1; 
    svgBounds.maxLat < lat0 ? svgBounds.maxLat = lat0 : '';
    svgBounds.minLat > lat1 ? svgBounds.minLat = lat1 : '';
    svgBounds.maxLng < lng0 ? svgBounds.maxLng = lng0 : '';
    svgBounds.minLng > lng1 ? svgBounds.minLng = lng1 : '';
  }
}

function getBounds(){
  return {
    topLeft:[svgBounds.maxLat, svgBounds.minLng],
    BottomRight: [svgBounds.minLat, svgBounds.maxLng]
  }
}
export function adjustSvg(lat = 28, lng = 120.7, val = 0.1) {
  updateBounds(lat, lng, val);
  const {topLeft, BottomRight} = getBounds();
  const l1 = new L.LatLng(topLeft[0], topLeft[1]);
  const n1 = map.latLngToLayerPoint(l1);
  const l2 = new L.LatLng(BottomRight[0], BottomRight[1]);
  const n2 = map.latLngToLayerPoint(l2);
  svg.style("width", (n2.x - n1.x) + "px")
      .style("height", (n2.y - n1.y) + "px")
      .style("left", n1.x + "px")
      .style("top", n1.y + "px")
      // .style('z-index', 0)
  g.attr("transform", `translate(${-n1.x},${-n1.y})`);
};

//-----------------------又是一道华丽的分割线----------------
// Select Box
let pl;

let boxMouseP;
let poiSelectBoxDrag = d3.drag()
    .on('start', function(d) {
      boxMouseP = d3.event;
      boxMouseP.x -= pl.x;
      boxMouseP.y -= pl.y;
      d3.select(this).append('rect').attr('id', 'poiselectbox')
          .attr('x', d3.event.x - pl.x)
          .attr('y', d3.event.y - pl.y)
          .style('fill', 'rgba(100, 100, 100, 0.5)')
          .attr('width', 0)
          .attr('height', 0)
    })
    .on('drag', function(d) {
      const {x: x1, y:y1} = boxMouseP;
      const {x, y} = d3.event;
      d3.select('#poiselectbox').attr('x', Math.min(x1, x - pl.x))
          .attr('y', Math.min(y1, y - pl.y))
          .attr('width', Math.abs(x - x1 - pl.x))
          .attr('height', Math.abs(y - y1 - pl.y))
    })
    .on('end', function() {
      const now = d3.select("#poiselectbox");
      const x1 = now.attr("x") * 1 + pl.x;
      const y1 = now.attr("y") * 1 + pl.y;
      const x2 = now.attr("width") * 1 + x1;
      const y2 = now.attr("height") * 1 + y1;
      let NW = map.layerPointToLatLng([x1, y2]);
      let SE = map.layerPointToLatLng([x2, y1]);
      NW = [NW.lat, NW.lng];
      SE = [SE.lat, SE.lng];
      DataManager.modifyPoisBound(NW, SE, NewQueryView.addFlag, NewQueryView.selectRegion);
      NewQueryView.renderPoilistsFoot(
        d3.select('poilistcontainer'));
      renderPois();
      map.dragging.enable();
      d3.select('#poiselectboxcontainer').remove();
    });

export function addSelectBox() {
  d3.select('#poiselectboxcontainer').remove();
  const p = map.getBounds();
  pl = map.latLngToLayerPoint([p.getNorth(), p.getWest()]);
  map.dragging.disable();
  const {x, y} = map.getSize();
  d3.select(map.getPanes().overlayPane)
      .append('svg').attr('id', 'poiselectboxcontainer')
      .style('width', `${x}px`)
      .style('height', `${y}px`)
      .style('left', `${pl.x}px`)
      .style('top', `${pl.y}px`)
      .style('position', 'absolute')
      .style('cursor', 'crosshair')
      .call(poiSelectBoxDrag)
}