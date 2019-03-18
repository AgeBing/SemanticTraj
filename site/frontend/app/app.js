/**
 * @preserve Copyright 2017 VAG (Visual Analytics Group), Zhejiang Univ.
 */
import $ from 'jquery';
import * as d3 from 'd3';

import * as datamanager from './search/datamanager'
import * as SearchBar from './search/searchbar'

import * as mapConfig from './map/config.js';

import * as map from './map/index.js'
import { draw as drawPic} from './map/pic.js'
import { draw as drawPoi , remove as removePoi} from './map/poi.js'
import { draw as drawList , filterListGeo  , filterListTime  } from './list/index.js'
import { draw as drawTopic } from './timeline/index.js'
import { init as timeInit }  from './timeline/time.js'
import { draw as drawHexa } from './semantic/index.js'
import { highLightTrajInMap ,unHighLightTrajInMap , 
		 highLightTrajSectionInMap, unHighLightTrajSectionInMap,
		 draw as drawTraj  } from './map/traj.js'
import { highLightTopic , unHighLightTopic } from './timeline/index.js'
import { highLightOneItem , unhighLightOneItem  } from './list/index.js'
import { highlightHexa , unHighlightHexa } from './semantic/index.js'
import { draw as drawHexagon } from './semantic/index.js' 
import { mock as mockNode } from '../mock/setNode.js'
import { mock as mockList } from '../mock/setData.js'



let trajs  // 全量数据 
let orderedTrajs = []
let trajsPis = []
let topicLists = [] 
let availableTrajsinLimitTime = []

let trajId2Points = new Map() // id => stoppoints

// 初始化
// datamanager.init().then(o => SearchBar.init())
mockList()


// 在 searchbar 中将 trajs 进行设置
export function setGlobalTrajData(data){
	trajs = data

	// 设置 pid 到 stoppoints 的映射
	trajs.forEach((traj)=>{   
		let stopPoints = []
		traj.traj.forEach((p,i)=>{
			if( p.stoppoint !== undefined){
				stopPoints.push( { 
					siteId : p.site,
					index : i      // index 为 该 stoppoint 为 原轨迹中的第 i 个轨迹点
				})
			}
		})
		trajId2Points.set( traj.pid , stopPoints )
		trajsPis.push(traj.pid)
	})

	calTrajsOrder()
	// drawPic(data)
	timeLineInit()     //会调用  filterDataInTime => drawPic => drawList
}

export function calTrajsOrder(){  //计算轨迹的分数 并进行排序
	if(!trajs)  return

	let scale = d3.scaleLinear().range([0,100])
	let maxScore,minScore

	trajs.forEach((traj)=>{
		let score = getTrajScore(traj.pid)
		traj.score = score

		if(!maxScore){
			maxScore = score,
			minScore = score 
		}

		maxScore =  ( score > maxScore ? score : maxScore)
		minScore =  ( score < minScore ? score : minScore ) 
	})

	scale.domain([minScore ,maxScore])

	orderedTrajs = trajs.sort((t1,t2)=>{
		let s1 = t1.score , s2 = t2.score
		return s2 - s1  // 逆序 
	})

	orderedTrajs.forEach((traj)=>{
		traj.per = scale(traj.score).toFixed(2)
	})

	drawList(orderedTrajs)
}

