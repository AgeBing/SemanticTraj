// import '../css/newqueryview.css';
// import '../assets/css/flat-ui.css';
// import 'jquery-ui/ui/widgets/slider';
// import 'jquery-ui/ui/widgets/datepicker';
// import 'jquery-ui/ui/widgets/spinner';
// import 'jquery-ui/themes/base/all.css';
import $ from 'jquery';
// import '../css/jquery.datetimepicker.min.css';
// import './jquery.datetimepicker.full.min.js';
import * as d3 from 'd3';
import * as QueryDb from './querydb.js';
import * as DataManager from './datamanager.js';
// import * as ShowMap from './showmap.js';
// import * as ConfigPanel from './configpanel.js';
// import * as MapRender from './maprender.js';
// import * as VectorConfig from './vectorconfig.js';

let conditionList = new Set();
export let oldConditionList = new Set();
export let addFlag = true;
export let selectRegion;
export const conditionQueue = [];
export const vec = [];

const SELECT = '-----';

const poiType = [SELECT, '丽人', '公司企业', '购物', '休闲娱乐', '医疗', '教育培训', '汽车服务', 
    '美食', '宾馆', '旅游景点', '生活服务', '运动健身', '交通设施', '政府机构', '行政区划', '房地产',
    '自然地物', '金融', '文化传媒'];
const topicType = [SELECT, "finance","shop","traffic","scenicspot","uptown","food","hospital"
    ,"life","hotel","shop","government","enterprise","beauty","education"];

export const filterOptions = new Map();

export function init() {
  const container = d3.select('#leftcolumn')
      .append('div')
      .attr('id', 'inputcontainer')
  const inputBar = container.append('div').attr('id', 'inputBar')
  inputBar.append('input')
      .attr('id', 'inputhide')
      .classed('inputtext', true)

  const searchInput = inputBar.append('div')
      .classed('bootstrap-tagsinput', true)
  searchInput.append('span')
      .classed('searchtext', true)
  searchInput.append('input').attr('id', 'inputbox')
      .attr('type', 'text')
      .attr('placeholder', '')
  const searchButton = container.append('div').attr('id', 'inputquerycontainer')
      .append('span').attr('id', 'inputquery')
      .style('border', '1px black solid')
      // .style('stroke-width', '1px')
      .text('query')
      // .attr('src', '../images/query.svg');
  addInputListener(searchInput);
  addSearchListener(searchButton);


  // //test 
  $('#inputbox').val('pass trainstation during [2014-1-14]');
  updateTag(searchInput, {keyCode: '32'})
  updateConditionQueue();
  updateData();

}

function addInputListener(o) {
  o.on("keyup", function(e) {
    if (!e) {
      e = window.event;
    }
    // updateTag(o, e);
    if (e.keyCode == "13" || e.keyCode == "32" || e.keyCode == '8') {
      updateConditionQueue();
      updateData();
    }
  })
  // .on("click", function(){
  //   updateConditionQueue();
  //   updateData();
  // })
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
    const [time0, time1] = findFilterRange();
    console.log(time0, time1, '---------')
    QueryDb.getPidByCondition(selectSites, DataManager.poiResults.length, time0, time1)
        .then(result => QueryDb.getTrajByPid(result))
        .then(result => DataManager.setPeopleTraj(result))
        .then(result => DataManager.handleTraj())
        .then(result => dataTrans_YKJ() )
        .catch(function(error) {
          console.log(error);
        })
        // .then(result => ConfigPanel.init())
        // .then(result => MapRender.reRendering())
  });


}
// modified by ykj
function dataTrans_YKJ(){
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

    var storage=window.localStorage;
    var d=JSON.stringify(trajs);
    storage.setItem("DM",d);
    console.log(storage['DM'])
}

