import * as d3 from 'd3';

import { topicAdd  as drawTopic } from '../app.js'
import { highLightTrajContorl , 
		 unHighLightTrajContorl , 
		 highLightTopiContorl ,
		 unHighLightTopiContorl
		  }  from '../app.js'
 
let allLength           //总体轨迹数量
let checkedPids = []    //用户勾选的 id , 
let filteredPids = [] , filteredPidsGeo = [] ,filteredPidsTime = []   // 被过滤掉的 id



let resultlist={
	container:d3.select("#list-contain"),
	maxNum : 500,
	init:function(argument){}
}


resultlist.draw = function(data){

	allLength = data.length

	if(allLength>resultlist.maxNum)
		data = data.slice(0,resultlist.maxNum)

	let alltraj = resultlist.container
		.select("#resultlist")
		.selectAll(".list-item")
		.data(data)

	let addtraj = alltraj.enter().append("div")
						.classed("list-item",true)
						.attr('id',d=>d.pid)

	alltraj.exit().remove()

	let mergetraj = addtraj.merge(alltraj)


	//UPDATE + ENTER  ID
	mergetraj.attr('id',d=>d.pid)

	// chechbox
	let checkContain = addtraj.append('div').attr('class',"check-contain")
		checkContain.append('input')
				.attr('type','checkbox')
				.attr('id',(d)=>{
					return 'input'+d.pid
				})
		checkContain.append('label')
				.attr('for',(d)=>{
					return 'input'+d.pid
				})

	mergetraj.select(".check-contain")
		.select("input")
		.property('checked',function(d){
			if( checkedPids.indexOf(d.pid) != -1 ){
				return true
			}else{
				return false
			}
		})
		.on('change',function(d){
			console.log('add check')
			topicAdd( d.pid  , d3.select(this).property('checked')  )   // TopicAdd 添加勾选的记录至 已选列表中
		})



	// id
	addtraj.append('div').attr('class','id-word')
	mergetraj.select(".id-word")
		.text(d=>d.pid)

	// rect
	addtraj.append('div').attr('class','percent-rect')
	mergetraj.select(".percent-rect")
		// .style("width","200px")


	// value
	addtraj.append('div').attr('class','percent-word')
	mergetraj.select('.percent-word')
		.text('98%')


	mergetraj.on('mouseenter',function(d){
		let disable = d3.select(this).select('input').property('disabled')
		if(disable) return
		highLightOneItem(d.pid)
		highLightTrajContorl(d.pid)
		if( d3.select(this).select('input').property('checked') )
			highLightTopiContorl(d.pid)

	})
	.on('mouseleave',function(d){
		let disable = d3.select(this).select('input').property('disabled')
		if(disable) return
		unhighLightOneItem(d.pid)
		unHighLightTrajContorl()
		if( d3.select(this).select('input').property('checked') ){
			unHighLightTopiContorl(d.pid)
		}
	})
}

export function draw(data){
	resultlist.draw(data)
}

function topicAdd(pid,add){

	if(add){   //add
		checkedPids.push(pid)
	}else{	   //remove
		removeCheckedPid(pid)
	}
	// 重新绘制线框
	drawTopic(checkedPids)
}


function btnEventHandler(){
	let isFiltered =  d3.select('#filter-btn').attr('filtered')
	if(isFiltered){
		d3.select(this).text('hide')
		d3.select(this).attr('filtered',null)
	}else{
		d3.select(this).text('show')
		d3.select(this).attr('filtered',true)
	}
	filterDisplay()
	reflowItems()
}
function filterDisplay(){
	let isFiltered =  d3.select('#filter-btn').attr('filtered')
	let allItems = d3.selectAll('.list-item')
	if(isFiltered){
			allItems.each(function(){
				let curItem  = d3.select(this),
					curId = curItem.attr('id')

				if(filteredPids.indexOf(curId) != -1) {
					curItem.attr('class','list-item  hide')
				}
			})
		}else{
			allItems.each(function(){
				let curItem  = d3.select(this),
					curId = curItem.attr('id')
				if( filteredPids.indexOf(curId) != -1 ){
					curItem.attr('class','list-item filtered')
				}
			})
	}
}

