import * as d3 from 'd3';
import { draw as draw_h } from 'drawheatmap'


import { init as topic_init,topicZoomRect ,registr_select_func  } from 'topicpanel'
import { draw as draw_t ,selectPeriod } from 'drawtrajlines'
// import { init as hexa_init,topicHexa }  from 'hexagonpanel' 



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



// 选择联动
let selectArr = {
	'topic': [],
	'hexa' : []
}
function select_outer(i,outerName){
	selectArr[outerName][i].select()
}
// 选中离开时触发
function un_select_outer(i,outerName){
	selectArr[outerName][i].un_select()
}




function draw_selected_trajs(selected_trajs){
	const topicNames = ["Beauty","Food","Shop","Uptown","Education","Hospital"]

	let  visBox = document.getElementById("topic-container");
	let  h = visBox.offsetHeight; //高度
	let  w = visBox.offsetWidth; //宽度

	topic_init(selected_trajs.timeRange)
	hexa_init()

	let l_n = +document.getElementById("range6").value

	for(let i = 0;i < l_n && i < selected_trajs.ps.length;i++){
		let r = new  topicZoomRect()
		let h = new  topicHexa()

		h.init(topicNames,selected_trajs.ps[i],i)
		h.bind(select_outer,un_select_outer)
		h.render()

		r._init(visBox,selected_trajs.ps[i],i)
		r.bind(select_outer,un_select_outer)
		r._render()

		selectArr['topic'].push(r)
		selectArr['hexa'].push(h)

	}

	registr_select_func(selectPeriod)

	// 绘制轨迹
	draw_t({map,svg,g},selected_trajs.ps.slice(0,l_n))

}

export { draw_trajs,draw_selected_trajs }