import { clip } from './liang-barsky'
import { blur } from './gaussian_blur'
import { debug } from './debug'

let x_num = 70,y_num

let v_boundry 

let last_matrix   //矩阵缓存，存储上一次的矩阵数据

let matrix_xy2Traj_id = new Map()   //2纬 Map 

let max_val = 0 // 全局值的最大值 


function getData(data,bottom_left,top_right) {
	v_boundry = { bottom_left,top_right }   //更新全局变量

	let matrix = _create_matrix()

	let ps = []

	data.forEach((one_traj) => {
		ps = ps.concat(_genePoints(one_traj['points'],one_traj['id']))
	})
	let matrix_added =  _addToMatrix(matrix,ps)

	let matrix_added_blured = blur(matrix_added)    // 高斯模糊

	let latlngPointsSequence = _matrix2Sequence(matrix_added_blured)

	// let latlngPointsMatrix   = _matrix2matrix(matrix_added_blured)
	
	last_matrix = matrix_added_blured

	return latlngPointsSequence
}


function _create_matrix(){
	let { bottom_left,top_right }	=  v_boundry 

	let lat_width = top_right['lat'] - bottom_left['lat']   //纬度  -> y
	let lng_width = top_right['lng'] - bottom_left['lng']   //经度  -> x

	let lng_width_per_grid = lng_width / x_num       //横向跨度切分 
	
	// 需要考虑精确度
	y_num = Math.ceil(lat_width / lng_width_per_grid)  //?? 正方形

	// x * y
	let matrix = new Array(y_num)

	for(let i = 0;i < y_num;i++){
		
		matrix_xy2Traj_id.set( i , new Map())

		matrix[i] = new Array(x_num)
		
		for(let j = 0;j < x_num;j++){
			matrix[i][j] = 0

			matrix_xy2Traj_id.get(i).set( j  , new Set() )
		}
	}
	return matrix
}
// function _import_data(){
// 	let path_trajectory = 'data/trajectory_transed_3K.json'
// 	let data_trajectory = fs.readFileSync(path_trajectory)
//   	data_trajectory = JSON.parse(data_trajectory.toString())
//   	return data_trajectory
// }
function _genePoints(points,id){ 	//一条轨迹中的点
	let p1,p2		//相邻两个点
	let ps =  []
	for(let i = 1;i < points.length;i++){
		p1 = points[i-1]['coor']
		p2 = points[i]['coor']
		if(p1 && p2)  {
			
			let _ps = _genePoints_between2P(p1,p2)
			
			_ps = _ps.map((p)=>{
				p.id = id 
				return p
			})

			ps = ps.concat( _ps )
		}
	}	
	return ps
}
function _genePoints_between2P(p1,p2){		//经纬度坐标系
	if((p1['lon'] == p2['lon']) && (p1['lat'] == p2['lat']))  return [] //同一点

	// 线截断  经纬度？？
	let { bottom_left,top_right }	=  v_boundry 
	let box = [ bottom_left['lat'], 
		bottom_left['lng'],
		top_right['lat'],
		top_right['lng']
	]
	let a = [p1['lat'],p1['lon']] , b = [p2['lat'],p2['lon']]
	let a_n = a.slice() , b_n = b.slice()

	let clip_res = clip(a, b,box, a_n, b_n); // returns 1 - "clipped"
	if(!clip_res)  return []  //两点成的线不经过 视图矩形

	//生成两点间的点
	//latlng => viewGridIndex
	let pa = _l2v(a_n) , pb = _l2v(b_n)
	let ps = [], pt , k

	if(pa[0] == pb[0] && pa[1] == pb[1]) return [ { x: pa[0],y: pa[1] } ]

	if(pa[0] < pb[0]){
		pt = pb
		pb = pa
		pa = pt
	}
	for(let i = pb[0] ;i < pa[0];i++){
		k = (pa[1] - pb[1])/(pa[0] - pb[0])
		ps.push({
			x : i,
			y : Math.round( (i - pb[0])*k + pb[1])
		}) 
	}
	if(pa[1] < pb[1]){
		pt = pb
		pb = pa
		pa = pt
	}
	for(let i = pb[1] ;i < pa[1];i++){
		k = (pa[0] - pb[0])/(pa[1] - pb[1])
		let x = Math.round( (i - pb[1])*k + pb[0])
		if(isNaN(x)) console.log('isNan',pb,k)
		ps.push({
			x: Math.round( (i - pb[1])*k + pb[0]),
			y: i
		}) 
	}
	return ps
}

