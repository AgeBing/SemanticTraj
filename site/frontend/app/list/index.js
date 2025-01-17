import * as d3 from 'd3';

import { topicAdd  as drawTopic } from '../app.js'
import { hl_listItem,uhl_listItem }  from '../highlight/index.js' 
import { highlightHexa , unHighlightHexa } from '../semantic/index.js'
import * as Config from '../timeline/config'



let resultlist = {
	container	:d3.select("#list-contain"),
	showNum 	: 50 ,
	addNum      : 50 , 
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
let  rectWidth = width - 260

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
			curItem
				.transition()
				.duration(Config.duration)
				.style('background-color','rgb(158, 158, 158)')
		}
	})
}
export function unhighLightOneItem(id){
	let allItems = d3.selectAll('.list-item')
	allItems.each(function(){
		let curItem = d3.select(this),
			curId = curItem.attr('id')
		if(curId == id){
			curItem
				.transition()
				.duration(Config.duration)
				.style('background-color','#FFFFFF')
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
		.text(d=> {
			let num = d.score
			if(Math.round(num) === num) return num   // 整数
			else{ return num.toFixed(2) }  //小数
		} )


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



d3.select('#filter-btn').on('mousedown',btnEventHandler)
function btnHandler(){
	let checked = d3.select('#semantic-view').select('.switch-btn').property('checked')
	ifSample = !ifSample

	// 重新绘制
	for(let pid of objsH.keys()) {
		let traj = objsH.get(pid).data
		let h = objsH.get(pid).obj
		h.destroy()
		addHexa(traj)
	}
}


function btnEventHandler(){
	// let isFiltered =  d3.select('#filter-btn').attr('filtered')
	resultlist.showNum = resultlist.addNum
	
	let isFiltered = d3.select('#filter-btn').property('checked')
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
	let checked =  d3.select(this).select('input').property('checked')
	hl_listItem( pid , checked )

}
function leaveEventHander(){
	let disable = d3.select(this).select('input').property('disabled')
	if(disable) return
	let pid = d3.select(this).attr('id')
	let checked =  d3.select(this).select('input').property('checked')
	uhl_listItem( pid , checked )
}

function updatePerNum(){
	let { orderTrasjs ,filterPids } = resultlist

	let allNum = orderTrasjs.length
	let selectNum = allNum - filterPids.length
	// let text =  avaNum + '/' + orderTrasjs.length
	let numContan = d3.select("#list-contain").select('.num-contain')
		numContan.select('.select-num').text(selectNum)
		numContan.select('.all-num').text(allNum)		
}

bindCheckAllBtn()
function bindCheckAllBtn(){
	resultlist.container.select('.btn-container').select('.check-contain').select('input')
		.on('change',function(){
				let add = d3.select(this).property('checked') 

				if(add){  
					checkAll()
				}else{	   
					unCheckAll()
				}
			drawTopic( resultlist.checkPids )
		})
}
function checkAll(){
	let items = resultlist.container.selectAll('.list-item')
	let checkedPids = []

	items.each(function(item){
		let curItem = d3.select(this),
			curId = curItem.attr('id')

		if( curItem.attr('class').indexOf('filtered') == -1 ){
			curItem.select('input').property('checked',true)
			checkedPids.push(curId)
		}
	}) 
	resultlist.checkPids = checkedPids
}
function unCheckAll(){
	let inputs = resultlist.container.selectAll('.list-item').selectAll('input')
	inputs.property('checked',false)

	resultlist.checkPids = []
}
function updateCheckNum(){
	let checkNumItem = resultlist.container.select('.btn-container').select('.display-num')

	let checkNum = resultlist.checkPids.length
	checkNumItem.text(checkNum)
	if(checkNum == 0 ){
		checkNumItem.style('color','#e8e8e8')
	}else{
		checkNumItem.style('color','#595959')
	}
}





d3.select('#resultlist').on('scroll',scrollHander)

let listLoadingFlag = false
function scrollHander(){
	// console.log('scroll')
	let scrollTop = d3.event.target.scrollTop
	let scrollHeight = visBox.scrollHeight
	let clientHeight = visBox.clientHeight

	let distance = scrollHeight - clientHeight - scrollTop
	if( distance < 30){
		// console.log('come to bottom')
		if( listLoadingFlag != true){
			loadMore()
		}
	}
}

function loadMore(){
	listLoadingFlag = true
	console.log('loading')
	resultlist.showNum += resultlist.addNum
	// if( resultlist.showNum >= )
	resultlist.filter()
	listLoadingFlag = false
}

export function demo(){
	resultlist.draw()
}

