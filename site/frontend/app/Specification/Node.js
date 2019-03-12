
// import * as d3 from 'd3';
// import $ from 'jquery';

import { appendParamWidges } from './param.js'
import { bindTimeChangeEvent } from './time.js'
//import { textData } from '../search/searchbar.js'
import { calTrajsOrder } from '../app.js'
import {drag_start,newdrag,drag_end,show_hide,refresh_path_color,get_left_nodes,initial_line,refresh_line,decrease_locationlist,increase_locationlist} from './node_interaction.js'
import {path_colorscale, path_colorsdomain} from "./node_interaction";
let nodelist={
  container:d3.select("#condition_node_list"),
  data : [],
    order:[],

  siteScore : new Map()
}
export let line_data=[];
let is_initial_right_content=false;
nodelist.rendering = function(){
    fresh_list_width();
  for(let i =0;i<nodelist.data.length;i++){
    nodelist.data[i].order = i +1
  }

  let allnode = this.container.selectAll(".condition_node")
    .data(nodelist.data, (d,i)=>d.name);


  allnode.exit().remove();

  let addnode = allnode.enter().append("div")
                      .classed("condition_node",true)
      .style('-webkit-transition-duration','0.5s')
      .attr('id',function(d){return 'condition_node'+d.order})
      .each(function(){
                          line_data[d3.select(this).attr('id')]={left:[],right:[]};
      })
    .call(d3.drag()
         .on("start", drag_start)
          .on("drag", newdrag)
          .on('end',drag_end));
  let mergenode = addnode//.merge(allnode)

  mergenode.style("left",d=>`${622*(d.order-1)}px`)

  //title
  let title = addnode.append("div").classed("title",true)
  title.append("div").classed("constraints_order",true)
  title.append("div").classed("text",true).style('display','inline-block')
    title.append('div').classed('delete',true).text('X').style('margin','5px').on('click',function(d) {
        console.log(d.order,'d.order--------------')
        nodelist.delete_node(d.order);
        console.log(nodelist.data,'nodelist.data------------------------------')
    })


  mergenode.select(".title").select(".constraints_order").text(d=>d.order)
  mergenode.select(".title").select(".text").text(d=>d.name)

    nodelist.order=[];
    this.container.selectAll(".condition_node").each(function(){
      nodelist.order.push(d3.select(this).attr('id'));
  });

  //time constraints
  let timeconstraings = addnode.append("div").classed("timeconstraints",true)

  timeconstraings.append("div").classed("node_subtitle",true)
  let timecontainer = timeconstraings.append("div")
  let temp = timecontainer.append("div").classed("text",true).classed("textcon",true)
          .style("margin"," 0 20px")
          .style("width","170px")
          .style("background","#ababab")
          .style("color","white")
          .style("text-align","center")
      .style('display','inline-block')
  timecontainer.append("input").classed("starttime",true).classed("textinput",true)
  timecontainer.append("div").classed("conj",true).classed("textcon",true)
  timecontainer.append("input").classed("endtime",true).classed("textinput",true)

  mergenode.select(".timeconstraints").select(".node_subtitle").text("Temporal Constraints")
  mergenode.select(".timeconstraints").select(".text").text("周日上午")
      .append('div').classed('delete',true).style('margin-top','0px').style('margin-right','10px').style('font-size','15px').text('X')
      .on('click',function(){
//删除这部分干啥？？？？？？？？？？？？？？？？？？？？///////////////////////??????????????????????????????????????????????????????????????????????????????????
    })
  mergenode.select(".timeconstraints").select(".starttime").property('value',"2018.01.10 9:00")
  mergenode.select(".timeconstraints").select(".conj").text("~")
  mergenode.select(".timeconstraints").select(".endtime").property('value',"2018.01.10 11:00")




  //spatial constraints
  let spatial_constraints = addnode.append("div").classed("spatial_constraints",true)
  let subtitlecontainer = spatial_constraints.append("div").style("height","27px")
  subtitlecontainer.append("div").classed("node_subtitle",true).style("font-size","15px")
  .text("Spatial Constraints Words").style("float","left").style("width","185px")
  //subtitlecontainer.append("div").classed("node_subtitle",true).style("font-size","15px")
  //.style("float","left").style("width","65px")
  let node_subtitle = subtitlecontainer.append("div").classed("node_subtitle",true).style("height","27px").style('overflow','hidden')
      //.style("font-size","15px").text("Location List").style("float","left").style("width","95px")

    node_subtitle.append('div').classed('real_node_subtitle',true).text("Location List").style("width","65px")
    node_subtitle.append('div').classed('max_node_num',true).style("width","100px")
    node_subtitle.select('.max_node_num').append('div').classed('text',true).text('Top').style("width","14px").style("height","14px")
    node_subtitle.select('.max_node_num').append('div').classed('decrease',true).text('-').style("width","14px").style("height","14px").on('click',decrease_locationlist)
    node_subtitle.select('.max_node_num').append('input').classed('node_num',true).attr('type','number').property('value',20).attr('min',0).style("width","30px").style("height","14px").attr('max',function(d){
        let sum_location=0;
d.data.map((x,i)=> {
    x.data.map((y, j) =>{
        y.data.map((z,m)=>sum_location++)
        }
    )
})
return parseInt(sum_location);

    }).on('change',function(){
        if(d3.select(this).property('value')>d3.select(this).attr('max'))
                d3.select(this).property('value',d3.select(this).attr('max'))
            if(d3.select(this).property('value')<d3.select(this).attr('min'))
                d3.select(this).property('value',d3.select(this).attr('min'))
        if(d3.select(this).property('value')<=parseInt(d3.select(this).attr('max'))&&(d3.select(this).property('value')>=parseInt(d3.select(this).attr('min')))){

        let condition_nodeid=d3.select(this.parentNode.parentNode.parentNode.parentNode.parentNode).attr('id');
let current_conditionnode_order = condition_nodeid.substr(condition_nodeid.length-1,1)
        let current_data=[]
        for(let i=0;i<nodelist.data.length;i++)
            if(nodelist.data[i].order==current_conditionnode_order)
                current_data=nodelist.data[i]
renderingPOIlist(d3.select('#locationlistdiv'+current_conditionnode_order).data([current_data]),d3.select(this).property('value'));
       initial_line('condition_node'+current_conditionnode_order);
       refresh_line(current_conditionnode_order);
        }
    })
    node_subtitle.select('.max_node_num').append('div').classed('increase',true).text('+').style("width","14px").on('click',increase_locationlist)


  let spatial_cc = spatial_constraints.append("div").style("height","calc(100% - 27px)")
                .style("position","absolute")
                .style("width","100%")
  spatial_cc.append("div")
      .attr('id',function(d){return 'spatial_left'+d.order}).style("width","205px")
                  .style("float","left")
                  .style("overflow-y","auto")
                  .attr("dir","rtl")
                  .style("height","100%")
      .each(function(d){
let current_id = d3.select(this).attr('id');
let index='condition_node' + d.order;
let order=d.order;
$('#'+current_id).scroll(function(){
    line_data[index].left=[];
     let top_height=$('#'+current_id).scrollTop();
     let bottom_height=top_height+parseInt($('#'+current_id)[0].getBoundingClientRect().height);
    d3.select('#'+current_id).selectAll('.spatial_words')//主题词div集合
        .each(function(){
            let top_length=parseInt($(this).find('.Worddiv')[0].getBoundingClientRect().height) - parseInt($(this).find('.Worddiv').find('.nei_words')[0].getBoundingClientRect().height);
            let show_hide=$('#'+current_id).find('.hide_nei_words').text()//.innerHTML;
            if(show_hide=='-'){
                $('#'+current_id).find('.Worddiv').find('.neiwordsdiv').each(function(){
                    let current_element_top=parseInt(d3.select(this).style('top'))+top_length;
                    let element_height=$(this)[0].getBoundingClientRect().height;
                    if((current_element_top >=top_height &&(current_element_top+element_height/2)<=bottom_height) ||(current_element_top < top_height&&((top_height-current_element_top)<element_height/2)))
                    {
                        d3.select(this).attr('current_top',current_element_top-top_height);
                        line_data[index].left.push(this);
                    }
                })
            }
        })
     //console.log(top_height,bottom_height,line_data[index].left,'scroll move_height---------------------')
     initial_line(index);
    refresh_line(order);
})
      })
              .append("div").classed("spatial_words",true)
                  .style("width","100%")
  spatial_cc.append("svg").style("width","90px")
                  .style("float","left")
                  .style("height","100%").classed("spatial_lines",true)
  let locationlistdiv = spatial_cc.append("div").classed("locationlistdiv",true)
      .attr('id',function(d,i){return 'locationlistdiv'+d.order})

                  .append("div")
                  .classed("spatial_POIs",true)
                  .style("width","100%")
                  /*.style("height",function(d){
                     let poinumber = 0
                     for(let i =0;i<d.data.length;i++){
                      for(let j =0;j<d.data[i].data.length;j++){
                        poinumber+= d.data[i].data[j].data.length
                      }
                     }
                     return `${poinumber*20}px`
                  })*/

  let show_hide_div = renderingwordslist(mergenode)
  renderingPOIlist(mergenode)


  //semantic constraints
  let semantic_constraints = addnode.append("div").classed("semantic_constraints",true)
  semantic_constraints.append("div").classed("node_subtitle",true)
          .style("font-size","15px").text("Configuration Panel")
  // addslide(semantic_constraints,"Business",mergenode)
  // addslide(semantic_constraints,"Entertainment",mergenode)
  // addslide(semantic_constraints,"Resident",mergenode)
  // addslide(semantic_constraints,"Education",mergenode)
  // addslide(semantic_constraints,"Industry",mergenode)
  // addslide(semantic_constraints,"Traffic",mergenode)
  
  appendParamWidges(semantic_constraints)
  bindTimeChangeEvent() 


    show_hide_div.each(function(){
        d3.select(this.parentNode.parentNode).select('.nei_words').style('visibility', 'visible');
        d3.select(this.parentNode.parentNode).select('.wordsubtitle').style('visibility', 'visible');
        d3.select(this).text('-');
        //let current_id = d3.select(this.parentNode.parentNode).attr('id').replace('Worddiv', 'spatial_left');
        let index = d3.select(this.parentNode.parentNode).attr('id').replace('Worddiv', 'condition_node');
        index=index.substr(index.length-1,1);
        get_left_nodes(index);
    });
  locationlistdiv.each(function(d){
      //d3.select(this.parentNode)
let current_id = d3.select(this.parentNode).attr('id');
let order=d.order
$('#'+current_id).scroll(function(){
    refresh_line(order);
        /*let top_height=$('#'+current_id).scrollTop();
    let element_height=24;//parseInt(d3.select(this).select('.spatial_POIs').select('.POIrect').style('height'))+4;
    let bottom_height=top_height+parseInt($('#'+current_id)[0].getBoundingClientRect().height);
    line_data[index].right=[];//当前显示在窗口中的元素
        d3.select(this).select('.spatial_POIs').selectAll('.POIrect').each(function(){
            let current_element_top=parseInt(d3.select(this).style('top'));
            if((current_element_top >=top_height &&(current_element_top+element_height/2)<bottom_height) ||(current_element_top < top_height&&((top_height-current_element_top)<element_height/2))){
                d3.select(this).attr('current_top',current_element_top-top_height);
                line_data[index].right.push(this);
            }
        })
     //console.log(top_height,bottom_height,line_data[index].right,'scroll move_height---------------------')
    create_line(index);*/
})
  })


    initial_right_content();

}

