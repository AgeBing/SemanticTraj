// Configs 
export let topicNameList = ["Beauty","Food","Shop","Uptown","Education",
				"Hospital","Hotel","Life","Finance","Traffic",
				"Enterprise","Scenicspot","Government"]


export let colorList = ['#8dd3c7','#bebada','#fb8072','#28B78D','#fdb462',
				'#FFD034','#fccde5','#d9d9d9','#bc80bd','#ccebc5',
				'#80b1d3','#F40076','#b3de69','#fccde5']

export let topicThemes = {}





// topicNameList.forEach((topic,i)=>{
// 	topicThemes[topic] = {
// 		icon : topic.toLowerCase() + '.png' ,
// 		color : colorList[i]
// 	}
// })

export let iconSrcUrl = './assets/icons_/'
export let topicThemesConfig = {
	min_width : 50,    // 显示 icon
	max_width : 150	   // 显示 比例
}

export let vRectHeight = 35



// hexa 

export const  topicNames = [{
			    	name : '娱乐', 
			    	contain : ['Shop' ],
			    	icon : 'food.png'
			    },{
			    	name : '生活', 
			    	contain : ['Beauty','Hospital','Food','Life'],
			    	icon : 'life.png'
			    },{
			    	name : '商业', 
			    	contain : ['Enterprise','Hotel','Uptown','Finance'],
			    	icon : 'finance.png'
			    },{
			    	name : '文化', 
			    	contain : ['Education','Scenicspot' ],
			    	icon : 'education.png'
			    },{
			    	name : '交通', 
			    	contain : ['Traffic' ],
			    	icon : 'traffic.png'
			    },{
			    	name : '政府', 
			    	contain : ['Government' ],
			    	icon : 'government.png'
			    }]



topicNameList.forEach((topic,i)=>{
	topicNames.forEach((topicType,j)=>{
		if( topicType.contain.indexOf(topic) != -1 ){
			topicThemes[topic] = {
				icon : topicType.icon ,
				color : colorList[j] ,
				name  : topicType.name 
			}
		}
	})
})
console.log(topicThemes)