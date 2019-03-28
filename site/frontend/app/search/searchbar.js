//import * as d3 from 'd3';
import * as QueryUtil from './queryutil'
import $ from 'jquery';
import * as DataManager from './datamanager.js';



import {
  setGlobalTrajData ,
  MockSearchSite
} from '../app.js'
import {
    word_tab_start,
  word_tab_move,
  word_tab_end,
    change_time,
    change_tab,
} from "../Specification/node_operate";
import {draw as drawPoiInMap, remove as removePoiInMap} from "../map/poi";

export let textData = []

let name2POIMap = new Map()

let tag_diff_data = {}

let filter_words=['查询','经过','的','轨迹','后']

let word_img={'n':'../assets/icons/POI.svg','t':'../assets/icons/time.svg','o':'../assets/icons/prep.svg'}
export function getMerge_data(_name) {
  console.log(_name)
  let _textData = textData.slice()
  _textData.push([_name, 'cc'])
  if (!tag_diff_data.hasOwnProperty(_name))
    tag_diff_data[_name] = 'cc'
  console.log(_textData)
  return QueryUtil.get_poi_layer(_textData)
    .then(results => {
      results.forEach((poi) => {
        let {
          name,
          data
        } = poi
        name2POIMap.set(name, {
          name,
          data
        })
      })
    })
    .then(() => {
      return name2POIMap.get(_name)
    })

}

export function get_data(name) {
  return name2POIMap.get(name)
}



export function init() {
  const searchInput = d3.select('#input-wrapper')
  const button = d3.select('#search-button')
  addInputListener(searchInput);
  addSearchListener(button);
}


function addInputListener(o) {
  o.on('compositionstart', function() {
    // 拼音开始，暂不处理
  })

  o.on('compositionend', function() {
    // 拼音结束
    addParticle()
  })

  o.on("keyup", function(e) {
    if (!e) {
      e = window.event;
    }
    // 13：回车，32：空格，8：删除
    if (e.keyCode == "13" || e.keyCode == "32") { //检查是否已经输入了该词

      addParticle()

    } else if (e.keyCode == '8') {
      const nowText = $('#search-input-text').val().trim()

      if (nowText.length == 0) {
        //只有删除这个词才会更新
        // get_participle('',false)
        removeParticle()
      } else {
        // get_participle(nowText)
      }
    }
  })
}



export function addParticle(change_name='',param=[]) {
  // console.log('add')
    let name = ''
    let rawText = ''
    if(change_name=='')
    {
         name = $('#search-input-text').val()
        rawText = textData.map(d => d[0]).join('') + name;
    }
    else
    {
        name=change_name
        rawText = textData.map(d => d[0]).join('')
    }

  QueryUtil.get_participle(rawText)
    .then(o => {
      o = o.filter(d => d[0].trim().length > 0)//&&(filter_words.indexOf(d[0])==-1))
         let nodelist= require('../Specification/Node.js')
              nodelist.time=[{'y':'','month':'','d':'','o':'','m':''},{'y':'','month':'','d':'','o':'','m':''}]
      o.forEach((d,i)=>{
if(filter_words.indexOf(d[0])!=-1)
  o[i][1]='o'
          if(d[1]=='t')
          {
              change_time('add',d[0])
          }
      })
      textData = o; // 获取词性
      createTabs(o)
      return o
    })
    .then(o => {
      // 只有名称才会被添加
        let find=false;
      o.forEach((d) => {

        if ((d[0] == name && (d[1].indexOf('n')!= -1  || d[1] =='id')) &&(!find)) {

            if(change_name=='')
                addPOI(name);
            else
            {
                addPOI(name,param)
            }
          find=true;
        }
      })
    })
    .then(() => {
      $('#search-input-text').val('')
    })

}

function removeParticle() {
  console.log('rm')
    let remove_wod=textData.pop()
  let name = remove_wod[0]
    if(remove_wod[1]=='t')
        change_time('delete',remove_wod)
  const rawText = textData.map(d => d[0]).join('');
  QueryUtil.get_participle(rawText) // 获取词性
    .then(o => {
      o = o.filter(d => d[0].trim().length > 0)
      textData = o;
      createTabs(o)
    })
    .then(o => {
      let nodelist = require('../Specification/Node.js')
      nodelist.delete_node_byName(name);
    })
}



