
import { coorHexagonCopy,SVGlength }  from './config.js'
import { colorList,topicNames } from '../timeline/config.js'


let svg

export function drawHexagon(argument) {
	const visBox = document.getElementById("semantic-view");
	let h = visBox.offsetHeight; //高度
	let w = visBox.offsetWidth; //宽度

	svg = d3.select('#semantic-view')
		.append('svg')
			.attr('class','hexagon')
			.style('width',"100%")
			.style('height',"calc(100% - 35px)")
			.style('top',"35px")
			.style('position',"absolute")
	addLinks()
	addNodes()
	
}


// function addNodes(){
// 	let nodes = svg.append("g")
// 		.selectAll("circle")
//         .data(coorHexagonCopy)
//         .enter()
//         .append("circle")
//         .attr("class", "node-nomal")
//         .attr("id",function(d,i) { return  "th"+i  } )
//           .attr("cx", function(d) { return d.x; })
//           .attr("cy", function(d) { return d.y; })
//           .attr('fill',function(d,i){ return  colorList[i] })

// 	node.call(
// 		d3.drag()
// 			.on("start", dragstarted)
// 	        .on("drag", dragged)
// 	        .on("end", dragended)
//     )
// }

function addNodes(){
	let container = d3.select('#semantic-view').append('div').attr('class','legend-nodes')

 	coorHexagonCopy.forEach((d,i)=>{
    	let item = container
    				.append('div').attr('class','node-legend-item')
    				.style("left", d.x - 25 + 'px')
    				.style("top",  d.y + 15 +'px')

   	 	item.append('div').attr('class','node-legend-rect')
   	 		.style('background-image',function(){
				switch(topicNames[i].name){
					case "住宅":
						return `url("../icon/Residential.png")`
					break;
					case "娱乐商业":
						return `url("../icon/Entertainment.png")`
					break;
					case "办公":
						return `url("../icon/Business.png")`
					break;
					case "医疗":
						return `url("../icon/Medical.png")`
					break;
					case "交通":
						return `url("../icon/Traffic.png")`
					break;
					case "教育":
						return `url("../icon/Educational.png")`
					break;
				}
   	 		})
   	 })
}

function addLinks(){
	let hexagonLinks = coorHexagonCopy.map((p,i)=>{
		let now = p ,
			len = coorHexagonCopy.length,
			former = (i > 0) ? coorHexagonCopy[i-1] : coorHexagonCopy[len-1]
		return {
		  s: {
		    x : now.x,
		    y : now.y
		  },
		  d: {
		    x : former.x,
		    y : former.y
		  }
		}	
	})


  	let link = svg.append("g")
		  .attr("class", "links")
		  .selectAll("line")
		  .data(hexagonLinks)
		  .enter().append("line")
		  .attr('class', 'link-nomal')
		    .attr("x1", function(d) { return d.s.x; })
		    .attr("y1", function(d) { return d.s.y; })
		    .attr("x2", function(d) { return d.d.x; })
		    .attr("y2", function(d) { return d.d.y; });	
}