function updateTag(node, e) {
  const strs = $('#inputbox').val().split(' ').filter(o => o),
      preStrs = ($('#inputhide').val() || '').split(',').filter(o => o);
  let nowStrs;
  if (e.keyCode == '32' || e.keyCode == '13') {// 空格或者回车
    nowStrs = [...preStrs, ...strs];
  } else if (e.keyCode == '8') {
    if (strs.length > 0) {
      if ($('#inputbox').val().length == 1) {
        d3.select('#inputbox').classed('notempty', true);
      }
      return ;
    }
    if (d3.select('#inputbox').classed('notempty')) {
      d3.select('#inputbox').classed('notempty', false);
      return ;
    }
    nowStrs = preStrs.filter((d, i, x) => i != x.length - 1);
  } else {
    return ;
  }
  let data = node.selectAll('span')
      .data(str2typeStr(nowStrs), (d, i) => d + i)
  const span = data.enter()
      .insert('span', '#inputbox')
      .classed('searchtext', true)
  span.append('div')
      .attr('class', d => d.type + '_spantext')
      .classed('searchicon', true)
  span.append('div')
      .text(d => d.name)
      .attr('class', 'searchtexttext')
      .attr('spantype', d => d.type)
      .on('click', function(d) {
        if (!d3.select(this).classed('clicked')) {
          if (d.type == 'normal') {
            cleanPopup();
            openPopup(d.name, $(this).offset().left - 18);
          } else if (d.type == 'time') {
            cleanPopup();
            openTimePopup(d3.select(this), d.belong, d.name, $(this).offset().left - 18);
          }
          d3.select(this).classed('clicked', true);
        } else {
          cleanPopup();
          d3.select(this).classed('clicked', false);
        }
      })
  data.exit()
      .remove();
  $('#inputbox').val('');
  $('#inputhide').val(nowStrs);
}

function str2typeStr(str) {
  const ans = [];
  let pre;
  for (let i = 0; i < str.length; i ++) {
    let type;
    if (str[i] == 'pass') {
      type = 'pass';
    } else if (str[i] == 'during') {
      type = 'during';
    } else if (str[i].indexOf('[') >= 0) {
      type = 'time';
    } else if (str[i] == 'and' || str[i] == 'or') {
      type = 'conjunction'
    } else {
      type = 'normal';
      pre = str[i];
    }
    ans.push({
      type: type,
      name: str[i]
    })
    if (type == 'time') {
      ans[ans.length - 1].belong = pre;
    }
  }
  return ans;
}

function updateConditionQueue() {
  const strs = str2typeStr(($('#inputhide').val() || '').split(',')
      .filter(o => o));
  conditionQueue.length = 0;
  for (let i = 0; i < strs.length; i ++) {
    if (strs[i].type == 'pass' || strs[i].type == 'during' || 
        strs[i].type == 'conjunction') {
      continue;
    } else if (strs[i].type == 'normal') {
      conditionQueue.push({
        name: strs[i].name,
        time: '',
        data: [],
        select: [],
      });
    } else if (strs[i].type == 'time') {
      const idx = conditionQueue.length - 1;
      conditionQueue[idx].time = strs[i].name;
    }
  }
}

function updateData() {
  // DataManager.poiResults.length = 0;
  getPoisByCondition(getConditionList())
      // .then(o => DataManager.removePoiResults(dif2))
      .then(o => console.log(DataManager.poiResults))
      // .then(o => renderPoilists())
      // .then(o => ShowMap.renderPois())
      .then(o => updateFilterTimes())
      // .then(o => VectorConfig.init())
}

export function getConditionList() {
  const ans = [];
  for (let i = 0; i < conditionQueue.length; i ++) {
    ans.push(conditionQueue[i].name);
  }
  return ans;
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
  if (o == 'hospital') {
    o = '医院'
  }
  if (o == 'college') {
    o = '大学'
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
            return;
          }
        }
        DataManager.addPoiResults(condition, results);
        addVec(condition);
        if (lists.length > 0) {
          getPoisByCondition(lists);
        }
      });
}

function addVec(condition) {
  const idx = DataManager.getIdxInPoiResultsByCondition(condition);
  if (vec[idx]) {
    return ;
  }
  vec[idx] = new Map();
  DataManager.topic2WordIndex.forEach((i, d) => {
    vec[idx].set(d, 1);
  });
}

function cleanPopup(name) {
  d3.selectAll('.conditionpopup')
      .remove();
  d3.selectAll('.conditiontimepopup')
      .remove();
}

