import * as d3 from 'd3';


// import { _getData,_getHighlight } from 'api'


import { getData,getHighLight,getTrajsThroughHL  } from  './util/matrix_process'
import { init as topic_init,topicZoomRect ,registr_select_func  } from 'topicpanel'
import { draw as draw_t ,selectPeriod } from 'drawtrajlines'
import { init as hexa_init,topicHexa }  from 'hexagonpanel' 


const topicNames = ["Beauty","Food","Shop","Uptown","Education","Hospital"]

let map,svg,g   //containers
let rects        //色块
let lines_data  //轨迹数据

let trans = {}  //偏移 xy
let numX , numY , Boundry  

let  quantile = d3.scaleQuantile()
    .range(d3.range(5).map(function(i) { return  i * 0.25  }));  //用于透明度的比例尺

let state = {}    //用户操作 状态  select_rect -> 框选

// 数据格式转换
function _dataAdapter(_lines_data){

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
	lines_data = _dataAdapter(_lines_data)

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
}

async function _resize(lines_data){
	// 获取视图边界
	let bottomLeft = map.getBounds().getSouthWest();
	let topRight = map.getBounds().getNorthEast();
	let boundry = { bottomLeft,topRight }
	// console.log(boundry)
	Boundry = boundry
	// 取得数据
	let res_getData  = getData(lines_data,bottomLeft,topRight)	
	// 视图偏移
	_setLayer( boundry )
	// 绘制色块
	_drawRects( res_getData )

	_addControlPanel(res_getData.summery.maxval)

	_drawSelection()
}


function _setLayer(boundry){
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
	numX = x_num
	numY = data.summery.y_num

	//透明度 scale domain 
	let v = document.getElementById("range1").value
	quantile.domain( d3.range(maxval * v) ) 

	rects.attr('x',d => _l2v(d).x)
		.attr('y', d => _l2v(d).y)
		.attr('width',vGap.x)
		.attr('height',vGap.y)
		.attr("fill",'steelblue')
		.attr("opacity", (d,i) => {
			let op = quantile(d.val)
			return op
		})

}



//添加 框选 操作
function _addSelectEvent(){
	g.selectAll( "rect.selection").remove();

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
    	// console.log(p)
    	p[0]+= trans.x
	    p[1]+= trans.y
    	// console.log(p)

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

        // a bug 🐞
        if(isNaN(d.x)) return

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
	})


	// 选择结束 
	svg.on( "mouseup", function() {
        let p = d3.mouse(this)
	    
	    
	    // 删除框选操作
		map.dragging.enable()	
		_removeSelectEvent()
		document.getElementById('range8').disabled = false
		svg.style('cursor','grab')
		// 记录框选状态
		let s = d3.select( "rect.selection");
		let s_x1 = s.attr('x')
		let s_y1 = s.attr('y')
		let s_x2 = +s.attr('x') + +s.attr('width')
		let s_y2 = +s.attr('y') + +s.attr('height')

		let p_tl =  _v2l( [s_x1,s_y1] )
		let p_br =  _v2l( [s_x2,s_y2] )

		state.select_rect = {
			p_tl , p_br 
		}
		func_frameSelect()

	})

}

// 选择联动
let selectArr = {
	'topic': [],
	'hexa' : []
}
function select_outer(i,outerName){
	selectArr[outerName][i].select()
}
// 选中离开时触发
function un_select_outer(i,outerName){
	selectArr[outerName][i].un_select()
}


// 框选后 重新渲染自动识别 的色块
async function func_frameSelect(slide = false){

	let { p_tl , p_br  } = state.select_rect

	let p1 = _l2v( p_tl )
	let p2 = _l2v( p_br )

	let v_topLeft = [ p1.x,p1.y ]
	let v_bottomRight = [ p2.x,p2.y ]   

	// let v_topLeft = [ d.x,d.y ]
	// let v_bottomRight = [ d.x +d.width , d.y+d.height ]    

	let topLeft = map.layerPointToLatLng(v_topLeft)
	let bottomRight = map.layerPointToLatLng(v_bottomRight)

	let select_boundry = { topLeft,bottomRight }

	//控制系数 
	let th = {
		// max : document.getElementById("valBox4").innerHTML,
		min : document.getElementById("valBox3").innerHTML
	}


	// 取得数据 高亮 色块区域
	let hightLight_coor   = getHighLight(th,topLeft,bottomRight)
	console.log(hightLight_coor)
	let x_num = hightLight_coor.x_num
	let ps = hightLight_coor.ps
	let th_val = hightLight_coor.th_val

	if(th_val && !slide){
		document.getElementById("valBox3").innerHTML = th_val.toFixed(2).toString();
		document.getElementById("range3").setAttribute('max',th_val.toFixed(2).toString());
	}

	rects.attr("fill",function(di,i){
			let y = Math.floor(i / x_num)
			let x = i % x_num

    	if( ps[y] && ps[y].indexOf(x) != -1 ){ 
    		return "#fa541c"
    	}
    	return "steelblue"
    })

	//获得经过这些区域的轨迹   
	let selected_trajs = getTrajsThroughHL( lines_data , hightLight_coor.ps )


	removeDefaultWords()
	if(selected_trajs.ps.length == 0){

		d3.select('#topic-container').selectAll('*').remove()
		d3.select('#hexagon-container').selectAll('*').remove()
		

		d3.select('#topic-container')
			.append('div').attr('class','default-word').append('span').text('No Trajectorys Available!')
		d3.select('#hexagon-container')
			.append('div').attr('class','default-word').append('span').text('No Trajectorys Available!')

		return
	}

	// TOPIC PANEL
	let  visBox = document.getElementById("topic-container");
	let  h = visBox.offsetHeight; //高度
	let  w = visBox.offsetWidth; //宽度



	topic_init(selected_trajs.timeRange)
	hexa_init()

	let l_n = +document.getElementById("range6").value
	for(let i = 0;i < l_n && i < selected_trajs.ps.length;i++){
		let r = new topicZoomRect()
		let h = new  topicHexa()

		h.init(topicNames,selected_trajs.ps[i],i)
		h.bind(select_outer,un_select_outer)
		h.render()

		r._init(visBox,selected_trajs.ps[i],i)
		r.bind(select_outer,un_select_outer)
		r._render()

		selectArr['topic'].push(r)
		selectArr['hexa'].push(h)

	}

	
	registr_select_func(selectPeriod)


	// 绘制轨迹
	draw_t({map,svg,g},selected_trajs.ps.slice(0,l_n))
}




