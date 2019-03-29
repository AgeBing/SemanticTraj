// import * as d3 from 'd3';
// import $ from 'jquery';

import {
  appendParamWidges
} from './param.js'
import {
  bindTimeChangeEvent
} from './time.js'
import {
  calTrajsOrder
} from '../app.js'
import {
  drag_start,
  newdrag,
  drag_end,
  show_hide,
  refresh_path_color,
    refresh_POI_length,
  get_left_nodes,
  initial_line,
  refresh_line,
  decrease_locationlist,
  increase_locationlist
} from './node_interaction.js'
import {
  add_condition_node,
   // change_time_div,
    change_cur_time,
} from './node_operate.js'
import {
  getMerge_data,
  get_data
} from "../search/searchbar";

import {
  draw as drawPoiInMap,
  remove as removePoiInMap
} from '../map/poi.js'
import $ from "jquery";



let nodelist = {
  container: d3.select("#condition_node_list"),
  data: [],
  order: [],

  siteScore: new Map() ,
  searchSiteList : new Map(),
    time:[{'y':'','month':'','d':'','o':'','m':''},{'y':'','month':'','d':'','o':'','m':''}]//[{'y':2018,'m':'01','d':'10','t':'9:00'},{'y':2018,'m':'01','d':'10','t':'11:00'}]//保存时间约束的起止时间
}
export let line_data = [];
export let is_initial_right_content = false;
export let POI_colorscale = d3.scaleQuantize()
    .range( [ '#ffffcc','#ffeda0','#fed976','#feb24c','#fd8d3c','#fc4e2a'])
export let poi_colordomain = {
  max: 0,
  min: 0
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
  mergeneiwords.selectAll('.neiwordsdiv_word').text(d=>d.name).style('width',d=>`${parseFloat(d.val)*70}px`)
  mergeneiwords.selectAll('.wordsval').text(d => parseFloat(d.val).toFixed(2)).style('width','4px').style('right',d=>parseFloat(d.val)*72+'px')

  return show_hide_div
}

