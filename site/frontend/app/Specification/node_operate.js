import {textData,getMerge_data,get_data,addParticle} from "../search/searchbar";
import $ from "jquery";
import {show_hide} from "./node_interaction";
import {draw as drawPoiInMap, remove as removePoiInMap} from "../map/poi";



export function add_condition_node(){
let nodelist= require('../Specification/Node.js')
    nodelist.append_node({name:'',data:[]})
}

export function initial_right_content() {
    let nodelist= require('../Specification/Node.js')
    nodelist.container.select('.right_content').remove()
    let legend_list = [{
        id: 'Relevance_Information',
        name: 'Relevance Information:',
        color:['#7a0177','#c51b8a','#f768a1','#fa9fb5','#fcc5c0','#feebe2']
  }]
    let right_content = nodelist.container.append('div').classed('right_content', true)
    right_content.append('div').classed('add_condition_node', true).text('+').on('click', add_condition_node)
    legend_list.map((x, y) => {
    let legend = d3.select('#Specification_view')
        .append('div')
        .classed('legend', true)
        .attr('id', x.id)
        .style('position','fixed')
        .style('right','70px')
        .style('top','380px')
        .style('padding','0 10px')
    legend.append('div').classed('text', true).text(x.name)
    let content = legend.append('div').classed('content', true)
    content.append('div').classed('max', true).text(0)
    x.color.map((color, i) => {
        content.append('div').classed('color_bar', true)
                .style('background', color)
    })
    content.append('div').classed('min', true).text(0)
  })
}

export function init_slider(svg, text) {
  let margin = {
      right: 10,
      left: 10
    },
    width = +svg.attr("width") - margin.left - margin.right,
    height = +svg.attr("height");

  var x = d3.scaleLinear().domain([0, 1])
    .range([0, width]).clamp(true);

  var slider = svg.append("g")
    .attr("class", "slider")
    .attr("transform", "translate(" + margin.left + "," + height / 2 + ")");

  slider.append("line")
    .attr("class", "track")
    .attr("x1", x.range()[0])
    .attr("x2", x.range()[1])
    .select(function() {
      return this.parentNode.appendChild(this.cloneNode(true));
    })
    .attr("class", "track-inset")
    .select(function() {
      return this.parentNode.appendChild(this.cloneNode(true));
    })
    .attr("class", "track-overlay")
    .call(d3.drag()
      .on("start.interrupt", function() {
        slider.interrupt();
      })
      .on("start drag", function() {
        hue(x.invert(d3.event.x), handle);
      }));

  let handle = slider.insert("circle", ".track-overlay")
    .attr("class", "handle")
    .attr("r", 4);

  hue(1, handle)

  function hue(h, handle) {
    text.text(d3.format(".2f")(h))
    handle.attr("cx", x(h));
  }
}

