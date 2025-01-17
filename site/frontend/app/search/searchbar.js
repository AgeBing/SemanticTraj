//import * as d3 from 'd3';
import * as QueryUtil from './queryutil'
import $ from 'jquery';
import * as DataManager from './datamanager.js';



import {
  setGlobalTrajData
} from '../app.js'
import {
  word_tab_start,
  word_tab_move,
  word_tab_end
} from "../Specification/node_operate";

let textData = []

let name2POIMap = new Map()

let tag_diff_data = {}



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



function addParticle() {
  // console.log('add')
  let name = $('#search-input-text').val()
  const rawText = textData.map(d => d[0]).join('') + name;
  QueryUtil.get_participle(rawText)
    .then(o => {
      o = o.filter(d => d[0].trim().length > 0)
      textData = o; // 获取词性
      createTabs(o)
      return o
    })
    .then(o => {
      // 只有名称才会被添加
      o.forEach((d) => {
        if (d[0] == name && (d[1] == 'n') || (d[1] == 'ns')) {
          addPOI(name);
        }
      })
    })
    .then(() => {
      $('#search-input-text').val('')
    })

}

function removeParticle() {
  console.log('rm')
  let name = textData.pop()[0]
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



function addPOI(_name) {
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
          })
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
    nodelist.order.forEach((d) => {
      //  d = >  condition_node1 、condition_node2
      let name = d3.select('#' + d).select('.title').select('.text').text()

      let pois = nodelist.searchSiteList.get(name)
      console.log(pois)
      let sites = pois.map((p) => {
        return p.poi.site_id
      })
      console.log(sites)

      sites_arr.push(sites)
    })


    QueryUtil.get_trajs_new(sites_arr)
      .then(results => {
        DataManager.drawTraj = results;
        console.log('_____', results.length)
        console.log('GetData: ' + (Date().getTime() - t1) + 'ms')
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
    .call(d3.drag()
      .on('start', word_tab_start)
      .on('drag', word_tab_move)
      .on('end', word_tab_end))


  div.append('div')
    .attr('class', 'tab-image-container')
    .append('img')
    .attr('src', d => {
      if (d[1].indexOf('n') != -1) {
        return '../assets/icons/POI.svg';
      } else if (d[1].indexOf('t') != -1) {
        return '../assets/icons/time.svg';
      } else if (d[1].indexOf('v') != -1) {
        return '../assets/icons/action.svg';
      } else {
        return '../assets/icons/others.svg';
      }
    })
  div.append('div')
    .attr('class', 'tab-text-container')
    .append('div')
    .attr('class', 'tab-text')
    .text(d => d[0].split('_').join(''))
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