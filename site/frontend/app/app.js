/**
 * @preserve Copyright 2017 VAG (Visual Analytics Group), Zhejiang Univ.
 */

/**
 * @fileoverview
 *
 * @author Shengjie Gao.
 */
import $ from 'jquery';
import * as d3 from 'd3';

import * as queryview from 'newqueryview'
import * as datamanager from 'datamanager'
import { draw_trajs } from 'mappanel'


console.log('Waiting~')
datamanager.init()
  .then(o => queryview.init())
  .then(()=>{
  	var storage=window.localStorage;
	var json=storage.getItem("DM");
	var trajs_data = JSON.parse(json);
	console.log(trajs_data)
	if(trajs_data){
		draw_trajs(trajs_data)
	}
  })





// 查询框 查询数据略慢，暂且用上一次查询数据存到 localstorage 
// var storage=window.localStorage;
// var json=storage.getItem("DM");
// var trajs_data = JSON.parse(json);
// console.log(trajs_data)
// draw_trajs(trajs_data)

//  正常情况下
//  let trajs_data = api.getTrajsData()   
//  draw_trajs(trajs_data)


// import { draw } from 'forcepanel'

// import { init,topicHexa } from  'hexagonpanel'

// init()
// let topicNames = ["Beauty","Food","Shop","Uptown","Education","Hospital"]
// let h = new topicHexa()
// h.prepareHexagonData(topicNames)
// h.drawHexagon()
// let innerDatas = [1,2,3,4,5]
// h.prepareInnerData(innerDatas)
// h.drawInner()