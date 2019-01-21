import * as Topic from './topic.js'
import * as Hexa from './hexa.js'


const topicNames = ["Beauty","Food","Shop","Uptown","Education","Hospital"]

export function draw(data){

	Topic.init(getTimeRange(data))
	Hexa.init()


	data.forEach((traj,i)=>{
		addTopic(traj,i)
		addHexa(traj,i)
	})
}
export function addTopic(traj,i) {
	console.log(traj,i)
	let t = new Topic.topicZoomRect()
	t._init(traj,i)
	t._render()
}

function addHexa(traj,i) {
	let h = new  Hexa.topicHexa()
	h.init(topicNames,traj,i)
	h.render()
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
