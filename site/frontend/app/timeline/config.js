// Configs 
export let topicNameList = ["Beauty","Food","Shop","Uptown","Education",
				"Hospital","Hotel","Life","Finance","Traffic",
				"Enterprise","Scenicspot","Government"]


// export let colorList = ['#8dd3c7','#bebada','#fb8072','#28B78D','#fdb462',
// 				'#FFD034','#fccde5','#d9d9d9','#bc80bd','#ccebc5',
// 				'#80b1d3','#F40076','#b3de69','#fccde5']


export let duration = 400


export let colorList  = ['#8dd3c7'  , '#fb8072' , '#fdb462',   '#28B78D','#bebada','#f8b739']
export let iconSrcUrl = '../icon/'
export let topicThemesConfig = {
	min_width : 50,    // 显示 icon
	oneBoxWidth : 50    // 单个 icon box 的宽度
}

export let vRectHeight = 27

export const  topicNames = [
	{
    	name : '住宅', 
    	contain : ['Uptown','Life','Scenicspot','Education','Hospital'],
    	percent : {
    		'Uptown' : 0.3 ,
    		'Life'   : 0.3 ,
    		'Scenicspot' : 0.2,
    		'Education'  : 0.1,
    		'Hospital'	 : 0.1
    	},
    	icon : 'Residential_white.png'
    },{
    	name : '娱乐商业', 
    	contain : ['Beauty','Food','Finance','Shop','Hotel'],
    	percent : {
    		'Beauty' : 0.3,
    		'Food'   : 0.2,
    		'Finance': 0.2,
    		'Shop'	 : 0.2,
    		'Hotel'  : 0.1
	    	},
    	icon : 'Entertainment_white.png'
    },{
    	name : '办公', 
    	contain : ['Enterprise','Government','Finance'],
    	percent : {
    		'Enterprise' : 0.4,
    		'Government' : 0.4,
    		'Finance'	 : 0.2
    	},
    	icon : 'Business_white.png'
    },{
    	name : '医疗', 
    	contain : ['Hospital' ],
    	percent : {
    		'Hospital'  : 1
    	},
    	icon : 'Medical_white.png'
    },
    {
    	name : '交通', 
    	contain : ['Traffic' ],
    	percent : {
    		'Traffic'   : 1
    	},
    	icon : 'Traffic_white.png'
    },
    {
    	name: '教育',
    	contain : ['Education'],
    	percent : {
    		'Education' : 1
    	},
    	icon : 'Educational_white.png'
    }
]


export function transTopicHexa(topics){
    if(!topics)  return null
	let topicsHexa = topicNames.map((t,i)=>{
		return {
			name : t.name ,
			val  : 0 ,
			icon : t.icon ,
            color : colorList[i]
		}
	})
	topics.forEach( (t) =>{
		topicNames.forEach((T,i)=>{
			if(T.contain.indexOf(t.topic) != -1){
				topicsHexa[i].val +=  t.val  * T.percent[t.topic] 
			}
		})
	})

	let topicsHexaSort = topicsHexa.sort((t1,t2)=>{
		let v1 = t1.val , v2 = t2.val 
		return v2 - v1
	})
	return topicsHexaSort
}