import * as d3 from 'd3';



export function bindTimeChangeEvent() {
	
	d3.selectAll('.timeconstraints').selectAll('input').on('input',()=>{
		clearWarning(d3.event.target)
	})


	d3.selectAll('.timeconstraints').selectAll('input').on('change',()=>{
		let nodeId = d3.event.target.parentNode.parentNode.parentNode.id,  //condition_node1
			timeType = d3.event.target.className.split(' ')[0] , 		   // starttime textinput
			timeValue = d3.event.target.value
		if(!testTime(timeValue)){
			showWarning(d3.event.target)
		}else{

			//  修改时间
		}
	})

}



function showWarning(el){
	console.log(el)
	d3.select(el).style('border-color', 'red')
}
function clearWarning(el){
	d3.select(el).style('border-color', 'rgb(171, 171, 171)')
}


// 测试日期是否符合以下格式 
function testTime(time){
	var currentFormat="YYYY.MM.dd HH:mm";//输入常见日期格式
 
	currentFormat = currentFormat  //优先替换特殊字符，因为后面替换的正则表达式中包含特殊字符
		.replace(/\s/ig, "\\s")
		 .replace(/\//ig, "\\/")
		.replace(/\\/ig, "\\")
		.replace(/\./ig, "\\.")
		.replace(/\-/ig, "\\-")
		.replace(/yyyy/ig, "[1-9]\\d{3}")//年份
		.replace(/yy/ig, "\\d{2}")//年份
		.replace(/HH/, "((0[1-9])|([1-9])|(1\\d)|(2[0-4]))")//小时
		.replace(/MM/, "((0[1-9])|(1[0-2])|\\d)")//月份
		.replace(/dd/,"((0[1-9])|([1-2]\\d)|(3[0-1]))")
		.replace(/mm/, "([0-5]\\d)")//分钟
		.replace(/ss/, "([0-5]\\d|\\d)")//秒钟
		.replace(/SSS/, "\\d{1,3}")//毫秒

	currentFormat ="^"+currentFormat+"$";//"^{0}$".format(currentFormat);
	let res = new RegExp(currentFormat).test(time);//测试输入值
	console.log(res)
	return res
}