function _addToMatrix(matrix,ps){    
	ps.forEach((p) => {
		let x = p['x']
		let y = p['y']

		// ??????
		if(y >=  matrix.length) y--;
		if(x >=  matrix[0].length) x--;

		try{
			matrix[y][x]++;     // y => 第一纬度  x => 第二纬度
		}catch(e){
			console.log("err ",x,y)
		}

		let map_xy =  matrix_xy2Traj_id.get(y).get(x)
		map_xy.add( p['id'] )

	})
	return matrix
}
function _matrix2Sequence(matrix){
	let distribution = []
	let sequence = [],maxval = 0
	for(let y = 0;y < matrix.length;y++){
		for(let x = 0;x < matrix[y].length;x++){
			let latlng = _v2l([x,y])
			let val = matrix[y][x]
			maxval = ( maxval < val ? val : maxval)

			let d_i = Math.floor(val/2)
			distribution[d_i] = distribution[d_i] == undefined ? 1 : distribution[d_i]+1
			sequence.push({
				'lat' :  latlng[0],
				'lng' :  latlng[1],
				'val' :  val
			})
		}
	}


	max_val = ( maxval > max_val ) ? maxval : max_val

	debug('distribution:',distribution)
	let reObj = {
		sequence : sequence,
		summery: {
			maxval : max_val,
			x_num : matrix[0].length,
			y_num : matrix.length
		}
	}

	return reObj
}
function _matrix2matrix(matrix){
	let matrix_ = matrix.slice()
	for(let y = 0;y < matrix.length;y++){
		for(let x = 0;x < matrix[y].length;x++){
			let latlng = _v2l([x,y])
			matrix_[y][x] = {
				'lat' :  latlng[0],
				'lng' :  latlng[1],
				'val' :  matrix[y][x]
			}
		}
	}
	return matrix_
}

//  经纬度 与 在视图上的方格索引 间转换
//  latlon => viewGridIndex
function _l2v(latlon){    //[lat,lng]
	let { bottom_left,top_right }	=  v_boundry 
	
	let lng_width = top_right['lng'] - bottom_left['lng']   //精度  -> x
	let lng_w =  latlon[1] - bottom_left['lng'] 
	let x_i = Math.floor(lng_w / lng_width * x_num)

	let lat_width = top_right['lat'] - bottom_left['lat']   //纬度  -> y
	let lat_w =  top_right['lat'] - latlon[0]
	let y_i = Math.floor(lat_w / lat_width * y_num)

	//  注意运算后的值可能超出视窗 
	x_i = (x_i < 0) ? 0 : x_i
	x_i = (x_i > x_num) ? x_num - 1: x_i
	y_i = (y_i < 0) ? 0 : y_i
	y_i = (y_i > y_num) ? y_num - 1: y_i
 
	return [ x_i , y_i ]
}
//  viewGridIndex => latlon_of_gridCornor
function _v2l(xy){		// [x,y]
	let { bottom_left,top_right }	=  v_boundry 
	let lng_width = top_right['lng'] - bottom_left['lng']   //精度  -> x
	let lat_width = top_right['lat'] - bottom_left['lat']   //纬度  -> y

	let x_i = xy[0] , y_i = xy[1]
	let lat = top_right['lat']    -  y_i / y_num * lat_width
	let lng = bottom_left['lng']  +  x_i / x_num * lng_width

	return  [ lat ,lng ]
}





/*
	th ： 
		min : 选取时设定的最小值  若 val 比其小 则舍去

		max : 扩散过程中的 相邻值 差值 的最大值 ， 若差值大于其则停止扩散

*/
function getHighLight(th,topLeft,bottomRight){
	let matrix = last_matrix

	let v_top_left = _l2v([topLeft['lat'],topLeft['lng']])
	let v_bottom_right = _l2v([bottomRight['lat'],bottomRight['lng']])

	debug(v_top_left,v_bottom_right,matrix)
	let Q  = []    //队列
	let S  = []	   //集合
	let R  = {}    //返回值

	let th_min = th.min
	for(let y = v_top_left[1];y <=v_bottom_right[1];y++){
		for(let x = v_top_left[0];x <=v_bottom_right[0];x++){
			let val = matrix[y][x]

			if(val < th_min) continue
			Q.push({ x,y,val })
			S.push( x+","+y )
		}
	}


	let th_max = th.max

	while(Q.length){
		let c =  Q.shift()
		let xy = [{
			x : c.x - 1,
			y : c.y
		},{
			x : c.x + 1,
			y : c.y
		},{
			x : c.x,
			y : c.y - 1
		},{
			x : c.x,
			y : c.y + 1
		}]

		xy.forEach((_xy)=>{
			let s = _xy.x + ","+ _xy.y

			let cond3 = _xy.x >= x_num || _xy.x < 0 || _xy.y >= y_num || _xy.y < 0 
			if(cond3)  return true //进入下一个循环 

			let c_val = matrix[_xy.y][_xy.x]
			// let cond1 = ( Math.abs(c_val - c.val) < th_max )
			let cond2 = (S.indexOf(s)  == -1 )
			let cond4 = c_val >= th_min

			if(cond2 && cond4){
				S.push(s)
				Q.push({
					x: _xy.x,
					y: _xy.y,
					val:c_val
				})
			}
		})
	}

	S.forEach((s) => {
		let s_ = s.split(",").map((a)=>parseInt(a,10))
		let x = s_[0]
		let y = s_[1]

		if(!R[y]) R[y] = []
			R[y].push(x)
	})

	return {
		ps : R,
		x_num : x_num
	}
}


