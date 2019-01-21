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
import { draw as drawTopic} from './timeline/index.js'


// 初始化
datamanager.init()
	.then(o => SearchBar.init())


let trajs  // 全量数据

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

export function topicAdd(topicPids){
	let topicLists = []
	trajs.forEach((traj)=>{
		if(topicPids.indexOf(traj.pid) != -1){
			topicLists.push(traj)
		}
	})
	drawTopic(topicLists)
}


export function filterGlobalData(filteredTrajs){

	let filteredPids = []
	filteredTrajs.forEach((traj)=>{
		filteredPids.push(traj.pid)
	})

	filterList(filteredPids)

}
