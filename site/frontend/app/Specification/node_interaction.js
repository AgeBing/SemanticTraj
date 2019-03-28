import { line_data ,renderingPOIlist,POI_colorscale,poi_colordomain} from '../Specification/Node.js'

export let path_colorscale=d3.scaleQuantize()
    .range(['#fef0d9','#fdd49e','#fdbb84','#fc8d59','#e34a33','#b30000'])
                                // .range(['#fc4e2a','#fd8d3c','#feb24c','#fed976','#ffeda0','#ffffcc']);
export let path_colorsdomain={max:0,min:0}
export function drag_start(){
    d3.select(this.parentNode).style("z-index",10000)
    .style('-webkit-transition-duration','0s');
}
export function newdrag() {
    let nodelist = require('../Specification/Node.js')
    let condition_node=this.parentNode
     let dx = d3.event.sourceEvent.movementX
   let prex = parseInt(d3.select(condition_node).style('left'));
    if(((dx+prex)<=0))
    {
        d3.select(condition_node).style('left', prex);
    }
    else{
        d3.select(condition_node).style('left', (dx+prex) + 'px');
        let current_id=d3.select(condition_node).attr('id'),
            current_location= nodelist.order.indexOf(current_id)

        let next_node=null;
        if(current_location+1<nodelist.order.length){
            next_node=d3.select('#'+nodelist.order[current_location+1]);
        }
        let prev_node=null;
        if(current_location-1>=0){
            prev_node=d3.select('#'+nodelist.order[current_location-1]);
        }
        if(next_node!=null&&((parseInt(next_node.style('left'))-parseInt(d3.select(condition_node).style('left')))<parseInt(d3.select(condition_node).style('width'))/2))
        {
           let next_left=parseInt(next_node.style('left'))
           let now_left=next_left - parseInt(d3.select(condition_node).style('width'))-22;
                    next_node.style('left',now_left+'px');
                    let current_num=d3.select(this).select('.constraints_order').text();
                    let next_num = next_node.select('.title').select('.constraints_order').text();
                    d3.select(this).select('.constraints_order').text(next_num);
                    next_node.select('.title').select('.constraints_order').text(current_num);
                    //d3.select(this).attr('start_x',target_node.style('left'));
                    let temp=nodelist.order[current_location];
                    nodelist.order[current_location]=nodelist.order[current_location+1];
                    nodelist.order[current_location+1]=temp;
        }
        else{
            if(prev_node!=null&&((parseInt(d3.select(condition_node).style('left')) - parseInt(prev_node.style('left')))<parseInt(d3.select(condition_node).style('width'))/2))
            {
               let prev_left=parseInt(prev_node.style('left'))
               let now_left=parseInt(d3.select(condition_node).style('width'))+22+prev_left;
                        prev_node.style('left',now_left+'px');
                        let current_num=d3.select(this).select('.constraints_order').text();
                        let prev_num = prev_node.select('.title').select('.constraints_order').text();
                        d3.select(this).select('.constraints_order').text(prev_num);
                        prev_node.select('.title').select('.constraints_order').text(current_num);
                        //d3.select(this).attr('start_x',target_node.style('left'));
                        let temp=nodelist.order[current_location];
                        nodelist.order[current_location]=nodelist.order[current_location-1];
                        nodelist.order[current_location-1]=temp;
            }
        }
    }



}
export  function drag_end(){
    let nodelist = require('../Specification/Node.js')
    let condition_node=this.parentNode
    d3.select(condition_node).style('-webkit-transition-duration','0.5s').style("z-index",0);
    let current_id=d3.select(condition_node).attr('id');
        let current_location=0;
        for( let i=0;i<nodelist.order.length;i++)
        {
            if(current_id==nodelist.order[i])
            {
                current_location=i;
                break;
            }
        }
d3.select('#'+nodelist.order[current_location]).style('left', current_location*(parseInt(d3.select(condition_node).style('width'))+22)+"px");
        d3.select(condition_node).style('z-index',0);
}



