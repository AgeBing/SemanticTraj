
import { transDatas,coorCenter  } from  './config.js'
import { duration as transitionDuration } from '../timeline/config.js'
import { Particle } from './particle.js'
import { ifSamplePoint,ifSampleLine } from './index.js'
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
		let generateNodeNum = ((ifSamplePoint == true)? stopPointsIndex.length: points.length)

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
		if( !ifSamplePoint ){
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
		let iterations = 50,    //迭代次数
			interval = 20

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
					.curve(d3.curveNatural)

		let cps = []
		for(let i = 0 ;i < Ps.length;i++){
			cps.push( Ps[i].getXY())
		}

    	g.append('path')
			.attr('class', 'link-item')
			.attr('d', function(d) { return curveLine(cps);	})

		// console.log(cps)
		if(!ifSampleLine ) this.hideLinks()
		else  this.showLinks()

	}
	showLinks(){
		let { g } = this
		g.select('path')
			.transition()
			.duration(transitionDuration)
			.style('opacity',0.5)
	}
	hideLinks(){
		let { g } = this
		g.select('path')
			.transition()
			.duration(transitionDuration)
			.style('opacity',0)
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
		g.selectAll('circle').style('opacity',0.7)
		g.selectAll('path').style('opacity',0.7)
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
	highlightOnePoint(index){
		let { Ps , g ,alive , stopPointsIndex  } = this
		let { pid }  = this.data

		if( ifSamplePoint ){
			stopPointsIndex.forEach((val,i)=>{   // val 为 index
				if(val == index){
				   	 g.select('circle:nth-child('+(i+1)+')')
					    	.style('opacity',1)
	    					.style('fill','rgb(46, 117, 182)')
				}
			})
		}else{
					g.select('circle:nth-child('+(index+1)+')')
		        			.style('opacity',1)
		    				.style('fill','rgb(46, 117, 182)')
		}

	}
	unHighlightOnePoint(){
		let { g } = this
		g.selectAll('circle').style("fill", 'none')
	}
}


export { Hexa }