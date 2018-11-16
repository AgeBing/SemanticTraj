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

datamanager.init()
  .then(o => queryview.init())