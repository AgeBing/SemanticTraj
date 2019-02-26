
// import * as d3 from 'd3';
// import $ from 'jquery';

let nodelist={
  container:d3.select("#Specification_view"),
  data : []
}


nodelist.rendering = function(){
  console.log(nodelist.data)

  for(let i =0;i<nodelist.data.length;i++){
    nodelist.data[i].order = i +1
  }
  let allnode = this.container.selectAll(".condition_node")
    .data(nodelist.data, (d,i)=>d.name)

  allnode.exit().remove()
  let addnode = allnode.enter().append("div")
                      .classed("condition_node",true)
  let mergenode = addnode.merge(allnode)

  mergenode.style("left",d=>`${622*(d.order-1)}px`)

  //title
  let title = addnode.append("div").classed("title",true)
  title.append("div").classed("constraints_order",true)
  title.append("div").classed("text",true)


  mergenode.select(".title").select(".constraints_order").text(d=>d.order)
  mergenode.select(".title").select(".text").text(d=>d.name)



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
  console.log(svg.attr("width"))
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