export function renderingPOIlist(mergenode, max_num = 20) {
    //locationlistdiv
    // by ykj
  // 列表现实的前 max_num  poi 存储在 POIS 中
  let POIS = []
   // mergenode.select(".spatial_POIs").selectAll(".POIrect").remove()
  let allPOI = mergenode.select(".spatial_POIs").selectAll(".POIrect")
    .data(function(d) {
      let textcolorscale = 0

      // data
      let pois = []
      let poi_map = {}
      
      
      for (let i = 0; i < d.data.length; i++) {
        for (let j = 0; j < d.data[i].data.length; j++) {

          for (let m = 0; m < d.data[i].data[j].data.length; m++) {
            let poi_name = d.data[i].data[j].data[m].name
            if (poi_map.hasOwnProperty(poi_name)) {
              let index = poi_map[poi_name]
              pois[index].val += d.data[i].data[j].data[m].val
            } else {
                if(d.data[i].data[j].data[m].latitude>27.9248561995 &&d.data[i].data[j].data[m].latitude<28.0769120675 &&d.data[i].data[j].data[m].longitude>120.5833650410&&d.data[i].data[j].data[m].longitude<120.7579719628)
                {
                    poi_map[poi_name] = pois.length
              pois.push({
                index: pois.length,
                poi: d.data[i].data[j].data[m],
                words: {
                  F: (i, d.data[i].name),
                  S: (j, d.data[i].data[j].name)
                },
              })
                }
            }
          }
        }
      }

      //sort by val
      pois.sort(function(a, b) {
        return b.poi.val - a.poi.val
      })
        pois = pois.slice(0, max_num)
      d3.select('#condition_node' + d.order).attr('max_val', pois[0].poi.val).attr('min_val', pois[pois.length - 1].poi.val)
      poi_colordomain.max = poi_colordomain.max > pois[0].poi.val ? poi_colordomain.max : pois[0].poi.val
      poi_colordomain.min = (poi_colordomain.min > pois[0].poi.val || poi_colordomain.min == 0) ? pois[pois.length - 1].poi.val : poi_colordomain.min
      refresh_POI_length()
      textcolorscale = pois[0].poi.val
      //update data index and color
      for (let i = 0; i < pois.length; i++) {
        pois[i].order = i
        pois[i].color = pois[i].poi.val > textcolorscale / 2 ? "white" : "rgb(28,28,28)"
        pois[i].background = POI_colorscale(pois[i].poi.val)
      }



      // by ykj
      // 用于向后台返回数据
      POIS = pois.slice()
      let node_name = d.name
      nodelist.searchSiteList.set(node_name , POIS)


     /* //reorder
      pois.sort(function(a, b) {
        return a.poi.index - b.poi.index
      })*/
      return pois
    }, function(d) {
      return d.poi.name;
    })



  allPOI.exit().remove()
 let addPOI = allPOI.enter().append("div").classed("POIrect", true)
     addPOI.append('div').classed('POIdiv',true)
    addPOI.append('div').classed('POIval',true)
         addPOI.append('div').classed('POIname',true)
    let POIs=allPOI.merge(addPOI)//addPOI.merge(allPOI)
    .style("top", d => `${d.order*27}px`)
    .attr('val', d => d.poi.val)
        //.style('width',d=> (parseFloat(d.poi.val)/poi_colordomain.max)*60+'px')
        //.style('background','red')
    .on('mouseenter', (d) => {
      drawPoiInMap( [d.poi] )
    })
    .on('mouseleave', (d) => {
      removePoiInMap()
    })
      POIs.selectAll('.POIdiv')
        .style('width',d=> (parseFloat(d.poi.val)/poi_colordomain.max)*70+'px')
    POIs.selectAll('.POIval')
        .text(d=> (parseFloat(d.poi.val)).toFixed(2))
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

nodelist.reOrder = function refresh_list(a, current_node_id) {
  let alpha = a;
  let current_conditionnode_order = current_node_id.substr(current_node_id.length - 1, 1);
  let current_data = [];
  for (let i = 0; i < nodelist.data.length; i++) {
    if (nodelist.data[i].order == current_conditionnode_order) {
      current_data = nodelist.data[i]; //或者给这个结构在外面再套一层，跟listnode.data一样的结构
      break;
    }
  }
  initial_siteScore(current_data, alpha,true);
  normalization(current_data)
  renderingPOIlist(d3.select('#locationlistdiv' + current_conditionnode_order).data([current_data]), parseInt($('#' + current_node_id).find('.node_num').prop('value')));
  initial_line('condition_node' + current_conditionnode_order)
  refresh_line(current_conditionnode_order)


  calTrajsOrder() //重新调整轨迹的order
}

function addslide(container, containername, mergecontainer) {
  container.append("div").attr("id", `${containername}_name`)
    .style("font-size", "13px")
    .style("text-align", "center").text(containername)

  let slider = container.append("div").style("height", "20px")
  let svg = slider.append("svg").attr("id", `${containername}_slider`).classed("slide", true)
    .attr("width", "130").attr("height", "20")
    .style("color", "#545454")
    .style("float", "left")
  let text = slider.append("div").attr("id", `${containername}_text`).text("1")
    .style("float", "left")
    .style("font-size", "12px")
    .style("line-height", "20px")
    .style("padding", "0 5px")
    .style("width", "30px")
  init_slider(svg, text)


}

// <svg width="130" height="25"></svg>
function init_slider(svg, text) {
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


module.exports = nodelist;

export function initial_right_content() {
  nodelist.container.select('.right_content').remove()
  let legend_list = [{
    id: 'Relevance_Information',
    name: 'Relevance Information:',
   color:['#b30000','#e34a33','#fc8d59','#fdbb84','#fdd49e','#fef0d9']
  }]
  // let height = parseInt($('#Specification_view').css('height'))
  let right_content = nodelist.container.append('div').classed('right_content', true) //.style('height',height+'px').style('left',left+'px');//.style('left',document.getElementById('Specification_view').offsetWidth);
  right_content.append('div').classed('add_condition_node', true).text('+').on('click', add_condition_node) //./style('height',height-100+'px');
  legend_list.map((x, y) => {
    let legend = d3.select('#Specification_view').append('div').classed('legend', true).attr('id', x.id)
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

nodelist.delete_node_byOrder = function(index) { //例如删除condition_node1则index为1

  d3.select('#condition_node' + index).remove();

  for (let i = 0; i < nodelist.data.length; i++) {
    if (nodelist.data[i].order == index) {

      nodelist.data.splice(i, 1);
      for (let j = i; j < nodelist.data.length; j++) {
        d3.select('#condition_node' + nodelist.data[j].order).attr('id', 'condition_node' + (nodelist.data[j].order - 1))
        d3.select('#spatial_left' + nodelist.data[j].order).attr('id', 'spatial_left' + (nodelist.data[j].order - 1))
        d3.select('#locationlistdiv' + nodelist.data[j].order).attr('id', 'locationlistdiv' + (nodelist.data[j].order - 1))
        let target_index = nodelist.order.indexOf("condition_node" + nodelist.data[j].order)
        nodelist.order[target_index] = 'condition_node' + (nodelist.data[j].order - 1)
        nodelist.data[j].order = nodelist.data[j].order - 1;
        //line_data['condition_node'+nodelist.data[j].order]=line_data['condition_node'+(nodelist.data[j].order+1)]
        /*if(nodelist.data[j].order==nodelist.data.length){
            line_data.splice(line_data.indexOf('condition_node'+nodelist.data[j].order))
        }*/
      }
      break;
    }
  }
  //把当前卡片所对应的order里面的元素删掉
  let current_order = nodelist.order.indexOf("condition_node" + index)
  for (let m = current_order; m < nodelist.order.length - 1; m++) {
    nodelist.order[m] = nodelist.order[m + 1];
    d3.select('#' + nodelist.order[m]).style('left', 652 * m + 'px').select('.title').select('.constraints_order').text(m + 1);
  }
  nodelist.order.pop(); //最后一个没用，删掉
  fresh_list_width();
  refresh_path_color()
    refresh_POI_length()
  initial_siteScore(nodelist) //更新sitescore
    removePoiInMap()//清空map中的POI
}

export function fresh_list_width() { //condition_node_list的宽度
  let current_width = nodelist.data.length * 652 + 50;
  let spe_width = parseInt(document.getElementById('Specification_view').offsetWidth)
  let width = current_width > spe_width ? current_width : spe_width
  nodelist.container.style('width', width + 'px');
}

nodelist.node_rendering = function(initial_node_data, index) {
  if (initial_node_data.data.length != 0)
    normalization(initial_node_data)
  initial_siteScore(nodelist); //用于轨迹list的相似度计算
  initial_node_data.order = index;
  let node_data = []
  node_data.push(initial_node_data)

  fresh_list_width();
  if (!is_initial_right_content) {
    initial_right_content();
    is_initial_right_content = true;
  }
  let current_node = $("#condition_node" + index)
  if (current_node.length > 0) {
    current_node.empty()
    current_node = d3.select("#condition_node" + index)
      .data(node_data)
  } else {
    current_node = nodelist.container.append("div")
      .data(node_data)
      .classed("condition_node", true)
      .style('-webkit-transition-duration', '0.5s')
      .attr('id', function(d) {
        nodelist.order.push('condition_node' + index);
        return 'condition_node' + index
      })
      .each(function() {
        line_data[d3.select(this).attr('id')] = {
          left: [],
          right: []
        };
      })
    current_node.style("left", d => `${652*(index-1)}px`)
  }

  //title
  let title = current_node.append("div").classed("title", true)
  title.append("div").classed("constraints_order", true)
  title.append("div").classed("text", true).style('display', 'inline-block')
  title.append('div').classed('delete', true).text('X')
      .style('line-height', '22px')
    .style('background-size','22px')
      .style('width','22px').style('background-image', 'url(../icon/circle.png)').on('click', function(d) {
    nodelist.delete_node_byOrder(d.order);
  })


  current_node.select(".title").select(".constraints_order").text(d => d.order).style('background-image', 'url(../icon/circle.png)')
  current_node.select(".title").select(".text").text(d => d.name)
  current_node.selectAll(".title").call(d3.drag()
    .on("start", drag_start)
    .on("drag", newdrag)
    .on('end', drag_end));

  //time constraints
  let timeconstraings = current_node.append("div").classed("timeconstraints", true)
    .style("margin", "5px").style("height", "38px").style("border", "1px dashed #e8e8e8")

  timeconstraings.append("div").classed("node_subtitle", true)
  let timecontainer = timeconstraings.append("div")
  let temp = timecontainer.append("div").classed("textcon", true)//.classed("text", true)
      .style('width','130px')
      .append('div')
       .classed('text',true)
    .style("margin", "0px 10px 0px 5px")
    .style("color", "#2e75b6")
    .style("text-align", "center")
    .style("font-size", "15px")
    .style("line-height", "38px")
    .style('display', 'inline-block')
      .style('width','110px')
   timecontainer.select('.textcon').append('div')
       .classed('delete', true)
       .style('margin-top', '0px')
       .style('margin-right', '10px')
       .style('font-size', '15px')
       .text('X')
       .style('position','absolute')
    .on('click', function() {
      d3.select(this.parentNode.parentNode).selectAll('input').property('value','')
        d3.select(this.parentNode).select('.text').text('')
         nodelist.time=[{'y':'','month':'','d':'','o':'','m':''},{'y':'','month':'','d':'','o':'','m':''}]
            //.append(this)
    })
  timecontainer.append("input").classed("starttime", true).classed("textinput", true)
      .each(function(){
          $(this).bind('input propertychange', function(){
let nodelist= require('../Specification/Node.js')
    let time = d3.select(this).property('value').split(' ')[0].split('.')
    if(time[0])
        nodelist.time[0]['y']=time[0]
    if(time[1])
        nodelist.time[0]['month']=time[1]
    if(time[2])
        nodelist.time[0]['d']=time[2]
            let time_w=''
            if(nodelist.time[0]['y']!='')
                time_w+=(nodelist.time[0]['y']+"年")
             if(nodelist.time[0]['month']!='')
                time_w+=(nodelist.time[0]['month']+"月")
                if(nodelist.time[0]['d']!='')
                time_w+=(nodelist.time[0]['d']+"日")
              d3.select(this.parentNode)
                .select('.textcon')
                  .select('.text')
                .text(time_w)
          })
      })
  timecontainer.append("div").classed("conj", true).classed("textcon", true)
  timecontainer.append("input").classed("endtime", true).classed("textinput", true)
    .each(function(){
          $(this).bind('input propertychange', function(){
let nodelist= require('../Specification/Node.js')
    let time = d3.select(this).property('value').split(' ')[0].split('.')
    if(time[0])
        nodelist.time[1]['y']=time[0]
    if(time[1])
        nodelist.time[1]['month']=time[1]
    if(time[2])
        nodelist.time[1]['d']=time[2]
            let time_w=''
            if(nodelist.time[1]['y']!='')
                time_w+=(nodelist.time[1]['y']+"年")
             if(nodelist.time[1]['month']!='')
                time_w+=(nodelist.time[1]['month']+"月")
                if(nodelist.time[1]['d']!='')
                time_w+=(nodelist.time[1]['d']+"日")
              d3.select(this.parentNode)
    .select('.textcon')
                  .select('.text')
    .text(time_w)
          })
      })

  current_node.select(".timeconstraints").select(".node_subtitle").text("Temporal Constraints")
 // current_node.select(".timeconstraints").select(".text").text("")

  current_node.select(".timeconstraints").select(".starttime").property('value', "")//2018.01.10 9:00
  current_node.select(".timeconstraints").select(".conj").text("~")
  current_node.select(".timeconstraints").select(".endtime").property('value', "")//2018.01.10 11:00
current_node.select(".timeconstraints").each(change_cur_time)


  //spatial constraints
  let spatial_constraints = current_node.append("div").classed("spatial_constraints", true)
  spatial_constraints.append("div").classed("spatial_constraints_title", true).text("Extracted POIs")

  spatial_constraints.append('div').classed('max_node_num', true).style("width", "120px")
  spatial_constraints.select('.max_node_num').append('div').classed('text', true).text('Number')
  spatial_constraints.select('.max_node_num').append('div').classed('decrease', true).text('-').on('click', decrease_locationlist)
    .style("background-image", "url(../icon/circleblue.png)")
  spatial_constraints.select('.max_node_num').append('input').classed('node_num', true)
    .style("float", "left")
    .style("line-height", "31px")
    .style("background", "transparent")
    .style(" text-align", "center")
    .style("width", "22px")
    .style("text-align", "center")
    .attr('type', 'number')
    .attr('min', 0)
    .attr('max', function(d) {
      let sum_location = 0;
      d.data.forEach((x, i) => {
        x.data.forEach((y, j) => {
          y.data.forEach((z, m) => sum_location++)
        })
      })
      if (sum_location < 20) {
        d3.select(this).property('value', sum_location)
      } else
        d3.select(this).property('value', 20)
      return parseInt(sum_location);

    }).on('change', function() {
      if (d3.select(this).property('value') > d3.select(this).attr('max'))
        d3.select(this).property('value', d3.select(this).attr('max'))
      if (d3.select(this).property('value') < d3.select(this).attr('min'))
        d3.select(this).property('value', d3.select(this).attr('min'))
      if (d3.select(this).property('value') <= parseInt(d3.select(this).attr('max')) && (d3.select(this).property('value') >= parseInt(d3.select(this).attr('min')))) {

        let condition_nodeid = d3.select(this.parentNode.parentNode.parentNode.parentNode.parentNode).attr('id');
        let current_conditionnode_order = condition_nodeid.substr(condition_nodeid.length - 1, 1)
        let current_data = []
        for (let i = 0; i < nodelist.data.length; i++)
          if (nodelist.data[i].order == current_conditionnode_order)
            current_data = nodelist.data[i]
        renderingPOIlist(d3.select('#locationlistdiv' + current_conditionnode_order).data([current_data]), d3.select(this).property('value'));
        initial_line('condition_node' + current_conditionnode_order);
        refresh_line(current_conditionnode_order);
      }
    })
  spatial_constraints.select('.max_node_num').append('div').classed('increase', true).text('+').on('click', increase_locationlist)
    .style("background-image", "url(../icon/circleblue.png)")
  let spatial_cc = spatial_constraints.append("div").style("height", "calc(100% - 33px)")
    .style("position", "absolute")
    .style("width", "100%")
  
  let spatialwordcontainer = spatial_cc.append("div")
    .attr('id', function(d) {
      return 'spatial_left' + d.order
    }).style("width","150px")// "182px")
    .style("height", "calc(100% - 5px)")
    .style("margin", "3px")
      .style('overflow-y','auto')
    // .style("border", "1px dashed rgb(232, 232, 232)")
    .style("position","absolute")
    .each(function() {
      $(this).scroll(function() {
        let id = d3.select(this).attr('id')
        id = parseInt(id.substr(id.length - 1, 1))
        get_left_nodes(id)
      })
    })


  spatialwordcontainer.append("div").classed("spatiallogoback", true)
  spatialwordcontainer.append("div").classed("spatiallogo", true).text("Spatial Constraints Words")
  spatialwordcontainer.append("div").classed("spatial_words", true)
    .style("overflow-y", "auto")
    .attr("dir", "rtl")
    .style("width", "calc(100% - 41px)")
    .style("padding", "3px 1px")
    .attr("height", "calc(100% - 6px)")    
    .style("overflow-y", "auto")
    .style("position", "absolute")
    .style("right", "0")
    .style("padding", "3px")



  // .style("font-size", "15px").style("float", "left").style("width", "185px")


  spatial_cc.append("svg").style("width", "64px")
    .style("position", "absolute")
    .style("height", "calc(100% - 6px)")
    .style("left", "143px")
    .style("margin", "3px 0")
    .style("z-index", "3").classed("spatial_lines", true)

  let locationlistdiv = spatial_cc.append("div").classed("locationlistdiv", true)
    .attr('id', function(d, i) {
      return 'locationlistdiv' + d.order
    })

    .append("div")
    .classed("spatial_POIs", true)
    .style("width", "100%")

spatial_cc.append("div").classed("POIback", true)
    spatial_cc.append("div").classed("POIlogo", true).text("Location List")

  let show_hide_div = renderingwordslist(current_node)
  renderingPOIlist(spatial_cc.select('.locationlistdiv'))//待修改-----------------


  //semantic constraints
  let semantic_constraints = current_node.append("div").classed("semantic_constraints", true)
  semantic_constraints.append("div").classed("spatial_constraints_title", true).text("Configuration Panel")

  appendParamWidges(semantic_constraints)
  bindTimeChangeEvent()


  show_hide_div.each(function() {
    /*d3.select(this.parentNode.parentNode).select('.nei_words').style('visibility', 'visible');
    d3.select(this.parentNode.parentNode).select('.wordsubtitle').style('visibility', 'visible');*/
    d3.select(this.parentNode.parentNode).select('.nei_words').style('display', 'block');
    d3.select(this.parentNode.parentNode).select('.wordsubtitle').style('display', 'block');
    d3.select(this).text('-');
    //let current_id = d3.select(this.parentNode.parentNode).attr('id').replace('Worddiv', 'spatial_left');
    let index = d3.select(this.parentNode.parentNode.parentNode.parentNode).attr('id').replace('spatial_left', 'condition_node'); //修改不知道对不对------------------------------------------------------------
    index = index.substr(index.length - 1, 1);
    get_left_nodes(index);
  });
  locationlistdiv.each(function(d) {
    //d3.select(this.parentNode)
    let current_id = d3.select(this.parentNode).attr('id');
    $(this.parentNode).scroll(function() {
      let id = d3.select(this).attr('id')
      id = parseInt(id.substr(id.length - 1, 1))
      refresh_line(id);
    })
  })
}



nodelist.append_node = function(data,param=[]) {
    if(param.length==0)
    {
        data.order = nodelist.data.length + 1
  nodelist.data.push(data);
  nodelist.node_rendering(data, nodelist.data.length)
    }
    else
    {
        data.order=param[1]
        nodelist.data[param[0]]=data
       nodelist.node_rendering(data, param[1])
    }
}
nodelist.delete_node_byName = function(name) {
  for (let i = 0; i < nodelist.data.length; i++) {
    if (nodelist.data[i].name == name) {
      nodelist.delete_node_byOrder(nodelist.data[i].order);
      break;
    }
  }
}

function normalization(initial_data) {
  initial_data.data.forEach((second_word) => {
    let max_val = 0;
    let min_val = 0;
    second_word.data.forEach((third_word) => {
      third_word.data.forEach((poi) => {
        max_val = poi.val > max_val ? poi.val : max_val
        min_val = (poi.val < min_val || min_val == 0) ? poi.val : min_val
      })
    })
    let dis = max_val - min_val
    if (dis != 0) {
      second_word.data.forEach((third_word) => {
        third_word.data.forEach((poi) => {
          poi.val = (poi.val - min_val) / (dis)
        })
      })
    }
  })
}

function initial_siteScore(initial_data, alpha = 1,param=false) {
    //若alpha=1则说明基于nodelist更新sitescore，反之则是仅对当前标签的数据进行poi中val的更新(simT和alpha)，然后更新sitescore.
    //param为true表示alpha来自参数面板
  let unify_data = {}
  if (param)
    unify_data = {
      data: [initial_data]
    } //使各个部分的结构层数都一样
  else
    unify_data = initial_data

  unify_data.data.forEach(first_word => {
    first_word.data.forEach(second_word => {
      second_word.data.forEach(third_word => {
        third_word.data.forEach(poi => {
          if (param)
            poi.val = poi.relation_val * alpha + poi.simT
          let scores = nodelist.siteScore.get(poi.site_id)
          if (!scores) {
            scores = new Map()
            scores.set(poi.id, poi.val)
            nodelist.siteScore.set(poi.site_id, scores)
          } else {
            let bef_poi_val = scores.get(poi.id)
            if (!bef_poi_val) {
              scores.set(poi.id, poi.val)
            } else {
              scores.set(poi.id, poi.val > bef_poi_val ? poi.val : bef_poi_val)
            }
          }
        })
      })
    })
  })
}