import * as d3 from 'd3';


import { map } from './index.js'
import { _p2l ,_l2pb } from './util.js'
import { filter , stack , draw as drawPic} from './pic.js'


let svg 



export function draw(){
	addSelect()

	if(stack.length >= 2){
		// 删除原有的
		d3.select('#svg-select').selectAll('.rect-group').remove()

		// 创建新的
		for(let i = 1;i < stack.length ;i++){
			let { top_right ,bottom_left } = stack[i].rect
			//经纬度转像素
			let p_top_right   =  _l2pb(top_right.lat , top_right.lng) ,
				p_bottom_left =  _l2pb(bottom_left.lat ,bottom_left.lng),
				p_top_left    = {
					x  : p_bottom_left[0],
					y  : p_top_right[1]
				},
				width         =  p_top_right[0] - p_bottom_left[0],
				height        =  p_bottom_left[1] - p_top_right[1]
			console.log(p_top_left,width,height)

			svg.append('g')
		    	.attr('class', 'rect-group')
		    	.append("rect")
			    	.attr('class','selection')
			    	.attr('x',p_top_left.x)
			    	.attr('y',p_top_left.y)
			    	.attr('width',width)
			    	.attr('height',height)
			addRectListener( i )
		}
	}
}


function selectFunctionEventHandler(){
		d3.select('#svg-poi').style('display','none')
		svg = d3.select('#svg-select')
		svg.style('cursor','crosshair')
		map.dragging.disable()
		addSelectRect()
}

export function addSelect(){
	
	// 筛选按钮
	let btn = document.getElementById('select-btn')
	
	// 考虑重复添加事件
	btn.removeEventListener('click',selectFunctionEventHandler)
	btn.addEventListener('click',selectFunctionEventHandler)
}

// 创建选择框 
function addSelectRect(){
	let id = stack.length
	svg.on("mousedown" , function(){
		let v_p  = d3.mouse( this )
	    svg.append('g')
	    	.attr('class', 'rect-group')
	    	.append("rect")
	    	.attr('class','selection')
	    	.attr('x',v_p[0])
	    	.attr('y',v_p[1])
	    	.attr('rx',3)
	    	.attr('ry',3)
	    	.attr('width',3)
	    	.attr('height',3)
	})

	// 选择框 移动
	svg.on("mousemove", function() {
	    let s = d3.select( ".rect-group:nth-child( "+ id + ")" ).select('.selection');
	    if(s.empty()) return

        let p = d3.mouse(this)

        let d = {
            x       : parseInt( s.attr("x"), 10),
            y       : parseInt( s.attr("y"), 10),
            width   : parseInt( s.attr("width"), 10),
            height  : parseInt( s.attr("height"), 10)
        }
        let move = {
            x : p[0]  - d.x,
            y : p[1]  - d.y
        }

        if( move.x < 1 || (move.x*2 < d.width)) {
            d.x = p[0];
            d.width -= move.x;
        } else {
            d.width = move.x;       
        }

        if( move.y < 1 || (move.y*2 < d.height)) {
            d.y = p[1];
            d.height -= move.y;
        } else {
            d.height = move.y;       
        }


        s.attr("x",d.x )
        	.attr("y",d.y)
        	.attr("width",d.width)
        	.attr("height",d.height)
	})


	//释放筛选 
	svg.on("mouseup",function(){
		svg.on("mousemove",null)
		svg.on("mousedown",null)
		svg.on("mouseup",null)


	    addRectListener()
		svg.style('cursor','grab')
		map.dragging.enable()
		addSelection()

		d3.select('#svg-poi').style('display','block')


	})
}





function addRectListener( index){

	let id = index ? index : stack.length  // 指定index 表示更新后重绘的 ,stack length 表示为后续加上的

	let g = d3.select( ".rect-group:nth-child( "+ id + ")" ) ,
	r = g.select('.selection') ,
	p = {
		x : +r.attr('x') + (+r.attr('width')) ,
		y : +r.attr('y')
	},
	w = 20, q = 3 , l = 5

	r.on('mouseenter',function(){
		svg.style('cursor','auto')

		let del = g.append('g')
			.attr('class','del-icon')
			.attr('stroke','black')

			
		// 叉叉 造型
			del.append('circle')
				.attr('cx', p.x)
				.attr('cy', p.y)
				.attr('r',  10)
				.attr('fill', 'none')


			del.append('line')
				.attr('x1', p.x - l)
				.attr('y1', p.y + l)
				.attr('x2', p.x + l)
				.attr('y2', p.y - l)


			del.append('line')
				.attr('x1', p.x - l )
				.attr('y1', p.y - l)
				.attr('x2', p.x + l )
				.attr('y2', p.y + l)

	})

	r.on('mousemove',function(){
		let v_p  = d3.mouse( this ),
			x = v_p[0],
			y = v_p[1]

		if(x >(p.x  - w) && x < p.x && y > p.y && y < (p.y + w) ){
			svg.style('cursor','pointer')
		}else{
			svg.style('cursor','auto')
		}
	})

	// 点击关闭按钮
	r.on('mousedown',function(){
		let v_p  = d3.mouse( this ),
			x = v_p[0],
			y = v_p[1]

		if(x >(p.x  - w) && x < p.x && y > p.y && y < (p.y + w) ){
			svg.style('cursor','auto')


			let deleteId = 0
			d3.selectAll('.rect-group').each(function(d,i){

				if(this ==r.node().parentNode){
					d3.select(this).remove()
					deleteId = i + 1
				}
			
			})

			// 遍历，重新获取编号 id
			// console.log('旧id: ',id ,)
			removeSelection(deleteId)

		}
	})

	r.on('mouseleave',function(){
		g.select('.del-icon').remove()
	})
}



function removeSelection(i){
	console.log(stack,i)
	if(i == stack.length - 1){   //最后一个
		stack.pop()
	}else{
		let newStak = []

		for(let j = 1;j < stack.length;j++ ){
			if(j!=i){
				newStak.push({
					rect : stack[j].rect
				})
			}
			stack[j] = null
		}

		for(let j =1; j < stack.length-1;j++){
			stack[j] = newStak[j-1]
		}

		// console.log(stack)
		stack.length = stack.length - 1
		// console.log(stack)
		// stack = stack.slice(0,1).concat(newStak)   // stack undefined ??? 不能改变stack地址
	}
	drawPic()
}


function addSelection(){

	let id = stack.length
	let s = d3.select( ".rect-group:nth-child( "+ id + ")" ).select('.selection') 

	let s_top_right 	=  _p2l( (+s.attr('x')) + (+s.attr('width')) , s.attr('y') ),
		s_bottom_left   =  _p2l( s.attr('x') , (+s.attr('y')) + (+s.attr('height')) )
	
	console.log(s_top_right   , (+s.attr('x')) + (+s.attr('width')) , +s.attr('y') )
	console.log(s_bottom_left , +s.attr('x') , (+s.attr('y')) + (+s.attr('height')))

	stack.push({
		rect : {
			top_right 	: s_top_right,
			bottom_left : s_bottom_left
		}
	})
	drawPic()
}

