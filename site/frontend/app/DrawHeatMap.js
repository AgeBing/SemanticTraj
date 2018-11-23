import * as d3 from 'd3';


import { _getData,_getHighlight } from 'api'


import { getData,getHighLight,getTrajsThroughHL  } from  './util/matrix_process'

import { init,topicZoomRect ,registr_select_func  } from 'topicpanel'


import { draw as draw_t ,selectPeriod } from 'drawtrajlines'

let map,svg,g   //containers
let rects        //色块

let func_frameSelect  //callback func
let lines_data  //轨迹数据
let trans = {}  //偏移 xy

// 数据格式转换
function dataAdapter(_lines_data){
	let lines_data = _lines_data.map((line) => {

		let ps = line.traj.map((p) => {
			return 	{
					date : p.time.split(' ')[0],
					time : p.time.split(' ')[1],
					coor : {
						lat : p.latitude ,
						lon : p.longitude
					},
					topics : p.topics
				}
		})

		return {
			id : line.pid,
			points : ps,

		}
	})

	return lines_data

}


// Main function 
function draw(containers,_lines_data){
	lines_data = dataAdapter(_lines_data)

	map = containers.map
 	svg = containers.svg
 	g   = containers.g


 	map.on("moveend", () => {
		_resize(lines_data)
	});
	map.on("zoomend", () => {
		_resize(lines_data)
	});

	_resize(lines_data)
	console.log('draw_h')
}

async function _resize(lines_data){
	// 获取视图边界
	let bottomLeft = map.getBounds().getSouthWest();
	let topRight = map.getBounds().getNorthEast();
	let boundry = { bottomLeft,topRight }

	// 取得数据
	let res_getData  = getData(lines_data,bottomLeft,topRight)

	// 视图偏移
	_setBottomLayer( boundry )
	// 绘制色块
	_drawRects( res_getData )

 	let map_dragable = document.getElementById("range2").checked
 	if(!map_dragable){
		map.dragging.disable()	
		// 添加 事件listener 
		_addSelectEvent()
	}


	//透明度
	document.getElementById('range2').addEventListener('change',(e)=>{
	  	
	  	let map_dragable = e.target.checked;
	 	if(!map_dragable){
			map.dragging.disable()	
			// 添加 事件listener 
			_addSelectEvent()
		}else{
			map.dragging.enable()	
			_removeSelectEvent()
		}

	})


}


function _setBottomLayer(boundry){
	let { bottomLeft,topRight } = boundry 

	let xy_bottomLeft = map.latLngToLayerPoint(bottomLeft)
	let xy_topRight	 =  map.latLngToLayerPoint(topRight)

	//地图上的 一层 svg 需要随着 鼠标移动进行平移
    svg.attr("width",  xy_topRight.x - xy_bottomLeft.x)
        .attr("height",xy_bottomLeft.y - xy_topRight.y)
        .style("left", xy_bottomLeft.x + "px")
        .style("top",  xy_topRight.y + "px");

    g.attr("transform",
    	"translate(" + - xy_bottomLeft.x + ","+ - xy_topRight.y+")"
    )

    trans.x = xy_bottomLeft.x
    trans.y = xy_topRight.y
    // console.log("trans",xy_bottomLeft.x,xy_topRight.y)
}


function _drawRects(data){
	let sequence = data.sequence
  	if(!rects){
  		rects = g.selectAll('rect')
  			.data(sequence)
			.enter().append('rect')
	}else{
		rects = g.selectAll('rect')
  			.data(sequence)
	}

	let vGap = _vGap(data)
	let maxval = data.summery.maxval
	let x_num = data.summery.x_num
	
	// 透明度显示系数 (0,1) 
	let v = document.getElementById("range1").value

	rects.attr('x',d => _l2v(d).x)
		.attr('y', d => _l2v(d).y)
		.attr('width',vGap.x)
		.attr('height',vGap.y)
		.attr("fill",'steelblue')
		.attr("opacity", (d,i) => {
			let linear = d3.scaleLinear().domain([0,maxval*v]).range([0,1])	
			let op = linear(d.val)
			return op
		})

	_addControlPanel(maxval)
		// .on("click",function(d,i){
		// 	 let y = Math.floor(i / x_num)
 	// 		let x = i % x_num
		// })

}


