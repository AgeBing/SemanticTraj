/**
 * @preserve Copyright 2017 VAG (Visual Analytics Group), Zhejiang Univ.
 */
import $ from 'jquery';
import * as d3 from 'd3';

import * as datamanager from './search/datamanager'
import * as SearchBar from './search/searchbar'

import * as map from './map/index.js'
import { draw as drawPic} from './map/pic.js'
import { draw as drawList , filterGeo as filterListGeo , filterTime as filterListTime } from './list/index.js'
import { draw as drawTopic } from './timeline/index.js'
import { init as timeInit }  from './timeline/time.js'

import { highLightTrajInMap ,unHighLightTrajInMap , 
		 highLightTrajSectionInMap, unHighLightTrajSectionInMap,
		 draw as drawTraj  } from './map/traj.js'
import { highLightTopic , unHighLightTopic } from './timeline/index.js'
import { highLightOneItem , unhighLightOneItem } from './list/index.js'

 
// import { mock } from '../mock/setData.js'

let trajs  // 全量数据
let topicLists = [] , topicListsPids = []




// 初始化
datamanager.init().then(o => SearchBar.init())

// mock()


// 在 searchbar 中将 trajs 进行设置
export function setGlobalTrajData(data){
	trajs = data
	drawList(data)
	drawPic(data)
	timeLineInit()
}


// 初始化 TimeLine 的时间范围
function timeLineInit() {
	let timeRange = []
	for(let i = 0;i < trajs.length;i++){
		let traj = trajs[i].traj,
			startPoint = traj[0],
			endPoint   = traj[traj.length - 1],
			startTime  = new Date(startPoint.startTime),
			endTime	   = new Date(endPoint.startTime)	
		if(i == 0){
			timeRange = [ startTime , endTime ]
		}else{
			if( startTime.getTime() < timeRange[0] )  timeRange[0]  = startTime
			if( endTime.getTime() >   timeRange[1] )  timeRange[1]  = endTime
		}
	}
	timeInit(timeRange)
}


// 框选操作后的轨迹被筛选了， 因此 列表现实的轨迹是筛选后的
export function filterGlobalData(availableTrajs){
	console.log("filterGlobalData num",availableTrajs.length)
	let availablePids = [] , filteredPids = []
	availableTrajs.forEach((traj)=>{
		availablePids.push(traj.pid)
	})
	trajs.forEach((traj)=>{
		let pid = traj.pid
		if( availablePids.indexOf(pid) == -1){
			filteredPids.push(pid)
		}
	})
	filterListGeo(filteredPids)
}

//timeLine的选择框过滤轨迹
export function filterDataInTime(_startTime,_endTime){
	let filteredPids = [] , availableTrajs = []

	for(let i = 0;i < trajs.length;i++){
		let traj = trajs[i].traj,
			startPoint = traj[0],
			endPoint   = traj[traj.length - 1],
			startTime  = new Date(startPoint.startTime),
			endTime	   = new Date(endPoint.startTime)	

		if( startTime.getTime() >= _endTime 
			|| endTime.getTime() <=  _startTime){
			filteredPids.push(trajs[i].pid)
			continue
		}else{
			availableTrajs.push(trajs[i])
		}		
	}

	// console.log(startTime,endTime)
	// console.log("time filter:",filteredTrajs,topicLists,topicListsPids)

	// list
	drawList(trajs)
	// filterListTime(filteredPids)

	// map view
	drawPic(availableTrajs)
}
// 绘制 Topic
export function topicAdd(topicPids){
	topicLists = []
	trajs.forEach((traj)=>{
		if(topicPids.indexOf(traj.pid) != -1){
			topicLists.push(traj)
		}
	})
	drawTopic(topicLists)
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

	highLightOneItem( topicLists[i].pid)
	highLightTrajContorl( topicLists[i].pid  )
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


}
export function unHighLightTrajSectionContorl(i){
	let id = topicLists[i].pid
	unHighLightTrajSectionInMap()
	unhighLightOneItem(id)
	unHighLightTrajInMap()
}