function openPopup(name, x) {
  const node = d3.select('#leftcolumn')
      .append('div')
      .attr('class', 'conditionpopup')
      .attr('identify', name)
      .style('left', x)
      .style('top', '-7px')
  // node
  //     .style('height', 275)
  //[DataManager.getPoiResultsByCondition(name)] 是深赋值????
  const idx = DataManager.getIdxInPoiResultsByCondition(name);
  // const vp = node.append('div')
  //     .attr('index', idx)
  //     .attr('class', 'vectorparameters')
  //     .call(renderVectorParameters);
  const topicLayer = node.append('div')
      .attr('class', 'queryviewtopiclayer')
      .attr('dataindex', idx);
  topicLayer.append('div')
      .text('Filter')
      .classed('topic-filter-text', true);
  addTopicTypeLayer(topicLayer, topicType, 'topic');
  node.append('div')
      .text('POIs')
      .classed('topic-filter-text', true)
  const poiList = node.append('div')
      .datum(DataManager.getPoiResultsByCondition(name))
      .attr('class', 'poilistcontainer')
  renderPoilistsFoot(poiList);
} 

function openTimePopup(tag, name, time, x) {
  const idx = DataManager.getIdxInPoiResultsByCondition(name),
      thisTime = new Date(time.split('[')[1].split(']')[0]);
  let ymd = thisTime.toLocaleDateString();
  const node = d3.select('#leftcolumn')
      .append('div')
      .attr('class', 'conditiontimepopup')
      .attr('identify', name)
      .style('left', x)
      .style('top', '-7px')
      .style('height', 230);
  node.append('div').attr('id', 'timeselection');
  $('#timeselection').datetimepicker({
    format: 'Y-m-d',
    value: ymd,
    inline: true,
    timepicker: false,
    onSelectDate: function(ct, $i) {
      tag.text('[' + d3.timeFormat('%Y-%m-%d')(ct) + ']');
      ymd = d3.timeFormat('%Y-%m-%d')(ct);
    }
  });
  const timeRange = node.append('div')
      .attr('id', 'timerange')
  timeRange.append('span')
      .attr('id', 'timerangetitle')
      .text('time:');
  timeRange.append('span')
      .attr('id', 'timerangetext')
      .text('00:00:00 - 24:00:00');
  timeRange.append('div')
      .attr('id', 'timerangeslider');
  $('#timerangeslider').slider({
    range: true,
    min: new Date('2014-1-14 00:00:00').getTime() / 1000,
    max: new Date('2014-1-14 23:59:59').getTime() / 1000,
    values: [new Date('2014-1-14 00:00:00').getTime() / 1000, 
        new Date('2014-1-14 00:20:00.00').getTime() / 1000],
    slide: function(event, ui) {
      const val0 = new Date(ui.values[0]*1000).toTimeString().split(' ')[0],
          val1 = new Date(ui.values[1]*1000).toTimeString().split(' ')[0];
      d3.select('#timerangetext')
          .text(val0 + ' - ' + val1);
      const date0 = ymd + ' ' + val0,
          date1 = ymd + ' ' + val1;
      // console.log(date0, date1);
      updateTime(idx, [date0, date1]);
    }
  })
}

export function renderPoilistsFoot(node) {
  // node.append('div')
  //     .text('-----------  POIs -----------')
  //     .classed('topic-filter-text', true)
  node.attr('dataindex', function(d, i) {
        return +this.parentNode.getAttribute('dataindex');
      })
  const layerData = node.selectAll('.poilistlayer')
      .data(d => d.data, d => d[0]);
  const layer = layerData.enter()
      .append('div')
      .attr('class', 'poilistlayer')
      .attr('dataindex', function(d, i) {
        return +this.parentNode.getAttribute('dataindex') + '-' + i;
      })
  const elementData = layer.merge(layerData)
      .selectAll('.poilistelement')
      .data(d => d[1], d => d.name);
  elementData.exit().remove();
  const element = elementData.enter().append('div').classed('poilistelement', true)
      .call(createElement)
  element.merge(elementData)
      .classed('isselect', d => d.isSelect);
  element.append('div').classed('poilisttext', true)
      .text(o => o.name);
}

