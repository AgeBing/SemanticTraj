import '../css/queryview.css';
import '../css/flat-ui.css';
import * as d3 from 'd3';
import $ from 'jquery';
import * as QueryDb from './querydb.js';
import * as DataManager from './datamanager.js';
import * as ShowMap from './showmap.js';
import * as ConfigPanel from './configpanel.js';
import * as MapRender from './maprender.js';
// require('bootstrap-webpack!./bootstrap.config.js');


let conditionList = new Set();
export let oldConditionList = new Set();
export let addFlag = true;
export let selectRegion;

export function init() {
  const leftColumn = d3.select('#leftcolumn');
  const menu = leftColumn.append('div').attr('id', 'menu');
  const searchInput = menu.append("div").classed("inputbox",true)
  searchInput.append('div').attr('class', 'logo')
  searchInput.append('div').attr('class', 'split');
  searchInput.append('input').attr('id', 'inputbox')
      .attr('type', 'text')
      .attr('value', 'pass trainstation');
  const poilistWrapper = leftColumn.append('div')
      .classed('poilistwrapper', true);
  const poilistContainer = poilistWrapper.append('div')
      .attr('id', 'poilistcontainer');
  const searchButtonWrapper = leftColumn.append('div')
      .classed('searchbuttonwrapper', true);
  const searchButton = searchButtonWrapper.append('div').attr('id', 'searchbutton');
  addInputListener(searchInput);
  searchButton.call(addSearchListener);
  //test 
  updateConditionList();
}

function addInputListener(o) {
  o.on("keyup", function(e) {
    if (!e) 
      e = window.event;
    if (e.keyCode == "13"||e.keyCode == "32") {
      updateConditionList();
    }
  })
  .on("click",function(){
    updateConditionList();
  })
}

function addSearchListener(o) {
  o.on('click', function(d, i) {
    if (DataManager.poiResults.length >= 30) {
      alert('poiResults\'s length must < 30');
      return ;
    }
    const selectSites = DataManager.getSelectSites();
    DataManager.getStandardVector();
    if (selectSites.length == 0) {
      console.log('select site number is 0');
      return ;
    }
    QueryDb.getPidByCondition(selectSites, DataManager.poiResults.length)
        .then(result => QueryDb.getTrajByPid(result))
        .then(result => DataManager.setPeopleTraj(result))
        .then(result => DataManager.handleTraj())
        .then(result => ConfigPanel.init())
        // .then(result => MapRender.reRendering())

  });
}

function updateConditionList() {
  conditionList.clear();
  const strs = [];
  $('#inputbox').val().split(' ').forEach(o => {
    if (o != '') {
      strs.push(o);
    }
  });
  for (let i = 0; i < strs.length - 1; i ++) {
    if (strs[i] == 'pass') {
      conditionList.add(strs[i+1]);
    }
  }
  //new condition
  const dif = [...conditionList].filter(o => !oldConditionList.has(o));
  //deleted condition
  const dif2 = new Set([...oldConditionList].filter(o => !conditionList.has(o)));
  oldConditionList = new Set([...oldConditionList, ...dif]);
  oldConditionList = new Set([...oldConditionList].filter(o => !dif2.has(o)));
  getPoisByCondition(dif)
      .then(o => DataManager.removePoiResults(dif2))
      .then(o => console.log(DataManager.poiResults))
      .then(o => renderPoilists())
      .then(o => ShowMap.renderPois());
}

function getPoisByCondition(lists) {
  let str = '';
  if (lists.length == 0) {
    return new Promise((resolve, reject) => {
      resolve();
    });
  }
  let condition = lists.pop(), o = condition;
  if (o == 'trainstation') {
    o = '火车站';
  }
  if (o == 'restaurant') {
    o = '餐厅';
  }
  if (o.split(':').length > 1) {
    str += `type like \"\%${o.split(":")[1]}\%\" `;
  } else {
    str += `name like \"\%${o}\%\" `; 
  }
  const data = {
    reqType: "queryDb",
    operate: "select",
    column: "*",
    table: "site_poi",
    limit: `where (${str})`
  };
  return QueryDb.pquery(data)
      .then(results => {
        if (results.length == 0) {
          if (lists.length > 0) {
            getPoisByCondition(lists);
          } else {
            return ;
          }
        }
        DataManager.addPoiResults(condition, results);
        if (lists.length > 0) {
          getPoisByCondition(lists);
        }
      });
}

export function renderPoilists() {
  const poiResults = DataManager.poiResults;
  const container = d3.select('#poilistcontainer');
  const layerData = container.selectAll('.poilistlayer').data(poiResults, o => o.condition);
  layerData.exit().transition().duration(350).remove();
  let layer = layerData.enter().append('div');
  layer.transition().duration(350).attr('class', 'poilistlayer')
      .attr('id', (d, i) => 'poilistlayer' + i)
      .attr('dataindex', (d, i) => i);
  // render Head
  renderPoilistsHead(layer);
  //render Middle
  const middle = layer.append('div').classed('poilistmiddle', true)
      .attr('id', (d, i) => 'poilistmiddle' + i)
      .attr('dataindex', (d, i) => i)
      .merge(layerData);
  renderPoilistsMid(middle);
  // render Foot
  const detail = layer.append('div').classed('poilistdetail', true)
  renderPoilistsFoot(detail);
}

