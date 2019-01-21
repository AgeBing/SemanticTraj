import * as d3 from 'd3';

import { topicAdd  as drawTopic } from '../app.js'

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

function appendOne(Onetraj){
	let item = d3.select('.list-window')
				.append('div')
					.attr('class','list-item')
					.attr('id',Onetraj.pid)
					
	item.append('div').attr('class',"check-contain")
		.append('input').attr('type','checkbox')
		.on('change',function(){
			topicAdd( Onetraj.pid  , d3.select(this).property('checked')  )
		})



	item.append('div').attr('class','id-word')
		.text(Onetraj.pid)

	item.append('div').attr('class','percent-rect')
			.append('div').attr('class','percent-rect-color')

	item.append('div').attr('class','percent-word')
		.text('98%')



}

export function filter(filteredPids){
	// console.log(filteredPids)
	let allItems = d3.selectAll('.list-item')

	allItems.each(function(){
		let curItem = d3.select(this),
			curId = curItem.attr('id')

		if( filteredPids.indexOf(curId) == -1 ){
			curItem.attr('class','list-item filtered')
			curItem.select('input').attr('disabled','true')
		}else{
			curItem.attr('class','list-item')
			curItem.select('input').attr('disabled', null)
		}
	})
}

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

	drawTopic(topicPids)
}


d3.select('#filter-btn')
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