export function show_hide() {
    //let real_word=d3.select(this.parentNode).select('.real_wordtitle')//搜索词本身
    let nei_words= d3.select(this.parentNode.parentNode).select('.nei_words')
    let wordsubtitle=d3.select(this.parentNode.parentNode).select('.wordsubtitle')
    let index = d3.select(this.parentNode.parentNode.parentNode.parentNode).attr('id').replace('spatial_left', 'condition_node');
    index=index.substr(index.length-1,1)
    if (d3.select(this).attr("isshow") =="false")//show
    {
        /*nei_words.style('visibility', 'visible');
        wordsubtitle.style('visibility', 'visible');*/
        nei_words.style('display', 'block');
        wordsubtitle.style('display', 'block');
        d3.select(this).style("background-image","url(../icon/tri.png)").attr("isshow",true);

        get_left_nodes(index);//create line
    }
    else {
        nei_words.style('display', 'none');
        wordsubtitle.style('display', 'none');
        d3.select(this).style("background-image","url(../icon/trijian.png)").attr("isshow",false);
        get_left_nodes(index);
        //initial_line(index);
    }
}
//每次滚动都要调用该方法

export function initial_line(index) {//condition_node1
    let locationlistdiv_id=index.replace('condition_node','locationlistdiv');
    let nodelist = require('../Specification/Node.js')
        let left_nodes = line_data[index].left;
        let right_nodes = []
    d3.select('#'+locationlistdiv_id).select('.spatial_POIs').selectAll('.POIrect').each(function(){right_nodes.push(this);})
        if (left_nodes.length > 0 && right_nodes.length > 0) {
            let current_line_dta = [];
            let data_num=index.substr(index.length-1,1);
            let second_third_index={};

            let max_val=0;
            let min_val=0;
            for (let i = 0; i < left_nodes.length; i++) {
                let second_title=''
                let third_title=''
                 if(String($(left_nodes[i]).attr('class'))=='real_wordtitle')
                 {
                     second_title=d3.select(left_nodes[i]).text()
                     second_title=second_title.substr(0,second_title.length-1)//title后面会有个X，把它删掉
                     third_title=second_title
                 }
                else
                 {second_title=d3.select(left_nodes[i].parentNode.parentNode).select('.wordtitle').select('.real_wordtitle').text();
                 second_title=second_title.substr(0,second_title.length-1)//title后面会有个X，把它删掉
                third_title = d3.select(left_nodes[i]).select('.neiwordsdiv_word').text();
                 }


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
right_nodes.map((x,y)=>{
    let right_nodename=d3.select(x).select('.POIname').text();
    for(let n=0;n<forth_data.length;n++)
    {
        if(right_nodename==forth_data[n].name)
        {
            if(max_val<forth_data[n].relation_val)
                max_val=forth_data[n].relation_val
            if(min_val==0||min_val>forth_data[n].relation_val)
                min_val=forth_data[n].relation_val
            current_line_dta.push({left:left_nodes[i],right:x,relation_val:forth_data[n].relation_val});
        }
    }

})
            }
           path_colorsdomain.max=max_val>path_colorsdomain.max?max_val:path_colorsdomain.max
            path_colorsdomain.min=(min_val<path_colorsdomain.min||path_colorsdomain.min==0)?min_val:path_colorsdomain.min
            path_colorscale.domain([path_colorsdomain.min, path_colorsdomain.max]);
            d3.select('#'+index).attr('max_relation_val',max_val).attr('min_relation_val',min_val)
            d3.select('#' + index).select('.spatial_lines').selectAll('path').remove();
            d3.select('#' + index).select('.spatial_lines').selectAll('circle').remove();
            let spatial_lines = d3.select('#' + index).select('.spatial_lines').selectAll('path')
                .data(current_line_dta)
                .enter()
                spatial_lines.append('path')
                .attr('d', function (d) {
                    let left_y = parseInt(d3.select(d.left).attr('current_top')) + parseInt(d3.select(d.left).style('height')) / 2
                    let right_x = parseInt(d3.select(this.parentNode).style('width'))+1
                    let right_y = parseInt(d3.select(d.right).style('top'))+ parseInt(d3.select(d.right).style('height')) / 2 -4//-$('#'+locationlistdiv_id).scrollTop()
                    let path_way='M 8 ' + left_y + ' ' + 'C ' +(8 +(right_x)/3)+ ' ' +(left_y)+' '+ (8 + right_x*2/3)+' '+right_y + ' ' + right_x + ' ' + right_y;
                     return path_way
                })
                .attr('stroke', function(d){ return path_colorscale(d.relation_val)})
                .attr('stroke-width', 2)
                .attr('fill', 'none')
            .attr('relation_val',function(d){return d.relation_val;})
            .attr('initial_y',function(d){return parseInt(d3.select(d.right).style('top'))+ parseInt(d3.select(d.right).style('height')) / 2;})//-$('#'+locationlistdiv_id).scrollTop()
             .attr('start_y',function(d){parseInt(d3.select(d.left).attr('current_top')) + parseInt(d3.select(d.left).style('height')) / 2;})
                spatial_lines.append('circle')
                .attr('cx','5')
                .attr('cy',function(d){return parseInt(d3.select(d.left).attr('current_top')) + parseInt(d3.select(d.left).style('height')) / 2})
                .attr('r','2')
                .attr('stroke-width','2')
                .attr('stroke','rgb(46,117,182)')
                .attr('fill','white')
            //.attr('z-index',1000)
                  refresh_path_color();//对已存在的线进行重新刷新颜色比例尺
        } else {
            d3.select('#' + index).select('.spatial_lines').selectAll('path').remove();
             d3.select('#' + index).select('.spatial_lines').selectAll('circle').remove();
        }
    }

    export function refresh_line(order){//locationlistdiv1
    let top_height=$('#locationlistdiv'+order).scrollTop();
    $('#locationlistdiv'+order).parent().find('path').each(function(index,e){
let d=$(e).attr('d').trim().split(' ');//["M", "-0", "56.5", "C", "30", "199.5","30", "199.5", "90", "542"]
        d[d.length-1]=parseFloat($(e).attr('initial_y'))-top_height;//right_y,d[2]:left_y
        d[d.length-3]=d[d.length-1]
       $(e).attr('d',d.join(' '))
            })

    }

 export function refresh_path_color(){
    let max_ralation_vals=[];
    d3.selectAll('.condition_node').each(function(){
        max_ralation_vals.push(d3.select(this).attr('max_relation_val'));
    })
        let min_ralation_vals=[];
    d3.selectAll('.condition_node').each(function(){
        min_ralation_vals.push(d3.select(this).attr('min_relation_val'));
    })
     if(min_ralation_vals.length>0){
     path_colorsdomain.min=d3.min(min_ralation_vals)
     path_colorsdomain.max=d3.max(max_ralation_vals)
    path_colorscale.domain([path_colorsdomain.min,path_colorsdomain.max])
     d3.select('#Relevance_Information').select('.content').select('.max').text(parseFloat(path_colorsdomain.max).toFixed(1))
     d3.select('#Relevance_Information').select('.content').select('.min').text(parseFloat(path_colorsdomain.min).toFixed(1))
        d3.selectAll('.spatial_lines').selectAll('path').attr('stroke', function(d){
return path_colorscale(d3.select(this).attr('relation_val'));
    })
    }
    else{
        d3.select('#Relevance_Information').select('.content').select('.max').text(0)
     d3.select('#Relevance_Information').select('.content').select('.min').text(0)
     }
}

