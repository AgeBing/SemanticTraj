import * as d3 from 'd3';

let svg , h,w

const SK_V = 0.01 * 0.001
let  SK = 6
let  CF = -150

const RollideRadius = 2
const GroupColor = ['#a6cee3','#1f78b4','#b2df8a','#33a02c','#fb9a99','#e31a1c','#fdbf6f','#ff7f00','#cab2d6','#6a3d9a','#ffff99','#b15928']


function init() {
	d3.select('#hexagon-container').selectAll('svg').remove()
	d3.select('#hexagon-container').selectAll('div').remove()


	const visBox = document.getElementById("hexagon-container");
	h = visBox.offsetHeight; //高度
	w = visBox.offsetWidth; //宽度

	svg = d3.select('#hexagon-container')
		.append('svg')
		.attr('width',w*0.7)
		.attr('height',h)
		.style('left',w*0.15+'px')
}


function print(index,id,link){
	console.log("G",index,"  P",id)
 	for(var l of link){
 		console.log(l[0],l[1].toFixed(2))
 	}
 	console.log("********************************")
}


class topicHexa{
	init(topicNames,innerDatas,index){
		this.prepareHexagonData(topicNames)
		// this.prepareInnerData(innerDatas)
		let sampleData = this.sampleInnerDate(innerDatas)  //取前5点 
		this.prepareInnerData(sampleData)
		this.sampleData = sampleData
		// this.bindEventListener()
		this.index = index

		let _svg = svg.append('g')
			.attr('id','g_'+index)

		this._svg = _svg
	}
	bindEventListener(){
		let self = this
		document.getElementById('range5').addEventListener('input',(e)=>{
		  	let v = e.target.value;
		 	document.getElementById("valBox5").innerHTML = v;
		 	SK = v
		 	self.render()
		})

		document.getElementById('range7').addEventListener('input',(e)=>{
		  	let v = e.target.value;
		 	document.getElementById("valBox7").innerHTML = v;
		 	CF = v
		 	self.render()
		})
	}
	bind(select_outer,un_select_outer){
		this.un_select_outer = un_select_outer
		this.select_outer = select_outer
	}
	render(){
		let { index } = this
		d3.select('#g_'+index).selectAll('g').remove()
		
		if( index == 0) this.drawHexagon() 
		
		this.drawInner()

	}
	prepareHexagonData(topicNames){
		let n = 65    //  半径/2
		let o = {     //中心点
		x : 2 * n + 10,
		y : h / 2,
		}
		const sqrt3 = Math.sqrt(3)

		let hexagon_nodes = [
		    {
		      x  : o.x - n,
		      y  : o.y + sqrt3 * n
		    },
		    {
		      x  : o.x + n,
		      y  : o.y + sqrt3 * n
		    },
		    {
		      x  : o.x + 2 * n,
		      y  : o.y  
		    },
		    {
		      x  : o.x + n,
		      y  : o.y - sqrt3 * n
		    },
		    {
		      x  : o.x - n,
		      y  : o.y - sqrt3 * n
		    },
		    {
		      x  : o.x - 2 * n,
		      y  : o.y 
		    }]

		topicNames.forEach((topic,i)=>{
			hexagon_nodes[i].id = topic
		})


		let hexagon_links = hexagon_nodes.map((p,i)=>{
			let now = p
			let former = (i > 0) ? hexagon_nodes[i-1] : hexagon_nodes[hexagon_nodes.length-1]
			return {
			  s: {
			    id : now.id,
			    x : now.x,
			    y : now.y
			  },
			  d: {
			    id : former.id,
			    x : former.x,
			    y : former.y
			  }
			}	
		})

		this.hexagon_nodes = hexagon_nodes
		this.hexagon_links = hexagon_links
		this.topic_names = topicNames
	}
	drawHexagon(){
		let { _svg,hexagon_nodes,hexagon_links,index } = this

		let  node = _svg.append("g")
			        .attr("class", "nodes")
			        .selectAll("circle")
			        .data(hexagon_nodes)
			        .enter().append("circle")
			        .attr("class", "node-nomal")
			          .attr("cx", function(d) { return d.x; })
			          .attr("cy", function(d) { return d.y; });
	  	let  link = _svg.append("g")
		          .attr("class", "links")
		          .selectAll("line")
		          .data(hexagon_links)
		          .enter().append("line")
		          .attr('class', 'link-nomal')
		            .attr("x1", function(d) { return d.s.x; })
		            .attr("y1", function(d) { return d.s.y; })
		            .attr("x2", function(d) { return d.d.x; })
		            .attr("y2", function(d) { return d.d.y; });	            
		let  text = _svg.append("g")
		          .attr("class", "texts")
		          .selectAll("text")
		          .data(hexagon_nodes)
		          .enter().append("text")
		          .attr("class", 'title-mid')
		          .text(d => d.id)
				  .attr('transform', function(d) {
					let x = 5+(+d.x.toFixed(5))
					let y = 5+(+d.y.toFixed(5))
					return 'translate(' + x + ',' + y + ')';
				  });
		this._svg = _svg
	}
	sampleInnerDate(innerDatas){
		let  { pid,traj } = innerDatas
		let  { topic_names } = this
		let  ps = []

		for(let i = 0;i < 5;i++){     //取前5点 
			let topics = traj[i].topics
			ps[i] = new Map()
			topics.forEach((t)=>{
				if( topic_names.indexOf(t.topic) != -1){
					ps[i].set(t.topic,t.val)
				}
			})
		}
		return ps
	}
	prepareInnerData(innerDatas){
		let { hexagon_nodes,hexagon_links,topic_names } = this

		let inner_nodes = []
		inner_nodes = inner_nodes.concat(hexagon_nodes.map(p=>{
			return {
				id : p.id,
				fx : p.x,    //fixed
				fy : p.y
			}
		}))
		inner_nodes = inner_nodes.concat(innerDatas.map((d,i)=>{ 
			return {id: String.fromCharCode(97+i)} 
		}))

		let inner_links = []
		inner_nodes.forEach((d,i)=>{
			if(topic_names.indexOf(d.id) != -1) return true
			let inner_data = innerDatas[i - topic_names.length] 
			hexagon_nodes.forEach(p=>{
				 	let s = +inner_data.get(p.id)

				 	s = 1 / (s * s * s * s)
				  	// let s = Math.random(0) * 11
			      inner_links.push({
			        source: d.id,
			        target: p.id,
			        strength : s 
			      })
			})
		})

		let item_links = []
		item_links = item_links.concat(innerDatas.map((d,i)=>{
			return {
				source : String.fromCharCode(97+i) ,
				target : String.fromCharCode(97+i+1)
			}
		}))
		item_links.reverse().shift()
		item_links.reverse()

		// console.log(inner_links)
		this.inner_nodes = inner_nodes
		this.inner_links = inner_links
		this.item_links = item_links
	}

