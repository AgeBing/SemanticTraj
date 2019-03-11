import * as d3 from 'd3';
import { topicZoomRect as Topic } from './topic.js'
// import { init as  timeInit }  from './time.js'
import { Hexa } from '../semantic/hexa.js'



let objsT = []
let objsH = []

export function draw(data){
	console.log("topic",data)
	// timeInit(getTimeRange(data))

	// Hexa.init()
	
	d3.select('.rect-group-container')
		.selectAll('.rect-container')
		.remove() 

	objsH.forEach((h)=>{
		h.destroy()
	})

	objsT = []  
	objsH = []
	data.forEach((traj,i)=>{
		addTopic(traj,i)
		addHexa(traj,i)
	})

	// addHexa(data[1])
}


export function addTopic(traj,i) {
	// console.log(traj,i)
	let t = new Topic()
	t._init(traj,i)
	t._render()
	objsT.push(t)
}
export function highLightTopic(i){
	let t = objsT[i]
	t.high_light_whole()
}
export function unHighLightTopic(i){
	let t = objsT[i]
	t.unhigh_light_whole()
}


function addHexa(traj,i) {
	let h = new  Hexa()
	h.init(traj)
	h.start()
	objsH.push(h)
}


function getTimeRange(data){
	let timeRange = []
	data.forEach((traj)=>{
		traj.traj.forEach((p)=>{

			let date = p.startTime.split(' ')[0],
				time = p.startTime.split(' ')[1],
				_t = new Date(date + 'T' + time)

				if(!timeRange[0]){
					timeRange = [ _t , _t ]
				}else{
					if(_t.getTime() < timeRange[0].getTime())
						timeRange[0] = _t
					if(_t.getTime() > timeRange[1].getTime())
						timeRange[1] = _t	
				}
		})
	})
	return timeRange
}