function createElement(node) {
  node.on('click', function(d, i) {
    const ids = getIdsOnPoiResult(this, i);
    d3.select(this).classed('isselect', !d.isSelect);
    DataManager.modifyPoiResultsOne(ids, 'isSelect', !d.isSelect);
    // ShowMap.renderPois();
  })
  .on('mouseenter', function(d, i) {
    const ids = getIdsOnPoiResult(this, i);
    DataManager.modifyPoiResultsOne(ids, 'isMouseover', true);
    // ShowMap.renderPois();
  })
  .on('mouseleave', function(d, i) {
    const ids = getIdsOnPoiResult(this, i);
    DataManager.modifyPoiResultsOne(ids, 'isMouseover', false);
    // ShowMap.renderPois();
  })
}

export function getIdsOnPoiResult(o, thisId) {
  const ids = o.parentNode.getAttribute('dataindex').split('-')
      .map(d => d*1); 
  ids.push(thisId);
  return ids;
}

function renderVectorParameters(node) {
  const cv = node.selectAll('.customervector')
      .data([...DataManager.topic2WordIndex.keys()], d => d)
      .enter()
      .append('div')
      .attr('class', 'customervector');
  cv.append('div')
      .attr('class', 'customervectorname')
      .text(d => d)
      .append('input')
      .attr('class', 'form-control')
      .attr('type', 'text')
      .attr('name', d => d)
      .attr('value', 1)
      .on('keyup', function() {
        let e = window.event;
        let nextVal;
        if (e.keyCode == '38') {
          nextVal = $(this).val() * 1 + 1;
          vec[this.parentNode.parentNode.getAttribute('index')*1].set(
              this.getAttribute('name'), nextVal); 
          $(this).val(nextVal);
        } else if (e.keyCode == '40') {
          nextVal = $(this).val() * 1 - 1;
          vec[this.parentNode.parentNode.getAttribute('index')*1].set(
              this.getAttribute('name'), nextVal); 
          $(this).val(nextVal);
        }
      })
}

let sliderId = 0;

function addTopicTypeLayer(node, data, type) {
  const selects = node.append('div').classed('queryviewselects', true);
  const selectData = selects.append('select')
      .classed('queryviewselect', true)
      .on('change', function() {
        const now = d3.select(this);
        if (now.property('value') !== SELECT && 
            !now.classed('queryviewchanged')) {
          const select = selects.append('div')
              .classed('queryviewslide', true)
              .attr('name', now.property('value'))
              .attr('id', o => 'queryviewselect' + sliderId ++);
          const idx = node.attr('dataindex') * 1;
          const propertyname = now.property('value');
          const beginCursor = selects.append('div').text(0)
              .classed('begincursortxt2', true);
          const endCursor = selects.append('div').text(100)
              .classed('endcursortxt2', true);
          $('#queryviewselect' + (sliderId-1)).slider({
            range: true,
            min: 0,
            max: 100,
            values: [0, 100],
            slide: function(event, ui) {
              $(this).next('.begincursortxt2')
                  .css('left', 119+ui.values[0]/100*160)
                  .text(ui.values[0]);
              $(this).next().next('.endcursortxt2')
                  .css('left', 114+ui.values[1]/100*160)
                  .text(ui.values[1]);
              updateTopicType(idx, type, propertyname, [ui.values[0]/100, 
                  ui.values[1]/100]);
            }
          })
          now.classed('queryviewc hanged', true);
          addTopicTypeLayer(node, data, type);
        }
      })
      .selectAll("option")
      .data(data);
  selectData.enter()
      .append('option')
      .text(o => o);
}

function findFilterRange() {
  let time0, time1;
  for (let [idx, filter] of filterOptions) {
    if (filter.has('time')) {
      const [time3, time4] = filter.get('time');
      if ((!time0) || time0.getTime() > new Date(time3).getTime()) {
        time0 = new Date(time3);
      }
      if ((!time1) || time1.getTime() < new Date(time4).getTime()) {
        time1 = new Date(time4);
      }
    }
  }
  if ((!time0) || (!time1)) {
    return ['2014-01-14 00:00:00.00', '2014-01-14 00:20:00.00'];
  }
  const parse = d3.timeFormat('%Y-%m-%d %H:%M:%S.%L');
  return [parse(time0), parse(time1)];
}