// 获取 pid 轨迹 的 score
function getTrajScore(pid){
  	let nodelist = require('./Specification/Node.js')

	let sites = trajId2Points.get(pid) 

	// sites 基本上为一个   有些轨迹经过的site 差不多  因此得到的分数也差不多
	// sites 数据有bug  stoppoint 表示经过点的次数 ！！！！！！！！

	if(!sites || sites.length == 0)  return 0 
	let sum = 0 , sitescores 
	sites.forEach((site)=>{
		// sitescores 为该site周围的poi 的score ，大多为一个 
		sitescores =  nodelist.siteScore.get(+site.siteId)
		if(!sitescores)  return 0

		for (let s of sitescores.values()) {
		  sum += s
		}

	})

	return sum
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
export function filterGlobalData(_filteredPids){
	let filteredPids = _filteredPids || []
	filterListGeo(filteredPids)  //传递被过滤掉的
}

//timeLine的选择框过滤轨迹
export function filterDataInTime(_startTime,_endTime){

	let _filteredPids = [] , availableTrajs = []

	// 先筛选一遍  找出 满足 经过 POI点在对应时间的轨迹 

    console.log(' Start filterDataInTime') 
	let t1 = new Date().getTime()


	// 先按照 stoppoint 是否在 时间范围内 筛选一遍
	for(let i = 0;i < trajs.length;i++){
		let traj = trajs[i].traj,
			pid  = trajs[i].pid , 
			startPoint = traj[0],
			endPoint   = traj[traj.length - 1],
			startTime  = new Date(startPoint.startTime),
			endTime	   = new Date(endPoint.startTime)	

		let pois = trajId2Points.get( pid )  // 改轨迹经过POI点	
		let havePOIinLimitTime = false

		pois.forEach((poi)=>{
			let index = poi.index
			let poiStartTime = new Date(traj[index].startTime)
			let poiEndTime = new Date(traj[index].endTime)
			if( poiEndTime.getTime() <= _endTime 
				&& poiStartTime.getTime() >=  _startTime){
				havePOIinLimitTime = true
			}
		})
		
		if(!havePOIinLimitTime){   
			_filteredPids.push( pid )
		}else{
			availableTrajs.push(trajs[i])
		}

	}

	availableTrajsinLimitTime = []
	// 对 availableTrajs 进行裁剪
	availableTrajs.forEach((traj) =>{
		let cutTraj = []
		let fullTraj = traj.traj
		for(let i = 0 ;i < fullTraj.length ;i++){
			let startTime = new Date(fullTraj[i].startTime)
			let endTime = new Date(fullTraj[i].endTime)
			if( startTime.getTime() >= _startTime 
				&& endTime.getTime() <= _endTime ){
				cutTraj.push(fullTraj[i])
			}
			if( startTime.getTime() >= _endTime){
				break
			}
		}

		if(cutTraj.length > 0){
			availableTrajsinLimitTime.push({
				pid : traj.pid , 
				score : traj.score,
				per : traj.per,
				matching : traj.matching,
				traj : cutTraj
			})
		}else{
			_filteredPids.push( traj.pid )
		}
	})


    let t2 = new Date().getTime()
    console.log('filterDataInTime: ' + (t2-t1) + 'ms')

	// list
	drawList(orderedTrajs)
	filterListTime(_filteredPids)


	// console.log(availableTrajs)
	// map view
	mapConfig.PicUpdateFlag = true
	drawPic(availableTrajsinLimitTime) 
}
// 绘制 Topic
export function topicAdd(topicPids){
	topicLists = []
	availableTrajsinLimitTime.forEach((traj)=>{
		if(topicPids.indexOf(traj.pid) != -1){
			topicLists.push(traj)
		}
	})
	drawTopic(topicLists)
	drawHexa(topicLists)
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
export function HighLightTrajSectionContorl(i,t,fillColor){ 
	let traj = topicLists[i].traj
	// console.log(traj,t)

	highlightHexa(topicLists[i].pid)
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

			highLightTrajSectionInMap(siteId1,siteId2,fillColor)
			break;
		}
	}
}
export function unHighLightTrajSectionContorl(i){
	let id = topicLists[i].pid
	unHighLightTrajSectionInMap()
	unhighLightOneItem(id)
	unHighLightTrajInMap()
	unHighlightHexa(id)
}
export function highlightPoisInTrajs(pid){
	let sites = trajId2Points.get(pid) 
 	let nodelist = require('./Specification/Node.js')

 	// console.log(nodelist.data)
 	console.log(pid)
	console.log(sites)
	let pois = []
	sites.forEach((site)=>{
		nodelist.data.forEach((a)=>{
			a.data.forEach((b)=>{
				b.data.forEach((c)=>{
					c.data.forEach((_site)=>{
						if(_site.site_id == site.siteId){
							pois.push(_site)
						}
					})
				})
			})

		})

	})

	// 有可能 site 有 stoppoint 但是 无 poi 
	console.log(pois)
	drawPoi(pois)
}

export function unHighlightPoisInTrajs(){
	removePoi()
}
export function highlightSemanticTraj(pid){
	highLightTopiContorl(pid)
	highLightOneItem(pid)
	highLightTrajContorl(pid)
}
export function unHighlightSemanticTraj(pid){
	unHighLightTrajContorl()
	unHighLightTopiContorl(pid)
	unhighLightOneItem(pid)
}


