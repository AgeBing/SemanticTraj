
import { transDatas,coorCenter  } from  './config.js'
import { Particle } from './particle.js'
import { ifSample } from './index.js'
import { hl_SemanticTraj ,uhl_SemanticTraj } from '../highlight/index.js'


class Hexa{
	init(trajData){
		let { pid , traj } = trajData
		let points =  traj.map((p)=>{ return transDatas(p) }).filter((e)=>e) //filter null element

		let stopPointsIndex = []
		traj.filter((p)=> p.topics).forEach((p,i)=>{
			if(p.stoppoint!=undefined) stopPointsIndex.push(i)
		})
		this.stopPointsIndex = stopPointsIndex


		this.data = {
			pid , points
		}

		this.generateNodes()
		this.generatePaticle()
		this.alive = true

		// console.log(pid , points , traj , stopPointsIndex)
	}
	generateNodes(){
		let { pid,points } = this.data
		let { stopPointsIndex } = this

		let svg = d3.select("#semantic-view").select('svg')
		let g = svg.append("g")
			.attr('class','nodes'+pid)
		let self = this
		let generateNodeNum = ((ifSample == true)? stopPointsIndex.length: points.length)

	    for(let i = 0;i < generateNodeNum ; i++){
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
		let { points  } = this.data
		let { stopPointsIndex } = this
		let Ps 
		if( !ifSample ){
			Ps  =  points.map((d,i)=>{
				let p = new Particle()
				p.init(d,i)
				return p 
			})
		}else{
			// console.log("Hexa stopPointsIndex : ",stopPointsIndex)
			Ps = stopPointsIndex.map((d,i)=>{
				let p = new Particle()
				// console.log(points[d])
				p.init(points[d],i)
				return p 
			})
		}
		this.Ps = Ps
	}
	start(){
		let self = this
		let iterations = 20,    //迭代次数
			interval = 50

		for(let i =0 ;i < iterations;i++){
			setTimeout(()=>{self.tick()}, i * interval )
		}
	}
	tick(){
		let { Ps , g ,alive  } = this
		let { pid }  = this.data
		if(!alive)  return
			// console.log(Ps)
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
		g.selectAll('path').remove()
		
		let cn = 0.5
		let curveLine = d3.line()
					.x(d => d.x)
					.y(d => d.y)
					.curve(d3.curveBasisOpen)

		// let cps = [Ps[0].getXY()]
		// for(let i = 1 ;i < Ps.length - 1;i++){
		// 	let last = Ps[i - 1].getXY(),
		// 		now  = Ps[i].getXY(),
		// 		next = Ps[i + 1].getXY(),
		// 		center = {
  //               	x : Math.floor( next.x * cn + (1-cn)*now.x ),
  //               	y : Math.floor( next.y * cn + (1-cn)*now.y )
  //           	}
  //           cps.push(center)
		// }

		let cps = []
		for(let i = 0 ;i < Ps.length;i++){
			cps.push( Ps[i].getXY())
		}

    	g.append('path')
			.attr('class', 'link-item')
			.attr('d', function(d) { return curveLine(cps);	})

		// console.log(cps)
	}
	enterHandler(){
		let { pid } = this.data
		this.highlight()
		hl_SemanticTraj(pid)
	}
	leaveHandler(){
		let { pid } = this.data
		this.unHighlight()
		uhl_SemanticTraj(pid)
	}
	highlight(){
		let { g } = this
		g.selectAll('circle').style('opacity',1)
		g.selectAll('path').style('opacity',1)
	}
	unHighlight(){
		let { g } = this
		g.selectAll('circle').style('opacity',0.5)
		g.selectAll('path').style('opacity',0.5)
	}
	dark(){
		let { g } = this
		g.selectAll('circle').style('opacity',0.01)
		g.selectAll('path').style('opacity',0.01)
	}
	undark(){
		let { g } = this
		g.selectAll('circle').style('opacity',0.5)
		g.selectAll('path').style('opacity',0.5)
	}
	destroy(){
		let { g } = this
		g.remove()
		this.alive = false  // 死了
	}
}


export { Hexa }