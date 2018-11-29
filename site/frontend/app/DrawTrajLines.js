import * as d3 from 'd3';

import * as QueryDb from './querydb.js';


let map,svg,g
let linesSvg = [] , lines_data = []
let polygonSvg = [], polygon_data = []


// 数据格式转换
// function dataAdapter(_lines_data){
// 	let lines_data = _lines_data.map((line) => {

// 		let ps = line.traj.map((p) => {
// 			return 	{
// 					date : p.time.split(' ')[0],
// 					time : p.time.split(' ')[1],
// 					coordinates : {
// 						lat : p.latitude ,
// 						lon : p.longitude
// 					}
// 				}
// 		})

// 		return {
// 			id : line.pid,
// 			ps : ps
// 		}
// 	})

// 	return lines_data
// }
function dataAdapter(_lines_data){
	let lines_data = _lines_data.map((line) => {

		let ps = line.points.map((p) => {
			return 	{
					date : p.date,
					time : p.time,
					coordinates : {
						lat : p.coor.lat ,
						lon : p.coor.lon
					}
				}
		})

		return {
			id : line.id,
			ps : ps
		}
	})

	return lines_data
}


// Main function
function draw(containers,_lines_data) {
 	map = containers.map
 	svg = containers.svg
 	g   = containers.g

	g.selectAll('path').remove()

	lines_data = dataAdapter(_lines_data)
	// console.log(lines_data)

	lines_data.forEach((line) =>{
		let lineSvg = g.append("path")   //一条轨迹
			.datum(line.ps)
			.attr('id','_id'+line.id)
			.attr("fill", "none")
			.attr("stroke", "steelblue")
			.style("opacity", 0.6)
			.attr("stroke-linejoin", "round")
			.attr("stroke-linecap", "round")
			.attr("stroke-width", 1)
		
		linesSvg.push(lineSvg)
	})

	map.on("moveend", () => {
		_resize()
	});

	map.on("zoomend", () => {
		_resize()
	});

	_resize()
}

function _resize(){

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


 	polygonSvg.forEach((polygon)=>{
		polygon.attr("points",genePolygonPoints(polygon_data))
 	})

}

// topic 中点击的注册函数 
function selectPeriod(id,time_) {
	g.selectAll("path")
			.style("stroke", "steelblue")
			.style("opacity", 0.2)

	d3.select("#_id"+id)
			.style("opacity", 0.78)
			.style("stroke","red")

 	lines_data.forEach((line)=>{
 		if(line.id  == id){
 			let ps = line.ps
 			ps.forEach((d,i)=>{
 				let date = d.date
 				let time = d.time
 				let _date = new Date(date + 'T' + time)
 				if(_date.getTime() == time_.getTime()){
 					let _ps = [d,ps[i+1]]
 					_ps.push(ps[Math.floor(ps.length/2)])
 					_select_one_path(_ps)
 					return false
 				}
 			})
 			
 			return false
 		}

 	})


}

function _select_one_path(ps){

	drawPolygon(ps[0].coordinates)
	
	d3.select('.hightLight').remove()

	let lineSvg = g.append("path")   //一条轨迹
			.datum(ps.slice(0,2))
			.attr('class','hightLight')
			.attr("stroke", "green")
			.style("opacity", 1)
			.attr("stroke-linejoin", "round")
			.attr("stroke-linecap", "round")
			.attr("stroke-width", 1.5)
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

async function drawPolygon(siteCoor){

	polygonSvg = []
	polygon_data = []

	let ps = await getVertice(siteCoor.lat,siteCoor.lon)
	d3.selectAll('.site-polygon').remove()
	let polygon = g.append("polygon")
		.attr("points",genePolygonPoints(ps))
		.attr('class','site-polygon')

	polygonSvg.push(polygon)
	polygon_data = ps

}
function genePolygonPoints(ps){
	let _ps = ""
	ps.forEach((p)=>{
		let _p = applyLatLngToLayer({
			coordinates:{
				'lat': p.lat,
				'lon': p.lon
			}
		})

		_ps += _p.x + ',' + _p.y + ' '
	})
	return _ps
}

// 获取 site 的 vertice
function getVertice(lat,lon) {
  let data = {
    reqType: "queryDb",
    operate: "select",
    column: "vertice",
    table: "site",
    limit: "where latitude = " + lat + " and longitude = "+ lon, 
  };
  return QueryDb.pquery(data)
    .then(result => {
		// console.log(result)

    	let res = []
		if(result.length > 0){
			result[0].vertice.split(";").forEach((p)=>{
				let _p = p.split(",")
				res.push({
					lon:_p[0],
					lat:_p[1]
				})
			})
		}

		return res	
    });
};





function applyLatLngToLayer(d) {
    var y = d.coordinates['lat']
    var x = d.coordinates['lon']
    return map.latLngToLayerPoint(new L.LatLng(y,x))
}

export { draw,selectPeriod }