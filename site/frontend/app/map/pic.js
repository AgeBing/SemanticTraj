let trajsData


let stack = []
/*
	stack = [{
		latlng : 经纬度表示的在边界内的轨迹,              // stack[0]表示未经过框选的
		pixel  : 像素表示的在边界内的轨迹,
		url    : 绘制的图形的url
	},{
		rect   : 选择框的周围点经纬度表示,					// stack[1-n]表示每一次框选操作的结果
		latlng : 同上（经过本次框选后的）,
		pixel  : 同上（经过本次框选后的）.
		url    : 对应的图形的url
	},{
		...
	}]
*/


import { clip } from './clip'  // 库函数 用于 判断直线是否经过矩形

import { boundry,zoom, width,height } from './index'

import { _l2p, updateTileBoundry , showLoading ,hideLoading, loadTrajsData , color2rgb ,
	t_boundry , t_width , t_height ,left as t_left ,top as t_top } from './util'

import { filterGlobalData } from '../app.js'
import * as Config from './config.js';


export function draw(data) {
	let isChanged = updateTileBoundry(),
		originPiexelPoints , selectPiexelPoints , urlCache = {}



	// 视窗变化时 选择框需要重新绘制
	clearCanvas()


	if(data){ 					//data 来自全局 ，表示数据更新
		trajsData = data 
		stack = []      //数据重置
		processTrajsData(trajsData)
		originPiexelPoints = stack[0].pixel
		selectPiexelPoints = null
		stack[0].url =  GetTrajsPicUrl(originPiexelPoints , 0)
	}else {
		if(!trajsData) return   //没有数据 且 无data 
	}

	if( (!data  && isChanged)  || (!data && Config.PicUpdateFlag)){  		//数据未改变 ，视图边界变化了 需要重新绘制 
		
		// 将 stack 原 rect 数据记录下来
		let newStack = []
		for(let s = 1;s < stack.length; s++){
			newStack[s] = {
				rect : stack[s].rect
			}
		}
		stack = []     

		processTrajsData(trajsData)
		originPiexelPoints = stack[0].pixel
		selectPiexelPoints = null
		stack[0].url =  GetTrajsPicUrl(originPiexelPoints , 0)

		//替换
		for(let s = 1;s < newStack.length; s++){
			stack[s] = newStack[s]
		}

		if(Config.PicUpdateFlag) Config.PicUpdateFlag = false
	}


	// ----------------------------------------
	// 进行框选动作 
	// ----------------------------------------

	if(stack.length >= 2){

		 if(!stack[stack.length - 1].pixel && !stack[stack.length - 2].pixel ){  //顺序被打乱 重头filter
			for(let i = 1;i < stack.length;i++){
				let rect = stack[i].rect
				filter( rect.bottom_left, rect.top_right , i )
			}

			selectPiexelPoints = stack[stack.length - 1].pixel                     // 只生成最后一项 的url ? 画selct图时只需要最后一项的url
			stack[stack.length - 1].url =  GetTrajsPicUrl(selectPiexelPoints , 1)   

				filterGlobalData(selectPiexelPoints)

		}else if(stack[stack.length - 1].rect && !stack[stack.length - 1].pixel ){   //刚增加一个选择框 , 只需filter最后一项

				let rect = stack[stack.length - 1].rect
				filter( rect.bottom_left, rect.top_right , stack.length - 1 )
				selectPiexelPoints = stack[stack.length - 1].pixel 
				stack[stack.length - 1].url =  GetTrajsPicUrl(selectPiexelPoints , 1)

				filterGlobalData(selectPiexelPoints)
		}else{
			if(!stack[stack.length - 1].url){  //删去最后一个选择框，但是上一次是重排过的
				selectPiexelPoints = stack[stack.length - 1].pixel
				stack[stack.length - 1].url  =  GetTrajsPicUrl(selectPiexelPoints , 1)


			}

			filterGlobalData(stack[stack.length - 1].pixel)
			//刚删去的是最后一个选择框 直接使用
		}


		urlCache = {
			origin : stack[0].url,
			select : stack[stack.length - 1].url 
		}


	}else{
		urlCache = {
			origin : stack[0].url,
			select : null
		}
		filterGlobalData(stack[0].pixel)

	}

	// console.log("Stack",stack)
	drawTrajs(urlCache)
}


