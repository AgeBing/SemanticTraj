import * as d3 from 'd3';

import { topicAdd  as drawTopic } from '../app.js'
import { highLightTrajContorl , 
		 unHighLightTrajContorl , 
		 highLightTopiContorl ,
		 unHighLightTopiContorl,
		 highlightPoisInTrajs,
		 unHighlightPoisInTrajs
		  }  from '../app.js'
import { highlightHexa , unHighlightHexa } from '../semantic/index.js'


let resultlist = {
	container	:d3.select("#list-contain"),
	showNum 	: 100 ,
	renderTrajs : [] ,
	orderTrasjs : [] ,
	filterPids  : [] ,
	filterInGeoPids : [],
	filterInTimePids : [],
	checkPids  : [],
	hide : false         //  按钮属性 , 表示是否隐藏 被过滤的属性
}

let  visBox = document.getElementById("resultlist");
let  width = visBox.offsetWidth; //宽度
let  rectWidth = width - 230

export function draw( data ){
	let { showNum,hide } = resultlist
	resultlist.orderTrasjs = data
	resultlist.filter()
}
export function filterListGeo( pids  ){
	resultlist.filterInGeoPids = pids
	resultlist.filterPids = resultlist.filterInGeoPids.concat( resultlist.filterInTimePids )
	resultlist.filter()
}
export function filterListTime( pids  ){
	resultlist.filterInTimePids = pids
	resultlist.filterPids = resultlist.filterInGeoPids.concat( resultlist.filterInTimePids )
	resultlist.filter()
}
//样式高亮
export function highLightOneItem(id){
	let allItems = d3.selectAll('.list-item')
		// console.log('高亮',id)

	allItems.each(function(){
		let curItem = d3.select(this),
			curId = curItem.attr('id')
		if(curId == id){
			curItem.style('background-color','rgb(158, 158, 158)')
		}
	})
}
export function unhighLightOneItem(id){
	let allItems = d3.selectAll('.list-item')
	allItems.each(function(){
		let curItem = d3.select(this),
			curId = curItem.attr('id')
		if(curId == id){
			curItem.style('background-color','#FFFFFF')
		}
	})
}


