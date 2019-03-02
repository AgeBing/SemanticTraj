import * as d3 from 'd3';
import { clip } from './clip'  // 库函数 用于 判断直线是否经过矩形
import { boundry,zoom, width,height } from './index'
import { _l2pb, updateTileBoundry , showLoading ,hideLoading, loadTrajsData ,
	t_boundry , t_width , t_height ,left as t_left ,top as t_top } from './util'

//使用 site 中的 vertice 数据
import * as DataManager from '../search/datamanager.js';

import * as Config from './config.js';


let trajData //全局数据 ，保存


// 那些用户勾选的轨迹
export function draw(trajs){
	if(trajs){
		trajData = trajs
	}else{
		if(!trajData)  return
	}
	
	if(trajData){
		delTrajsInMap()
		drawTrajsInMap(trajData)
	}
}


//绘制高亮的 整条轨迹
export function drawTrajsInMap(trajs){
	let trajsSvg = d3.select('#svg-poi')

	trajs.forEach( (traj)=> {
		trajsSvg.append('g').attr('class','trajs').attr('id','id'+traj.pid)

		let sites  = traj.traj,
			lat,lng 

		let box = [ boundry.bottom_left.lng , boundry.bottom_left.lat 
					, boundry.top_right.lng , boundry.top_right.lat ]

		for(let i = 0 ;i< sites.length - 1;i++){
			let lat1 =  sites[i].latitude,
				lng1 =  sites[i].longitude,
				lat2 =  sites[i + 1].latitude,
				lng2 =  sites[i + 1].longitude,
				da = [] , db = [] , res 

			res = clip( [lng1,lat1] , [lng2,lat2] , box , da , db)

			if( res ){
				let pa = _l2pb(da[1], da[0]) , 
					pb = _l2pb(db[1], db[0])

				drawOneLineInTrajs( pa, pb , traj.pid)
			}
		}

	})


}
	// 轨迹中的一段
	function drawOneLineInTrajs( pa , pb , id ){
		let svg = d3.select('#svg-poi').select('#id'+id)
		svg.append('line')
			.attr('y1',pa[1])
			.attr('x1',pa[0])
			.attr('x2',pb[0])
			.attr('y2',pb[1])
			.style('stroke','pink')
			.style('stroke-width',2)
	}

// 删除高亮整条轨迹
export function delTrajsInMap(){
	// console.log(traj)
	d3.select('#svg-poi').selectAll('.trajs').remove()
}


let timeoutList = []
//绘制高亮的 整条轨迹
export function highLightTrajInMap(traj){
	let poiSvg = d3.select('#svg-poi')
	poiSvg.append('g').attr('id','traj')

	let sites  = traj.traj,
		lat,lng 

	let box = [ boundry.bottom_left.lng , boundry.bottom_left.lat 
				, boundry.top_right.lng , boundry.top_right.lat ]

	let ts = setTimeScale(sites)

	clearTimeOuts()
	for(let i = 0 ;i< sites.length - 1;i++){
		let lat1 =  sites[i].latitude,
			lng1 =  sites[i].longitude,
			lat2 =  sites[i + 1].latitude,
			lng2 =  sites[i + 1].longitude,
			startTime = sites[i].startTime,
			endTime  =  sites[i].endTime,
			startDate = new Date(  startTime.split(' ')[0]  + 'T' + startTime.split(' ')[1] ),
			endDate = new Date(  endTime.split(' ')[0]  + 'T' + endTime.split(' ')[1] ),
			duration = ts(endDate) - ts(startDate),
			da = [] , db = [] , res 


		res = clip( [lng1,lat1] , [lng2,lat2] , box , da , db)

		if( res ){
			let pa = _l2pb(da[1], da[0]) , 
				pb = _l2pb(db[1], db[0])
			// console.log( duration )	
			let timeoutId = setTimeout( () => {
				// console.log(traj.pid +' 第 '+ ts(startDate) +'ms')
				drawOneLine( pa, pb , duration)  
			}	, ts(startDate) )
			timeoutList.push(timeoutId)
		}
	}
}

