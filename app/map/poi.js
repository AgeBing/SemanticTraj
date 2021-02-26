import * as d3 from 'd3';
import { clip } from './clip'  // 库函数 用于 判断直线是否经过矩形
import { map , boundry,zoom, width,height } from './index'
import { _l2pb, updateTileBoundry , showLoading ,hideLoading, loadTrajsData ,
	t_boundry , t_width , t_height ,left as t_left ,top as t_top } from './util'


let colorList = [ '#e41a1c' , '#377eb8', '#4daf4a', '#984ea3', '#ff7f00']


//本地poi数据
import * as QueryUtil from '../search/queryutil'


let poiData  //全局数据 ，保存



//在地圖上绘制Poi

let iconLayers 

export  function draw(pois) {
  iconLayers = []
  // var PoiIcon = L.icon({
  //     iconUrl: '../icon/POIicon.png',
  //     iconSize:     [21, 24], // size of the icon
  // });
  pois.forEach((poi)=>{
      let iconLayer  = L.marker([poi.latitude , poi.longitude], {title : poi.name })
      iconLayer.addTo(map)
	    // .bindPopup(poi.name)
	    // .openPopup();
	    .bindTooltip(`Name:${poi.name}, Type:${poi.type}`,{direction : 'top' , offset : [0,-6], opacity :0.9}).openTooltip()
      iconLayers.push(iconLayer)
  })

  // console.log(iconLayers)
}

export function remove(){
    if(iconLayers!=null)
  iconLayers.forEach((iconLayer)=>{
      iconLayer.remove()
  })
}




/*
export  function draw(data) {

 let poi = pois[0]['data'][0]['data'][0]

 if(!ifOutofBoundry(poi.latitude, poi.longitude)  && 
     poi.name ){
     drawPoi(poi)
 }
}

function removePoi(){
	d3.select('#svg-poi').selectAll('text').remove()
	d3.select('#poi-icon')
		.style('display','none')

}

function drawPoi(poi){
	let p = _l2pb(poi.latitude , poi.longitude)
	d3.select('#svg-poi')
		.append('text')
		.attr('cx',p[0])
		.attr('cy',p[1])
				.text(poi.name)
				.attr('x',p[0] + 18)
				.attr('y',p[1] + 12)
				.style('font-size','10px')
	d3.select('#poi-icon')
		.style('left',p[0] + 'px')
		.style('top', p[1] + 'px')
		.style('display','block')

}

function ifOutofBoundry(lat,lng){
	if(lat < boundry.bottom_left.lat || lng < boundry.bottom_left.lng ||
		lat > boundry.top_right.lat || lng > boundry.top_right.lng)
		return true   // 超出边界
	return false
}
*/
