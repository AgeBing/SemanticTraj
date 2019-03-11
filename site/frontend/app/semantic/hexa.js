
import { transDatas,coorCenter  } from  './config.js'
import { Particle } from './particle.js'


class Hexa{
	init(trajData){
		let { pid , traj } = trajData
		let points =  traj.map((p)=>{ return transDatas(p) }).filter((e)=>e) //filter null element

		this.data = {
			pid , points
		}

		this.generateNodes()
		this.generatePaticle()
		this.alive = true
	}
	generateNodes(){
		let { pid,points } = this.data
		let svg = d3.select("#semantic-view").select('svg')
		let g = svg.append("g")
			.attr('class','nodes'+pid)
		let self = this
	    for(let i = 0;i < points.length;i++){
	        g.append('circle')
	        	.attr("class", "node-item")
	          	.attr("cx", coorCenter.x)
	          	.attr("cy", coorCenter.y)
	          	.on('mouseenter',()=>{self.enterHandler()})
	          	.on('mouseleave',()=>{self.leaveHandler()})
	    }
	    this.g = g
	}
	generatePaticle(){
		let { points } = this.data
		let Ps  =  points.map((d,i)=>{
			let p = new Particle()
			p.init(d,i)
			return p 
		})
		this.Ps = Ps
	}
	start(){
		let self = this
		let iterations = 120,
			interval = 50

		for(let i =0 ;i < iterations;i++){
			setTimeout(()=>{self.tick()}, i * interval )
		}
	}
	tick(){
		let { Ps , g ,alive  } = this
		let { pid }  = this.data
		if(!alive)  return
			
		Ps.forEach((p,i)=>{
			// console.log(pid + ' ticks')
			p.tick()
			let coor = p.getXY()
	        g.select('circle:nth-child('+(i+1)+')')
	        	.attr("cx", coor.x)
	          	.attr("cy", coor.y)
		})
		this.updateNodeLinks()
	}
	updateNodeLinks(){
		let { g,Ps } = this
		g.selectAll('line').remove()
		for(let i = 1 ;i < Ps.length ;i++){
			let s = Ps[i-1].getXY(),
				d = Ps[i].getXY()
			g.append("line")
			  .attr('class', 'link-item')
			    .attr("x1",  s.x )
			    .attr("y1",  s.y )
			    .attr("x2",  d.x )
			    .attr("y2",  d.y );	
		}
	}
	enterHandler(){
		let { g } = this
		g.selectAll('circle').style('opacity',1)
		g.selectAll('line').style('opacity',1)
	}
	leaveHandler(){
		let { g } = this
		g.selectAll('circle').style('opacity',0.1)
		g.selectAll('line').style('opacity',0.1)
	}
	destroy(){
		let { g } = this
		g.remove()
		this.alive = false  // 死了
	}
}


export { Hexa }