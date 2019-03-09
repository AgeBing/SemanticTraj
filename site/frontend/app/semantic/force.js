
import { drawItem , addCornerValues } from './hexagon.js'

let n = 65    //  半径/2

export let coorCenter = {    			 //中心点
	x : 2 * n + 10 ,
	y : 2 * n + 10 ,			 
}

const sqrt3 = Math.sqrt(3)

export let coorCorners = [
    {
      x  : coorCenter.x - n,
      y  : coorCenter.y + sqrt3 * n
    },
    {
      x  : coorCenter.x + n,
      y  : coorCenter.y + sqrt3 * n
    },
    {
      x  : coorCenter.x + 2 * n,
      y  : coorCenter.y  
    },
    {
      x  : coorCenter.x + n,
      y  : coorCenter.y - sqrt3 * n
    },
    {
      x  : coorCenter.x - n,
      y  : coorCenter.y - sqrt3 * n
    },
    {
      x  : coorCenter.x - 2 * n,
      y  : coorCenter.y 
    }]

let forceRates = [] 
let forces  = []
let forcesComp = {}

function setCornerForces(datas){
	for(let i = 0 ;i < 6;i++){
		forceRates[i] = datas[i] / datas[0]		
	}
}

let item = {}

function init(datas){


	let dataStr = ''
	for(let i = 0;i < 6;i++){
		dataStr += datas[i].toFixed(2) + '  '
	}
	console.log(dataStr)

	item.x = coorCenter.x
	item.y = coorCenter.y
	setCornerForces(datas)
	console.log("Origin item ",item)

	addCornerValues(datas)
}



// 根据当前item位置计算分力 再合成合力
function calForce(){
	let c , 
		x , y, l ,
		fx , fy , f  
	for(let i = 0;i < 6;i++){
		c = coorCorners[i]
		f = forceRates[i]
		x = c.x - item.x
		y = c.y - item.y
		l =  Math.sqrt( x*x + y*y)
		fx = f * x / l
		fy = f * y / l
		forces[i] = {
			fx , fy
		}
	}

	let _forcesComp = { fx :0 , fy:0 }
	for(let i = 0;i < 6;i++){
		_forcesComp.fx += forces[i].fx
		_forcesComp.fy += forces[i].fy
	}

	forcesComp  = _forcesComp // 合力
}

function moveItem(){
	let x,y,
		s = 5

  	// 自适应 k 值
  	// 使单词位移长度限定在 s 内
  	let k = Math.floor( s / Math.sqrt( forcesComp.fx * forcesComp.fx + forcesComp.fy * forcesComp.fy) ) 

  	// x,y 为 单词位移长度 
	x = forcesComp.fx * k
	y = forcesComp.fy * k

	item.x = item.x + x
	item.y = item.y + y

}

function tick(){
	calForce()
	moveItem()
	// console.log('------------------分界线----------------')
	// console.log("force ",forces)
	// console.log("forceComp ",forcesComp)
	// console.log("item ",item)

	drawItem(item)
}




export  function mock(){

let pois =  [
          {
            "topic": "Hospital",
            "val": 0.1849773153942428
          },
          {
            "topic": "Uptown",
            "val": 0.11219102002503129
          },
          {
            "topic": "Government",
            "val": 0.07738188360450564
          },
          {
            "topic": "Education",
            "val": 0.06979427409261577
          },
          {
            "topic": "Traffic",
            "val": 0.06244133291614518
          },
          {
            "topic": "Enterprise",
            "val": 0.056300844806007506
          },
          {
            "topic": "Hotel",
            "val": 0.05010168961201502
          },
          {
            "topic": "Food",
            "val": 0.040714956195244054
          },
          {
            "topic": "Scenicspot",
            "val": 0.03928739048811014
          },
          {
            "topic": "Beauty",
            "val": 0.03408557571964956
          },
          {
            "topic": "Life",
            "val": 0.032110450563204
          },
          {
            "topic": "Shop",
            "val": 0.03126955569461827
          },
          {
            "topic": "Finance",
            "val": 0.03125
          }
        ]


let data = [ 1, 10, 1, 2, 2, 5]
	

	for(let i=0;i< 6;i++){
		data[i] = Math.random()
	}


	init(data)

// forcesComp.fx + forcesComp.fy 长度小于一定范围 说明应该是 平衡了 

	for(let i =0 ;i < 100;i++){
		setTimeout( tick , i * 300 )
	}
}