//获取经过高亮区域的轨迹 
function getTrajsThroughHL(lines_data , coor){
	let trajs_id = new Set()
	let trajs = []

	let timeRange = []


	for(let y in coor){
		coor[y].forEach((x)=>{
			let s = matrix_xy2Traj_id.get(+y).get(+x)

			for (let e of s) {
				trajs_id.add(e)
			}
		})
	}

	for(let traj_id of trajs_id){
		lines_data.forEach((line)=>{
			if( traj_id == line.id ){
				trajs.push(line)

				// 计算 timeRange
				line.points.forEach((p)=>{
					let date = p.date 
					let time = p.time 
					let _t = new Date(date + 'T' + time)
					if(!timeRange[0]){
						timeRange[0] = _t
						timeRange[1] = _t
					}else{
						if(_t.getTime() < timeRange[0].getTime())
							timeRange[0] = _t
						if(_t.getTime() > timeRange[1].getTime())
							timeRange[1] = _t						
					}

				})


				return false
			}
		})
	}
	// console.log(trajs)
	return {
		ps : trajs,
		timeRange:timeRange
	}
}


// function getHighLight(topLeft,bottomRight){
// 	let matrix = last_matrix
// 	let v_top_left = _l2v([topLeft['lat'],topLeft['lng']])
// 	let v_bottom_right = _l2v([bottomRight['lat'],bottomRight['lng']])

// 	let maxval = 0 ,maxval_xy = { x:v_top_left[0],y:v_top_left[1]}
// 	// console.log(v_top_left,v_bottom_right)


// 	// 找到框选中的最大 点 以他为中心
// 	for(let y = v_top_left[1];y <=v_bottom_right[1];y++){
// 		for(let x = v_top_left[0];x <=v_bottom_right[0];x++){

// 				if( matrix[y][x] > maxval ){
// 					maxval = matrix[y][x]
// 					maxval_xy = { x,y }
// 				}


// 		}
// 	}



// 	//阈值
// 	let K = maxval * 0.6

// 	//向四个方向找
// 	let direct = { up:0 ,down:0,left:0,right:0 }
// 	let direct_bool = { up:true,down:true,left:true,right:true }
// 	let step = 1
// 	let c_x = maxval_xy['x'],c_y = maxval_xy['y']
// 	while(1){
// 		step++

// 		if( direct_bool['up'] ){
// 			if( c_y - step < 0){
// 				direct_bool['up'] = false
// 			}else{
// 				if( maxval - matrix[c_y - step][c_x] > K){
// 					direct_bool['up'] = false
// 				}else{
// 					direct['up'] = step
// 				}
// 			}
// 		}

// 		if( direct_bool['down'] ){
// 			if( c_y + step >= y_num){
// 				direct_bool['down'] = false
// 			}else{
// 				if( maxval - matrix[c_y + step][c_x] > K){
// 					direct_bool['down'] = false
// 				}else{
// 					direct['down'] = step
// 				}
// 			}
// 		}

// 		if( direct_bool['left'] ){
// 			if( c_x - step < 0){
// 				direct_bool['left'] = false
// 			}else{
// 				if( maxval - matrix[c_y][c_x - step] > K){
// 					direct_bool['left'] = false
// 				}else{
// 					direct['left'] = step
// 				}
// 			}
// 		}

// 		if( direct_bool['right'] ){
// 			if( c_x + step >= x_num){
// 				direct_bool['right'] = false
// 			}else{
// 				if( maxval - matrix[c_y][c_x + step] > K){
// 					direct_bool['right'] = false
// 				}else{
// 					direct['right'] = step
// 				}
// 			}
// 		}

// 		if( !direct_bool['up'] 
// 			&& !direct_bool['down'] 
// 			&& !direct_bool['left']
// 			&& !direct_bool['right'])  
// 			break

// 	}
// 	console.log(direct)

// 	let ps = {}
// 	for(let y = c_y - direct['up']; y < c_y + direct['down'];y++){
// 		for(let x = c_x - direct['left']; x < c_x + direct['right'];x++){
// 			if(maxval - matrix[y][x] < K) {
// 				if(!ps[y]) ps[y] = []
// 				ps[y].push(x)
// 			}
// 		}
// 	}

// 	let reObj = {
// 		ps : ps,
// 		x_num : x_num
// 	}
// 	return reObj 
// 	// console.log(direct,direct_bool)

// }



// 需先计算 getData 后计算 getHL ，依赖 boundry,matrix






export { getData,getHighLight,getTrajsThroughHL }