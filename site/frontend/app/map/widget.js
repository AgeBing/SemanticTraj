import * as d3 from 'd3';
import * as Config from './config.js';
import { draw } from './pic'

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
	let colorInput = d3.select('#map-view').select('#select-area').select('.range-area').select('input')
	colorInput.on('change',opacityChange)
}


export function appendWidget(){
	bindColorPickEvent()
	bindOpacityChangeEvent()
	bindSelectColorPickEvent()
}

