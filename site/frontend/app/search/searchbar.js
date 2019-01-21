import * as d3 from 'd3';
import * as QueryUtil from './queryutil'
import $ from 'jquery';
import * as DataManager from './datamanager.js';
// import { draw_trajs } from 'mappanel'



import { setGlobalTrajData } from '../app.js'


let textData = []

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
}

function addSearchListener(o) {
  o.on('click', function(d, i) {

    let t1 = new Date().getTime()
          console.log('Start Getting Data ...')
    QueryUtil.get_trajs(textData.map(d => d[0]).join(''))
        .then(result => {


          DataManager.drawTraj = result;
          console.log('_____',result.length)
            // console.log(result.slice(0,5))
            let t2 = new Date().getTime()
            console.log('GetData: ' + (t2-t1) + 'ms')
          return result;
        })
        .then(result => dataTrans_YKJ())
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


    setGlobalTrajData(trajs)

}

function createNewTab(data) {
  console.log(data)
  const container = d3.select('.search-container')
  const divData = container.selectAll('.word-tab')
      .data(data, d => d[0])
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
      .text(d => d[0])
  
  divData.exit().remove();


  div.on('click', function(d) {
    const pos_x = d3.event.pageX
    const pos_y = d3.event.pageY
    console.log(pos_x, pos_y, '   @@@@ ')
    QueryUtil.get_k_vecs(d[0])
        .then(vecs => {
          console.log(vecs)
          render_MDS(vecs, d[0], pos_x, pos_y);
        })
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
  const svg = d3.select('#leftcolumn')
      .append('svg')
      .attr('id', 'word-vecs-mds')
      .style('top', x)
      .style('left', y)
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