import * as d3 from 'd3';
import * as Config from './config.js';
import { draw } from './pic'

import {heatmap}  from './index.js'

function colorPickHander(){
	let color = d3.event.target.value
	Config.picTrajColor = color
	Config.PicUpdateFlag = true
	draw()
}

function selectColorPickHander(){
	let color = d3.event.target.value
	Config.picTrajSelectColor = color
	Config.PicUpdateFlag = true
	draw()
}
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
function bindSelectColorPickEvent(){
	let selectColorInput = d3.select('#map-view').select('#select-area').select('.color-area-select').select('input')
	selectColorInput.on('change',selectColorPickHander)
	selectColorInput.attr('value',Config.picTrajSelectColor)
					.attr('disabled',true)
	
	d3.select('#map-view').select('#select-area').select('.color-area-select')
				.attr('class','color-area-select disable')
}


function bindOpacityChangeEvent(){
	$("#trajslider").slider()
	    .on( "slide", function( event, ui ) {
			Config.picTrajOpacity = ui.value*0.001
			console.log(Config.picTrajOpacity)
			Config.PicUpdateFlag = true
			draw()
	    }) 
	    .slider( "option", "min", 1)
	    .slider( "option", "max", 100)
	    .slider( "option", "step", 1)
	    .slider( "value", 10 )
	Config.picTrajOpacity = 0.1
	d3.select("#trajslider").select("span").style("width","8px").style("margin-left", "-4px")
	    			.style("height","17px")
}


// function bindOpacityChangeEvent(){
// 	let colorInput = d3.select('#map-view').select('#select-area').select('.range-area').select('input')
// 	colorInput.on('change',opacityChange)
// }


export function appendWidget(){
	bindColorPickEvent()
	bindOpacityChangeEvent()
	bindSelectColorPickEvent()
}

