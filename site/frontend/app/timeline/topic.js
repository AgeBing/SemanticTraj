import * as d3 from 'd3';
import * as Config from './config.js';
import { HighLightTrajSectionContorl,unHighLightTrajSectionContorl } from '../app.js'


import { func_list , timeScale } from './time.js'


const visBox = document.getElementById("topic-container");
let  h = visBox.offsetHeight; //高度
let  w = visBox.offsetWidth; //宽度


// 数据格式转换
function dataAdapter(_line_data){
	

	// 将 topics 为空的项去掉 用后面的数据连起来



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


//  一个 instance 代表一条
export class topicZoomRect {
	_init(_data,index){
		let data = dataAdapter(_data)
		let _el = document.createElement('div')
		_el.className = 'rect-container th' + index
		document.getElementsByClassName('rect-group-container')[0].appendChild(_el)
		this.rootEl = _el
		this.vHeight = Config.vRectHeight
		this.vWidth =  w * 0.9
		this.data 	= data
		this.index 	= index   		//代表第几个实例
	}
	_render(){    //注意顺序
		this._appenSVG()
		this._appendShowRect()
		this.update_rect()
		this._appendTopicRect()
		this._syncTopicRect()
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
		let { dates,xAxis } = this._setAxis()    // 时间轴  时间是隐藏的
		let gRects = chart.insert('g','.listener-rect')
				.attr('class','rects-group')
		let rects = gRects.selectAll('.show-rects')
			.data(dates).enter()
			.append('rect')
				.attr('class','show-rects')
				.attr('y',0)
				.attr('fill','none')
				.attr('opcity',0)
				.attr('height',Config.vRectHeight)
		gRects.append("g")
		      .attr("class", "axis axis--x")
		      .attr("transform", "translate(0, "+ (Config.vRectHeight + 1) + ")")
		      .call(xAxis);

		let self = this
		this.update_rect = function(){
			chart.select(".axis--x").call(xAxis)

			rects.attr('x',(d,i)=>{
					let x = timeScale(dates[i])
					return x
				})
				.attr('width',(d,i)=>{
					let width = timeScale(dates[i+1]) - timeScale(dates[i])
					width = (width >=  0) ? width : 0 
					return width 
				})
			self.rects = rects 
		}


		func_list.push({
			'func' : this.update_rect,
			'whos' : this
		})
		func_list.push({
			'func' : this._syncTopicRect,
			'whos' : this
		})
	}
	_setAxis(){
		let { data } = this
		let ps = data.ps
		let id = data.id 

		let dates = ps.map((el) => {
			return new Date(el.date + 'T' + el.time)
		})

		let xAxis = d3.axisBottom(timeScale)
		this.dates  = dates
		this.id = id 

		return { dates,xAxis } 
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
					// 联动
					self.high_light_rect(t)
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
		
		// 根据不同的长度设置为不同的样式
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
				console.log('have empty topic!!')
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
				.style('background-color',Config.topicThemes[topic_top_name].color)

			if(+width  <  Config.topicThemesConfig.min_width){
					_rect.style('background-color','#bfbfbf')
			}else if(+width  <  Config.topicThemesConfig.max_width){
				let box = _rect.append('div')
							.attr('class','mid-box')
					box.append('img')		
						.attr('src',Config.iconSrcUrl + Config.topicThemes[topic_top_name].icon)
					box.append('div')
						.attr('class','precent-text')
						.html(topic_top_val)	
			}else{
				let left_box = _rect.append('div')
							.attr('class','left-box')
				let right_box = _rect.append('div')
							.attr('class','right-box')

					left_box.append('img')		
						.attr('src',Config.iconSrcUrl + Config.topicThemes[topic_top_name].icon)
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
	}

	// hover to select
	select(fromOuter = true){
		let { index } = this

		if(fromOuter){
			d3.selectAll('.topic-rect').style('opacity',0.2)
			d3.select('.rect-group-container').select('.th'+index).select('.topic-rect-container')
				.selectAll('.topic-rect')
				.style('opacity',1)
		}

	}
	un_select(fromOuter = true){
		let { index } = this
		d3.selectAll('.topic-rect').style('opacity',1)
	}
	high_light_rect(t){    //t 如 Tue Jan 14 2014 05:37:06 GMT+0800 (China Standard Time)
		let { index }  = this
		HighLightTrajSectionContorl(index,t)
	}
	unhigh_light_rect(){  //所有亮的变亮
		let { index }  = this
		d3.selectAll('.topic-rect').style('opacity',1)
		unHighLightTrajSectionContorl(index)
	}
	high_light_whole(){  // 整个高亮 => 当整条轨迹被选中
		let { index } = this
		// console.log(index)
		// console.log(d3.select('#topic-container').select('.th'+index).select('#topic-rect-container'))

		d3.select('#topic-container').select('.th'+index).select('.topic-rect-container')
			.style('box-shadow','0px 1px 5.5px #333333')
	}
	unhigh_light_whole(){  //取消选择
		let { index } = this
		d3.select('#topic-container').select('.th'+index).select('.topic-rect-container')
			.style('box-shadow','0px 0px 0px')
	}
}