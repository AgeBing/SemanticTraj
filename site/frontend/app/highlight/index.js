/**
 * 视图间的联动高亮
 */

import { trajs ,topicLists,trajId2Points ,availableTrajsinLimitTime }  from '../app.js' 

import { highLightTrajInMap ,unHighLightTrajInMap , 
		 highLightTrajSectionInMap, unHighLightTrajSectionInMap } from '../map/traj.js'
import { highLightTopic , unHighLightTopic } from '../timeline/index.js'
import { highLightOneItem , unhighLightOneItem  } from '../list/index.js'
import { highlightHexa , unHighlightHexa , highlightHexaInOnePoint , unHighlightHexaInOnePoint} from '../semantic/index.js'
import { draw as drawPoi , remove as removePoi} from '../map/poi.js'
import { shadowCanvas ,unShadowCanvas } from '../map/pic.js'




// 在地图上高亮单条轨迹 
function highLightTrajContorl(id){
	availableTrajsinLimitTime.forEach((traj)=>{
		if(traj.pid == id){
			highLightTrajInMap(traj , true )
			highLightTrajInMap(traj , false )
		
		}
	})

	// availableTrajsinLimitTime.forEach( (traj) =>{
	// 	if(traj.pid == id){
	// 		highLightTrajInMap(traj , false )
	// 	}	
	// })

	shadowCanvas()
}
function unHighLightTrajContorl(id){
	unHighLightTrajInMap()

	unShadowCanvas()
}


//在地图上标上 POI 点
function highlightPoisInTrajs(pid){
	let sites = trajId2Points.get(pid) 
 	let nodelist = require('../Specification/Node.js')

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
	// console.log(pois)
	drawPoi(pois)
}
function unHighlightPoisInTrajs(){
	removePoi()
}





/*
	hl_xxx
	uhl_xxx
*/


// 当高亮 hexa 时的操作
export function hl_SemanticTraj(pid){
	highLightOneItem(pid)
	highLightTrajContorl(pid)

	for(let i = 0; i < topicLists.length;i++){
		if( topicLists[i].pid == pid ){
			highLightTopic( i )
			break;
		}
	}
}
export function uhl_SemanticTraj(pid){
	unHighLightTrajContorl()
	unhighLightOneItem(pid)

	for(let i = 0; i < topicLists.length;i++){
		if( topicLists[i].pid == pid ){
			unHighLightTopic( i )
			break;
		}
	}

}


// 高亮 list item 对应的其他高亮操作
export function hl_listItem(pid , checked){
	highLightOneItem(pid)
	highLightTrajContorl(pid)
	highlightPoisInTrajs(pid)

	if( !checked ) return 

	highlightHexa(pid)
	for(let i = 0; i < topicLists.length;i++){
		if( topicLists[i].pid == pid ){
			highLightTopic( i )
			break;
		}
	}
}
export function uhl_listItem(pid , checked ){
	unhighLightOneItem(pid)
	unHighLightTrajContorl()
	unHighlightPoisInTrajs()

	if( !checked ) return 
	unHighlightHexa(pid)
	for(let i = 0; i < topicLists.length;i++){
		if( topicLists[i].pid == pid ){
			unHighLightTopic( i )
			break;
		}
	}
}



// 高亮 timeline 的操作
export function hl_timeline(i,t,fillColor){ 
	let traj = topicLists[i].traj

	let pid = topicLists[i].pid


	highLightOneItem( pid)
	highLightTrajContorl( pid  )
	highlightPoisInTrajs( pid )


	for(let j = 0;j < traj.length ; j++){
		let startTime = traj[j].startTime

		let date = startTime.split(' ')[0],
			time = startTime.split(' ')[1],
			_t = new Date(date + 'T' + time)
		// console.log(_t)
		if(_t.getTime()  == t.getTime()){

			let siteId1 = +traj[j].site,
				siteId2 = +traj[j+1].site

			highlightHexaInOnePoint( pid , j )
			console.log(pid,j)
			// highLightTrajSectionInMap(siteId1,siteId2,fillColor)

			break;
		}
	}
}
export function uhl_timeline(i){
	let id = topicLists[i].pid
	unHighLightTrajSectionInMap()
	unhighLightOneItem(id)
	unHighLightTrajInMap()
	unHighlightHexaInOnePoint(id)
	unHighlightPoisInTrajs()
	unHighLightTrajContorl()
}
