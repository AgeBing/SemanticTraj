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

// datamanager.init()
//   .then(o => queryview.init())
//   .then(()=>{
//  //  	//模拟点击
// 	// document.getElementById("inputquery").click();
//   })


import { draw_trajs } from 'mappanel'


// 查询框 查询数据略慢，暂且用上一次查询数据存到 localstorage 
var storage=window.localStorage;
var json=storage.getItem("DM");
var trajs_data = JSON.parse(json);
console.log(trajs_data)
draw_trajs(trajs_data)

//  正常情况下
//  let trajs_data = api.getTrajsData()   
//  draw_trajs(trajs_data)
