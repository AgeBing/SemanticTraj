import * as d3 from 'd3';

let topicNameList = ["Beauty","Food","Shop","Uptown","Education","Hospital","Hotel","Life","Finance","Traffic","Enterprise","Scenicspot","Government"]
// let colorList = ["#ffcfd9","#ff8399","#d5fff5","#458f8f","#ffac4b","#2b7bf6","#f4d3b0","#f7d177","#8cabef","#2ebef5","#fb929e","#ffdfdf","#fff6f6","#aedefc"]
let colorList =["#b8ffd0","#ecffc1","#ffe6cc","#dfbaf7","#ffcd3c","#35d0ba","#dcb5ff","#a5bdfd","#77529e","#fb929e","#ffdfdf","#fff6f6","#aedefc","#ff7657"]

let topicThemes = {}

topicNameList.forEach((topic,i)=>{
	topicThemes[topic] = {
		icon : topic.toLowerCase() + '.png' ,
		color : colorList[i]
	}
})
let iconSrcUrl = './assets/icons/'
let topicThemesConfig = {
	min_width : 50,    // 显示 icon
	max_width : 100	   // 显示 比例
}

var visBox = document.getElementById("topic-vis");

let  h = visBox.offsetHeight; //高度
let  w = visBox.offsetWidth; //宽度

let vRectHeight = 50

// 数据格式转换
function dataAdapter(_line_data){
	let ps = _line_data.points.map((line) => {

		let topic = ( line.topics == undefined ) ? 'Beauty' :line.topics[0].topic 
		return {
			date : line.date,
			time : line.time,
			topic : topic
		}
	})


	return {
			id : _line_data.id,
			ps : ps
	}
}



let timeScale,timeScale2   //两个 timeScale 
let register_func_list  //注册的 zoom 时触发的函数 列表
let register_click_list = new Map()  //用于 click 时选择

let  traj_select_func  //线 轨迹的 callback 函数 
function init(timeRange){
	d3.select('#topic-vis')
		.selectAll('*')
		.remove() 

	appendListenRect(timeRange)
	register_func_list	= []
	
}

function appendListenRect(timeRange){
	let  vHeight = h ,vWidth = w

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

	let listenerRect = d3.select('#topic-vis').append('svg')
			.attr('width',vWidth)
			.attr('height',vHeight)
			.attr('class','listener-svg')
		.append('rect')
			.attr('class','listener-rect')
			.attr('x',0)
			.attr('y',0)
			.attr('width',vWidth)
			.attr('height',vHeight)
		.on('click',() =>{
			let x = d3.event.offsetX
			let y = d3.event.offsetY
			// this._selectPeriod(x,y)
			console.log(x,y)

			// 计算是第几个
			let v_one_h = 78 + 4 * 2
			let _th = Math.floor( y / v_one_h )

			// 计算 margin  ex. 39.3594px
			let margin_left = d3.select('.zoom-rect-container').style('margin-left')
			margin_left = +margin_left.split('px')[0]

			func_clicked(_th,x - margin_left - 12)
		})

	listenerRect.call(zoom)
		// .on("mousedown.zoom", null)   //拖动

}

function func_zoomed(){
	let t = d3.event.transform
	timeScale.domain(t.rescaleX(timeScale2).domain())   //  timeScal2 不变

	register_func_list.forEach((f) =>  f.func.call(f.whos) )
} 

function register_zoom_func(func, whos){
	register_func_list.push(
		{ func ,whos }
	)
}

function func_clicked(_th,x){
	let whos = register_click_list.get(_th)

	let tr = whos.func.call( whos.who , x) 

	traj_select_func(whos.who.id , tr.period_time)

	console.log(_th)
	// console.log('timerange :',tr)
}

// func => _caltime_period
function register_click_func(id,who,func){
	register_click_list.set(id,{
		who , func
	})
}

function registr_select_func(func){
	traj_select_func = func
}



class topicZoomRect {
	_init(vHeight,vWidth,container,data,index){
		data = dataAdapter(data)

		let _el = document.createElement('div')
		_el.className = 'zoom-rect-container th' + index
		this.rootEl = _el
		this.vHeight = vHeight
		this.vWidth = vWidth

		container.insertBefore(_el,document.getElementsByClassName('listener-svg')[0])  //挂载到传进来的 container
		
		this.data = data
		this.index = index   //第几个
	}
	// 需要当 rootEl 挂载后再 append
	_appenSVG(){

		let { vHeight,vWidth,tLeft,tTop,index } = this
		let svg = d3.select('#topic-vis').select('.th'+index)  //选择有隐患
				.append('svg')
				.attr('width',vWidth + 24) 
				.attr('height',vHeight + 25)

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
					let x = timeScale(dates[i])
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
		let { rects,vHeight,vWidth,index } = this

		let topicContainer =  
			d3.select('.th'+index)
			  .insert('div')
			  .attr('class','topic-rect-container')
			  .style('height',vHeight + 'px')
			  .style('width',vWidth   + 'px')



		rects.each(function(){
			topicContainer.append('div')
						.attr('class','topic-rect')
		})

		this.topicContainer = topicContainer
	}
	_syncTopicRect(){
		let { rects,topicContainer,data,selectedIndex } = this

		let  _rects = d3.selectAll('.zoom-rect-container:last-child .topic-rect')
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

			let _topic = data.ps[i].topic


			if(+width  <  topicThemesConfig.min_width){

			}else if(+width  <  topicThemesConfig.max_width){
				let box = _rect.append('div')
							.attr('class','mid-box')
					box.append('img')		
						.attr('src',iconSrcUrl + topicThemes[_topic].icon)
					box.append('div')
						.attr('class','precent-text')
						.html('25%')	
			}else{
				let left_box = _rect.append('div')
							.attr('class','left-box')
				let right_box = _rect.append('div')
							.attr('class','right-box')

					left_box.append('img')		
						.attr('src',iconSrcUrl + topicThemes[_topic].icon)
					left_box.append('div')
						.attr('class','precent-text')
						.html('25%')

					right_box.append('div')
						.attr('class','precent-text')
						.html('25%')
					right_box.append('div')
						.attr('class','precent-text')
						.html('25%')
			}

			_rect.style('width',width+'px')
				.style('height',height+'px')
				.style('left',x  + 'px')
				.style('top',y + 'px')
				.style('background-color',topicThemes[_topic].color)

		})

		if(selectedIndex){
			_rect = topicContainer.select('.topic-rect:nth-child('+(selectedIndex+1)+')')
			_rect.style('opacity',1)
		}

		this.topicContainer = topicContainer

		register_click_func( this.index,this,this._caltime_period )
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
	_setTopicRectSelected(i){
 		let { topicContainer } =	this

		let  _rects = topicContainer.selectAll('.topic-rect')
		_rects.style('opacity',0.5)

 		if(i){
			let _rect = topicContainer.select('.topic-rect:nth-child('+(i+1)+')')
			_rect.style('opacity',1)
		}
	}
}



export { init,topicZoomRect,registr_select_func  }