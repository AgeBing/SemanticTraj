import '../css/main.css';
import 'bootstrap/less/bootstrap.less';

const WELCOM = 'WELCOM EVT!';
console.log(WELCOM);

import * as DataManager from './datamanager.js';
// import * as QueryView from './queryview.js';
import * as ShowMap from './showmap.js';
import * as ConfigPanel from './configpanel.js';
import * as NewQueryView from './newqueryview.js';
import * as VectorConfig from './vectorconfig.js';

ShowMap.loadMap();
ConfigPanel.addMapConfig();
// ConfigPanel.addKmeandConfigAndTitle();

// initialize the system
DataManager.init()
  // .then(o => DataManager.dataReady = true)
  .then(o => NewQueryView.init())
  // .then(o => QueryView.init())
  // .then(o => VectorConfig.init())
  // .then(o => ConfigPanel.init())


// import {TimeAxle} from './timeaxle.js';

// const tt = new TimeAxle('test', {width: 800, height: 40, top: 0, left: 0}, '2013-05-01');
// console.log(tt.getTime());

// import * as Blog from './blog.js';
// Blog.query()
// ConfigPanel.init();