// #canvas-upon-map 	   上绘制未选择的轨迹
// #canvas-upon-map-select 上为选择后留下的轨迹
function drawTrajs(url){
	if(url.origin){
		let canvasOrigin = document.getElementById('canvas-upon-map');
	    let ctxOrigin = canvasOrigin.getContext('2d');

		let t1 = new Date().getTime();
	    canvasOrigin.width =  width
	    canvasOrigin.height = height
		ctxOrigin.clearRect(0,0,width,height)

		if(url.select){
			ctxOrigin.globalAlpha = 0.9
		}

		var imgOrigin = new Image();
		imgOrigin.src = url.origin
	   	imgOrigin.onload = function(){
	    	ctxOrigin.drawImage(imgOrigin ,t_left,t_top,width,height,0,0,width,height)
	    	let  t2 = new Date().getTime();
			// console.log('draw origin pic: ' + (t2-t1) + 'ms')
		}
	}
	if(url.select){
		let canvasSelect = document.getElementById('canvas-upon-map-select');
	    let ctxSelect = canvasSelect.getContext('2d');

		let t3 = new Date().getTime();
	    canvasSelect.width =  width
	    canvasSelect.height = height
		ctxSelect.clearRect(0,0,width,height)

		var imgSelect = new Image();
		imgSelect.src = url.select
	   	imgSelect.onload = function(){
	    	ctxSelect.drawImage(imgSelect ,t_left,t_top,width,height,0,0,width,height)
	    	let  t4= new Date().getTime();
			// console.log('draw select pic: ' + (t4-t3) + 'ms')
		}
	}

}

function clearCanvas(){
	let canvasOrigin = document.getElementById('canvas-upon-map');
	let ctxOrigin = canvasOrigin.getContext('2d');
	ctxOrigin.clearRect(0,0,width,height)

	let canvasSelect = document.getElementById('canvas-upon-map-select');
    let ctxSelect = canvasSelect.getContext('2d');
	ctxSelect.clearRect(0,0,width,height)
}

function processTrajsData(data) {    //处理原始数据在 boundry 内的轨迹，未涉及到框选
	let  t1 = new Date().getTime();
	
	let trajs_pixelpoints = [] ,
		trajs_in_tile_boundry = [] ,
		latlng_points , 
		trajdataInTileBoundry ,
		tileBox = [t_boundry.bottom_left.lng , t_boundry.bottom_left.lat , t_boundry.top_right.lng , t_boundry.top_right.lat ]

	data.forEach((t)=>{      //  t 代表一条轨迹
		let withinTraj = false
		let pixel_points = [] , latlng_points_in_tile = []
		
		latlng_points = t.traj		
		if(t.pid == '460000000000000')  return true  //这条轨迹的点特别多

		for(let i = 1;i < latlng_points.length;i++){
			let a = [ latlng_points[i - 1].longitude , latlng_points[i - 1].latitude ],
				b = [ latlng_points[i].longitude , latlng_points[i].latitude ],
				da= [],db=[],res

			res = clip( a,b,tileBox,da,db )   // 1 表示经过 ， 0 表示未经过

			if( res ){
				if(a[0] == da[0] && a[1] == da[1] && i != 1){
					latlng_points_in_tile.push({
						longitude : db[0],
						latitude  : db[1]	
					})
					pixel_points.push( _l2p(db[1] , db[0]) )
				}else{
					latlng_points_in_tile.push({
						longitude : da[0],
						latitude  : da[1]	
					})
					latlng_points_in_tile.push({
						longitude : db[0],
						latitude  : db[1]	
					})

					pixel_points.push( _l2p(da[1] , da[0]) )
					pixel_points.push( _l2p(db[1] , db[0]) )
				}
			}
		}


		if( pixel_points.length ){
			trajs_in_tile_boundry.push({
				pid :  t.pid,
				traj : latlng_points_in_tile
			})
			trajs_pixelpoints.push({
				pid : t.pid,
				traj : pixel_points,
			})
		}

		trajdataInTileBoundry = trajs_in_tile_boundry
	})


	let  t2 = new Date().getTime();
	// console.log('process : ' + (t2-t1) + 'ms')

	stack.push({
		latlng : trajdataInTileBoundry,
		pixel  : trajs_pixelpoints
	})
}

