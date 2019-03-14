import { topicNames } from '../timeline/config.js'


export let SVGlength = 400

export let stepLen = 300

let r = 90    //  半径/2
const sqrt3 = Math.sqrt(3)

//中心点 坐标位置
export let coorCenter = {    			 
  	 x : 2 * r + 10 ,
	   y : 2 * r + 10 ,			 
}

export let coorHexagon = [
    // 最左
    {
      x  : coorCenter.x - 2 * r,
      y  : coorCenter.y 
    },
    // 左上
    {
      x  : coorCenter.x - r,
      y  : coorCenter.y - sqrt3 * r
    },
    // 右上
    {
      x  : coorCenter.x + r,
      y  : coorCenter.y - sqrt3 * r
    },
    // 最右
    {
      x  : coorCenter.x + 2 * r,
      y  : coorCenter.y  
    },
    // 右下
    {
      x  : coorCenter.x + r,
      y  : coorCenter.y + sqrt3 * r
    },
    // 左下
    {
      x  : coorCenter.x - r,
      y  : coorCenter.y + sqrt3 * r
    }
]

// deep clone
// 用于表示 拖拽点的坐标
export let coorHexagonCopy =  JSON.parse(JSON.stringify(coorHexagon))  


// 通过 index 与 coorHexagon 对应
export let namesHexagon = topicNames.map((n)=>{return n.name})


export function transDatas(point){
    let topics = point.topics
    
    let res = {}
    
    if(!topics){
        console.log('empty topics')
        return null     
    }
    topics.forEach((t)=>{
      let { topic,val } = t
      let name 

      for(let i=0;i< topicNames.length;i++){
        if(topicNames[i].contain.indexOf(topic) != -1){
            let per = topicNames[i].percent[topic]
            name = topicNames[i].name
            res[name] = (  !res[name] ?  val * per : val * per + res[name] )
        }
      }
    })

    res['sum'] = 0
    for(let one in res){
      res['sum'] += res[one]
    }

    return res
}