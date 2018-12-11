
import * as d3 from 'd3';


// import { draw as draw_t } from 'drawtrajlines'
import { draw as draw_h } from 'drawheatmap'



//创建地图
let zoomRate = 12;
let map = L.map('map-container').setView([28.0152686, 120.6558736], zoomRate);
let osmLayer = L.tileLayer('https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}@2x.png', {
  attribution: 'Wikimedia maps beta | &copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


//地图上一层用于作画
var layerElementTag = 'div';
var layerElementClasses = '.my-leaflet-layer';
map.getPanes().overlayPane.appendChild(L.DomUtil.create(layerElementTag, layerElementClasses));
let svg = d3.select(map.getPanes().overlayPane).append("svg")
let g = svg.append("g").attr("class", "leaflet-zoom-hide");


function draw_trajs(data) {

	let containers2 = { map,svg,g }
	draw_h(containers2,data)

}

export { draw_trajs }