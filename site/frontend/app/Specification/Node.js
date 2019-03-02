
// import * as d3 from 'd3';
// import $ from 'jquery';

let nodelist={
  container:d3.select("#Specification_view"),
  data : [],
    order:[],
}


nodelist.rendering = function(){
  for(let i =0;i<nodelist.data.length;i++){
    nodelist.data[i].order = i +1
  }

  let allnode = this.container.selectAll(".condition_node")
    .data(nodelist.data, (d,i)=>d.name);


  allnode.exit().remove();

  let addnode = allnode.enter().append("div")
                      .classed("condition_node",true)
      .attr('id',function(d){return 'condition_node'+d.order})
    .call(d3.drag()
         .on("start", drag_start)
          .on("drag", newdrag)
          .on('end',drag_end));
  let mergenode = addnode.merge(allnode)

  mergenode.style("left",d=>`${622*(d.order-1)}px`)

  //title
  let title = addnode.append("div").classed("title",true)
  title.append("div").classed("constraints_order",true)
  title.append("div").classed("text",true)


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
  timecontainer.append("div").classed("text",true).classed("textcon",true)
          .style("margin"," 0 20px")
          .style("width","170px")
          .style("background","#ababab")
          .style("color","white")
          .style("text-align","center")
  timecontainer.append("input").classed("starttime",true).classed("textinput",true)
  timecontainer.append("div").classed("conj",true).classed("textcon",true)
  timecontainer.append("input").classed("endtime",true).classed("textinput",true)

  mergenode.select(".timeconstraints").select(".node_subtitle").text("Temporal Constraints")
  mergenode.select(".timeconstraints").select(".text").text("周日上午")
  mergenode.select(".timeconstraints").select(".starttime").property('value',"2018.01.10 9:00")
  mergenode.select(".timeconstraints").select(".conj").text("~")
  mergenode.select(".timeconstraints").select(".endtime").property('value',"2018.01.10 11:00")




  //spatial constraints
  let spatial_constraints = addnode.append("div").classed("spatial_constraints",true)
  let subtitlecontainer = spatial_constraints.append("div").style("height","27px")
  subtitlecontainer.append("div").classed("node_subtitle",true).style("font-size","15px")
  .text("Spatial Constraints Words").style("float","left").style("width","185px")
  subtitlecontainer.append("div").classed("node_subtitle",true).style("font-size","15px")
  .style("float","left").style("width","65px")
  subtitlecontainer.append("div").classed("node_subtitle",true).style("font-size","15px")
  .text("Location List").style("float","left").style("width","95px")


  let spatial_cc = spatial_constraints.append("div").style("height","calc(100% - 27px)")
                .style("position","absolute")
                .style("width","100%")
  spatial_cc.append("div").style("width","205px")
                  .style("float","left")
                  .style("overflow-y","auto")
                  .attr("dir","rtl")
                  .style("height","100%")
              .append("div").classed("spatial_words",true)
                  .style("width","100%")
                  .style("height","100%")
                  .style("background","#ececec")
                  .style("padding","0 0 5px 0")
  spatial_cc.append("svg").style("width","90px")
                  .style("float","left")
                  .style("height","100%").classed("spatial_lines",true)
  spatial_cc.append("div").classed("locationlistdiv",true)
                  .append("div")
                  .classed("spatial_POIs",true)
                  .style("width","100%")
                  .style("height",function(d){
                     let poinumber = 0
                     for(let i =0;i<d.data.length;i++){
                      for(let j =0;j<d.data[i].data.length;j++){
                        poinumber+= d.data[i].data[j].data.length
                      }
                     }
                     return `${poinumber*20}px`
                  })

  renderingwordslist(mergenode)
  renderingPOIlist(mergenode)



  //semantic constraints
  let semantic_constraints = addnode.append("div").classed("semantic_constraints",true)
  semantic_constraints.append("div").classed("node_subtitle",true)
          .style("font-size","15px").text("Semantic Parameters")
  addslide(semantic_constraints,"Business",mergenode)
  addslide(semantic_constraints,"Entertainment",mergenode)
  addslide(semantic_constraints,"Resident",mergenode)
  addslide(semantic_constraints,"Education",mergenode)
  addslide(semantic_constraints,"Industry",mergenode)
  addslide(semantic_constraints,"Traffic",mergenode)
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
              console.log(heightset)
              console.log(d.data)
            return d.data
          },(d,i)=>d.name)

  allwords.exit().remove()
  let addwords = allwords.enter().append("div").classed("Worddiv",true)
                  .style(    "margin", "5px")
  let mergewords = addwords.merge(allwords)
  mergewords.style("top",(d,i)=>`${i*24}px`)

  let addwordtitle=addwords.append("div").classed("wordtitle",true)
  addwords.append("div").classed("wordsubtitle",true).style('visibility','hidden');
  addwords.append("div").classed("nei_words",true).style('visibility','hidden');
  addwordtitle.append('div').classed('hide_nei_words',true).text('+').on('click',show_hide);
    addwordtitle.append('div').classed('real_wordtitle',true).text((d,i)=>d.name);
  mergewords.select(".wordsubtitle").text("Neighbors")
  let allneiwords = mergewords.select(".nei_words").selectAll(".neiwordsdiv").data(function(d){
      return d.data
  })

  allneiwords.exit().remove()
  let addneiwords = allneiwords.enter().append("div").classed("neiwordsdiv",true)
  let mergeneiwords = addneiwords.merge(allneiwords)
  mergeneiwords.text(d=>d.name)
      .style("top",(d,i)=>`${i*24}px`)



}


