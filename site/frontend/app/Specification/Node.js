
// import * as d3 from 'd3';
// import $ from 'jquery';

import { appendParamWidges } from './param.js'
import { bindTimeChangeEvent } from './time.js'
import { textData } from '../search/searchbar.js'

let nodelist={
  container:d3.select("#Specification_view"),
  data : [],
    order:[],
}
let line_data=[];
nodelist.rendering = function(){
    console.log('nodelist.data',nodelist.data);
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
  let mergenode = addnode.merge(allnode)

  mergenode.style("left",d=>`${622*(d.order-1)}px`)

  //title
  let title = addnode.append("div").classed("title",true)
  title.append("div").classed("constraints_order",true)
  title.append("div").classed("text",true).style('display','inline-block')
    title.append('div').classed('delete',true).text('X').style('margin','5px').on('click',function(d) {
        d3.select('#condition_node' + d.order).remove();
        for (let i = 0; i < nodelist.data.length; i++) {
        if (nodelist.data[i].order == d.order) {

            nodelist.data.splice(i, 1);
            for (let j = i + 1; j < nodelist.data.length; j++) {
                nodelist.data[j].order = nodelist.data[j] - 1;
            }
            break;
        }
    }
        for(let i=0;i<textData.length;i++)
            if(textData[i][0]==d.name)
            {
                textData.splice(i,1);
                break;
            }
        d3.selectAll('.word-tab').each(function(){
            if(d.name==d3.select(this).select('.tab-text-container').select('.tab-text').text())
                d3.select(this).remove();
        })
        nodelist.rendering();
        //nodelist.data.length---------------------------------------------------------------------------------------------------------------------
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
for(let i=0;i<d.data.length;i++)
    for(let j=0;j<d.data[i].data.length;j++)
        for(let m=0;m<d.data[i].data[j].data.length;m++)
            sum_location++;
return parseInt(sum_location);

    }).on('change',function(){
        if(d3.select(this).property('value')<=parseInt(d3.select(this).attr('max'))&&(d3.select(this).property('value')>=parseInt(d3.select(this).attr('min')))){

        let condition_nodeid=d3.select(this.parentNode.parentNode.parentNode.parentNode.parentNode).attr('id');
let current_conditionnode_order = condition_nodeid.substr(condition_nodeid.length-1,1)
        let current_data=[]
        for(let i=0;i<nodelist.data.length;i++)
            if(nodelist.data[i].order==current_conditionnode_order)
                current_data=nodelist.data[i]
renderingPOIlist(d3.select('#locationlistdiv'+current_conditionnode_order).data([current_data]),d3.select(this).property('value'));
       get_right_nodes(current_conditionnode_order);
        }
        else{
            if(d3.select(this).property('value')>d3.select(this).attr('max'))
                d3.select(this).property('value',d3.select(this).attr('max'))
            else
                d3.select(this).property('value',d3.select(this).attr('min'))
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
     create_line(index);
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
let index='condition_node'+d.order
$('#'+current_id).scroll(function(){
        let top_height=$('#'+current_id).scrollTop();
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
    create_line(index);
})
  })
}
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
//.style(    "margin", "5px")
  let mergewords = addwords.merge(allwords)
  mergewords.style("top",(d,i)=>`${i*24}px`)

  let addwordtitle=addwords.append("div").classed("wordtitle",true)
  addwords.append("div").classed("wordsubtitle",true);
  addwords.append("div").classed("nei_words",true);
  let show_hide_div=addwordtitle.append('div').classed('hide_nei_words',true).text('-')
      show_hide_div.on('click',show_hide)
          //console.log(,'d3.select(show_hide_div)---------');
    addwordtitle.append('div').classed('real_wordtitle',true).text((d,i)=>d.name)
        .append('div').classed('delete',true).text('X').style('margin-right','5px').on('click',function(d,i){
            //let subtitle_before=d3.select(this.parentNode).text()
        //let subtitle=subtitle_before.substr(0,subtitle_before.length-1);
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
        console.log(' get_target------------------------')
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

function renderingPOIlist(mergenode,max_num=20){

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
        }
renderingPOIlist(d3.select('#locationlistdiv'+current_conditionnode_order).data([current_data]),parseInt($('#'+current_node_id).find('.node_num').prop('value')));
        get_right_nodes(current_conditionnode_order)

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


function drag_start(){
    //let mouse_x = d3.event.x;
    //let mouse_y = d3.event.y;
    //d3.select(this).style.cursor = "move";
    d3.select(this).style("z-index",10000)
    .style('-webkit-transition-duration','0s');
    //target_node.attr('start_x', mouse_x);
    //target_node.attr('start_y',mouse_y);
    //console.log('target_node:',target_node.style)
//this.attr("x", mouse_x);

}
function newdrag() {
     let dx = d3.event.dx, dy = d3.event.dy;
    let prex = parseInt(d3.select(this).style('left'));
    if(((dx + prex)<=0))
    {
        d3.select(this).style('left', prex);
    }
    else{
        d3.select(this).style('left', (dx + prex) + 'px');
        let current_id=d3.select(this).attr('id'),
            current_location= nodelist.order.indexOf(current_id)

        let next_node=null;
        if(current_location+1<nodelist.order.length){
            next_node=d3.select('#'+nodelist.order[current_location+1]);
        }
        let prev_node=null;
        if(current_location-1>=0){
            prev_node=d3.select('#'+nodelist.order[current_location-1]);
        }
        //let change_next=(next_node!=null&&((parseInt(next_node.style('left'))-parseInt(d3.select(this).style('left')))<parseInt(d3.select(this).style('width'))/2))
        //let change_prev=(prev_node!=null&&((parseInt(prev_node.style('left'))-parseInt(d3.select(this).style('left')))<parseInt(d3.select(this).style('width'))/2))
        if(next_node!=null&&((parseInt(next_node.style('left'))-parseInt(d3.select(this).style('left')))<parseInt(d3.select(this).style('width'))/2))
        {
           let next_left=parseInt(next_node.style('left'))
           let now_left=next_left - parseInt(d3.select(this).style('width'))-22;

                    // d3.select(this).style('left', next_left+'px');
                    next_node.style('left',now_left+'px');
                    let current_num=d3.select(this).select('.title').select('.constraints_order').text();
                    let next_num = next_node.select('.title').select('.constraints_order').text();
                    d3.select(this).select('.title').select('.constraints_order').text(next_num);
                    next_node.select('.title').select('.constraints_order').text(current_num);
                    //d3.select(this).attr('start_x',target_node.style('left'));
                    let temp=nodelist.order[current_location];
                    nodelist.order[current_location]=nodelist.order[current_location+1];
                    nodelist.order[current_location+1]=temp;
        }
        else{
            if(prev_node!=null&&((parseInt(d3.select(this).style('left')) - parseInt(prev_node.style('left')))<parseInt(d3.select(this).style('width'))/2))
            {
               let prev_left=parseInt(prev_node.style('left'))
               let now_left=parseInt(d3.select(this).style('width'))+22+prev_left;
               // d3.select(this).style('left', prev_left+'px');
                        prev_node.style('left',now_left+'px');
                        let current_num=d3.select(this).select('.title').select('.constraints_order').text();
                        let prev_num = prev_node.select('.title').select('.constraints_order').text();
                        d3.select(this).select('.title').select('.constraints_order').text(prev_num);
                        prev_node.select('.title').select('.constraints_order').text(current_num);

                        //d3.select(this).attr('start_x',target_node.style('left'));
                        let temp=nodelist.order[current_location];
                        nodelist.order[current_location]=nodelist.order[current_location-1];
                        nodelist.order[current_location-1]=temp;
            }
        }
    }



}
function drag_end(){
    d3.select(this).style('-webkit-transition-duration','0.5s').style("z-index",0);
    let current_id=d3.select(this).attr('id');
        let current_location=0;
        for( let i=0;i<nodelist.order.length;i++)
        {
            if(current_id==nodelist.order[i])
            {
                current_location=i;
                break;
            }
        }
d3.select('#'+nodelist.order[current_location]).style('left', current_location*(parseInt(d3.select(this).style('width'))+22)+"px");
        d3.select(this).style('z-index',0);
}




function show_hide() {
    let current_val = d3.select(this).text();
    if (current_val == '+')//show
    {
        d3.select(this.parentNode.parentNode).select('.nei_words').style('visibility', 'visible');
        d3.select(this.parentNode.parentNode).select('.wordsubtitle').style('visibility', 'visible');
        d3.select(this).text('-');
        //let current_id = d3.select(this.parentNode.parentNode).attr('id').replace('Worddiv', 'spatial_left');
        let index = d3.select(this.parentNode.parentNode).attr('id').replace('Worddiv', 'condition_node');
        index=index.substr(index.length-1,1)
        get_left_nodes(index);


//create line
    } else {//hide

        let index = d3.select(this.parentNode.parentNode).attr('id').replace('Worddiv', 'condition_node');
        let hide_nodes = d3.select(this.parentNode.parentNode).select('.nei_words').selectAll('.neiwordsdiv');
        let current_show_nodes = [];
        for (let i = 0; i < line_data[index].left.length; i++) {
            let is_delete = false;
            hide_nodes.each(function () {
                if (this == line_data[index].left[i]) {
                    is_delete = true;
                }
            })
            if (!is_delete)
                current_show_nodes.push(line_data[index].left[i])
        }
        line_data[index].left = current_show_nodes;
        d3.select(this.parentNode.parentNode).select('.nei_words').style('visibility', 'hidden');
        d3.select(this.parentNode.parentNode).select('.wordsubtitle').style('visibility', 'hidden');
        d3.select(this).text('+');
        create_line(index);
    }
}
//每次滚动都要调用该方法
    function create_line(index) {
        let left_nodes = line_data[index].left;
        let right_nodes = line_data[index].right;
        if (left_nodes.length > 0 && right_nodes.length > 0) {
            let current_line_dta = [];
            let data_num=index.substr(index.length-1,1);
            let second_third_index={};
            let path_colorscale = d3.scaleLinear()
                    .range([d3.rgb("rgb(255, 255, 255)"), d3.rgb("rgb(132,60,12)")]);
            let max_val=0;
            for (let i = 0; i < left_nodes.length; i++) {
let second_title=d3.select(left_nodes[i].parentNode.parentNode).select('.wordtitle').select('.real_wordtitle').text();
second_title=second_title.substr(0,second_title.length-1)
let third_title=d3.select(left_nodes[i]).text();
if(!(second_third_index.hasOwnProperty(second_title)))
{
for(let i=0;i<nodelist.data[data_num-1].data.length;i++)
{
    if(second_title==nodelist.data[data_num-1].data[i].name)
    {
        second_third_index[second_title]=nodelist.data[data_num-1].data[i].data;
        break;
    }
}
}
let third_forth_data=second_third_index[second_title];
let forth_data=[];//location list
for(let j=0;j<third_forth_data.length;j++)
{
    if(third_title==third_forth_data[j].name)
    {
forth_data=third_forth_data[j].data;
break;
    }
}

for(let m=0;m<right_nodes.length;m++)
{
    let rifght_nodename=d3.select(right_nodes[m]).text();
    for(let n=0;n<forth_data.length;n++)
    {
        if(rifght_nodename==forth_data[n].name)
        {
            if(max_val<forth_data[n].relation_val)
                max_val=forth_data[n].relation_val
            current_line_dta.push({left:left_nodes[i],right:right_nodes[m],val:forth_data[n].relation_val});
        }
    }
}            }
            path_colorscale.domain([0, max_val]);
            d3.select('#' + index).select('.spatial_lines').selectAll('path').remove();
             d3.select('#' + index).select('.spatial_lines').selectAll('circle').remove();
            let spatial_lines = d3.select('#' + index).select('.spatial_lines').selectAll('path')
                .data(current_line_dta)
                .enter()
                spatial_lines.append('path')
                .attr('d', function (d) {
                    let left_y = parseInt(d3.select(d.left).attr('current_top')) + parseInt(d3.select(d.left).style('height')) / 2
                    //let left_x=parseInt(d3.select(d.left).style('left'))
                    let right_x = parseInt(d3.select(this.parentNode).style('width'))
                    let right_y = parseInt(d3.select(d.right).attr('current_top')) + parseInt(d3.select(d.right).style('height')) / 2
                    return 'M -0 ' + ' ' + left_y + ' ' + 'Q ' + (0 + right_x) / 3 + ' ' + (left_y + right_y) / 3 + ' ' + right_x + ' ' + right_y;
                })
                .attr('stroke', function(d){ return path_colorscale(d.val)})
                .attr('stroke-width', 3)
                .attr('fill', 'none')
                spatial_lines.append('circle')
                .attr('cx','0')
                .attr('cy',function(d){return parseInt(d3.select(d.left).attr('current_top')) + parseInt(d3.select(d.left).style('height')) / 2})
                .attr('r','3')
                .attr('fill','#b9b9b9');
        } else {
            d3.select('#' + index).select('.spatial_lines').selectAll('path').remove();
             d3.select('#' + index).select('.spatial_lines').selectAll('circle').remove();
        }
    }


    function get_left_nodes(index) {//index:1,2,3...
        line_data['condition_node'+index].left = [];
        let top_height = $('#spatial_left' + index).scrollTop();
        let bottom_height = top_height + parseInt($('#spatial_left' + index)[0].getBoundingClientRect().height);
        d3.select('#spatial_left' + index).selectAll('.spatial_words')//主题词div集合
            .each(function () {
                if($(this).find('.Worddiv').length>0)
                {
                    let top_length = parseInt($(this).find('.Worddiv')[0].getBoundingClientRect().height) - parseInt($(this).find('.Worddiv').find('.nei_words')[0].getBoundingClientRect().height);
                let show_hide = $('#spatial_left' + index).find('.hide_nei_words').text()//.innerHTML;
                if (show_hide == '-') {
                    $('#spatial_left' + index).find('.Worddiv').find('.neiwordsdiv').each(function () {
                        let current_element_top = parseInt(d3.select(this).style('top')) + top_length;
                        let element_height = $(this)[0].getBoundingClientRect().height;
                        if ((current_element_top >= top_height && (current_element_top + element_height / 2) <= bottom_height) || (current_element_top < top_height && ((top_height - current_element_top) < element_height / 2))) {
                            d3.select(this).attr('current_top', current_element_top - top_height);
                            line_data['condition_node'+index].left.push(this);
                        }
                    })
                }
                }
            })
        //console.log(top_height,bottom_height,line_data[index].left,'scroll move_height---------------------')
        create_line('condition_node'+index);
    }

    function get_right_nodes(order){
    let current_id = 'locationlistdiv'+order;
let index='condition_node'+order//
        let top_height=$('#'+current_id).scrollTop();
    let element_height=24;//parseInt(d3.select(this).select('.spatial_POIs').select('.POIrect').style('height'))+4;
    let bottom_height=top_height+parseInt($('#'+current_id)[0].getBoundingClientRect().height);
    line_data[index].right=[];//当前显示在窗口中的元素
        d3.select('#'+current_id).select('.spatial_POIs').selectAll('.POIrect').each(function(){
            let current_element_top=parseInt(d3.select(this).style('top'));
            if((current_element_top >=top_height &&(current_element_top+element_height/2)<bottom_height) ||(current_element_top < top_height&&((top_height-current_element_top)<element_height/2))){
                d3.select(this).attr('current_top',current_element_top-top_height);
                line_data[index].right.push(this);
            }
        })
     //console.log(top_height,bottom_height,line_data[index].right,'after---------------------')

    create_line(index);
    }


    function decrease_locationlist(){
let current_max=parseInt(d3.select(this.parentNode).select('.node_num').property('value'));
if(current_max-1>=d3.select(this.parentNode).select('.node_num').attr('min'))
{
    d3.select(this.parentNode).select('.node_num').property('value',current_max-1)
let condition_nodeid=d3.select(this.parentNode.parentNode.parentNode.parentNode.parentNode).attr('id');
let current_conditionnode_order = condition_nodeid.substr(condition_nodeid.length-1,1)
        let current_data=[]
        for(let i=0;i<nodelist.data.length;i++)
            if(nodelist.data[i].order==current_conditionnode_order)
                current_data=nodelist.data[i]
renderingPOIlist(d3.select('#locationlistdiv'+current_conditionnode_order).data([current_data]),current_max-1);
       get_right_nodes(current_conditionnode_order);
}
    }
function increase_locationlist(){
let current_max=parseInt(d3.select(this.parentNode).select('.node_num').property('value'));
if(current_max+1<=d3.select(this.parentNode).select('.node_num').attr('max'))
{
    d3.select(this.parentNode).select('.node_num').property('value',current_max+1)
    let condition_nodeid=d3.select(this.parentNode.parentNode.parentNode.parentNode.parentNode).attr('id');
let current_conditionnode_order = condition_nodeid.substr(condition_nodeid.length-1,1)
        let current_data=[]
        for(let i=0;i<nodelist.data.length;i++)
            if(nodelist.data[i].order==current_conditionnode_order)
                current_data=nodelist.data[i]
renderingPOIlist(d3.select('#locationlistdiv'+current_conditionnode_order).data([current_data]),current_max+1);
       get_right_nodes(current_conditionnode_order);
}
}

function put_locationlist_num(num){

}


    /*

function refresh_locationlist(a,current_node_id){
    let Ti={}
    let alpha = 1;
    let beta = 0;
        d3.select('.semantic_constraints').select('.param-ab-rect').selectAll('.param-half-rect').each(function(d,i){
if(d3.select(this).select('param-name').text()=='α')
    alpha=d3.select(this).select('.param-num').text();
if(d3.select(this).select('param-name').text()=='β')
    beta=d3.select(this).select('.param-num').text();
    });
    d3.select('.semantic_constraints').selectAll('.param-rect').each(function(){
let semantic_name=d3.select(this).select('.param-name').text();
let semantic_val=d3.select(this).select('.param-num').text();
Ti[semantic_name]=semantic_val;
    })
let current_conditionnode_id=d3.select(this.parentNode).attr('id')
 let current_conditionnode_order=current_conditionnode_id.substr(current_conditionnode_id.length-1,1);
    let current_data=[];
    for(let i=0;i<nodelist.data.length;i++)
    {if(nodelist.data[i].order==current_conditionnode_order){
            current_data.push(nodelist.data[i]);//或者给这个结构在外面再套一层，跟listnode.data一样的结构
            break;
        }
    }
    for(let i=0;i<current_data.data.length;i++)
        for(let j=0;j<current_data[i].data.data.length;j++)
        for(let m=0;m<current_data[i].data.data[j].data.length;m++)
        {
            let beta_val=beta*
            current_data[i].data[j].data[m].relation_val*alpha;
        }

    console.log(current_data,'current_data=----------------------')
    renderingPOIlist(d3.select('#locationlistdiv'+current_conditionnode_order).data(current_data))

}


 * function create_line111(source,targets) {
         var common = {
         endpoint: ['Dot',{ radius:5}],//'Blank',//'Rectangle','Image',//
         connector: ['StateMachine'],//Bezier,Straight,Flowchart'],
         anchor: ['Left', 'Right'],
         paintStyle: { stroke: 'lightgray', strokeWidth: 3 },
         maxConnections: -1,
       endpointStyle: { fill: 'lightgray', outlineStroke: 'darkgray', outlineWidth: 2 },
             ConnectionsDetachable: false, //连线是否可用鼠标分离
       };
 jsPlumb.ready(function () {
     jsPlumb.importDefaults({//连线不被拖动
         ConnectionsDetachable: false
     })

           jsPlumb.connect({
         source: 'F-Tag1',//source,//'item_left',
         target: 'S-Tag5',//targets[i],//'item_right',
       },common)
    //jsPlumb.draggable('F-Tag1')
     //jsPlumb.draggable('S-Tag5')

     })
    }
 * */
//     function show_more(id,show_id){
//         var this_button=document.getElementById(id);
//         var value=this_button.innerText;
//         //var value1=$("school_show_more").val();
//         console.log(value);

//         if(value=='+')
//         {
//             this_button.innerText='-';
//             //create_line(paris);
//         }
//         else
//         {
//         this_button.innerText='+';
//         var wrong_connections = ['F-Tag1'];


//         jsPlumb.deleteConnectionsForElement("F-Tag1",{});

//         }
//         $("#"+show_id).slideToggle();
//         if(value=='+')
//         {
//             create_line(paris);
//         }


//         };
// var paris=[['F-Tag1','S-Tag5'],['F-Tag2','S-Tag5'],['F-Tag3','S-Tag5'],['F-Tag4','S-Tag5'],['F-Tag1','S-Tag2']];
//     function create_line(source,targets) {
//         var common = {
//         endpoint: ['Dot',{ radius:5}],//'Blank',//'Rectangle','Image',//
//         connector: ['StateMachine'],//Bezier,Straight,Flowchart'],
//         anchor: ['Left', 'Right'],
//         paintStyle: { stroke: 'lightgray', strokeWidth: 3 },
//         maxConnections: -1,
//         endpointStyle: { fill: 'lightgray', outlineStroke: 'darkgray', outlineWidth: 2 },
//             ConnectionsDetachable: false, //连线是否可用鼠标分离
//       };
// jsPlumb.ready(function () {

//           jsPlumb.connect({
//         source: 'F-Tag1',//source,//'item_left',
//         target: 'S-Tag5',//targets[i],//'item_right',
//       },common)
//     //jsPlumb.draggable('F-Tag1')
//     //jsPlumb.draggable('S-Tag5')

//     })
//     }

//     function DrawALLbar(){
//         locations={'entertainment':{'tag':false,'ox':0,'left':0,'bgleft':0,'progress_width':0},'business':{'tag':false,'ox':0,'left':0,'bgleft':0,'progress_width':0},
//         'living':{'tag':false,'ox':0,'left':0,'bgleft':0,'progress_width':0},'education':{'tag':false,'ox':0,'left':0,'bgleft':0,'progress_width':0},
//         'industry':{'tag':false,'ox':0,'left':0,'bgleft':0,'progress_width':0},'traffic':{'tag':false,'ox':0,'left':0,'bgleft':0,'progress_width':0}};//var tag = false,ox = 0,left = 0,bgleft = 0;
//   var parts=['entertainment','business','living','education','industry','traffic'];

//           for(var i=0;i<parts.length;i++){
//             var progress_btn="#"+parts[i]+'-part-progress_btn';
//             var progress="#"+parts[i]+'-part-progress';
//             var progress_bg="#"+parts[i]+'-part-progress_bg';
//             var progress_bar="#"+parts[i]+'-part-progress_bar';
//             var text="#"+parts[i]+'-part-progress_text';
//             //var tag = false,ox = 0,left = 0,bgleft = 0;
//                     draw_bar(progress_btn,progress,progress_bg,progress_bar,text);
//         }
//       };
//   function draw_bar(progress_btn,progress,progress_bg,progress_bar,text){
//       var part_name=progress.replace('#','').replace('-part-progress','');
//       locations[part_name].progress_width=$(progress).width();
//       $(progress_btn).mousedown(function(e) {
//               var part_name=progress_btn.replace('#','').replace('-part-progress_btn','');
//             locations[part_name].ox = e.pageX - locations[part_name].left;
//           locations[part_name].tag = true;
//         });
//           $(progress_btn).mouseup(function() {
//               var part_name=progress_btn.replace('#','').replace('-part-progress_btn','');
//           locations[part_name].tag = false;
//           });
//           //var progress_width = $(progress).width();要改成全局变量
//           $(progress).mousemove(function(e) {//鼠标移动
//              var part_name=progress.replace('#','').replace('-part-progress','');
//           if ((locations[part_name].tag)) {
//               locations[part_name].left = e.pageX - locations[part_name].ox;
//               if (locations[part_name].left <= 0) {
//                 locations[part_name].left = 0;
//               }else if (locations[part_name].left > locations[part_name].progress_width) {
//                 locations[part_name].left = locations[part_name].progress_width;
//               }
//               $(progress_btn).css('left', locations[part_name].left);
//               $(progress_bar).width(locations[part_name].left);
//             $(text).html((locations[part_name].left/(locations[part_name].progress_width)).toFixed(2));
//           }
//           });
//           $(progress_bg).click(function(e) {//鼠标点击
//             var part_name=progress_bg.replace('#','').replace('-part-progress_bg','');
//           if (!(locations[part_name].tag)) {
//               locations[part_name].bgleft = $(progress_bg).offset().left;
//               locations[part_name].left = e.pageX - locations[part_name].bgleft;
//               if (locations[part_name].left <= 0) {
//                 locations[part_name].left = 0;
//               }else if (locations[part_name].left > (locations[part_name].progress_width)) {
//                 locations[part_name].left = locations[part_name].progress_width;
//               }
//               $(progress_btn).css('left', locations[part_name].left);
//               $(progress_bar).width(locations[part_name].left);
//               //$('.progress_bar').animate({width:left},locations[part_name].progress_width);
//               $(text).html((locations[part_name].left/(locations[part_name].progress_width)).toFixed(2));
//           }
//           });
//     }
//   DrawALLbar();



//       <div class="down-contain"  style="width:700px">
//           <div class="constraints">
//                     </div>
//                     <div class="constraints-bar">
//           <div class="panel three-left-panel" >
//               <div class="left-panel" style="overflow-x:hidden;overflow-y:auto;" id="first-level-Tag">
//                   <div class="constraint-title">Spatial Constraints Words</div>
//                   <div id='school' class="show-hide">
//                       <div class="zero-level-tag">
//                           <div onclick="show_more('school_show_more','school_inf')" class="show-btn" value='+' id="school_show_more">+</div>
//             <div class="zero-level-tag-name" id="zero-Tag">学校</div>
//                       </div>
//             <div id="school_inf" class='part-inf' style="display:none;">
//                 <div class="first-level-tag">
//                     <span>0.86</span>
//                    <div style="width:70%" id="F-Tag1">学校</div>
//                 </div>
//                 <div class="first-level-tag">
//                     <span>0.60</span>
//                     <div style="width:60%" id="F-Tag2">院校</div>
//                 </div>
//                 <div class="first-level-tag">
//                     <span>0.5</span>
//                    <div style="width:50%" id="F-Tag3">高校</div>
//                 </div>
//                 <div class="first-level-tag">
//                     <span>0.45</span>
//                     <div style="width:45%" id="F-Tag4">学堂</div>
//                 </div>
//                 <div class="first-level-tag">
//                     <span>0.45</span>
//                     <div style="width:45%" id="F-Tag5">书院</div>
//                 </div>
//             </div>
//         </div>
//               <div id='hospital' class="show-hide">
//                   <div class="zero-level-tag">
//             <div onclick="show_more('hospital_show_more','hospital_inf')" class="show-btn" value='+' id="hospital_show_more">+</div>
//             <div class="zero-level-tag-name" >医院</div>
//             </div>
//             <div id="hospital_inf" class='part-inf' style="display:none;">
//                 <div class="first-level-tag">
//                     <span>0.86</span>
//                    <div style="width:70%">学校</div>
//                 </div>
//                 <div class="first-level-tag">
//                     <span>0.60</span>
//                     <div style="width:60%">院校</div>
//                 </div>
//                 <div class="first-level-tag">
//                     <span>0.5</span>
//                    <div style="width:50%">高校</div>
//                 </div>
//                 <div class="first-level-tag">
//                     <span>0.45</span>
//                     <div style="width:45%">学堂</div>
//                 </div>
//                 <div class="first-level-tag">
//                     <span>0.45</span>
//                     <div style="width:45%">书院</div>
//                 </div>
//             </div>
//         </div>
//               </div>
//               <div class="right-panel" style="text-align: center;overflow-y:auto;" id="second-level-Tag">
//                   <div class="constraint-title">Location List</div>
//                       <div class="second-level-tag" id="S-Tag1">
//                           小学
//                       </div>
//                       <div class="second-level-tag" id="S-Tag2">
//                           学校
//                       </div>
//                       <div class="second-level-tag" id="S-Tag3">中学</div>
//                       <div class="second-level-tag" id="S-Tag4">大学</div>
//                       <div class="second-level-tag" id="S-Tag5">大学</div>
//                   <div class="second-level-tag" id="S-Tag6">大学</div>
//                   <div class="second-level-tag" id="S-Tag7">大学</div>
//                   <div class="second-level-tag" id="S-Tag8">大学</div>
//                   <div class="second-level-tag" id="S-Tag9">大学</div>
//                   <div class="second-level-tag" id="S-Tag10">大学</div>
//                   <div class="second-level-tag" id="S-Tag11">大学</div>
//                   <div class="second-level-tag" id="S-Tag12">大学</div>
//           </div>
//           </div>
//           <div class="panel three-right-panel" style="padding-top: 5px;">
//               <div class="constraint-title">Semantic Parameters</div>
//               <div id="entertainment-part" class="semantic_part">
// 				<div class="semantic_name" id="entertainment-part-name">娱乐区</div>
// 			<div class="semantic_progress">
// 　				<div class="progress" id="entertainment-part-progress">
//  					<div class="progress_bg" id="entertainment-part-progress_bg">
// 						<div class="progress_bar" id="entertainment-part-progress_bar"></div>
//  					</div>
//  					<div class="progress_btn" id="entertainment-part-progress_btn"></div>
// 				</div>
// 			</div>
//                   <div class="progress_length" id="entertainment-part-progress_text">0</div>
// 			</div>
// 			<div id="business-part" class="semantic_part">
// 				<div class="semantic_name" id="business-part-name">商业区</div>
// 			<div class="semantic_progress">
// 　				<div class="progress" id="business-part-progress">
//  					<div class="progress_bg" id="business-part-progress_bg">
// 						<div class="progress_bar" id="business-part-progress_bar"></div>
//  					</div>
//  					<div class="progress_btn" id="business-part-progress_btn"></div>
// 				</div>

// 			</div>
//                 <div class="progress_length" id="business-part-progress_text">0</div>
// 			</div>
// 			<div id="living-part" class="semantic_part">
// 				<div class="semantic_name" id="living-part-name">住宅区</div>
// 			<div class="semantic_progress">
// 　				<div class="progress" id="living-part-progress">
//  					<div class="progress_bg" id="living-part-progress_bg">
// 						<div class="progress_bar" id="living-part-progress_bar"></div>
//  					</div>
//  					<div class="progress_btn" id="living-part-progress_btn"></div>
// 				</div>
// 			</div>
//                 <div class="progress_length" id="living-part-progress_text">0</div>
// 			</div>
// 			<div id="education-part" class="semantic_part">
// 				<div class="semantic_name" id="education-part-name">教育区</div>
// 			<div class="semantic_progress" >
// 　				<div class="progress" id="education-part-progress">
//  					<div class="progress_bg" id="education-part-progress_bg">
// 						<div class="progress_bar" id="education-part-progress_bar"></div>
//  					</div>
//  					<div class="progress_btn" id="education-part-progress_btn"></div>
// 				</div>

// 			</div>
//                 <div class="progress_length" id="education-part-progress_text">0</div>
// 			</div>
// 			<div id="industry-part" class="semantic_part">
// 				<div class="semantic_name" id="industry-part-name">工业区</div>
// 			<div class="semantic_progress">
// 　				<div class="progress" id="industry-part-progress">
//  					<div class="progress_bg" id="industry-part-progress_bg">
// 						<div class="progress_bar" id="industry-part-progress_bar"></div>
//  					</div>
//  					<div class="progress_btn" id="industry-part-progress_btn"></div>
// 				</div>
// 			</div>
//                 <div class="progress_length" id="industry-part-progress_text">0</div>
// 			</div>
// 			<div id="traffic-part" class="semantic_part">
//                 <div class="semantic_name" id="traffic-part-name">交通区</div>
//                 <div class="semantic_progress">
// 　				<div class="progress" id="traffic-part-progress">
//  					<div class="progress_bg" id="traffic-part-progress_bg">
// 						<div class="progress_bar" id="traffic-part-progress_bar"></div>
//  					</div>
//  					<div class="progress_btn" id="traffic-part-progress_btn"></div>
// 				</div>
//                 </div>
//           <div class="progress_length" id="traffic-part-progress_text">0</div>
// 			</div>
//           </div>
//                         </div>

//       </div>
