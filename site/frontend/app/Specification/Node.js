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
   initial_right_content,
    init_slider,
    renderingwordslist,
    renderingPOIlist,
    fresh_list_width,
} from './node_operate.js'
import {
     change_cur_time,
} from "./word_tabs.js"
import {
  getMerge_data,
  get_data
} from "../search/searchbar";
import {
    initial_siteScore,
    max_value_POI,
}
from './data_processing.js'
import {
  draw as drawPoiInMap,
  remove as removePoiInMap
} from '../map/poi.js'
import $ from "jquery";



let nodelist = {
  container: d3.select("#condition_node_list"),
  data: [],
    //poi包含relation_val:当前POI与对应的搜索词的初始相似度
    // max_val:单个搜索词时max_val等同于val，搜索词合并后等于poi与各个搜索词的max val的总和
    // val:当前POI与他所对应的搜索词的相似度，初始val=relation_val,之后会随参数调整而变化
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
  //normalization(current_data)
  renderingPOIlist(d3.select('#locationlistdiv' + current_conditionnode_order).data([current_data]), parseInt($('#' + current_node_id).find('.node_num').prop('value')));
  initial_line('condition_node' + current_conditionnode_order)
  refresh_line(current_conditionnode_order)


  calTrajsOrder() //重新调整轨迹的order
}



module.exports = nodelist;



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
      }
      break;
    }
  }
  //把当前卡片所对应的order里面的元素删掉
  let current_order = nodelist.order.indexOf("condition_node" + index)
  for (let m = current_order; m < nodelist.order.length - 1; m++) {
    nodelist.order[m] = nodelist.order[m + 1];
    d3.select('#' + nodelist.order[m]).style('left', 670 * m + 'px').select('.title').select('.constraints_order').text(m + 1);
  }
  nodelist.order.pop(); //最后一个没用，删掉
  fresh_list_width();
  refresh_path_color()
    //refresh_POI_length()
  initial_siteScore(nodelist) //更新sitescore
    removePoiInMap()//清空map中的POI
}
nodelist.node_rendering = function(initial_node_data, index) {
    removePoiInMap()
  if (initial_node_data.data.length != 0)
  {
    max_value_POI(initial_node_data)
      //normalization(initial_node_data)
  }
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
    current_node.style("left", d => `${692*(index-1)}px`)
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

    })
      .on('change', function() {
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
  spatial_constraints.select('.max_node_num').append('div')
      .classed('increase', true).text('+')
      .on('click', increase_locationlist)
    .style("background-image", "url(../icon/circleblue.png)")
  let spatial_cc = spatial_constraints.append("div").style("height", "calc(100% - 33px)")
    .style("position", "absolute")
    .style("width", "100%")
  
  let spatialwordcontainer = spatial_cc.append("div")
    .attr('id', function(d) {
      return 'spatial_left' + d.order
    }).style("width","197px")// "182px")
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
    .style("left", "189px")
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
