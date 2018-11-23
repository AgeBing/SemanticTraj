
import * as d3 from 'd3';


import { draw as draw_t,selectPeriod } from 'drawtrajlines'
import { draw as draw_h } from 'drawheatmap'




let zoomRate = 12;
let map = L.map('map_container').setView([28.0152686, 120.6558736], zoomRate);
let osmLayer = L.tileLayer('https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}@2x.png', {
  attribution: 'Wikimedia maps beta | &copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);



var layerElementTag = 'div';
var layerElementClasses = '.my-leaflet-layer';
map.getPanes().overlayPane.appendChild(L.DomUtil.create(layerElementTag, layerElementClasses));

let svg = d3.select(map.getPanes().overlayPane).append("svg")
let g = svg.append("g").attr("class", "leaflet-zoom-hide");
let g2 = svg.append("g").attr("class", "leaflet-zoom-hide");



function draw_trajs(data) {

	//  两种一起画的时候有问题 
	//  zoom  resize svg 等  
	// let containers1 = { map,svg,g:g2 }
	// draw_t(containers1,data)

	let containers2 = { map,svg,g }
	draw_h(containers2,data)

}

export { draw_trajs,selectPeriod }