import * as d3 from 'd3';
import * as Config from './config.js';

import { filterDataInTime as filter } from '../app.js'

const visBox = document.getElementById("topic-container");
let  h = visBox.offsetHeight;  //高度
let  w = visBox.offsetWidth - 100;   //宽度

let syncAsixFunc		 	// 时间轴同步方法
let timeRange 		 		// 时间范围 [start,end]\
export let timeScale,timeScale2     //两个 timeScale 
export let func_list
var brushFunc

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
		.range([0, w * 0.9])
	timeScale2 = d3.scaleTime()
		.range([0, w * 0.9])

	// set domain
	timeScale.domain(timeRange)
	timeScale2.domain(timeRange)
}

function setTopAxis(){
	// 顶部时间轴 
	let axisFunc =  d3.axisBottom(timeScale)

		axisFunc.ticks(5)  //显示的个数
			.tickFormat(  d3.timeFormat("%x %H:%M")  )
	

	let TrajLabel =  d3.select('#topic-container')
						.append('div')
						.attr('id','label-trajectory')
						.text('Trajectories')


	let topAxis =  d3.select('#topic-container')
						.append('div')
						.attr('id','top-axis-container')
						.style('left',(100 + w * 0.05) + 'px' )
						.append('svg')
							.attr('width',w * 0.9 + 14)
							.attr('height',40)
						.append("g")
							.attr("transform" , "translate(7 , -2 )" )
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
		.scaleExtent([0.5, 100]) 	//缩放比例
		// .translateExtent([[-w * 0.9, 0], [2 *w * 0.9,10] ])
		.on('zoom',()=>{
			// console.log('zoom')
			func_zoomed()
		})
		// .on('end', debounceSelect() )
	// 底部的 zoom 监听svg
	let listenerRect = 
		d3.select('#topic-container').append('svg')
			.attr("transform" , "translate(100,0)" ) 
			.attr('width',w - 10)
			.attr('height',40)
			.attr('class','listener-svg')
		.append('rect')
			.attr('class','listener-rect')
			.attr('x',0)
			.attr('y',0)
			.attr('width',w)
			.attr('height',40)

	d3.select('#top-axis-container').select('svg').call(zoomFunc)
}
let s = []
function func_zoomed(){
	let t = d3.event.transform

	// console.log(timeScale2.invert(t))

	// d3.select('#top-axis-container').select('svg')
	// 	.call( brushFunc.move , timeScale.range().map(t.invertX, t) )
	// brush.move, timeScale.range().map(t.invertX, t)



	// console.log(s)

	let s_t = [ timeScale.invert(s[0]),timeScale.invert(s[1]) ]
	// console.log(s_t)
	//更新 timeScale
	timeScale.domain(t.rescaleX(timeScale2).domain())   //  timeScal2 不变


	let s_ = [ timeScale(s_t[0]) , timeScale(s_t[1]) ]

	// console.log(s_)
	//更新时间轴
	syncAsixFunc() 

	d3.select('#top-axis-container').select('svg').select('.brush')
		.call( brushFunc.move , s_ )

	// console.log("transform ", t.invertX )
	// console.log("range ", timeScale.range() )
	// console.log(  timeScale.range().map((t.applyX), t)   )

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
	brushFunc = d3.brushX()
	    .extent([[0, 0], [w * 0.9,10]])
	    // .extent([[0, 0], [w * 0.9, Config.vRectHeight]])
	    .on("start", ()=>{
	    	// console.log('start')
	    	brushStyle()
	    })
	    .on("brush",()=>{
	    	s = d3.event.selection
		    brushStyle()
	    })
	    .on("end", debounceSelect() );


	d3.select('#top-axis-container').select('svg')
		.append('g')
		.attr("class", "brush")
		.attr("transform" , "translate(7 , 20 )" )
      	.call(brushFunc)
      	.call(brushFunc.move, [0,w * 0.9]); //拖动框



}

function brushStyle(){

    let brushG = d3.select('.brush')

    	brushG.select('.selection')
    			.attr('height',function(a){
    				return 10
    			})

    	brushG.select('.handle--e')
    		.attr('width',10)
    		.attr('height',10)
    		.attr('rx',10)
    		.attr('ry',10)
    		.attr('y',0)

    	brushG.select('.handle--w')
    	   	.attr('width',10)
    		.attr('height',10)
    		.attr('rx',10)
    		.attr('ry',10)
    		.attr('y',0)
}


function brushed(){
	console.log('start select')
	timeSelect()
}

//添加图例
function addLegend(){
    let container = d3.select('#topic-legend')

    Config.topicNames.forEach((topicType,i)=>{
    	let item = container.append('div').attr('class','legend-item')
    				.style("left", `${i%2*50}%`)
    				.style("top", `${29+Math.floor(i/2)*29}px`)
   	 	item.append('div').attr('class','legend-rect')
   	 		.style('background-image',function(){
				switch(topicType.name){
					case "住宅":
						return `url("${Config.iconSrcUrl}Residential.png")`
					break;
					case "娱乐商业":
						return `url("${Config.iconSrcUrl}Entertainment.png")`
					break;
					case "办公":
						return `url("${Config.iconSrcUrl}Business.png")`
					break;
					case "医疗":
						return `url("${Config.iconSrcUrl}Medical.png")`
					break;
					case "交通":
						return `url("${Config.iconSrcUrl}Traffic.png")`
					break;
					case "教育":
						return `url("${Config.iconSrcUrl}Educational.png")`
					break;
				}
   	 		})
   	 		// .style('background-color',Config.colorList[i])
	    item.append('div').attr('class','legend-name')
	    	.text(function(){
				switch(topicType.name){
					case "住宅":
						return `Residential Related`
					break;
					case "娱乐商业":
						return `Entertainment Related`
					break;
					case "办公":
						return `Business Related`
					break;
					case "医疗":
						return `Medical Related`
					break;
					case "交通":
						return `Traffic Related`
					break;
					case "教育":
						return `Educational Related`
					break;
				}
   	 		})
    })
    // Config.topicNameList.forEach((name,i)=>{
    // 	let item = container.append('div').attr('class','legend-item')
   	//  	item.append('div').attr('class','legend-rect')
   	//  		.style('background-color',Config.colorList[i])
	   //  item.append('div').attr('class','legend-name')
	   //  	.text(name)
    // })

}
function timeSelect(){
	console.log('start select')
	
	let brushG = d3.select('.brush'),
		brushRectWidth = 3,
		rectStart = +brushG.select('.handle--w').attr('x') + brushRectWidth,
		rectEnd = +brushG.select('.handle--e').attr('x') + brushRectWidth,	
		timeStart = timeScale.invert(rectStart),
		timeEnd = timeScale.invert(rectEnd)


		console.log('brush', rectStart , rectEnd)
	console.log("full time:",timeRange)
	console.log("start time:",timeStart)
	console.log("end time:",timeEnd)
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





// 防止短时内 频繁调用 耗时函数
let debounceTimer
function debounceSelect( delay ){

	let delaySecond = delay || 2000
	return function(){
		// console.log('debounce')
		let context = this
		clearTimeout( debounceTimer )
		debounceTimer = setTimeout( function(){
			timeSelect()
		} , delaySecond )
	}
}