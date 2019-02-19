import * as d3 from 'd3';

let topicNameList = ["Beauty","Food","Shop","Uptown","Education","Hospital","Hotel","Life","Finance","Traffic","Enterprise","Scenicspot","Government"]
// let colorList = ["#ffcfd9","#ff8399","#d5fff5","#458f8f","#ffac4b","#2b7bf6","#f4d3b0","#f7d177","#8cabef","#2ebef5","#fb929e","#ffdfdf","#fff6f6","#aedefc"]
// let colorList =["#b8ffd0","#ecffc1","#ffe6cc","#dfbaf7","#ffcd3c","#35d0ba","#dcb5ff","#a5bdfd","#77529e","#fb929e","#ffdfdf","#fff6f6","#aedefc","#ff7657"]
let colorList = ['#8dd3c7','#bebada','#fb8072','#80b1d3','#fdb462','#b3de69','#fccde5','#d9d9d9','#bc80bd','#ccebc5','#80b1d3','#fdb462','#b3de69','#fccde5']

let topicThemes = {}

topicNameList.forEach((topic,i)=>{
	topicThemes[topic] = {
		icon : topic.toLowerCase() + '.png' ,
		color : colorList[i]
	}
})
let iconSrcUrl = './assets/icons_/'
let topicThemesConfig = {
	min_width : 50,    // 显示 icon
	max_width : 150	   // 显示 比例
}

const visBox = document.getElementById("topic-container");
let  h = visBox.offsetHeight; //高度
let  w = visBox.offsetWidth; //宽度
let  vRectHeight = 35

// 数据格式转换
function dataAdapter(_line_data){
	let ps = _line_data.traj.map((line) => {
		return {
			date : line.startTime.split(' ')[0],
			time : line.startTime.split(' ')[1],
			topics : line.topics
		}
	})

	return {
			id : _line_data.id,
			ps : ps
	}
}



let timeScale,timeScale2     //两个 timeScale 
let register_func_list      //注册的 zoom 时触发的函数 列表
let register_click_list = new Map()  //用于 click 时选择
// let traj_select_func  		//线 轨迹的 callback 函数 




// for all instances 
function init(timeRange){
	d3.select('#topic-container')
		.selectAll('*')
		.remove() 

	register_func_list	= []
	_appendWidgets(timeRange)
}


function _appendWidgets(timeRange){
	let  vHeight = h ,vWidth = w

	console.log(timeRange)
	// scales 
	timeScale = d3.scaleTime()
		.range([0,vWidth])
	timeScale2 = d3.scaleTime()
		.range([0,vWidth])

	// set domain
	timeScale.domain(timeRange)
	timeScale2.domain(timeRange)

	//zoom 
	let zoom = d3.zoom()
		.scaleExtent([1, 100])
		.on('zoom',()=>{
			return func_zoomed()
		})


	// 顶部时间轴 
	let topAxis =  d3.axisBottom(timeScale)
	let tr = d3.timeMinute.range(timeRange[0],timeRange[1],10)
	topAxis.tickValues(tr)
	  	.tickSizeOuter(0)
	  	.tickPadding(10)
		.tickFormat(function(d, i) { 
			let interval = Math.ceil(60 / (timeScale(tr[1]) - timeScale(tr[0])))
			let r = ''
			if(i % interval == 0){
				if( (i>0) && d.toDateString() != tr[i-1].toDateString())
					r += d.toLocaleDateString()+' '
				r += d.toTimeString().slice(0,8)
			}
			return r 
		});	
	let AxisTop =  d3.select('#topic-container')
			.append('div')
			.attr('class','top-axis-container')
			.append('svg')
				.attr('width',vWidth * 0.9)
			.append("g")
		      .attr("class", "axis axis--top")
		      .call(topAxis);

		function syncAsix(){
			d3.select('.axis--top').call(topAxis)
		}


	var brush = d3.brushX()
	    .extent([[0, 0], [vWidth * 0.9, vRectHeight]])
	    .on("brush end", brushed);

	d3.select('.top-axis-container').select('svg')
		.append('g')
		.attr("class", "brush")
      	.call(brush)
      	// .call(brush.move, x.range());

	register_zoom_func(  syncAsix ,null )


	// 中间的 toipcs
	d3.select('#topic-container').append('div')
		.attr('class','rect-group-container')


	// 底部的 zoom 监听svg
	let listenerRect = d3.select('#topic-container').append('svg')
			.attr('width',vWidth - 10)
			.attr('height',40)
			.attr('class','listener-svg')
		.append('rect')
			.attr('class','listener-rect')
			.attr('x',0)
			.attr('y',0)
			.attr('width',vWidth)
			.attr('height',40)
		.on('mousemove',() =>{
			let x = d3.event.offsetX

			if(x <= vWidth * 0.05 || x >= vWidth * 0.95){
				d3.select('#topic-container').selectAll('.tick-line').remove()
			}else{
				on_tick_move(x)
			}
		})
		.on('mouseleave',()=>{
			d3.select('#topic-container').selectAll('.tick-line').remove()
		})

	listenerRect.call(zoom)
		// .on("mousedown.zoom", null)   //拖动
}

