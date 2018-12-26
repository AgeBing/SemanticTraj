import * as d3 from 'd3';

export  function removeDefaultWords(){
	d3.selectAll('.default-word').remove()
}


export  function noTrajsWords(){
	removeDefaultWords()

	// 移除已渲染的所有东西
	d3.select('#topic-container').selectAll('*').remove()
	d3.select('#hexagon-container').selectAll('*').remove()
	
	//加字
	d3.select('#topic-container')
		.append('div').attr('class','default-word').append('span')
		.text('No Trajectorys Available!')
	d3.select('#hexagon-container')
		.append('div').attr('class','default-word').append('span')
		.text('No Trajectorys Available!')
}