	drawInner(){
		let { _svg, inner_nodes,inner_links,item_links,topic_names,sampleData,index  } = this
		let self = this
		let  link = _svg.append("g")
				.attr("class", "links")
				.selectAll("line")
				.data(inner_links)
				.enter().append("line")
				.attr('class', 'link-mid')


		let   node = _svg.append("g")
				.attr("class", "nodes")
				.selectAll("circle")
				.data(inner_nodes)
				.enter().append("circle")
				.attr("class", "node-mid")
				.attr("id",(d)=>d.id)
				.attr('fill',()=>{
					return GroupColor[index]
				})
				.on('mouseenter',function(d){
					self.select(d,false)
				})
				.on('mouseleave',(d)=>{
					self.un_select(false)
				})


		let   text = _svg.append("g")
				.attr("class", "texts")
				.selectAll("text")
				.data(inner_nodes.slice(6))
				.enter().append("text")
				.attr("class", 'title-mid')
				.text(d => d.id)

		// console.log(inner_nodes)
		// let simulation = d3.forceSimulation()
		// 		.force('link',
		// 				d3.forceLink()
		// 					.id(link =>  link.id)
		// 					.strength(link => link.strength)
		// 		)

		let simulation = d3.forceSimulation()
				.force('link',
						d3.forceLink()
							.id(link =>  link.id)
							.distance(link => link.strength * SK * SK_V)
				)
				.force("charge",d3.forceManyBody().strength(CF))
                .force("collide",d3.forceCollide().radius(RollideRadius))
				// .force("charge", d3.forceManyBody().strength(1))

		simulation.nodes(inner_nodes)
	          .on("tick", ticked)
	          .on("end", ()=>{
	                console.log('end')
	           })
	          .force("link").links(inner_links)


	    function ticked() {
		    let alpha = simulation.alpha()
		    if(alpha < 0.6){
		      node.attr("cx", function(d) { 
		              if(topic_names.indexOf(d.id) == -1) return d.x; 
		              return -10
		            })
		          .attr("cy", function(d) {
		              if(topic_names.indexOf(d.id) == -1) return d.y;
		              return -10
		            });

		      text.attr('transform', function(d) {
		        // if(d.x > 0 && d.y > 0 && d.x < 100 && d.y < 100){
		          // console.log(d.x)
		          let x = +d.x + 10
		          let y = +d.y + 10
		          return 'translate(' + x + ',' + y + ')';
		        // }
		      });

		      // connectNodes()
		      // console.log(alpha)
		  }
		  if(alpha < 0.3){
		  	simulation.stop()
		  }

		}

		function connectNodes(){
	      let nodes = _svg.selectAll('.node-mid')
		      let _nodes = new Map()
		      nodes.each(function(d,i){
		      	let node = d3.select(this)
		      	let cx = node.attr('cx')
		      	let cy = node.attr('cy')
		      	let id = node.attr('id')
		      	_nodes.set(id,{ cx,cy })
		      })   //_nodes 包含 outer
		      // console.log(_nodes)

 			  _svg.selectAll('.link-items').remove()

		      let links_item = _svg.append("g")
		      		.attr("class", "links link-items")

		      item_links.forEach(l=>{
		      		let s_id = l.source
		      		let t_id = l.target

		      		let s = _nodes.get(s_id)
		      		let t = _nodes.get(t_id)

		      		links_item.append("line")
		      			.attr("class", "link-item")
		      		  .attr("x1", function(d) { return s.cx; })
		              .attr("y1", function(d) { return s.cy; })
		              .attr("x2", function(d) { return t.cx; })
		              .attr("y2", function(d) { return t.cy; });
		      })
		}

	}

	select(d,fromOuter = true){

		let { _svg,index } = this
		_svg.selectAll('.nodes').selectAll('.node-mid').attr("class","node-mid select-group")

		_svg.select('.link-items').selectAll('.link-item').attr('class','link-item select-group')

		// if(!fromOuter) this.select_outer(index,'topic')
	}
	un_select(fromOuter = true){
		let { _svg,index } = this

		_svg.selectAll('.nodes')
			.selectAll('.node-mid')
			.attr('class',"node-mid")
			.attr('fill',()=>{
				return GroupColor[index]
			})
		_svg.select('.link-items')
			.selectAll('.link-item')
			.attr('class','link-item')

		// if(!fromOuter) this.un_select_outer(index,'topic')
	}


}

export { init,topicHexa }