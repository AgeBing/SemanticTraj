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


// import { getTrajs,getTopics,_getApi } from 'api'
import { draw_trajs,selectPeriod } from 'mappanel'


// 查询框 查询数据略慢，暂且用上一次查询数据存到 localstorage 
var storage=window.localStorage;
var json=storage.getItem("DM");
var jsonObj=JSON.parse(json);
console.log(jsonObj)
draw_trajs(jsonObj)
