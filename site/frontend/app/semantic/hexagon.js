import * as d3 from 'd3';
import { coorCenter ,coorCorners } from	'./force.js'

let svg
export function drawHexagon(argument) {
	const visBox = document.getElementById("semantic-view");
	let h = visBox.offsetHeight; //高度
	let w = visBox.offsetWidth; //宽度

	svg = d3.select('#semantic-view')
		.append('svg')
		.attr('width',w)
		.attr('height',h)


	let node = svg.append("g")
	        .selectAll("circle")
	        .data(coorCorners)
	        .enter()
	        .append("circle")
	        .attr("class", "node-nomal")
	        .attr("id",function(d,i) { return  "th"+i  } )
	          .attr("cx", function(d) { return d.x; })
	          .attr("cy", function(d) { return d.y; });

	let hexagonLinks = coorCorners.map((p,i)=>{
		let now = p
		let former = (i > 0) ? coorCorners[i-1] : coorCorners[coorCorners.length-1]
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

	node.call(
		d3.drag()
			.on("start", dragstarted)
	        .on("drag", dragged)
	        .on("end", dragended)
    )

	function dragstarted(d) {
	  d3.select(this).raise().classed("active", true);
	}

	function dragged(d) {
	  
	  let { x,y } = d3.event
	  d3.select(this).attr("cx", d.x = x).attr("cy", d.y = y);
	  
	  let curId =  +d3.select(this).attr('id').slice(-1)
	  // 计算是否落在 可能区域 
	  let r =  15 ,c_x ,c_y , l
	  for(let i = 0 ; i < 6;i++){
	  		if(i == curId) continue
	  		c_x = coorCorners[i].x
	  		c_y = coorCorners[i].y
	  		l =  ( x - c_x )*( x - c_x ) +  ( y - c_y )*( y - c_y )
	  		if( l < r*r) {
	  			console.log(i)
		  		svg.select('#th'+i) 
	  				.attr('class','node-nomal node-ring' )
	  		}else{
	  			svg.select('#th'+i).attr('class','node-nomal')
	  		}
	  }
	}



	function dragended(d) {
	  d3.select(this).classed("active", false);
	}

}

export function drawItem(item){
	let node = svg.append("circle")
	        .attr("class", "node-item")
	          .attr("cx", item.x)
	          .attr("cy", item.y)
}

export function addCornerValues(datas){
	
	svg.append("g")
          .attr("class", "texts")
          .selectAll("text")
          .data(datas)
          .enter().append("text")
          .attr("class", 'title-mid')
          .text(d => d.toFixed(2))
		  .attr('transform', function(d,i){ 
		  		let item = coorCorners[i]
				let x = 8+(+item.x.toFixed(5))
				let y = 5+(+item.y.toFixed(5))
				return 'translate(' + x + ',' + y + ')';
		  });
}