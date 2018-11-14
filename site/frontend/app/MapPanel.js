import * as d3 from 'd3';


let zoomRate = 12;
let map = L.map('map_container').setView([28.0152686, 120.6558736], zoomRate);
let osmLayer = L.tileLayer('https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}@2x.png', {
  attribution: 'Wikimedia maps beta | &copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);



var layerElementTag = 'div';
var layerElementClasses = '.my-leaflet-layer';
map.getPanes().overlayPane.appendChild(L.DomUtil.create(layerElementTag, layerElementClasses));

let svg = d3.select(map.getPanes().overlayPane).append("svg")
let g = svg.append("g").attr("class", "leaflet-zoom-hide");
let linesSvg = [] , lines_data


function draw_trajs(_lines_data) {
	lines_data = _lines_data

	_lines_data.forEach((line) =>{
		let lineSvg = g.append("path")   //一条轨迹
			.datum(line.ps)
			.attr('id','_id'+line.id)
			.attr("fill", "none")
			.attr("stroke", "steelblue")
			.style("opacity", 0.6)
			.attr("stroke-linejoin", "round")
			.attr("stroke-linecap", "round")
			.attr("stroke-width", 5)
			.on("click",function(){
					d3.select(this)
						.style("opacity", 1)
						.style("stroke","red")
			})
		
		linesSvg.push(lineSvg)
	})



	map.on("moveend", () => {
		resize()
	});

	map.on("zoomend", () => {
		resize()
	});

	resize()
}

function resize(){
	let bottomLeft = map.latLngToLayerPoint(map.getBounds().getSouthWest());
	let topRight = map.latLngToLayerPoint(map.getBounds().getNorthEast());
	let width = topRight.x - bottomLeft.x
	let height = bottomLeft.y - topRight.y

    svg.attr("width",width)
            .attr("height",height)
            .style("left", bottomLeft.x + "px")
            .style("top", topRight.y + "px");

    g.attr("transform","translate(" + -bottomLeft.x+","+ -topRight.y+")")
  
  	linesSvg.forEach((line) => {
  		line.attr("d",
	  		d3.line()
			    .x(function(d) {
			        return applyLatLngToLayer(d).x
			    })
			    .y(function(d) {
			        return applyLatLngToLayer(d).y
			    })
			    // .curve(d3.curveBundle.beta(0.5))
	 	)
  	})

}


function selectPeriod(id,time_period) {
	d3.select("#_id"+id)
			.style("opacity", 0.41)
			.style("stroke","red")

 	lines_data.forEach((line)=>{
 		if(line.id  == id){
 			let ps = line.ps
 			ps.forEach((d,i)=>{
 				let date = d.date
 				let time = d.time
 				let _date = new Date(date + 'T' + time)
 				if(_date.getTime() == time_period[0].getTime()){
 					let _ps = [d,ps[i+1]]
 					_ps.push(ps[Math.floor(ps.length/2)])
 					select_one_path(_ps)
 					return false
 				}
 			})
 			
 			return false
 		}

 	})

}

function select_one_path(ps){
	console.log(ps)

	map.flyTo([ps[2].coordinates['lat'] , ps[2].coordinates['lon']],zoomRate + 1)
	
	d3.select('.hightLight').remove()

	let lineSvg = g.append("path")   //一条轨迹
			.datum(ps.slice(0,2))
			.attr('class','hightLight')
			.attr("stroke", "green")
			.style("opacity", 1)
			.attr("stroke-linejoin", "round")
			.attr("stroke-linecap", "round")
			.attr("stroke-width", 5)
			.attr("d",
		  		d3.line()
				    .x(function(d) {
				        return applyLatLngToLayer(d).x
				    })
				    .y(function(d) {
				        return applyLatLngToLayer(d).y
				    })
				    // .curve(d3.curveBundle.beta(0.5))
		 	)

	linesSvg.push(lineSvg)
}


function applyLatLngToLayer(d) {
    var y = d.coordinates['lat']
    var x = d.coordinates['lon']
    return map.latLngToLayerPoint(new L.LatLng(y,x))
}


export { draw_trajs,selectPeriod }