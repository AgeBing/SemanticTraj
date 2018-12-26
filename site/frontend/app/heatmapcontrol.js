import * as d3 from 'd3';
import { gMaxVal , gDistrubuion,gInnerMin,gInnerMax } from  './util/matrix_process'
import { map,svg,g,g_opacity_quantile,gRects,gTrans,gStateOfSeletced } from 'drawheatmap'
import { frameSelect,_l2v,_v2l  } from 'drawheatmap'



//  监听事件的变量名
//  为避免重复注册，需要每次remove
let range1_input_func,
	range8_click_func,
	range3_change_func,
	range6_change_func


let legendOpacity


function addControlPanel(){
	document.getElementById('range1').removeEventListener('input',range1_input_func)
 	document.getElementById('range8').removeEventListener('click',range8_click_func)
	document.getElementById('range3').removeEventListener('input',range3_change_func)
	document.getElementById('range6').removeEventListener('change',range6_change_func)


	range1_input_func = function (e){
		let v = e.target.value;
	 	document.getElementById("valBox1").innerHTML = v;
		g_opacity_quantile.domain( d3.range(gMaxVal * v) ) 

	 	gRects.attr("opacity", (d,i) => {
			let op = g_opacity_quantile(d.val)
			return op
		})
	 	
	}
	range8_click_func = function (e){
		document.getElementById('range8').disabled = true
		map.dragging.disable()
		svg.style('cursor','crosshair')
		gStateOfSeletced.selected = false
		_addSelectEvent()
	}
	range3_change_func = function (e){
	  	let v = e.target.value;
	 	document.getElementById("valBox3").innerHTML = v;
	 	frameSelect(true)
	}
	range6_change_func = function (e){
		let v = e.target.value;
	 	frameSelect()
	}


	//透明度
	document.getElementById('range1').addEventListener('input',range1_input_func)

 	//框选操作 添加
 	document.getElementById('range8').addEventListener('click',range8_click_func)


 	// document.getElementById('range3').setAttribute('max',gMaxVal)
 	// document.getElementById('range3').setAttribute('value',gMaxVal * 0.1)
 	// document.getElementById("valBox3").innerHTML = (gMaxVal * 0.1).toFixed(2).toString()

	// 框选阈值 min 
	document.getElementById('range3').addEventListener('input',range3_change_func)
	document.getElementById('range6').addEventListener('change',range6_change_func)

	if(!legendOpacity) legend_opacity_add()
		legend_opacity_render()
}

function legend_opacity_add(){
	legendOpacity = new G2.Chart({
	  container: 'tuli',
	  forceFit: true,
	  height: 300,
	  padding: [ 20, 20, 65, 60 ]
	});
}
function legend_opacity_render(){

	let data = []
	for(let val = 0 ; val < gDistrubuion.length ; val++){
		data.push({
			val :  val,
			sum :  gDistrubuion[val] ? gDistrubuion[val] : 0,

		})
	}

	legendOpacity.source(data,{
		sum:{
			alias:'分布量'
		},
		val:{
			alias:'值'
		},
	});
	legendOpacity.scale({
	  sum: {
	  	// maxLimit: 20

	  	nice:true,
	  	type :'linear',
	  	// base : 10
	  }
	});

	legendOpacity.axis('val', {
	  label: {
	    formatter: function formatter(val) {
	      return val*10
	    }
	  },
	  title: true
	});

	legendOpacity.axis('sum', {
	  title: true
	});



	legendOpacity.tooltip({
	  crosshairs: {
	    type: 'line'
	  }
	});
	legendOpacity.area().position('val*sum');
	legendOpacity.line().position('val*sum').size(2);

	legendOpacity.guide().regionFilter({
	  top: true,
	  start: [gInnerMin, 'max'],
	  end: [gInnerMax, 0],
	  color: '#f5222d'
	});

	legendOpacity.render();
}

//添加 框选 操作
function _addSelectEvent(){
	g.selectAll( "rect.selection").remove();

	// 创建 选择框
	svg.on( "mousedown", function() {
	    var v_p = d3.mouse( this);
	    v_p[0]+= gTrans.x
	    v_p[1]+= gTrans.y


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
    	p[0]+= gTrans.x
	    p[1]+= gTrans.y

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

        gRects.attr("fill",function(di,i){
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
		let s_x1 = +s.attr('x')
		let s_y1 = +s.attr('y')
		let s_x2 = +s.attr('x') + +s.attr('width')
		let s_y2 = +s.attr('y') + +s.attr('height')
		gStateOfSeletced.topleft     =  _v2l( [s_x1 - gTrans.x,s_y1 - gTrans.y] )
		gStateOfSeletced.bottomright =  _v2l( [s_x2 - gTrans.x,s_y2 - gTrans.y])
		gStateOfSeletced.selected    = true


		frameSelect()
	})

}

function _removeSelectEvent(){
	svg.on( "mousedown",null)
	svg.on( "mousemove",null)
	svg.on( "mouseup",null)
}



export { addControlPanel }