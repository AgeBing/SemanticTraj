
import * as d3 from 'd3';
import * as Config from '../timeline/config'

import { nodelist  } from './Node.js'

import * as DataManager from '../search/datamanager.js';

let scale = d3.scaleLinear()
	.range([0,1])

let scaleAB = d3.scaleLinear()
	.range([0,1])

export function appendParamWidges(roots) {
	roots.each(function(){
		let root = d3.select(this)
		addParamRects(root)
	})
}




function addParamRects(root){

	root.append('div').attr('class','high-level-desc')
				.text('Parameters for Relevance Computation')
	addAB(root)
	root.append('div').attr('class','high-level-desc')
				.text('Function Specification')
	Config.topicNames.forEach((topic,i)=>{
		addOneParamRect(root,i)
	})
}

function mouseDownHander(){

	d3.select('.semantic_constraints').selectAll('svg').on('mousemove',paramHander)
}
function mouseUpHander(){
	console.log('up')
	d3.select('.semantic_constraints').selectAll('svg').on('mousemove',null)
}

function paramHander() {
	let v_p  = d3.mouse( this ),
		x = v_p[0],
		nodeId,
		thmax 


	// console.log(v_p)
	// return 



	let item = d3.event.target.parentNode




	if(item.className.baseVal == 'color-rect' ){
		item = item.parentNode.parentNode
	}else{
		item = item.parentNode
	}
	if(item.className.indexOf('param-half-rect')!= -1){
		nodeId = item.parentNode.parentNode.parentNode.id     //condition_node1
		thmax = 20
	}else{
		nodeId = item.parentNode.parentNode.id     
		thmax = 40
	}

	if(x > thmax) x = thmax
	d3.select(item).select('.color-rect')
		.attr('width',x + 4)
	d3.select(item).select('.move-circle')
		.attr('x',x)

	let n =	d3.select(item).select('.param-name').text(),
		v , v_o , w_o , other_rect

	if(n == 'α' || n == 'β'){
		v= scaleAB(x).toFixed(2)
		if( v < 0)  v= 0
		if( v > 1)  v= 1
		v_o = 1 - v 
		v_o = v_o.toFixed(2)
		w_o = scaleAB.invert(v_o)
		if(n == 'α'){
			d3.select(item).select('.param-num').text(v)
			other_rect = d3.select(item.parentNode).select('.param-b')
			other_rect.select('.param-num').text(v_o)
			other_rect.select('.color-rect').attr('width',w_o+2)
			other_rect.select('.move-circle').attr('x',w_o)
		}else{
			d3.select(item).select('.param-num').text(v)
			other_rect = d3.select(item.parentNode).select('.param-a')
			other_rect.select('.param-num').text(v_o)
			other_rect.select('.color-rect').attr('width',w_o+2)
			other_rect.select('.move-circle').attr('x',w_o)
		}

	}else{

		v =scale(x).toFixed(2)
		if( v < 0)  v= 0
		if( v > 1)  v= 1
		d3.select(item).select('.param-num').text(v)
	}

	calcSims( nodeId )

}
function addOneParamRect(root,i){
	let  visBox = document.getElementsByClassName("semantic_constraints")[0];
	let  height = visBox.offsetHeight; //高度
	let  width = visBox.offsetWidth; //宽度

	let  rectWidth = 55,
			rectHeight = 10

	scale.domain([0,rectWidth - 15])

	let group  = root.append('div').attr('class','param-rect')
		group.append('div')
			.attr('class' , 'param-name')
			.text(function(){
				switch(Config.topicNames[i].name){
					case "住宅":
						return `Residential Related`
					break;
					case "娱乐商业":
						return `Entertainment Related`
					break;
					case "办公":
						return `Business Related`
					break;
					case "医疗":
						return `Medical Related`
					break;
					case "交通":
						return `Traffic Related`
					break;
					case "教育":
						return `Educational Related`
					break;
				}
   	 		})

		let svg = group.append('svg')
					.attr('class' , 'param-range')
					.attr('height' , rectHeight + 4)
					.attr('width' , rectWidth)

			svg.append('rect').attr('class','bottom-rect')
					.attr('width',rectWidth)
					.attr('height',4)
					.attr('y' , 5)

			svg.append('rect').attr('class','color-rect')
					.attr('width',rectWidth)
					.attr('height',4)
					.attr('y' , 5)

		let circle	= svg.append('rect').attr('class','move-circle')
					.attr('width',rectHeight + 4)
					.attr('height',rectHeight + 4)
					.attr('rx',rectHeight + 4)
					.attr('ry',rectHeight + 4)
					.attr('x',rectWidth - 14)

		circle.on('mousedown',mouseDownHander)
		svg.on('mouseup',mouseUpHander)

		group.append('div')
			.attr('class' , 'param-num')
			.text(1)	
}