export function renderingwordslist(mergenode) {
  let allwords = mergenode.select(".spatial_words").selectAll(".Worddiv")
    .data(function(d) {
      let heightset = []
      for (let i = 0; i < d.data.length; i++) {
        heightset.push(d.data[i].data.length)
          let same_word=-1;
        for (let j = 0; j < d.data[i].data.length; j++) {
          if(d.data[i].name==d.data[i].data[j].name)
          {
              same_word=j
          }
          else
              d.data[i].data[j].index = (i, j)
        }
      }
      return d.data
    }, (d, i) => d.name)

  allwords.exit().remove()
  let addwords = allwords.enter().append("div").classed("Worddiv", true)
    .attr('id', function(d, i) {
      d.data.sort(function(a, b) {
        return b.val - a.val
      })

      return 'Worddiv' + (i + 1)
    })
    .style("border", "1px dashed rgb(232, 232, 232)")
    .style("padding", "3px 0")
    .style("margin", "2px")


  let mergewords = addwords.merge(allwords)
  mergewords.style("top", (d, i) => `${i*24}px`)

  let addwordtitle = addwords.append("div").classed("wordtitle", true)
  addwords.append("div").classed("wordsubtitle", true);
  addwords.append("div").classed("nei_words", true);
  let show_hide_div = addwordtitle.append('div').classed('hide_nei_words', true).style("background-image","url(../icon/tri.png)").attr("isshow",true)
  show_hide_div.on('click', show_hide)
  addwordtitle.append('div').classed('real_wordtitle', true).text((d, i) => d.name)
    .append('div').classed('delete', true).text('X').style('margin-right', '5px').on('click', function(d, i) {
        let nodelist= require('../Specification/Node.js')
      let subtitle = d.name;
      let node_order = d3.select(this.parentNode.parentNode.parentNode.parentNode.parentNode).attr('id');
      node_order = parseInt(node_order.substr(node_order.length - 1, 1))
      let words = d3.select('#condition_node' + node_order).select('.title').select('.text').text().split('_')
      words.splice(words.indexOf(subtitle), 1)
      if (words.length == 0) {
        nodelist.delete_node_byOrder(node_order)
      }
      if (words.length == 1) {
        let data = get_data(words[0])
        data.order = node_order
        nodelist.data[node_order - 1] = data
        nodelist.node_rendering(data, node_order);
      }
      if (words.length > 1) {
        getMerge_data(words.join('_')).then(function(merge_data) {
          merge_data.order = node_order
          nodelist.data[node_order - 1] = merge_data
          nodelist.node_rendering(merge_data, node_order)
        })
        //nodelist.node_rendering(),node_order)
      }
    });
  let allneiwords = mergewords.select(".nei_words").selectAll(".neiwordsdiv").data(function(d) {
    return d.data
  })

  allneiwords.exit().remove()
  let addneiwords = allneiwords.enter().append("div").classed("neiwordsdiv", true)
      .each(function(d){
          let real_word=d3.select(this.parentNode.parentNode).select('.wordtitle').select('.real_wordtitle').text()
          real_word=real_word.substr(0,real_word.length-1)
          if(d.name==real_word)
          {
              $(this).remove();
          }
      })
  addneiwords.append('div').classed('wordsval',true)
      addneiwords.append('div').classed('neiwordsdiv_word',true)//addneiwords
  let mergeneiwords = addneiwords.merge(allneiwords)
  mergeneiwords.style("top", (d, i) => `${i*24}px`)
  mergeneiwords.selectAll('.neiwordsdiv_word').text(d=>d.name).style('width',d=>`${parseFloat(d.val)*120}px`)
  mergeneiwords.selectAll('.wordsval').text(d => parseFloat(d.val).toFixed(2)).style('width','4px').style('right',d=>parseFloat(d.val)*72+'px')

  return show_hide_div
}