function addPOI(_name,param=[]) {//append or insert:
    let nodelist= require('../Specification/Node.js')
                nodelist.data.forEach((d,index)=>{
                    if(d.name==name)
                        addPOI(name,index,d.order)
                })
     for(var i=0; i<textData.length; i++){
            for(var j=i+1; j<textData.length; j++){
                if(textData[i][0]==textData[j][0]){         //第一个等同于第二个，splice方法删除第二个
                    textData.splice(j,1);
                    j--;
                }
            }
        }

  //数组去重//当前元素，在原始数组中的第一个索引==当前索引值，否则返回当前元素
  QueryUtil.get_poi_layer(textData)
    .then(results => {
      console.log(results)
      results.forEach((poi) => {
        let {
          name,
          data
        } = poi
        if (_name == name) {
          let nodelist = require('../Specification/Node.js')
            nodelist.append_node({
                    name,
                    data
                  },param)
        }

        name2POIMap.set(name, {
          name,
          data
        })
      })
    })
}



// query button   查询按钮监听click事件，首先查询符合条件的轨迹，然后查询POI的层次信息
function addSearchListener(object) {

  object.on('click', function(d, i) {
    console.log('Start Getting Data ...')
    let t1 = new Date().getTime(),
        nodelist = require('../Specification/Node.js'),
        sites_arr = []
    // 按照顺序 插入
    let names = []
    nodelist.order.forEach((d) => {
      //  d = >  condition_node1 、condition_node2
      let name = d3.select('#' + d).select('.title').select('.text').text()
      names.push(name)
      let pois = nodelist.searchSiteList.get(name)
      let sites = pois.map((p) => {
        return p.poi.site_id
      })


      sites_arr.push(sites)
    })


    // 将 sites_arr 进行 人为替换
    MockSearchSite( sites_arr , names  )
    console.log(sites_arr)


    // return

    QueryUtil.get_trajs_new(sites_arr)
      .then(results => {
        DataManager.drawTraj = results;
        console.log('_____', results.length)
        let t2 = new Date().getTime()
        console.log('GetData: ' + (t2 - t1) + 'ms')
        return results;
      })
      .then(results => dataTrans_YKJ())

  });
}

// modified by ykj

function dataTrans_YKJ() {
  console.log('Start Process Data ...')

  let t1 = new Date().getTime()

  let trajs = DataManager.drawTraj
  let sites = DataManager.sites
  let siteTopic = DataManager.siteTopic


  trajs.forEach((traj) => {
    let _traj = traj.traj
    _traj.forEach((p) => {
      let s = p.site
      let site = sites.get(+s)
      let sitetopic = siteTopic.get(s)

      p.latitude = site.latitude
      p.longitude = site.longitude
      p.topics = sitetopic
    })
    traj.pid = traj.peopleid
  })

  let t2 = new Date().getTime()
  console.log('TransData: ' + (t2 - t1) + 'ms')

  console.log(trajs)
  setGlobalTrajData(trajs)

}



let preClickedIndex = null

