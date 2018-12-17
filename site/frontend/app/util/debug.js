export function debug(){
	let debug  = true
	debug = false
	
	if(debug){
		let str = 'DEBUG: '
		console.log(str)
		for(let i = 0;i < arguments.length;i++){
			console.log(arguments[i])
		}
		console.log('--------------------------')

	}
}