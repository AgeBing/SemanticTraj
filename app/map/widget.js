import * as d3 from 'd3';
import * as Config from './config.js';
import { draw } from './pic'

import { heatmap,heatpoint }  from './index.js'

function colorPickHander(){
	let color = d3.event.target.value
	Config.picTrajColor = color
	Config.PicUpdateFlag = true
	draw()
}

// function selectColorPickHander(){
// 	let color = d3.event.target.value
// 	Config.picTrajColor = color
// 	Config.PicUpdateFlag = true
// 	draw()
// }
function opacityChange(){
	// console.log(d3.event.target.value)
	let i = d3.event.target.value
	Config.picTrajOpacity = Config.picTrajOpacitys[i]
	Config.PicUpdateFlag = true
	draw()
}

function bindColorPickEvent(){
	let colorInput = d3.select('#map-view').select('#select-area').select('.color-area').select('input')
	colorInput.on('change',colorPickHander)
	colorInput.attr('value',Config.picTrajColor)
}
// function bindSelectColorPickEvent(){
// 	let selectColorInput = d3.select('#map-view').select('#select-area').select('.color-area-select').select('input')
// 	selectColorInput.on('change',selectColorPickHander)
// 	selectColorInput.attr('value',Config.picTrajColor)
// 					.attr('disabled',true)
	// d3.select('#map-view').select('#select-area').select('.color-area-select')
	// 			.attr('class','color-area-select disable')
// }


function bindOpacityChangeEvent(){
	$("#trajslider").slider()
	    .on( "slide", debounceOpacityChange(500)) 
	    .slider( "option", "min", 0)
	    .slider( "option", "max", 10)
	    .slider( "option", "step", 1)
	    .slider( "value", 6 )

        let opa = Config.picTrajOpacity
        let opacityText =   ( opa===Math.floor(opa) ? opa : opa.toFixed(2))
    	d3.select('#opacity-num').text(opacityText)

	d3.select("#trajslider").select("span").style("width","8px").style("margin-left", "-4px")
	    			.style("height","17px")
}


function bindIntensityChangeEvent(){
	$("#heatmapslider").slider()
	    .on( "slide", function( event, ui ) {
	    	let v = ui.value 
	    	d3.select('#intensity-num').text(v)
	        // heatmap.setOptions({radius: 10,max: heatpoint*0.00035})

	        let max,maxtext 
			if(ui.value==200){
				heatmap.setOptions({radius: 12,max: heatpoint*5*ui.value})
				max = Infinity
				maxtext = Infinity

			}else{
				max = heatpoint*Config.heatMapIntensity*ui.value
				max = max.toFixed(2)
				heatmap.setOptions({radius: 12,max: max })
				maxtext = Math.floor(heatpoint/200*v )
			}
			d3.select('#heatmap-legend').select('#heatmap-legend-max')
					.text( maxtext )

	    }) 
	    .slider( "option", "min", 1)
	    .slider( "option", "max", 200 )
	    .slider( "option", "step", 1 )
	    .slider( "value", 70 )
	
	d3.select('#intensity-num').text(70)

	
	d3.select("#heatmapslider").select("span").style("width","8px").style("margin-left", "-4px")
    			.style("height","17px")

}


function initHeatMapLegend(){
	let rects = d3.select('#heatmap-legend').selectAll('.color_bar')

	rects.each(function(d,i){
		d3.select(this)
			.style('background-color' ,Config.heatMapColor[i] )
	})


	let min = d3.select('#heatmap-legend').select('#heatmap-legend-min')
					.text(0)
}
// function bindOpacityChangeEvent(){
// 	let colorInput = d3.select('#map-view').select('#select-area').select('.range-area').select('input')
// 	colorInput.on('change',opacityChange)
// }


export function appendWidget(){
	bindColorPickEvent()
	bindOpacityChangeEvent()
	// bindSelectColorPickEvent()
	bindIntensityChangeEvent()
	initHeatMapLegend()
}


// 防止短时内 频繁调用 耗时函数
let debounceTimer
function debounceOpacityChange( delay ){

	let delaySecond = delay || 2000
	return function(event, ui){
		// console.log('debounce')
		let context = this
		clearTimeout( debounceTimer )

		let i =  ui.value
        Config.picTrajOpacity = Config.picTrajOpacitys[i]

        let opa = Config.picTrajOpacity
        let opacityText =   ( opa===Math.floor(opa) ? opa : opa.toFixed(2))
    	d3.select('#opacity-num').text(opacityText)
		Config.PicUpdateFlag = true
		debounceTimer = setTimeout( function(){
			console.log('draw opacity')
			draw()
		} , delaySecond )
	}
}

