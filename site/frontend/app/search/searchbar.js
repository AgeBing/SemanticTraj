import * as d3 from 'd3';
import * as QueryUtil from './queryutil'
import $ from 'jquery';
import * as DataManager from './datamanager.js';
// import { draw_trajs } from 'mappanel'

import { draw as drawPoi } from '../map/poi'


import { setGlobalTrajData } from '../app.js'


let textData = []
let preClickedIndex = null

export function init() {

  const searchInput = d3.select('#input-wrapper')
  const button = d3.select('#search-button')
  addInputListener(searchInput);
  addSearchListener(button);

  // // //test 
  // $('#inputbox').val('pass trainstation during [2014-1-14]');
  // updateTag(searchInput, {keyCode: '32'})


  
  // updateConditionQueue();
  // updateData();

}

function addInputListener(o) {
  o.on('compositionstart', function() {
    // 拼音开始，暂不处理
  })
  o.on('compositionend', function() {
    // 拼音结束
    get_participle($('#search-input-text').val())
    $('#search-input-text').val('')
  })
  o.on("keyup", function(e) {
    if (!e) {
      e = window.event;
    }
    // 13：回车，32：空格，8：删除
    if (e.keyCode == "13" || e.keyCode == "32") {
      get_participle($('#search-input-text').val())
      $('#search-input-text').val('')
    } else if (e.keyCode == '8') {
      const nowText = $('#search-input-text').val().trim()
      if (nowText.length == 0) {
        textData.pop();
        get_participle('')
      } else {
        get_participle(nowText)
      }
    }
  })
}

function get_participle(data) {
  const rawText = textData.map(d => d[0]).join('') + data;
  QueryUtil.get_participle(rawText)
    .then(o => {
      o = o.filter(d => d[0].trim().length > 0)
      textData = o;
      createNewTab(o)
    })
    .then(o => {
      updatePOILayer();
    })
}

function updatePOILayer() {
  console.log('update poi layer...')
  QueryUtil.get_poi_layer(textData)
    .then(results => {
      // 获取POI的层次信息
      let nodelist = require('../Specification/Node.js')

      nodelist.data = results
      nodelist.rendering()
    })
}

// 查询按钮监听click事件，首先查询符合条件的轨迹，然后查询POI的层次信息
function addSearchListener(o) {
  o.on('click', function(d, i) {

    let t1 = new Date().getTime()
    console.log('Start Getting Data ...')
    QueryUtil.get_trajs_new(textData)
      .then(results => {
        DataManager.drawTraj = results;
        console.log('_____',results.length)
        let t2 = new Date().getTime()
        console.log('GetData: ' + (t2-t1) + 'ms')
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
    })

    let t2 = new Date().getTime()
    console.log('TransData: ' + (t2-t1) + 'ms')

    console.log(trajs)
    setGlobalTrajData(trajs)

}

// function tabDrag() {
//   return d3.drag()
//   .on('start', function() {
//     console.log(d3.event.subject, d3.event.x, d3.event.y, '######')
//   })
//   .on('drag', function(d) {
//     console.log('____####______', d)
//     d3.select(this)
//         // .style('position', 'absolute')
//         .style('left', d3.event.x + 'px')
//   })
// }

function createNewTab(data) {
  const container = d3.select('.search-container')
  // container.selectAll('.word-tab')
  //     .remove()
  const divData = container.selectAll('.word-tab')
      .data(data, (d, i) => d[0] + '_' + d[i])
  divData.classed('word-tab-clicked', (d, i) => i == preClickedIndex)
  divData.select('.tab-text-container .tab-text')
      .text(d => d[0].split('_').join(''))
  const div = divData.enter()
      .insert('div', '#input-wrapper')
      .attr('class', 'word-tab')
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


  div.on('click', function(clickedData) {
    let flag = d3.select(this).classed('word-tab-clicked');
    flag = !flag;
    d3.select(this).classed('word-tab-clicked', flag);
    // 此处需要重新获取下标，这是由于原始数据导致原始下标可能会发生变化
    const nowIdx = textData.indexOf(clickedData);
    if (flag) {
      if (preClickedIndex && Math.abs(preClickedIndex - nowIdx) == 1) {
        const minIdx = Math.min(preClickedIndex, nowIdx),
            maxIdx = Math.max(preClickedIndex, nowIdx);
        textData[minIdx][0] += '_' + textData[maxIdx][0];
        textData[minIdx][1] = 'cc'
        textData.splice(maxIdx, 1);
        preClickedIndex = minIdx;
      } else {
        preClickedIndex = nowIdx;
      }
      createNewTab(textData)
      updatePOILayer();
    } else {
      preClickedIndex = null;
    }
  })


syncInputWrapperLength()
  // d3.select('.input-wrapper').style('width')
}

function syncInputWrapperLength(){

  let allWidth = +d3.select('.search-container').style('width').toString().split('px')[0] - 16
  let wordlengthSum = 0
  d3.selectAll('.word-tab').each(function(){
    wordlengthSum += (+d3.select(this).style('width').toString().split('px')[0]) 
    wordlengthSum += 10
  })
  d3.select('#input-wrapper').style('width' , allWidth - wordlengthSum + 'px')
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