function addAB(root){
	let group = root.append('div').attr('class','param-ab-rect')
	let Agroup = group.append('div').attr('class','param-half-rect param-a')
	let Bgroup = group.append('div').attr('class','param-half-rect param-b')

	let  rectWidth = 35 , rectHeight = 10
	
	scaleAB.domain([0,rectWidth - 15])

	group.selectAll('.param-half-rect')
		.append('div').attr('class','param-name')

	let svg = group.selectAll('.param-half-rect')
				.append('svg')
				.attr('class' , 'param-range')
				.attr('height' , rectHeight +  4)
				.attr('width' , rectWidth)
		
		svg.append('rect').attr('class','bottom-rect')
					.attr('width',rectWidth)
					.attr('height',4)
					.attr('y' , 5)

		svg.append('rect').attr('class','color-rect')
			.attr('width',rectWidth * 0.5)
			.attr('height',4)
			.attr('y' , 5)

	// group.selectAll('svg').on('click',paramHander)
	



	group.selectAll('.param-half-rect')
		.append('div').attr('class','param-num')


		let circle	= svg.append('rect').attr('class','move-circle')
					.attr('width',rectHeight + 4)
					.attr('height',rectHeight + 4)
					.attr('rx',rectHeight + 4)
					.attr('ry',rectHeight + 4)
					// .attr('x',rectWidth - 14)

	circle.on('mousedown',mouseDownHander)
	svg.on('mouseup',mouseUpHander)
	
	Agroup.select('.param-name').text('α')
	Agroup.select('.color-rect').attr('width',rectWidth)
	Agroup.select('.param-num').text(1)
	Agroup.select('.move-circle').attr('x',rectWidth - 13)


	Bgroup.select('.param-name').text('β')
	Bgroup.select('.color-rect').attr('width',0)
	Bgroup.select('.param-num').text(0)
	Bgroup.select('.move-circle').attr('x',0)
}

function getParamVals(nodeId) {
	// 第几个 
	let container = d3.select('#'+nodeId).select('.semantic_constraints')
	let params = { 
		'T_I':[]
	}
	container.selectAll('.param-rect').each(function(){
		let name = d3.select(this).select('.param-name').text()
		let val = d3.select(this).select('.param-num').text()
		params['T_I'].push(+val)
	})
	container.selectAll('.param-half-rect').each(function(){
		let name = d3.select(this).select('.param-name').text()
		let val = d3.select(this).select('.param-num').text()
		params[name] = +val
	})
	
	return params
}



function calcSims(nodeId){

  	let nodelist = require('../Specification/Node.js')

  	let order  =  +nodeId.slice(-1)

	let params = getParamVals(nodeId)

	// console.log( params)

	// return

	let T_I  = params['T_I'] ,
		a = params['α'],
		b=  params['β']

	nodelist.data.forEach( (constrain) =>{
		if( constrain.order == order){
			constrain.data.forEach( (words) =>{

				words.data.forEach((locations)=>{
					locations.data.forEach((location , i)=>{
							location.simT = b * getSim( T_I , location.site_id )
					})
				})

			})
		}
	})



	nodelist.reOrder( a, nodeId)
}


function getSim(T_I , siteId){
    let siteTopic = DataManager.siteTopic
    let topics = siteTopic.get(''+siteId)
    let T_L = [ 0 , 0 ,0 , 0 , 0 , 0]

    if(!topics){
    	console.log(" empty topics in site ", siteId)
    	return 0
	}

    topics.forEach( (topic) =>{
    	let name = topic.topic,
    		val =  topic.val

		Config.topicNames.forEach( (topic_,i) => {
			if(topic_.contain.indexOf(name) != -1 ){
				T_L[i] += val
			}
		})	
    })
	
	return sim( T_I , T_L )
}

function sim( I , L ){

	let i = 0 , denom = 0 , nume = 0 , l_I = 0 , l_L = 0

	// 分子
	for(i = 0;i < 6;i++){
		 nume += I[i] * L[i]
	}
	//分母
	for(i = 0;i < 6;i++){
		l_I += I[i] * I[i]
		l_L += L[i] * L[i]
	}
	l_I = Math.sqrt(l_I)
	l_L = Math.sqrt(l_L)
	denom = l_I * l_L

	return nume / denom
}