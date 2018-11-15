import * as d3 from 'd3';


import { _getData,_getHighlight } from 'api'

let map,svg,g   //containers
let rects        //色块

let func_frameSelect  //callback func

// let th = {
// 	max: document.getElementById("range2").value,
// 	min: document.getElementById("range3").value
// } //阈值



function draw(containers){
	map = containers.map
 	svg = containers.svg
 	g   = containers.g

 	map.on("moveend", () => {
		_resize()
	});
	map.on("zoomend", () => {
		_resize()
	});

	map.dragging.disable()	

	_resize()

	console.log('draw_h')
}

async function _resize(){
	// 获取视图边界
	let bottomLeft = map.getBounds().getSouthWest();
	let topRight = map.getBounds().getNorthEast();
	let boundry = { bottomLeft,topRight }
	
	// 取得数据
	let res_getData  = await _getData({boundry:boundry})


	// 视图偏移
	_setBottomLayer(boundry)
	// 绘制色块
	_drawRects(res_getData)
	// 添加 事件listener 
	_addSelectEvent()

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
	// let v = document.getElementById("range1").value
   	let v = 1

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
		.on("click",function(d,i){
			 let y = Math.floor(i / x_num)
 			let x = i % x_num
		})

}


function _addSelectEvent(){
	// 创建 选择框
	svg.on( "mousedown", function() {
	    var v_p = d3.mouse( this);
	    g.append( "rect")
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
	    let s = d3.select( "rect.selection");
	    if(s.empty()) return

        let p = d3.mouse(this)
        let d = {
            x       : parseInt( s.attr("x"), 10),
            y       : parseInt( s.attr("y"), 10),
            width   : parseInt( s.attr("width"), 10),
            height  : parseInt( s.attr("height"), 10)
        }
        let move = {
            x : p[0] - d.x,
            y : p[1] - d.y
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
        s.attr("x",d.x)
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
        		max : 0.2,
        		min : 0.05
        	}
        	let req = {
        		boundry: select_boundry,
        		th: th
        	}
			// 取得数据
			let res_getData   = await _getHighlight(req)
			let data = res_getData
			console.log(data)

			let x_num = data.x_num
			let ps = data.ps
			rects.attr("fill",function(di,i){
 				let y = Math.floor(i / x_num)
 				let x = i % x_num

	        	if( ps[y] && ps[y].indexOf(x) != -1 ){ 
	        		return "red"
	        	}
	        	return "steelblue"
	        })

		}
	})


	// 选择结束 
	svg.on( "mouseup", function() {
        let p = d3.mouse(this)
	    g.selectAll( "rect.selection").remove();
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