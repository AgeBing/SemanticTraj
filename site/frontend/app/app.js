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




let debug = true

if(!debug) {
		datamanager.init()
		  .then(o => queryview.init())
		  .then(()=>{
		  	var storage=window.localStorage;
			var json=storage.getItem("DM");
			var trajs_data = JSON.parse(json);
			if(trajs_data){
				draw_trajs(trajs_data)
			}
		  })

}else{
	// 查询框 查询数据略慢，暂且用上一次查询数据存到 localstorage 
	var storage=window.localStorage;
	var json=storage.getItem("DM");
	var trajs_data = JSON.parse(json);
	draw_trajs(trajs_data)
}