/*document.getElementById('Specification_view').offsetWidth.on('change',function(){
   console.log('resize');
 initial_right_content();
})*/

function renderingwordslist(mergenode){
    let allwords = mergenode.select(".spatial_words").selectAll(".Worddiv")
           .data(function(d){
              let heightset=[]
              for(let i = 0;i<d.data.length;i++){
                heightset.push(d.data[i].data.length)
                for(let j =0;j<d.data[i].length;j++){
                  d.data[i].data[j].index = (i,j)
                }
              }
            return d.data
          },(d,i)=>d.name)

  allwords.exit().remove()
  let addwords = allwords.enter().append("div").classed("Worddiv",true)
      .attr('id',function(d){
          let grand_id = d3.select(this.parentNode.parentNode).attr('id')
          let num=grand_id.substr(grand_id.length-1,1);
          return 'Worddiv'+num})
                  .style("background","#ececec")
  let mergewords = addwords.merge(allwords)
  mergewords.style("top",(d,i)=>`${i*24}px`)

  let addwordtitle=addwords.append("div").classed("wordtitle",true)
  addwords.append("div").classed("wordsubtitle",true);
  addwords.append("div").classed("nei_words",true);
  let show_hide_div=addwordtitle.append('div').classed('hide_nei_words',true).text('-')
      show_hide_div.on('click',show_hide)
    addwordtitle.append('div').classed('real_wordtitle',true).text((d,i)=>d.name)
        .append('div').classed('delete',true).text('X').style('margin-right','5px').on('click',function(d,i){
        let subtitle=d.name;
            let delete_worddiv = d3.select(this.parentNode.parentNode.parentNode).attr('id')
        let spatial_left_id=d3.select(this.parentNode.parentNode.parentNode.parentNode.parentNode).attr('id');
        let order=spatial_left_id.substr(spatial_left_id.length-1,1);
for(let i=0;i<nodelist.data.length;i++)
{
    let get_target=false;
    if(order==nodelist.data[i].order)

    {
        for(let j=0;j<nodelist.data[i].data.length;j++)
        {
            if(subtitle==nodelist.data[i].data[j].name)
            {
                nodelist.data[i].data.splice(j,1);
                get_target=true;
                break;
            }
        }
    }
    if(get_target)
    {
         break;
    }
}
        d3.select('#'+delete_worddiv).remove();
        get_left_nodes(order)
            //删除温州，并对该卡片进行重新刷新，get_left_nodes()---------------------------------------------------------------------------------------------------
    });
  mergewords.select(".wordsubtitle").text("Neighbors")
  let allneiwords = mergewords.select(".nei_words").selectAll(".neiwordsdiv").data(function(d){
      return d.data
  })

  allneiwords.exit().remove()
  let addneiwords = allneiwords.enter().append("div").classed("neiwordsdiv",true)
  let mergeneiwords = addneiwords.merge(allneiwords)
  mergeneiwords.text(d=>d.name)
      .style("top",(d,i)=>`${i*24}px`)
    return show_hide_div
}

