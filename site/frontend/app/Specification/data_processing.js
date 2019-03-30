
//sitescore用于POI的val的更新，随参数调整而变化
export function initial_siteScore(initial_data, alpha = 1,param=false) {
    //若alpha=1则说明基于nodelist更新sitescore，反之则是仅对当前标签的数据进行poi中val的更新(simT和alpha)，然后更新sitescore.
    //param为true表示alpha来自参数面板
  let unify_data = {}
  if (param)
    unify_data = {
      data: [initial_data]
    } //使各个部分的结构层数都一样
  else
    unify_data = initial_data

  unify_data.data.forEach(first_word => {
    first_word.data.forEach(second_word => {
      second_word.data.forEach(third_word => {
        third_word.data.forEach(poi => {
          if (param)
            poi.val = poi.max_val * alpha + poi.simT
          let nodelist = require('../Specification/Node.js')
          let scores = nodelist.siteScore.get(poi.site_id)
          if (!scores) {
            scores = new Map()
            scores.set(poi.id, poi.val)
            nodelist.siteScore.set(poi.site_id, scores)
          }
          else {
            let bef_poi_val = scores.get(poi.id)
            if (!bef_poi_val) {
              scores.set(poi.id, poi.val)
            }
            else {
              scores.set(poi.id, poi.val > bef_poi_val ? poi.val : bef_poi_val)
            }
          }
        })
      })
    })
  })
}

//为每个POI找到他的max_val:单个搜索词时是该poi的max val，多个搜索词合并后的max_val为每个搜索词的max val相加
export function max_value_POI(d){
    let poi_map={}
    let pois=[]
     for (let i = 0; i < d.data.length; i++) {
          let cur_max_map={}//用于存储当前关键词的各个POI的val的分别最大值
            for (let j = 0; j < d.data[i].data.length; j++) {
                for (let m = 0; m < d.data[i].data[j].data.length; m++) {
                    let poi=d.data[i].data[j].data[m]
                    poi['max_val']=poi.val
                    if(cur_max_map.hasOwnProperty(poi.name))
                    {
                        if(cur_max_map[poi.name].val<poi.val)
                        cur_max_map[poi.name]={'poi':poi,'S':j}
                    }
                    else
                    {
                        cur_max_map[poi.name]={'poi':poi,'S':j}
                    }
                }

            }
            for(let k in cur_max_map) {
                let poi_name = cur_max_map[k].poi.name
                if (poi_map.hasOwnProperty(poi_name)) {
                  let index = poi_map[poi_name]
                  pois[index].poi.val += cur_max_map[k].poi.val
                    pois[index].poi.max_val=pois[index].poi.val
                }
                else {
                    if(cur_max_map[k].poi.latitude>27.9248561995 &&cur_max_map[k].poi.latitude<28.0769120675 &&cur_max_map[k].poi.longitude>120.5833650410&&cur_max_map[k].poi.longitude<120.7579719628)
                    {
                        poi_map[poi_name] = pois.length
                        let j=parseInt(cur_max_map[k]['S'])
                        pois.push({
                            index: pois.length,
                            poi: cur_max_map[k].poi,
                            words: {
                              F: (i, d.data[i].name),
                              S: (j, d.data[i].data[j].name)
                            },
                          })
                    }
                }
              }
      }
}


//对数据做归一化处理
function normalization(initial_data) {
  initial_data.data.forEach((second_word) => {
    let max_val = 0;
    let min_val = 0;
    second_word.data.forEach((third_word) => {
      third_word.data.forEach((poi) => {
        max_val = poi.val > max_val ? poi.val : max_val
        min_val = (poi.val < min_val || min_val == 0) ? poi.val : min_val
      })
    })
    let dis = max_val - min_val
    if (dis != 0) {
      second_word.data.forEach((third_word) => {
        third_word.data.forEach((poi) => {
          poi.val = (poi.val - min_val) / (dis)
        })
      })
    }
  })
}
