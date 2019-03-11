
import { coorHexagonCopy }  from './config.js'
import { colorList } from '../timeline/config.js'

let svg

export function drawHexagon(argument) {
	const visBox = document.getElementById("semantic-view");
	let h = visBox.offsetHeight; //高度
	let w = visBox.offsetWidth; //宽度

	svg = d3.select('#semantic-view')
		.append('svg')
			.attr('class','hexagon')
			.attr('width',300)
			.attr('height',300)
			

	addLinks()
	addNodes()
	
}


function addNodes(){
	let nodes = svg.append("g")
		.selectAll("circle")
        .data(coorHexagonCopy)
        .enter()
        .append("circle")
        .attr("class", "node-nomal")
        .attr("id",function(d,i) { return  "th"+i  } )
          .attr("cx", function(d) { return d.x; })
          .attr("cy", function(d) { return d.y; })
          .attr('fill',function(d,i){ return  colorList[i] })


	// node.call(
	// 	d3.drag()
	// 		.on("start", dragstarted)
	//         .on("drag", dragged)
	//         .on("end", dragended)
 //    )
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