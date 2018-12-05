import * as d3 from 'd3';



const visBox = document.getElementById("hexagon-container");
let  h = visBox.offsetHeight; //高度
let  w = visBox.offsetWidth; //宽度



let svg = d3.select('#hexagon-container')
	.append('svg')
	.attr('width',w)
	.attr('height',h)


let simulation = d3.forceSimulation()
				.force('link',d3.forceLink().id(link =>  link.id).strength(link => link.strength))
				// .force('center',d3.forceCenter(w/2,h/2))
        		// .force("charge", d3.forceManyBody().strength())




const hexagon_ids = ['a','b','c','d','e','f']


function drawHexagon() {
  let n = 40    //半径
  let o = {     //中心点
    x : 90,
    y : h / 2,
  }
  const sqrt3 = Math.sqrt(3)
  let hexagon = [
    {
      id : 'a',
      x  : o.x - n,
      y  : o.y + sqrt3 * n
    },
    {
      id : 'b',
      x  : o.x + n,
      y  : o.y + sqrt3 * n
    },
    {
      id : 'c',
      x  : o.x + 2 * n,
      y  : o.y  
    },
    {
      id : 'd',
      x  : o.x + n,
      y  : o.y - sqrt3 * n
    },
    {
      id : 'e',
      x  : o.x - n,
      y  : o.y - sqrt3 * n
    },
    {
      id : 'f',
      x  : o.x - 2 * n,
      y  : o.y 
    }
  ]
  let hexagon_link = hexagon.map((p,i)=>{
    let now = p
    let former = (i > 0) ? hexagon[i-1] : hexagon[hexagon.length-1]
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

  let   node = svg.append("g")
        .attr("class", "nodes")
        .selectAll("circle")
        .data(hexagon)
        .enter().append("circle")
        .attr("class", "node-nomal")
          .attr("cx", function(d) { return d.x; })
          .attr("cy", function(d) { return d.y; });
  let  link = svg.append("g")
          .attr("class", "links")
          .selectAll("line")
          .data(hexagon_link)
          .enter().append("line")
          .attr('class', 'link-nomal')
            .attr("x1", function(d) { return d.s.x; })
            .attr("y1", function(d) { return d.s.y; })
            .attr("x2", function(d) { return d.d.x; })
            .attr("y2", function(d) { return d.d.y; });
  return hexagon
}


let hexagon_data = drawHexagon()
let nodes = [
  {id : 'nA'},
  // {id : 'nB'},
  // {id : 'nC'},
  //   {id : 'nD'},
  // {id : 'nE'},
  // {id : 'nF'},
  //   {id : 'nG'},
  // {id : 'nH'},
  // {id : 'nI'},
]
nodes = nodes.concat(hexagon_data.map(p=>{
  return{
    id : p.id,
    fx : p.x,
    fy : p.y
  }
}))
console.log(nodes)

let links = geneLinks()

console.log(links)
print(links)
function geneLinks(){
  let links = []

  nodes.forEach((node)=>{
    if(hexagon_ids.indexOf(node.id) != -1) return true

    hexagon_data.forEach((p)=>{
      let s = Math.round(Math.random(0) * 1 )
      // if(p.id == 'a') s += 20
      links.push({
        source: node.id,
        target: p.id,
        strength : s
      })
    })

  })

  return links
}

let  link = svg.append("g")
    .attr("class", "links")
    .selectAll("line")
    .data(links)
    .enter().append("line")
    .attr('class', 'link-mid')

let   node = svg.append("g")
      .attr("class", "nodes")
      .selectAll("circle")
      .data(nodes)
      .enter().append("circle")
      .attr("class", "node-mid")
      .attr("id",(d)=>d.id)


let   text = svg.append("g")
          .attr("class", "texts")
          .selectAll("text")
          .data(nodes)
          .enter().append("text")
          .attr("class", 'title-mid')
          .text(d => d.id)

simulation.nodes(nodes)
          .on("tick", ticked)
          .on("end", ()=>{
                        console.log('end')
                      })
            .force("link").links(links)
          



function ticked() {
    let alpha = simulation.alpha()

    if(alpha < 0.5){

      // link.attr("x1", function(d) { return d.source.x; })
      //     .attr("y1", function(d) { return d.source.y; })
      //     .attr("x2", function(d) { return d.target.x; })
      //     .attr("y2", function(d) { return d.target.y; });

      node.attr("cx", function(d) { 
              if(hexagon_ids.indexOf(d.id) == -1) return d.x; 
              return -10
            })
          .attr("cy", function(d) {
              if(hexagon_ids.indexOf(d.id) == -1) return d.y;
              return -10
            });

      text.attr('transform', function(d) {
        // if(d.x > 0 && d.y > 0 && d.x < 100 && d.y < 100){
          // console.log(d.x)
          let x = 5+(+d.x.toFixed(5))
          let y = 5+(+d.y.toFixed(5))
          // console.log(x,y)
          return 'translate(' + x + ',' + y + ')';
        // }
      });
    }
    // if(alpha < 0.01){
    //   text.attr('transform', function(d) {
    //       return 'translate(' + (d.x+5) + ',' + (d.y+5) + ')';
    //   });
    // }

    // console.log(simulation)
}

function print(links){
  links.forEach((l)=>{
    console.log(l.source + ' => '+ l.target + '  '+l.strength)
  })
}

function draw(){

}
export { draw }