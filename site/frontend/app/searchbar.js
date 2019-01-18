import * as d3 from 'd3';
import * as QueryUtil from './queryutil'
import $ from 'jquery';
import * as DataManager from './datamanager.js';

import '../assets/css/searchbar.css'

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
  })
  o.on("keyup", function(e) {
    if (!e) {
      e = window.event;
    }
    if (e.keyCode == "13" || e.keyCode == "32" || e.keyCode == '8') {
      console.log($('#search-input-text').val(), '@@@ ')
      get_participle($('#search-input-text').val())
    }
  })
}

function get_participle(data) {
  QueryUtil.get_participle(data)
    .then(o => {
      console.log(o, ' !!!!!! ')
    })
}

function addSearchListener(o) {
  o.on('click', function(d, i) {

    let t1 = new Date().getTime();
    console.log('Getting result ....')
    QueryUtil.get_trajs($('#search-input-text').val())
        .then(result => {

          DataManager.drawTraj = result;
          console.log(result.length, '_______')
          let t2 =  new Date().getTime();
          console.log('get result: ' + (t2-t1) + 'ms')
        })
        .then(result => dataTrans_YKJ())
  });
}

// modified by ykj
function dataTrans_YKJ(){
    let t1 = new Date().getTime();

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

    let t2 =  new Date().getTime();
    console.log('data trans: ' + (t2-t1) + 'ms')

    console.log(trajs)
}