//图例
function addLegend(){
    let container = d3.select('#topic-legend')
    topicNameList.forEach((name,i)=>{
    	let item = container.append('div').attr('class','legend-item')
   	 	item.append('div').attr('class','legend-rect')
   	 		.style('background-color',colorList[i])
	    item.append('div').attr('class','legend-name')
	    	.text(name)
    })
}
addLegend()


function brushed(){
	console.log(d3.event.selection)
}


function func_zoomed(){
	let t = d3.event.transform
	timeScale.domain(t.rescaleX(timeScale2).domain())   //  timeScal2 不变


	register_func_list.forEach((f) =>  {
		if(f.whos)
			f.func.call(f.whos) 
		else
			f.func()
	})
} 

function register_zoom_func(func, whos){
	if(whos)
		register_func_list.push(
			{ func ,whos }
		)
	else
		register_func_list.push(
			{ func  }
		)
}

// function func_clicked(_th,x){
// 	let whos = register_click_list.get(_th)
// 	let tr = whos.func.call( whos.who , x) 
// 	traj_select_func(whos.who.id , tr.period_time)
// }

// func => _caltime_period
// function register_click_func(id,who,func){
// 	register_click_list.set(id,{
// 		who , func
// 	})
// }

// function registr_select_func(func){
// 	traj_select_func = func
// }


