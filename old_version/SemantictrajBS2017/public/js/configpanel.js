import * as d3 from 'd3';
import $ from 'jquery';
// import 'bootstrap/less/bootstrap.less';
import 'jquery-ui/ui/widgets/slider';
import 'pick-a-color/src/less/pick-a-color.less';
import 'pick-a-color/src/js/pick-a-color.js';
import '../css/configpanel.css';
import * as MapRender from './maprender.js';
import * as QueryView from './queryview.js';
import * as ShowMap from './showmap.js';
import * as DataManager from './datamanager.js';
import * as MyKmeans from './mykmeans.js';
import * as VectorConfig from './vectorconfig.js';
import * as GroupMap from './groupmap.js';

const filterOptions = new Map();
const SELECT = '------';
const poiType = [SELECT, '丽人', '公司企业', '购物', '休闲娱乐', '医疗', '教育培训', '汽车服务', 
    '美食', '宾馆', '旅游景点', '生活服务', '运动健身', '交通设施', '政府机构', '行政区划', '房地产',
    '自然地物', '金融', '文化传媒'];
const topicType = [SELECT, "finance","shop","traffic","scenicspot","uptown","food","hospital"
    ,"life","hotel","shop","government","enterprise","beauty","education"];

d3.select('#rightcolumn').style('display', 'none');
const configPanel = d3.select('#rightcolumn').append('div')
    .attr('id', 'configpanel');

export const settings = {
  trajstoptime: 20,
}

export function init() {
  console.log('Config init, -----')
  d3.select('#middlecolumn').style('width', 'calc(var(--width)*4)')
  d3.select('#rightcolumn').style('display', 'block');
  configPanel.selectAll('div').remove();
  configPanel.append('div').attr('class', 'configpanelhead')
      .text('Configuration Panel');
  const trajPanel = configPanel.append('div').attr('class', 'trajconfigpanel')
      .call(renderTrajPanel);
}

export function addMapConfig() {
  const confighide = d3.select('#middlecolumn')
      .append('div')
      .attr('id', 'mapconfighide')
      .append('img')
      .attr('src', '../images/chilun.svg')
      .classed('ishide', true)
      .on('click', function() {
        const isHide = d3.select(this).classed('ishide');
        if (!isHide) {
          const config = d3.select('#middlecolumn')
              .append('div')
              .attr('id', 'mapconfig');
          config.transition()
              .duration(300)
              .style('width', '326px');
          config.call(renderHeatMap);
          config.call(renderTrajConfigPanel);
          config.call(renderGroupTrajConfigPanel);
        } else {
          d3.select('#mapconfig')
              .remove();
        }
        d3.select(this).classed('ishide', !isHide);
      })
}

export function addKmeandConfigAndTitle() {
  const bottom = d3.select('#bottomrow');
  const config = bottom.append('div')
      .attr('id', 'bottomkmeansconfig');
  config.call(renderKmeansConfigPanel);
  const title = bottom.insert('div', '#group-map')
      .attr('id', 'bottomtitle');
  title.append('div')
      .attr('id', 'honeycombtitle')
      .text('Honey-Comb');
  title.append('div')
      .attr('id', 'semantictrajtitle')
      .text('Semantic Traj')
}

function renderHeatMap(node) {
  const heatmapPanel = node.append('div').attr('class', 'heatmapconfigpanel');
  const heatmapHead = heatmapPanel.append('div').attr('class', 'heatmaphead')
      .text('Showing Heatmap');
  heatmapHead.append('input').attr('type', 'checkbox')
      .attr('value', '')
      .attr('id', 'heatmapbox')
      .attr('data-toggle', 'checkbox')
      .attr('checked', MapRender.isStopShow)
      .on('click', function(d) {
        // MapRender.isStopShow = d3.select(this)._groups[0][0].checked;
        MapRender.setStopShow(d3.select(this)._groups[0][0].checked);
        if (MapRender.isStopShow) {
          MapRender.stops.addTo(ShowMap.map);
        } else {
          MapRender.stops.remove();
        }
      });
  const heatmapFoot = heatmapPanel.append('div').attr('class', 'heatmapfoot');
  heatmapFoot.append('div').classed('heatmapslidercontainer', true)
      .append('div').attr('id', 'heatmapslider');
  $('#heatmapslider').slider()
      .slider('option', 'min', 0.01)
      .slider('option', 'max', 1)
      .slider('option', 'step', 0.01)
      .on('slide', function(event, ui) {
        MapRender.STOPPOINT.max = ui.value * 1;
        MapRender.stops.setOptions({max: MapRender.STOPPOINT.max});
      })
}