function clearTimeOuts(){
	timeoutList.forEach((id)=>{
		clearTimeout(id)

	})
	timeoutList = []
}
function setTimeScale(sites){
	let firstTime = sites[0].startTime,
		lastTime  = sites[sites.length - 1].endTime , 
		firstDate = new Date(  firstTime.split(' ')[0]  + 'T' + firstTime.split(' ')[1] ),
		lastDate = new Date(  lastTime.split(' ')[0]  + 'T' + lastTime.split(' ')[1] )
	
	var ts = d3.scaleTime()
	    .domain([firstDate, lastDate])
	    .range([0,Config.duration]);

	return ts
}

	// 轨迹中的一段
	function drawOneLine( pa , pb, duration){
		// console.log("经过 ",duration +'ms')
		let svg = d3.select('#svg-poi').select('#traj')
		svg.append('line')
			.attr('y1',pa[1])
			.attr('x1',pa[0])
			.attr('x2',pa[0])
			.attr('y2',pa[1])
			.style('stroke',Config.oneWholeTrajColor)
			.style('stroke-width',2)
			.transition()
			.duration(duration)
			.attr('x2',pb[0])
			.attr('y2',pb[1])

	}
// 删除高亮整条轨迹
export function unHighLightTrajInMap(){
	d3.select('#svg-poi').select('#traj').remove()
}




// 高亮轨迹片段
export function highLightTrajSectionInMap(siteId1,siteId2){

	let poiSvg = d3.select('#svg-poi')
	poiSvg.append('g').attr('id','traj-section')

	let sites = DataManager.sites

	let site1 = sites.get(siteId1),
		site2 = sites.get(siteId2)

	let box = [ boundry.bottom_left.lng , boundry.bottom_left.lat 
				, boundry.top_right.lng , boundry.top_right.lat ]
	let lat1 =  site1.latitude,
		lng1 = 	site1.longitude,
		lat2 =  site2.latitude,
		lng2 =  site2.longitude,
		da = [] , db = [] , res 

	let vertice1 = 	site1.vertice.split(';'),
		vertice2 = 	site2.vertice.split(';')

	// res = clip( [lng1,lat1] , [lng2,lat2] , box , da , db)
	// if( res ){
	// 	let pa = _l2pb(da[1], da[0]) , 
	// 		pb = _l2pb(db[1], db[0])
	// 	drawOneSection( pa, pb)
	// }

	// 可能 vertice1 数据为空
	drawOneSectonPolygon(vertice1)
	// drawOneSectonPolygon(vertice2)
}

function drawOneSection( pa , pb){
	let svg = d3.select('#svg-poi').select('#traj-section')
	//直线
	svg.append('line')
		.attr('y1',pa[1])
		.attr('x1',pa[0])
		.attr('x2',pb[0])
		.attr('y2',pb[1])
		.style('stroke',Config.oneSectionTrajColor)
		.style('stroke-width',2)
}
function drawOneSectonPolygon(vertice){   
	let vertices = [] ,points = ""
	for(let i = 0 ;i < vertice.length;i++){
		let v = vertice[i].split(',')
		v.forEach((_v)=>{
			_v = parseFloat(_v)
		})
		vertices.push([parseFloat(v[0]) , parseFloat(v[1])] )
	}
	let box = [ boundry.bottom_left.lng , boundry.bottom_left.lat 
				, boundry.top_right.lng , boundry.top_right.lat ]

	for(let i = 1;i < vertices.length;i++){
		let da = [] , db = [] , res 
		res = clip( vertices[i-1] , vertices[i], box , da , db)
		if(res){
			let pa = _l2pb(da[1], da[0]) , 
				pb = _l2pb(db[1], db[0])
			
			points +=  pa[0] + "," + pa[1] + " "
			points +=  pb[0] + "," + pb[1] + " "
			
			console.log(pa,pb,da,db)
		}
	}
	//points 可能为空
	let svg = d3.select('#svg-poi').select('#traj-section')

	// 有的点可能超出界外

	//多边形
	svg.append('polygon')
		.attr('points',points)
		.style('stroke','black')
		.style('stroke-width',1)
		.style('fill','lime')
		.style('opacity',0.3)
}


export function unHighLightTrajSectionInMap(){
	d3.select('#svg-poi').select('#traj-section').remove()
}