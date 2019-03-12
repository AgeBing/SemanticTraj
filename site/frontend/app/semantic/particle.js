import { coorCenter,coorHexagon,namesHexagon,stepLen } from './config.js'


class Particle{
	init(data,i){
		this.x = coorCenter.x
		this.y = coorCenter.y
		this.i = i     // 第几个点
		this.setForces(data)
	}
	setForces(data){
		let forces = []
		forces =  namesHexagon.map((name,i)=>{
			return data[name] / data['sum']
		})
		this.forces = forces
	}
	tick(){
		this.getForceComp() 
		this.moveItem()
	}
	getForceComp(){   // 计算合力
	  	// 注意 力大小 需要和 力位置 对应
	  	let coor = coorHexagon  //此时按照 index 对应
	  	let forces = this.forces

		let c , 
			x , y, l ,
			fx , fy , f ,
			forces_ = []
		for(let i = 0;i < 6;i++){
			c = coor[i]
			f = forces[i]
			x = c.x - this.x
			y = c.y - this.y
			l =  Math.sqrt( x*x + y*y)
			fx = f * x / l
			fy = f * y / l
			forces_[i] = {
				fx , fy
			}
		}

		let _forcesComp = { fx :0 , fy:0 }
		for(let i = 0;i < 6;i++){
			_forcesComp.fx += forces_[i].fx
			_forcesComp.fy += forces_[i].fy
		}

		this.forcesComp  = _forcesComp		
	}
	moveItem(){
		let { forcesComp } = this
		let x,y,
			s = 1
			
	  	// 自适应 k 值
	  	// 使单词位移长度限定在 s 内
	  	let k = Math.floor( s / Math.sqrt( forcesComp.fx * forcesComp.fx + forcesComp.fy * forcesComp.fy) ) 

	  	// x,y 为 单词位移长度 
		x = forcesComp.fx * stepLen
		y = forcesComp.fy * stepLen



		this.x = this.x + x
		this.y = this.y + y
	}
	getXY(){
		let { x,y,i } = this
		return {
			x , y
		}
		// console.log(x,y,i)
	}
}

export { Particle  }