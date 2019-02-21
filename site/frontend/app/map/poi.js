import * as d3 from 'd3';
import { clip } from './clip'  // 库函数 用于 判断直线是否经过矩形
import { boundry,zoom, width,height } from './index'
import { _l2pb, updateTileBoundry , showLoading ,hideLoading, loadTrajsData ,
	t_boundry , t_width , t_height ,left as t_left ,top as t_top } from './util'


let colorList = [ '#e41a1c' , '#377eb8', '#4daf4a', '#984ea3', '#ff7f00']


//本地poi数据
import * as QueryUtil from '../search/queryutil'


let poiData  //全局数据 ，保存

//在地圖上绘制Poi
export async function draw(result) {

	// 搜索本地的
	// QueryUtil.get_local_poi()
	// 	.then(result =>{
	// 		result[1]['data'].forEach((d,i)=>{
	// 			drawPois( d['data'] , i  )
	// 		})
	// 	})

	if(result){
		poiData = result
	}else{
		if(!poiData) return
	}

	if(poiData){
		poiData[1]['data'].forEach((d,i)=>{
			drawPois( d['data'] , i  )
		})
	}
}	


function drawPois(pois,index){
	// console.log(pois)
	let valArr = []
	pois.forEach((poi)=>{
		valArr.push(poi.val)
	})
	let scale = d3.scaleLinear()
    	.domain(d3.extent(valArr))
    	.range([0.25, 1]);

    d3.select('#svg-poi').append('g').attr('id','th'+index)
	pois.forEach((poi)=>{
		if(!ifOutofBoundry(poi.latitude, poi.longitude)  && 
			poi.name ){
			let opacity = scale(poi.val)
			drawPoi(poi,opacity,index)
			// console.log(poi.name,opacity)
		}
	})
}

function drawPoi(poi, opacity , index){
	let poiSvg = d3.select('#svg-poi')
			.style('pointer-events','none')  //事件穿透

	let p = _l2pb(poi.latitude , poi.longitude)
	// console.log(p)

	poiSvg.select('#'+'th'+index)
		.append('circle')
		.attr('cx',p[0])
		.attr('cy',p[1])
		.attr('r' , 5)
		.attr('fill', colorList[index] )
		.style('pointer-events','fill')    //鼠标移入时能响应事件
		.style('opacity',opacity)
		.on('mouseover',()=>{

			poiSvg.append('text')
				.text(poi.name)
				.attr('x',p[0] + 10)
				.attr('y',p[1] + 3)
				.style('font-size','10px')

			poiSvg.style('cursor','auto')
		})
		.on('mouseleave',()=>{
			poiSvg.selectAll('text').remove()
			poiSvg.style('cursor','grab')
		})
}


function ifOutofBoundry(lat,lng){
	if(lat < boundry.bottom_left.lat || lng < boundry.bottom_left.lng ||
		lat > boundry.top_right.lat || lng > boundry.top_right.lng)
		return true   // 超出边界
	return false
}






// export function highLightTrajSectionInMap(traj){
// 	// console.log(traj)
// 	let poiSvg = d3.select('#svg-poi')
// 	poiSvg.append('g').attr('id','traj')

// 	let sites  = traj.traj,
// 		lat,lng 

// 	let box = [ boundry.bottom_left.lng , boundry.bottom_left.lat 
// 				, boundry.top_right.lng , boundry.top_right.lat ]

// 	for(let i = 0 ;i< sites.length - 1;i++){
// 		let lat1 =  sites[i].latitude,
// 			lng1 =  sites[i].longitude,
// 			lat2 =  sites[i + 1].latitude,
// 			lng2 =  sites[i + 1].longitude,
// 			da = [] , db = [] , res 

// 		res = clip( [lng1,lat1] , [lng2,lat2] , box , da , db)

// 		if( res ){
// 			let pa = _l2pb(da[1], da[0]) , 
// 				pb = _l2pb(db[1], db[0])

// 			// console.log( pa ,pb )	
// 			drawOneLine( pa, pb)
// 		}
// 	}
// }

