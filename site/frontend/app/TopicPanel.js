import * as d3 from 'd3';

let topicThemes = {
	park : {
		icon  : '公园.png',
		color : '#6699CC'
	},
	live: {
		icon  : '建筑.png',
		color : '#FFF275'
	},
	business :{
		icon  : '商铺.png',
		color : '#FF8C42'
	},
	other :{
		color : ['FF3C38','A23E48']
	}
}
let topicThemesConfig = {
	min_width : 50,    // 显示 icon
	max_width : 100	   // 显示 比例
}

let iconSrcUrl = './assets/icons/'

var visBox = document.getElementById("topic-vis");


let vRectHeight = 50

class topicZoomRect {
	_init(vHeight,vWidth,container,data){
		let _el = document.createElement('div')
		_el.className = 'zoom-rect-container'

		this.rootEl = _el
		this.vHeight = vHeight
		this.vWidth = vWidth
		container.appendChild(_el)  //挂载到传进来的 container


		this.data = data
	}
	// 需要当 rootEl 挂载后再 append
	_appenSVG(){
		// this._init()
		let { vHeight,vWidth,tLeft,tTop } = this
		let svg = d3.selectAll('.zoom-rect-container:last-child')  //选择有隐患
			.append('svg')
				.attr('width',vWidth + 24) 
				.attr('height',vHeight + 25)
		let chart = svg.append('g')
				.attr('class','chart')
		      	.attr("transform", "translate(12,0)")


		this.chart = chart
	}
	_appendListenRect(){
		let { vHeight,vWidth } = this

		// scales 
		let timeScale = d3.scaleTime()
			.range([0,vWidth])
		let timeScale2 = d3.scaleTime()
			.range([0,vWidth])

		//zoom 
		let zoom = d3.zoom()
			.scaleExtent([1, 100])
			.on('zoom',()=>{
				return this.func_zoomed()
			})
	
		let self = this
		let listenerRect = this.chart
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
				// console.log(x,y)
				let traj_id = self.id
				let { period_time,index } =  self._caltime_period(x)   //通过 x 计算当前点击的时间段
				self.selectPeriod(traj_id,period_time)   //触发闭包
				self.selectedIndex = (self.selectedIndex == index) ? null : index

				self._setTopicRectSelected(self.selectedIndex)

			})
		listenerRect.call(zoom)
			.on("mousedown.zoom", null)

		this.timeScale = timeScale
		this.timeScale2 = timeScale2

	}

	_setAxis(){
		let { data,timeScale,timeScale2 } = this


		let ps = data.ps
		let id = data.id 


		let _date = '2014-01-14'
		let d1 = new Date(ps[0].date + 'T' + ps[0].time)
		let d2 = new Date(ps[ps.length-1].date + 'T' + ps[ps.length-1].time)


		let dates = ps.map((el) => {
			return new Date(el.date + 'T' + el.time)
		})

		// set domain
		timeScale.domain([d1,d2])
		timeScale2.domain([d1,d2])

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

		this.timeScale = timeScale
		this.timeScale2 = timeScale2
		this.dates  = dates
		this.id = id 

		return { dates,xAxis } 
	}
	_appendShowRect(){
		let { chart,timeScale,timeScale2 }= this
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

			this.rects = rects 
		}

		this.func_zoomed  = function(){
			let t = d3.event.transform
			timeScale.domain(t.rescaleX(timeScale2).domain())   //  timeScal2 不变
			this.update_rect()
			this._syncTopicRect()
		}
	}

	_appendTopicRect(){
		let { rects,vHeight,vWidth } = this

		let topicContainer =  
			d3.selectAll('.zoom-rect-container:last-child')
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
			_rect.selectAll('img').remove() 
			let _topic = data.ps[i].topic

			if(+width < topicThemesConfig.min_width){

			}else if(+width < topicThemesConfig.max_width){
				_rect.append('img')
					.attr('src',iconSrcUrl + topicThemes[_topic].icon)
			}else{

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
	}

	_render(){    //注意顺序
		this._appenSVG()
		this._appendListenRect()
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



export { topicZoomRect }