export function renderingPOIlist(mergenode,max_num=20){
  let allPOI = mergenode.select(".spatial_POIs").selectAll(".POIrect")
           .data(function(d){
                  let colorscale = d3.scaleLinear()
                    .range([d3.rgb("rgb(255, 255, 255)"), d3.rgb("rgb(46,117,182)")])
                  let textcolorscale = 0

                  // data
                  let pois = []
                   for(let i =0;i<d.data.length;i++){
                    for(let j =0;j<d.data[i].data.length;j++){
                      for(let m =0;m<d.data[i].data[j].data.length;m++){
                        pois.push({
                          index:pois.length,
                          poi:d.data[i].data[j].data[m],
                          words:{
                            F:(i,d.data[i].name),
                            S:(j,d.data[i].data[j].name)}
                        })
                      }
                    }
                   }

                   //sort by val
                     pois.sort(function(a, b) {
                        return b.poi.val - a.poi.val})
                     colorscale.domain([0, pois[0].poi.val])
                     textcolorscale = pois[0].poi.val
                   //update data index and color
                   for(let i=0;i<pois.length;i++){
                       pois[i].order = i
                    pois[i].color = pois[i].poi.val >textcolorscale/2 ? "white":"rgb(28,28,28)"
                    pois[i].background = colorscale(pois[i].poi.val)
                   }
                    pois=pois.slice(0,max_num)
                   //reorder
                   pois.sort(function(a, b) {
                      return a.poi.index - b.poi.index})
                   return pois
           },function (d) {
	        return d.poi.name;
	    })

  allPOI.exit().remove()
  allPOI.enter().append("div").classed("POIrect",true)
    .text(function (d,i){
        return d.poi.name
           //return  d.poi.name.length>8 ? d.poi.name.substring(0,8):d.poi.name
    })
    .merge(allPOI)
    .style("top",d=>`${d.order*28}px`)
    .style("background",d=>d.background)
    .style("color",d=>d.color)
      .each(function(){
          let grandparent_id=d3.select(this.parentNode.parentNode).attr('id');
         if(parseInt(d3.select(this).style('top'))<$('#'+grandparent_id)[0].getBoundingClientRect().height){
             d3.select(this).attr('current_top',parseInt(d3.select(this).style('top')))
             let index=grandparent_id.replace('locationlistdiv','condition_node');
             //let index=c_id.substr(0,c_id.length-1);
             line_data[index].right.push(this);
             //let c_id=grandparent_id.replace('-spatial_POIs-','condition_node');
             //              let index=c_id.substr(0,c_id.length-1);
         }
      })
}