function _addSelectEvent(){
	// 创建 选择框
	svg.on( "mousedown", function() {
	    var v_p = d3.mouse( this);
	    v_p[0]+= trans.x
	    v_p[1]+= trans.y


	    g.append( "rect")
	    	.attr('class','selection')
	    	.attr('x',v_p[0])
	    	.attr('y',v_p[1])
	    	.attr('rx',3)
	    	.attr('ry',3)
	    	.attr('width',3)
	    	.attr('height',3)

	    g.selectAll('path').remove()
	})

	// 选择框 移动
	svg.on("mousemove", function() {
	    let s = d3.select( "rect.selection");
	    if(s.empty()) return

        let p = d3.mouse(this)
    	console.log(p)
    	p[0]+= trans.x
	    p[1]+= trans.y
    	console.log(p)

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

        rects.attr("fill",function(di,i){
        	if( _l2v(di).y  >= d.y 
        		&&  _l2v(di).y <= ( d.y + d.height ) 
        		&& _l2v(di).x  >= d.x 
        		&& _l2v(di).x  <= ( d.x + d.width)){
        		return "green"
        	}
        	return "steelblue"
        })

        // 框选后 重新渲染自动识别 的色块
        func_frameSelect =  async function(){
			let v_topLeft = [ d.x,d.y ]
			let v_bottomRight = [ d.x +d.width , d.y+d.height ]    

        	let topLeft = map.layerPointToLatLng(v_topLeft)
        	let bottomRight = map.layerPointToLatLng(v_bottomRight)

        	let select_boundry = { topLeft,bottomRight }

        	//控制系数 
        	let th = {
        		max : document.getElementById("valBox4").innerHTML,
        		min : document.getElementById("valBox3").innerHTML
        	}


			// 取得数据 色块区域
			let hightLight_coor   = getHighLight(th,topLeft,bottomRight)
			console.log(hightLight_coor)
			let x_num = hightLight_coor.x_num
			let ps = hightLight_coor.ps
			rects.attr("fill",function(di,i){
 				let y = Math.floor(i / x_num)
 				let x = i % x_num

	        	if( ps[y] && ps[y].indexOf(x) != -1 ){ 
	        		return "red"
	        	}
	        	return "steelblue"
	        })

			//获得经过这些区域的轨迹   
			let selected_trajs = getTrajsThroughHL( lines_data , hightLight_coor.ps )
			//渲染 Topics

			console.log(selected_trajs)
	
			let  visBox = document.getElementById("topic-vis");
			let  h = visBox.offsetHeight; //高度
			let  w = visBox.offsetWidth; //宽度
		
			init(selected_trajs.timeRange)
			for(let i = 0;i < 5 ;i++){
				let r = new topicZoomRect()
				r._init(50,w*0.8,visBox,selected_trajs.ps[i],i)
				r._render()
			}


			registr_select_func(selectPeriod)
			draw_t({map,svg,g},selected_trajs.ps.slice(0,5))

		}
	})


	// 选择结束 
	svg.on( "mouseup", function() {
        let p = d3.mouse(this)
	    g.selectAll( "rect.selection").remove();
	    func_frameSelect()
	})

}
function _removeSelectEvent(){
	svg.on( "mousedown",null)
	svg.on( "mousemove",null)
	svg.on( "mouseup",null)

}

function _addControlPanel(maxval){

	//透明度
	document.getElementById('range1').addEventListener('change',(e)=>{
	  	
	  	let v = e.target.value;
	 	document.getElementById("valBox1").innerHTML = v;

	 	rects.attr("opacity", (d,i) => {
			let linear = d3.scaleLinear().domain([0,maxval*v]).range([0,1])	
			let op = linear(d.val)
			return op
		})

	})


 	document.getElementById('range3').setAttribute('max',maxval)
 	document.getElementById('range3').setAttribute('value',maxval * 0.1)
 	document.getElementById("valBox3").innerHTML = maxval * 0.1

 	document.getElementById('range4').setAttribute('max',maxval)
 	document.getElementById('range4').setAttribute('value',maxval * 0.5)
 	document.getElementById("valBox4").innerHTML = maxval * 0.5;


	// 框选阈值 min 
	document.getElementById('range3').addEventListener('change',(e)=>{
	  	
	  	let v = e.target.value;
	 	document.getElementById("valBox3").innerHTML = v;
	 	func_frameSelect()
	})

	// 框选阈值 max 
	document.getElementById('range4').addEventListener('change',(e)=>{
	  	
	  	let v = e.target.value;
	 	document.getElementById("valBox4").innerHTML = v;
	 	func_frameSelect()
	})

}


// 数据转换
function _l2v(d) {
    var y = d['lon'] || d['lng']
    var x = d['lat']
    return map.latLngToLayerPoint(new L.LatLng(x,y))
}
//计算 rect 长宽
function _vGap(data){
	let sequence = data.sequence
	let x_num  = data.summery.x_num 

	let x_p1 = sequence[0] , x_p2 = sequence[1]
	let y_p1 = sequence[0] , y_p2 = sequence[x_num]

	// console.log(x_p1,x_p2,y_p1,y_p2)

	let x_p1_v = map.latLngToLayerPoint(new L.LatLng(x_p1['lat'],x_p1['lng']))
	let x_p2_v = map.latLngToLayerPoint(new L.LatLng(x_p2['lat'],x_p2['lng']))
	let y_p1_v = map.latLngToLayerPoint(new L.LatLng(y_p1['lat'],y_p1['lng']))
	let y_p2_v = map.latLngToLayerPoint(new L.LatLng(y_p2['lat'],y_p2['lng']))

	let gap = {
		x : x_p2_v.x - x_p1_v.x,
		y : y_p2_v.y - y_p1_v.y
	}
	// console.log(gap)
	let lastone = sequence[sequence.length - 1]
	return gap
}








export { draw }