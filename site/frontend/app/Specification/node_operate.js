import {node_rendering} from "./Node.js";
import {
    decrease_locationlist,
    drag_end,
    drag_start, get_left_nodes,
    increase_locationlist,
    initial_line,
    newdrag,
    refresh_line
} from "./node_interaction";
import {appendParamWidges} from "./param";
import {bindTimeChangeEvent} from "./time";


export function add_condition_node(){
   let nodelist= require('../Specification/Node.js')
    nodelist.append_node({name:'',order:(nodelist.data.length+1),data:''})
    //nodelist.node_rendering(nodelist.data.length)
}

export function word_tab_start(){
//d3.select(this).style('position','absolute').style('left',d3.event.x+'px').style('top',d3.event.y+'px').style('z-index',10000)

}
export function word_tab_move(){
d3.select(this).style('position','absolute').style('left',d3.event.x+'px').style('top',d3.event.y+'px').style('z-index',10000)
    //d3.select(this).style('left',d3.event.x+'px');
   // d3.select(this).style('top',d3.event.y+'px');
   }

export function word_tab_end(){
    let x=parseInt(d3.select(this).style('left'))
    let y=d3.select(this).style('top')
    let word=d3.select(this).select('.tab-text-container').select('.tab-text').text()
    let left_length=$('#Specification_view').scrollLeft();
    d3.selectAll('.condition_node').each(function(){
        let current_left=parseInt(d3.select(this).style('left'))-left_length
        let current_right=current_left+parseInt(d3.select(this).style('width'));
        let current_top=parseInt(d3.select(this).style('top'))-left_length
            console.log(current_left,current_right,x,'left_length-----------------------------')
        if(x>=current_left &&(x<=current_right))
        {
            Add_word(d3.select(this).attr('id'),word)
        }

    })
    d3.select(this).style('position','static')
}

function Add_word(node_id,word){
    let nodelist= require('../Specification/Node.js')
    let data_order=0
    let node_index=parseInt(node_id.substr(node_id.length-1,1))
    console.log(word,'word---------------')
    //如果有的话 把该搜索词的标签删掉
    for(let i=0;i<nodelist.data.length;i++)
    {
        if(nodelist.data[i].name==word)
        {
            data_order=i;
            let delete_node_id=nodelist.data[i].order//搜索词原来的标签id的order部分
            if(node_index==delete_node_id)
            {return;}
             if(node_index>delete_node_id)
             {
                 node_index--;
             }
                 nodelist.delete_node_byOrder(delete_node_id);
        }
    }
    //得到该搜索词的data覆盖原卡片数据
     for(let i=0;i<nodelist.data.length;i++){
if(nodelist.data[i].order==node_index)
{
    if(nodelist.data[i].name=='')
    {
    nodelist.node_rendering(get(word),node_index);
    }
    else{
        let merge_data = merge(nodelist.data[i].name+"_"+word)
        merge_data.order=node_index
        nodelist.node_rendering(merge_data,node_index);
    }
    break;
}
     }
    /*nodelist.data.map((x,y)=>{
        console.log(x.name,'x-----------------')
        if(x.name==word)
        {data_order=y;}
        /!*if(x.order==node_id.substr(node_id.length-1,1))
        {
            //x=search(x.name+"_"+word);
            console.log(x.order,'x.order-----------')
data_order=x.order;
        }*!/
    })*/

     //nodelist.node_rendering(node_index);

    console.log(node_index,data_order,d3.select('#'+node_id),'d3.select(this)------------------------')
}



