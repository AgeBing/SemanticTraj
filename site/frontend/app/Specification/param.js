


import * as d3 from 'd3';


export function appendParamWidges(roots) {



	roots.each(function(){
		let root = d3.select(this)
		addParamRects(root)
	})
}

	const topicNames = ["Beauty","Food","Shop","Uptown","Education","Hospital"]




function addParamRects(root){

	root.append('div').attr('class','high-level-desc')
				.text('Parameters for Relevance Computation')


	addAB(root)


	root.append('div').attr('class','high-level-desc')
				.text('High-level Description Information')


	topicNames.forEach((name,i)=>{
		addOneParamRect(root,i)
	})
}

function addOneParamRect(root,i){
	let  visBox = document.getElementsByClassName("semantic_constraints")[0];
	let  height = visBox.offsetHeight; //高度
	let  width = visBox.offsetWidth; //宽度

	let  rectWidth = width - 105, rectHeight = 10

	let group  = root.append('div').attr('class','param-rect')
		group.append('div')
			.attr('class' , 'param-name')
			.text(topicNames[i])

		let svg = group.append('svg')
					.attr('class' , 'param-range')
					.attr('height' , rectHeight)
					.attr('width' , rectWidth)

			svg.append('rect').attr('class','color-rect')
					.attr('width',rectWidth * 0.5)
					.attr('height',rectHeight)

			svg.on('click',function(){
				let v_p  = d3.mouse( this ),
					x = v_p[0]

				d3.select(this).select('rect')
					.attr('width',x)

			})

		group.append('div')
			.attr('class' , 'param-num')
			.text(0.5)	
}


function addAB(root){
	let group = root.append('div').attr('class','param-ab-rect')
	let Agroup = group.append('div').attr('class','param-half-rect')
	let Bgroup = group.append('div').attr('class','param-half-rect')

	let  rectWidth = 40 , rectHeight = 10

	group.selectAll('.param-half-rect')
		.append('div').attr('class','param-name')

	group.selectAll('.param-half-rect')
		.append('svg')
			.attr('class' , 'param-range')
			.attr('height' , rectHeight)
			.attr('width' , rectWidth)
				.append('rect').attr('class','color-rect')
						.attr('width',rectWidth * 0.5)
						.attr('height',rectHeight)

	group.selectAll('.param-half-rect')
		.append('div').attr('class','param-num')
			.text(0.2)


	Agroup.select('svg').on('click',function(){
			let v_p  = d3.mouse( this ),
				x = v_p[0]

			d3.select(this).select('rect')
				.attr('width',x)

		})
	Agroup.select('.param-name').text('α')
	Bgroup.select('.param-name').text('β')

	Bgroup.select('svg').on('click',function(){
			let v_p  = d3.mouse( this ),
				x = v_p[0]

			d3.select(this).select('rect')
				.attr('width',x)

		})

}