nodelist.reOrder = function refresh_list(a,current_node_id){
    let alpha = a;
    let current_conditionnode_order=current_node_id.substr(current_node_id.length-1,1);
    let current_data=[];
    for(let i=0;i<nodelist.data.length;i++)
    {if(nodelist.data[i].order==current_conditionnode_order){
            current_data=nodelist.data[i];//或者给这个结构在外面再套一层，跟listnode.data一样的结构
            break;
        }
    }
 for(let i=0;i<current_data.data.length;i++)
        for(let j=0;j<current_data.data[i].data.length;j++)
        for(let m=0;m<current_data.data[i].data[j].data.length;m++)
        {
            //current_data.data[i].data[j].data[m].val = current_data.data[i].data[j].data[m].relation_val*(current_data.data[i].data[j].data[m].relation_val)
            current_data.data[i].data[j].data[m].val = current_data.data[i].data[j].data[m].relation_val*alpha+current_data.data[i].data[j].data[m].simT;
          
            //  添加  site =>  arounded pois' socre  的 map
            let { relation_val,simT,site_id } = current_data.data[i].data[j].data[m]
            let score = alpha * relation_val + simT
            let scores = this.siteScore.get(site_id)
            if(!scores){
              scores = [score]
              this.siteScore.set(site_id,scores)
            }
            else  scores.push(score)
        }
renderingPOIlist(d3.select('#locationlistdiv'+current_conditionnode_order).data([current_data]),parseInt($('#'+current_node_id).find('.node_num').prop('value')));
        initial_line('condition_node'+current_conditionnode_order)
    refresh_line(current_conditionnode_order)
    
    
    calTrajsOrder() //重新调整轨迹的order
}

