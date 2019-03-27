import * as d3 from 'd3';
// import $ from 'jquery';

import { draw }  from './pic'


import { draw as drawPoi } from './poi'
// import { draw as drawTraj } from './traj'
import { draw as drawSelect } from './select'
import { appendWidget } from './widget'
import * as Config from  './config'


let event_queue = false

let  visBox = document.getElementById("map-container");
let  height = visBox.offsetHeight; //高度
let  width = visBox.offsetWidth; //宽度

// console.log(height,width)

//1. 创建地图 、 创建绘制层
// let tilemapservice = 'http://webrd02.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}'
// let tilemapservice = 'http://b.tile2.opencyclemap.org/transport/{z}/{x}/{y}.png'
let tilemapservice = 'http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetGray/MapServer/tile/{z}/{y}/{x}'
// let tilemapservice = 'https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}@2x.png'


// let mapBoxToken = 'sk.eyJ1IjoieWtqYWdlIiwiYSI6ImNqdHF3N3d6ajA1MDczeW1tbWk5Y3hqaTkifQ.0ZBTN4_X9IYAH8hB9UWm0Q'
// let tilemapservice =  'https://api.mapbox.com/v4/mapbox.mapbox-streets-v8/{z}/{x}/{y}.mvt?style=mapbox://styles/mapbox/streets-v11@00&access_token=' + mapBoxToken

let zoomRate = 12;
let map = L.map('map-container').setView([28.0152686, 120.6558736], zoomRate);
let osmLayer = L.tileLayer(tilemapservice).addTo(map);


let heatmap = L.heatLayer([]);
let heatpoint = 0;
heatmap.addTo(map)


appendWidget()


function drawheatmap(trajsData){
	let heatmapdata = [];
	heatpoint=0;
	for(let traj of trajsData){
		for(let point of traj.traj){
			heatmapdata.push([point.latitude,point.longitude])
			heatpoint++
		}
	}
	heatmap.setLatLngs(heatmapdata)

	let v = +d3.select('#intensity-num')  || 70
	let max =  heatpoint*Config.heatMapIntensity*v
	d3.select('#heatmap-legend').select('#heatmap-legend-max')
					.text( max.toFixed(2) )
	heatmap.setOptions({
		radius: 12,
		max:  max ,
		gradient: {
			0.25 : Config.heatMapColor[0],
			0.55 : Config.heatMapColor[1],
			0.75 : Config.heatMapColor[2],  
			1 : Config.heatMapColor[3] 
		}
	})
}






let canvas = d3.select(map.getPanes().overlayPane).append("canvas").attr('id','canvas-upon-map')
d3.select(map.getPanes().overlayPane).append("canvas").attr('id','canvas-upon-map-select')


let poiSvg = d3.select(map.getPanes().overlayPane)
	.append("svg")
	.attr('id','svg-poi')
	.attr("width",  width)
    .attr("height",height)


let selectSvg = d3.select(map.getPanes().overlayPane)
	.append("svg")
	.attr('id','svg-select')
	.attr("width",  width)
    .attr("height",height)



let boundry ,pixelBoundry , zoom


map.on("moveend",()=>{
	resize()
})
resize()


function resize(){

	d3.select('#svg-poi').selectAll('*').remove()

	event_queue = true

	zoom  = map.getZoom()

	boundry = { 
		bottom_left : map.getBounds().getSouthWest(),
		top_right   : map.getBounds().getNorthEast()
	}
	pixelBoundry = {
		bottom_left : map.latLngToLayerPoint(boundry.bottom_left),
		top_right 	: map.latLngToLayerPoint(boundry.top_right)
	}
	// console.log(boundry)

	debounceResize(900)()
}





function drawPic() {

	// console.log('draw')

	let left = -(map.getPixelOrigin().x -map.getPixelBounds().min.x ) + 'px',
		top  =  -(map.getPixelOrigin().y -map.getPixelBounds().min.y) + 'px'

	// layer 偏移
	d3.select('#canvas-upon-map')
		.style("transform" , "translate(" + left + ","+ top + ")" )

	d3.select('#canvas-upon-map-select')
		.style("transform" , "translate(" + left + ","+ top + ")" )

    selectSvg.style("left", left)
        .style("top",  top);

    poiSvg.style("left", left)
        .style("top",  top);


 	draw()  //绘制轨迹
	// drawTraj() //绘制勾选的轨迹
}

let debounceTimer
function debounceResize( delay ){

	let delaySecond = delay || 3000
	return function(){
		// console.log('debounce')
		let context = this
		clearTimeout( debounceTimer )
		debounceTimer = setTimeout( function(){
					
			drawPic()   // 在地图上绘制轨迹
			drawSelect()  //添加选择事件

		} , delaySecond )
	}
}

export { map,boundry,zoom,width,height,drawheatmap , heatmap,heatpoint }