function on_tick_move(x){
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


//  一个 instance 代表一个 方块
class topicZoomRect {
	_init(_data,index){
		let data = dataAdapter(_data)
		console.log('data:',data)
		let _el = document.createElement('div')
		_el.className = 'rect-container th' + index
		this.rootEl = _el
		this.vHeight = vRectHeight
		this.vWidth =  w * 0.9
		document.getElementsByClassName('rect-group-container')[0].appendChild(_el)
		this.data = data
		this.index = index   //第几个
	}
	bind(select_outer,un_select_outer){
		this.un_select_outer = un_select_outer
		this.select_outer = select_outer
	}
	// 需要当 rootEl 挂载后再 append
	_appenSVG(){

		let { vHeight,vWidth,tLeft,tTop,index } = this
		let svg = d3.select('#topic-container').select('.th'+index)  //选择有隐患
				.append('svg')
				.attr('width',vWidth) 
				.attr('height',vHeight)

		let chart = svg.append('g')
				.attr('class','chart')
		      	.attr("transform", "translate(12,0)")

		this.chart = chart
	}

	_setAxis(){
		let { data } = this

		let ps = data.ps
		let id = data.id 

		let dates = ps.map((el) => {
			return new Date(el.date + 'T' + el.time)
		})

		let xAxis = d3.axisBottom(timeScale)
		xAxis.tickValues(dates.map((el)=>{
				return el
			}))
			.ticks(d3.timeMinute.every(15))
		  	.tickSizeOuter(0)
		  	.tickPadding(10)
			.tickFormat(function(d, i) { 
				if( ( i  > 0) &&  (timeScale(dates[i]) - timeScale(dates[i-1]) ) < 20 )
					return ''
				return ps[i].time.slice(0,5)
			});	

		this.dates  = dates
		this.id = id 

		return { dates,xAxis } 
	}

	/*
		- rect container 
			- svg 
				- rect show-rects
			- topic-rect-container
				- topic-rect
		两层重合的  ，外面一层与里面一层对齐
	*/
	_appendShowRect(){
		let { chart}= this
		let { dates,xAxis } = this._setAxis()

		let gRects = chart.insert('g','.listener-rect')
				.attr('class','rects-group')

		let rects = gRects.selectAll('.show-rects')
			.data(dates).enter()
			.append('rect')
				.attr('class','show-rects')
				.attr('y',0)
				.attr('fill','none')
				.attr('opcity',0)
				.attr('height',vRectHeight)


		gRects.append("g")
		      .attr("class", "axis axis--x")
		      .attr("transform", "translate(0, "+ (vRectHeight + 1) + ")")
		      .call(xAxis);

		let self = this
		this.update_rect = function(){
			chart.select(".axis--x").call(xAxis)

			let show = {}

			rects
				.attr('x',(d,i)=>{
					// console.log(dates[i])
					let x = timeScale(dates[i])
					// console.log(x)
					// x = (x >= 0) ? x : 0
					show.x = x
					return x
				})
				.attr('width',(d,i)=>{
					let width = timeScale(dates[i+1]) - timeScale(dates[i])
					width = (width >=  0) ? width : 0 
					show.width = width
					return width 
				})

			// console.log(show.x,show.width)

			self.rects = rects 
		}

		register_zoom_func( this.update_rect ,this )
		register_zoom_func( this._syncTopicRect ,this)
	}
	_appendTopicRect(){
		let { rects,vHeight,vWidth,index,id } = this
		let self = this
		let topicContainer =  
			d3.select('.th'+index)
			  .insert('div')
			  .attr('class','topic-rect-container')
			  .style('height',vHeight + 'px')
			  .style('width',vWidth   + 'px')

		rects.each(function(t){
			//对每一个 rect
			topicContainer.append('div')
				.attr('class','topic-rect')
				.on('mouseenter',function(){					

					//其他的包括其他行的变暗
					d3.selectAll('.topic-rect').style('opacity',0.2)
					//选中的这块变亮
					d3.select(this).style('opacity',1)

					// 计算选中的是第几块
					let v_p  = d3.mouse( this )
					let t_x  = v_p[0]
					console.log(t)
					// console.log(self._caltime_period(t_x))
					// 联动
					self.high_light_rect()
				})
				.on('mouseleave',function(){
					self.unhigh_light_rect()
				})

		})

		this.topicContainer = topicContainer
	}
	_syncTopicRect(){
		let { rects,topicContainer,data,selectedIndex } = this

		let  _rects = d3.selectAll('.rect-container:last-child .topic-rect')
		let  _rect 
		

		rects.each(function(d,i){
			let rect = d3.select(this)
			let width = rect.attr('width'),
				height = rect.attr('height'),
				x 		= rect.attr('x'),
				y 		= rect.attr('y')
			_rect = topicContainer.select('.topic-rect:nth-child('+(i+1)+')')


			//移除 child elements 
			_rect.selectAll('div').remove() 
			if(!data.ps[i].topics){

				return
			}

			let topic_top = data.ps[i].topics[0]
			let topic_top_name = topic_top.topic
			let topic_top_val =  Math.round(+topic_top.val * 100)+ '%'

			let topic_2rd = data.ps[i].topics[1]
			let topic_2rd_name = topic_2rd.topic.toLowerCase()
			let topic_2rd_val =  Math.round(+topic_2rd.val * 100)+ '%'

			let topic_3rd = data.ps[i].topics[2]
			let topic_3rd_name = topic_3rd.topic.toLowerCase()
			let topic_3rd_val =  Math.round(+topic_3rd.val * 100)+ '%'

			_rect.style('width',width+'px')
				.style('height',height+'px')
				.style('left',x  + 'px')
				.style('top',y + 'px')
				.style('background-color',topicThemes[topic_top_name].color)

			if(+width  <  topicThemesConfig.min_width){
					_rect.style('background-color','#e8e8e8')
			}else if(+width  <  topicThemesConfig.max_width){
				let box = _rect.append('div')
							.attr('class','mid-box')
					box.append('img')		
						.attr('src',iconSrcUrl + topicThemes[topic_top_name].icon)
					box.append('div')
						.attr('class','precent-text')
						.html(topic_top_val)	
			}else{
				let left_box = _rect.append('div')
							.attr('class','left-box')
				let right_box = _rect.append('div')
							.attr('class','right-box')

					left_box.append('img')		
						.attr('src',iconSrcUrl + topicThemes[topic_top_name].icon)
					left_box.append('div')
						.attr('class','precent-text')
						.html(topic_top_val)

					right_box.append('div')
						.attr('class','precent-text')
						.html(topic_2rd_name + ' : ' + topic_2rd_val)
					right_box.append('div')
						.attr('class','precent-text')
						.html(topic_3rd_name + ' : ' + topic_3rd_val)
			}



		})

		if(selectedIndex){
			_rect = topicContainer.select('.topic-rect:nth-child('+(selectedIndex+1)+')')
			_rect.style('opacity',1)
		}

		this.topicContainer = topicContainer

		// register_click_func( this.index,this,this._caltime_period )
	}

	_render(){    //注意顺序
		this._appenSVG()
		// this._appendListenRect()
		this._appendShowRect()
		this.update_rect()
		this._appendTopicRect()
		this._syncTopicRect()
	}
	_regisCallback(funcName,func){
		this[funcName]  = func
	}
	_caltime_period(t_x){
		let { rects,dates } = this

		let period_time = [] , index

		rects.each(function(d,i){
			let rect = d3.select(this)
			let width = +rect.attr('width'),
				x 		= +rect.attr('x')
  
			if(t_x >= x && t_x < (x+width)){
				period_time.push(dates[i])
				period_time.push(dates[i+1])
				index = i
			}
		})
		return { period_time,index }
	}


	// hover 
	select(fromOuter = true){
		let { index } = this

		if(fromOuter){
			d3.selectAll('.topic-rect').style('opacity',0.2)
			d3.select('.rect-group-container').select('.th'+index).select('.topic-rect-container')
				.selectAll('.topic-rect')
				.style('opacity',1)
		}

		// if(!fromOuter) this.select_outer(index,'hexa')
	}
	un_select(fromOuter = true){
		let { index } = this
		d3.selectAll('.topic-rect').style('opacity',1)
		// if(!fromOuter) this.un_select_outer(index,'hexa')
	}
	high_light_rect(){    //选中那块 其他变暗

	}
	unhigh_light_rect(){  //所有亮的变亮
		d3.selectAll('.topic-rect').style('opacity',1)
	}
	high_light_whole(){  // 整个高亮 => 当整条轨迹被选中
		let { index } = this
		console.log(index)
		console.log(d3.select('#topic-container').select('.th'+index).select('#topic-rect-container'))

		d3.select('#topic-container').select('.th'+index).select('.topic-rect-container')
			.style('box-shadow','0px 1px 5.5px #333333')
	}
	unhigh_light_whole(){  //取消选择
		let { index } = this
		d3.select('#topic-container').select('.th'+index).select('.topic-rect-container')
			.style('box-shadow','0px 0px 0px')
	}
}



export { init,topicZoomRect  }