function renderTrajPanel(node) {
  // show traj's number
  const numContainer = node.append('div').attr('class', 'trajnumcontainer');
  const trajNumLayer = numContainer.append('div').attr('class', 'trajnumlayer');
  trajNumLayer.append('div').attr('id', 'trajnumtext').text(0);
  trajNumLayer.append('span').attr('class', 'trajnumleft');
  trajNumLayer.append('span').attr('class', 'trajnumright');
  numContainer.append('div').attr('class', 'trajnumfoot')
      .append('div').attr('class', 'trajnumfoottext')
      .text('# of Trajectories')
  // append heatmap configuration panel
  node.call(renderHeatMap);
  node.call(renderTrajConfigPanel);
  node.call(renderGroupTrajConfigPanel);
  node.call(renderKmeansConfigPanel);
  node.call(renderFilterOption);
  node.call(renderStandardVector);
}

// append traj configuration panel
export function renderTrajConfigPanel(node) {
  const trajRenderPanel = node.append('div').attr('class', 'trajrenderpanel')
  const trajRenderHead = trajRenderPanel.append('div').attr('class', 'trajrenderhead')
      .text('Showing Trajectories')
      .append('input').attr('type', 'checkbox')
      .attr('value', '')
      .attr('id', 'trajrenderbox')
      .attr('data-toggle', 'checkbox')
      .attr('checked', MapRender.isTrajShow)
      .on('click', function(d) {
        // MapRender.isTrajShow = d3.select(this)._groups[0][0].checked;
        MapRender.setTrajShow(d3.select(this)._groups[0][0].checked);
        if (MapRender.isTrajShow) {
          MapRender.trajs.addTo(ShowMap.map);
        } else {
          MapRender.trajs.remove();
        }
      });
  const trajRenderFoot = trajRenderPanel.append('div').attr('class', 'trajrenderfoot');
  trajRenderFoot.append('span').text('Color').classed('trajpaneltext', true);
  trajRenderFoot.append('input').attr('value', MapRender.TRAJ.color)
      .attr('id', 'trajcolor')
      .attr('class', 'trajpickcolor form-control colorselect')
  $('#trajcolor').on('change', function() {
    MapRender.TRAJ.color = '#' + $(this).val();
    MapRender.trajs.setStyle({color: MapRender.TRAJ.color});
  });
  // $('.trajpickcolor').pickAColor({
  //   showSpectrum: true,
  //   showSavedColors: true,
  //   saveColorsPerElement: true,
  //   fadeMenuToggle: true,
  //   showAdvanced: true,
  //   showBasicColors: true,
  //   showHexInput: true,
  //   allowBlank: true,
  // });
  trajRenderFoot.append('span').text('Opacity').classed('trajpaneltext', true);
  trajRenderFoot.append('input').attr('id', 'trajopacity')
      .attr('class', 'form-control weightinput opacityinput')
      .attr('type', 'text')
      .attr('value', MapRender.TRAJ.opacity)
      .on('keyup', function() {
        const val = $(this).val() * 1;
        // if (val != '' && ((val.split(".").length > 1 &&
        //     val.split(".")[1] != '') || val.split(".").length < 2)) {
        if (window.event.keyCode == '38') {
          MapRender.TRAJ.opacity = val + 0.1;
          MapRender.trajs.setStyle({opacity: MapRender.TRAJ.opacity});
          $(this).val(MapRender.TRAJ.opacity);
        } else if (window.event.keyCode == '40') {
          MapRender.TRAJ.opacity = val - 0.1;
          MapRender.trajs.setStyle({opacity: MapRender.TRAJ.opacity});
          $(this).val(MapRender.TRAJ.opacity);
        }
        // }
      })
  trajRenderFoot.append('span').text('Weight').classed('trajpaneltext', true);
  trajRenderFoot.append('input').attr('id', 'trajweight')
      .attr('class', 'form-control weightinput opacityinput')
      .attr('type', 'text')
      .attr('value', MapRender.TRAJ.weight)
      .on('keyup', function() {
        // if ($(this).val() != '' && (($(this).val().split(".").length > 1 &&
        //     $(this).val().split(".")[1] != '') || 
        //     $(this).val().split(".").length < 2)) {
        const val = $(this).val() * 1;
        if (window.event.keyCode == '38') {
          MapRender.TRAJ.weight = val + 0.1;
          MapRender.trajs.setStyle({weight: MapRender.TRAJ.weight});
          $(this).val(MapRender.TRAJ.weight);
        } else if (window.event.keyCode == '40') {
          MapRender.TRAJ.weight = val - 0.1;
          MapRender.trajs.setStyle({weight: MapRender.TRAJ.weight});
          $(this).val(MapRender.TRAJ.weight);
        }
        // }
      })
  // node.append('div')
  //     .attr('id', 'trajstoptimepanel')
  //     .attr('class', 'weightinput')
  //     .text('Minimum Stop-over Time')
  //         .append('input').attr('id', 'trajstoptime')
  //         .classed('form-control', true)
  //         .attr('type', 'text')
  //         .attr('value', settings.trajstoptime)
  //         .on('keyup', function(e) {
  //           onKeyup(e, 'trajstoptime', DataManager.handleTraj);
  //         })
}
export let presentGroupid = 100;
export function setGroupId(id) {
  presentGroupid = id;
}
export function renderGroupTrajConfigPanel(node) {
  const trajRenderPanel = node.append('div').attr('class', 'trajrenderpanel')
  const trajRenderHead = trajRenderPanel.append('div').attr('class', 'trajrenderhead')
      .text('Group Trajectories')
      .append('input').attr('type', 'checkbox')
      .attr('value', '')
      .attr('id', 'trajrenderbox')
      .attr('data-toggle', 'checkbox')
      .attr('checked', MapRender.isTrajShow)
      .on('click', function(d) {
        let show = d3.select(this)._groups[0][0].checked;
        if (show) {
          MapRender.groupTraj.addTo(ShowMap.map);
        } else {
          MapRender.groupTraj.remove();
        }
      });
  const trajRenderFoot = trajRenderPanel.append('div').attr('class', 'trajrenderfoot');
  trajRenderFoot.append('span').text('Color').classed('trajpaneltext', true);
  trajRenderFoot.append('input').attr('value', 'white')
      .attr('id', 'group-trajcolor')
      .attr('class', 'trajpickcolor form-control colorselect')
  $('#group-trajcolor').on('change', function() {
    const color = '#' + $(this).val();
    GroupMap[presentGroupid] = color;
    MapRender.groupTraj.setStyle({color: color});
  });
  $('.trajpickcolor').pickAColor({
    showSpectrum: true,
    showSavedColors: true,
    saveColorsPerElement: true,
    fadeMenuToggle: true,
    showAdvanced: true,
    showBasicColors: true,
    showHexInput: true,
    allowBlank: true,
  });
  trajRenderFoot.append('span').text('Opacity').classed('trajpaneltext', true);
  trajRenderFoot.append('input').attr('id', 'trajopacity')
      .attr('class', 'form-control weightinput opacityinput')
      .attr('type', 'text')
      .attr('value', MapRender.TRAJ.opacity)
      .on('keyup', function() {
        let val = $(this).val() * 1;
        if (window.event.keyCode == '38') {
          val = val + 0.1;
          MapRender.groupTraj.setStyle({opacity: val});
          $(this).val(val);
        } else if (window.event.keyCode == '40') {
          val = val - 0.1;
          MapRender.groupTraj.setStyle({opacity: val});
          $(this).val(val);
        }
      })
  trajRenderFoot.append('span').text('Weight').classed('trajpaneltext', true);
  trajRenderFoot.append('input').attr('id', 'trajweight')
      .attr('class', 'form-control weightinput opacityinput')
      .attr('type', 'text')
      .attr('value', MapRender.TRAJ.weight)
      .on('keyup', function() {
        let val = $(this).val() * 1;
        if (window.event.keyCode == '38') {
          val = val + 0.1;
          MapRender.groupTraj.setStyle({weight: val});
          $(this).val(val);
        } else if (window.event.keyCode == '40') {
          val = val - 0.1;
          MapRender.groupTraj.setStyle({weight: val});
          $(this).val(val);
        }
      })
}