function addslide(container,containername,mergecontainer){
  container.append("div").attr("id",`${containername}_name`)
               .style("font-size", "13px")
               .style("text-align", "center").text(containername)

  let slider = container.append("div").style("height", "20px")
  let svg = slider.append("svg").attr("id",`${containername}_slider`).classed("slide",true)
               .attr("width","130").attr("height","20")
               .style("color","#545454")
               .style("float", "left")
  let text = slider.append("div").attr("id",`${containername}_text`).text("1")
               .style("float", "left")
               .style("font-size", "12px")
               .style("line-height", "20px")
               .style("padding", "0 5px")
               .style("width", "30px")
  init_slider(svg,text)


}

// <svg width="130" height="25"></svg>
function init_slider(svg,text){
  let margin = {right: 10, left: 10},
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
    .select(function() { return this.parentNode.appendChild(this.cloneNode(true)); })
      .attr("class", "track-inset")
    .select(function() { return this.parentNode.appendChild(this.cloneNode(true)); })
      .attr("class", "track-overlay")
      .call(d3.drag()
          .on("start.interrupt", function() { slider.interrupt(); })
          .on("start drag", function() { hue(x.invert(d3.event.x),handle); }));

  let handle = slider.insert("circle", ".track-overlay")
      .attr("class", "handle")
      .attr("r", 4);

  hue(1,handle)

  function hue(h,handle) {
    text.text(d3.format(".2f")(h))
    handle.attr("cx", x(h));
  }
}


