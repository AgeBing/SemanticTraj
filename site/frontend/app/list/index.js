import * as d3 from 'd3';

import { topicAdd  as drawTopic } from '../app.js'
import { highLightTrajContorl , 
		 unHighLightTrajContorl , 
		 highLightTopiContorl ,
		 unHighLightTopiContorl
		  }  from '../app.js'
 

let topicPids = []

function init(argument) {

}




export function draw(data){
	let maxNum = 500    // 設置最多顯示數目


	for(let i = 0 ;i < data.length;i++){
		appendOne( data[i] )
		if( i > maxNum) break;
	}

}
//添加一条 记录
function appendOne(Onetraj){

	let item = d3.select('.list-window')
				.append('div')
					.attr('class','list-item')
					.attr('id',Onetraj.pid)
					
	item.append('div').attr('class',"check-contain")
		.append('input').attr('type','checkbox')
		.on('change',function(){
			topicAdd( Onetraj.pid  , d3.select(this).property('checked')  )   // TopicAdd 添加勾选的记录至 已选列表中
		})

	item.append('div').attr('class','id-word')
		.text(Onetraj.pid)

	item.append('div').attr('class','percent-rect')
			.append('div').attr('class','percent-rect-color')

	item.append('div').attr('class','percent-word')
		.text('98%')

	item.on('mouseenter',function(){
		highLightOneItem(Onetraj.pid)
		highLightTrajContorl(Onetraj.pid)

		let ifChecked = item.select('input').property('checked')
		if( ifChecked ){
			highLightTopiContorl(Onetraj.pid)
		}
	})
	.on('mouseleave',function(){
		unhighLightOneItem(Onetraj.pid)
		unHighLightTrajContorl()
		let ifChecked = item.select('input').property('checked')
		if( ifChecked ){
			unHighLightTopiContorl(Onetraj.pid)
		}
	})
}

// 每一次勾选操作都重新绘制 已选列表中的 Topic
function topicAdd(pid,add){

	let newTopicPids = []

	if(add){   //add
		topicPids.push(pid)
	}else{	   //remove
		topicPids.forEach((_pid)=>{
			if(_pid != pid){
				newTopicPids.push(_pid)
			}
		})
		topicPids = newTopicPids
	}

	// 重新绘制线框
	drawTopic(topicPids)
}


// 过滤按钮
d3.select('#filter-btn')
	.attr('filtered',true)
	.on('mousedown',function(){
		let isFiltered =  d3.select(this).attr('filtered')
		let allItems = d3.selectAll('.list-item')
		console.log(isFiltered)
		if(isFiltered){

			allItems.each(function(){
				let curItem  = d3.select(this)

				if( curItem.attr('class').indexOf('filtered') != -1 ){
					curItem.attr('class','list-item filtered hide')
				}
			})

			d3.select(this).text('show')
			d3.select(this).attr('filtered',null)
		}else{

			allItems.each(function(){
				let curItem  = d3.select(this)
				if( curItem.attr('class').indexOf('hide') != -1 ){
					curItem.attr('class','list-item filtered')
				}
			})

			d3.select(this).text('filter')
			d3.select(this).attr('filtered',true)
		}
	})


// 将未被选中的项 变成暗色
// 对应项的  Checkbox 也为 false 
// 在 app.js 中被引用
export function filter(filteredPids){
	let allItems = d3.selectAll('.list-item')
	let topicPidsFilter = []

	allItems.each(function(){
		let curItem = d3.select(this),
			curId = curItem.attr('id')

		let ifChecked = curItem.select('input').property('checked')  //是否被勾选

		if( filteredPids.indexOf(curId) == -1 ){     //被筛除
			curItem.attr('class','list-item filtered')
			curItem.select('input').attr('disabled','true')
			if(ifChecked){
				curItem.select('input').property('checked',false)
			}
		}else{				//保留下的
			curItem.attr('class','list-item')
			curItem.select('input').attr('disabled', null)
			if(ifChecked){
				topicPidsFilter.push(curId)
			}
		}
	})
	topicPids = topicPidsFilter
	console.log(topicPids)
	drawTopic(topicPids)
}




//样式高亮
export function highLightOneItem(id){
	let allItems = d3.selectAll('.list-item')
		// console.log('高亮',id)

	allItems.each(function(){
		let curItem = d3.select(this),
			curId = curItem.attr('id')
		if(curId == id){
			curItem.style('background-color','#f5f5f5')
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