// 遍历所有轨迹 找出 经过 矩形框的轨迹 
function filter(s_bottom_left , s_top_right , stackIndex ){
	let selectedTrajs = [] , res , 
		tileBox = [t_boundry.bottom_left.lng , t_boundry.bottom_left.lat , t_boundry.top_right.lng , t_boundry.top_right.lat ] ,
		selectBox = [ s_bottom_left.lng , s_bottom_left.lat , s_top_right.lng,s_top_right.lat ]

	let  t1 = new Date().getTime();

	//数据来源上一个 选择 filter 后的数据
	let  trajdataInTileBoundry = stack[stackIndex - 1].latlng , 
		newTrajdataInTileBoundry  = []


	if(!trajdataInTileBoundry)  return

	trajdataInTileBoundry.forEach((t)=>{
		let points = t.traj
		let isClip = false
		let latlng_points_in_tile = []
		
		for(let i = 1;i < points.length;i++){
			let a = [ points[i - 1].longitude , points[i - 1].latitude ],
				b = [ points[i].longitude , points[i].latitude ],
				da= [],db=[],res

			res = clip( a,b,selectBox,da,db )   // 1 表示经过 ， 0 表示未经过

			if( res ){
				isClip = true
				break
			}
		}

		if(isClip){
			let latlng_points = points,
				pixel_points = []
			
			for(let i = 1;i < latlng_points.length;i++){
				let a = [ latlng_points[i - 1].longitude , latlng_points[i - 1].latitude ],
					b = [ latlng_points[i].longitude , latlng_points[i].latitude ],
					da= [],db=[],res

				res = clip( a,b,tileBox,da,db )   // 1 表示经过 ， 0 表示未经过

				if( res ){
					if(a[0] == da[0] && a[1] == da[1] && i != 1){
						latlng_points_in_tile.push({
							longitude : da[0],
							latitude  : da[1]	
						})

						pixel_points.push( _l2p(db[1] , db[0]) )
					}else{
						pixel_points.push( _l2p(da[1] , da[0]) )
						pixel_points.push( _l2p(db[1] , db[0]) )

						latlng_points_in_tile.push({
							longitude : da[0],
							latitude  : da[1]	
						})
						latlng_points_in_tile.push({
							longitude : db[0],
							latitude  : db[1]	
						})

					}
				}
			}

			selectedTrajs.push({
				pid : t.pid ,
				traj : pixel_points
			})
			newTrajdataInTileBoundry.push({
				pid :  t.pid,
				traj : latlng_points_in_tile
			})
		}
	})

	let  t2 = new Date().getTime();
	console.log('process select : ' + (t2-t1) + 'ms')

	stack[stackIndex]['latlng'] = newTrajdataInTileBoundry
	stack[stackIndex]['pixel']  = selectedTrajs

}



function GetTrajsPicUrl(trajs,stackIndex){
	if(!trajs) return null
	if(stackIndex < 0) stackIndex = 0


	var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');

    canvas.width =  t_width
    canvas.height = t_height
	ctx.clearRect(0,0,t_width,t_height)



	// color and opacity


	if(stackIndex == 0){
   		ctx.strokeStyle = color2rgb(Config.picTrajColor  , Config.picTrajOpacity )
	}else{
   		ctx.strokeStyle = color2rgb(Config.picTrajSelectColor , Config.picTrajOpacity )
	}

	ctx.lineJoin = 'round'
	ctx.lineWidth = 2
   

   	console.log("轨迹条数：",trajs.length , " 线色：",ctx.strokeStyle , "  线宽：",ctx.lineWidth )
	console.log('Drawing....')
	let  t3 = new Date().getTime();
	trajs.forEach(t=>{
		drawOneCurveTraj(ctx,t.traj)
	})
	let  t4 = new Date().getTime();
	console.log('__draw: ' + (t4-t3) + 'ms')

	return canvas.toDataURL()
}




function drawOneTraj(ctx,points){ 
	ctx.beginPath()
	let beginPoint = points[0] 
	ctx.moveTo(beginPoint[0],beginPoint[1])

	for(let i = 1;i < points.length;i++){
		let [x,y] = points[i]
		ctx.lineTo(x,y)
	}

	ctx.closePath();
 	ctx.stroke();
}
function drawOneCurveTraj(ctx,points){
	ctx.beginPath()
	let beginPoint = points[0] 
	ctx.moveTo(beginPoint[0],beginPoint[1])
	
	let i 
	for(i = 1;i < points.length - 1;i++){
		let last = points[i -1],
			now  = points[i],
			next = points[i + 1],
			center = [ Math.floor((now[0] + next[0])/2),Math.floor((now[1] + next[1])/2) ]

		ctx.quadraticCurveTo( 
        	now[0], now[1],
      	 	center[0],center[1],
    	);
		ctx.moveTo(center[0],center[1])
	}
 	ctx.stroke();
}
function lineShowConfig(len){
	let ops = [0.004,0.1 , 0.171,0.357,0.386,0.42, 0.461,0.569,0.643,0.735,0.843,0.945,0.994]
	
	let width , opacity
	// if(len > 10000){
	// 	width = 1,
	// 	opacity = ops[0]
	// }else if( len > 6000){
	// 	width = 2
	// 	opacity = ops[0]
	// }else if( len > 2000){
	// 	width = 2
	// 	opacity = ops[0]
	// }else if( len > 120){
	// 	width = 3
	// 	opacity = ops[0]
	// }
	// else if( len > 50){
	// 	width = 2
	// 	opacity = ops[1]
	// }else{
	// 	width = 4
	// 	opacity = ops[1]
	// }

	width =  2
	opacity = ops[1]

	return {
		width,
		opacity
	}

}

// 变量
export { filter , stack }