function renderKmeansConfigPanel(node) {
  const kconfigpanel = node.append('div').attr('class', 'kmeansconfigpanel');
  const head = kconfigpanel.append('div').attr('class', 'kmeanspanelhead');
  head.append('div').attr('class', 'kmeanspanelheadtitle')
      .text('K-means Parameters')
  // head.append('div').attr('class', 'lefthengxian')
  //     .text('------------------------');
  // head.append('div').attr('class', 'righthengxian')
  //     .text('------------------------');
  const foot = kconfigpanel.append('div').attr('class', 'kmeanspanelfoot');
  foot.append('div').attr('class', 'kmeanspanelrow').text('K')
      .append('input').attr('class', 'form-control')
          .attr('id', 'kmeansk')
          .attr('type', 'text')
          .attr('value', 15)
          .on('keyup', function(e) {
            onKeyup(e, 'kmeansk', function() {
              MyKmeans.K = document.getElementById('kmeansk').value * 1;
              MyKmeans.clusterDataByKMeans();
            });
          })
  foot.append('div').attr('class', 'kmeanspanelrow')
      .text('Parameter of Amount Of Staying Points')
      .append('input').attr('class', 'form-control')
          .attr('id', 'khourweight')
          .attr('type', 'text')
          .attr('value', 1)
          .on('keyup', function(e) {
            onKeyup(e, 'khourweight', function() {
              MyKmeans.p0 = document.getElementById('khourweight').value * 1;
              MyKmeans.clusterDataByKMeans();
            });
          })
  foot.append('div').attr('class', 'kmeanspanelrow')
      .text('Parameter of Stopover Time Durations')
      .append('input').attr('class', 'form-control')
          .attr('id', 'kstopweight')
          .attr('value', 2.5)
          .on('keyup', function(e) {
            onKeyup(e, 'kstopweight', function() {
              MyKmeans.p1 = document.getElementById('kstopweight').value * 1;
              MyKmeans.clusterDataByKMeans();
            });
          })
  foot.append('div').attr('class', 'kmeanspanelrow')
      .text('Parameter of Semantics')
      .append('input').attr('class', 'form-control')
          .attr('id', 'ktopicweight')
          .attr('value', 5)
          .on('keyup', function(e) {
            onKeyup(e, 'ktopicweight', function() {
              MyKmeans.p2 = document.getElementById('ktopicweight').value * 1;
              MyKmeans.clusterDataByKMeans();
            });
          })
}