resultlist.draw = function(){
	let { renderTrajs } = this
	let alltraj = this.container
		.select("#resultlist")
		.selectAll(".list-item")
		.data(renderTrajs , d=>d.pid )

	let addtraj = alltraj.enter()        // 添加
		.append("div")
		.classed("list-item",true)
		.attr('id',d=>d.pid)

	let mergetraj = addtraj.merge(alltraj)  //更新
	mergetraj.attr('id',d=>d.pid)
			 .attr('class','list-item')


	// checkbox
	let checkContain = addtraj.append('div').attr('class',"check-contain")
		checkContain.append('input')
				.attr('type','checkbox')
				.attr('id',d => 'input'+d.pid )
		checkContain.append('label')
				.attr('for',d => 'input'+d.pid )

	// pid
	addtraj.append('div').attr('class','id-word')
	mergetraj.select(".id-word")
		.text(d=>d.pid)

	// rect 
	addtraj.append('div').attr('class','percent-rect')
	mergetraj.select(".percent-rect")
		.style("width", d=> d.per * 0.01 * rectWidth + 'px')

	// value
	addtraj.append('div').attr('class','percent-word')
	mergetraj.select('.percent-word')
		.text(d=> d.per+'%')


	mergetraj.on('mouseenter',enterEventHandler).on('mouseleave',leaveEventHander)


	this.filterDisplay()
	alltraj.exit().remove()
}
resultlist.reflow = function(){
	let { container,renderTrajs,filterPids } = this
	let flowIndex = 0 , itemHeight = 40 ,topHeight = 0 

	let allItems = container.selectAll('.list-item')

	resultlist.renderTrajs.forEach( (traj)=>{
		let pid = traj.pid 
		allItems.each(function(){
			let curItem = d3.select(this),
				curId = curItem.attr('id')
				if(pid == curId && curItem.attr('class').indexOf('hide') == -1){
					topHeight = (flowIndex * itemHeight)
					curItem.style('top',topHeight + 'px')
					flowIndex += 1
				}
		})
	})
}
resultlist.filter = function(){
	let isFiltered =  d3.select('#filter-btn').attr('filtered')

	let { showNum,hide,filterPids,orderTrasjs } = resultlist
	let i = 0 , count = showNum
	let _renderTrajs = []
	let _renderPids = []

	if( isFiltered ){   // 仅展示 符合条件的 
		for(i = 0;i < orderTrasjs.length;i++ ){
			let  pid = orderTrasjs[i].pid
			if(filterPids.indexOf(pid) == -1){
				_renderTrajs.push( orderTrasjs[i] )
				_renderPids.push(pid)
				count--
			}
			if(count <= 0) break
		}
	}else{
		_renderTrajs = resultlist.orderTrasjs.slice(0,showNum)
		_renderTrajs.forEach((traj)=>{
			if(filterPids.indexOf(traj.pid) ==-1){
				_renderPids.push(traj.pid)
			}
		})
	}

	resultlist.renderTrajs = _renderTrajs

	let checkPids = []
	this.checkPids.forEach((pid)=>{
		if(_renderPids.indexOf(pid)!=-1){
			checkPids.push(pid)
		}
	})
	this.checkPids = checkPids
	drawTopic( checkPids )

	this.draw()

}
resultlist.filterDisplay = function(){
	let { container,hide,filterPids   } = this
	let allItems = container.selectAll('.list-item')

	let filterClassName =  ( hide == true ?  'hide' : 'filtered')  
	allItems.each(function(){
		let curItem = d3.select(this),
			curId = curItem.attr('id')

		if(filterPids.indexOf(curId) != -1) {
			curItem.attr('class','list-item ' + filterClassName)
		}
	})
	this.filterCheckPid()
	this.handleInput()
	this.reflow()
	updatePerNum()
}
resultlist.handleInput = function(){
	let { container,checkPids  } = this
	let allItems = container.selectAll('.list-item')
	let self = this
	allItems.select('input')
		.property('checked',(d)=>{
			if( checkPids.indexOf(d.pid) != -1) return true
			else return false
		})
		.on('change',function(d){
			let pid = d.pid 
			let add = d3.select(this).property('checked') 

			if(add){   //add
				self.checkPids.push(pid)
			}else{	   //remove
				self.removeCheckPid(pid)
			}
			drawTopic( self.checkPids )

		})


}
resultlist.filterCheckPid = function(){
	let self = this
	this.filterPids.forEach((fpid)=>{
		if(self.checkPids.indexOf(fpid)!=-1) self.removeCheckPid(fpid)
	})
}
resultlist.removeCheckPid = function(pid){
	let newTopicPids = []
	this.checkPids.forEach((_pid)=>{
		if(_pid != pid){
			newTopicPids.push(_pid)
		}
	})
	this.checkPids = newTopicPids
}


// 过滤按钮
d3.select('#filter-btn')
	.attr('filtered',null)
	.on('mousedown',btnEventHandler)



function btnEventHandler(){
	let isFiltered =  d3.select('#filter-btn').attr('filtered')
	if(isFiltered){
		d3.select(this).text('hide')
		d3.select(this).attr('filtered',null)
		resultlist.hide = false
	}else{
		d3.select(this).text('show')
		d3.select(this).attr('filtered',true)
		resultlist.hide = true
	}
	resultlist.filter()
}

function enterEventHandler(){
	let disable = d3.select(this).select('input').property('disabled')
	if(disable) return
	
	let pid = d3.select(this).attr('id')

	highLightOneItem(pid)
	highLightTrajContorl(pid)
	highlightPoisInTrajs(pid)
	highlightHexa(pid)
	if( d3.select(this).select('input').property('checked') )
		highLightTopiContorl(pid)
}
function leaveEventHander(){
	let disable = d3.select(this).select('input').property('disabled')
	if(disable) return
	let pid = d3.select(this).attr('id')
	unhighLightOneItem(pid)
	unHighLightTrajContorl()
	unHighlightPoisInTrajs()
	unHighlightHexa(pid)
	if( d3.select(this).select('input').property('checked') ){
		unHighLightTopiContorl(pid)
	}
}

function updatePerNum(){
	let { orderTrasjs ,filterPids } = resultlist

	let avaNum = orderTrasjs.length - filterPids.length
	let text =  avaNum + '/' + orderTrasjs.length
	d3.select("#list-contain").select('.per-num')
		.html(text)
}


export function demo(){
	resultlist.draw()
}