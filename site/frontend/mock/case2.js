
/*
	Case Two 
	
	1. 温州大学

*/





export let mock_sites =[ ]
export let  mock_sites_origin = [
  21938 
]

// 大学
mock_sites[0]  =  [ 
	// 21938 , 24817 

	// 927,8301,17101,2267,27063  //21938 的 neighbor
	8301,21938,27063,16711,9969,12617,12495,3750,10353,27063,21938,17101,15435,1856,16938,17101,21938,927,12617,21938,8301,16938,15435,2267,21938,2267,10353,11155,17461,14223,22415,16711,927
]  

	// 医院 
// mock_sites[1] = [25950, 8176, 2682, 770, 18644, 8194, 13076, 1764, 2217, 14207, 25157, 13076, 28068, 14775, 23547, 17103, 2682, 23665, 11544, 25157]

mock_sites[1] = []

export let mock_traj_ids = [
    [  //  温州大学
      '460078578421760',   
		'460002032335584',    
		'460027570805270',   
		'460023885619324'
    ],

    [  // 温州医科大学  医院
		'460006627063118',   
		'460006876047930',   
		'460027577227015',   
		'460023889136178'
    ]
  ]
