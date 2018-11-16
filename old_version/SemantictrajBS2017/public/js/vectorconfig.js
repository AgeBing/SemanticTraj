import $ from 'jquery';
import * as d3 from 'd3';
import * as DataManager from './datamanager.js';
import * as myKMeans from './mykmeans.js';
import {FastPriorityQueue} from './fastpriorityqueue.js';
import '../css/vectorconfig.css';
import * as SemanticList from './semanticlist.js';
import * as MapRender from './maprender.js';
import * as GroupMap from './groupmap.js';
import * as NewQueryView from './newqueryview.js';

export function init() {
  const config = d3.select('#vector-config')
  config.selectAll('div').remove();
  const vconfigpanel = config.append('div').attr('class', 'vector-configpanel');
  const head = vconfigpanel.append('div').attr('class', 'vector-panelhead');
  head.append('div').attr('class', 'vector-panel-head-title')
      .text('The configuration panel')
  const container = vconfigpanel.append('div').attr('class', 'vector-config-container');
  container.call(renderVectorConfig);
  // config.call(renderKmeansConfigPanel);
  // const title = bottom.insert('div', '#group-map')
  //     .attr('id', 'bottomtitle');
  // title.append('div')
  //     .attr('id', 'honeycombtitle')
  //     .text('Honey-Comb');
  // title.append('div')
  //     .attr('id', 'semantictrajtitle')
  //     .text('Semantic Traj')
}

export function renderVectorConfig(node) {
  node.selectAll('div').remove();
  console.log('poiResults', DataManager.poiResults, DataManager.poiResults.length);
  const conditionL = NewQueryView.getConditionList();
  // const conditionL = ['a', 'b'];
  for (let i = 0; i < conditionL.length; ++ i) {
    node.append('div')
        .classed('vector-condition-title', true)
        .text(conditionL[i]);
    const foot = node.append('div')
        .attr('class', 'vector-panelfoot')
        .attr('index', i);
    foot.call(renderVectorParameters);
  }
}

function renderVectorParameters(node) {
  const cv = node.selectAll('.v-customervector')
      .data([...DataManager.topic2WordIndex.keys()], d => d)
      .enter()
      .append('div')
      .attr('class', 'v-customervector');
  cv.append('div')
      .attr('class', 'v-customervectorname')
      .text(d => d)
  const s = cv.append('div')
      .attr('class', 'config-slider')
      .attr('name', d => d)
  cv.append('input')
      .attr('class', 'form-control')
      .attr('type', 'text')
      .attr('name', d => d)
      .attr('value', 1)
      .on('keyup', function() {
        let e = window.event;
        let nextVal;
        if (e.keyCode == '38') {
          nextVal = $(this).val() * 1 + 1;
          NewQueryView.vec[this.parentNode.parentNode.getAttribute('index')*1]
              .set(this.getAttribute('name'), nextVal); 
          $(this).val(nextVal);
        } else if (e.keyCode == '40') {
          nextVal = $(this).val() * 1 - 1;
          NewQueryView.vec[this.parentNode.parentNode.getAttribute('index')*1]
              .set(this.getAttribute('name'), nextVal); 
          $(this).val(nextVal);
        }
        GroupMap.reColor();
      })
  s.each(function(d, i) {
    $(this).slider()
        .slider('option', 'min', 1)
        .slider('option', 'max', 100)
        .slider('option', 'step', 1)
        .on('slide', function(event, ui) {
          const val = ui.value * 1;
          NewQueryView.vec[this.parentNode.parentNode.getAttribute('index')*1]
              .set(this.getAttribute('name'), val);
          // console.log($(this.parentNode).find('.form-control'));
          $(this.parentNode).find('.form-control').val(val);
          GroupMap.reColor();
        })
  })
}