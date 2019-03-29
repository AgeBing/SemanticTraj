
/*
  Case One 
  1. 查询景点/旅游

  2. 查询 江心屿、物华天宝  

  3. 调整 两个 卡片 的 order 继续查询
*/


import { MockSites  } from '../app/app'
export let  mock_sites = []
export let  mock_sites_origin = [
  25655 , 5399
]

// 22465 江西屿
mock_sites[0] = 
  // [26859, 18450, 22465, 22465, 22465, 9641, 22465, 22465, 25655, 25655, 25655, 6595, 22465, 7293, 22465, 19653, 22465, 22465, 25150],
  // [22465],
  // [6595,25655,15300,209,9944,24724,28602],
  [9947,24724,22465,209,23294,7832,5367,6595,22465,24724,14035,28602,22465,9944,9947,14035,22465,15300,8997,27374,10708,24620,23294,9944,209,22465,25655,12451,4912,8997,15668,13683,12451,15300,22465,6595,13611,13611,25655,22465,28602,5367,3604,16893,12878,9016,1579,9531,400,1193,7257,13516],

// 5399 物华天宝
mock_sites[1] = 
  // [5399],
  // [5399,18286,1707,18267,8999,22690]，
  // [25324,18267,5399,18286,25326,18286,1707,18267,8999,22690,22690,5399,18267,25338,9246,11043,5399,1707,25324,25338,8999,25326,1707,5399,22690,565,8269,5476,25307,11043,17770,18007,565,18286,5399,8999] 
  // [21806,8269,18286,22690,18007,25324,18267,5399,18286,25326,18286,1707,18267,8999,22690,18286,8269,7237,24397,25307,21741,22016,7237,5476,18286,565,21806,22690,5399,18267,25338,9246,11043,25338,17569,20631,28125,11043,8999,28125,1446,17770,22690,8999,9246,11043,1446,18007,22690,1446,14904,13643,2093,20024,16812,21806,565,22690,17770,5399,1707,25324,25338,8999,25326,1707,5399,22690,565,8269,5476,25307,11043,17770,18007,565,18286,5399,8999,27432,25326,18286,5476,24397,18267,1707,25326,25712,25338,25307,27432,25712,25324,1707,18286,18267,25324,25712,17569,9246,8999],
  [21806,8269,18286,22690,18007,11268,14904,18007,17770,11043,28125,22216,25324,18267,5399,18286,25326,13995,17103,20024,18007,13643,19023,18286,1707,18267,8999,22690,18286,8269,7237,24397,25307,5476,8269,22016,21743,4808,1840,19552,7311,24397,21741,22016,7237,5476,18286,565,21806,22690,5399,18267,25338,9246,11043,25338,17569,20631,28125,11043,8999,28125,1446,17770,22690,8999,9246,2093,18007,14904,13668,19023,18007,1446,11268,13668,13643,20024,566,23378,9219,12391,21741,21806,18007,25338,25712,1664,2151,13076,27261,3120,20631,9246,11043,1446,18007,22690,1446,14904,13643,2093,20024,16812,21806,565,22690,17770,5399,1707,25324,25338,8999,25326,1707,5399,22690,565,8269,5476,25307,27116,566,16812,18007,2093,17103,23807,3120,13225,27562,28125,9246,17569,22016,8269,21806,16812,12391,18007,16812,21741,8269,565,8269,21741,12391,21743,7237,11043,17770,18007,565,18286,5399,8999,10029,2167,10933,27432,25307,5476,7237,7311,27432,25326,18286,5476,24397,18267,1707,25326,25712,25338,25307,27432,25712,25324,1707,18286,18267,25324,25712,17569,9246,8999,25338,25324,25326,27432,1664,17569,1664,25712,25326,25307,24397,10933,11043,9246,20631,27562,22216,1446]

/* 
  用于替换 searchbar 中 addSearchListener 的查询参数
*/


export let mock_traj_ids = [
    [  //  景点
      '460008954530918',
      '460007723625200',
      '460006952341674',
      '460005731906902'
    ],
    [   // 正向
      '460006160659022',
      '460006677057373',
      '460006302329011'
    ],
    [  // 反向
      '460021577731990', 
      '460002042353407',
      '460007753549773',
      '460008523666216',
      '460002072341110',
      '460005410764652',
      '460006677057373',
      '460005871160409',
      '460006270651477',
      '460007723535774',
      '460006525030570'
    ]
  ]