module.exports = nodelist;

export function initial_right_content(){
    nodelist.container.select('.right_content').remove()
    let legend_list=[{name:'Relevance Score:',color:['#993404','#d95f0e','#fe9929','#fec44f','#fee391',"#ffffd4"]},{name:'Relevance Information:',color:['#993404','#d95f0e','#fe9929','#fec44f','#fee391',"#ffffd4"]}]
    let height=parseInt($('#Specification_view').css('height'))
    let right_content=nodelist.container.append('div').classed('right_content',true)//.style('height',height+'px').style('left',left+'px');//.style('left',document.getElementById('Specification_view').offsetWidth);
        right_content.append('div').classed('add_condition_node',true).text('+')//./style('height',height-100+'px');
    legend_list.map((x,y)=>{
    let legend=right_content.append('div').classed('legend',true)
    legend.append('div').classed('text',true).text(x.name)
    let content=legend.append('div').classed('content',true)
    content.append('div').classed('max',true).text(parseFloat(path_colorsdomain.max).toFixed(1))
    x.color.map((color,i)=>{
        content.append('div').classed('color_bar',true).style('background',color)
    })
    content.append('div').classed('min',true).text(parseFloat(path_colorsdomain.min).toFixed(1))
    })
}

nodelist.delete_node=function (index){//例如删除condition_node1则index为1

        d3.select('#condition_node' + index).remove();

        for (let i = 0; i < nodelist.data.length; i++) {
        if (nodelist.data[i].order == index) {

            nodelist.data.splice(i, 1);
            for (let j = i; j < nodelist.data.length; j++) {
                console.log('#condition_node'+nodelist.data[j].order,'\'#condition_node\'+nodelist.data[j].order')
                d3.select('#condition_node'+nodelist.data[j].order).attr('id','condition_node'+(nodelist.data[j].order-1))
                let target_index=nodelist.order.indexOf("condition_node" + nodelist.data[j].order)
                 nodelist.order[target_index]='condition_node'+(nodelist.data[j].order-1)
                nodelist.data[j].order = nodelist.data[j].order - 1;
            }
            break;
        }
    }
        //把当前卡片所对应的order里面的元素删掉
     let current_order=nodelist.order.indexOf("condition_node" + index)
 for(let m=current_order;m<nodelist.order.length-1;m++)
        {
            nodelist.order[m]=nodelist.order[m+1];
            d3.select('#'+nodelist.order[m]).style('left',622*m+'px').select('.title').select('.constraints_order').text(m+1);
        }
        nodelist.order.pop();//最后一个没用，删掉
fresh_list_width();

        refresh_path_color()
        //nodelist.rendering();
}

export function fresh_list_width(){
   let current_width=nodelist.data.length*622+120;
    let spe_width=parseInt(document.getElementById('Specification_view').offsetWidth)
    let width=current_width>spe_width?current_width:spe_width
    nodelist.container.style('width',width+'px');
}