// 过滤按钮
d3.select('#filter-btn')
	.attr('filtered',null)
	.on('mousedown',btnEventHandler)




// 将未被选中的项 变成暗色
// 对应项的  Checkbox 也为 false 
// 在 app.js 中被引用
function filter(){
	let allItems = d3.selectAll('.list-item')

	allItems.each(function(){
		let curItem = d3.select(this),
			curId = curItem.attr('id')

		let ifChecked = curItem.select('input').property('checked')  //是否被勾选

		if( filteredPids.indexOf(curId) != -1 ){     //被筛除
			curItem.attr('class','list-item filtered')
			curItem.select('input').attr('disabled','true')
			if(ifChecked){
				curItem.select('input').property('checked',false)
				removeCheckedPid(curId)
			}
		}else{	//保留下的
			curItem.attr('class','list-item')
			curItem.select('input').attr('disabled', null)
		}
	})
	drawTopic(checkedPids)
	updatePerNum()
	filterDisplay()
	reflowItems()
}
export function filterGeo(pids){
	filteredPidsGeo = pids
	filteredPids = filteredPidsTime.concat(filteredPidsGeo)
	filter()
}
export function filterTime(pids){
	filteredPidsTime = pids
	filteredPids = filteredPidsTime.concat(filteredPidsGeo)
	filter()
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



function removeCheckedPid(pid){
	let newTopicPids = []
	checkedPids.forEach((_pid)=>{
		if(_pid != pid){
			newTopicPids.push(_pid)
		}
	})
	checkedPids = newTopicPids
}

function updatePerNum(){
	let avaNum = allLength - filteredPids.length
	let text =  avaNum + '/' + allLength
	console.log(text)
	d3.select("#list-contain").select('.per-num')
		.html(text)
}

function reflowItems(){
	console.log('---------------reflow------------')
	let allItems = d3.selectAll('.list-item')
	let flowIndex = 0 , itemHeight = 40 ,topHeight = 0 

	// 该 flowIndex 为排序的顺序 ，


	allItems.each(function(d,i){
		// console.log(i)
		let curItem = d3.select(this)
		if(curItem.attr('class').indexOf('hide') == -1){
			// console.log('one hide')
			topHeight = (flowIndex * itemHeight)
			curItem.style('top',topHeight + 'px')
			flowIndex += 1
		}
	})
}

// export function draw(data){
// 	let maxNum = 500    // 設置最多顯示數目

// 	for(let i = 0 ;i < data.length;i++){
// 		appendOne( data[i] )
// 		if( i > maxNum) break;
// 	}

// 	console.log(data)
// }
// //添加一条 记录
// function appendOne(Onetraj){

// 	let item = d3.select('.list-window')
// 				.append('div')
// 				.attr('class','list-item')
// 				.attr('id',Onetraj.pid)
					
// 	item.append('div').attr('class',"check-contain")
// 		.append('input').attr('type','checkbox')
// 		.on('change',function(){
// 			topicAdd( Onetraj.pid  , d3.select(this).property('checked')  )   // TopicAdd 添加勾选的记录至 已选列表中
// 		})

// 	item.append('div').attr('class','id-word')
// 		.text(Onetraj.pid)

// 	item.append('div').attr('class','percent-rect')
// 			.append('div').attr('class','percent-rect-color')

// 	item.append('div').attr('class','percent-word')
// 		.text('98%')

// 	item.on('mouseenter',function(){
// 		highLightOneItem(Onetraj.pid)
// 		highLightTrajContorl(Onetraj.pid)

// 		let ifChecked = item.select('input').property('checked')
// 		if( ifChecked ){
// 			highLightTopiContorl(Onetraj.pid)
// 		}
// 	})
// 	.on('mouseleave',function(){
// 		unhighLightOneItem(Onetraj.pid)
// 		unHighLightTrajContorl()
// 		let ifChecked = item.select('input').property('checked')
// 		if( ifChecked ){
// 			unHighLightTopiContorl(Onetraj.pid)
// 		}
// 	})
// }