function renderingPOIlist(mergenode){

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

                   //reorder
                   pois.sort(function(a, b) {
                      return a.poi.index - b.poi.index})
                   
                   return pois
           },d=>d.poi.name)

  allPOI.exit().remove()
  allPOI.enter().append("div").classed("POIrect",true)
    .text(function (d,i){
           return  d.poi.name.length>8 ? d.poi.name.substring(0,8):d.poi.name
    })
    .merge(allPOI)
    .style("top",d=>`${d.order*28}px`)
    .style("background",d=>d.background)
    .style("color",d=>d.color)
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
    d3.select(this).style("z-index",10000);
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
    d3.select(this).style('-webkit-transition-duration','2s');
    next_node.style('-webkit-transition-duration','2s');
   let next_left=parseInt(next_node.style('left'))
   let now_left=next_left - parseInt(d3.select(this).style('width'))-22;

            d3.select(this).style('left', next_left+'px');
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
    d3.select(this).style('-webkit-transition-duration','2s');
    prev_node.style('-webkit-transition-duration','2s');
   let prev_left=parseInt(prev_node.style('left'))
   let now_left=parseInt(d3.select(this).style('width'))+22+prev_left;
   d3.select(this).style('left', prev_left+'px');
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
    d3.select(this).style('-webkit-transition-duration','0s');
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
   // }

    //target_node.style('left', mouse_x);
    //target_node.style('top', mouse_y);
    //target_node.attr('start_x',mouse_x);
    //target_node.attr('start_y',mouse_y);
}




function show_hide(){
    console.log('show_hide');
    let current_val = d3.select(this).text();
    if(current_val=='+')//show
    {
        console.log(this.parentNode.parentNode)
d3.select(this.parentNode.parentNode).select('.nei_words').style('visibility','visible');
        d3.select(this.parentNode.parentNode).select('.wordsubtitle').style('visibility','visible');
d3.select(this).text('-');
//create line
    }
    else{//hide
d3.select(this.parentNode.parentNode).select('.nei_words').style('visibility','hidden');
 d3.select(this.parentNode.parentNode).select('.wordsubtitle').style('visibility','hidden');
d3.select(this).text('+');
jsPlumb.deleteConnectionsForElement( d3.select(this.parentNode.parentNode).select('.nei_words'),{});
    }
}


 function create_line(source,targets) {
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
