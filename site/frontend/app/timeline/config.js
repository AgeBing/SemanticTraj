// Configs 
export let topicNameList = ["Beauty","Food","Shop","Uptown","Education",
				"Hospital","Hotel","Life","Finance","Traffic",
				"Enterprise","Scenicspot","Government"]
export let colorList = ['#8dd3c7','#bebada','#fb8072','#80b1d3','#fdb462',
				'#b3de69','#fccde5','#d9d9d9','#bc80bd','#ccebc5',
				'#80b1d3','#fdb462','#b3de69','#fccde5']

export let topicThemes = {}
topicNameList.forEach((topic,i)=>{
	topicThemes[topic] = {
		icon : topic.toLowerCase() + '.png' ,
		color : colorList[i]
	}
})
export let iconSrcUrl = './assets/icons_/'
export let topicThemesConfig = {
	min_width : 50,    // 显示 icon
	max_width : 150	   // 显示 比例
}

export let vRectHeight = 35



// hexa 
export const topicNames = ["Beauty","Food","Shop","Uptown","Education","Hospital"]