function renderStandardVector(node) {
  const stvPanel = node.append('div').attr('class', 'standardvector');
  const head = stvPanel.append('div').attr('class', 'standardvectorhead');
  head.append('div').attr('class', 'standardvectorheadtitle')
      .text('Standard Vector Parameters')
  head.append('div').attr('class', 'lefthengxian')
      .text('------------------------');
  head.append('div').attr('class', 'righthengxian')
      .text('------------------------');
  const foot = stvPanel.append('div').attr('class', 'standardvectorfoot');
  foot.append('div').attr('class', 'standardvectorrow').text('p0')
      .append('input').attr('class', 'form-control')
          .attr('id', 'standardvectorp0')
          .attr('type', 'text')
          .attr('value', 1)
          .on('keyup', function(e) {
            onKeyup(e, 'standardvectorp0', );
          })
}

function onKeyup(e, id, callback) {
  if (!e) 
    e = window.event;
  if (e.keyCode == 38) {
    document.getElementById(id).value ++;
    callback();
  }
  if (e.keyCode == 40) {
    if(document.getElementById(id).value > 0){
      document.getElementById(id).value --;
    }
    callback();
  }
  if (e.keyCode >= 96 && e.keyCode <= 105) {
    callback();
  }
  if (e.keyCode == 8 && 
    document.getElementById(id).value != '') {
    callback();
  }
}

function renderFilterOption(node) {
  const filterOption = node.append('div').attr('id', 'filteroption');
  const head = filterOption.append('div').attr('class', 'filteroptionhead');
  head.append('div').attr('class', 'filteroptionheadtitle')
      .text('Filtering Options')
  head.append('div').attr('class', 'lefthengxian')
      .text('------------------------');
  head.append('div').attr('class', 'righthengxian')
      .text('------------------------');
  const mid = filterOption.append('div').attr('class', 'filteroptionmid');
  const midLayerData = mid.selectAll('.filteroptionmidlayer')
      .data(function() {
        const data = [];
        const o = [...QueryView.oldConditionList];
        for (let i = 0; i < o.length; i ++) {
          data.push({idx: i, name: o[i]});
        }
        return data;
      });
  midLayerData.exit().remove();
  midLayerData.enter()
      .append('div')
      .attr('class', 'filteroptionmidlayer')
      .call(renderEveryFilterOption);
}

function renderEveryFilterOption(node) {
  node.append('div').attr('class', 'filteroptionele')
      .call(addTimeLayer);
  node.append('div').attr('class', 'filteroptionele')
      .call(addMomentLayer);
  const typeTopicLayer = node.append('div').attr('class', 'filteroptionele');
  typeTopicLayer.append('div').text('The topics of the staying locations :')
      .classed('filteroptiontitle', true);
  addTopicTypeLayer(typeTopicLayer, topicType, 'topic');
  const typeTopicLayer2 = node.append('div').attr('class', 'filteroptionele');
  typeTopicLayer2.append('div').text('POI distribution of the location :')
      .classed('filteroptiontitle', true);
  addTopicTypeLayer(typeTopicLayer2, poiType, 'type');
}

