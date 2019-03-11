import { line_data ,renderingPOIlist} from '../Specification/Node.js'

export let path_colorscale=d3.scaleLinear()
                    .range([d3.rgb("rgb(255, 255, 255)"), d3.rgb("rgb(132,60,12)")]);
export let path_colorsdomain={max:0,min:0}
export function drag_start(){
    d3.select(this).style("z-index",10000)
    .style('-webkit-transition-duration','0s');
}
export function newdrag() {
    let nodelist = require('../Specification/Node.js')
     let dx = d3.event.dx//, dy = d3.event.dy;
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
        if(next_node!=null&&((parseInt(next_node.style('left'))-parseInt(d3.select(this).style('left')))<parseInt(d3.select(this).style('width'))/2))
        {
           let next_left=parseInt(next_node.style('left'))
           let now_left=next_left - parseInt(d3.select(this).style('width'))-22;
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
export  function drag_end(){
    let nodelist = require('../Specification/Node.js')
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



export function show_hide() {
    let current_val = d3.select(this).text();
    let nei_words= d3.select(this.parentNode.parentNode).select('.nei_words')
    let wordsubtitle=d3.select(this.parentNode.parentNode).select('.wordsubtitle')
    let index = d3.select(this.parentNode.parentNode).attr('id').replace('Worddiv', 'condition_node');
    if (current_val == '+')//show
    {
        nei_words.style('visibility', 'visible');
        wordsubtitle.style('visibility', 'visible');
        d3.select(this).text('-');

        index=index.substr(index.length-1,1)
        get_left_nodes(index);//create line
    }
    else {//hide
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
        nei_words.style('visibility', 'hidden');
        wordsubtitle.style('visibility', 'hidden');
        d3.select(this).text('+');
        initial_line(index);
    }
}
//每次滚动都要调用该方法

export function initial_line(index) {
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
right_nodes.map((x,y)=>{
    let right_nodename=d3.select(x).text();
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
            //d3.select('#' + index).select('.spatial_lines').selectAll('path').remove();
            //d3.select('#' + index).select('.spatial_lines').selectAll('circle').remove();
            let spatial_lines = d3.select('#' + index).select('.spatial_lines').selectAll('path')
                .data(current_line_dta)
                .enter()
                spatial_lines.append('path')
                .attr('d', function (d) {
                    let left_y = parseInt(d3.select(d.left).attr('current_top')) + parseInt(d3.select(d.left).style('height')) / 2
                    let right_x = parseInt(d3.select(this.parentNode).style('width'))
                    let right_y = parseInt(d3.select(d.right).style('top'))-$('#'+locationlistdiv_id).scrollTop() + parseInt(d3.select(d.right).style('height')) / 2
                    console.log(left_y , right_x,right_y,'x,y-----------')
                    return 'M -0 ' + ' ' + left_y + ' ' + 'Q ' + (0 + right_x) / 3 + ' ' + (left_y + right_y) / 3 + ' ' + right_x + ' ' + right_y;
                })
                .attr('stroke', function(d){ return path_colorscale(d.relation_val)})
                .attr('stroke-width', 3)
                .attr('fill', 'none')
            .attr('relation_val',function(d){return d.relation_val;})
                spatial_lines.append('circle')
                .attr('cx','0')
                .attr('cy',function(d){return parseInt(d3.select(d.left).attr('current_top')) + parseInt(d3.select(d.left).style('height')) / 2})
                .attr('r','3')
                .attr('fill','#b9b9b9')
                  refresh_path_color();//对已存在的线进行重新刷新颜色比例尺
        } else {
            d3.select('#' + index).select('.spatial_lines').selectAll('path').remove();
             d3.select('#' + index).select('.spatial_lines').selectAll('circle').remove();
        }
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
     path_colorsdomain.min=d3.min(min_ralation_vals)
     path_colorsdomain.max=d3.max(max_ralation_vals)
    path_colorscale.domain([path_colorsdomain.min,path_colorsdomain.max])
        d3.selectAll('.spatial_lines').selectAll('path').attr('stroke', function(d){
return path_colorscale(d3.select(this).attr('relation_val'));
    })
    }
export function get_left_nodes(index) {//index:1,2,3...
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
        initial_line('condition_node'+index);
    }


export function decrease_locationlist(){
    let nodelist = require('../Specification/Node.js')
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
       initial_line('condition_node'+current_conditionnode_order);
}
    }
export function increase_locationlist(){
    let nodelist = require('../Specification/Node.js')
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
        initial_line('condition_node'+current_conditionnode_order);
}
}



/*export function get_right_nodes(order){
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
    }*/

/*
export function create_line111(index) {
    let nodelist = require('../Specification/Node.js')
        let left_nodes = line_data[index].left;
        let right_nodes = line_data[index].right;
        if (left_nodes.length > 0 && right_nodes.length > 0) {
            let current_line_dta = [];
            let data_num=index.substr(index.length-1,1);
            let second_third_index={};

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
    }*/