export function renderingPOIlist(mergenode, max_num = 20) {
    //locationlistdiv
    // by ykj
  // 列表现实的前 max_num  poi 存储在 POIS 中
  let POIS = []
//当前标签中POI列表的最大值和最小值，用于归一化来显示POI的div长度
    let poi_max=0
    let poi_min=0;

  if(max_num==0)
  {
      mergenode.select(".spatial_POIs").selectAll(".POIrect").remove()
      return
  }
  let allPOI = mergenode.select(".spatial_POIs").selectAll(".POIrect")
    .data(function(d) {
      let textcolorscale = 0

      // data
      let pois = []
      let poi_map = {}


      for (let i = 0; i < d.data.length; i++) {
          let cur_max_map={}//用于存储当前关键词的各个POI的val的分别最大值
        for (let j = 0; j < d.data[i].data.length; j++) {
            for (let m = 0; m < d.data[i].data[j].data.length; m++) {
                let poi=d.data[i].data[j].data[m]
                if(cur_max_map.hasOwnProperty(poi.name))
                {
                    if(cur_max_map[poi.name].val<poi.val)
                    cur_max_map[poi.name]={'poi':poi,'S':j}
                }
                else
                {
                    cur_max_map[poi.name]={'poi':poi,'S':j}
                }
            }

        }
        for(let k in cur_max_map) {
            let poi_name = cur_max_map[k].poi.name
            if (poi_map.hasOwnProperty(poi_name)) {
              let index = poi_map[poi_name]
              if(pois[index].poi.val < cur_max_map[k].poi.val)
                  pois[index].poi.val = cur_max_map[k].poi.val
            } else {
                if(cur_max_map[k].poi.latitude>27.9248561995 &&cur_max_map[k].poi.latitude<28.0769120675 &&cur_max_map[k].poi.longitude>120.5833650410&&cur_max_map[k].poi.longitude<120.7579719628)
                {
                    poi_map[poi_name] = pois.length
                    let j=parseInt(cur_max_map[k]['S'])
              pois.push({
                index: pois.length,
                poi: cur_max_map[k].poi,
                words: {
                  F: (i, d.data[i].name),
                  S: (j, d.data[i].data[j].name)
                },
              })
                }
            }
          }
      }

      //sort by val
      pois.sort(function(a, b) {
        return b.poi.val - a.poi.val
      })
        poi_max=pois[0].poi.val
        poi_min=pois[pois.length-1].poi.val

        if(pois.length<max_num)
        {
        mergenode.each(function(){
            d3.select(this.parentNode.parentNode.parentNode).select('.max_node_num').select('.node_num').property('value',pois.length)
        })
        }
      else
          pois = pois.slice(0, max_num)
        d3.select('#condition_node' + d.order).attr('max_val', pois[0].poi.val).attr('min_val', pois[pois.length - 1].poi.val)
      textcolorscale = pois[0].poi.val
      //update data index and color
      for (let i = 0; i < pois.length; i++) {
        pois[i].order = i
        pois[i].color = pois[i].poi.val > textcolorscale / 2 ? "white" : "rgb(28,28,28)"
      }



      // by ykj
      // 用于向后台返回数据
      POIS = pois.slice()
      let node_name = d.name
        let nodelist= require('../Specification/Node.js')
      nodelist.searchSiteList.set(node_name , POIS)


      return pois
    }, function(d) {
      return d.poi.name;
    })



  allPOI.exit().remove()
 let addPOI = allPOI.enter().append("div").classed("POIrect", true)
     addPOI.append('div').classed('POIdiv',true)
    addPOI.append('div').classed('POIval',true)
         addPOI.append('div').classed('POIname',true)
    let POIs=allPOI.merge(addPOI)
    .style("top", d => `${d.order*27}px`)
    .attr('val', d => d.poi.val)
    .on('mouseenter', (d) => {
      drawPoiInMap( [d.poi] )
    })
    .on('mouseleave', (d) => {
      removePoiInMap()
    })
      POIs.selectAll('.POIdiv')
        .style('width',d=> (parseFloat((parseFloat(d.poi.val)-poi_min)/(poi_max-poi_min)))*70+'px')
    POIs.selectAll('.POIval')
        .text(d=> parseFloat(d.poi.val).toFixed(2))//(parseFloat(d.poi.val)-poi_min)/(poi_max-poi_min)
      POIs.selectAll('.POIname')
        .text(d=>d.poi.name)
  d3.select('#'+mergenode.attr('id').replace('locationlistdiv','condition_node'))
      .select('.title')
      .on('mouseenter', function(d) {
      let _pois_show_in_map = POIS.map((p)=>p.poi)
      drawPoiInMap( _pois_show_in_map )
    })
    .on('mouseleave', function() {
      removePoiInMap()
    })
}

export function fresh_list_width() { //condition_node_list的宽度
     let nodelist= require('../Specification/Node.js')
  let current_width = nodelist.data.length * 652 + 50;
  let spe_width = parseInt(document.getElementById('Specification_view').offsetWidth)
  let width = current_width > spe_width ? current_width : spe_width
  nodelist.container.style('width', width + 'px');
}