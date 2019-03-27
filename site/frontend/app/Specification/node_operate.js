import {getMerge_data,get_data} from "../search/searchbar";



export function add_condition_node(){
   let nodelist= require('../Specification/Node.js')
    nodelist.append_node({name:'',data:[]})
    //nodelist.node_rendering(nodelist.data.length)
}
export function word_tab_start(){
    d3.select(this.parentNode).style('position','absolute').style('z-index',10000)

}
export function word_tab_move(){
console.log(d3.event.sourceEvent.pageX,'----------------')
d3.select(this.parentNode).style('left',(d3.event.sourceEvent.pageX-50)+'px').style('top',(d3.event.sourceEvent.pageY)+'px')
   }

export function word_tab_end(){
    let x=parseInt(d3.select(this.parentNode).style('left'))
    let y=d3.select(this.parentNode).style('top')
    let word=d3.select(this).select('.tab-text').text()
    let left_length=$('#Specification_view').scrollLeft();
    d3.selectAll('.condition_node').each(function(){
        let current_left=parseInt(d3.select(this).style('left'))-left_length
        let current_right=current_left+parseInt(d3.select(this).style('width'));
        if(x>=current_left &&(x<=current_right))
        {
            Add_word(d3.select(this).attr('id'),word)
        }

    })
    d3.select(this.parentNode).style('position','static').style('z-index',0)
}

function Add_word(node_id,word){
    let nodelist= require('../Specification/Node.js')
    let data_order=0
    let node_index=parseInt(node_id.substr(node_id.length-1,1))
    //如果有的话 把该搜索词的标签删掉
    for(let i=0;i<nodelist.data.length;i++)
    {
        let titles=nodelist.data[i].name.split('_')
        if(titles.indexOf(word)!=-1)
        {
            titles.splice(titles.indexOf(word),1)
            if(titles.length==0){
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
            else{
                if(titles.length!=1){
                    getMerge_data(titles.join('_')).then(function(merge_data){
        merge_data.order=nodelist.data[i].order
            nodelist.data[i]=merge_data
        nodelist.node_rendering(merge_data,nodelist.data[i].order)
        })
                }
                else{
                    let data =get_data(titles[0])
        data.order=nodelist.data[i].order
            nodelist.data[i]=data
    nodelist.node_rendering(data,nodelist.data[i].order);
                }
            }
        }
    }
    //得到该搜索词的data覆盖原卡片数据
     for(let i=0;i<nodelist.data.length;i++){
if(nodelist.data[i].order==node_index)
{
    if(nodelist.data[i].name=='')
    {
        let data =get_data(word)
        data.order=node_index
            nodelist.data[node_index-1]=data
    nodelist.node_rendering(data,node_index);
    }
    else{
        //let merge_data = merge(nodelist.data[i].name+"_"+word)
        getMerge_data(nodelist.data[i].name+"_"+word).then(function(merge_data){
        merge_data.order=node_index
            nodelist.data[node_index-1]=merge_data
        nodelist.node_rendering(merge_data,node_index);
        })

    }
    break;
}
     }
}

export function change_time(operate,time){//operate:add,delete
    if(operate=='delete')
        delete_time(time)
    else
        add_time(time)
change_tag_time()
}
function delete_time(time){

    let nodelist= require('../Specification/Node.js')
    let word_time_map={'年':'y','月':'month','日':'d','时':'o','分':'m'}
    let old_time=nodelist.time
    let time_type= word_time_map[time[time.length-1]]
        if(old_time[1].hasOwnProperty(time_type)&&(old_time[1][time_type]==''))//终止的时间包含该时间信息
        {
            delete old_time[1][time_type]
        }
        else
            delete old_time[0][time_type]
    }
function add_time(time){
    let nodelist= require('../Specification/Node.js')
    let word_time_map={'年':'y','月':'month','日':'d','时':'o','分':'m'}
    let old_time=nodelist.time
    let time_type= word_time_map[time[time.length-1]]
        let num=time.substr(0,time.length-1)
    if(num.length==1)
        num='0'+num

        if(old_time[0].hasOwnProperty(time_type)&&(old_time[0][time_type]==''))//起始时间不包含该时间信息
        {
old_time[0][time_type]=num
        }
        else
            old_time[1][time_type]=num
    }
function change_tag_time(){
    let nodelist= require('../Specification/Node.js')
    let str_time=['','']
    let year_order=['y','month','d']

    nodelist.time.forEach(function(time,index){
        year_order.forEach((t)=>{
        if(time.hasOwnProperty(t)&&(time[t]!=''))
        str_time[index]+=time[t]
        if(t=='d')
            str_time[index]+=' '
        else
            str_time[index]+='.'
    })
    if(time.hasOwnProperty('o')&&(time['o']!=''))
    {
        str_time[index]+=(time['o']+':')
        if(time.hasOwnProperty('m')&&(time['m']!=''))
             str_time[index]+=time['m']
        else
             str_time[index]+='00'
    }
    })
    d3.selectAll('.starttime')
        .property('value', str_time[0])
    d3.selectAll('.endtime')
        .property('value', str_time[1])
}