function addTimeLayer(node) {
  node.append('div').text('Stop Time Stamp :')
      .classed('filteroptiontitle', true);
  node.append('input')
      .attr('value', '2014-01-14 00:00:00')
      .classed('filterlefttime', true)
      .on('change', function() {
        updateTime(d3.select($(this).parent().get(0)));
      });
  node.append('div').classed('pozhehao', true).text('~');
  node.append('input')
      .attr('value', '2014-01-14 24:00:00')
      .classed('filterrighttime', true)
      .on('change', function() {
        updateTime(d3.select($(this).parent().get(0)));
      });
}

function updateTime(node) {
  const idx = node.data()[0].idx * 1;
  const time0 = new Date(node.select('.filterlefttime').property('value'))
      .getTime();
  const time1 = new Date(node.select('.filterrighttime').property('value'))
      .getTime();
  if (!filterOptions.has(idx)) {
    filterOptions.set(idx, new Map());
  }
  filterOptions.get(idx).set('time', [time0, time1]);
}

const sliderWidth = 500;
function addMomentLayer(node) {
  node.append('div').text('Stop-over Time: ')
      .classed('filteroptiontitle', true);
  const select = node.append('div')
      .classed('filteroptionslide', true)
      .attr('id', o => 'momentslider' + o.idx);
  const beginCursor = node.append('div').text(0)
      .classed('begincursortxt', true);
  const endCursor = node.append('div').text(sliderWidth)
      .classed('endcursortxt', true);
  const idx = node.data()[0].idx * 1;
  $('#momentslider' + idx).slider({
    range: true,
    min: 0,
    max: sliderWidth,
    values: [0, sliderWidth],
    slide: function(event, ui) {
      $(this).next('.begincursortxt')
          .css('left', 4+ui.values[0]/sliderWidth*325)
          .text(ui.values[0]);
      $(this).next().next('.endcursortxt')
          .css('left', ui.values[1]/sliderWidth*325)
          .text(ui.values[1]);
      updateMoment(idx, [ui.values[0]/100, ui.values[1]/100]);
    }
  });
}

function updateMoment(idx, time) {
  if (!filterOptions.has(idx)) {
    filterOptions.set(idx, new Map());
  }
  filterOptions.get(idx).set('moment', time);
}

let sliderId = 0;
function addTopicTypeLayer(node, data, type) {
  const selects = node.append('div').classed('filteroptionselects', true);
  const selectData = selects.append('select')
      .classed('filteroptionselect', true)
      .on('change', function() {
        const now = d3.select(this);
        if (now.property('value') !== SELECT && 
            !now.classed('filteroptionchanged')) {
          const select = selects.append('div')
              .classed('filteroptionslide2', true)
              .attr('name', now.property('value'))
              .attr('id', o => 'filteroptionselect' + sliderId ++);
          const idx = select.data()[0].idx * 1;
          const propertyname = now.property('value');
          const beginCursor = selects.append('div').text(0)
              .classed('begincursortxt2', true);
          const endCursor = selects.append('div').text(100)
              .classed('endcursortxt2', true);
          $('#filteroptionselect' + (sliderId-1)).slider({
            range: true,
            min: 0,
            max: 100,
            values: [0, 100],
            slide: function(event, ui) {
              $(this).next('.begincursortxt2')
                  .css('left', 130+ui.values[0]/100*195)
                  .text(ui.values[0]);
              $(this).next().next('.endcursortxt2')
                  .css('left', 120+ui.values[1]/100*195)
                  .text(ui.values[1]);
              updateTopicType(idx, type, null, propertyname, [ui.values[0]/100, 
                  ui.values[1]/100]);
            }
          })
          now.classed('filteroptionchanged', true);
          addTopicTypeLayer(node, data, type);
        }
      })
      .selectAll("option")
      .data(data);
  selectData.enter()
      .append('option')
      .text(o => o);
}

function updateTopicType(idx, type, prePropertyName, propertyName, range) {
  if (!filterOptions.has(idx)) {
    filterOptions.set(idx, new Map());
  }
  let data = new Map();
  if (filterOptions.get(idx).has(type)) {
    data = filterOptions.get(idx).get(type);
  }
  if (prePropertyName) {
    data.delete(prePropertyName);
  }
  data.set(propertyName, range);
  filterOptions.get(idx).set(type, data);
}

function checkTraj(traj, idx) {
}