export function refresh_POI_length(){
    let max_vals=[];
    d3.selectAll('.condition_node').each(function(){
        let max=d3.select(this).attr('max_val')
        if(max!=null)
        max_vals.push(max);
    })
        let min_vals=[];
    d3.selectAll('.condition_node').each(function(){
        let min=d3.select(this).attr('min_val')
        if(min!=null)
        min_vals.push(min);
    })
     if(min_vals.length>0) {
         poi_colordomain.min = d3.min(min_vals)
         poi_colordomain.max = d3.max(max_vals)
         d3.selectAll('.POIrect').each(function(){
             d3.select(this).select('.POIdiv').style('width', function () {
             return parseFloat(d3.select(this.parentNode).attr('val'))/poi_colordomain.max*60+"px"
         })
         })
     }
     else{
         poi_colordomain.min = 0
         poi_colordomain.max = 0
     }
}
export function get_left_nodes(index) {//index:1,2,3...
        line_data['condition_node'+index].left = [];
        let top_height = $('#spatial_left' + index).scrollTop();
        let bottom_height = top_height + parseInt($('#spatial_left' + index)[0].getBoundingClientRect().height);
        d3.select('#spatial_left' + index).select('.spatial_words').selectAll('.Worddiv')//主题词div集合
            .each(function (d,i) {
                 $(this).find('.real_wordtitle').each(function(){
                 let current_element_top = $(this).offset().top-$(this.parentNode.parentNode.parentNode).offset().top//parseInt(d3.select(this).style('top')) + top_length;
                        let element_height = $(this)[0].getBoundingClientRect().height;
                        if ((current_element_top >= top_height && (current_element_top + element_height / 2) <= bottom_height) || (current_element_top < top_height && ((top_height - current_element_top) < element_height / 2))) {
                            d3.select(this).attr('current_top', current_element_top - top_height);
                            line_data['condition_node'+index].left.push(this);
                        }
                })


                let order=$(this).attr('id')
                order=parseInt(order.substr(order.length-1,1))
                let top_length=0;
                for(let i=1;i<=order;i++)
                {
top_length=top_length+$("#Worddiv"+i)[0].getBoundingClientRect().height///.outerHeight(true)//包括margin
                }
                   top_length =top_length-parseInt($(this).find('.nei_words')[0].getBoundingClientRect().height)//+$(this).attr('top');
                let show_hide = $(this).find('.hide_nei_words').text()//.innerHTML;
                if (show_hide == '-') {
                    $(this).find('.neiwordsdiv').each(function () {
                        let current_element_top = $(this).offset().top-$(this.parentNode.parentNode.parentNode).offset().top//parseInt(d3.select(this).style('top')) + top_length;
                        let element_height = $(this)[0].getBoundingClientRect().height;
                        if ((current_element_top >= top_height && (current_element_top + element_height / 2) <= bottom_height) || (current_element_top < top_height && ((top_height - current_element_top) < element_height / 2))) {
                            d3.select(this).attr('current_top', current_element_top - top_height);
                            line_data['condition_node'+index].left.push(this);
                        }
                    })
                }
            })
        //console.log(top_height,bottom_height,line_data[index].left,'scroll move_height---------------------')
        initial_line('condition_node'+index);
        refresh_line(index);
    }


