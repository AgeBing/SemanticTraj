import $ from "jquery";
import {addParticle, get_data, getMerge_data, textData} from "../search/searchbar";

export function word_tab_start(){
    //d3.select(this.parentNode).style('position','absolute').style('z-index',10000)
}
export function word_tab_move(){
    let left=$(this.parentNode.parentNode)[0].getBoundingClientRect().left+$(this.parentNode.parentNode.parentNode)[0].getBoundingClientRect().left
    let top=$(this.parentNode.parentNode)[0].getBoundingClientRect().top+$(this.parentNode.parentNode.parentNode)[0].getBoundingClientRect().top
    if((d3.event.sourceEvent.pageX-left)>10||(d3.event.sourceEvent.pageY-top)>10)
    d3.select(this.parentNode).style('position','absolute').style('z-index',10000).style('left',(d3.event.sourceEvent.pageX-left)+'px').style('top',(d3.event.sourceEvent.pageY-top)+'px')
   }

export function word_tab_end(){
    let x=parseInt(d3.select(this.parentNode).style('left'))
    let y=parseInt(d3.select(this.parentNode).style('top'))
    let word=d3.select(this).select('.tab-text').attr('value')
    let left_length=$('#Specification_view').scrollLeft();
    d3.selectAll('.condition_node')
        .each(function(){
            let current_left=parseInt(d3.select(this).style('left'))-left_length
            let current_right=current_left+parseInt(d3.select(this).style('width'));
            let current_top=$(this)[0].getBoundingClientRect().top
            if(x>=current_left &&(x<=current_right)&&(y>=current_top))
                Add_word(d3.select(this).attr('id'),word)
    })
    d3.select(this.parentNode).style('position','static').style('z-index',0)
        .style('left','auto')//$(this.parentNode)[0].getBoundingClientRect().left)
        .style('top','auto')//$(this.parentNode)[0].getBoundingClientRect().top)
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
                    return;
                 if(node_index>delete_node_id)
                     node_index--;
                 nodelist.delete_node_byOrder(delete_node_id);
            }
            else{
                if(titles.length!=1){
                    getMerge_data(titles.join('_'))
                        .then((merge_data)=>{
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
function delete_time(){

    let nodelist= require('../Specification/Node.js')
    if(nodelist.time[1]['y']!='' ||(nodelist.time[1]['month']!='')||(nodelist.time[1]['d']!=''))
        nodelist.time[1]={'y':'','month':'','d':'','o':'','m':''}
    else
        nodelist.time[0]={'y':'','month':'','d':'','o':'','m':''}
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
        old_time[0][time_type]=num
    else
        old_time[1][time_type]=num
    }
//为所有标签添加新的时间约束
function change_tag_time(){
    let str_time=get_time_number()
    d3.selectAll('.starttime')
        .property('value', str_time[0])
        .each(function(){
            d3.select(this.parentNode)
                .select('.textcon')
                .select('.text')
                .text(get_time_word())
        })
    d3.selectAll('.endtime')
        .property('value', str_time[1])
}
//为当前标签添加时间约束
export function change_cur_time(){
    let str_time=get_time_number()
    d3.select(this).select('.starttime')
        .property('value', str_time[0])
        .each(function(){
            d3.select(this.parentNode)
                .select('.textcon')
                .select('.text')
                .text(get_time_word())
        })
    d3.select(this)
        .select('.endtime')
        .property('value', str_time[1])
}
//将时间词合并并更新时间约束
export function merge_time_tab(){
    let order=['年','月','日']
    let key=['y','month','d']
    let time_value=''
    let nodelist= require('../Specification/Node.js')
    key.forEach((d,index)=>{
        if(nodelist.time[0].hasOwnProperty(d)&&(nodelist.time[0][d]!=''))
            time_value+=(nodelist.time[0][d]+order[index])
     })
    let merge=false
    d3.select('.search-container').selectAll('.word-tab')
         .each(function(){
             let word_type = d3.select(this).select('.tab-image-container').select('img').attr('word_type')
              let v= d3.select(this).select('.tab-text-container').select('input').attr('value')
             if(word_type=='t')
             {
                 if(!merge)
                 {
                    d3.select(this).select('.tab-text-container').select('input').attr('value',time_value).style('width',time_value.length*10+"px")
                     textData.forEach((d)=>{
                                    if(d[0]==v)
                                        d[0]=time_value
                                     })
                     merge=true
                 }
                 else
                 {
                     d3.select(this).remove()
                     textData.forEach((d,index)=>{
                        if(d[0]==v)
                            textData.splice(index,1)
                    })
                 }
             }
         })
}
//用户修改搜索词后对tab进行修改，对应的标签更新（若新词无标签则原标签删除),若原搜索词无对应标签且新词为n，则建立新的标签
export function change_tab(old_name,new_name){
         let find=false
         textData.forEach((d,index)=>{
             if(d[0]==old_name &&!find)
             {
                 let nodelist = require('../Specification/Node.js')
                 if(new_name=='')//删除该搜索词并删除标签
                 {
                     textData.splice(index,1)
                     addParticle(new_name)
                     nodelist.delete_node_byName(old_name);
                 }
                else
                 {//更新标签
                     d[0]=new_name
                     let se_find=false
                     nodelist.data.forEach((d,index)=>{
                        if(d.name==old_name &&(!se_find))
                        {
                            d.name=new_name
                            addParticle(new_name,[index,d.order])
                            se_find=true
                        }

                    })
                     if(!se_find)
                        {
                            nodelist.delete_node_byName(old_name);
                            addParticle(new_name)
                        }
                 }
                    find=true;
                    //为新word创建标签卡
             }
         })

}
//得到数字形式的时间约束
function get_time_number(){
    let nodelist= require('../Specification/Node.js')
    let year_order=['y','month','d']
    let str_time=['','']
    nodelist.time.forEach((time,index)=>{
        year_order.forEach((t)=>{
        if(time.hasOwnProperty(t)&&(time[t]!=''))
        {
            str_time[index]+=time[t]
            if(t!='d')
                str_time[index]+='.'
        }
        })
        str_time[index]+=' '
        if(str_time[1]=='')
            str_time[1]=str_time[0].split(' ')[0]+' '
        if(time.hasOwnProperty('o')&&(time['o']!=''))
        {
            str_time[index]+=(time['o']+':')
            if(time.hasOwnProperty('m')&&(time['m']!=''))
                 str_time[index]+=time['m']
            else
                 str_time[index]+='00'
        }
        else
         {
            if(str_time[0].split(' ')[0]!='')
            {
                if(index==0)
                    str_time[index]+='00:00'
                else
                    str_time[index]+='23:59'}
        }
    })
    return str_time
}
//得到文字形式的时间约束
function get_time_word(){
    let nodelist= require('../Specification/Node.js')
    let time_w=''
    if(nodelist.time[0]['y']!='')
        time_w+=(nodelist.time[0]['y']+"年")
    if(nodelist.time[0]['month']!='')
        time_w+=(nodelist.time[0]['month']+"月")
    if(nodelist.time[0]['d']!='')
        time_w+=(nodelist.time[0]['d']+"日")
    return time_w
}