// let topic_select_func , hexa_select_func
// let topic_un_select_func , hexa_un_select_func
// // 选中时触发



function removeDefaultWords(){
	d3.selectAll('.default-word').remove()
}

function _removeSelectEvent(){
	svg.on( "mousedown",null)
	svg.on( "mousemove",null)
	svg.on( "mouseup",null)
}


let range1_input_func,
	range8_click_func,
	range3_change_func,
	range6_change_func

function _addControlPanel(maxval){

	document.getElementById('range1').removeEventListener('input',range1_input_func)
 	document.getElementById('range8').removeEventListener('click',range8_click_func)
	document.getElementById('range3').removeEventListener('input',range3_change_func)
	document.getElementById('range6').removeEventListener('change',range6_change_func)


	range1_input_func = function (e){
		let v = e.target.value;
	 	document.getElementById("valBox1").innerHTML = v;
		quantile.domain( d3.range(maxval * v) ) 

	 	rects.attr("opacity", (d,i) => {
			let op = quantile(d.val)
			return op
		})
	}
	range8_click_func = function (e){
		document.getElementById('range8').disabled = true
		map.dragging.disable()
		svg.style('cursor','crosshair')
		_addSelectEvent()
	}
	range3_change_func = function (e){
	  	let v = e.target.value;
	 	document.getElementById("valBox3").innerHTML = v;
	 	func_frameSelect(true)
	}
	range6_change_func = function (e){
		let v = e.target.value;
	 	func_frameSelect()
	}


	//透明度
	document.getElementById('range1').addEventListener('input',range1_input_func)

 	//框选操作 添加
 	document.getElementById('range8').addEventListener('click',range8_click_func)


 	document.getElementById('range3').setAttribute('max',maxval)
 	document.getElementById('range3').setAttribute('value',maxval * 0.1)
 	document.getElementById("valBox3").innerHTML = (maxval * 0.1).toFixed(2).toString()

	// 框选阈值 min 
	document.getElementById('range3').addEventListener('input',range3_change_func)
	document.getElementById('range6').addEventListener('change',range6_change_func)

}

function _drawSelection(){

	if(state.select_rect){
		let { p_tl , p_br  } = state.select_rect
		// console.log('draw',p_tl,p_br)
		let p1 = _l2v( p_tl )
		let p2 = _l2v( p_br )
		// console.log(p1,p2) 
		
		let s = d3.select( "rect.selection");
        s.attr("x",p1.x )
        	.attr("y",p1.y)
        	.attr("width",p2.x - p1.x )
        	.attr("height",p2.y - p1.y)


        func_frameSelect()

	}
}






// functional
/***********************************************************************/

// 数据转换
function _l2v(d) {
    var y = d['lon'] || d['lng']
    var x = d['lat']
    return map.latLngToLayerPoint(new L.LatLng(x,y))
}
function _v2l( xy ){		// [x,y] 
	let { bottomLeft,topRight } = Boundry
	let lng_width = topRight['lng'] - bottomLeft['lng']   //精度  -> x
	let lat_width = topRight['lat'] - bottomLeft['lat']   //纬度  -> y

	var visBox = document.getElementById("map-container");
	let  h = visBox.offsetHeight; //高度
	let  w = visBox.offsetWidth; //宽度

	let x = xy[0] , y = xy[1]
	let lat = topRight['lat']    - (y / h) * lat_width
	let lng = bottomLeft['lng']  + (x / w )* lng_width
	return  { lat ,lng }
}


//计算 rect 长宽
function _vGap(data){
	let sequence = data.sequence
	let x_num  = data.summery.x_num 
	let x_p1 = sequence[0] , x_p2 = sequence[1]
	let y_p1 = sequence[0] , y_p2 = sequence[x_num]
	let x_p1_v = map.latLngToLayerPoint(new L.LatLng(x_p1['lat'],x_p1['lng']))
	let x_p2_v = map.latLngToLayerPoint(new L.LatLng(x_p2['lat'],x_p2['lng']))
	let y_p1_v = map.latLngToLayerPoint(new L.LatLng(y_p1['lat'],y_p1['lng']))
	let y_p2_v = map.latLngToLayerPoint(new L.LatLng(y_p2['lat'],y_p2['lng']))

	let gap = {
		x : x_p2_v.x - x_p1_v.x,
		y : y_p2_v.y - y_p1_v.y
	}
	let lastone = sequence[sequence.length - 1]
	return gap
}




export { draw }