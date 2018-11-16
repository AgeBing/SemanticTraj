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

import { getTrajs,getTopics,_getApi } from 'api'
import { draw_trajs,selectPeriod } from 'MapPanel'
import { topicZoomRect  } from 'TopicPanel'

datamanager.init()
  .then(o => queryview.init())

function cb(id,period){
	console.log('cb:',id,period)
}

async function data_prepare(argument) {
	let traj_data = await getTrajs()
	let topic_data = await getTopics()


	console.log("getTrajs : ",traj_data)
	console.log("getTopics : ",topic_data)


	let  visBox = document.getElementById("topic-vis");
	let  h = visBox.offsetHeight; //高度
	let  w = visBox.offsetWidth; //宽度

	let r = new topicZoomRect()
	r._init(50,w*0.8,visBox,topic_data.data[0])
	r._regisCallback('selectPeriod',selectPeriod)
	r._render()

	draw_trajs(traj_data.data)

	let getAPi = await _getApi()
	console.log(getAPi)
}	

data_prepare()
