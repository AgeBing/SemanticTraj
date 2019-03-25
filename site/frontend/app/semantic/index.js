import { drawHexagon } from './hexagon.js'
import { Hexa } from './hexa.js'
export let ifSample = false 


let objsH = new Map()
drawHexagon()


export function draw(data) {
	let needPids = []
	data.forEach((traj,i)=>{
		let pid = traj.pid
		if(! objsH.get(pid) ){
			addHexa(traj)
		}
		needPids.push(pid)
	})

	//destroy
	let destroyPids = []
	for(let pid of objsH.keys()) {
		if( needPids.indexOf(pid) == -1 )
			destroyPids.push(pid)
	}

	destroyPids.forEach((pid)=>{
		let h = objsH.get(pid)
		h.obj.destroy()
		objsH.delete(pid) 
	})
}





export function addHexa(traj) {
	let h = new  Hexa()
	h.init(traj)
	h.start()
	objsH.set( traj.pid  , { obj:h , data:traj } )
}



d3.select('#semantic-view').select('.switch-btn').on('mousedown',btnHandler)
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


export function highlightHexa(pid){

	objsH.forEach((obj , _pid)=>{
		if (_pid == pid ){
			if(obj) obj.obj.highlight()
		}else{
			if(obj) obj.obj.dark()
		}
	})
}

export function unHighlightHexa(pid){
	objsH.forEach((obj , _pid)=>{
		if (_pid == pid ){
			if(obj) obj.obj.unHighlight()
		}else{
			if(obj) obj.obj.undark()
		}
	})
}