export function decrease_locationlist(){
    let nodelist = require('../Specification/Node.js')
let current_max=parseInt(d3.select(this.parentNode).select('.node_num').property('value'));
if(current_max-1>=d3.select(this.parentNode).select('.node_num').attr('min'))
{
    d3.select(this.parentNode).select('.node_num').property('value',current_max-1)
let condition_nodeid=d3.select(this.parentNode.parentNode.parentNode).attr('id');
let current_conditionnode_order = condition_nodeid.substr(condition_nodeid.length-1,1)
        let current_data=[]
        for(let i=0;i<nodelist.data.length;i++)
            if(nodelist.data[i].order==current_conditionnode_order)
                current_data=nodelist.data[i]
renderingPOIlist(d3.select('#locationlistdiv'+current_conditionnode_order).data([current_data]),current_max-1);
       initial_line('condition_node'+current_conditionnode_order);
       refresh_line(current_conditionnode_order);
}
    }
export function increase_locationlist(){
    let nodelist = require('../Specification/Node.js')
let current_max=parseInt(d3.select(this.parentNode).select('.node_num').property('value'));
if(current_max+1<=d3.select(this.parentNode).select('.node_num').attr('max'))
{
    d3.select(this.parentNode).select('.node_num').property('value',current_max+1)
    let condition_nodeid=d3.select(this.parentNode.parentNode.parentNode).attr('id');
let current_conditionnode_order = condition_nodeid.substr(condition_nodeid.length-1,1)
        let current_data=[]
        for(let i=0;i<nodelist.data.length;i++)
            if(nodelist.data[i].order==current_conditionnode_order)
                current_data=nodelist.data[i]
renderingPOIlist(d3.select('#locationlistdiv'+current_conditionnode_order).data([current_data]),current_max+1);
        initial_line('condition_node'+current_conditionnode_order);
         refresh_line(current_conditionnode_order);
}
}
