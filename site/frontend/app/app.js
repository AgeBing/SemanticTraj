/**
 * @preserve Copyright 2017 VAG (Visual Analytics Group), Zhejiang Univ.
 */


import $ from 'jquery';
import * as d3 from 'd3';

import * as datamanager from './search/datamanager'
import * as SearchBar from './search/searchbar'

import * as map from './map/index.js'
import { draw as drawPic} from './map/pic.js'
import { draw as drawList , filter as filterList } from './list/index.js'
import { draw as drawTopic } from './timeline/index.js'

import { highLightTrajInMap ,unHighLightTrajInMap , 
		 highLightTrajSectionInMap, unHighLightTrajSectionInMap,
		 draw as drawTraj  } from './map/traj.js'
import { highLightTopic , unHighLightTopic } from './timeline/index.js'
import { highLightOneItem , unhighLightOneItem } from './list/index.js'


// 初始化
datamanager.init()
	.then(o => SearchBar.init())


let trajs  // 全量数据

// 在 searchbar 中将 trajs 进行设置
export function setGlobalTrajData(data){
	trajs = data
	drawViews()
}


// 点击查询按钮后 进行绘制图片
export function drawViews() {
	// list view
	drawList(trajs)

	// map view
	drawPic(trajs)
	// semantic view

}


let topicLists = []
// 绘制 Topic
export function topicAdd(topicPids){
	topicLists = []
	trajs.forEach((traj)=>{
		if(topicPids.indexOf(traj.pid) != -1){
			topicLists.push(traj)
		}
	})
	drawTopic(topicLists)

	//同时绘制线段
	drawTraj(topicLists)
}
export function filterGlobalData(filteredTrajs){

	let filteredPids = []
	filteredTrajs.forEach((traj)=>{
		filteredPids.push(traj.pid)
	})

	filterList(filteredPids)
}









export function highLightTrajContorl(id){
	trajs.forEach((traj)=>{
		if(traj.pid == id){
			highLightTrajInMap(traj)
		}
	})
}
export function unHighLightTrajContorl(id){
	unHighLightTrajInMap()
}
export function highLightTopiContorl(pid){
	for(let i = 0; i < topicLists.length; i++){
		if(pid == topicLists[i].pid){
			highLightTopic(i)
		}
	}
}
export function unHighLightTopiContorl(pid){
	for(let i = 0; i < topicLists.length; i++){
		if(pid == topicLists[i].pid){
			unHighLightTopic(i)
		}
	}
}
export function HighLightTrajSectionContorl(i,t){ 
	let traj = topicLists[i].traj
	// console.log(traj,t)
	for(let j = 0;j < traj.length ; j++){
		let startTime = traj[j].startTime

		let date = startTime.split(' ')[0],
			time = startTime.split(' ')[1],
			_t = new Date(date + 'T' + time)
		// console.log(_t)
		if(_t.getTime()  == t.getTime()){

			let siteId1 = +traj[j].site,
				siteId2 = +traj[j+1].site

			highLightTrajSectionInMap(siteId1,siteId2)
			break;
		}
	}

	highLightOneItem( topicLists[i].pid)

}
export function unHighLightTrajSectionContorl(i){
	let id = topicLists[i].pid
	unHighLightTrajSectionInMap()
	unhighLightOneItem(id)
}