function renderPoilistsHead(node) {
  const layerTitle = node.append('div')
      .attr('id', (d, i) => 'layerTitle' + i)
      .classed('poilayertitle', true)
      .classed('layerselect', true)
      .on('dblclick', function(d, i) {
        let isSelect = d3.select(this).classed('layerselect');
        isSelect = !isSelect;
        d3.select(this).classed('layerselect', isSelect);
        DataManager.modifyPoiResults(i, 'isSelect', isSelect);
        renderPoilistsFoot(d3.select(this.parentNode).select('.poilistdetail'));
        ShowMap.renderPois();
      })
      .on('mouseenter', function(d, i) {
        DataManager.modifyPoiResults(i, 'isMouseover', true);
        ShowMap.renderPois();
      })
      .on('mouseleave', function(d, i) {
        DataManager.modifyPoiResults(i, 'isMouseover', false);
        ShowMap.renderPois();
      });
  layerTitle.append('span')
      .classed('fui-list', true)
      .on('click', function(d, i) {
        DataManager.modifyPoiResultsShow(i);
        renderPoilistsFoot(d3.select(this.parentNode.parentNode)
            .select('.poilistdetail'));
      });
  layerTitle.append('div')
      .text(o => o.condition)
      .classed('conditiontitle', true);
  layerTitle.append('div').classed('poiselectadd', true)
      .on('click', function(d, i) {
        addFlag = true;
        selectRegion = i;
        ShowMap.addSelectBox();
      })
  layerTitle.append('div').classed('poiselectdelete', true)
      .on('click', function(d, i) {
        addFlag = false;
        selectRegion = i;
        ShowMap.addSelectBox();
      })
}

function renderPoilistsMid(node) {
  const middleData = node.selectAll('.poilistmiddlecontainer')
      .data(o => o.data);
  const middleContainer = middleData.enter().append('div')
      .attr('class', (d, i) => 'middle' + i)
      .classed('poilistmiddlecontainer', true)
      .classed('middleselect', true) 
      .classed('middleshow', (d, i) => d[1].isShow)
      .on('click', function(d, i) {
        const ids = [this.parentNode.getAttribute('dataindex')*1, i];
        const preId = DataManager.getPoiResultsShowType(ids);
        //必须用selectAll   原因未知
        d3.select(this.parentNode).selectAll('.middle' + preId)
            .classed('middleshow', false);
        d3.select(this).classed('middleshow', true);
        DataManager.modifyPoiResultsShowType(ids);
        renderPoilistsFoot(d3.select(this.parentNode.parentNode)
            .select('.poilistdetail'));
      })
      .on('dblclick', function(d, i) {
        const ids = [this.parentNode.getAttribute('dataindex')*1, i];
        const preMiddleShow = d[1].isShow;
        d3.select(this).classed('middleselect', !d[1].isSelect);
        d3.select(this).classed('middleshow', preMiddleShow);
        DataManager.modifyPoiResultsGroup(ids, 'isSelect', !d[1].isSelect);
        renderPoilistsFoot(d3.select(this.parentNode.parentNode)
            .select('.poilistdetail'));
        ShowMap.renderPois();
      })
      .on('mouseenter', function(d, i) {
        const ids = [this.parentNode.getAttribute('dataindex')*1, i];
        DataManager.modifyPoiResultsGroup(ids, 'isMouseover', true);
        d3.select(this).append('div').classed('middlehoverdiv', true)
            .text((d, i) => d[0]);
        ShowMap.renderPois();
      })
      .on('mouseleave', function(d, i) {
        const ids = [this.parentNode.getAttribute('dataindex')*1, i];
        DataManager.modifyPoiResultsGroup(ids, 'isMouseover', false);
        d3.select(this).select('.middlehoverdiv').remove();
        ShowMap.renderPois();
      });
  middleContainer.append('div').style('width', '100%').style('height', '100%')
      .style('background', o => `url(../images/${o[0].toLowerCase()}.svg)` + 
        ' 50% 50% / 100% 100%  no-repeat');
}

export function renderPoilistsFoot(node) {
  node.attr('dataindex', function(d, i) {
        return +this.parentNode.getAttribute('dataindex') + '-' + d.showType;
      })
  const elementData = node.selectAll('.poilistelement')
      .data(o => {
        if (o.isShow) {
          return o.data[o.showType][1];
        } else {
          return [];
        }
      }, o => o.name);
  elementData.exit().remove();
  const element = elementData.enter().append('div').classed('poilistelement', true)
      .call(createElement)
  element.merge(elementData)
      .classed('isselect', d => d.isSelect);
  element.append('div').classed('poilisttext', true)
      // .merge(elementData)
      .text(o => o.name);
}

function createElement(node) {
  node.on('click', function(d, i) {
        const ids = getIdsOnPoiResult(this, i);
        d3.select(this).classed('isselect', !d.isSelect);
        DataManager.modifyPoiResultsOne(ids, 'isSelect', !d.isSelect);
        ShowMap.renderPois();
        // renderPoilistsFoot(d3.select(this.parentNode));
      })
      .on('mouseenter', function(d, i) {
        const ids = getIdsOnPoiResult(this, i);
        DataManager.modifyPoiResultsOne(ids, 'isMouseover', true);
        ShowMap.renderPois();
      })
      .on('mouseleave', function(d, i) {
        const ids = getIdsOnPoiResult(this, i);
        DataManager.modifyPoiResultsOne(ids, 'isMouseover', false);
        ShowMap.renderPois();
      })
}

export function getIdsOnPoiResult(o, thisId) {
  const ids = o.parentNode.getAttribute('dataindex').split('-')
      .map(d => d*1); 
  ids.push(thisId);
  return ids;
}
