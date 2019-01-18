import * as d3 from 'd3';

import { getData,getHighLight,getTrajsThroughHL,  
		gXnum ,gMaxVal  } from  './util/matrix_process'


import { addControlPanel } from 'heatmapcontrol'
import { draw_selected_trajs } from 'mappanel'

import { noTrajsWords,removeDefaultWords } from 'words'


let map ,
	svg ,
	g,   		  //containers
	gRects,       //色块
	lines_data,   //轨迹数据
 	gBoundry ,  		//视图边界，resize 时更新
	gTrans = {} ;   //x y方向上的偏移

let g_opacity_quantile = d3.scaleQuantile()
    .range(d3.range(5).map(function(i) { return  i * 0.25  }));  //用于透明度的比例尺
let gStateOfSeletced = { topleft:0, bottomright:0, selected:false }    //用户操作 状态  select_rect -> 框选



// 数据格式转换
function _dataAdapter(_lines_data){
	let lines_data = _lines_data.map((line) => {
		let ps = line.traj.map((p) => {     //各轨迹点
			return 	{
					date : p.startTime.split(' ')[0],
					time : p.startTime.split(' ')[1],
					coor : {
						lat : p.latitude ,
						lon : p.longitude
					},
					topics : p.topics
				}
		})
		return {
			id : line.pid,	 //轨迹id
			points : ps,     //轨迹点
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
	let boundry = { 
		bottom_left : map.getBounds().getSouthWest(),
		top_right   : map.getBounds().getNorthEast()
	}
	gBoundry = boundry

	// 取得数据
	let res_getData  = getData(lines_data)

	// 视图偏移
	_setLayer()

	// 绘制轨迹色块
	_drawRects( res_getData )

	// 添加监听时间
	addControlPanel()

	// 绘制选择
	_drawSelection()
}


function _setLayer(){
	let { bottom_left,top_right } = gBoundry 

	let xy_bottomLeft = map.latLngToLayerPoint(bottom_left)
	let xy_topRight	 =  map.latLngToLayerPoint(top_right)

	//地图上的 一层 svg 需要随着 鼠标移动进行平移
    svg.attr("width",  xy_topRight.x - xy_bottomLeft.x)
        .attr("height",xy_bottomLeft.y - xy_topRight.y)
        .style("left", xy_bottomLeft.x + "px")
        .style("top",  xy_topRight.y + "px");

    g.attr("transform",
    	"translate(" + - xy_bottomLeft.x + ","+ - xy_topRight.y+")"
    )

    gTrans.x = xy_bottomLeft.x
    gTrans.y = xy_topRight.y
}

function _drawRects(sequence){
  	if(!gRects){
  		gRects = g.selectAll('rect')
  			.data(sequence)
			.enter().append('rect')
	}else{
		gRects = g.selectAll('rect')
  			.data(sequence)
	}

	let vGap = _vGap(sequence)

	//透明度 比例尺
	let v = document.getElementById("range1").value
	g_opacity_quantile.domain( d3.range(gMaxVal * v) ) 

	gRects.attr('x',d => _l2v(d).x)
		.attr('y', d => _l2v(d).y)
		.attr('width',vGap.x)
		.attr('height',vGap.y)
		.attr("fill",'steelblue')
		.attr("opacity", (d,i) => {
			let op = g_opacity_quantile(d.val)
			return op
		})
}




// 框选后 重新渲染自动识别 的色块
async function frameSelect(slide = false){

	let { topleft , bottomright  } = gStateOfSeletced

	//控制系数 
	let th = {
		min : document.getElementById("valBox3").innerHTML
	}

	// 取得数据 高亮 色块区域
	let hightLight_coor   = getHighLight(th,topleft,bottomright)

	let ps     = hightLight_coor.ps
	let th_val = hightLight_coor.th_val

	if(th_val && !slide){
		document.getElementById("valBox3").innerHTML = th_val.toFixed(2).toString();
		document.getElementById("range3").setAttribute('max',th_val.toFixed(2).toString());
	}

	gRects.attr("fill",function(di,i){
			let y = Math.floor(i / gXnum)
			let x = i % gXnum

    	if( ps[y] && ps[y].indexOf(x) != -1 ){ 
    		return "#fa541c"
    	}
    	return "steelblue"
    })


	//获得经过这些区域的轨迹   
	let selected_trajs = getTrajsThroughHL( lines_data , hightLight_coor.ps )


	removeDefaultWords()
	if(selected_trajs.ps.length == 0){
		noTrajsWords()
		return
	}

	draw_selected_trajs(selected_trajs) 	
}




function _drawSelection(){
	if(gStateOfSeletced.selected){
		let { topleft , bottomright  } = gStateOfSeletced 
		let p1 = _l2v( topleft )
		let p2 = _l2v( bottomright )

		let s = d3.select( "rect.selection");
        s.attr("x",p1.x )
        	.attr("y",p1.y)
        	.attr("width",p2.x - p1.x )
        	.attr("height",p2.y - p1.y)
        frameSelect()
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
	let { bottom_left,top_right } = gBoundry
	let lng_width = top_right['lng'] - bottom_left['lng']   //精度  -> x
	let lat_width = top_right['lat'] - bottom_left['lat']   //纬度  -> y

	var visBox = document.getElementById("map-container");
	let  h = visBox.offsetHeight; //高度
	let  w = visBox.offsetWidth; //宽度

	let x = xy[0] , y = xy[1]
	let lat = top_right['lat']    - (y / h) * lat_width
	let lng = bottom_left['lng']  + (x / w )* lng_width
	return  { lat ,lng }
}


//计算 rect 长宽
function _vGap(sequence){
	let x_num  = gXnum
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




export { draw,frameSelect , _l2v,_v2l,  
		 map,svg,g,gBoundry,gTrans,g_opacity_quantile,gRects,gStateOfSeletced }