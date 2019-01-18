/**
 * @preserve Copyright 2017 VAG (Visual Analytics Group), Zhejiang Univ.
 */


import $ from 'jquery';
import * as d3 from 'd3';

import * as datamanager from 'datamanager'
import * as SearchBar from 'searchbar'
// import { draw_trajs } from 'mappanel'

// let debug = true

// if(!debug) {
// 		datamanager.init()
// 		  .then(o => SearchBar.init())
// 		  .then(()=>{
// 		  	var storage=window.localStorage;
// 			var json=storage.getItem("DM");
// 			var trajs_data = JSON.parse(json);
// 			if(trajs_data){
// 				draw_trajs(trajs_data)
// 			}
// 		  })

// }else{
// 	// 查询框 查询数据略慢，暂且用上一次查询数据存到 localstorage 
// 	var storage=window.localStorage;
// 	var json=storage.getItem("DM");
// 	var trajs_data = JSON.parse(json);
// 	draw_trajs(trajs_data)
// }



datamanager.init()
	.then(o => SearchBar.init())