function getFilterTime(idx) {
  if ((!filterOptions.has(idx)) || (!filterOptions.get(idx).get('time'))) {
    return ['2014-01-14 00:00:00.00', '2014-01-14 00:20:00.00'];
  }
  return filterOptions.get(idx).get('time');
}

function updateMoment(idx, time) {
  if (!filterOptions.has(idx)) {
    filterOptions.set(idx, new Map());
  }
  filterOptions.get(idx).set('moment', time);
}

function updateFilterTimes() {
  for (let i = 0; i < conditionQueue.length; ++ i) {
    if (conditionQueue[i].time) {
      const idx = DataManager.getIdxInPoiResultsByCondition(
          conditionQueue[i].name);
      if (filterOptions.get(idx) && (!filterOptions.get(idx).get('time'))) {
        updateTime(idx, conditionQueue[i].time);
      }
    }
  }
}

function updateTime(idx, time) {
  if (!filterOptions.has(idx)) {
    filterOptions.set(idx, new Map());
  }
  if (time instanceof Array) {
    filterOptions.get(idx).set('time', time);
  } else {
    const nextTime = new Date(new Date(time).getTime() + 20 * 60 * 1000),
        time2 = d3.timeFormat('%Y-%m-%d %H:%M:%S.%L')(nextTime);
    console.log('next time: ', time2);
    filterOptions.get(idx).set('time', [time, time2]);
  }
}

function updateTopicType(idx, type, propertyName, range) {
  if (!filterOptions.has(idx)) {
    filterOptions.set(idx, new Map());
  }
  let data = new Map();
  if (filterOptions.get(idx).has(type)) {
    data = filterOptions.get(idx).get(type);
  }
  data.set(propertyName, range);
  filterOptions.get(idx).set(type, data);
}

export function filterAll() {
  for (let i = 0; i < DataManager.drawTraj.length; i ++) {
    if (!DataManager.drawTraj[i].matching) {
      continue;
    }
    for (let traj of DataManager.drawTraj[i].traj) {
      if (traj.stoppoint) {
        DataManager.drawTraj[i].filter = !checkTraj(traj, traj.stoppoint * 1);
      }
    }
  }
  for (let i = DataManager.drawTraj.length - 1; i >= 0; -- i) {
    if ((!DataManager.drawTraj[i].matching) || DataManager.drawTraj[i].filter) {
      DataManager.drawTraj.splice(i, 1);
    }
  }
}

function filter(idx) {
  for (let i = 0; i < drawTraj.length; i ++) {
    if (!drawTraj[i].matching) {
      continue;
    }
    for (let traj of drawTraj[i].traj) {
      if (traj.stoppoint*1 == idx) {
        drawTraj[i].filter = !checkTraj(traj, idx);
      }
    }
  }
};

function checkTraj(traj, idx) {
  let limit = filterOptions.get(idx);
  for (let [key, value] of limit) {
    if (key == 'time') {
      console.log(value[0], ' ^^^^^^',value[1]);
      let nowTime = new Date(traj.time).getTime();
      if (nowTime >= new Date(value[0]).getTime() && nowTime <= new Date(value[1]).getTime()) {
        continue;
      } else {
        return false;
      }
    } else if (key == 'moment') {
      let now = traj.stopTime / 1000 / 60 / 60 / 24;
      if (now >= value[0] * 1 && now <= value[1] * 1) {
        continue;
      } else {
        return false;
      }
    } else if (key == 'topic') {
      const topics = DataManager.siteTopic.get(traj.site);
      for (let i = 0; i < topics.length; i ++) {
        if (value.has(topics[i].topic)) {
          const val = value.get(topics[i].topic) * 1;
          if (val[0] <= topics[i].val && val[1] >= topics[i].val) {
            continue ;
          } else {
            return false;
          }
        }
      }
    } else if (key == 'type') {
      // let types = QueryDb.sitePoiType.get(traj.traj+"");
      // let sum = types.get('num') * 1;
      // for (let [typeName, range] of value) {
      //   if (!types.has(typeName)) {
      //     if (range[0] > 0) {
      //       return false;
      //     } else {
      //       continue;
      //     }
      //   }
      //   let now = types.get(typeName)*1 / sum;
      //   if (now < range[0] || now > range[1]) {
      //     return false;
      //   }
      // }
    }
  }
  return true;
};
