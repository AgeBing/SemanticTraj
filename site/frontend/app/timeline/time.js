import * as d3 from 'd3';
import * as Config from './config.js';

import { filterDataInTime as filter } from '../app.js'

const visBox = document.getElementById("topic-container");
let  h = visBox.offsetHeight;  //高度
let  w = visBox.offsetWidth;   //宽度

let syncAsixFunc		 	// 时间轴同步方法
let timeRange 		 		// 时间范围 [start,end]\
export let timeScale,timeScale2     //两个 timeScale 
export let func_list

// for all instances 
export function init(_timeRange){
	d3.select('#topic-container')
		.selectAll('*')
		.remove() 

	func_list	= []
	timeRange = _timeRange
	// console.log(timeRange)

	// timerange 为多有查询出来轨迹的最大时间范围
	appendWidgets()
}


addLegend() // 添加一次即可
function appendWidgets(){
	setTimeScale()
	setTopAxis()
	addTopicContains()
	setZoom()
	setBrush()
}
function setTimeScale(){
	// scales 
	timeScale = d3.scaleTime()
		.range([0, w])
	timeScale2 = d3.scaleTime()
		.range([0, w])

	// set domain
	timeScale.domain(timeRange)
	timeScale2.domain(timeRange)
}

function setTopAxis(){
	// 顶部时间轴 
	let axisFunc =  d3.axisBottom(timeScale)
	let tr = d3.timeMinute.range(timeRange[0],timeRange[1],10)
		// console.log(tr)
		axisFunc.tickValues(tr)
		  	.tickSizeOuter(0)
		  	.tickPadding(10)
			.tickFormat(function(d, i) {
				// 设置间隙
				let interval = Math.ceil(60 / (timeScale(tr[1]) - timeScale(tr[0])))
				let r = ''
				if(i % interval == 0){
					if( (i>0) && d.toDateString() != tr[i-1].toDateString())
						r += d.toLocaleDateString()+' '
					r += d.toTimeString().slice(0,8)
				}
				return r 
			});	

	let topAxis =  d3.select('#topic-container')
						.append('div')
						.attr('class','top-axis-container')
						.append('svg')
							.attr('width',w * 0.9)
							.attr('height',40)
						.append("g")
					      .attr("class", "axis axis--top")
					      .call(axisFunc);

	syncAsixFunc = function(){
		topAxis.call(axisFunc)
	}
}
function addTopicContains(){
	// 中间的 toipcs
	d3.select('#topic-container').append('div')
		.attr('class','rect-group-container')
}
function setZoom(){
	let zoomFunc = d3.zoom()
		.scaleExtent([1, 100]) 	//缩放比例
		.on('zoom',()=>{
			// console.log('zoom')
			func_zoomed()
		})
		.on('end',()=>{
			// console.log('zoom end')
			timeSelect()
		})
	// 底部的 zoom 监听svg
	let listenerRect = 
		d3.select('#topic-container').append('svg')
			.attr('width',w - 10)
			.attr('height',40)
			.attr('class','listener-svg')
		.append('rect')
			.attr('class','listener-rect')
			.attr('x',0)
			.attr('y',0)
			.attr('width',w)
			.attr('height',40)
		// .on('mousemove',() =>{      //标线
		// 	let x = d3.event.offsetX
		// 	if(x <= w * 0.05 || x >= w * 0.95){
		// 		d3.select('#topic-container').selectAll('.tick-line').remove()
		// 	}else{
		// 		func_tickmove(x)
		// 	}
		// })
		// .on('mouseleave',()=>{
		// 	d3.select('#topic-container').selectAll('.tick-line').remove()
		// })

	d3.select('.top-axis-container').select('svg').call(zoomFunc)
	// listenerRect.call(zoomFunc)
}
function func_zoomed(){
	let t = d3.event.transform
	//更新 timeScale
	timeScale.domain(t.rescaleX(timeScale2).domain())   //  timeScal2 不变
	//更新时间轴
	syncAsixFunc() 

	func_list.forEach((f) =>  {
		f.func.call(f.whos)
	})
}
function syncAllInstance(){
	//将注册的函数一一调用
	func_list,forEach((f)=>{
		f.func.call(f.whos)
	})
}
function func_tickmove(x){
	d3.select('#topic-container').selectAll('.tick-line').remove()

	let tickLine = d3.select('#topic-container')
		.insert('svg','.listener-svg')
			.attr('class','tick-line')
			.attr('width',w - 10)
			.attr('height',h)
		.append('line')
			.attr('y1',15)
			.attr('y2',h - 15)

	tickLine.attr('x1',x)
			.attr('x2',x)

}
function setBrush(){
	var brushFunc = d3.brushX()
	    .extent([[0, 0], [w * 0.9, Config.vRectHeight]])
	    .on("start", ()=>{
	    	console.log('start')
	    })
	    .on("brush",()=>{
	    	console.log('brush')
	    })
	    .on("end",()=>{
	    	console.log('end')
	    	brushed()
	    });

	d3.select('.top-axis-container').select('svg')
		.append('g')
		.attr("class", "brush")
      	.call(brushFunc)
      	.call(brushFunc.move, [0,w * 0.9]); //拖动框

    let brushG = d3.select('.brush')

    	// brushG.select('.overlay')   
    	brushG.select('.selection')
    			.attr('height',function(a){
    				return 39
    			})
    	// brushG.select('.handle--e')
    	// .attr('fill','red')
    	// brushG.select('.handle--w')
    	// .attr('fill','red')

}
function brushed(){
	timeSelect()
}
function addLegend(){
	//添加图例
    let container = d3.select('#topic-legend')
    Config.topicNameList.forEach((name,i)=>{
    	let item = container.append('div').attr('class','legend-item')
   	 	item.append('div').attr('class','legend-rect')
   	 		.style('background-color',Config.colorList[i])
	    item.append('div').attr('class','legend-name')
	    	.text(name)
    })
}
function timeSelect(){
	
	let brushG = d3.select('.brush'),
		brushRectWidth = 3,
		rectStart = +brushG.select('.handle--w').attr('x') + brushRectWidth,
		rectEnd = +brushG.select('.handle--e').attr('x') + brushRectWidth,	
		timeStart = timeScale.invert(rectStart),
		timeEnd = timeScale.invert(rectEnd)

	// console.log("full time:",timeRange)
	// console.log("start time:",timeStart)
	// console.log("end time:",timeEnd)
	filter(timeStart,timeEnd)
}

function getTimeInterval(){
	let time1 = timeRange[0]

	let oneMin = 1*60*1000
	let onehour = oneMin * 60
	let halfDay = onehour * 12
	let oneDay  = onehour * 24
	let addTime,times = [oneMin,onehour,halfDay,oneDay]

	for(let i = 0;i < 4 ;i++){
		addTime = times[i]
		let time2 = new Date( time1.getTime() + addTime )
		let gap = timeScale(time2) - timeScale(time1)		
		console.log(i + ' => '+ gap)
	}
}