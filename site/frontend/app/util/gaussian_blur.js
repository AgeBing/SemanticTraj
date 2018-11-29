/* 实现矩阵高斯平滑 */
/*
	参考 http://www.ruanyifeng.com/blog/2012/11/gaussian_blur.html
	https://zhuanlan.zhihu.com/p/43907816
*/

var PI = Math.PI
var E = Math.E
var sigma = 1.5


function gaussian_fn(x,y){ 
	return  1 / ( 2 * PI * sigma * sigma) * Math.exp(- (x*x  + y*y)/(2*sigma*sigma))

}

function getWeight(r){
	let weightArr = []
	let sum = 0
	let bias_x , bias_y
	for(let i = 0;i < 2*r ;i++){
		weightArr[i] = []
		for(let j = 0;j < 2*r;j++){
			bias_x = i - r
			bias_y = j - r 
			weightArr[i][j] = gaussian_fn(bias_x,bias_y)
			// console.log(weightArr[i][j])
			sum += weightArr[i][j]
		}
	}
	for(let i = 0;i < 2*r ;i++){
		for(let j = 0;j < 2*r;j++){
			// console.log(i,j,weightArr[i][j],sum)	
			weightArr[i][j] = weightArr[i][j] / sum
		}
	}
	// console.log(weightArr)
	return weightArr
}
function getVal(arr,r,xy,weight){
	let x = xy[0] , y = xy[1]
	let min_x = x - r , max_x = x + r 
	let min_y = y - r , max_y = y + r
	let height = arr[0].length
	let width = arr.length
	let p = 0
	for(let i =  min_y;i < max_y;i++){
		for(let j = min_x;j < max_x;j++){
			let now_x = j
			let now_y = i
			if(i < 0) now_y = -i
			if(j < 0) now_x = -j
			if(i > height -1)  now_y = height - i 
			if(j > width - 1)   now_x = width  - j

			let w = weight[j - min_x][i - min_y]
			try{
			p += arr[now_x][now_y] * w
			}catch(e){
				console.log("err",i,j,now_x,now_y,xy,width,height)
			}
		}
	}
	return p
}

function gaussian_blur(_matrix){  //r 模糊半径
	// console.log("gb",matrix)
	let width = _matrix.length
	let height =  _matrix[0].length

	let matrix = new Array(width)
	for(let  i = 0 ; i < width;i++){
		matrix[i] = _matrix[i].slice(0,height)
	}
	

	let r = 2
	let weight = getWeight(r)
	// console.log(r,matrix)


	for(let y = 0;y < height;y++){
		for(let x = 0;x < width;x++){
			matrix[x][y] = getVal(matrix,r,[x,y],weight)
		}
	}
	return matrix
	// console.log(matrix)
}

export  {
	gaussian_blur as blur
}