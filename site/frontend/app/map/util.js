/* 数据转换
	l : 经纬度
	p : 相对于 左上角 的 像素 位置
	i : 矩阵 index
*/ 

import * as d3 from 'd3';

import { boundry,zoom } from './index'


let  visBox = document.getElementById("map-container");
let  height = visBox.offsetHeight; //高度
let  width = visBox.offsetWidth; //宽度



let t_boundry , t_width , t_height ,left ,top ,old_t_boundry ,old_zoom


/*
	经纬度排列
	--------->  lng
	^
	|
	|
	|
	|  lat

	pixel 排序
	--------->  x
	|
	|
	|
	|
	V  y
*/


// latlng -> pixel position
//使用  t_boundry  大的瓦片 boundry
// 根据 boundryPixel 等比例转换 相对于左上角的位置


function _l2p(lat,lng) {    
	let lngWidth = t_boundry.top_right.lng - t_boundry.bottom_left.lng,
		latHeight = t_boundry.top_right.lat - t_boundry.bottom_left.lat,
		widthPixel = t_width,
		heightPixel = t_height;

	if( lat > t_boundry.top_right.lat || lat < t_boundry.bottom_left.lat 
		|| lng > t_boundry.top_right.lng || lng < t_boundry.bottom_left.lng)  //超出视窗
		return [-1,-1]


	let x = Math.round( (lng - t_boundry.bottom_left.lng) / lngWidth*widthPixel) , 
		y = Math.round( (t_boundry.top_right.lat - lat) / latHeight*heightPixel)

	// console.log(x,y)
    return [x,y]
}

// 与上个函不能互相转换 
// 使用 v_boundry 视窗的边界
function _p2l(x,y){
	let v_boundry = boundry

	let lngWidth = v_boundry.top_right.lng - v_boundry.bottom_left.lng,
		latHeight = v_boundry.top_right.lat - v_boundry.bottom_left.lat,
		widthPixel = width,
		heightPixel = height;

	if(x > width || x < 0 || y > height || y < 0)  return { lng:-1,lat:-1 }

	let lng =  x / widthPixel * lngWidth + v_boundry.bottom_left.lng ,
		lat =  v_boundry.top_right.lat -  y / height * latHeight 

	// 0.00001 => 赤道长 1米
	lng = lng.toFixed(5)
	lat = lat.toFixed(5)

	return {
		lng,
		lat
	}

}




// 相对视图边界的像素坐标
function _l2pb(lat,lng) {
	lat = parseFloat(lat)
	lng = parseFloat(lng)

	let lngWidth = boundry.top_right.lng - boundry.bottom_left.lng,
		latHeight = boundry.top_right.lat - boundry.bottom_left.lat,
		widthPixel = width,
		heightPixel = height;

	let re = [0,0]

	// if( lat > boundry.top_right.lat || lat < boundry.bottom_left.lat 
	// 	|| lng > boundry.top_right.lng || lng < boundry.bottom_left.lng)  //超出视窗
	// 	return [-1,-1]

	if(lat >= boundry.top_right.lat || lat <= boundry.bottom_left.lat){
		if(lat >= boundry.top_right.lat) re[1] = 0
		if(lat <= boundry.bottom_left.lat) re[1] = heightPixel
	}else{
		re[1]  = Math.round( (boundry.top_right.lat - lat) / latHeight*heightPixel)
	}

	if(lng >= boundry.top_right.lng || lng <= boundry.bottom_left.lng){
		if(lng >= boundry.top_right.lng)  re[0]  = widthPixel
		if(lng <= boundry.bottom_left.lng) re[0] = 0
	}else{
		re[0] = Math.round( (lng - boundry.bottom_left.lng) / lngWidth*widthPixel)
	}

	return re
    // return [x,y]
}




/* 经纬度转成瓦片编号（左上角）

	tile 序号排列
	--------->  x
	|
	|
	|
	|
	v  y

*/

function _l2t(lon,lat){
	let x = long2tilex(lon,zoom),
		y = lat2tiley(lat,zoom)

	return [x,y]
}
function long2tilex(lon){
	let z = zoom
 	return (Math.floor((lon+180)/360*Math.pow(2,z))); }
function lat2tiley(lat) {
	let z = zoom
 	return (Math.floor((1-Math.log(Math.tan(lat*Math.PI/180) + 1/Math.cos(lat*Math.PI/180))/Math.PI)/2 *Math.pow(2,z))); }



function tile2long(x){
	let z = zoom
	return (x/Math.pow(2,z)*360-180);}
function tile2lat(y){ 
	let z = zoom
	var n=Math.PI-2*Math.PI*y/Math.pow(2,z);return (180/Math.PI*Math.atan(0.5*(Math.exp(n)-Math.exp(-n)))); }