function createTabs(data) {

  const container = d3.select('.search-container')
  const divData = container.selectAll('.word-tab')
    .data(data, (d, i) => d[0] + '_' + d[i])
  divData.classed('word-tab-clicked', (d, i) => i == preClickedIndex)
  divData.select('.tab-text-container .tab-text')
    .text(d => d[0].split('_').join(''))
  const div = divData.enter()
    .insert('div', '#input-wrapper')
    .attr('class', 'word-tab')


  let image_container=div.append('div')
    .attr('class', 'tab-image-container')
  .on('click',function(){
let status=d3.select(this.parentNode).select('.change_type').style('display')
    d3.select(this.parentNode).select('.change_type').style('display',status=='block'?'none':'block')
      })
  image_container.append('img')
    .attr('src', d => {
        if(word_img.hasOwnProperty(d[1]))
            return word_img[d[1]]
        else
            if (d[1]=='ns')
                return word_img['n']
        else
            return word_img['o']
    })
 let delete_change = div.append('div')
    .attr('class', 'tab-text-container')
      .call(d3.drag()
          .on('start',word_tab_start)
      .on('drag', word_tab_move)
      .on('end', word_tab_end))
    .append('input')
    .attr('class', 'tab-text')
     .attr('readonly',true)
    .attr('old_value',d => d[0].split('_').join(''))
     .attr('value',d => d[0].split('_').join(''))
     .style('width',function(){
         return $(this).val().length*16+"px"
     })
     .on('dblclick',function(){
         $(this).removeAttr('readonly')
     })
     .on('mouseleave',function(){
if(d3.select(this).attr('old_value')!=$(this).val())
    change_tab(d3.select(this).attr('old_value'),$(this).val());
d3.select(this).attr('old_value',$(this).val())
         $(this).attr('readonly','readonly')
     })
     .each(function() {
         $(this).bind('input propertychange', function () {
             var $this = $(this);
             var text_length = $this.val().length;//获取当前文本框的长度
             var current_width = parseInt(text_length) * 16;//该16是改变前的宽度除以当前字符串的长度,算出每个字符的长度
             $this.css("width", current_width + "px");

         })
     })
     /*.each(function(){
         $(this).bind("contextmenu", function(){
    return false;
})
         $(this).mousedown(function(e) {
    console.log(e.which);
    //右键为3
    if (3 == e.which) {
        $(this.parentNode.parentNode).remove()
    }
})
     })*/
  /*   .append('div')
     .classed('delete_change',true)
delete_change.append('div')
    .classed('delete_change_div',true)
    .on('click')
*/
let change_type=div.append('div')
    .classed('change_type',true)
    .style('background','white')
     .style('z-index',1)
    .style('position','absolute')
    .style('display','none')
    for(let k in word_img){
   if(!(image_container.select('img').empty())&&word_img[k]==image_container.select('img').attr('src'))
     continue;
   let word=change_type.append('div')
       .style('border','1px solid transparent')
  let word_image_container=word.append('div')
    .attr('class', 'tab-image-container')
  .on('click',function(){
let target_src=d3.select(this.parentNode.parentNode.parentNode).select('.tab-image-container').select('img').attr('src')
          d3.select(this.parentNode.parentNode.parentNode).select('.tab-image-container').select('img').attr('src',d3.select(this).select('img').attr('src'))
          d3.select(this).select('img').attr('src',target_src)
      })
  word_image_container.append('img')
    .attr('src',  word_img[k])
 word.append('div')
    .attr('class', 'tab-text-container')
    .append('div')
    .attr('class', 'tab-text')
    .text(d => d[0].split('_').join(''))

    }
  divData.exit().remove();


  // div.on('click', function(clickedData) {
  //   let flag = d3.select(this).classed('word-tab-clicked');
  //   flag = !flag;
  //   d3.select(this).classed('word-tab-clicked', flag);
  //   // 此处需要重新获取下标，这是由于原始数据导致原始下标可能会发生变化
  //   const nowIdx = textData.indexOf(clickedData);
  //   if (flag) {
  //     if (preClickedIndex && Math.abs(preClickedIndex - nowIdx) == 1) {
  //       const minIdx = Math.min(preClickedIndex, nowIdx),
  //           maxIdx = Math.max(preClickedIndex, nowIdx);
  //       textData[minIdx][0] += '_' + textData[maxIdx][0];
  //       textData[minIdx][1] = 'cc'
  //       textData.splice(maxIdx, 1);
  //       preClickedIndex = minIdx;
  //     } else {
  //       preClickedIndex = nowIdx;
  //     }
  //     createNewTab(textData)
  //     updatePOILayer();
  //   } else {
  //     preClickedIndex = null;
  //   }
  // })


  syncInputWrapperLength()

}



function syncInputWrapperLength() {
  let allWidth = +d3.select('.search-container').style('width').slice(0, -2)
  let sum = 0
  d3.selectAll('.word-tab').each(function() {
    sum += (+d3.select(this).style('width').slice(0, -2))
    sum += 25
  })
  d3.select('#input-wrapper').style('width', allWidth - sum + 'px')
}



function render_MDS(data, name, x, y) {
  const x_extent = d3.extent(data, d => d[2][0])
  const y_extent = d3.extent(data, d => d[2][1])
  d3.select('#word-vecs-mds').remove();
  const svg = d3.select('.search-container')
    .append('svg')
    .attr('id', 'word-vecs-mds')
    .style('top', y + 40)
    .style('left', x)
  const g = svg.append('g')
    .attr('transform', 'translate(60, 60)')
  g.selectAll('circle')
    .data(data, d => d[0])
    .enter()
    .append('circle')
    .attr('class', 'mds-point')
    .attr('cx', d => ((d[2][0] - x_extent[0]) * 110 / (x_extent[1] - x_extent[0]) - 55))
    .attr('cy', d => ((d[2][1] - y_extent[0]) * 110 / (y_extent[1] - y_extent[0]) - 55))
    .attr('r', 5)
    .attr('fill', d => d[0] == name ? '#444444' : 'white')
    .on('mouseover', d => {
      console.log(d[0], name)
    })

}