// 获取 瓦片视图上的 位置
// 每当 boundry 变化需要更新
function updateTileBoundry(){ 
	let v_boundry = boundry , v_number
	let ic = isChanged(v_boundry)

	if(ic){

		v_number = {
			top_right : {
				x : long2tilex( v_boundry.top_right.lng ) + 2,
				y : lat2tiley(  v_boundry.top_right.lat ) - 1
			},
			bottom_left: {
				x : long2tilex( v_boundry.bottom_left.lng) - 1 ,
				y : lat2tiley(  v_boundry.bottom_left.lat) + 2
			}
		}
	 	t_boundry = {
			top_right: {
				lng : tile2long( v_number.top_right.x ),
				lat : tile2lat(  v_number.top_right.y )
			},
			bottom_left: {
				lng : tile2long( v_number.bottom_left.x ),
				lat : tile2lat(v_number.bottom_left.y)
			}
		}

		old_t_boundry = t_boundry
	}


	t_width = Math.floor( width * 
		( t_boundry.top_right.lng - t_boundry.bottom_left.lng )
		/( v_boundry.top_right.lng - v_boundry.bottom_left.lng )  )
	t_height = Math.floor( height * 
		( t_boundry.top_right.lat - t_boundry.bottom_left.lat )
		/( v_boundry.top_right.lat - v_boundry.bottom_left.lat ) )

	left = Math.floor( t_width * 
		( v_boundry.bottom_left.lng  - t_boundry.bottom_left.lng )
		/ ( t_boundry.top_right.lng - t_boundry.bottom_left.lng ) )
	top = Math.floor( t_height *
		(t_boundry.top_right.lat - v_boundry.top_right.lat)
		/(  t_boundry.top_right.lat - t_boundry.bottom_left.lat ))


	// console.log(v_number, v_boundry, t_boundry,width,height,t_width,t_height,left,top)


	return ic
}

function isChanged(new_t_boundrt){
	let old_t_boundry = t_boundry

	if(!old_zoom  || old_zoom != zoom){
		old_zoom = zoom
		return true
	}

	if( old_t_boundry &&
		new_t_boundrt.top_right.lng <= old_t_boundry.top_right.lng &&
		new_t_boundrt.top_right.lat <= old_t_boundry.top_right.lat &&
		new_t_boundrt.bottom_left.lng >= old_t_boundry.bottom_left.lng &&
		new_t_boundrt.bottom_left.lat >= old_t_boundry.bottom_left.lat 
	)
		return false
	return true
}


// loading 效果
let loading

function showLoading(){
	if(!loading) loading = d3.select('#loading')
	loading.style("display", 'block'); 
}

function hideLoading(){
	loading.style("display", 'none'); 
}



//  data
function getData(data){
	  let url = "http://localhost:3000/"+'trajdata'
	  return fetch(url, {
	    body: JSON.stringify(data), // must match 'Content-Type' header
	    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
	    credentials: 'same-origin', // include, same-origin, *omit
	    headers: {
	      'user-agent': 'Mozilla/4.0 MDN Example',
	      'content-type': 'application/json'
	    },
	    method: 'GET', // *GET, POST, PUT, DELETE, etc.
	    mode: 'cors', // no-cors, cors, *same-origin
	    redirect: 'follow', // manual, *follow, error
	    referrer: 'no-referrer', // *client, no-referrer
	  })
	  .then(response => response.json()) // parses response to JSON
}

async function loadTrajsData() {
	let  t1 = new Date().getTime();
	console.log("Loading Data....")
	let data = await getData()

	let  t2 = new Date().getTime();
	console.log('loaddata : ' + (t2-t1) + 'ms')
	// return data.slice(0,10)
	return data
}




/*16进制颜色转为RGB格式*/  
function color2rgb(hexoColor,opacity){  
	var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;  
    var sColor = hexoColor.toLowerCase();  
    if(sColor && reg.test(sColor)){  
        if(sColor.length === 4){  
            var sColorNew = "#";  
            for(var i=1; i<4; i+=1){  
                sColorNew += sColor.slice(i,i+1).concat(sColor.slice(i,i+1));     
            }  
            sColor = sColorNew;  
        }  
        //处理六位的颜色值  
        var sColorChange = [];  
        for(var i=1; i<7; i+=2){  
            sColorChange.push(parseInt("0x"+sColor.slice(i,i+2)));    
        }  

        //转换为rgba,透明度为传递的参数x；

        return "rgba(" + sColorChange.join(",") + ","+opacity+")"; 

        //转换为rgb，此时不用传递参数      

         //return "rgb(" + sColorChange.join(",") + ")";   

    }else{  
        return sColor;    
    }  
}; 






export {  _l2p  , _l2pb , _p2l ,updateTileBoundry, showLoading ,hideLoading , loadTrajsData ,
	 t_boundry , t_width , t_height ,left ,top , color2rgb } 


