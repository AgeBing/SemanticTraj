//模拟数据进行调用

import {  setGlobalTrajData ,topicAdd } from '../app/app'

import { filterListTime  } from '../app/list/index_.js'


export function mock() {
	// console.log(mockData)
	setGlobalTrajData(mockData20)
	// topicAdd([mockData[0].pid])


  let filterPids = ['460000102807196','460000122835349','460000102839002','410060006060278']


  setTimeout(()=>{
    console.log('filter')
    filterListTime(filterPids)
  },4000)


  let OrderedTrajs = mockData20.sort((t1,t2)=>{
   let s1 = t1.pid , s2 = t2.pid
   return s2 - s1  // 逆序 
  })

  setTimeout(()=>{
      console.log('reOrder')
      setGlobalTrajData(OrderedTrajs)
  },8000)

}



let mockData5 = [
  {
    "pid": "460000102807196",
    "traj": [
      {
        "site": "4249",
        "startTime": "2014-01-14 07:10:08.79",
        "endTime": "2014-01-14 07:58:38.96",
        "stopTime": 2910,
        "isStop": true,
        "stoppoint": 0,
        "latitude": 28.0051,
        "longitude": 120.6387,
        "topics": [
          {
            "topic": "Hospital",
            "val": 0.1849773153942428
          },
          {
            "topic": "Uptown",
            "val": 0.11219102002503129
          },
          {
            "topic": "Government",
            "val": 0.07738188360450564
          },
          {
            "topic": "Education",
            "val": 0.06979427409261577
          },
          {
            "topic": "Traffic",
            "val": 0.06244133291614518
          },
          {
            "topic": "Enterprise",
            "val": 0.056300844806007506
          },
          {
            "topic": "Hotel",
            "val": 0.05010168961201502
          },
          {
            "topic": "Food",
            "val": 0.040714956195244054
          },
          {
            "topic": "Scenicspot",
            "val": 0.03928739048811014
          },
          {
            "topic": "Beauty",
            "val": 0.03408557571964956
          },
          {
            "topic": "Life",
            "val": 0.032110450563204
          },
          {
            "topic": "Shop",
            "val": 0.03126955569461827
          },
          {
            "topic": "Finance",
            "val": 0.03125
          }
        ]
      },
      {
        "site": "16738",
        "startTime": "2014-01-14 07:58:38.96",
        "endTime": "2014-01-14 07:59:12.06",
        "stopTime": 33,
        "isStop": false,
        "latitude": 28.0092,
        "longitude": 120.6403,
        "topics": [
          {
            "topic": "Finance",
            "val": 0.13312372172532783
          },
          {
            "topic": "Life",
            "val": 0.06755395463841901
          },
          {
            "topic": "Hotel",
            "val": 0.06318874202509138
          },
          {
            "topic": "Food",
            "val": 0.06257822277847212
          },
          {
            "topic": "Beauty",
            "val": 0.060380353490642816
          },
          {
            "topic": "Shop",
            "val": 0.055038310082724445
          },
          {
            "topic": "Uptown",
            "val": 0.05326780426752861
          },
          {
            "topic": "Education",
            "val": 0.051894135962635285
          },
          {
            "topic": "Hospital",
            "val": 0.05125309075368505
          },
          {
            "topic": "Traffic",
            "val": 0.048811013767208006
          },
          {
            "topic": "Scenicspot",
            "val": 0.048811013767208006
          },
          {
            "topic": "Enterprise",
            "val": 0.048780487804877044
          },
          {
            "topic": "Government",
            "val": 0.048780487804877044
          }
        ]
      },
      {
        "site": "4249",
        "startTime": "2014-01-14 07:59:12.06",
        "endTime": "2014-01-14 08:06:14.81",
        "stopTime": 422,
        "isStop": false,
        "latitude": 28.0051,
        "longitude": 120.6387,
        "topics": [
          {
            "topic": "Hospital",
            "val": 0.1849773153942428
          },
          {
            "topic": "Uptown",
            "val": 0.11219102002503129
          },
          {
            "topic": "Government",
            "val": 0.07738188360450564
          },
          {
            "topic": "Education",
            "val": 0.06979427409261577
          },
          {
            "topic": "Traffic",
            "val": 0.06244133291614518
          },
          {
            "topic": "Enterprise",
            "val": 0.056300844806007506
          },
          {
            "topic": "Hotel",
            "val": 0.05010168961201502
          },
          {
            "topic": "Food",
            "val": 0.040714956195244054
          },
          {
            "topic": "Scenicspot",
            "val": 0.03928739048811014
          },
          {
            "topic": "Beauty",
            "val": 0.03408557571964956
          },
          {
            "topic": "Life",
            "val": 0.032110450563204
          },
          {
            "topic": "Shop",
            "val": 0.03126955569461827
          },
          {
            "topic": "Finance",
            "val": 0.03125
          }
        ]
      },
      {
        "site": "19696",
        "startTime": "2014-01-14 08:06:14.81",
        "endTime": "2014-01-14 08:07:50.74",
        "stopTime": 95,
        "isStop": false,
        "latitude": 28.0048,
        "longitude": 120.6409,
        "topics": [
          {
            "topic": "Life",
            "val": 0.07431586780773256
          },
          {
            "topic": "Food",
            "val": 0.07042587017555732
          },
          {
            "topic": "Shop",
            "val": 0.061901701451138366
          },
          {
            "topic": "Beauty",
            "val": 0.06054865879646868
          },
          {
            "topic": "Hotel",
            "val": 0.05828231234989696
          },
          {
            "topic": "Education",
            "val": 0.05747048675709515
          },
          {
            "topic": "Hospital",
            "val": 0.057335182491628174
          },
          {
            "topic": "Finance",
            "val": 0.05679396542976032
          },
          {
            "topic": "Uptown",
            "val": 0.05412170618678763
          },
          {
            "topic": "Scenicspot",
            "val": 0.05408788012042089
          },
          {
            "topic": "Government",
            "val": 0.05408788012042089
          },
          {
            "topic": "Enterprise",
            "val": 0.05405405405405415
          },
          {
            "topic": "Traffic",
            "val": 0.05405405405405415
          }
        ]
      },
      {
        "site": "3068",
        "startTime": "2014-01-14 08:07:50.74",
        "endTime": "2014-01-14 08:10:29.33",
        "stopTime": 158,
        "isStop": false,
        "latitude": 28.011,
        "longitude": 120.6436,
        "topics": [
          {
            "topic": "Shop",
            "val": 0.10040328188012879
          },
          {
            "topic": "Hospital",
            "val": 0.0930793121030932
          },
          {
            "topic": "Beauty",
            "val": 0.07374959440040883
          },
          {
            "topic": "Food",
            "val": 0.05771102767348134
          },
          {
            "topic": "Government",
            "val": 0.05518472164279517
          },
          {
            "topic": "Finance",
            "val": 0.0524034672970849
          },
          {
            "topic": "Life",
            "val": 0.05131414267834865
          },
          {
            "topic": "Hotel",
            "val": 0.048718305289019215
          },
          {
            "topic": "Education",
            "val": 0.041394335511983016
          },
          {
            "topic": "Uptown",
            "val": 0.04086126176238863
          },
          {
            "topic": "Scenicspot",
            "val": 0.037407870949798694
          },
          {
            "topic": "Enterprise",
            "val": 0.037037037037037354
          },
          {
            "topic": "Traffic",
            "val": 0.037037037037037354
          }
        ]
      },
      {
        "site": "27088",
        "startTime": "2014-01-14 08:10:29.33",
        "endTime": "2014-01-14 08:11:16.17",
        "stopTime": 46,
        "isStop": false,
        "latitude": 28.0114,
        "longitude": 120.6458,
        "topics": [
          {
            "topic": "Finance",
            "val": 0.08701666556880411
          },
          {
            "topic": "Food",
            "val": 0.06788090376128131
          },
          {
            "topic": "Shop",
            "val": 0.06712337790659458
          },
          {
            "topic": "Beauty",
            "val": 0.058560042157961366
          },
          {
            "topic": "Hotel",
            "val": 0.057736644489823595
          },
          {
            "topic": "Life",
            "val": 0.05276332257427132
          },
          {
            "topic": "Uptown",
            "val": 0.05269745076082028
          },
          {
            "topic": "Education",
            "val": 0.05266451485409479
          },
          {
            "topic": "Scenicspot",
            "val": 0.052664514854094784
          },
          {
            "topic": "Hospital",
            "val": 0.052664514854094784
          },
          {
            "topic": "Enterprise",
            "val": 0.052631578947369265
          },
          {
            "topic": "Traffic",
            "val": 0.052631578947369265
          },
          {
            "topic": "Government",
            "val": 0.052631578947369265
          }
        ]
      },
      {
        "site": "2001",
        "startTime": "2014-01-14 08:11:16.17",
        "endTime": "2014-01-14 08:11:42.23",
        "stopTime": 26,
        "isStop": false,
        "latitude": 28.0112,
        "longitude": 120.6501,
        "topics": [
          {
            "topic": "Uptown",
            "val": 0.08273161965277206
          },
          {
            "topic": "Shop",
            "val": 0.07352138891563212
          },
          {
            "topic": "Hotel",
            "val": 0.061166201341420645
          },
          {
            "topic": "Finance",
            "val": 0.061005744359937254
          },
          {
            "topic": "Beauty",
            "val": 0.05805333590064511
          },
          {
            "topic": "Education",
            "val": 0.052790346907993835
          },
          {
            "topic": "Life",
            "val": 0.05153878245242434
          },
          {
            "topic": "Food",
            "val": 0.05134623407464442
          },
          {
            "topic": "Enterprise",
            "val": 0.05131414267834777
          },
          {
            "topic": "Hospital",
            "val": 0.05131414267834777
          },
          {
            "topic": "Traffic",
            "val": 0.05128205128205112
          },
          {
            "topic": "Scenicspot",
            "val": 0.05128205128205112
          },
          {
            "topic": "Government",
            "val": 0.05128205128205112
          }
        ]
      },
      {
        "site": "2669",
        "startTime": "2014-01-14 08:11:42.23",
        "endTime": "2014-01-14 08:15:55.58",
        "stopTime": 253,
        "isStop": false,
        "latitude": 28.0182,
        "longitude": 120.6471,
        "topics": [
          {
            "topic": "Life",
            "val": 0.12277847309136442
          },
          {
            "topic": "Traffic",
            "val": 0.09679599499374182
          },
          {
            "topic": "Food",
            "val": 0.0811013767209011
          },
          {
            "topic": "Education",
            "val": 0.07224030037546941
          },
          {
            "topic": "Uptown",
            "val": 0.06230287859824818
          },
          {
            "topic": "Finance",
            "val": 0.06027534418022565
          },
          {
            "topic": "Government",
            "val": 0.05912390488110169
          },
          {
            "topic": "Hospital",
            "val": 0.05349186483103842
          },
          {
            "topic": "Scenicspot",
            "val": 0.05281602002503085
          },
          {
            "topic": "Beauty",
            "val": 0.05111389236545636
          },
          {
            "topic": "Hotel",
            "val": 0.04778473091364154
          },
          {
            "topic": "Enterprise",
            "val": 0.04002503128911076
          },
          {
            "topic": "Shop",
            "val": 0.04002503128911076
          }
        ]
      },
      {
        "site": "10321",
        "startTime": "2014-01-14 08:15:55.58",
        "endTime": "2014-01-14 08:21:42.11",
        "stopTime": 346,
        "isStop": false,
        "latitude": 28.0233,
        "longitude": 120.659,
        "topics": [
          {
            "topic": "Traffic",
            "val": 0.09681219171022658
          },
          {
            "topic": "Life",
            "val": 0.08810032148028239
          },
          {
            "topic": "Shop",
            "val": 0.07634543178973768
          },
          {
            "topic": "Uptown",
            "val": 0.07359689808338926
          },
          {
            "topic": "Hotel",
            "val": 0.05379273110996605
          },
          {
            "topic": "Finance",
            "val": 0.053252840560504736
          },
          {
            "topic": "Hospital",
            "val": 0.051117818842180245
          },
          {
            "topic": "Beauty",
            "val": 0.04888463520577197
          },
          {
            "topic": "Scenicspot",
            "val": 0.04873739232864611
          },
          {
            "topic": "Education",
            "val": 0.04616064197894427
          },
          {
            "topic": "Enterprise",
            "val": 0.04586615622469263
          },
          {
            "topic": "Food",
            "val": 0.03931384819259356
          },
          {
            "topic": "Government",
            "val": 0.039240226754030647
          }
        ]
      },
      {
        "site": "24425",
        "startTime": "2014-01-14 08:21:42.11",
        "endTime": "2014-01-14 08:24:47.4",
        "stopTime": 185,
        "isStop": false,
        "latitude": 28.0272,
        "longitude": 120.6511,
        "topics": [
          {
            "topic": "Beauty",
            "val": 0.1196950733871887
          },
          {
            "topic": "Scenicspot",
            "val": 0.07432586187279619
          },
          {
            "topic": "Education",
            "val": 0.0732734099442491
          },
          {
            "topic": "Hotel",
            "val": 0.06488223916259026
          },
          {
            "topic": "Life",
            "val": 0.06115599044259911
          },
          {
            "topic": "Traffic",
            "val": 0.05762885424963063
          },
          {
            "topic": "Food",
            "val": 0.05603595403345132
          },
          {
            "topic": "Enterprise",
            "val": 0.05321993400842005
          },
          {
            "topic": "Uptown",
            "val": 0.05304926612811518
          },
          {
            "topic": "Hospital",
            "val": 0.050859028330868666
          },
          {
            "topic": "Finance",
            "val": 0.04809989759927239
          },
          {
            "topic": "Shop",
            "val": 0.04545454545454611
          },
          {
            "topic": "Government",
            "val": 0.04545454545454611
          }
        ]
      },
      {
        "site": "10321",
        "startTime": "2014-01-14 08:24:47.4",
        "endTime": "2014-01-14 08:21:42.11",
        "stopTime": 86214,
        "isStop": true,
        "latitude": 28.0233,
        "longitude": 120.659,
        "topics": [
          {
            "topic": "Traffic",
            "val": 0.09681219171022658
          },
          {
            "topic": "Life",
            "val": 0.08810032148028239
          },
          {
            "topic": "Shop",
            "val": 0.07634543178973768
          },
          {
            "topic": "Uptown",
            "val": 0.07359689808338926
          },
          {
            "topic": "Hotel",
            "val": 0.05379273110996605
          },
          {
            "topic": "Finance",
            "val": 0.053252840560504736
          },
          {
            "topic": "Hospital",
            "val": 0.051117818842180245
          },
          {
            "topic": "Beauty",
            "val": 0.04888463520577197
          },
          {
            "topic": "Scenicspot",
            "val": 0.04873739232864611
          },
          {
            "topic": "Education",
            "val": 0.04616064197894427
          },
          {
            "topic": "Enterprise",
            "val": 0.04586615622469263
          },
          {
            "topic": "Food",
            "val": 0.03931384819259356
          },
          {
            "topic": "Government",
            "val": 0.039240226754030647
          }
        ]
      },
      {
        "site": "24425",
        "startTime": "2014-01-14 08:21:42.11",
        "endTime": "2014-01-14 08:24:47.4",
        "stopTime": 185,
        "isStop": false,
        "latitude": 28.0272,
        "longitude": 120.6511,
        "topics": [
          {
            "topic": "Beauty",
            "val": 0.1196950733871887
          },
          {
            "topic": "Scenicspot",
            "val": 0.07432586187279619
          },
          {
            "topic": "Education",
            "val": 0.0732734099442491
          },
          {
            "topic": "Hotel",
            "val": 0.06488223916259026
          },
          {
            "topic": "Life",
            "val": 0.06115599044259911
          },
          {
            "topic": "Traffic",
            "val": 0.05762885424963063
          },
          {
            "topic": "Food",
            "val": 0.05603595403345132
          },
          {
            "topic": "Enterprise",
            "val": 0.05321993400842005
          },
          {
            "topic": "Uptown",
            "val": 0.05304926612811518
          },
          {
            "topic": "Hospital",
            "val": 0.050859028330868666
          },
          {
            "topic": "Finance",
            "val": 0.04809989759927239
          },
          {
            "topic": "Shop",
            "val": 0.04545454545454611
          },
          {
            "topic": "Government",
            "val": 0.04545454545454611
          }
        ]
      },
      {
        "site": "10321",
        "startTime": "2014-01-14 08:24:47.4",
        "endTime": "2014-01-14 08:25:47.33",
        "stopTime": 59,
        "isStop": false,
        "latitude": 28.0233,
        "longitude": 120.659,
        "topics": [
          {
            "topic": "Traffic",
            "val": 0.09681219171022658
          },
          {
            "topic": "Life",
            "val": 0.08810032148028239
          },
          {
            "topic": "Shop",
            "val": 0.07634543178973768
          },
          {
            "topic": "Uptown",
            "val": 0.07359689808338926
          },
          {
            "topic": "Hotel",
            "val": 0.05379273110996605
          },
          {
            "topic": "Finance",
            "val": 0.053252840560504736
          },
          {
            "topic": "Hospital",
            "val": 0.051117818842180245
          },
          {
            "topic": "Beauty",
            "val": 0.04888463520577197
          },
          {
            "topic": "Scenicspot",
            "val": 0.04873739232864611
          },
          {
            "topic": "Education",
            "val": 0.04616064197894427
          },
          {
            "topic": "Enterprise",
            "val": 0.04586615622469263
          },
          {
            "topic": "Food",
            "val": 0.03931384819259356
          },
          {
            "topic": "Government",
            "val": 0.039240226754030647
          }
        ]
      },
      {
        "site": "11050",
        "startTime": "2014-01-14 08:25:47.33",
        "endTime": "2014-01-14 08:28:08.82",
        "stopTime": 141,
        "isStop": false,
        "latitude": 28.0214,
        "longitude": 120.6556,
        "topics": [
          {
            "topic": "Government",
            "val": 0.23995511630917793
          },
          {
            "topic": "Scenicspot",
            "val": 0.07530965430926621
          },
          {
            "topic": "Education",
            "val": 0.0698718225367925
          },
          {
            "topic": "Finance",
            "val": 0.06426136118423875
          },
          {
            "topic": "Shop",
            "val": 0.0638513659315524
          },
          {
            "topic": "Traffic",
            "val": 0.04365370506236281
          },
          {
            "topic": "Hospital",
            "val": 0.03614431832894616
          },
          {
            "topic": "Uptown",
            "val": 0.03495748996590615
          },
          {
            "topic": "Life",
            "val": 0.03465538820076869
          },
          {
            "topic": "Food",
            "val": 0.034525916015709784
          },
          {
            "topic": "Beauty",
            "val": 0.034525916015709784
          },
          {
            "topic": "Hotel",
            "val": 0.03450433731819996
          },
          {
            "topic": "Enterprise",
            "val": 0.03448275862069015
          }
        ]
      },
      {
        "site": "10321",
        "startTime": "2014-01-14 08:28:08.82",
        "endTime": "2014-01-14 08:29:03.1",
        "stopTime": 54,
        "isStop": false,
        "latitude": 28.0233,
        "longitude": 120.659,
        "topics": [
          {
            "topic": "Traffic",
            "val": 0.09681219171022658
          },
          {
            "topic": "Life",
            "val": 0.08810032148028239
          },
          {
            "topic": "Shop",
            "val": 0.07634543178973768
          },
          {
            "topic": "Uptown",
            "val": 0.07359689808338926
          },
          {
            "topic": "Hotel",
            "val": 0.05379273110996605
          },
          {
            "topic": "Finance",
            "val": 0.053252840560504736
          },
          {
            "topic": "Hospital",
            "val": 0.051117818842180245
          },
          {
            "topic": "Beauty",
            "val": 0.04888463520577197
          },
          {
            "topic": "Scenicspot",
            "val": 0.04873739232864611
          },
          {
            "topic": "Education",
            "val": 0.04616064197894427
          },
          {
            "topic": "Enterprise",
            "val": 0.04586615622469263
          },
          {
            "topic": "Food",
            "val": 0.03931384819259356
          },
          {
            "topic": "Government",
            "val": 0.039240226754030647
          }
        ]
      },
      {
        "site": "11050",
        "startTime": "2014-01-14 08:29:03.1",
        "endTime": "2014-01-14 08:29:24.34",
        "stopTime": 21,
        "isStop": false,
        "latitude": 28.0214,
        "longitude": 120.6556,
        "topics": [
          {
            "topic": "Government",
            "val": 0.23995511630917793
          },
          {
            "topic": "Scenicspot",
            "val": 0.07530965430926621
          },
          {
            "topic": "Education",
            "val": 0.0698718225367925
          },
          {
            "topic": "Finance",
            "val": 0.06426136118423875
          },
          {
            "topic": "Shop",
            "val": 0.0638513659315524
          },
          {
            "topic": "Traffic",
            "val": 0.04365370506236281
          },
          {
            "topic": "Hospital",
            "val": 0.03614431832894616
          },
          {
            "topic": "Uptown",
            "val": 0.03495748996590615
          },
          {
            "topic": "Life",
            "val": 0.03465538820076869
          },
          {
            "topic": "Food",
            "val": 0.034525916015709784
          },
          {
            "topic": "Beauty",
            "val": 0.034525916015709784
          },
          {
            "topic": "Hotel",
            "val": 0.03450433731819996
          },
          {
            "topic": "Enterprise",
            "val": 0.03448275862069015
          }
        ]
      },
      {
        "site": "12701",
        "startTime": "2014-01-14 08:29:24.34",
        "endTime": "2014-01-14 08:39:32.29",
        "stopTime": 607,
        "isStop": false,
        "latitude": 28.0227,
        "longitude": 120.6568,
        "topics": [
          {
            "topic": "Government",
            "val": 0.1808510638297896
          },
          {
            "topic": "Hospital",
            "val": 0.10868699510752099
          },
          {
            "topic": "Shop",
            "val": 0.052139037433155594
          },
          {
            "topic": "Education",
            "val": 0.04929457276140686
          },
          {
            "topic": "Finance",
            "val": 0.0477016725452276
          },
          {
            "topic": "Life",
            "val": 0.046649220616680566
          },
          {
            "topic": "Scenicspot",
            "val": 0.0463078848560707
          },
          {
            "topic": "Uptown",
            "val": 0.045482990101263596
          },
          {
            "topic": "Hotel",
            "val": 0.045482990101263596
          },
          {
            "topic": "Enterprise",
            "val": 0.04545454545454611
          },
          {
            "topic": "Traffic",
            "val": 0.04545454545454611
          },
          {
            "topic": "Food",
            "val": 0.04545454545454611
          },
          {
            "topic": "Beauty",
            "val": 0.04545454545454611
          }
        ]
      },
      {
        "site": "10321",
        "startTime": "2014-01-14 08:39:32.29",
        "endTime": "2014-01-14 08:58:10.35",
        "stopTime": 1118,
        "isStop": false,
        "latitude": 28.0233,
        "longitude": 120.659,
        "topics": [
          {
            "topic": "Traffic",
            "val": 0.09681219171022658
          },
          {
            "topic": "Life",
            "val": 0.08810032148028239
          },
          {
            "topic": "Shop",
            "val": 0.07634543178973768
          },
          {
            "topic": "Uptown",
            "val": 0.07359689808338926
          },
          {
            "topic": "Hotel",
            "val": 0.05379273110996605
          },
          {
            "topic": "Finance",
            "val": 0.053252840560504736
          },
          {
            "topic": "Hospital",
            "val": 0.051117818842180245
          },
          {
            "topic": "Beauty",
            "val": 0.04888463520577197
          },
          {
            "topic": "Scenicspot",
            "val": 0.04873739232864611
          },
          {
            "topic": "Education",
            "val": 0.04616064197894427
          },
          {
            "topic": "Enterprise",
            "val": 0.04586615622469263
          },
          {
            "topic": "Food",
            "val": 0.03931384819259356
          },
          {
            "topic": "Government",
            "val": 0.039240226754030647
          }
        ]
      },
      {
        "site": "12701",
        "startTime": "2014-01-14 08:58:10.35",
        "endTime": "2014-01-14 09:14:33.07",
        "stopTime": 982,
        "isStop": false,
        "latitude": 28.0227,
        "longitude": 120.6568,
        "topics": [
          {
            "topic": "Government",
            "val": 0.1808510638297896
          },
          {
            "topic": "Hospital",
            "val": 0.10868699510752099
          },
          {
            "topic": "Shop",
            "val": 0.052139037433155594
          },
          {
            "topic": "Education",
            "val": 0.04929457276140686
          },
          {
            "topic": "Finance",
            "val": 0.0477016725452276
          },
          {
            "topic": "Life",
            "val": 0.046649220616680566
          },
          {
            "topic": "Scenicspot",
            "val": 0.0463078848560707
          },
          {
            "topic": "Uptown",
            "val": 0.045482990101263596
          },
          {
            "topic": "Hotel",
            "val": 0.045482990101263596
          },
          {
            "topic": "Enterprise",
            "val": 0.04545454545454611
          },
          {
            "topic": "Traffic",
            "val": 0.04545454545454611
          },
          {
            "topic": "Food",
            "val": 0.04545454545454611
          },
          {
            "topic": "Beauty",
            "val": 0.04545454545454611
          }
        ]
      },
      {
        "site": "10321",
        "startTime": "2014-01-14 09:14:33.07",
        "endTime": "2014-01-14 09:21:50.2",
        "stopTime": 437,
        "isStop": false,
        "latitude": 28.0233,
        "longitude": 120.659,
        "topics": [
          {
            "topic": "Traffic",
            "val": 0.09681219171022658
          },
          {
            "topic": "Life",
            "val": 0.08810032148028239
          },
          {
            "topic": "Shop",
            "val": 0.07634543178973768
          },
          {
            "topic": "Uptown",
            "val": 0.07359689808338926
          },
          {
            "topic": "Hotel",
            "val": 0.05379273110996605
          },
          {
            "topic": "Finance",
            "val": 0.053252840560504736
          },
          {
            "topic": "Hospital",
            "val": 0.051117818842180245
          },
          {
            "topic": "Beauty",
            "val": 0.04888463520577197
          },
          {
            "topic": "Scenicspot",
            "val": 0.04873739232864611
          },
          {
            "topic": "Education",
            "val": 0.04616064197894427
          },
          {
            "topic": "Enterprise",
            "val": 0.04586615622469263
          },
          {
            "topic": "Food",
            "val": 0.03931384819259356
          },
          {
            "topic": "Government",
            "val": 0.039240226754030647
          }
        ]
      },
      {
        "site": "12701",
        "startTime": "2014-01-14 09:21:50.2",
        "endTime": "2014-01-14 09:23:58.03",
        "stopTime": 127,
        "isStop": false,
        "latitude": 28.0227,
        "longitude": 120.6568,
        "topics": [
          {
            "topic": "Government",
            "val": 0.1808510638297896
          },
          {
            "topic": "Hospital",
            "val": 0.10868699510752099
          },
          {
            "topic": "Shop",
            "val": 0.052139037433155594
          },
          {
            "topic": "Education",
            "val": 0.04929457276140686
          },
          {
            "topic": "Finance",
            "val": 0.0477016725452276
          },
          {
            "topic": "Life",
            "val": 0.046649220616680566
          },
          {
            "topic": "Scenicspot",
            "val": 0.0463078848560707
          },
          {
            "topic": "Uptown",
            "val": 0.045482990101263596
          },
          {
            "topic": "Hotel",
            "val": 0.045482990101263596
          },
          {
            "topic": "Enterprise",
            "val": 0.04545454545454611
          },
          {
            "topic": "Traffic",
            "val": 0.04545454545454611
          },
          {
            "topic": "Food",
            "val": 0.04545454545454611
          },
          {
            "topic": "Beauty",
            "val": 0.04545454545454611
          }
        ]
      },
      {
        "site": "10321",
        "startTime": "2014-01-14 09:23:58.03",
        "endTime": "2014-01-14 09:43:03.38",
        "stopTime": 1145,
        "isStop": false,
        "latitude": 28.0233,
        "longitude": 120.659,
        "topics": [
          {
            "topic": "Traffic",
            "val": 0.09681219171022658
          },
          {
            "topic": "Life",
            "val": 0.08810032148028239
          },
          {
            "topic": "Shop",
            "val": 0.07634543178973768
          },
          {
            "topic": "Uptown",
            "val": 0.07359689808338926
          },
          {
            "topic": "Hotel",
            "val": 0.05379273110996605
          },
          {
            "topic": "Finance",
            "val": 0.053252840560504736
          },
          {
            "topic": "Hospital",
            "val": 0.051117818842180245
          },
          {
            "topic": "Beauty",
            "val": 0.04888463520577197
          },
          {
            "topic": "Scenicspot",
            "val": 0.04873739232864611
          },
          {
            "topic": "Education",
            "val": 0.04616064197894427
          },
          {
            "topic": "Enterprise",
            "val": 0.04586615622469263
          },
          {
            "topic": "Food",
            "val": 0.03931384819259356
          },
          {
            "topic": "Government",
            "val": 0.039240226754030647
          }
        ]
      },
      {
        "site": "12701",
        "startTime": "2014-01-14 09:43:03.38",
        "endTime": "2014-01-14 09:46:38.54",
        "stopTime": 215,
        "isStop": false,
        "latitude": 28.0227,
        "longitude": 120.6568,
        "topics": [
          {
            "topic": "Government",
            "val": 0.1808510638297896
          },
          {
            "topic": "Hospital",
            "val": 0.10868699510752099
          },
          {
            "topic": "Shop",
            "val": 0.052139037433155594
          },
          {
            "topic": "Education",
            "val": 0.04929457276140686
          },
          {
            "topic": "Finance",
            "val": 0.0477016725452276
          },
          {
            "topic": "Life",
            "val": 0.046649220616680566
          },
          {
            "topic": "Scenicspot",
            "val": 0.0463078848560707
          },
          {
            "topic": "Uptown",
            "val": 0.045482990101263596
          },
          {
            "topic": "Hotel",
            "val": 0.045482990101263596
          },
          {
            "topic": "Enterprise",
            "val": 0.04545454545454611
          },
          {
            "topic": "Traffic",
            "val": 0.04545454545454611
          },
          {
            "topic": "Food",
            "val": 0.04545454545454611
          },
          {
            "topic": "Beauty",
            "val": 0.04545454545454611
          }
        ]
      },
      {
        "site": "10321",
        "startTime": "2014-01-14 09:46:38.54",
        "endTime": "2014-01-14 09:48:30.89",
        "stopTime": 112,
        "isStop": false,
        "latitude": 28.0233,
        "longitude": 120.659,
        "topics": [
          {
            "topic": "Traffic",
            "val": 0.09681219171022658
          },
          {
            "topic": "Life",
            "val": 0.08810032148028239
          },
          {
            "topic": "Shop",
            "val": 0.07634543178973768
          },
          {
            "topic": "Uptown",
            "val": 0.07359689808338926
          },
          {
            "topic": "Hotel",
            "val": 0.05379273110996605
          },
          {
            "topic": "Finance",
            "val": 0.053252840560504736
          },
          {
            "topic": "Hospital",
            "val": 0.051117818842180245
          },
          {
            "topic": "Beauty",
            "val": 0.04888463520577197
          },
          {
            "topic": "Scenicspot",
            "val": 0.04873739232864611
          },
          {
            "topic": "Education",
            "val": 0.04616064197894427
          },
          {
            "topic": "Enterprise",
            "val": 0.04586615622469263
          },
          {
            "topic": "Food",
            "val": 0.03931384819259356
          },
          {
            "topic": "Government",
            "val": 0.039240226754030647
          }
        ]
      },
      {
        "site": "24425",
        "startTime": "2014-01-14 09:48:30.89",
        "endTime": "2014-01-14 09:49:19.07",
        "stopTime": 48,
        "isStop": false,
        "latitude": 28.0272,
        "longitude": 120.6511,
        "topics": [
          {
            "topic": "Beauty",
            "val": 0.1196950733871887
          },
          {
            "topic": "Scenicspot",
            "val": 0.07432586187279619
          },
          {
            "topic": "Education",
            "val": 0.0732734099442491
          },
          {
            "topic": "Hotel",
            "val": 0.06488223916259026
          },
          {
            "topic": "Life",
            "val": 0.06115599044259911
          },
          {
            "topic": "Traffic",
            "val": 0.05762885424963063
          },
          {
            "topic": "Food",
            "val": 0.05603595403345132
          },
          {
            "topic": "Enterprise",
            "val": 0.05321993400842005
          },
          {
            "topic": "Uptown",
            "val": 0.05304926612811518
          },
          {
            "topic": "Hospital",
            "val": 0.050859028330868666
          },
          {
            "topic": "Finance",
            "val": 0.04809989759927239
          },
          {
            "topic": "Shop",
            "val": 0.04545454545454611
          },
          {
            "topic": "Government",
            "val": 0.04545454545454611
          }
        ]
      },
      {
        "site": "10321",
        "startTime": "2014-01-14 09:49:19.07",
        "endTime": "2014-01-14 09:50:01.51",
        "stopTime": 42,
        "isStop": false,
        "latitude": 28.0233,
        "longitude": 120.659,
        "topics": [
          {
            "topic": "Traffic",
            "val": 0.09681219171022658
          },
          {
            "topic": "Life",
            "val": 0.08810032148028239
          },
          {
            "topic": "Shop",
            "val": 0.07634543178973768
          },
          {
            "topic": "Uptown",
            "val": 0.07359689808338926
          },
          {
            "topic": "Hotel",
            "val": 0.05379273110996605
          },
          {
            "topic": "Finance",
            "val": 0.053252840560504736
          },
          {
            "topic": "Hospital",
            "val": 0.051117818842180245
          },
          {
            "topic": "Beauty",
            "val": 0.04888463520577197
          },
          {
            "topic": "Scenicspot",
            "val": 0.04873739232864611
          },
          {
            "topic": "Education",
            "val": 0.04616064197894427
          },
          {
            "topic": "Enterprise",
            "val": 0.04586615622469263
          },
          {
            "topic": "Food",
            "val": 0.03931384819259356
          },
          {
            "topic": "Government",
            "val": 0.039240226754030647
          }
        ]
      },
      {
        "site": "12701",
        "startTime": "2014-01-14 09:50:01.51",
        "endTime": "2014-01-14 10:09:54.57",
        "stopTime": 1193,
        "isStop": false,
        "latitude": 28.0227,
        "longitude": 120.6568,
        "topics": [
          {
            "topic": "Government",
            "val": 0.1808510638297896
          },
          {
            "topic": "Hospital",
            "val": 0.10868699510752099
          },
          {
            "topic": "Shop",
            "val": 0.052139037433155594
          },
          {
            "topic": "Education",
            "val": 0.04929457276140686
          },
          {
            "topic": "Finance",
            "val": 0.0477016725452276
          },
          {
            "topic": "Life",
            "val": 0.046649220616680566
          },
          {
            "topic": "Scenicspot",
            "val": 0.0463078848560707
          },
          {
            "topic": "Uptown",
            "val": 0.045482990101263596
          },
          {
            "topic": "Hotel",
            "val": 0.045482990101263596
          },
          {
            "topic": "Enterprise",
            "val": 0.04545454545454611
          },
          {
            "topic": "Traffic",
            "val": 0.04545454545454611
          },
          {
            "topic": "Food",
            "val": 0.04545454545454611
          },
          {
            "topic": "Beauty",
            "val": 0.04545454545454611
          }
        ]
      },
      {
        "site": "10321",
        "startTime": "2014-01-14 10:09:54.57",
        "endTime": "2014-01-14 10:10:40.34",
        "stopTime": 45,
        "isStop": false,
        "latitude": 28.0233,
        "longitude": 120.659,
        "topics": [
          {
            "topic": "Traffic",
            "val": 0.09681219171022658
          },
          {
            "topic": "Life",
            "val": 0.08810032148028239
          },
          {
            "topic": "Shop",
            "val": 0.07634543178973768
          },
          {
            "topic": "Uptown",
            "val": 0.07359689808338926
          },
          {
            "topic": "Hotel",
            "val": 0.05379273110996605
          },
          {
            "topic": "Finance",
            "val": 0.053252840560504736
          },
          {
            "topic": "Hospital",
            "val": 0.051117818842180245
          },
          {
            "topic": "Beauty",
            "val": 0.04888463520577197
          },
          {
            "topic": "Scenicspot",
            "val": 0.04873739232864611
          },
          {
            "topic": "Education",
            "val": 0.04616064197894427
          },
          {
            "topic": "Enterprise",
            "val": 0.04586615622469263
          },
          {
            "topic": "Food",
            "val": 0.03931384819259356
          },
          {
            "topic": "Government",
            "val": 0.039240226754030647
          }
        ]
      },
      {
        "site": "12701",
        "startTime": "2014-01-14 10:10:40.34",
        "endTime": "2014-01-14 10:10:45.03",
        "stopTime": 4,
        "isStop": false,
        "latitude": 28.0227,
        "longitude": 120.6568,
        "topics": [
          {
            "topic": "Government",
            "val": 0.1808510638297896
          },
          {
            "topic": "Hospital",
            "val": 0.10868699510752099
          },
          {
            "topic": "Shop",
            "val": 0.052139037433155594
          },
          {
            "topic": "Education",
            "val": 0.04929457276140686
          },
          {
            "topic": "Finance",
            "val": 0.0477016725452276
          },
          {
            "topic": "Life",
            "val": 0.046649220616680566
          },
          {
            "topic": "Scenicspot",
            "val": 0.0463078848560707
          },
          {
            "topic": "Uptown",
            "val": 0.045482990101263596
          },
          {
            "topic": "Hotel",
            "val": 0.045482990101263596
          },
          {
            "topic": "Enterprise",
            "val": 0.04545454545454611
          },
          {
            "topic": "Traffic",
            "val": 0.04545454545454611
          },
          {
            "topic": "Food",
            "val": 0.04545454545454611
          },
          {
            "topic": "Beauty",
            "val": 0.04545454545454611
          }
        ]
      },
      {
        "site": "10321",
        "startTime": "2014-01-14 10:10:45.03",
        "endTime": "2014-01-14 10:19:43.14",
        "stopTime": 538,
        "isStop": false,
        "latitude": 28.0233,
        "longitude": 120.659,
        "topics": [
          {
            "topic": "Traffic",
            "val": 0.09681219171022658
          },
          {
            "topic": "Life",
            "val": 0.08810032148028239
          },
          {
            "topic": "Shop",
            "val": 0.07634543178973768
          },
          {
            "topic": "Uptown",
            "val": 0.07359689808338926
          },
          {
            "topic": "Hotel",
            "val": 0.05379273110996605
          },
          {
            "topic": "Finance",
            "val": 0.053252840560504736
          },
          {
            "topic": "Hospital",
            "val": 0.051117818842180245
          },
          {
            "topic": "Beauty",
            "val": 0.04888463520577197
          },
          {
            "topic": "Scenicspot",
            "val": 0.04873739232864611
          },
          {
            "topic": "Education",
            "val": 0.04616064197894427
          },
          {
            "topic": "Enterprise",
            "val": 0.04586615622469263
          },
          {
            "topic": "Food",
            "val": 0.03931384819259356
          },
          {
            "topic": "Government",
            "val": 0.039240226754030647
          }
        ]
      },
      {
        "site": "12701",
        "startTime": "2014-01-14 10:19:43.14",
        "endTime": "2014-01-14 10:20:57.44",
        "stopTime": 74,
        "isStop": false,
        "latitude": 28.0227,
        "longitude": 120.6568,
        "topics": [
          {
            "topic": "Government",
            "val": 0.1808510638297896
          },
          {
            "topic": "Hospital",
            "val": 0.10868699510752099
          },
          {
            "topic": "Shop",
            "val": 0.052139037433155594
          },
          {
            "topic": "Education",
            "val": 0.04929457276140686
          },
          {
            "topic": "Finance",
            "val": 0.0477016725452276
          },
          {
            "topic": "Life",
            "val": 0.046649220616680566
          },
          {
            "topic": "Scenicspot",
            "val": 0.0463078848560707
          },
          {
            "topic": "Uptown",
            "val": 0.045482990101263596
          },
          {
            "topic": "Hotel",
            "val": 0.045482990101263596
          },
          {
            "topic": "Enterprise",
            "val": 0.04545454545454611
          },
          {
            "topic": "Traffic",
            "val": 0.04545454545454611
          },
          {
            "topic": "Food",
            "val": 0.04545454545454611
          },
          {
            "topic": "Beauty",
            "val": 0.04545454545454611
          }
        ]
      },
      {
        "site": "10321",
        "startTime": "2014-01-14 10:20:57.44",
        "endTime": "2014-01-14 10:21:15.66",
        "stopTime": 18,
        "isStop": false,
        "latitude": 28.0233,
        "longitude": 120.659,
        "topics": [
          {
            "topic": "Traffic",
            "val": 0.09681219171022658
          },
          {
            "topic": "Life",
            "val": 0.08810032148028239
          },
          {
            "topic": "Shop",
            "val": 0.07634543178973768
          },
          {
            "topic": "Uptown",
            "val": 0.07359689808338926
          },
          {
            "topic": "Hotel",
            "val": 0.05379273110996605
          },
          {
            "topic": "Finance",
            "val": 0.053252840560504736
          },
          {
            "topic": "Hospital",
            "val": 0.051117818842180245
          },
          {
            "topic": "Beauty",
            "val": 0.04888463520577197
          },
          {
            "topic": "Scenicspot",
            "val": 0.04873739232864611
          },
          {
            "topic": "Education",
            "val": 0.04616064197894427
          },
          {
            "topic": "Enterprise",
            "val": 0.04586615622469263
          },
          {
            "topic": "Food",
            "val": 0.03931384819259356
          },
          {
            "topic": "Government",
            "val": 0.039240226754030647
          }
        ]
      },
      {
        "site": "12701",
        "startTime": "2014-01-14 10:21:15.66",
        "endTime": "2014-01-14 10:21:15.66",
        "stopTime": 0,
        "isStop": true,
        "stoppoint": 1,
        "latitude": 28.0227,
        "longitude": 120.6568,
        "topics": [
          {
            "topic": "Government",
            "val": 0.1808510638297896
          },
          {
            "topic": "Hospital",
            "val": 0.10868699510752099
          },
          {
            "topic": "Shop",
            "val": 0.052139037433155594
          },
          {
            "topic": "Education",
            "val": 0.04929457276140686
          },
          {
            "topic": "Finance",
            "val": 0.0477016725452276
          },
          {
            "topic": "Life",
            "val": 0.046649220616680566
          },
          {
            "topic": "Scenicspot",
            "val": 0.0463078848560707
          },
          {
            "topic": "Uptown",
            "val": 0.045482990101263596
          },
          {
            "topic": "Hotel",
            "val": 0.045482990101263596
          },
          {
            "topic": "Enterprise",
            "val": 0.04545454545454611
          },
          {
            "topic": "Traffic",
            "val": 0.04545454545454611
          },
          {
            "topic": "Food",
            "val": 0.04545454545454611
          },
          {
            "topic": "Beauty",
            "val": 0.04545454545454611
          }
        ]
      }
    ],
    "matching": true
  },
  {
    "pid": "460000102835571",
    "traj": [
      {
        "site": "4249",
        "startTime": "2014-01-14 04:34:14.38",
        "endTime": "2014-01-14 06:10:41.24",
        "stopTime": 5786,
        "isStop": true,
        "stoppoint": 0,
        "latitude": 28.0051,
        "longitude": 120.6387,
        "topics": [
          {
            "topic": "Hospital",
            "val": 0.1849773153942428
          },
          {
            "topic": "Uptown",
            "val": 0.11219102002503129
          },
          {
            "topic": "Government",
            "val": 0.07738188360450564
          },
          {
            "topic": "Education",
            "val": 0.06979427409261577
          },
          {
            "topic": "Traffic",
            "val": 0.06244133291614518
          },
          {
            "topic": "Enterprise",
            "val": 0.056300844806007506
          },
          {
            "topic": "Hotel",
            "val": 0.05010168961201502
          },
          {
            "topic": "Food",
            "val": 0.040714956195244054
          },
          {
            "topic": "Scenicspot",
            "val": 0.03928739048811014
          },
          {
            "topic": "Beauty",
            "val": 0.03408557571964956
          },
          {
            "topic": "Life",
            "val": 0.032110450563204
          },
          {
            "topic": "Shop",
            "val": 0.03126955569461827
          },
          {
            "topic": "Finance",
            "val": 0.03125
          }
        ]
      },
      {
        "site": "19696",
        "startTime": "2014-01-14 06:10:41.24",
        "endTime": "2014-01-14 06:44:47.89",
        "stopTime": 2046,
        "isStop": true,
        "latitude": 28.0048,
        "longitude": 120.6409,
        "topics": [
          {
            "topic": "Life",
            "val": 0.07431586780773256
          },
          {
            "topic": "Food",
            "val": 0.07042587017555732
          },
          {
            "topic": "Shop",
            "val": 0.061901701451138366
          },
          {
            "topic": "Beauty",
            "val": 0.06054865879646868
          },
          {
            "topic": "Hotel",
            "val": 0.05828231234989696
          },
          {
            "topic": "Education",
            "val": 0.05747048675709515
          },
          {
            "topic": "Hospital",
            "val": 0.057335182491628174
          },
          {
            "topic": "Finance",
            "val": 0.05679396542976032
          },
          {
            "topic": "Uptown",
            "val": 0.05412170618678763
          },
          {
            "topic": "Scenicspot",
            "val": 0.05408788012042089
          },
          {
            "topic": "Government",
            "val": 0.05408788012042089
          },
          {
            "topic": "Enterprise",
            "val": 0.05405405405405415
          },
          {
            "topic": "Traffic",
            "val": 0.05405405405405415
          }
        ]
      },
      {
        "site": "3063",
        "startTime": "2014-01-14 06:44:47.89",
        "endTime": "2014-01-14 07:31:05.6",
        "stopTime": 2777,
        "isStop": true,
        "latitude": 28.0076,
        "longitude": 120.6368,
        "topics": [
          {
            "topic": "Shop",
            "val": 0.0659038083318436
          },
          {
            "topic": "Finance",
            "val": 0.0603611657428928
          },
          {
            "topic": "Life",
            "val": 0.057357411049526005
          },
          {
            "topic": "Beauty",
            "val": 0.057178616127301796
          },
          {
            "topic": "Education",
            "val": 0.057178616127301796
          },
          {
            "topic": "Enterprise",
            "val": 0.05714285714285696
          },
          {
            "topic": "Traffic",
            "val": 0.05714285714285696
          },
          {
            "topic": "Scenicspot",
            "val": 0.05714285714285696
          },
          {
            "topic": "Uptown",
            "val": 0.05714285714285696
          },
          {
            "topic": "Food",
            "val": 0.05714285714285696
          },
          {
            "topic": "Hospital",
            "val": 0.05714285714285696
          },
          {
            "topic": "Hotel",
            "val": 0.05714285714285696
          },
          {
            "topic": "Government",
            "val": 0.05714285714285696
          }
        ]
      },
      {
        "site": "4249",
        "startTime": "2014-01-14 07:31:05.6",
        "endTime": "2014-01-14 07:31:13.56",
        "stopTime": 7,
        "isStop": false,
        "latitude": 28.0051,
        "longitude": 120.6387,
        "topics": [
          {
            "topic": "Hospital",
            "val": 0.1849773153942428
          },
          {
            "topic": "Uptown",
            "val": 0.11219102002503129
          },
          {
            "topic": "Government",
            "val": 0.07738188360450564
          },
          {
            "topic": "Education",
            "val": 0.06979427409261577
          },
          {
            "topic": "Traffic",
            "val": 0.06244133291614518
          },
          {
            "topic": "Enterprise",
            "val": 0.056300844806007506
          },
          {
            "topic": "Hotel",
            "val": 0.05010168961201502
          },
          {
            "topic": "Food",
            "val": 0.040714956195244054
          },
          {
            "topic": "Scenicspot",
            "val": 0.03928739048811014
          },
          {
            "topic": "Beauty",
            "val": 0.03408557571964956
          },
          {
            "topic": "Life",
            "val": 0.032110450563204
          },
          {
            "topic": "Shop",
            "val": 0.03126955569461827
          },
          {
            "topic": "Finance",
            "val": 0.03125
          }
        ]
      },
      {
        "site": "3063",
        "startTime": "2014-01-14 07:31:13.56",
        "endTime": "2014-01-14 07:31:31.85",
        "stopTime": 18,
        "isStop": false,
        "latitude": 28.0076,
        "longitude": 120.6368,
        "topics": [
          {
            "topic": "Shop",
            "val": 0.0659038083318436
          },
          {
            "topic": "Finance",
            "val": 0.0603611657428928
          },
          {
            "topic": "Life",
            "val": 0.057357411049526005
          },
          {
            "topic": "Beauty",
            "val": 0.057178616127301796
          },
          {
            "topic": "Education",
            "val": 0.057178616127301796
          },
          {
            "topic": "Enterprise",
            "val": 0.05714285714285696
          },
          {
            "topic": "Traffic",
            "val": 0.05714285714285696
          },
          {
            "topic": "Scenicspot",
            "val": 0.05714285714285696
          },
          {
            "topic": "Uptown",
            "val": 0.05714285714285696
          },
          {
            "topic": "Food",
            "val": 0.05714285714285696
          },
          {
            "topic": "Hospital",
            "val": 0.05714285714285696
          },
          {
            "topic": "Hotel",
            "val": 0.05714285714285696
          },
          {
            "topic": "Government",
            "val": 0.05714285714285696
          }
        ]
      },
      {
        "site": "4249",
        "startTime": "2014-01-14 07:31:31.85",
        "endTime": "2014-01-14 07:31:31.89",
        "stopTime": 0,
        "isStop": true,
        "stoppoint": 1,
        "latitude": 28.0051,
        "longitude": 120.6387,
        "topics": [
          {
            "topic": "Hospital",
            "val": 0.1849773153942428
          },
          {
            "topic": "Uptown",
            "val": 0.11219102002503129
          },
          {
            "topic": "Government",
            "val": 0.07738188360450564
          },
          {
            "topic": "Education",
            "val": 0.06979427409261577
          },
          {
            "topic": "Traffic",
            "val": 0.06244133291614518
          },
          {
            "topic": "Enterprise",
            "val": 0.056300844806007506
          },
          {
            "topic": "Hotel",
            "val": 0.05010168961201502
          },
          {
            "topic": "Food",
            "val": 0.040714956195244054
          },
          {
            "topic": "Scenicspot",
            "val": 0.03928739048811014
          },
          {
            "topic": "Beauty",
            "val": 0.03408557571964956
          },
          {
            "topic": "Life",
            "val": 0.032110450563204
          },
          {
            "topic": "Shop",
            "val": 0.03126955569461827
          },
          {
            "topic": "Finance",
            "val": 0.03125
          }
        ]
      }
    ],
    "matching": true
  },
  {
    "pid": "460000102840173",
    "traj": [
      {
        "site": "20480",
        "startTime": "2014-01-14 02:42:12.75",
        "endTime": "2014-01-14 03:04:01.77",
        "stopTime": 1309,
        "isStop": true,
        "stoppoint": 0,
        "latitude": 27.9961,
        "longitude": 120.6477,
        "topics": [
          {
            "topic": "Hospital",
            "val": 0.14548923859742754
          },
          {
            "topic": "Uptown",
            "val": 0.13246065778944938
          },
          {
            "topic": "Beauty",
            "val": 0.07866390365005371
          },
          {
            "topic": "Education",
            "val": 0.07191366257001564
          },
          {
            "topic": "Enterprise",
            "val": 0.060136646217608204
          },
          {
            "topic": "Hotel",
            "val": 0.05989043681651244
          },
          {
            "topic": "Government",
            "val": 0.04883153121730088
          },
          {
            "topic": "Life",
            "val": 0.04281991834054879
          },
          {
            "topic": "Food",
            "val": 0.041650423685344475
          },
          {
            "topic": "Finance",
            "val": 0.03356654834937081
          },
          {
            "topic": "Scenicspot",
            "val": 0.03317671679763606
          },
          {
            "topic": "Traffic",
            "val": 0.0328074026959926
          },
          {
            "topic": "Shop",
            "val": 0.0327868852459013
          }
        ]
      },
      {
        "site": "25845",
        "startTime": "2014-01-14 03:04:01.77",
        "endTime": "2014-01-14 03:08:00.17",
        "stopTime": 238,
        "isStop": false,
        "latitude": 27.9986,
        "longitude": 120.6404,
        "topics": [
          {
            "topic": "Shop",
            "val": 0.13934648039779468
          },
          {
            "topic": "Beauty",
            "val": 0.08742346852484538
          },
          {
            "topic": "Enterprise",
            "val": 0.0585529208808306
          },
          {
            "topic": "Uptown",
            "val": 0.04236714812434442
          },
          {
            "topic": "Finance",
            "val": 0.04114940973514191
          },
          {
            "topic": "Life",
            "val": 0.03790210736393458
          },
          {
            "topic": "Hotel",
            "val": 0.03057876399553506
          },
          {
            "topic": "Education",
            "val": 0.029344112573148937
          },
          {
            "topic": "Hospital",
            "val": 0.028413895748063522
          },
          {
            "topic": "Food",
            "val": 0.027111592192943932
          },
          {
            "topic": "Scenicspot",
            "val": 0.027077766126577193
          },
          {
            "topic": "Traffic",
            "val": 0.027043940060210447
          },
          {
            "topic": "Government",
            "val": 0.027027027027027074
          }
        ]
      },
      {
        "site": "28699",
        "startTime": "2014-01-14 03:08:00.17",
        "endTime": "2014-01-14 03:11:03.4",
        "stopTime": 183,
        "isStop": false,
        "latitude": 27.9959,
        "longitude": 120.6442,
        "topics": [
          {
            "topic": "Finance",
            "val": 0.05882352941176564
          },
          {
            "topic": "Enterprise",
            "val": 0.05882352941176564
          },
          {
            "topic": "Traffic",
            "val": 0.05882352941176564
          },
          {
            "topic": "Scenicspot",
            "val": 0.05882352941176564
          },
          {
            "topic": "Uptown",
            "val": 0.05882352941176564
          },
          {
            "topic": "Food",
            "val": 0.05882352941176564
          },
          {
            "topic": "Hospital",
            "val": 0.05882352941176564
          },
          {
            "topic": "Life",
            "val": 0.05882352941176564
          },
          {
            "topic": "Hotel",
            "val": 0.05882352941176564
          },
          {
            "topic": "Shop",
            "val": 0.05882352941176564
          },
          {
            "topic": "Government",
            "val": 0.05882352941176564
          },
          {
            "topic": "Beauty",
            "val": 0.05882352941176564
          },
          {
            "topic": "Education",
            "val": 0.05882352941176564
          }
        ]
      },
      {
        "site": "25845",
        "startTime": "2014-01-14 03:11:03.4",
        "endTime": "2014-01-14 03:21:49.68",
        "stopTime": 646,
        "isStop": false,
        "latitude": 27.9986,
        "longitude": 120.6404,
        "topics": [
          {
            "topic": "Shop",
            "val": 0.13934648039779468
          },
          {
            "topic": "Beauty",
            "val": 0.08742346852484538
          },
          {
            "topic": "Enterprise",
            "val": 0.0585529208808306
          },
          {
            "topic": "Uptown",
            "val": 0.04236714812434442
          },
          {
            "topic": "Finance",
            "val": 0.04114940973514191
          },
          {
            "topic": "Life",
            "val": 0.03790210736393458
          },
          {
            "topic": "Hotel",
            "val": 0.03057876399553506
          },
          {
            "topic": "Education",
            "val": 0.029344112573148937
          },
          {
            "topic": "Hospital",
            "val": 0.028413895748063522
          },
          {
            "topic": "Food",
            "val": 0.027111592192943932
          },
          {
            "topic": "Scenicspot",
            "val": 0.027077766126577193
          },
          {
            "topic": "Traffic",
            "val": 0.027043940060210447
          },
          {
            "topic": "Government",
            "val": 0.027027027027027074
          }
        ]
      },
      {
        "site": "8247",
        "startTime": "2014-01-14 03:21:49.68",
        "endTime": "2014-01-14 03:34:01.77",
        "stopTime": 732,
        "isStop": false,
        "latitude": 27.9963,
        "longitude": 120.6444,
        "topics": [
          {
            "topic": "Scenicspot",
            "val": 0.11418878861735185
          },
          {
            "topic": "Education",
            "val": 0.0798037019959168
          },
          {
            "topic": "Traffic",
            "val": 0.06541071075686784
          },
          {
            "topic": "Hospital",
            "val": 0.055332323298861244
          },
          {
            "topic": "Uptown",
            "val": 0.053652592055860135
          },
          {
            "topic": "Hotel",
            "val": 0.052664514854094784
          },
          {
            "topic": "Finance",
            "val": 0.052631578947369265
          },
          {
            "topic": "Enterprise",
            "val": 0.052631578947369265
          },
          {
            "topic": "Food",
            "val": 0.052631578947369265
          },
          {
            "topic": "Life",
            "val": 0.052631578947369265
          },
          {
            "topic": "Shop",
            "val": 0.052631578947369265
          },
          {
            "topic": "Government",
            "val": 0.052631578947369265
          },
          {
            "topic": "Beauty",
            "val": 0.052631578947369265
          }
        ]
      },
      {
        "site": "10878",
        "startTime": "2014-01-14 03:34:01.77",
        "endTime": "2014-01-14 03:39:27.6",
        "stopTime": 325,
        "isStop": false,
        "latitude": 28.0003,
        "longitude": 120.6472,
        "topics": [
          {
            "topic": "Food",
            "val": 0.11189389963260434
          },
          {
            "topic": "Education",
            "val": 0.09796519843352477
          },
          {
            "topic": "Uptown",
            "val": 0.08924462029149229
          },
          {
            "topic": "Life",
            "val": 0.06669627356776565
          },
          {
            "topic": "Traffic",
            "val": 0.06257822277847265
          },
          {
            "topic": "Hospital",
            "val": 0.05553312608502523
          },
          {
            "topic": "Shop",
            "val": 0.0515967540070246
          },
          {
            "topic": "Enterprise",
            "val": 0.047963179781177805
          },
          {
            "topic": "Government",
            "val": 0.04776131454640816
          },
          {
            "topic": "Beauty",
            "val": 0.04640881747345444
          },
          {
            "topic": "Hotel",
            "val": 0.04344139852234627
          },
          {
            "topic": "Scenicspot",
            "val": 0.039747264726068626
          },
          {
            "topic": "Finance",
            "val": 0.03873793855222234
          }
        ]
      },
      {
        "site": "28699",
        "startTime": "2014-01-14 03:39:27.6",
        "endTime": "2014-01-14 03:40:00.56",
        "stopTime": 32,
        "isStop": false,
        "latitude": 27.9959,
        "longitude": 120.6442,
        "topics": [
          {
            "topic": "Finance",
            "val": 0.05882352941176564
          },
          {
            "topic": "Enterprise",
            "val": 0.05882352941176564
          },
          {
            "topic": "Traffic",
            "val": 0.05882352941176564
          },
          {
            "topic": "Scenicspot",
            "val": 0.05882352941176564
          },
          {
            "topic": "Uptown",
            "val": 0.05882352941176564
          },
          {
            "topic": "Food",
            "val": 0.05882352941176564
          },
          {
            "topic": "Hospital",
            "val": 0.05882352941176564
          },
          {
            "topic": "Life",
            "val": 0.05882352941176564
          },
          {
            "topic": "Hotel",
            "val": 0.05882352941176564
          },
          {
            "topic": "Shop",
            "val": 0.05882352941176564
          },
          {
            "topic": "Government",
            "val": 0.05882352941176564
          },
          {
            "topic": "Beauty",
            "val": 0.05882352941176564
          },
          {
            "topic": "Education",
            "val": 0.05882352941176564
          }
        ]
      },
      {
        "site": "25845",
        "startTime": "2014-01-14 03:40:00.56",
        "endTime": "2014-01-14 03:41:35.83",
        "stopTime": 95,
        "isStop": false,
        "latitude": 27.9986,
        "longitude": 120.6404,
        "topics": [
          {
            "topic": "Shop",
            "val": 0.13934648039779468
          },
          {
            "topic": "Beauty",
            "val": 0.08742346852484538
          },
          {
            "topic": "Enterprise",
            "val": 0.0585529208808306
          },
          {
            "topic": "Uptown",
            "val": 0.04236714812434442
          },
          {
            "topic": "Finance",
            "val": 0.04114940973514191
          },
          {
            "topic": "Life",
            "val": 0.03790210736393458
          },
          {
            "topic": "Hotel",
            "val": 0.03057876399553506
          },
          {
            "topic": "Education",
            "val": 0.029344112573148937
          },
          {
            "topic": "Hospital",
            "val": 0.028413895748063522
          },
          {
            "topic": "Food",
            "val": 0.027111592192943932
          },
          {
            "topic": "Scenicspot",
            "val": 0.027077766126577193
          },
          {
            "topic": "Traffic",
            "val": 0.027043940060210447
          },
          {
            "topic": "Government",
            "val": 0.027027027027027074
          }
        ]
      },
      {
        "site": "20480",
        "startTime": "2014-01-14 03:41:35.83",
        "endTime": "2014-01-14 03:43:23.73",
        "stopTime": 107,
        "isStop": false,
        "latitude": 27.9961,
        "longitude": 120.6477,
        "topics": [
          {
            "topic": "Hospital",
            "val": 0.14548923859742754
          },
          {
            "topic": "Uptown",
            "val": 0.13246065778944938
          },
          {
            "topic": "Beauty",
            "val": 0.07866390365005371
          },
          {
            "topic": "Education",
            "val": 0.07191366257001564
          },
          {
            "topic": "Enterprise",
            "val": 0.060136646217608204
          },
          {
            "topic": "Hotel",
            "val": 0.05989043681651244
          },
          {
            "topic": "Government",
            "val": 0.04883153121730088
          },
          {
            "topic": "Life",
            "val": 0.04281991834054879
          },
          {
            "topic": "Food",
            "val": 0.041650423685344475
          },
          {
            "topic": "Finance",
            "val": 0.03356654834937081
          },
          {
            "topic": "Scenicspot",
            "val": 0.03317671679763606
          },
          {
            "topic": "Traffic",
            "val": 0.0328074026959926
          },
          {
            "topic": "Shop",
            "val": 0.0327868852459013
          }
        ]
      },
      {
        "site": "25845",
        "startTime": "2014-01-14 03:43:23.73",
        "endTime": "2014-01-14 03:43:52.37",
        "stopTime": 28,
        "isStop": false,
        "latitude": 27.9986,
        "longitude": 120.6404,
        "topics": [
          {
            "topic": "Shop",
            "val": 0.13934648039779468
          },
          {
            "topic": "Beauty",
            "val": 0.08742346852484538
          },
          {
            "topic": "Enterprise",
            "val": 0.0585529208808306
          },
          {
            "topic": "Uptown",
            "val": 0.04236714812434442
          },
          {
            "topic": "Finance",
            "val": 0.04114940973514191
          },
          {
            "topic": "Life",
            "val": 0.03790210736393458
          },
          {
            "topic": "Hotel",
            "val": 0.03057876399553506
          },
          {
            "topic": "Education",
            "val": 0.029344112573148937
          },
          {
            "topic": "Hospital",
            "val": 0.028413895748063522
          },
          {
            "topic": "Food",
            "val": 0.027111592192943932
          },
          {
            "topic": "Scenicspot",
            "val": 0.027077766126577193
          },
          {
            "topic": "Traffic",
            "val": 0.027043940060210447
          },
          {
            "topic": "Government",
            "val": 0.027027027027027074
          }
        ]
      },
      {
        "site": "382",
        "startTime": "2014-01-14 03:43:52.37",
        "endTime": "2014-01-14 03:44:37.01",
        "stopTime": 44,
        "isStop": false,
        "latitude": 28.0029,
        "longitude": 120.6492,
        "topics": [
          {
            "topic": "Education",
            "val": 0.2624340207868537
          },
          {
            "topic": "Beauty",
            "val": 0.08494313544104078
          },
          {
            "topic": "Hospital",
            "val": 0.06468683680687855
          },
          {
            "topic": "Government",
            "val": 0.06441475757740756
          },
          {
            "topic": "Food",
            "val": 0.05206236055939487
          },
          {
            "topic": "Hotel",
            "val": 0.04863416226805244
          },
          {
            "topic": "Shop",
            "val": 0.04647113239375306
          },
          {
            "topic": "Finance",
            "val": 0.04547804320618178
          },
          {
            "topic": "Uptown",
            "val": 0.04425368667355937
          },
          {
            "topic": "Enterprise",
            "val": 0.035356695869837515
          },
          {
            "topic": "Traffic",
            "val": 0.03162921042607622
          },
          {
            "topic": "Life",
            "val": 0.02609239810632856
          },
          {
            "topic": "Scenicspot",
            "val": 0.024908853458127024
          }
        ]
      },
      {
        "site": "25845",
        "startTime": "2014-01-14 03:44:37.01",
        "endTime": "2014-01-14 03:45:17.05",
        "stopTime": 40,
        "isStop": false,
        "latitude": 27.9986,
        "longitude": 120.6404,
        "topics": [
          {
            "topic": "Shop",
            "val": 0.13934648039779468
          },
          {
            "topic": "Beauty",
            "val": 0.08742346852484538
          },
          {
            "topic": "Enterprise",
            "val": 0.0585529208808306
          },
          {
            "topic": "Uptown",
            "val": 0.04236714812434442
          },
          {
            "topic": "Finance",
            "val": 0.04114940973514191
          },
          {
            "topic": "Life",
            "val": 0.03790210736393458
          },
          {
            "topic": "Hotel",
            "val": 0.03057876399553506
          },
          {
            "topic": "Education",
            "val": 0.029344112573148937
          },
          {
            "topic": "Hospital",
            "val": 0.028413895748063522
          },
          {
            "topic": "Food",
            "val": 0.027111592192943932
          },
          {
            "topic": "Scenicspot",
            "val": 0.027077766126577193
          },
          {
            "topic": "Traffic",
            "val": 0.027043940060210447
          },
          {
            "topic": "Government",
            "val": 0.027027027027027074
          }
        ]
      },
      {
        "site": "10878",
        "startTime": "2014-01-14 03:45:17.05",
        "endTime": "2014-01-14 03:51:40.12",
        "stopTime": 383,
        "isStop": false,
        "latitude": 28.0003,
        "longitude": 120.6472,
        "topics": [
          {
            "topic": "Food",
            "val": 0.11189389963260434
          },
          {
            "topic": "Education",
            "val": 0.09796519843352477
          },
          {
            "topic": "Uptown",
            "val": 0.08924462029149229
          },
          {
            "topic": "Life",
            "val": 0.06669627356776565
          },
          {
            "topic": "Traffic",
            "val": 0.06257822277847265
          },
          {
            "topic": "Hospital",
            "val": 0.05553312608502523
          },
          {
            "topic": "Shop",
            "val": 0.0515967540070246
          },
          {
            "topic": "Enterprise",
            "val": 0.047963179781177805
          },
          {
            "topic": "Government",
            "val": 0.04776131454640816
          },
          {
            "topic": "Beauty",
            "val": 0.04640881747345444
          },
          {
            "topic": "Hotel",
            "val": 0.04344139852234627
          },
          {
            "topic": "Scenicspot",
            "val": 0.039747264726068626
          },
          {
            "topic": "Finance",
            "val": 0.03873793855222234
          }
        ]
      },
      {
        "site": "20480",
        "startTime": "2014-01-14 03:51:40.12",
        "endTime": "2014-01-14 03:51:50.97",
        "stopTime": 10,
        "isStop": false,
        "latitude": 27.9961,
        "longitude": 120.6477,
        "topics": [
          {
            "topic": "Hospital",
            "val": 0.14548923859742754
          },
          {
            "topic": "Uptown",
            "val": 0.13246065778944938
          },
          {
            "topic": "Beauty",
            "val": 0.07866390365005371
          },
          {
            "topic": "Education",
            "val": 0.07191366257001564
          },
          {
            "topic": "Enterprise",
            "val": 0.060136646217608204
          },
          {
            "topic": "Hotel",
            "val": 0.05989043681651244
          },
          {
            "topic": "Government",
            "val": 0.04883153121730088
          },
          {
            "topic": "Life",
            "val": 0.04281991834054879
          },
          {
            "topic": "Food",
            "val": 0.041650423685344475
          },
          {
            "topic": "Finance",
            "val": 0.03356654834937081
          },
          {
            "topic": "Scenicspot",
            "val": 0.03317671679763606
          },
          {
            "topic": "Traffic",
            "val": 0.0328074026959926
          },
          {
            "topic": "Shop",
            "val": 0.0327868852459013
          }
        ]
      },
      {
        "site": "10878",
        "startTime": "2014-01-14 03:51:50.97",
        "endTime": "2014-01-14 03:53:01.82",
        "stopTime": 70,
        "isStop": false,
        "latitude": 28.0003,
        "longitude": 120.6472,
        "topics": [
          {
            "topic": "Food",
            "val": 0.11189389963260434
          },
          {
            "topic": "Education",
            "val": 0.09796519843352477
          },
          {
            "topic": "Uptown",
            "val": 0.08924462029149229
          },
          {
            "topic": "Life",
            "val": 0.06669627356776565
          },
          {
            "topic": "Traffic",
            "val": 0.06257822277847265
          },
          {
            "topic": "Hospital",
            "val": 0.05553312608502523
          },
          {
            "topic": "Shop",
            "val": 0.0515967540070246
          },
          {
            "topic": "Enterprise",
            "val": 0.047963179781177805
          },
          {
            "topic": "Government",
            "val": 0.04776131454640816
          },
          {
            "topic": "Beauty",
            "val": 0.04640881747345444
          },
          {
            "topic": "Hotel",
            "val": 0.04344139852234627
          },
          {
            "topic": "Scenicspot",
            "val": 0.039747264726068626
          },
          {
            "topic": "Finance",
            "val": 0.03873793855222234
          }
        ]
      },
      {
        "site": "20480",
        "startTime": "2014-01-14 03:53:01.82",
        "endTime": "2014-01-14 03:53:21.07",
        "stopTime": 19,
        "isStop": false,
        "latitude": 27.9961,
        "longitude": 120.6477,
        "topics": [
          {
            "topic": "Hospital",
            "val": 0.14548923859742754
          },
          {
            "topic": "Uptown",
            "val": 0.13246065778944938
          },
          {
            "topic": "Beauty",
            "val": 0.07866390365005371
          },
          {
            "topic": "Education",
            "val": 0.07191366257001564
          },
          {
            "topic": "Enterprise",
            "val": 0.060136646217608204
          },
          {
            "topic": "Hotel",
            "val": 0.05989043681651244
          },
          {
            "topic": "Government",
            "val": 0.04883153121730088
          },
          {
            "topic": "Life",
            "val": 0.04281991834054879
          },
          {
            "topic": "Food",
            "val": 0.041650423685344475
          },
          {
            "topic": "Finance",
            "val": 0.03356654834937081
          },
          {
            "topic": "Scenicspot",
            "val": 0.03317671679763606
          },
          {
            "topic": "Traffic",
            "val": 0.0328074026959926
          },
          {
            "topic": "Shop",
            "val": 0.0327868852459013
          }
        ]
      },
      {
        "site": "25845",
        "startTime": "2014-01-14 03:53:21.07",
        "endTime": "2014-01-14 03:54:37.19",
        "stopTime": 76,
        "isStop": false,
        "latitude": 27.9986,
        "longitude": 120.6404,
        "topics": [
          {
            "topic": "Shop",
            "val": 0.13934648039779468
          },
          {
            "topic": "Beauty",
            "val": 0.08742346852484538
          },
          {
            "topic": "Enterprise",
            "val": 0.0585529208808306
          },
          {
            "topic": "Uptown",
            "val": 0.04236714812434442
          },
          {
            "topic": "Finance",
            "val": 0.04114940973514191
          },
          {
            "topic": "Life",
            "val": 0.03790210736393458
          },
          {
            "topic": "Hotel",
            "val": 0.03057876399553506
          },
          {
            "topic": "Education",
            "val": 0.029344112573148937
          },
          {
            "topic": "Hospital",
            "val": 0.028413895748063522
          },
          {
            "topic": "Food",
            "val": 0.027111592192943932
          },
          {
            "topic": "Scenicspot",
            "val": 0.027077766126577193
          },
          {
            "topic": "Traffic",
            "val": 0.027043940060210447
          },
          {
            "topic": "Government",
            "val": 0.027027027027027074
          }
        ]
      },
      {
        "site": "20480",
        "startTime": "2014-01-14 03:54:37.19",
        "endTime": "2014-01-14 04:00:14.39",
        "stopTime": 337,
        "isStop": false,
        "latitude": 27.9961,
        "longitude": 120.6477,
        "topics": [
          {
            "topic": "Hospital",
            "val": 0.14548923859742754
          },
          {
            "topic": "Uptown",
            "val": 0.13246065778944938
          },
          {
            "topic": "Beauty",
            "val": 0.07866390365005371
          },
          {
            "topic": "Education",
            "val": 0.07191366257001564
          },
          {
            "topic": "Enterprise",
            "val": 0.060136646217608204
          },
          {
            "topic": "Hotel",
            "val": 0.05989043681651244
          },
          {
            "topic": "Government",
            "val": 0.04883153121730088
          },
          {
            "topic": "Life",
            "val": 0.04281991834054879
          },
          {
            "topic": "Food",
            "val": 0.041650423685344475
          },
          {
            "topic": "Finance",
            "val": 0.03356654834937081
          },
          {
            "topic": "Scenicspot",
            "val": 0.03317671679763606
          },
          {
            "topic": "Traffic",
            "val": 0.0328074026959926
          },
          {
            "topic": "Shop",
            "val": 0.0327868852459013
          }
        ]
      },
      {
        "site": "382",
        "startTime": "2014-01-14 04:00:14.39",
        "endTime": "2014-01-14 04:02:19.01",
        "stopTime": 124,
        "isStop": false,
        "latitude": 28.0029,
        "longitude": 120.6492,
        "topics": [
          {
            "topic": "Education",
            "val": 0.2624340207868537
          },
          {
            "topic": "Beauty",
            "val": 0.08494313544104078
          },
          {
            "topic": "Hospital",
            "val": 0.06468683680687855
          },
          {
            "topic": "Government",
            "val": 0.06441475757740756
          },
          {
            "topic": "Food",
            "val": 0.05206236055939487
          },
          {
            "topic": "Hotel",
            "val": 0.04863416226805244
          },
          {
            "topic": "Shop",
            "val": 0.04647113239375306
          },
          {
            "topic": "Finance",
            "val": 0.04547804320618178
          },
          {
            "topic": "Uptown",
            "val": 0.04425368667355937
          },
          {
            "topic": "Enterprise",
            "val": 0.035356695869837515
          },
          {
            "topic": "Traffic",
            "val": 0.03162921042607622
          },
          {
            "topic": "Life",
            "val": 0.02609239810632856
          },
          {
            "topic": "Scenicspot",
            "val": 0.024908853458127024
          }
        ]
      },
      {
        "site": "20480",
        "startTime": "2014-01-14 04:02:19.01",
        "endTime": "2014-01-14 04:02:28.12",
        "stopTime": 9,
        "isStop": false,
        "latitude": 27.9961,
        "longitude": 120.6477,
        "topics": [
          {
            "topic": "Hospital",
            "val": 0.14548923859742754
          },
          {
            "topic": "Uptown",
            "val": 0.13246065778944938
          },
          {
            "topic": "Beauty",
            "val": 0.07866390365005371
          },
          {
            "topic": "Education",
            "val": 0.07191366257001564
          },
          {
            "topic": "Enterprise",
            "val": 0.060136646217608204
          },
          {
            "topic": "Hotel",
            "val": 0.05989043681651244
          },
          {
            "topic": "Government",
            "val": 0.04883153121730088
          },
          {
            "topic": "Life",
            "val": 0.04281991834054879
          },
          {
            "topic": "Food",
            "val": 0.041650423685344475
          },
          {
            "topic": "Finance",
            "val": 0.03356654834937081
          },
          {
            "topic": "Scenicspot",
            "val": 0.03317671679763606
          },
          {
            "topic": "Traffic",
            "val": 0.0328074026959926
          },
          {
            "topic": "Shop",
            "val": 0.0327868852459013
          }
        ]
      },
      {
        "site": "10878",
        "startTime": "2014-01-14 04:02:28.12",
        "endTime": "2014-01-14 04:02:51.81",
        "stopTime": 23,
        "isStop": false,
        "latitude": 28.0003,
        "longitude": 120.6472,
        "topics": [
          {
            "topic": "Food",
            "val": 0.11189389963260434
          },
          {
            "topic": "Education",
            "val": 0.09796519843352477
          },
          {
            "topic": "Uptown",
            "val": 0.08924462029149229
          },
          {
            "topic": "Life",
            "val": 0.06669627356776565
          },
          {
            "topic": "Traffic",
            "val": 0.06257822277847265
          },
          {
            "topic": "Hospital",
            "val": 0.05553312608502523
          },
          {
            "topic": "Shop",
            "val": 0.0515967540070246
          },
          {
            "topic": "Enterprise",
            "val": 0.047963179781177805
          },
          {
            "topic": "Government",
            "val": 0.04776131454640816
          },
          {
            "topic": "Beauty",
            "val": 0.04640881747345444
          },
          {
            "topic": "Hotel",
            "val": 0.04344139852234627
          },
          {
            "topic": "Scenicspot",
            "val": 0.039747264726068626
          },
          {
            "topic": "Finance",
            "val": 0.03873793855222234
          }
        ]
      },
      {
        "site": "25845",
        "startTime": "2014-01-14 04:02:51.81",
        "endTime": "2014-01-14 04:02:56.81",
        "stopTime": 5,
        "isStop": false,
        "latitude": 27.9986,
        "longitude": 120.6404,
        "topics": [
          {
            "topic": "Shop",
            "val": 0.13934648039779468
          },
          {
            "topic": "Beauty",
            "val": 0.08742346852484538
          },
          {
            "topic": "Enterprise",
            "val": 0.0585529208808306
          },
          {
            "topic": "Uptown",
            "val": 0.04236714812434442
          },
          {
            "topic": "Finance",
            "val": 0.04114940973514191
          },
          {
            "topic": "Life",
            "val": 0.03790210736393458
          },
          {
            "topic": "Hotel",
            "val": 0.03057876399553506
          },
          {
            "topic": "Education",
            "val": 0.029344112573148937
          },
          {
            "topic": "Hospital",
            "val": 0.028413895748063522
          },
          {
            "topic": "Food",
            "val": 0.027111592192943932
          },
          {
            "topic": "Scenicspot",
            "val": 0.027077766126577193
          },
          {
            "topic": "Traffic",
            "val": 0.027043940060210447
          },
          {
            "topic": "Government",
            "val": 0.027027027027027074
          }
        ]
      },
      {
        "site": "8247",
        "startTime": "2014-01-14 04:02:56.81",
        "endTime": "2014-01-14 04:07:51.73",
        "stopTime": 294,
        "isStop": false,
        "latitude": 27.9963,
        "longitude": 120.6444,
        "topics": [
          {
            "topic": "Scenicspot",
            "val": 0.11418878861735185
          },
          {
            "topic": "Education",
            "val": 0.0798037019959168
          },
          {
            "topic": "Traffic",
            "val": 0.06541071075686784
          },
          {
            "topic": "Hospital",
            "val": 0.055332323298861244
          },
          {
            "topic": "Uptown",
            "val": 0.053652592055860135
          },
          {
            "topic": "Hotel",
            "val": 0.052664514854094784
          },
          {
            "topic": "Finance",
            "val": 0.052631578947369265
          },
          {
            "topic": "Enterprise",
            "val": 0.052631578947369265
          },
          {
            "topic": "Food",
            "val": 0.052631578947369265
          },
          {
            "topic": "Life",
            "val": 0.052631578947369265
          },
          {
            "topic": "Shop",
            "val": 0.052631578947369265
          },
          {
            "topic": "Government",
            "val": 0.052631578947369265
          },
          {
            "topic": "Beauty",
            "val": 0.052631578947369265
          }
        ]
      },
      {
        "site": "10878",
        "startTime": "2014-01-14 04:07:51.73",
        "endTime": "2014-01-14 04:15:24.63",
        "stopTime": 452,
        "isStop": false,
        "latitude": 28.0003,
        "longitude": 120.6472,
        "topics": [
          {
            "topic": "Food",
            "val": 0.11189389963260434
          },
          {
            "topic": "Education",
            "val": 0.09796519843352477
          },
          {
            "topic": "Uptown",
            "val": 0.08924462029149229
          },
          {
            "topic": "Life",
            "val": 0.06669627356776565
          },
          {
            "topic": "Traffic",
            "val": 0.06257822277847265
          },
          {
            "topic": "Hospital",
            "val": 0.05553312608502523
          },
          {
            "topic": "Shop",
            "val": 0.0515967540070246
          },
          {
            "topic": "Enterprise",
            "val": 0.047963179781177805
          },
          {
            "topic": "Government",
            "val": 0.04776131454640816
          },
          {
            "topic": "Beauty",
            "val": 0.04640881747345444
          },
          {
            "topic": "Hotel",
            "val": 0.04344139852234627
          },
          {
            "topic": "Scenicspot",
            "val": 0.039747264726068626
          },
          {
            "topic": "Finance",
            "val": 0.03873793855222234
          }
        ]
      },
      {
        "site": "25845",
        "startTime": "2014-01-14 04:15:24.63",
        "endTime": "2014-01-14 04:15:35.16",
        "stopTime": 10,
        "isStop": false,
        "latitude": 27.9986,
        "longitude": 120.6404,
        "topics": [
          {
            "topic": "Shop",
            "val": 0.13934648039779468
          },
          {
            "topic": "Beauty",
            "val": 0.08742346852484538
          },
          {
            "topic": "Enterprise",
            "val": 0.0585529208808306
          },
          {
            "topic": "Uptown",
            "val": 0.04236714812434442
          },
          {
            "topic": "Finance",
            "val": 0.04114940973514191
          },
          {
            "topic": "Life",
            "val": 0.03790210736393458
          },
          {
            "topic": "Hotel",
            "val": 0.03057876399553506
          },
          {
            "topic": "Education",
            "val": 0.029344112573148937
          },
          {
            "topic": "Hospital",
            "val": 0.028413895748063522
          },
          {
            "topic": "Food",
            "val": 0.027111592192943932
          },
          {
            "topic": "Scenicspot",
            "val": 0.027077766126577193
          },
          {
            "topic": "Traffic",
            "val": 0.027043940060210447
          },
          {
            "topic": "Government",
            "val": 0.027027027027027074
          }
        ]
      },
      {
        "site": "20480",
        "startTime": "2014-01-14 04:15:35.16",
        "endTime": "2014-01-14 04:15:41.3",
        "stopTime": 6,
        "isStop": false,
        "latitude": 27.9961,
        "longitude": 120.6477,
        "topics": [
          {
            "topic": "Hospital",
            "val": 0.14548923859742754
          },
          {
            "topic": "Uptown",
            "val": 0.13246065778944938
          },
          {
            "topic": "Beauty",
            "val": 0.07866390365005371
          },
          {
            "topic": "Education",
            "val": 0.07191366257001564
          },
          {
            "topic": "Enterprise",
            "val": 0.060136646217608204
          },
          {
            "topic": "Hotel",
            "val": 0.05989043681651244
          },
          {
            "topic": "Government",
            "val": 0.04883153121730088
          },
          {
            "topic": "Life",
            "val": 0.04281991834054879
          },
          {
            "topic": "Food",
            "val": 0.041650423685344475
          },
          {
            "topic": "Finance",
            "val": 0.03356654834937081
          },
          {
            "topic": "Scenicspot",
            "val": 0.03317671679763606
          },
          {
            "topic": "Traffic",
            "val": 0.0328074026959926
          },
          {
            "topic": "Shop",
            "val": 0.0327868852459013
          }
        ]
      },
      {
        "site": "382",
        "startTime": "2014-01-14 04:15:41.3",
        "endTime": "2014-01-14 04:16:37.77",
        "stopTime": 56,
        "isStop": false,
        "latitude": 28.0029,
        "longitude": 120.6492,
        "topics": [
          {
            "topic": "Education",
            "val": 0.2624340207868537
          },
          {
            "topic": "Beauty",
            "val": 0.08494313544104078
          },
          {
            "topic": "Hospital",
            "val": 0.06468683680687855
          },
          {
            "topic": "Government",
            "val": 0.06441475757740756
          },
          {
            "topic": "Food",
            "val": 0.05206236055939487
          },
          {
            "topic": "Hotel",
            "val": 0.04863416226805244
          },
          {
            "topic": "Shop",
            "val": 0.04647113239375306
          },
          {
            "topic": "Finance",
            "val": 0.04547804320618178
          },
          {
            "topic": "Uptown",
            "val": 0.04425368667355937
          },
          {
            "topic": "Enterprise",
            "val": 0.035356695869837515
          },
          {
            "topic": "Traffic",
            "val": 0.03162921042607622
          },
          {
            "topic": "Life",
            "val": 0.02609239810632856
          },
          {
            "topic": "Scenicspot",
            "val": 0.024908853458127024
          }
        ]
      },
      {
        "site": "20480",
        "startTime": "2014-01-14 04:16:37.77",
        "endTime": "2014-01-14 04:17:48.75",
        "stopTime": 70,
        "isStop": false,
        "latitude": 27.9961,
        "longitude": 120.6477,
        "topics": [
          {
            "topic": "Hospital",
            "val": 0.14548923859742754
          },
          {
            "topic": "Uptown",
            "val": 0.13246065778944938
          },
          {
            "topic": "Beauty",
            "val": 0.07866390365005371
          },
          {
            "topic": "Education",
            "val": 0.07191366257001564
          },
          {
            "topic": "Enterprise",
            "val": 0.060136646217608204
          },
          {
            "topic": "Hotel",
            "val": 0.05989043681651244
          },
          {
            "topic": "Government",
            "val": 0.04883153121730088
          },
          {
            "topic": "Life",
            "val": 0.04281991834054879
          },
          {
            "topic": "Food",
            "val": 0.041650423685344475
          },
          {
            "topic": "Finance",
            "val": 0.03356654834937081
          },
          {
            "topic": "Scenicspot",
            "val": 0.03317671679763606
          },
          {
            "topic": "Traffic",
            "val": 0.0328074026959926
          },
          {
            "topic": "Shop",
            "val": 0.0327868852459013
          }
        ]
      },
      {
        "site": "25845",
        "startTime": "2014-01-14 04:17:48.75",
        "endTime": "2014-01-14 04:18:00.94",
        "stopTime": 12,
        "isStop": false,
        "latitude": 27.9986,
        "longitude": 120.6404,
        "topics": [
          {
            "topic": "Shop",
            "val": 0.13934648039779468
          },
          {
            "topic": "Beauty",
            "val": 0.08742346852484538
          },
          {
            "topic": "Enterprise",
            "val": 0.0585529208808306
          },
          {
            "topic": "Uptown",
            "val": 0.04236714812434442
          },
          {
            "topic": "Finance",
            "val": 0.04114940973514191
          },
          {
            "topic": "Life",
            "val": 0.03790210736393458
          },
          {
            "topic": "Hotel",
            "val": 0.03057876399553506
          },
          {
            "topic": "Education",
            "val": 0.029344112573148937
          },
          {
            "topic": "Hospital",
            "val": 0.028413895748063522
          },
          {
            "topic": "Food",
            "val": 0.027111592192943932
          },
          {
            "topic": "Scenicspot",
            "val": 0.027077766126577193
          },
          {
            "topic": "Traffic",
            "val": 0.027043940060210447
          },
          {
            "topic": "Government",
            "val": 0.027027027027027074
          }
        ]
      },
      {
        "site": "20480",
        "startTime": "2014-01-14 04:18:00.94",
        "endTime": "2014-01-14 04:21:07.76",
        "stopTime": 186,
        "isStop": false,
        "latitude": 27.9961,
        "longitude": 120.6477,
        "topics": [
          {
            "topic": "Hospital",
            "val": 0.14548923859742754
          },
          {
            "topic": "Uptown",
            "val": 0.13246065778944938
          },
          {
            "topic": "Beauty",
            "val": 0.07866390365005371
          },
          {
            "topic": "Education",
            "val": 0.07191366257001564
          },
          {
            "topic": "Enterprise",
            "val": 0.060136646217608204
          },
          {
            "topic": "Hotel",
            "val": 0.05989043681651244
          },
          {
            "topic": "Government",
            "val": 0.04883153121730088
          },
          {
            "topic": "Life",
            "val": 0.04281991834054879
          },
          {
            "topic": "Food",
            "val": 0.041650423685344475
          },
          {
            "topic": "Finance",
            "val": 0.03356654834937081
          },
          {
            "topic": "Scenicspot",
            "val": 0.03317671679763606
          },
          {
            "topic": "Traffic",
            "val": 0.0328074026959926
          },
          {
            "topic": "Shop",
            "val": 0.0327868852459013
          }
        ]
      },
      {
        "site": "382",
        "startTime": "2014-01-14 04:21:07.76",
        "endTime": "2014-01-14 04:21:12.6",
        "stopTime": 4,
        "isStop": false,
        "latitude": 28.0029,
        "longitude": 120.6492,
        "topics": [
          {
            "topic": "Education",
            "val": 0.2624340207868537
          },
          {
            "topic": "Beauty",
            "val": 0.08494313544104078
          },
          {
            "topic": "Hospital",
            "val": 0.06468683680687855
          },
          {
            "topic": "Government",
            "val": 0.06441475757740756
          },
          {
            "topic": "Food",
            "val": 0.05206236055939487
          },
          {
            "topic": "Hotel",
            "val": 0.04863416226805244
          },
          {
            "topic": "Shop",
            "val": 0.04647113239375306
          },
          {
            "topic": "Finance",
            "val": 0.04547804320618178
          },
          {
            "topic": "Uptown",
            "val": 0.04425368667355937
          },
          {
            "topic": "Enterprise",
            "val": 0.035356695869837515
          },
          {
            "topic": "Traffic",
            "val": 0.03162921042607622
          },
          {
            "topic": "Life",
            "val": 0.02609239810632856
          },
          {
            "topic": "Scenicspot",
            "val": 0.024908853458127024
          }
        ]
      },
      {
        "site": "20480",
        "startTime": "2014-01-14 04:21:12.6",
        "endTime": "2014-01-14 04:21:40.61",
        "stopTime": 28,
        "isStop": false,
        "latitude": 27.9961,
        "longitude": 120.6477,
        "topics": [
          {
            "topic": "Hospital",
            "val": 0.14548923859742754
          },
          {
            "topic": "Uptown",
            "val": 0.13246065778944938
          },
          {
            "topic": "Beauty",
            "val": 0.07866390365005371
          },
          {
            "topic": "Education",
            "val": 0.07191366257001564
          },
          {
            "topic": "Enterprise",
            "val": 0.060136646217608204
          },
          {
            "topic": "Hotel",
            "val": 0.05989043681651244
          },
          {
            "topic": "Government",
            "val": 0.04883153121730088
          },
          {
            "topic": "Life",
            "val": 0.04281991834054879
          },
          {
            "topic": "Food",
            "val": 0.041650423685344475
          },
          {
            "topic": "Finance",
            "val": 0.03356654834937081
          },
          {
            "topic": "Scenicspot",
            "val": 0.03317671679763606
          },
          {
            "topic": "Traffic",
            "val": 0.0328074026959926
          },
          {
            "topic": "Shop",
            "val": 0.0327868852459013
          }
        ]
      },
      {
        "site": "25845",
        "startTime": "2014-01-14 04:21:40.61",
        "endTime": "2014-01-14 04:24:29.79",
        "stopTime": 169,
        "isStop": false,
        "latitude": 27.9986,
        "longitude": 120.6404,
        "topics": [
          {
            "topic": "Shop",
            "val": 0.13934648039779468
          },
          {
            "topic": "Beauty",
            "val": 0.08742346852484538
          },
          {
            "topic": "Enterprise",
            "val": 0.0585529208808306
          },
          {
            "topic": "Uptown",
            "val": 0.04236714812434442
          },
          {
            "topic": "Finance",
            "val": 0.04114940973514191
          },
          {
            "topic": "Life",
            "val": 0.03790210736393458
          },
          {
            "topic": "Hotel",
            "val": 0.03057876399553506
          },
          {
            "topic": "Education",
            "val": 0.029344112573148937
          },
          {
            "topic": "Hospital",
            "val": 0.028413895748063522
          },
          {
            "topic": "Food",
            "val": 0.027111592192943932
          },
          {
            "topic": "Scenicspot",
            "val": 0.027077766126577193
          },
          {
            "topic": "Traffic",
            "val": 0.027043940060210447
          },
          {
            "topic": "Government",
            "val": 0.027027027027027074
          }
        ]
      },
      {
        "site": "10878",
        "startTime": "2014-01-14 04:24:29.79",
        "endTime": "2014-01-14 04:24:36.13",
        "stopTime": 6,
        "isStop": false,
        "latitude": 28.0003,
        "longitude": 120.6472,
        "topics": [
          {
            "topic": "Food",
            "val": 0.11189389963260434
          },
          {
            "topic": "Education",
            "val": 0.09796519843352477
          },
          {
            "topic": "Uptown",
            "val": 0.08924462029149229
          },
          {
            "topic": "Life",
            "val": 0.06669627356776565
          },
          {
            "topic": "Traffic",
            "val": 0.06257822277847265
          },
          {
            "topic": "Hospital",
            "val": 0.05553312608502523
          },
          {
            "topic": "Shop",
            "val": 0.0515967540070246
          },
          {
            "topic": "Enterprise",
            "val": 0.047963179781177805
          },
          {
            "topic": "Government",
            "val": 0.04776131454640816
          },
          {
            "topic": "Beauty",
            "val": 0.04640881747345444
          },
          {
            "topic": "Hotel",
            "val": 0.04344139852234627
          },
          {
            "topic": "Scenicspot",
            "val": 0.039747264726068626
          },
          {
            "topic": "Finance",
            "val": 0.03873793855222234
          }
        ]
      },
      {
        "site": "20480",
        "startTime": "2014-01-14 04:24:36.13",
        "endTime": "2014-01-14 04:25:04.96",
        "stopTime": 28,
        "isStop": false,
        "latitude": 27.9961,
        "longitude": 120.6477,
        "topics": [
          {
            "topic": "Hospital",
            "val": 0.14548923859742754
          },
          {
            "topic": "Uptown",
            "val": 0.13246065778944938
          },
          {
            "topic": "Beauty",
            "val": 0.07866390365005371
          },
          {
            "topic": "Education",
            "val": 0.07191366257001564
          },
          {
            "topic": "Enterprise",
            "val": 0.060136646217608204
          },
          {
            "topic": "Hotel",
            "val": 0.05989043681651244
          },
          {
            "topic": "Government",
            "val": 0.04883153121730088
          },
          {
            "topic": "Life",
            "val": 0.04281991834054879
          },
          {
            "topic": "Food",
            "val": 0.041650423685344475
          },
          {
            "topic": "Finance",
            "val": 0.03356654834937081
          },
          {
            "topic": "Scenicspot",
            "val": 0.03317671679763606
          },
          {
            "topic": "Traffic",
            "val": 0.0328074026959926
          },
          {
            "topic": "Shop",
            "val": 0.0327868852459013
          }
        ]
      },
      {
        "site": "25845",
        "startTime": "2014-01-14 04:25:04.96",
        "endTime": "2014-01-14 04:30:51.47",
        "stopTime": 346,
        "isStop": false,
        "latitude": 27.9986,
        "longitude": 120.6404,
        "topics": [
          {
            "topic": "Shop",
            "val": 0.13934648039779468
          },
          {
            "topic": "Beauty",
            "val": 0.08742346852484538
          },
          {
            "topic": "Enterprise",
            "val": 0.0585529208808306
          },
          {
            "topic": "Uptown",
            "val": 0.04236714812434442
          },
          {
            "topic": "Finance",
            "val": 0.04114940973514191
          },
          {
            "topic": "Life",
            "val": 0.03790210736393458
          },
          {
            "topic": "Hotel",
            "val": 0.03057876399553506
          },
          {
            "topic": "Education",
            "val": 0.029344112573148937
          },
          {
            "topic": "Hospital",
            "val": 0.028413895748063522
          },
          {
            "topic": "Food",
            "val": 0.027111592192943932
          },
          {
            "topic": "Scenicspot",
            "val": 0.027077766126577193
          },
          {
            "topic": "Traffic",
            "val": 0.027043940060210447
          },
          {
            "topic": "Government",
            "val": 0.027027027027027074
          }
        ]
      },
      {
        "site": "20480",
        "startTime": "2014-01-14 04:30:51.47",
        "endTime": "2014-01-14 04:32:33.03",
        "stopTime": 101,
        "isStop": false,
        "latitude": 27.9961,
        "longitude": 120.6477,
        "topics": [
          {
            "topic": "Hospital",
            "val": 0.14548923859742754
          },
          {
            "topic": "Uptown",
            "val": 0.13246065778944938
          },
          {
            "topic": "Beauty",
            "val": 0.07866390365005371
          },
          {
            "topic": "Education",
            "val": 0.07191366257001564
          },
          {
            "topic": "Enterprise",
            "val": 0.060136646217608204
          },
          {
            "topic": "Hotel",
            "val": 0.05989043681651244
          },
          {
            "topic": "Government",
            "val": 0.04883153121730088
          },
          {
            "topic": "Life",
            "val": 0.04281991834054879
          },
          {
            "topic": "Food",
            "val": 0.041650423685344475
          },
          {
            "topic": "Finance",
            "val": 0.03356654834937081
          },
          {
            "topic": "Scenicspot",
            "val": 0.03317671679763606
          },
          {
            "topic": "Traffic",
            "val": 0.0328074026959926
          },
          {
            "topic": "Shop",
            "val": 0.0327868852459013
          }
        ]
      },
      {
        "site": "14848",
        "startTime": "2014-01-14 04:32:33.03",
        "endTime": "2014-01-14 04:34:57.37",
        "stopTime": 144,
        "isStop": false,
        "latitude": 28.0007,
        "longitude": 120.6432,
        "topics": [
          {
            "topic": "Traffic",
            "val": 0.07272980114031524
          },
          {
            "topic": "Food",
            "val": 0.07196495619524494
          },
          {
            "topic": "Beauty",
            "val": 0.06219580030593891
          },
          {
            "topic": "Scenicspot",
            "val": 0.06125712696426177
          },
          {
            "topic": "Hotel",
            "val": 0.060214156584620586
          },
          {
            "topic": "Hospital",
            "val": 0.05878876373244426
          },
          {
            "topic": "Uptown",
            "val": 0.05649422889723358
          },
          {
            "topic": "Education",
            "val": 0.05628563482130533
          },
          {
            "topic": "Life",
            "val": 0.05559032123487788
          },
          {
            "topic": "Finance",
            "val": 0.05559032123487787
          },
          {
            "topic": "Enterprise",
            "val": 0.0555555555555565
          },
          {
            "topic": "Shop",
            "val": 0.0555555555555565
          },
          {
            "topic": "Government",
            "val": 0.0555555555555565
          }
        ]
      },
      {
        "site": "25845",
        "startTime": "2014-01-14 04:34:57.37",
        "endTime": "2014-01-14 04:35:14.01",
        "stopTime": 16,
        "isStop": false,
        "latitude": 27.9986,
        "longitude": 120.6404,
        "topics": [
          {
            "topic": "Shop",
            "val": 0.13934648039779468
          },
          {
            "topic": "Beauty",
            "val": 0.08742346852484538
          },
          {
            "topic": "Enterprise",
            "val": 0.0585529208808306
          },
          {
            "topic": "Uptown",
            "val": 0.04236714812434442
          },
          {
            "topic": "Finance",
            "val": 0.04114940973514191
          },
          {
            "topic": "Life",
            "val": 0.03790210736393458
          },
          {
            "topic": "Hotel",
            "val": 0.03057876399553506
          },
          {
            "topic": "Education",
            "val": 0.029344112573148937
          },
          {
            "topic": "Hospital",
            "val": 0.028413895748063522
          },
          {
            "topic": "Food",
            "val": 0.027111592192943932
          },
          {
            "topic": "Scenicspot",
            "val": 0.027077766126577193
          },
          {
            "topic": "Traffic",
            "val": 0.027043940060210447
          },
          {
            "topic": "Government",
            "val": 0.027027027027027074
          }
        ]
      },
      {
        "site": "8247",
        "startTime": "2014-01-14 04:35:14.01",
        "endTime": "2014-01-14 04:39:15.68",
        "stopTime": 241,
        "isStop": false,
        "latitude": 27.9963,
        "longitude": 120.6444,
        "topics": [
          {
            "topic": "Scenicspot",
            "val": 0.11418878861735185
          },
          {
            "topic": "Education",
            "val": 0.0798037019959168
          },
          {
            "topic": "Traffic",
            "val": 0.06541071075686784
          },
          {
            "topic": "Hospital",
            "val": 0.055332323298861244
          },
          {
            "topic": "Uptown",
            "val": 0.053652592055860135
          },
          {
            "topic": "Hotel",
            "val": 0.052664514854094784
          },
          {
            "topic": "Finance",
            "val": 0.052631578947369265
          },
          {
            "topic": "Enterprise",
            "val": 0.052631578947369265
          },
          {
            "topic": "Food",
            "val": 0.052631578947369265
          },
          {
            "topic": "Life",
            "val": 0.052631578947369265
          },
          {
            "topic": "Shop",
            "val": 0.052631578947369265
          },
          {
            "topic": "Government",
            "val": 0.052631578947369265
          },
          {
            "topic": "Beauty",
            "val": 0.052631578947369265
          }
        ]
      },
      {
        "site": "25845",
        "startTime": "2014-01-14 04:39:15.68",
        "endTime": "2014-01-14 04:41:11.66",
        "stopTime": 115,
        "isStop": false,
        "latitude": 27.9986,
        "longitude": 120.6404,
        "topics": [
          {
            "topic": "Shop",
            "val": 0.13934648039779468
          },
          {
            "topic": "Beauty",
            "val": 0.08742346852484538
          },
          {
            "topic": "Enterprise",
            "val": 0.0585529208808306
          },
          {
            "topic": "Uptown",
            "val": 0.04236714812434442
          },
          {
            "topic": "Finance",
            "val": 0.04114940973514191
          },
          {
            "topic": "Life",
            "val": 0.03790210736393458
          },
          {
            "topic": "Hotel",
            "val": 0.03057876399553506
          },
          {
            "topic": "Education",
            "val": 0.029344112573148937
          },
          {
            "topic": "Hospital",
            "val": 0.028413895748063522
          },
          {
            "topic": "Food",
            "val": 0.027111592192943932
          },
          {
            "topic": "Scenicspot",
            "val": 0.027077766126577193
          },
          {
            "topic": "Traffic",
            "val": 0.027043940060210447
          },
          {
            "topic": "Government",
            "val": 0.027027027027027074
          }
        ]
      },
      {
        "site": "10878",
        "startTime": "2014-01-14 04:41:11.66",
        "endTime": "2014-01-14 04:57:47.35",
        "stopTime": 995,
        "isStop": false,
        "latitude": 28.0003,
        "longitude": 120.6472,
        "topics": [
          {
            "topic": "Food",
            "val": 0.11189389963260434
          },
          {
            "topic": "Education",
            "val": 0.09796519843352477
          },
          {
            "topic": "Uptown",
            "val": 0.08924462029149229
          },
          {
            "topic": "Life",
            "val": 0.06669627356776565
          },
          {
            "topic": "Traffic",
            "val": 0.06257822277847265
          },
          {
            "topic": "Hospital",
            "val": 0.05553312608502523
          },
          {
            "topic": "Shop",
            "val": 0.0515967540070246
          },
          {
            "topic": "Enterprise",
            "val": 0.047963179781177805
          },
          {
            "topic": "Government",
            "val": 0.04776131454640816
          },
          {
            "topic": "Beauty",
            "val": 0.04640881747345444
          },
          {
            "topic": "Hotel",
            "val": 0.04344139852234627
          },
          {
            "topic": "Scenicspot",
            "val": 0.039747264726068626
          },
          {
            "topic": "Finance",
            "val": 0.03873793855222234
          }
        ]
      },
      {
        "site": "20480",
        "startTime": "2014-01-14 04:57:47.35",
        "endTime": "2014-01-14 04:57:52.15",
        "stopTime": 4,
        "isStop": false,
        "latitude": 27.9961,
        "longitude": 120.6477,
        "topics": [
          {
            "topic": "Hospital",
            "val": 0.14548923859742754
          },
          {
            "topic": "Uptown",
            "val": 0.13246065778944938
          },
          {
            "topic": "Beauty",
            "val": 0.07866390365005371
          },
          {
            "topic": "Education",
            "val": 0.07191366257001564
          },
          {
            "topic": "Enterprise",
            "val": 0.060136646217608204
          },
          {
            "topic": "Hotel",
            "val": 0.05989043681651244
          },
          {
            "topic": "Government",
            "val": 0.04883153121730088
          },
          {
            "topic": "Life",
            "val": 0.04281991834054879
          },
          {
            "topic": "Food",
            "val": 0.041650423685344475
          },
          {
            "topic": "Finance",
            "val": 0.03356654834937081
          },
          {
            "topic": "Scenicspot",
            "val": 0.03317671679763606
          },
          {
            "topic": "Traffic",
            "val": 0.0328074026959926
          },
          {
            "topic": "Shop",
            "val": 0.0327868852459013
          }
        ]
      },
      {
        "site": "25845",
        "startTime": "2014-01-14 04:57:52.15",
        "endTime": "2014-01-14 04:58:13.53",
        "stopTime": 21,
        "isStop": false,
        "latitude": 27.9986,
        "longitude": 120.6404,
        "topics": [
          {
            "topic": "Shop",
            "val": 0.13934648039779468
          },
          {
            "topic": "Beauty",
            "val": 0.08742346852484538
          },
          {
            "topic": "Enterprise",
            "val": 0.0585529208808306
          },
          {
            "topic": "Uptown",
            "val": 0.04236714812434442
          },
          {
            "topic": "Finance",
            "val": 0.04114940973514191
          },
          {
            "topic": "Life",
            "val": 0.03790210736393458
          },
          {
            "topic": "Hotel",
            "val": 0.03057876399553506
          },
          {
            "topic": "Education",
            "val": 0.029344112573148937
          },
          {
            "topic": "Hospital",
            "val": 0.028413895748063522
          },
          {
            "topic": "Food",
            "val": 0.027111592192943932
          },
          {
            "topic": "Scenicspot",
            "val": 0.027077766126577193
          },
          {
            "topic": "Traffic",
            "val": 0.027043940060210447
          },
          {
            "topic": "Government",
            "val": 0.027027027027027074
          }
        ]
      },
      {
        "site": "14565",
        "startTime": "2014-01-14 04:58:13.53",
        "endTime": "2014-01-14 04:58:25.21",
        "stopTime": 11,
        "isStop": false,
        "latitude": 28.0031,
        "longitude": 120.6539,
        "topics": [
          {
            "topic": "Shop",
            "val": 0.08099868425275235
          },
          {
            "topic": "Hospital",
            "val": 0.07451622220082918
          },
          {
            "topic": "Finance",
            "val": 0.06145502390809034
          },
          {
            "topic": "Education",
            "val": 0.05279034690799387
          },
          {
            "topic": "Life",
            "val": 0.05250152434132395
          },
          {
            "topic": "Beauty",
            "val": 0.05141041686723774
          },
          {
            "topic": "Scenicspot",
            "val": 0.05134623407464442
          },
          {
            "topic": "Food",
            "val": 0.05131414267834777
          },
          {
            "topic": "Enterprise",
            "val": 0.05128205128205112
          },
          {
            "topic": "Traffic",
            "val": 0.05128205128205112
          },
          {
            "topic": "Uptown",
            "val": 0.05128205128205112
          },
          {
            "topic": "Hotel",
            "val": 0.05128205128205112
          },
          {
            "topic": "Government",
            "val": 0.05128205128205112
          }
        ]
      },
      {
        "site": "20480",
        "startTime": "2014-01-14 04:58:25.21",
        "endTime": "2014-01-14 05:00:58.56",
        "stopTime": 153,
        "isStop": false,
        "latitude": 27.9961,
        "longitude": 120.6477,
        "topics": [
          {
            "topic": "Hospital",
            "val": 0.14548923859742754
          },
          {
            "topic": "Uptown",
            "val": 0.13246065778944938
          },
          {
            "topic": "Beauty",
            "val": 0.07866390365005371
          },
          {
            "topic": "Education",
            "val": 0.07191366257001564
          },
          {
            "topic": "Enterprise",
            "val": 0.060136646217608204
          },
          {
            "topic": "Hotel",
            "val": 0.05989043681651244
          },
          {
            "topic": "Government",
            "val": 0.04883153121730088
          },
          {
            "topic": "Life",
            "val": 0.04281991834054879
          },
          {
            "topic": "Food",
            "val": 0.041650423685344475
          },
          {
            "topic": "Finance",
            "val": 0.03356654834937081
          },
          {
            "topic": "Scenicspot",
            "val": 0.03317671679763606
          },
          {
            "topic": "Traffic",
            "val": 0.0328074026959926
          },
          {
            "topic": "Shop",
            "val": 0.0327868852459013
          }
        ]
      },
      {
        "site": "25845",
        "startTime": "2014-01-14 05:00:58.56",
        "endTime": "2014-01-14 05:01:45.86",
        "stopTime": 47,
        "isStop": false,
        "latitude": 27.9986,
        "longitude": 120.6404,
        "topics": [
          {
            "topic": "Shop",
            "val": 0.13934648039779468
          },
          {
            "topic": "Beauty",
            "val": 0.08742346852484538
          },
          {
            "topic": "Enterprise",
            "val": 0.0585529208808306
          },
          {
            "topic": "Uptown",
            "val": 0.04236714812434442
          },
          {
            "topic": "Finance",
            "val": 0.04114940973514191
          },
          {
            "topic": "Life",
            "val": 0.03790210736393458
          },
          {
            "topic": "Hotel",
            "val": 0.03057876399553506
          },
          {
            "topic": "Education",
            "val": 0.029344112573148937
          },
          {
            "topic": "Hospital",
            "val": 0.028413895748063522
          },
          {
            "topic": "Food",
            "val": 0.027111592192943932
          },
          {
            "topic": "Scenicspot",
            "val": 0.027077766126577193
          },
          {
            "topic": "Traffic",
            "val": 0.027043940060210447
          },
          {
            "topic": "Government",
            "val": 0.027027027027027074
          }
        ]
      },
      {
        "site": "28699",
        "startTime": "2014-01-14 05:01:45.86",
        "endTime": "2014-01-14 05:02:04.97",
        "stopTime": 19,
        "isStop": false,
        "latitude": 27.9959,
        "longitude": 120.6442,
        "topics": [
          {
            "topic": "Finance",
            "val": 0.05882352941176564
          },
          {
            "topic": "Enterprise",
            "val": 0.05882352941176564
          },
          {
            "topic": "Traffic",
            "val": 0.05882352941176564
          },
          {
            "topic": "Scenicspot",
            "val": 0.05882352941176564
          },
          {
            "topic": "Uptown",
            "val": 0.05882352941176564
          },
          {
            "topic": "Food",
            "val": 0.05882352941176564
          },
          {
            "topic": "Hospital",
            "val": 0.05882352941176564
          },
          {
            "topic": "Life",
            "val": 0.05882352941176564
          },
          {
            "topic": "Hotel",
            "val": 0.05882352941176564
          },
          {
            "topic": "Shop",
            "val": 0.05882352941176564
          },
          {
            "topic": "Government",
            "val": 0.05882352941176564
          },
          {
            "topic": "Beauty",
            "val": 0.05882352941176564
          },
          {
            "topic": "Education",
            "val": 0.05882352941176564
          }
        ]
      },
      {
        "site": "25845",
        "startTime": "2014-01-14 05:02:04.97",
        "endTime": "2014-01-14 05:06:03.76",
        "stopTime": 238,
        "isStop": false,
        "latitude": 27.9986,
        "longitude": 120.6404,
        "topics": [
          {
            "topic": "Shop",
            "val": 0.13934648039779468
          },
          {
            "topic": "Beauty",
            "val": 0.08742346852484538
          },
          {
            "topic": "Enterprise",
            "val": 0.0585529208808306
          },
          {
            "topic": "Uptown",
            "val": 0.04236714812434442
          },
          {
            "topic": "Finance",
            "val": 0.04114940973514191
          },
          {
            "topic": "Life",
            "val": 0.03790210736393458
          },
          {
            "topic": "Hotel",
            "val": 0.03057876399553506
          },
          {
            "topic": "Education",
            "val": 0.029344112573148937
          },
          {
            "topic": "Hospital",
            "val": 0.028413895748063522
          },
          {
            "topic": "Food",
            "val": 0.027111592192943932
          },
          {
            "topic": "Scenicspot",
            "val": 0.027077766126577193
          },
          {
            "topic": "Traffic",
            "val": 0.027043940060210447
          },
          {
            "topic": "Government",
            "val": 0.027027027027027074
          }
        ]
      },
      {
        "site": "8247",
        "startTime": "2014-01-14 05:06:03.76",
        "endTime": "2014-01-14 05:13:09.58",
        "stopTime": 425,
        "isStop": false,
        "latitude": 27.9963,
        "longitude": 120.6444,
        "topics": [
          {
            "topic": "Scenicspot",
            "val": 0.11418878861735185
          },
          {
            "topic": "Education",
            "val": 0.0798037019959168
          },
          {
            "topic": "Traffic",
            "val": 0.06541071075686784
          },
          {
            "topic": "Hospital",
            "val": 0.055332323298861244
          },
          {
            "topic": "Uptown",
            "val": 0.053652592055860135
          },
          {
            "topic": "Hotel",
            "val": 0.052664514854094784
          },
          {
            "topic": "Finance",
            "val": 0.052631578947369265
          },
          {
            "topic": "Enterprise",
            "val": 0.052631578947369265
          },
          {
            "topic": "Food",
            "val": 0.052631578947369265
          },
          {
            "topic": "Life",
            "val": 0.052631578947369265
          },
          {
            "topic": "Shop",
            "val": 0.052631578947369265
          },
          {
            "topic": "Government",
            "val": 0.052631578947369265
          },
          {
            "topic": "Beauty",
            "val": 0.052631578947369265
          }
        ]
      },
      {
        "site": "25845",
        "startTime": "2014-01-14 05:13:09.58",
        "endTime": "2014-01-14 05:15:26.9",
        "stopTime": 137,
        "isStop": false,
        "latitude": 27.9986,
        "longitude": 120.6404,
        "topics": [
          {
            "topic": "Shop",
            "val": 0.13934648039779468
          },
          {
            "topic": "Beauty",
            "val": 0.08742346852484538
          },
          {
            "topic": "Enterprise",
            "val": 0.0585529208808306
          },
          {
            "topic": "Uptown",
            "val": 0.04236714812434442
          },
          {
            "topic": "Finance",
            "val": 0.04114940973514191
          },
          {
            "topic": "Life",
            "val": 0.03790210736393458
          },
          {
            "topic": "Hotel",
            "val": 0.03057876399553506
          },
          {
            "topic": "Education",
            "val": 0.029344112573148937
          },
          {
            "topic": "Hospital",
            "val": 0.028413895748063522
          },
          {
            "topic": "Food",
            "val": 0.027111592192943932
          },
          {
            "topic": "Scenicspot",
            "val": 0.027077766126577193
          },
          {
            "topic": "Traffic",
            "val": 0.027043940060210447
          },
          {
            "topic": "Government",
            "val": 0.027027027027027074
          }
        ]
      },
      {
        "site": "8247",
        "startTime": "2014-01-14 05:15:26.9",
        "endTime": "2014-01-14 05:24:01.16",
        "stopTime": 514,
        "isStop": false,
        "latitude": 27.9963,
        "longitude": 120.6444,
        "topics": [
          {
            "topic": "Scenicspot",
            "val": 0.11418878861735185
          },
          {
            "topic": "Education",
            "val": 0.0798037019959168
          },
          {
            "topic": "Traffic",
            "val": 0.06541071075686784
          },
          {
            "topic": "Hospital",
            "val": 0.055332323298861244
          },
          {
            "topic": "Uptown",
            "val": 0.053652592055860135
          },
          {
            "topic": "Hotel",
            "val": 0.052664514854094784
          },
          {
            "topic": "Finance",
            "val": 0.052631578947369265
          },
          {
            "topic": "Enterprise",
            "val": 0.052631578947369265
          },
          {
            "topic": "Food",
            "val": 0.052631578947369265
          },
          {
            "topic": "Life",
            "val": 0.052631578947369265
          },
          {
            "topic": "Shop",
            "val": 0.052631578947369265
          },
          {
            "topic": "Government",
            "val": 0.052631578947369265
          },
          {
            "topic": "Beauty",
            "val": 0.052631578947369265
          }
        ]
      },
      {
        "site": "382",
        "startTime": "2014-01-14 05:24:01.16",
        "endTime": "2014-01-14 05:25:00.22",
        "stopTime": 59,
        "isStop": false,
        "latitude": 28.0029,
        "longitude": 120.6492,
        "topics": [
          {
            "topic": "Education",
            "val": 0.2624340207868537
          },
          {
            "topic": "Beauty",
            "val": 0.08494313544104078
          },
          {
            "topic": "Hospital",
            "val": 0.06468683680687855
          },
          {
            "topic": "Government",
            "val": 0.06441475757740756
          },
          {
            "topic": "Food",
            "val": 0.05206236055939487
          },
          {
            "topic": "Hotel",
            "val": 0.04863416226805244
          },
          {
            "topic": "Shop",
            "val": 0.04647113239375306
          },
          {
            "topic": "Finance",
            "val": 0.04547804320618178
          },
          {
            "topic": "Uptown",
            "val": 0.04425368667355937
          },
          {
            "topic": "Enterprise",
            "val": 0.035356695869837515
          },
          {
            "topic": "Traffic",
            "val": 0.03162921042607622
          },
          {
            "topic": "Life",
            "val": 0.02609239810632856
          },
          {
            "topic": "Scenicspot",
            "val": 0.024908853458127024
          }
        ]
      },
      {
        "site": "20480",
        "startTime": "2014-01-14 05:25:00.22",
        "endTime": "2014-01-14 05:26:02.29",
        "stopTime": 62,
        "isStop": false,
        "latitude": 27.9961,
        "longitude": 120.6477,
        "topics": [
          {
            "topic": "Hospital",
            "val": 0.14548923859742754
          },
          {
            "topic": "Uptown",
            "val": 0.13246065778944938
          },
          {
            "topic": "Beauty",
            "val": 0.07866390365005371
          },
          {
            "topic": "Education",
            "val": 0.07191366257001564
          },
          {
            "topic": "Enterprise",
            "val": 0.060136646217608204
          },
          {
            "topic": "Hotel",
            "val": 0.05989043681651244
          },
          {
            "topic": "Government",
            "val": 0.04883153121730088
          },
          {
            "topic": "Life",
            "val": 0.04281991834054879
          },
          {
            "topic": "Food",
            "val": 0.041650423685344475
          },
          {
            "topic": "Finance",
            "val": 0.03356654834937081
          },
          {
            "topic": "Scenicspot",
            "val": 0.03317671679763606
          },
          {
            "topic": "Traffic",
            "val": 0.0328074026959926
          },
          {
            "topic": "Shop",
            "val": 0.0327868852459013
          }
        ]
      },
      {
        "site": "25845",
        "startTime": "2014-01-14 05:26:02.29",
        "endTime": "2014-01-14 05:27:29.98",
        "stopTime": 87,
        "isStop": false,
        "latitude": 27.9986,
        "longitude": 120.6404,
        "topics": [
          {
            "topic": "Shop",
            "val": 0.13934648039779468
          },
          {
            "topic": "Beauty",
            "val": 0.08742346852484538
          },
          {
            "topic": "Enterprise",
            "val": 0.0585529208808306
          },
          {
            "topic": "Uptown",
            "val": 0.04236714812434442
          },
          {
            "topic": "Finance",
            "val": 0.04114940973514191
          },
          {
            "topic": "Life",
            "val": 0.03790210736393458
          },
          {
            "topic": "Hotel",
            "val": 0.03057876399553506
          },
          {
            "topic": "Education",
            "val": 0.029344112573148937
          },
          {
            "topic": "Hospital",
            "val": 0.028413895748063522
          },
          {
            "topic": "Food",
            "val": 0.027111592192943932
          },
          {
            "topic": "Scenicspot",
            "val": 0.027077766126577193
          },
          {
            "topic": "Traffic",
            "val": 0.027043940060210447
          },
          {
            "topic": "Government",
            "val": 0.027027027027027074
          }
        ]
      },
      {
        "site": "20480",
        "startTime": "2014-01-14 05:27:29.98",
        "endTime": "2014-01-14 05:29:05.67",
        "stopTime": 95,
        "isStop": false,
        "latitude": 27.9961,
        "longitude": 120.6477,
        "topics": [
          {
            "topic": "Hospital",
            "val": 0.14548923859742754
          },
          {
            "topic": "Uptown",
            "val": 0.13246065778944938
          },
          {
            "topic": "Beauty",
            "val": 0.07866390365005371
          },
          {
            "topic": "Education",
            "val": 0.07191366257001564
          },
          {
            "topic": "Enterprise",
            "val": 0.060136646217608204
          },
          {
            "topic": "Hotel",
            "val": 0.05989043681651244
          },
          {
            "topic": "Government",
            "val": 0.04883153121730088
          },
          {
            "topic": "Life",
            "val": 0.04281991834054879
          },
          {
            "topic": "Food",
            "val": 0.041650423685344475
          },
          {
            "topic": "Finance",
            "val": 0.03356654834937081
          },
          {
            "topic": "Scenicspot",
            "val": 0.03317671679763606
          },
          {
            "topic": "Traffic",
            "val": 0.0328074026959926
          },
          {
            "topic": "Shop",
            "val": 0.0327868852459013
          }
        ]
      },
      {
        "site": "25845",
        "startTime": "2014-01-14 05:29:05.67",
        "endTime": "2014-01-14 05:31:12.15",
        "stopTime": 126,
        "isStop": false,
        "latitude": 27.9986,
        "longitude": 120.6404,
        "topics": [
          {
            "topic": "Shop",
            "val": 0.13934648039779468
          },
          {
            "topic": "Beauty",
            "val": 0.08742346852484538
          },
          {
            "topic": "Enterprise",
            "val": 0.0585529208808306
          },
          {
            "topic": "Uptown",
            "val": 0.04236714812434442
          },
          {
            "topic": "Finance",
            "val": 0.04114940973514191
          },
          {
            "topic": "Life",
            "val": 0.03790210736393458
          },
          {
            "topic": "Hotel",
            "val": 0.03057876399553506
          },
          {
            "topic": "Education",
            "val": 0.029344112573148937
          },
          {
            "topic": "Hospital",
            "val": 0.028413895748063522
          },
          {
            "topic": "Food",
            "val": 0.027111592192943932
          },
          {
            "topic": "Scenicspot",
            "val": 0.027077766126577193
          },
          {
            "topic": "Traffic",
            "val": 0.027043940060210447
          },
          {
            "topic": "Government",
            "val": 0.027027027027027074
          }
        ]
      },
      {
        "site": "8247",
        "startTime": "2014-01-14 05:31:12.15",
        "endTime": "2014-01-14 05:35:18.05",
        "stopTime": 245,
        "isStop": false,
        "latitude": 27.9963,
        "longitude": 120.6444,
        "topics": [
          {
            "topic": "Scenicspot",
            "val": 0.11418878861735185
          },
          {
            "topic": "Education",
            "val": 0.0798037019959168
          },
          {
            "topic": "Traffic",
            "val": 0.06541071075686784
          },
          {
            "topic": "Hospital",
            "val": 0.055332323298861244
          },
          {
            "topic": "Uptown",
            "val": 0.053652592055860135
          },
          {
            "topic": "Hotel",
            "val": 0.052664514854094784
          },
          {
            "topic": "Finance",
            "val": 0.052631578947369265
          },
          {
            "topic": "Enterprise",
            "val": 0.052631578947369265
          },
          {
            "topic": "Food",
            "val": 0.052631578947369265
          },
          {
            "topic": "Life",
            "val": 0.052631578947369265
          },
          {
            "topic": "Shop",
            "val": 0.052631578947369265
          },
          {
            "topic": "Government",
            "val": 0.052631578947369265
          },
          {
            "topic": "Beauty",
            "val": 0.052631578947369265
          }
        ]
      },
      {
        "site": "25845",
        "startTime": "2014-01-14 05:35:18.05",
        "endTime": "2014-01-14 05:37:06.13",
        "stopTime": 108,
        "isStop": false,
        "latitude": 27.9986,
        "longitude": 120.6404,
        "topics": [
          {
            "topic": "Shop",
            "val": 0.13934648039779468
          },
          {
            "topic": "Beauty",
            "val": 0.08742346852484538
          },
          {
            "topic": "Enterprise",
            "val": 0.0585529208808306
          },
          {
            "topic": "Uptown",
            "val": 0.04236714812434442
          },
          {
            "topic": "Finance",
            "val": 0.04114940973514191
          },
          {
            "topic": "Life",
            "val": 0.03790210736393458
          },
          {
            "topic": "Hotel",
            "val": 0.03057876399553506
          },
          {
            "topic": "Education",
            "val": 0.029344112573148937
          },
          {
            "topic": "Hospital",
            "val": 0.028413895748063522
          },
          {
            "topic": "Food",
            "val": 0.027111592192943932
          },
          {
            "topic": "Scenicspot",
            "val": 0.027077766126577193
          },
          {
            "topic": "Traffic",
            "val": 0.027043940060210447
          },
          {
            "topic": "Government",
            "val": 0.027027027027027074
          }
        ]
      },
      {
        "site": "8247",
        "startTime": "2014-01-14 05:37:06.13",
        "endTime": "2014-01-14 05:45:31.79",
        "stopTime": 505,
        "isStop": false,
        "latitude": 27.9963,
        "longitude": 120.6444,
        "topics": [
          {
            "topic": "Scenicspot",
            "val": 0.11418878861735185
          },
          {
            "topic": "Education",
            "val": 0.0798037019959168
          },
          {
            "topic": "Traffic",
            "val": 0.06541071075686784
          },
          {
            "topic": "Hospital",
            "val": 0.055332323298861244
          },
          {
            "topic": "Uptown",
            "val": 0.053652592055860135
          },
          {
            "topic": "Hotel",
            "val": 0.052664514854094784
          },
          {
            "topic": "Finance",
            "val": 0.052631578947369265
          },
          {
            "topic": "Enterprise",
            "val": 0.052631578947369265
          },
          {
            "topic": "Food",
            "val": 0.052631578947369265
          },
          {
            "topic": "Life",
            "val": 0.052631578947369265
          },
          {
            "topic": "Shop",
            "val": 0.052631578947369265
          },
          {
            "topic": "Government",
            "val": 0.052631578947369265
          },
          {
            "topic": "Beauty",
            "val": 0.052631578947369265
          }
        ]
      },
      {
        "site": "10878",
        "startTime": "2014-01-14 05:45:31.79",
        "endTime": "2014-01-14 05:56:52.11",
        "stopTime": 680,
        "isStop": false,
        "latitude": 28.0003,
        "longitude": 120.6472,
        "topics": [
          {
            "topic": "Food",
            "val": 0.11189389963260434
          },
          {
            "topic": "Education",
            "val": 0.09796519843352477
          },
          {
            "topic": "Uptown",
            "val": 0.08924462029149229
          },
          {
            "topic": "Life",
            "val": 0.06669627356776565
          },
          {
            "topic": "Traffic",
            "val": 0.06257822277847265
          },
          {
            "topic": "Hospital",
            "val": 0.05553312608502523
          },
          {
            "topic": "Shop",
            "val": 0.0515967540070246
          },
          {
            "topic": "Enterprise",
            "val": 0.047963179781177805
          },
          {
            "topic": "Government",
            "val": 0.04776131454640816
          },
          {
            "topic": "Beauty",
            "val": 0.04640881747345444
          },
          {
            "topic": "Hotel",
            "val": 0.04344139852234627
          },
          {
            "topic": "Scenicspot",
            "val": 0.039747264726068626
          },
          {
            "topic": "Finance",
            "val": 0.03873793855222234
          }
        ]
      },
      {
        "site": "20480",
        "startTime": "2014-01-14 05:56:52.11",
        "endTime": "2014-01-14 05:56:58.44",
        "stopTime": 6,
        "isStop": false,
        "latitude": 27.9961,
        "longitude": 120.6477,
        "topics": [
          {
            "topic": "Hospital",
            "val": 0.14548923859742754
          },
          {
            "topic": "Uptown",
            "val": 0.13246065778944938
          },
          {
            "topic": "Beauty",
            "val": 0.07866390365005371
          },
          {
            "topic": "Education",
            "val": 0.07191366257001564
          },
          {
            "topic": "Enterprise",
            "val": 0.060136646217608204
          },
          {
            "topic": "Hotel",
            "val": 0.05989043681651244
          },
          {
            "topic": "Government",
            "val": 0.04883153121730088
          },
          {
            "topic": "Life",
            "val": 0.04281991834054879
          },
          {
            "topic": "Food",
            "val": 0.041650423685344475
          },
          {
            "topic": "Finance",
            "val": 0.03356654834937081
          },
          {
            "topic": "Scenicspot",
            "val": 0.03317671679763606
          },
          {
            "topic": "Traffic",
            "val": 0.0328074026959926
          },
          {
            "topic": "Shop",
            "val": 0.0327868852459013
          }
        ]
      },
      {
        "site": "10878",
        "startTime": "2014-01-14 05:56:58.44",
        "endTime": "2014-01-14 05:57:48.89",
        "stopTime": 50,
        "isStop": false,
        "latitude": 28.0003,
        "longitude": 120.6472,
        "topics": [
          {
            "topic": "Food",
            "val": 0.11189389963260434
          },
          {
            "topic": "Education",
            "val": 0.09796519843352477
          },
          {
            "topic": "Uptown",
            "val": 0.08924462029149229
          },
          {
            "topic": "Life",
            "val": 0.06669627356776565
          },
          {
            "topic": "Traffic",
            "val": 0.06257822277847265
          },
          {
            "topic": "Hospital",
            "val": 0.05553312608502523
          },
          {
            "topic": "Shop",
            "val": 0.0515967540070246
          },
          {
            "topic": "Enterprise",
            "val": 0.047963179781177805
          },
          {
            "topic": "Government",
            "val": 0.04776131454640816
          },
          {
            "topic": "Beauty",
            "val": 0.04640881747345444
          },
          {
            "topic": "Hotel",
            "val": 0.04344139852234627
          },
          {
            "topic": "Scenicspot",
            "val": 0.039747264726068626
          },
          {
            "topic": "Finance",
            "val": 0.03873793855222234
          }
        ]
      },
      {
        "site": "20480",
        "startTime": "2014-01-14 05:57:48.89",
        "endTime": "2014-01-14 05:58:02.1",
        "stopTime": 13,
        "isStop": false,
        "latitude": 27.9961,
        "longitude": 120.6477,
        "topics": [
          {
            "topic": "Hospital",
            "val": 0.14548923859742754
          },
          {
            "topic": "Uptown",
            "val": 0.13246065778944938
          },
          {
            "topic": "Beauty",
            "val": 0.07866390365005371
          },
          {
            "topic": "Education",
            "val": 0.07191366257001564
          },
          {
            "topic": "Enterprise",
            "val": 0.060136646217608204
          },
          {
            "topic": "Hotel",
            "val": 0.05989043681651244
          },
          {
            "topic": "Government",
            "val": 0.04883153121730088
          },
          {
            "topic": "Life",
            "val": 0.04281991834054879
          },
          {
            "topic": "Food",
            "val": 0.041650423685344475
          },
          {
            "topic": "Finance",
            "val": 0.03356654834937081
          },
          {
            "topic": "Scenicspot",
            "val": 0.03317671679763606
          },
          {
            "topic": "Traffic",
            "val": 0.0328074026959926
          },
          {
            "topic": "Shop",
            "val": 0.0327868852459013
          }
        ]
      },
      {
        "site": "10878",
        "startTime": "2014-01-14 05:58:02.1",
        "endTime": "2014-01-14 05:59:48.7",
        "stopTime": 106,
        "isStop": false,
        "latitude": 28.0003,
        "longitude": 120.6472,
        "topics": [
          {
            "topic": "Food",
            "val": 0.11189389963260434
          },
          {
            "topic": "Education",
            "val": 0.09796519843352477
          },
          {
            "topic": "Uptown",
            "val": 0.08924462029149229
          },
          {
            "topic": "Life",
            "val": 0.06669627356776565
          },
          {
            "topic": "Traffic",
            "val": 0.06257822277847265
          },
          {
            "topic": "Hospital",
            "val": 0.05553312608502523
          },
          {
            "topic": "Shop",
            "val": 0.0515967540070246
          },
          {
            "topic": "Enterprise",
            "val": 0.047963179781177805
          },
          {
            "topic": "Government",
            "val": 0.04776131454640816
          },
          {
            "topic": "Beauty",
            "val": 0.04640881747345444
          },
          {
            "topic": "Hotel",
            "val": 0.04344139852234627
          },
          {
            "topic": "Scenicspot",
            "val": 0.039747264726068626
          },
          {
            "topic": "Finance",
            "val": 0.03873793855222234
          }
        ]
      },
      {
        "site": "20480",
        "startTime": "2014-01-14 05:59:48.7",
        "endTime": "2014-01-14 06:00:15.06",
        "stopTime": 26,
        "isStop": false,
        "latitude": 27.9961,
        "longitude": 120.6477,
        "topics": [
          {
            "topic": "Hospital",
            "val": 0.14548923859742754
          },
          {
            "topic": "Uptown",
            "val": 0.13246065778944938
          },
          {
            "topic": "Beauty",
            "val": 0.07866390365005371
          },
          {
            "topic": "Education",
            "val": 0.07191366257001564
          },
          {
            "topic": "Enterprise",
            "val": 0.060136646217608204
          },
          {
            "topic": "Hotel",
            "val": 0.05989043681651244
          },
          {
            "topic": "Government",
            "val": 0.04883153121730088
          },
          {
            "topic": "Life",
            "val": 0.04281991834054879
          },
          {
            "topic": "Food",
            "val": 0.041650423685344475
          },
          {
            "topic": "Finance",
            "val": 0.03356654834937081
          },
          {
            "topic": "Scenicspot",
            "val": 0.03317671679763606
          },
          {
            "topic": "Traffic",
            "val": 0.0328074026959926
          },
          {
            "topic": "Shop",
            "val": 0.0327868852459013
          }
        ]
      },
      {
        "site": "25845",
        "startTime": "2014-01-14 06:00:15.06",
        "endTime": "2014-01-14 06:02:18.79",
        "stopTime": 123,
        "isStop": false,
        "latitude": 27.9986,
        "longitude": 120.6404,
        "topics": [
          {
            "topic": "Shop",
            "val": 0.13934648039779468
          },
          {
            "topic": "Beauty",
            "val": 0.08742346852484538
          },
          {
            "topic": "Enterprise",
            "val": 0.0585529208808306
          },
          {
            "topic": "Uptown",
            "val": 0.04236714812434442
          },
          {
            "topic": "Finance",
            "val": 0.04114940973514191
          },
          {
            "topic": "Life",
            "val": 0.03790210736393458
          },
          {
            "topic": "Hotel",
            "val": 0.03057876399553506
          },
          {
            "topic": "Education",
            "val": 0.029344112573148937
          },
          {
            "topic": "Hospital",
            "val": 0.028413895748063522
          },
          {
            "topic": "Food",
            "val": 0.027111592192943932
          },
          {
            "topic": "Scenicspot",
            "val": 0.027077766126577193
          },
          {
            "topic": "Traffic",
            "val": 0.027043940060210447
          },
          {
            "topic": "Government",
            "val": 0.027027027027027074
          }
        ]
      },
      {
        "site": "20480",
        "startTime": "2014-01-14 06:02:18.79",
        "endTime": "2014-01-14 06:06:11.13",
        "stopTime": 232,
        "isStop": false,
        "latitude": 27.9961,
        "longitude": 120.6477,
        "topics": [
          {
            "topic": "Hospital",
            "val": 0.14548923859742754
          },
          {
            "topic": "Uptown",
            "val": 0.13246065778944938
          },
          {
            "topic": "Beauty",
            "val": 0.07866390365005371
          },
          {
            "topic": "Education",
            "val": 0.07191366257001564
          },
          {
            "topic": "Enterprise",
            "val": 0.060136646217608204
          },
          {
            "topic": "Hotel",
            "val": 0.05989043681651244
          },
          {
            "topic": "Government",
            "val": 0.04883153121730088
          },
          {
            "topic": "Life",
            "val": 0.04281991834054879
          },
          {
            "topic": "Food",
            "val": 0.041650423685344475
          },
          {
            "topic": "Finance",
            "val": 0.03356654834937081
          },
          {
            "topic": "Scenicspot",
            "val": 0.03317671679763606
          },
          {
            "topic": "Traffic",
            "val": 0.0328074026959926
          },
          {
            "topic": "Shop",
            "val": 0.0327868852459013
          }
        ]
      },
      {
        "site": "10878",
        "startTime": "2014-01-14 06:06:11.13",
        "endTime": "2014-01-14 06:07:45.18",
        "stopTime": 94,
        "isStop": false,
        "latitude": 28.0003,
        "longitude": 120.6472,
        "topics": [
          {
            "topic": "Food",
            "val": 0.11189389963260434
          },
          {
            "topic": "Education",
            "val": 0.09796519843352477
          },
          {
            "topic": "Uptown",
            "val": 0.08924462029149229
          },
          {
            "topic": "Life",
            "val": 0.06669627356776565
          },
          {
            "topic": "Traffic",
            "val": 0.06257822277847265
          },
          {
            "topic": "Hospital",
            "val": 0.05553312608502523
          },
          {
            "topic": "Shop",
            "val": 0.0515967540070246
          },
          {
            "topic": "Enterprise",
            "val": 0.047963179781177805
          },
          {
            "topic": "Government",
            "val": 0.04776131454640816
          },
          {
            "topic": "Beauty",
            "val": 0.04640881747345444
          },
          {
            "topic": "Hotel",
            "val": 0.04344139852234627
          },
          {
            "topic": "Scenicspot",
            "val": 0.039747264726068626
          },
          {
            "topic": "Finance",
            "val": 0.03873793855222234
          }
        ]
      },
      {
        "site": "20480",
        "startTime": "2014-01-14 06:07:45.18",
        "endTime": "2014-01-14 06:07:54.73",
        "stopTime": 9,
        "isStop": false,
        "latitude": 27.9961,
        "longitude": 120.6477,
        "topics": [
          {
            "topic": "Hospital",
            "val": 0.14548923859742754
          },
          {
            "topic": "Uptown",
            "val": 0.13246065778944938
          },
          {
            "topic": "Beauty",
            "val": 0.07866390365005371
          },
          {
            "topic": "Education",
            "val": 0.07191366257001564
          },
          {
            "topic": "Enterprise",
            "val": 0.060136646217608204
          },
          {
            "topic": "Hotel",
            "val": 0.05989043681651244
          },
          {
            "topic": "Government",
            "val": 0.04883153121730088
          },
          {
            "topic": "Life",
            "val": 0.04281991834054879
          },
          {
            "topic": "Food",
            "val": 0.041650423685344475
          },
          {
            "topic": "Finance",
            "val": 0.03356654834937081
          },
          {
            "topic": "Scenicspot",
            "val": 0.03317671679763606
          },
          {
            "topic": "Traffic",
            "val": 0.0328074026959926
          },
          {
            "topic": "Shop",
            "val": 0.0327868852459013
          }
        ]
      },
      {
        "site": "25845",
        "startTime": "2014-01-14 06:07:54.73",
        "endTime": "2014-01-14 06:08:40.46",
        "stopTime": 45,
        "isStop": false,
        "latitude": 27.9986,
        "longitude": 120.6404,
        "topics": [
          {
            "topic": "Shop",
            "val": 0.13934648039779468
          },
          {
            "topic": "Beauty",
            "val": 0.08742346852484538
          },
          {
            "topic": "Enterprise",
            "val": 0.0585529208808306
          },
          {
            "topic": "Uptown",
            "val": 0.04236714812434442
          },
          {
            "topic": "Finance",
            "val": 0.04114940973514191
          },
          {
            "topic": "Life",
            "val": 0.03790210736393458
          },
          {
            "topic": "Hotel",
            "val": 0.03057876399553506
          },
          {
            "topic": "Education",
            "val": 0.029344112573148937
          },
          {
            "topic": "Hospital",
            "val": 0.028413895748063522
          },
          {
            "topic": "Food",
            "val": 0.027111592192943932
          },
          {
            "topic": "Scenicspot",
            "val": 0.027077766126577193
          },
          {
            "topic": "Traffic",
            "val": 0.027043940060210447
          },
          {
            "topic": "Government",
            "val": 0.027027027027027074
          }
        ]
      },
      {
        "site": "20480",
        "startTime": "2014-01-14 06:08:40.46",
        "endTime": "2014-01-14 06:08:51.77",
        "stopTime": 11,
        "isStop": false,
        "latitude": 27.9961,
        "longitude": 120.6477,
        "topics": [
          {
            "topic": "Hospital",
            "val": 0.14548923859742754
          },
          {
            "topic": "Uptown",
            "val": 0.13246065778944938
          },
          {
            "topic": "Beauty",
            "val": 0.07866390365005371
          },
          {
            "topic": "Education",
            "val": 0.07191366257001564
          },
          {
            "topic": "Enterprise",
            "val": 0.060136646217608204
          },
          {
            "topic": "Hotel",
            "val": 0.05989043681651244
          },
          {
            "topic": "Government",
            "val": 0.04883153121730088
          },
          {
            "topic": "Life",
            "val": 0.04281991834054879
          },
          {
            "topic": "Food",
            "val": 0.041650423685344475
          },
          {
            "topic": "Finance",
            "val": 0.03356654834937081
          },
          {
            "topic": "Scenicspot",
            "val": 0.03317671679763606
          },
          {
            "topic": "Traffic",
            "val": 0.0328074026959926
          },
          {
            "topic": "Shop",
            "val": 0.0327868852459013
          }
        ]
      },
      {
        "site": "10878",
        "startTime": "2014-01-14 06:08:51.77",
        "endTime": "2014-01-14 06:09:07.53",
        "stopTime": 15,
        "isStop": false,
        "latitude": 28.0003,
        "longitude": 120.6472,
        "topics": [
          {
            "topic": "Food",
            "val": 0.11189389963260434
          },
          {
            "topic": "Education",
            "val": 0.09796519843352477
          },
          {
            "topic": "Uptown",
            "val": 0.08924462029149229
          },
          {
            "topic": "Life",
            "val": 0.06669627356776565
          },
          {
            "topic": "Traffic",
            "val": 0.06257822277847265
          },
          {
            "topic": "Hospital",
            "val": 0.05553312608502523
          },
          {
            "topic": "Shop",
            "val": 0.0515967540070246
          },
          {
            "topic": "Enterprise",
            "val": 0.047963179781177805
          },
          {
            "topic": "Government",
            "val": 0.04776131454640816
          },
          {
            "topic": "Beauty",
            "val": 0.04640881747345444
          },
          {
            "topic": "Hotel",
            "val": 0.04344139852234627
          },
          {
            "topic": "Scenicspot",
            "val": 0.039747264726068626
          },
          {
            "topic": "Finance",
            "val": 0.03873793855222234
          }
        ]
      },
      {
        "site": "28699",
        "startTime": "2014-01-14 06:09:07.53",
        "endTime": "2014-01-14 06:10:15.04",
        "stopTime": 67,
        "isStop": false,
        "latitude": 27.9959,
        "longitude": 120.6442,
        "topics": [
          {
            "topic": "Finance",
            "val": 0.05882352941176564
          },
          {
            "topic": "Enterprise",
            "val": 0.05882352941176564
          },
          {
            "topic": "Traffic",
            "val": 0.05882352941176564
          },
          {
            "topic": "Scenicspot",
            "val": 0.05882352941176564
          },
          {
            "topic": "Uptown",
            "val": 0.05882352941176564
          },
          {
            "topic": "Food",
            "val": 0.05882352941176564
          },
          {
            "topic": "Hospital",
            "val": 0.05882352941176564
          },
          {
            "topic": "Life",
            "val": 0.05882352941176564
          },
          {
            "topic": "Hotel",
            "val": 0.05882352941176564
          },
          {
            "topic": "Shop",
            "val": 0.05882352941176564
          },
          {
            "topic": "Government",
            "val": 0.05882352941176564
          },
          {
            "topic": "Beauty",
            "val": 0.05882352941176564
          },
          {
            "topic": "Education",
            "val": 0.05882352941176564
          }
        ]
      },
      {
        "site": "25845",
        "startTime": "2014-01-14 06:10:15.04",
        "endTime": "2014-01-14 06:14:39.6",
        "stopTime": 264,
        "isStop": false,
        "latitude": 27.9986,
        "longitude": 120.6404,
        "topics": [
          {
            "topic": "Shop",
            "val": 0.13934648039779468
          },
          {
            "topic": "Beauty",
            "val": 0.08742346852484538
          },
          {
            "topic": "Enterprise",
            "val": 0.0585529208808306
          },
          {
            "topic": "Uptown",
            "val": 0.04236714812434442
          },
          {
            "topic": "Finance",
            "val": 0.04114940973514191
          },
          {
            "topic": "Life",
            "val": 0.03790210736393458
          },
          {
            "topic": "Hotel",
            "val": 0.03057876399553506
          },
          {
            "topic": "Education",
            "val": 0.029344112573148937
          },
          {
            "topic": "Hospital",
            "val": 0.028413895748063522
          },
          {
            "topic": "Food",
            "val": 0.027111592192943932
          },
          {
            "topic": "Scenicspot",
            "val": 0.027077766126577193
          },
          {
            "topic": "Traffic",
            "val": 0.027043940060210447
          },
          {
            "topic": "Government",
            "val": 0.027027027027027074
          }
        ]
      },
      {
        "site": "20480",
        "startTime": "2014-01-14 06:14:39.6",
        "endTime": "2014-01-14 06:17:01.31",
        "stopTime": 141,
        "isStop": false,
        "latitude": 27.9961,
        "longitude": 120.6477,
        "topics": [
          {
            "topic": "Hospital",
            "val": 0.14548923859742754
          },
          {
            "topic": "Uptown",
            "val": 0.13246065778944938
          },
          {
            "topic": "Beauty",
            "val": 0.07866390365005371
          },
          {
            "topic": "Education",
            "val": 0.07191366257001564
          },
          {
            "topic": "Enterprise",
            "val": 0.060136646217608204
          },
          {
            "topic": "Hotel",
            "val": 0.05989043681651244
          },
          {
            "topic": "Government",
            "val": 0.04883153121730088
          },
          {
            "topic": "Life",
            "val": 0.04281991834054879
          },
          {
            "topic": "Food",
            "val": 0.041650423685344475
          },
          {
            "topic": "Finance",
            "val": 0.03356654834937081
          },
          {
            "topic": "Scenicspot",
            "val": 0.03317671679763606
          },
          {
            "topic": "Traffic",
            "val": 0.0328074026959926
          },
          {
            "topic": "Shop",
            "val": 0.0327868852459013
          }
        ]
      },
      {
        "site": "25845",
        "startTime": "2014-01-14 06:17:01.31",
        "endTime": "2014-01-14 06:19:49.63",
        "stopTime": 168,
        "isStop": false,
        "latitude": 27.9986,
        "longitude": 120.6404,
        "topics": [
          {
            "topic": "Shop",
            "val": 0.13934648039779468
          },
          {
            "topic": "Beauty",
            "val": 0.08742346852484538
          },
          {
            "topic": "Enterprise",
            "val": 0.0585529208808306
          },
          {
            "topic": "Uptown",
            "val": 0.04236714812434442
          },
          {
            "topic": "Finance",
            "val": 0.04114940973514191
          },
          {
            "topic": "Life",
            "val": 0.03790210736393458
          },
          {
            "topic": "Hotel",
            "val": 0.03057876399553506
          },
          {
            "topic": "Education",
            "val": 0.029344112573148937
          },
          {
            "topic": "Hospital",
            "val": 0.028413895748063522
          },
          {
            "topic": "Food",
            "val": 0.027111592192943932
          },
          {
            "topic": "Scenicspot",
            "val": 0.027077766126577193
          },
          {
            "topic": "Traffic",
            "val": 0.027043940060210447
          },
          {
            "topic": "Government",
            "val": 0.027027027027027074
          }
        ]
      },
      {
        "site": "20480",
        "startTime": "2014-01-14 06:19:49.63",
        "endTime": "2014-01-14 06:20:28.96",
        "stopTime": 39,
        "isStop": false,
        "latitude": 27.9961,
        "longitude": 120.6477,
        "topics": [
          {
            "topic": "Hospital",
            "val": 0.14548923859742754
          },
          {
            "topic": "Uptown",
            "val": 0.13246065778944938
          },
          {
            "topic": "Beauty",
            "val": 0.07866390365005371
          },
          {
            "topic": "Education",
            "val": 0.07191366257001564
          },
          {
            "topic": "Enterprise",
            "val": 0.060136646217608204
          },
          {
            "topic": "Hotel",
            "val": 0.05989043681651244
          },
          {
            "topic": "Government",
            "val": 0.04883153121730088
          },
          {
            "topic": "Life",
            "val": 0.04281991834054879
          },
          {
            "topic": "Food",
            "val": 0.041650423685344475
          },
          {
            "topic": "Finance",
            "val": 0.03356654834937081
          },
          {
            "topic": "Scenicspot",
            "val": 0.03317671679763606
          },
          {
            "topic": "Traffic",
            "val": 0.0328074026959926
          },
          {
            "topic": "Shop",
            "val": 0.0327868852459013
          }
        ]
      },
      {
        "site": "25845",
        "startTime": "2014-01-14 06:20:28.96",
        "endTime": "2014-01-14 06:20:52.39",
        "stopTime": 23,
        "isStop": false,
        "latitude": 27.9986,
        "longitude": 120.6404,
        "topics": [
          {
            "topic": "Shop",
            "val": 0.13934648039779468
          },
          {
            "topic": "Beauty",
            "val": 0.08742346852484538
          },
          {
            "topic": "Enterprise",
            "val": 0.0585529208808306
          },
          {
            "topic": "Uptown",
            "val": 0.04236714812434442
          },
          {
            "topic": "Finance",
            "val": 0.04114940973514191
          },
          {
            "topic": "Life",
            "val": 0.03790210736393458
          },
          {
            "topic": "Hotel",
            "val": 0.03057876399553506
          },
          {
            "topic": "Education",
            "val": 0.029344112573148937
          },
          {
            "topic": "Hospital",
            "val": 0.028413895748063522
          },
          {
            "topic": "Food",
            "val": 0.027111592192943932
          },
          {
            "topic": "Scenicspot",
            "val": 0.027077766126577193
          },
          {
            "topic": "Traffic",
            "val": 0.027043940060210447
          },
          {
            "topic": "Government",
            "val": 0.027027027027027074
          }
        ]
      },
      {
        "site": "20480",
        "startTime": "2014-01-14 06:20:52.39",
        "endTime": "2014-01-14 06:24:43.86",
        "stopTime": 231,
        "isStop": false,
        "latitude": 27.9961,
        "longitude": 120.6477,
        "topics": [
          {
            "topic": "Hospital",
            "val": 0.14548923859742754
          },
          {
            "topic": "Uptown",
            "val": 0.13246065778944938
          },
          {
            "topic": "Beauty",
            "val": 0.07866390365005371
          },
          {
            "topic": "Education",
            "val": 0.07191366257001564
          },
          {
            "topic": "Enterprise",
            "val": 0.060136646217608204
          },
          {
            "topic": "Hotel",
            "val": 0.05989043681651244
          },
          {
            "topic": "Government",
            "val": 0.04883153121730088
          },
          {
            "topic": "Life",
            "val": 0.04281991834054879
          },
          {
            "topic": "Food",
            "val": 0.041650423685344475
          },
          {
            "topic": "Finance",
            "val": 0.03356654834937081
          },
          {
            "topic": "Scenicspot",
            "val": 0.03317671679763606
          },
          {
            "topic": "Traffic",
            "val": 0.0328074026959926
          },
          {
            "topic": "Shop",
            "val": 0.0327868852459013
          }
        ]
      },
      {
        "site": "25845",
        "startTime": "2014-01-14 06:24:43.86",
        "endTime": "2014-01-14 06:29:17.07",
        "stopTime": 273,
        "isStop": false,
        "latitude": 27.9986,
        "longitude": 120.6404,
        "topics": [
          {
            "topic": "Shop",
            "val": 0.13934648039779468
          },
          {
            "topic": "Beauty",
            "val": 0.08742346852484538
          },
          {
            "topic": "Enterprise",
            "val": 0.0585529208808306
          },
          {
            "topic": "Uptown",
            "val": 0.04236714812434442
          },
          {
            "topic": "Finance",
            "val": 0.04114940973514191
          },
          {
            "topic": "Life",
            "val": 0.03790210736393458
          },
          {
            "topic": "Hotel",
            "val": 0.03057876399553506
          },
          {
            "topic": "Education",
            "val": 0.029344112573148937
          },
          {
            "topic": "Hospital",
            "val": 0.028413895748063522
          },
          {
            "topic": "Food",
            "val": 0.027111592192943932
          },
          {
            "topic": "Scenicspot",
            "val": 0.027077766126577193
          },
          {
            "topic": "Traffic",
            "val": 0.027043940060210447
          },
          {
            "topic": "Government",
            "val": 0.027027027027027074
          }
        ]
      },
      {
        "site": "20480",
        "startTime": "2014-01-14 06:29:17.07",
        "endTime": "2014-01-14 06:36:41.6",
        "stopTime": 444,
        "isStop": false,
        "latitude": 27.9961,
        "longitude": 120.6477,
        "topics": [
          {
            "topic": "Hospital",
            "val": 0.14548923859742754
          },
          {
            "topic": "Uptown",
            "val": 0.13246065778944938
          },
          {
            "topic": "Beauty",
            "val": 0.07866390365005371
          },
          {
            "topic": "Education",
            "val": 0.07191366257001564
          },
          {
            "topic": "Enterprise",
            "val": 0.060136646217608204
          },
          {
            "topic": "Hotel",
            "val": 0.05989043681651244
          },
          {
            "topic": "Government",
            "val": 0.04883153121730088
          },
          {
            "topic": "Life",
            "val": 0.04281991834054879
          },
          {
            "topic": "Food",
            "val": 0.041650423685344475
          },
          {
            "topic": "Finance",
            "val": 0.03356654834937081
          },
          {
            "topic": "Scenicspot",
            "val": 0.03317671679763606
          },
          {
            "topic": "Traffic",
            "val": 0.0328074026959926
          },
          {
            "topic": "Shop",
            "val": 0.0327868852459013
          }
        ]
      },
      {
        "site": "25845",
        "startTime": "2014-01-14 06:36:41.6",
        "endTime": "2014-01-14 06:39:34.74",
        "stopTime": 173,
        "isStop": false,
        "latitude": 27.9986,
        "longitude": 120.6404,
        "topics": [
          {
            "topic": "Shop",
            "val": 0.13934648039779468
          },
          {
            "topic": "Beauty",
            "val": 0.08742346852484538
          },
          {
            "topic": "Enterprise",
            "val": 0.0585529208808306
          },
          {
            "topic": "Uptown",
            "val": 0.04236714812434442
          },
          {
            "topic": "Finance",
            "val": 0.04114940973514191
          },
          {
            "topic": "Life",
            "val": 0.03790210736393458
          },
          {
            "topic": "Hotel",
            "val": 0.03057876399553506
          },
          {
            "topic": "Education",
            "val": 0.029344112573148937
          },
          {
            "topic": "Hospital",
            "val": 0.028413895748063522
          },
          {
            "topic": "Food",
            "val": 0.027111592192943932
          },
          {
            "topic": "Scenicspot",
            "val": 0.027077766126577193
          },
          {
            "topic": "Traffic",
            "val": 0.027043940060210447
          },
          {
            "topic": "Government",
            "val": 0.027027027027027074
          }
        ]
      },
      {
        "site": "20480",
        "startTime": "2014-01-14 06:39:34.74",
        "endTime": "2014-01-14 06:40:53.87",
        "stopTime": 79,
        "isStop": false,
        "latitude": 27.9961,
        "longitude": 120.6477,
        "topics": [
          {
            "topic": "Hospital",
            "val": 0.14548923859742754
          },
          {
            "topic": "Uptown",
            "val": 0.13246065778944938
          },
          {
            "topic": "Beauty",
            "val": 0.07866390365005371
          },
          {
            "topic": "Education",
            "val": 0.07191366257001564
          },
          {
            "topic": "Enterprise",
            "val": 0.060136646217608204
          },
          {
            "topic": "Hotel",
            "val": 0.05989043681651244
          },
          {
            "topic": "Government",
            "val": 0.04883153121730088
          },
          {
            "topic": "Life",
            "val": 0.04281991834054879
          },
          {
            "topic": "Food",
            "val": 0.041650423685344475
          },
          {
            "topic": "Finance",
            "val": 0.03356654834937081
          },
          {
            "topic": "Scenicspot",
            "val": 0.03317671679763606
          },
          {
            "topic": "Traffic",
            "val": 0.0328074026959926
          },
          {
            "topic": "Shop",
            "val": 0.0327868852459013
          }
        ]
      },
      {
        "site": "10878",
        "startTime": "2014-01-14 06:40:53.87",
        "endTime": "2014-01-14 06:41:33.9",
        "stopTime": 40,
        "isStop": false,
        "latitude": 28.0003,
        "longitude": 120.6472,
        "topics": [
          {
            "topic": "Food",
            "val": 0.11189389963260434
          },
          {
            "topic": "Education",
            "val": 0.09796519843352477
          },
          {
            "topic": "Uptown",
            "val": 0.08924462029149229
          },
          {
            "topic": "Life",
            "val": 0.06669627356776565
          },
          {
            "topic": "Traffic",
            "val": 0.06257822277847265
          },
          {
            "topic": "Hospital",
            "val": 0.05553312608502523
          },
          {
            "topic": "Shop",
            "val": 0.0515967540070246
          },
          {
            "topic": "Enterprise",
            "val": 0.047963179781177805
          },
          {
            "topic": "Government",
            "val": 0.04776131454640816
          },
          {
            "topic": "Beauty",
            "val": 0.04640881747345444
          },
          {
            "topic": "Hotel",
            "val": 0.04344139852234627
          },
          {
            "topic": "Scenicspot",
            "val": 0.039747264726068626
          },
          {
            "topic": "Finance",
            "val": 0.03873793855222234
          }
        ]
      },
      {
        "site": "20480",
        "startTime": "2014-01-14 06:41:33.9",
        "endTime": "2014-01-14 06:41:39.96",
        "stopTime": 6,
        "isStop": false,
        "latitude": 27.9961,
        "longitude": 120.6477,
        "topics": [
          {
            "topic": "Hospital",
            "val": 0.14548923859742754
          },
          {
            "topic": "Uptown",
            "val": 0.13246065778944938
          },
          {
            "topic": "Beauty",
            "val": 0.07866390365005371
          },
          {
            "topic": "Education",
            "val": 0.07191366257001564
          },
          {
            "topic": "Enterprise",
            "val": 0.060136646217608204
          },
          {
            "topic": "Hotel",
            "val": 0.05989043681651244
          },
          {
            "topic": "Government",
            "val": 0.04883153121730088
          },
          {
            "topic": "Life",
            "val": 0.04281991834054879
          },
          {
            "topic": "Food",
            "val": 0.041650423685344475
          },
          {
            "topic": "Finance",
            "val": 0.03356654834937081
          },
          {
            "topic": "Scenicspot",
            "val": 0.03317671679763606
          },
          {
            "topic": "Traffic",
            "val": 0.0328074026959926
          },
          {
            "topic": "Shop",
            "val": 0.0327868852459013
          }
        ]
      },
      {
        "site": "25845",
        "startTime": "2014-01-14 06:41:39.96",
        "endTime": "2014-01-14 06:43:15.68",
        "stopTime": 95,
        "isStop": false,
        "latitude": 27.9986,
        "longitude": 120.6404,
        "topics": [
          {
            "topic": "Shop",
            "val": 0.13934648039779468
          },
          {
            "topic": "Beauty",
            "val": 0.08742346852484538
          },
          {
            "topic": "Enterprise",
            "val": 0.0585529208808306
          },
          {
            "topic": "Uptown",
            "val": 0.04236714812434442
          },
          {
            "topic": "Finance",
            "val": 0.04114940973514191
          },
          {
            "topic": "Life",
            "val": 0.03790210736393458
          },
          {
            "topic": "Hotel",
            "val": 0.03057876399553506
          },
          {
            "topic": "Education",
            "val": 0.029344112573148937
          },
          {
            "topic": "Hospital",
            "val": 0.028413895748063522
          },
          {
            "topic": "Food",
            "val": 0.027111592192943932
          },
          {
            "topic": "Scenicspot",
            "val": 0.027077766126577193
          },
          {
            "topic": "Traffic",
            "val": 0.027043940060210447
          },
          {
            "topic": "Government",
            "val": 0.027027027027027074
          }
        ]
      },
      {
        "site": "10878",
        "startTime": "2014-01-14 06:43:15.68",
        "endTime": "2014-01-14 06:46:52.16",
        "stopTime": 216,
        "isStop": false,
        "latitude": 28.0003,
        "longitude": 120.6472,
        "topics": [
          {
            "topic": "Food",
            "val": 0.11189389963260434
          },
          {
            "topic": "Education",
            "val": 0.09796519843352477
          },
          {
            "topic": "Uptown",
            "val": 0.08924462029149229
          },
          {
            "topic": "Life",
            "val": 0.06669627356776565
          },
          {
            "topic": "Traffic",
            "val": 0.06257822277847265
          },
          {
            "topic": "Hospital",
            "val": 0.05553312608502523
          },
          {
            "topic": "Shop",
            "val": 0.0515967540070246
          },
          {
            "topic": "Enterprise",
            "val": 0.047963179781177805
          },
          {
            "topic": "Government",
            "val": 0.04776131454640816
          },
          {
            "topic": "Beauty",
            "val": 0.04640881747345444
          },
          {
            "topic": "Hotel",
            "val": 0.04344139852234627
          },
          {
            "topic": "Scenicspot",
            "val": 0.039747264726068626
          },
          {
            "topic": "Finance",
            "val": 0.03873793855222234
          }
        ]
      },
      {
        "site": "20480",
        "startTime": "2014-01-14 06:46:52.16",
        "endTime": "2014-01-14 06:47:11.0",
        "stopTime": 18,
        "isStop": false,
        "latitude": 27.9961,
        "longitude": 120.6477,
        "topics": [
          {
            "topic": "Hospital",
            "val": 0.14548923859742754
          },
          {
            "topic": "Uptown",
            "val": 0.13246065778944938
          },
          {
            "topic": "Beauty",
            "val": 0.07866390365005371
          },
          {
            "topic": "Education",
            "val": 0.07191366257001564
          },
          {
            "topic": "Enterprise",
            "val": 0.060136646217608204
          },
          {
            "topic": "Hotel",
            "val": 0.05989043681651244
          },
          {
            "topic": "Government",
            "val": 0.04883153121730088
          },
          {
            "topic": "Life",
            "val": 0.04281991834054879
          },
          {
            "topic": "Food",
            "val": 0.041650423685344475
          },
          {
            "topic": "Finance",
            "val": 0.03356654834937081
          },
          {
            "topic": "Scenicspot",
            "val": 0.03317671679763606
          },
          {
            "topic": "Traffic",
            "val": 0.0328074026959926
          },
          {
            "topic": "Shop",
            "val": 0.0327868852459013
          }
        ]
      },
      {
        "site": "25845",
        "startTime": "2014-01-14 06:47:11.0",
        "endTime": "2014-01-14 06:48:08.24",
        "stopTime": 57,
        "isStop": false,
        "latitude": 27.9986,
        "longitude": 120.6404,
        "topics": [
          {
            "topic": "Shop",
            "val": 0.13934648039779468
          },
          {
            "topic": "Beauty",
            "val": 0.08742346852484538
          },
          {
            "topic": "Enterprise",
            "val": 0.0585529208808306
          },
          {
            "topic": "Uptown",
            "val": 0.04236714812434442
          },
          {
            "topic": "Finance",
            "val": 0.04114940973514191
          },
          {
            "topic": "Life",
            "val": 0.03790210736393458
          },
          {
            "topic": "Hotel",
            "val": 0.03057876399553506
          },
          {
            "topic": "Education",
            "val": 0.029344112573148937
          },
          {
            "topic": "Hospital",
            "val": 0.028413895748063522
          },
          {
            "topic": "Food",
            "val": 0.027111592192943932
          },
          {
            "topic": "Scenicspot",
            "val": 0.027077766126577193
          },
          {
            "topic": "Traffic",
            "val": 0.027043940060210447
          },
          {
            "topic": "Government",
            "val": 0.027027027027027074
          }
        ]
      },
      {
        "site": "20480",
        "startTime": "2014-01-14 06:48:08.24",
        "endTime": "2014-01-14 06:48:29.28",
        "stopTime": 21,
        "isStop": false,
        "latitude": 27.9961,
        "longitude": 120.6477,
        "topics": [
          {
            "topic": "Hospital",
            "val": 0.14548923859742754
          },
          {
            "topic": "Uptown",
            "val": 0.13246065778944938
          },
          {
            "topic": "Beauty",
            "val": 0.07866390365005371
          },
          {
            "topic": "Education",
            "val": 0.07191366257001564
          },
          {
            "topic": "Enterprise",
            "val": 0.060136646217608204
          },
          {
            "topic": "Hotel",
            "val": 0.05989043681651244
          },
          {
            "topic": "Government",
            "val": 0.04883153121730088
          },
          {
            "topic": "Life",
            "val": 0.04281991834054879
          },
          {
            "topic": "Food",
            "val": 0.041650423685344475
          },
          {
            "topic": "Finance",
            "val": 0.03356654834937081
          },
          {
            "topic": "Scenicspot",
            "val": 0.03317671679763606
          },
          {
            "topic": "Traffic",
            "val": 0.0328074026959926
          },
          {
            "topic": "Shop",
            "val": 0.0327868852459013
          }
        ]
      },
      {
        "site": "25845",
        "startTime": "2014-01-14 06:48:29.28",
        "endTime": "2014-01-14 06:49:20.89",
        "stopTime": 51,
        "isStop": false,
        "latitude": 27.9986,
        "longitude": 120.6404,
        "topics": [
          {
            "topic": "Shop",
            "val": 0.13934648039779468
          },
          {
            "topic": "Beauty",
            "val": 0.08742346852484538
          },
          {
            "topic": "Enterprise",
            "val": 0.0585529208808306
          },
          {
            "topic": "Uptown",
            "val": 0.04236714812434442
          },
          {
            "topic": "Finance",
            "val": 0.04114940973514191
          },
          {
            "topic": "Life",
            "val": 0.03790210736393458
          },
          {
            "topic": "Hotel",
            "val": 0.03057876399553506
          },
          {
            "topic": "Education",
            "val": 0.029344112573148937
          },
          {
            "topic": "Hospital",
            "val": 0.028413895748063522
          },
          {
            "topic": "Food",
            "val": 0.027111592192943932
          },
          {
            "topic": "Scenicspot",
            "val": 0.027077766126577193
          },
          {
            "topic": "Traffic",
            "val": 0.027043940060210447
          },
          {
            "topic": "Government",
            "val": 0.027027027027027074
          }
        ]
      },
      {
        "site": "8247",
        "startTime": "2014-01-14 06:49:20.89",
        "endTime": "2014-01-14 06:59:32.08",
        "stopTime": 611,
        "isStop": false,
        "latitude": 27.9963,
        "longitude": 120.6444,
        "topics": [
          {
            "topic": "Scenicspot",
            "val": 0.11418878861735185
          },
          {
            "topic": "Education",
            "val": 0.0798037019959168
          },
          {
            "topic": "Traffic",
            "val": 0.06541071075686784
          },
          {
            "topic": "Hospital",
            "val": 0.055332323298861244
          },
          {
            "topic": "Uptown",
            "val": 0.053652592055860135
          },
          {
            "topic": "Hotel",
            "val": 0.052664514854094784
          },
          {
            "topic": "Finance",
            "val": 0.052631578947369265
          },
          {
            "topic": "Enterprise",
            "val": 0.052631578947369265
          },
          {
            "topic": "Food",
            "val": 0.052631578947369265
          },
          {
            "topic": "Life",
            "val": 0.052631578947369265
          },
          {
            "topic": "Shop",
            "val": 0.052631578947369265
          },
          {
            "topic": "Government",
            "val": 0.052631578947369265
          },
          {
            "topic": "Beauty",
            "val": 0.052631578947369265
          }
        ]
      },
      {
        "site": "25845",
        "startTime": "2014-01-14 06:59:32.08",
        "endTime": "2014-01-14 07:00:52.55",
        "stopTime": 80,
        "isStop": false,
        "latitude": 27.9986,
        "longitude": 120.6404,
        "topics": [
          {
            "topic": "Shop",
            "val": 0.13934648039779468
          },
          {
            "topic": "Beauty",
            "val": 0.08742346852484538
          },
          {
            "topic": "Enterprise",
            "val": 0.0585529208808306
          },
          {
            "topic": "Uptown",
            "val": 0.04236714812434442
          },
          {
            "topic": "Finance",
            "val": 0.04114940973514191
          },
          {
            "topic": "Life",
            "val": 0.03790210736393458
          },
          {
            "topic": "Hotel",
            "val": 0.03057876399553506
          },
          {
            "topic": "Education",
            "val": 0.029344112573148937
          },
          {
            "topic": "Hospital",
            "val": 0.028413895748063522
          },
          {
            "topic": "Food",
            "val": 0.027111592192943932
          },
          {
            "topic": "Scenicspot",
            "val": 0.027077766126577193
          },
          {
            "topic": "Traffic",
            "val": 0.027043940060210447
          },
          {
            "topic": "Government",
            "val": 0.027027027027027074
          }
        ]
      },
      {
        "site": "20480",
        "startTime": "2014-01-14 07:00:52.55",
        "endTime": "2014-01-14 07:01:06.27",
        "stopTime": 13,
        "isStop": false,
        "latitude": 27.9961,
        "longitude": 120.6477,
        "topics": [
          {
            "topic": "Hospital",
            "val": 0.14548923859742754
          },
          {
            "topic": "Uptown",
            "val": 0.13246065778944938
          },
          {
            "topic": "Beauty",
            "val": 0.07866390365005371
          },
          {
            "topic": "Education",
            "val": 0.07191366257001564
          },
          {
            "topic": "Enterprise",
            "val": 0.060136646217608204
          },
          {
            "topic": "Hotel",
            "val": 0.05989043681651244
          },
          {
            "topic": "Government",
            "val": 0.04883153121730088
          },
          {
            "topic": "Life",
            "val": 0.04281991834054879
          },
          {
            "topic": "Food",
            "val": 0.041650423685344475
          },
          {
            "topic": "Finance",
            "val": 0.03356654834937081
          },
          {
            "topic": "Scenicspot",
            "val": 0.03317671679763606
          },
          {
            "topic": "Traffic",
            "val": 0.0328074026959926
          },
          {
            "topic": "Shop",
            "val": 0.0327868852459013
          }
        ]
      },
      {
        "site": "25845",
        "startTime": "2014-01-14 07:01:06.27",
        "endTime": "2014-01-14 07:06:10.51",
        "stopTime": 304,
        "isStop": false,
        "latitude": 27.9986,
        "longitude": 120.6404,
        "topics": [
          {
            "topic": "Shop",
            "val": 0.13934648039779468
          },
          {
            "topic": "Beauty",
            "val": 0.08742346852484538
          },
          {
            "topic": "Enterprise",
            "val": 0.0585529208808306
          },
          {
            "topic": "Uptown",
            "val": 0.04236714812434442
          },
          {
            "topic": "Finance",
            "val": 0.04114940973514191
          },
          {
            "topic": "Life",
            "val": 0.03790210736393458
          },
          {
            "topic": "Hotel",
            "val": 0.03057876399553506
          },
          {
            "topic": "Education",
            "val": 0.029344112573148937
          },
          {
            "topic": "Hospital",
            "val": 0.028413895748063522
          },
          {
            "topic": "Food",
            "val": 0.027111592192943932
          },
          {
            "topic": "Scenicspot",
            "val": 0.027077766126577193
          },
          {
            "topic": "Traffic",
            "val": 0.027043940060210447
          },
          {
            "topic": "Government",
            "val": 0.027027027027027074
          }
        ]
      },
      {
        "site": "382",
        "startTime": "2014-01-14 07:06:10.51",
        "endTime": "2014-01-14 07:16:02.65",
        "stopTime": 592,
        "isStop": false,
        "latitude": 28.0029,
        "longitude": 120.6492,
        "topics": [
          {
            "topic": "Education",
            "val": 0.2624340207868537
          },
          {
            "topic": "Beauty",
            "val": 0.08494313544104078
          },
          {
            "topic": "Hospital",
            "val": 0.06468683680687855
          },
          {
            "topic": "Government",
            "val": 0.06441475757740756
          },
          {
            "topic": "Food",
            "val": 0.05206236055939487
          },
          {
            "topic": "Hotel",
            "val": 0.04863416226805244
          },
          {
            "topic": "Shop",
            "val": 0.04647113239375306
          },
          {
            "topic": "Finance",
            "val": 0.04547804320618178
          },
          {
            "topic": "Uptown",
            "val": 0.04425368667355937
          },
          {
            "topic": "Enterprise",
            "val": 0.035356695869837515
          },
          {
            "topic": "Traffic",
            "val": 0.03162921042607622
          },
          {
            "topic": "Life",
            "val": 0.02609239810632856
          },
          {
            "topic": "Scenicspot",
            "val": 0.024908853458127024
          }
        ]
      },
      {
        "site": "25845",
        "startTime": "2014-01-14 07:16:02.65",
        "endTime": "2014-01-14 07:16:19.39",
        "stopTime": 16,
        "isStop": false,
        "latitude": 27.9986,
        "longitude": 120.6404,
        "topics": [
          {
            "topic": "Shop",
            "val": 0.13934648039779468
          },
          {
            "topic": "Beauty",
            "val": 0.08742346852484538
          },
          {
            "topic": "Enterprise",
            "val": 0.0585529208808306
          },
          {
            "topic": "Uptown",
            "val": 0.04236714812434442
          },
          {
            "topic": "Finance",
            "val": 0.04114940973514191
          },
          {
            "topic": "Life",
            "val": 0.03790210736393458
          },
          {
            "topic": "Hotel",
            "val": 0.03057876399553506
          },
          {
            "topic": "Education",
            "val": 0.029344112573148937
          },
          {
            "topic": "Hospital",
            "val": 0.028413895748063522
          },
          {
            "topic": "Food",
            "val": 0.027111592192943932
          },
          {
            "topic": "Scenicspot",
            "val": 0.027077766126577193
          },
          {
            "topic": "Traffic",
            "val": 0.027043940060210447
          },
          {
            "topic": "Government",
            "val": 0.027027027027027074
          }
        ]
      },
      {
        "site": "8247",
        "startTime": "2014-01-14 07:16:19.39",
        "endTime": "2014-01-14 07:19:49.12",
        "stopTime": 209,
        "isStop": false,
        "latitude": 27.9963,
        "longitude": 120.6444,
        "topics": [
          {
            "topic": "Scenicspot",
            "val": 0.11418878861735185
          },
          {
            "topic": "Education",
            "val": 0.0798037019959168
          },
          {
            "topic": "Traffic",
            "val": 0.06541071075686784
          },
          {
            "topic": "Hospital",
            "val": 0.055332323298861244
          },
          {
            "topic": "Uptown",
            "val": 0.053652592055860135
          },
          {
            "topic": "Hotel",
            "val": 0.052664514854094784
          },
          {
            "topic": "Finance",
            "val": 0.052631578947369265
          },
          {
            "topic": "Enterprise",
            "val": 0.052631578947369265
          },
          {
            "topic": "Food",
            "val": 0.052631578947369265
          },
          {
            "topic": "Life",
            "val": 0.052631578947369265
          },
          {
            "topic": "Shop",
            "val": 0.052631578947369265
          },
          {
            "topic": "Government",
            "val": 0.052631578947369265
          },
          {
            "topic": "Beauty",
            "val": 0.052631578947369265
          }
        ]
      },
      {
        "site": "382",
        "startTime": "2014-01-14 07:19:49.12",
        "endTime": "2014-01-14 07:19:53.73",
        "stopTime": 4,
        "isStop": false,
        "latitude": 28.0029,
        "longitude": 120.6492,
        "topics": [
          {
            "topic": "Education",
            "val": 0.2624340207868537
          },
          {
            "topic": "Beauty",
            "val": 0.08494313544104078
          },
          {
            "topic": "Hospital",
            "val": 0.06468683680687855
          },
          {
            "topic": "Government",
            "val": 0.06441475757740756
          },
          {
            "topic": "Food",
            "val": 0.05206236055939487
          },
          {
            "topic": "Hotel",
            "val": 0.04863416226805244
          },
          {
            "topic": "Shop",
            "val": 0.04647113239375306
          },
          {
            "topic": "Finance",
            "val": 0.04547804320618178
          },
          {
            "topic": "Uptown",
            "val": 0.04425368667355937
          },
          {
            "topic": "Enterprise",
            "val": 0.035356695869837515
          },
          {
            "topic": "Traffic",
            "val": 0.03162921042607622
          },
          {
            "topic": "Life",
            "val": 0.02609239810632856
          },
          {
            "topic": "Scenicspot",
            "val": 0.024908853458127024
          }
        ]
      },
      {
        "site": "20480",
        "startTime": "2014-01-14 07:19:53.73",
        "endTime": "2014-01-14 07:19:58.55",
        "stopTime": 4,
        "isStop": false,
        "latitude": 27.9961,
        "longitude": 120.6477,
        "topics": [
          {
            "topic": "Hospital",
            "val": 0.14548923859742754
          },
          {
            "topic": "Uptown",
            "val": 0.13246065778944938
          },
          {
            "topic": "Beauty",
            "val": 0.07866390365005371
          },
          {
            "topic": "Education",
            "val": 0.07191366257001564
          },
          {
            "topic": "Enterprise",
            "val": 0.060136646217608204
          },
          {
            "topic": "Hotel",
            "val": 0.05989043681651244
          },
          {
            "topic": "Government",
            "val": 0.04883153121730088
          },
          {
            "topic": "Life",
            "val": 0.04281991834054879
          },
          {
            "topic": "Food",
            "val": 0.041650423685344475
          },
          {
            "topic": "Finance",
            "val": 0.03356654834937081
          },
          {
            "topic": "Scenicspot",
            "val": 0.03317671679763606
          },
          {
            "topic": "Traffic",
            "val": 0.0328074026959926
          },
          {
            "topic": "Shop",
            "val": 0.0327868852459013
          }
        ]
      },
      {
        "site": "25845",
        "startTime": "2014-01-14 07:19:58.55",
        "endTime": "2014-01-14 07:27:22.13",
        "stopTime": 443,
        "isStop": false,
        "latitude": 27.9986,
        "longitude": 120.6404,
        "topics": [
          {
            "topic": "Shop",
            "val": 0.13934648039779468
          },
          {
            "topic": "Beauty",
            "val": 0.08742346852484538
          },
          {
            "topic": "Enterprise",
            "val": 0.0585529208808306
          },
          {
            "topic": "Uptown",
            "val": 0.04236714812434442
          },
          {
            "topic": "Finance",
            "val": 0.04114940973514191
          },
          {
            "topic": "Life",
            "val": 0.03790210736393458
          },
          {
            "topic": "Hotel",
            "val": 0.03057876399553506
          },
          {
            "topic": "Education",
            "val": 0.029344112573148937
          },
          {
            "topic": "Hospital",
            "val": 0.028413895748063522
          },
          {
            "topic": "Food",
            "val": 0.027111592192943932
          },
          {
            "topic": "Scenicspot",
            "val": 0.027077766126577193
          },
          {
            "topic": "Traffic",
            "val": 0.027043940060210447
          },
          {
            "topic": "Government",
            "val": 0.027027027027027074
          }
        ]
      },
      {
        "site": "20480",
        "startTime": "2014-01-14 07:27:22.13",
        "endTime": "2014-01-14 07:28:11.39",
        "stopTime": 49,
        "isStop": false,
        "latitude": 27.9961,
        "longitude": 120.6477,
        "topics": [
          {
            "topic": "Hospital",
            "val": 0.14548923859742754
          },
          {
            "topic": "Uptown",
            "val": 0.13246065778944938
          },
          {
            "topic": "Beauty",
            "val": 0.07866390365005371
          },
          {
            "topic": "Education",
            "val": 0.07191366257001564
          },
          {
            "topic": "Enterprise",
            "val": 0.060136646217608204
          },
          {
            "topic": "Hotel",
            "val": 0.05989043681651244
          },
          {
            "topic": "Government",
            "val": 0.04883153121730088
          },
          {
            "topic": "Life",
            "val": 0.04281991834054879
          },
          {
            "topic": "Food",
            "val": 0.041650423685344475
          },
          {
            "topic": "Finance",
            "val": 0.03356654834937081
          },
          {
            "topic": "Scenicspot",
            "val": 0.03317671679763606
          },
          {
            "topic": "Traffic",
            "val": 0.0328074026959926
          },
          {
            "topic": "Shop",
            "val": 0.0327868852459013
          }
        ]
      },
      {
        "site": "25845",
        "startTime": "2014-01-14 07:28:11.39",
        "endTime": "2014-01-14 07:28:21.27",
        "stopTime": 9,
        "isStop": false,
        "latitude": 27.9986,
        "longitude": 120.6404,
        "topics": [
          {
            "topic": "Shop",
            "val": 0.13934648039779468
          },
          {
            "topic": "Beauty",
            "val": 0.08742346852484538
          },
          {
            "topic": "Enterprise",
            "val": 0.0585529208808306
          },
          {
            "topic": "Uptown",
            "val": 0.04236714812434442
          },
          {
            "topic": "Finance",
            "val": 0.04114940973514191
          },
          {
            "topic": "Life",
            "val": 0.03790210736393458
          },
          {
            "topic": "Hotel",
            "val": 0.03057876399553506
          },
          {
            "topic": "Education",
            "val": 0.029344112573148937
          },
          {
            "topic": "Hospital",
            "val": 0.028413895748063522
          },
          {
            "topic": "Food",
            "val": 0.027111592192943932
          },
          {
            "topic": "Scenicspot",
            "val": 0.027077766126577193
          },
          {
            "topic": "Traffic",
            "val": 0.027043940060210447
          },
          {
            "topic": "Government",
            "val": 0.027027027027027074
          }
        ]
      },
      {
        "site": "8247",
        "startTime": "2014-01-14 07:28:21.27",
        "endTime": "2014-01-14 07:36:05.24",
        "stopTime": 463,
        "isStop": false,
        "latitude": 27.9963,
        "longitude": 120.6444,
        "topics": [
          {
            "topic": "Scenicspot",
            "val": 0.11418878861735185
          },
          {
            "topic": "Education",
            "val": 0.0798037019959168
          },
          {
            "topic": "Traffic",
            "val": 0.06541071075686784
          },
          {
            "topic": "Hospital",
            "val": 0.055332323298861244
          },
          {
            "topic": "Uptown",
            "val": 0.053652592055860135
          },
          {
            "topic": "Hotel",
            "val": 0.052664514854094784
          },
          {
            "topic": "Finance",
            "val": 0.052631578947369265
          },
          {
            "topic": "Enterprise",
            "val": 0.052631578947369265
          },
          {
            "topic": "Food",
            "val": 0.052631578947369265
          },
          {
            "topic": "Life",
            "val": 0.052631578947369265
          },
          {
            "topic": "Shop",
            "val": 0.052631578947369265
          },
          {
            "topic": "Government",
            "val": 0.052631578947369265
          },
          {
            "topic": "Beauty",
            "val": 0.052631578947369265
          }
        ]
      },
      {
        "site": "10878",
        "startTime": "2014-01-14 07:36:05.24",
        "endTime": "2014-01-14 07:37:02.99",
        "stopTime": 57,
        "isStop": false,
        "latitude": 28.0003,
        "longitude": 120.6472,
        "topics": [
          {
            "topic": "Food",
            "val": 0.11189389963260434
          },
          {
            "topic": "Education",
            "val": 0.09796519843352477
          },
          {
            "topic": "Uptown",
            "val": 0.08924462029149229
          },
          {
            "topic": "Life",
            "val": 0.06669627356776565
          },
          {
            "topic": "Traffic",
            "val": 0.06257822277847265
          },
          {
            "topic": "Hospital",
            "val": 0.05553312608502523
          },
          {
            "topic": "Shop",
            "val": 0.0515967540070246
          },
          {
            "topic": "Enterprise",
            "val": 0.047963179781177805
          },
          {
            "topic": "Government",
            "val": 0.04776131454640816
          },
          {
            "topic": "Beauty",
            "val": 0.04640881747345444
          },
          {
            "topic": "Hotel",
            "val": 0.04344139852234627
          },
          {
            "topic": "Scenicspot",
            "val": 0.039747264726068626
          },
          {
            "topic": "Finance",
            "val": 0.03873793855222234
          }
        ]
      },
      {
        "site": "20480",
        "startTime": "2014-01-14 07:37:02.99",
        "endTime": "2014-01-14 07:37:22.67",
        "stopTime": 19,
        "isStop": false,
        "latitude": 27.9961,
        "longitude": 120.6477,
        "topics": [
          {
            "topic": "Hospital",
            "val": 0.14548923859742754
          },
          {
            "topic": "Uptown",
            "val": 0.13246065778944938
          },
          {
            "topic": "Beauty",
            "val": 0.07866390365005371
          },
          {
            "topic": "Education",
            "val": 0.07191366257001564
          },
          {
            "topic": "Enterprise",
            "val": 0.060136646217608204
          },
          {
            "topic": "Hotel",
            "val": 0.05989043681651244
          },
          {
            "topic": "Government",
            "val": 0.04883153121730088
          },
          {
            "topic": "Life",
            "val": 0.04281991834054879
          },
          {
            "topic": "Food",
            "val": 0.041650423685344475
          },
          {
            "topic": "Finance",
            "val": 0.03356654834937081
          },
          {
            "topic": "Scenicspot",
            "val": 0.03317671679763606
          },
          {
            "topic": "Traffic",
            "val": 0.0328074026959926
          },
          {
            "topic": "Shop",
            "val": 0.0327868852459013
          }
        ]
      },
      {
        "site": "25845",
        "startTime": "2014-01-14 07:37:22.67",
        "endTime": "2014-01-14 07:41:52.92",
        "stopTime": 270,
        "isStop": false,
        "latitude": 27.9986,
        "longitude": 120.6404,
        "topics": [
          {
            "topic": "Shop",
            "val": 0.13934648039779468
          },
          {
            "topic": "Beauty",
            "val": 0.08742346852484538
          },
          {
            "topic": "Enterprise",
            "val": 0.0585529208808306
          },
          {
            "topic": "Uptown",
            "val": 0.04236714812434442
          },
          {
            "topic": "Finance",
            "val": 0.04114940973514191
          },
          {
            "topic": "Life",
            "val": 0.03790210736393458
          },
          {
            "topic": "Hotel",
            "val": 0.03057876399553506
          },
          {
            "topic": "Education",
            "val": 0.029344112573148937
          },
          {
            "topic": "Hospital",
            "val": 0.028413895748063522
          },
          {
            "topic": "Food",
            "val": 0.027111592192943932
          },
          {
            "topic": "Scenicspot",
            "val": 0.027077766126577193
          },
          {
            "topic": "Traffic",
            "val": 0.027043940060210447
          },
          {
            "topic": "Government",
            "val": 0.027027027027027074
          }
        ]
      },
      {
        "site": "20480",
        "startTime": "2014-01-14 07:41:52.92",
        "endTime": "2014-01-14 07:52:58.49",
        "stopTime": 665,
        "isStop": false,
        "latitude": 27.9961,
        "longitude": 120.6477,
        "topics": [
          {
            "topic": "Hospital",
            "val": 0.14548923859742754
          },
          {
            "topic": "Uptown",
            "val": 0.13246065778944938
          },
          {
            "topic": "Beauty",
            "val": 0.07866390365005371
          },
          {
            "topic": "Education",
            "val": 0.07191366257001564
          },
          {
            "topic": "Enterprise",
            "val": 0.060136646217608204
          },
          {
            "topic": "Hotel",
            "val": 0.05989043681651244
          },
          {
            "topic": "Government",
            "val": 0.04883153121730088
          },
          {
            "topic": "Life",
            "val": 0.04281991834054879
          },
          {
            "topic": "Food",
            "val": 0.041650423685344475
          },
          {
            "topic": "Finance",
            "val": 0.03356654834937081
          },
          {
            "topic": "Scenicspot",
            "val": 0.03317671679763606
          },
          {
            "topic": "Traffic",
            "val": 0.0328074026959926
          },
          {
            "topic": "Shop",
            "val": 0.0327868852459013
          }
        ]
      },
      {
        "site": "10878",
        "startTime": "2014-01-14 07:52:58.49",
        "endTime": "2014-01-14 07:54:20.11",
        "stopTime": 81,
        "isStop": false,
        "latitude": 28.0003,
        "longitude": 120.6472,
        "topics": [
          {
            "topic": "Food",
            "val": 0.11189389963260434
          },
          {
            "topic": "Education",
            "val": 0.09796519843352477
          },
          {
            "topic": "Uptown",
            "val": 0.08924462029149229
          },
          {
            "topic": "Life",
            "val": 0.06669627356776565
          },
          {
            "topic": "Traffic",
            "val": 0.06257822277847265
          },
          {
            "topic": "Hospital",
            "val": 0.05553312608502523
          },
          {
            "topic": "Shop",
            "val": 0.0515967540070246
          },
          {
            "topic": "Enterprise",
            "val": 0.047963179781177805
          },
          {
            "topic": "Government",
            "val": 0.04776131454640816
          },
          {
            "topic": "Beauty",
            "val": 0.04640881747345444
          },
          {
            "topic": "Hotel",
            "val": 0.04344139852234627
          },
          {
            "topic": "Scenicspot",
            "val": 0.039747264726068626
          },
          {
            "topic": "Finance",
            "val": 0.03873793855222234
          }
        ]
      },
      {
        "site": "20480",
        "startTime": "2014-01-14 07:54:20.11",
        "endTime": "2014-01-14 07:54:32.04",
        "stopTime": 11,
        "isStop": false,
        "latitude": 27.9961,
        "longitude": 120.6477,
        "topics": [
          {
            "topic": "Hospital",
            "val": 0.14548923859742754
          },
          {
            "topic": "Uptown",
            "val": 0.13246065778944938
          },
          {
            "topic": "Beauty",
            "val": 0.07866390365005371
          },
          {
            "topic": "Education",
            "val": 0.07191366257001564
          },
          {
            "topic": "Enterprise",
            "val": 0.060136646217608204
          },
          {
            "topic": "Hotel",
            "val": 0.05989043681651244
          },
          {
            "topic": "Government",
            "val": 0.04883153121730088
          },
          {
            "topic": "Life",
            "val": 0.04281991834054879
          },
          {
            "topic": "Food",
            "val": 0.041650423685344475
          },
          {
            "topic": "Finance",
            "val": 0.03356654834937081
          },
          {
            "topic": "Scenicspot",
            "val": 0.03317671679763606
          },
          {
            "topic": "Traffic",
            "val": 0.0328074026959926
          },
          {
            "topic": "Shop",
            "val": 0.0327868852459013
          }
        ]
      },
      {
        "site": "25845",
        "startTime": "2014-01-14 07:54:32.04",
        "endTime": "2014-01-14 07:54:36.75",
        "stopTime": 4,
        "isStop": false,
        "latitude": 27.9986,
        "longitude": 120.6404,
        "topics": [
          {
            "topic": "Shop",
            "val": 0.13934648039779468
          },
          {
            "topic": "Beauty",
            "val": 0.08742346852484538
          },
          {
            "topic": "Enterprise",
            "val": 0.0585529208808306
          },
          {
            "topic": "Uptown",
            "val": 0.04236714812434442
          },
          {
            "topic": "Finance",
            "val": 0.04114940973514191
          },
          {
            "topic": "Life",
            "val": 0.03790210736393458
          },
          {
            "topic": "Hotel",
            "val": 0.03057876399553506
          },
          {
            "topic": "Education",
            "val": 0.029344112573148937
          },
          {
            "topic": "Hospital",
            "val": 0.028413895748063522
          },
          {
            "topic": "Food",
            "val": 0.027111592192943932
          },
          {
            "topic": "Scenicspot",
            "val": 0.027077766126577193
          },
          {
            "topic": "Traffic",
            "val": 0.027043940060210447
          },
          {
            "topic": "Government",
            "val": 0.027027027027027074
          }
        ]
      },
      {
        "site": "8247",
        "startTime": "2014-01-14 07:54:36.75",
        "endTime": "2014-01-14 08:00:41.5",
        "stopTime": 364,
        "isStop": false,
        "latitude": 27.9963,
        "longitude": 120.6444,
        "topics": [
          {
            "topic": "Scenicspot",
            "val": 0.11418878861735185
          },
          {
            "topic": "Education",
            "val": 0.0798037019959168
          },
          {
            "topic": "Traffic",
            "val": 0.06541071075686784
          },
          {
            "topic": "Hospital",
            "val": 0.055332323298861244
          },
          {
            "topic": "Uptown",
            "val": 0.053652592055860135
          },
          {
            "topic": "Hotel",
            "val": 0.052664514854094784
          },
          {
            "topic": "Finance",
            "val": 0.052631578947369265
          },
          {
            "topic": "Enterprise",
            "val": 0.052631578947369265
          },
          {
            "topic": "Food",
            "val": 0.052631578947369265
          },
          {
            "topic": "Life",
            "val": 0.052631578947369265
          },
          {
            "topic": "Shop",
            "val": 0.052631578947369265
          },
          {
            "topic": "Government",
            "val": 0.052631578947369265
          },
          {
            "topic": "Beauty",
            "val": 0.052631578947369265
          }
        ]
      },
      {
        "site": "382",
        "startTime": "2014-01-14 08:00:41.5",
        "endTime": "2014-01-14 08:01:24.09",
        "stopTime": 42,
        "isStop": false,
        "latitude": 28.0029,
        "longitude": 120.6492,
        "topics": [
          {
            "topic": "Education",
            "val": 0.2624340207868537
          },
          {
            "topic": "Beauty",
            "val": 0.08494313544104078
          },
          {
            "topic": "Hospital",
            "val": 0.06468683680687855
          },
          {
            "topic": "Government",
            "val": 0.06441475757740756
          },
          {
            "topic": "Food",
            "val": 0.05206236055939487
          },
          {
            "topic": "Hotel",
            "val": 0.04863416226805244
          },
          {
            "topic": "Shop",
            "val": 0.04647113239375306
          },
          {
            "topic": "Finance",
            "val": 0.04547804320618178
          },
          {
            "topic": "Uptown",
            "val": 0.04425368667355937
          },
          {
            "topic": "Enterprise",
            "val": 0.035356695869837515
          },
          {
            "topic": "Traffic",
            "val": 0.03162921042607622
          },
          {
            "topic": "Life",
            "val": 0.02609239810632856
          },
          {
            "topic": "Scenicspot",
            "val": 0.024908853458127024
          }
        ]
      },
      {
        "site": "8247",
        "startTime": "2014-01-14 08:01:24.09",
        "endTime": "2014-01-14 08:01:30.23",
        "stopTime": 6,
        "isStop": false,
        "latitude": 27.9963,
        "longitude": 120.6444,
        "topics": [
          {
            "topic": "Scenicspot",
            "val": 0.11418878861735185
          },
          {
            "topic": "Education",
            "val": 0.0798037019959168
          },
          {
            "topic": "Traffic",
            "val": 0.06541071075686784
          },
          {
            "topic": "Hospital",
            "val": 0.055332323298861244
          },
          {
            "topic": "Uptown",
            "val": 0.053652592055860135
          },
          {
            "topic": "Hotel",
            "val": 0.052664514854094784
          },
          {
            "topic": "Finance",
            "val": 0.052631578947369265
          },
          {
            "topic": "Enterprise",
            "val": 0.052631578947369265
          },
          {
            "topic": "Food",
            "val": 0.052631578947369265
          },
          {
            "topic": "Life",
            "val": 0.052631578947369265
          },
          {
            "topic": "Shop",
            "val": 0.052631578947369265
          },
          {
            "topic": "Government",
            "val": 0.052631578947369265
          },
          {
            "topic": "Beauty",
            "val": 0.052631578947369265
          }
        ]
      },
      {
        "site": "25845",
        "startTime": "2014-01-14 08:01:30.23",
        "endTime": "2014-01-14 08:01:42.96",
        "stopTime": 12,
        "isStop": false,
        "latitude": 27.9986,
        "longitude": 120.6404,
        "topics": [
          {
            "topic": "Shop",
            "val": 0.13934648039779468
          },
          {
            "topic": "Beauty",
            "val": 0.08742346852484538
          },
          {
            "topic": "Enterprise",
            "val": 0.0585529208808306
          },
          {
            "topic": "Uptown",
            "val": 0.04236714812434442
          },
          {
            "topic": "Finance",
            "val": 0.04114940973514191
          },
          {
            "topic": "Life",
            "val": 0.03790210736393458
          },
          {
            "topic": "Hotel",
            "val": 0.03057876399553506
          },
          {
            "topic": "Education",
            "val": 0.029344112573148937
          },
          {
            "topic": "Hospital",
            "val": 0.028413895748063522
          },
          {
            "topic": "Food",
            "val": 0.027111592192943932
          },
          {
            "topic": "Scenicspot",
            "val": 0.027077766126577193
          },
          {
            "topic": "Traffic",
            "val": 0.027043940060210447
          },
          {
            "topic": "Government",
            "val": 0.027027027027027074
          }
        ]
      },
      {
        "site": "10878",
        "startTime": "2014-01-14 08:01:42.96",
        "endTime": "2014-01-14 08:10:01.53",
        "stopTime": 498,
        "isStop": false,
        "latitude": 28.0003,
        "longitude": 120.6472,
        "topics": [
          {
            "topic": "Food",
            "val": 0.11189389963260434
          },
          {
            "topic": "Education",
            "val": 0.09796519843352477
          },
          {
            "topic": "Uptown",
            "val": 0.08924462029149229
          },
          {
            "topic": "Life",
            "val": 0.06669627356776565
          },
          {
            "topic": "Traffic",
            "val": 0.06257822277847265
          },
          {
            "topic": "Hospital",
            "val": 0.05553312608502523
          },
          {
            "topic": "Shop",
            "val": 0.0515967540070246
          },
          {
            "topic": "Enterprise",
            "val": 0.047963179781177805
          },
          {
            "topic": "Government",
            "val": 0.04776131454640816
          },
          {
            "topic": "Beauty",
            "val": 0.04640881747345444
          },
          {
            "topic": "Hotel",
            "val": 0.04344139852234627
          },
          {
            "topic": "Scenicspot",
            "val": 0.039747264726068626
          },
          {
            "topic": "Finance",
            "val": 0.03873793855222234
          }
        ]
      },
      {
        "site": "25845",
        "startTime": "2014-01-14 08:10:01.53",
        "endTime": "2014-01-14 08:10:11.88",
        "stopTime": 10,
        "isStop": false,
        "latitude": 27.9986,
        "longitude": 120.6404,
        "topics": [
          {
            "topic": "Shop",
            "val": 0.13934648039779468
          },
          {
            "topic": "Beauty",
            "val": 0.08742346852484538
          },
          {
            "topic": "Enterprise",
            "val": 0.0585529208808306
          },
          {
            "topic": "Uptown",
            "val": 0.04236714812434442
          },
          {
            "topic": "Finance",
            "val": 0.04114940973514191
          },
          {
            "topic": "Life",
            "val": 0.03790210736393458
          },
          {
            "topic": "Hotel",
            "val": 0.03057876399553506
          },
          {
            "topic": "Education",
            "val": 0.029344112573148937
          },
          {
            "topic": "Hospital",
            "val": 0.028413895748063522
          },
          {
            "topic": "Food",
            "val": 0.027111592192943932
          },
          {
            "topic": "Scenicspot",
            "val": 0.027077766126577193
          },
          {
            "topic": "Traffic",
            "val": 0.027043940060210447
          },
          {
            "topic": "Government",
            "val": 0.027027027027027074
          }
        ]
      },
      {
        "site": "20480",
        "startTime": "2014-01-14 08:10:11.88",
        "endTime": "2014-01-14 08:15:45.05",
        "stopTime": 333,
        "isStop": false,
        "latitude": 27.9961,
        "longitude": 120.6477,
        "topics": [
          {
            "topic": "Hospital",
            "val": 0.14548923859742754
          },
          {
            "topic": "Uptown",
            "val": 0.13246065778944938
          },
          {
            "topic": "Beauty",
            "val": 0.07866390365005371
          },
          {
            "topic": "Education",
            "val": 0.07191366257001564
          },
          {
            "topic": "Enterprise",
            "val": 0.060136646217608204
          },
          {
            "topic": "Hotel",
            "val": 0.05989043681651244
          },
          {
            "topic": "Government",
            "val": 0.04883153121730088
          },
          {
            "topic": "Life",
            "val": 0.04281991834054879
          },
          {
            "topic": "Food",
            "val": 0.041650423685344475
          },
          {
            "topic": "Finance",
            "val": 0.03356654834937081
          },
          {
            "topic": "Scenicspot",
            "val": 0.03317671679763606
          },
          {
            "topic": "Traffic",
            "val": 0.0328074026959926
          },
          {
            "topic": "Shop",
            "val": 0.0327868852459013
          }
        ]
      },
      {
        "site": "25845",
        "startTime": "2014-01-14 08:15:45.05",
        "endTime": "2014-01-14 08:15:48.94",
        "stopTime": 3,
        "isStop": false,
        "latitude": 27.9986,
        "longitude": 120.6404,
        "topics": [
          {
            "topic": "Shop",
            "val": 0.13934648039779468
          },
          {
            "topic": "Beauty",
            "val": 0.08742346852484538
          },
          {
            "topic": "Enterprise",
            "val": 0.0585529208808306
          },
          {
            "topic": "Uptown",
            "val": 0.04236714812434442
          },
          {
            "topic": "Finance",
            "val": 0.04114940973514191
          },
          {
            "topic": "Life",
            "val": 0.03790210736393458
          },
          {
            "topic": "Hotel",
            "val": 0.03057876399553506
          },
          {
            "topic": "Education",
            "val": 0.029344112573148937
          },
          {
            "topic": "Hospital",
            "val": 0.028413895748063522
          },
          {
            "topic": "Food",
            "val": 0.027111592192943932
          },
          {
            "topic": "Scenicspot",
            "val": 0.027077766126577193
          },
          {
            "topic": "Traffic",
            "val": 0.027043940060210447
          },
          {
            "topic": "Government",
            "val": 0.027027027027027074
          }
        ]
      },
      {
        "site": "20480",
        "startTime": "2014-01-14 08:15:48.94",
        "endTime": "2014-01-14 08:26:45.01",
        "stopTime": 656,
        "isStop": false,
        "latitude": 27.9961,
        "longitude": 120.6477,
        "topics": [
          {
            "topic": "Hospital",
            "val": 0.14548923859742754
          },
          {
            "topic": "Uptown",
            "val": 0.13246065778944938
          },
          {
            "topic": "Beauty",
            "val": 0.07866390365005371
          },
          {
            "topic": "Education",
            "val": 0.07191366257001564
          },
          {
            "topic": "Enterprise",
            "val": 0.060136646217608204
          },
          {
            "topic": "Hotel",
            "val": 0.05989043681651244
          },
          {
            "topic": "Government",
            "val": 0.04883153121730088
          },
          {
            "topic": "Life",
            "val": 0.04281991834054879
          },
          {
            "topic": "Food",
            "val": 0.041650423685344475
          },
          {
            "topic": "Finance",
            "val": 0.03356654834937081
          },
          {
            "topic": "Scenicspot",
            "val": 0.03317671679763606
          },
          {
            "topic": "Traffic",
            "val": 0.0328074026959926
          },
          {
            "topic": "Shop",
            "val": 0.0327868852459013
          }
        ]
      },
      {
        "site": "382",
        "startTime": "2014-01-14 08:26:45.01",
        "endTime": "2014-01-14 08:28:16.17",
        "stopTime": 91,
        "isStop": false,
        "latitude": 28.0029,
        "longitude": 120.6492,
        "topics": [
          {
            "topic": "Education",
            "val": 0.2624340207868537
          },
          {
            "topic": "Beauty",
            "val": 0.08494313544104078
          },
          {
            "topic": "Hospital",
            "val": 0.06468683680687855
          },
          {
            "topic": "Government",
            "val": 0.06441475757740756
          },
          {
            "topic": "Food",
            "val": 0.05206236055939487
          },
          {
            "topic": "Hotel",
            "val": 0.04863416226805244
          },
          {
            "topic": "Shop",
            "val": 0.04647113239375306
          },
          {
            "topic": "Finance",
            "val": 0.04547804320618178
          },
          {
            "topic": "Uptown",
            "val": 0.04425368667355937
          },
          {
            "topic": "Enterprise",
            "val": 0.035356695869837515
          },
          {
            "topic": "Traffic",
            "val": 0.03162921042607622
          },
          {
            "topic": "Life",
            "val": 0.02609239810632856
          },
          {
            "topic": "Scenicspot",
            "val": 0.024908853458127024
          }
        ]
      },
      {
        "site": "8247",
        "startTime": "2014-01-14 08:28:16.17",
        "endTime": "2014-01-14 08:28:43.58",
        "stopTime": 27,
        "isStop": false,
        "latitude": 27.9963,
        "longitude": 120.6444,
        "topics": [
          {
            "topic": "Scenicspot",
            "val": 0.11418878861735185
          },
          {
            "topic": "Education",
            "val": 0.0798037019959168
          },
          {
            "topic": "Traffic",
            "val": 0.06541071075686784
          },
          {
            "topic": "Hospital",
            "val": 0.055332323298861244
          },
          {
            "topic": "Uptown",
            "val": 0.053652592055860135
          },
          {
            "topic": "Hotel",
            "val": 0.052664514854094784
          },
          {
            "topic": "Finance",
            "val": 0.052631578947369265
          },
          {
            "topic": "Enterprise",
            "val": 0.052631578947369265
          },
          {
            "topic": "Food",
            "val": 0.052631578947369265
          },
          {
            "topic": "Life",
            "val": 0.052631578947369265
          },
          {
            "topic": "Shop",
            "val": 0.052631578947369265
          },
          {
            "topic": "Government",
            "val": 0.052631578947369265
          },
          {
            "topic": "Beauty",
            "val": 0.052631578947369265
          }
        ]
      },
      {
        "site": "20480",
        "startTime": "2014-01-14 08:28:43.58",
        "endTime": "2014-01-14 08:26:45.01",
        "stopTime": 86281,
        "isStop": true,
        "stoppoint": 1,
        "latitude": 27.9961,
        "longitude": 120.6477,
        "topics": [
          {
            "topic": "Hospital",
            "val": 0.14548923859742754
          },
          {
            "topic": "Uptown",
            "val": 0.13246065778944938
          },
          {
            "topic": "Beauty",
            "val": 0.07866390365005371
          },
          {
            "topic": "Education",
            "val": 0.07191366257001564
          },
          {
            "topic": "Enterprise",
            "val": 0.060136646217608204
          },
          {
            "topic": "Hotel",
            "val": 0.05989043681651244
          },
          {
            "topic": "Government",
            "val": 0.04883153121730088
          },
          {
            "topic": "Life",
            "val": 0.04281991834054879
          },
          {
            "topic": "Food",
            "val": 0.041650423685344475
          },
          {
            "topic": "Finance",
            "val": 0.03356654834937081
          },
          {
            "topic": "Scenicspot",
            "val": 0.03317671679763606
          },
          {
            "topic": "Traffic",
            "val": 0.0328074026959926
          },
          {
            "topic": "Shop",
            "val": 0.0327868852459013
          }
        ]
      }
    ],
    "matching": true
  },
  {
    "pid": "460000112823199",
    "traj": [
      {
        "site": "22279",
        "startTime": "2014-01-14 06:09:59.79",
        "endTime": "2014-01-14 07:58:20.13",
        "stopTime": 6500,
        "isStop": true,
        "stoppoint": 0,
        "latitude": 28.0158,
        "longitude": 120.5944,
        "topics": [
          {
            "topic": "Uptown",
            "val": 0.08033067650352499
          },
          {
            "topic": "Food",
            "val": 0.06929714775047831
          },
          {
            "topic": "Traffic",
            "val": 0.06844081417561503
          },
          {
            "topic": "Shop",
            "val": 0.05961399117317777
          },
          {
            "topic": "Scenicspot",
            "val": 0.058066003557078714
          },
          {
            "topic": "Beauty",
            "val": 0.05776958039654912
          },
          {
            "topic": "Hotel",
            "val": 0.056979118635136806
          },
          {
            "topic": "Finance",
            "val": 0.056023977340097
          },
          {
            "topic": "Hospital",
            "val": 0.05539819511231224
          },
          {
            "topic": "Education",
            "val": 0.05358672024240912
          },
          {
            "topic": "Life",
            "val": 0.052796258480996824
          },
          {
            "topic": "Enterprise",
            "val": 0.052631578947369265
          },
          {
            "topic": "Government",
            "val": 0.052631578947369265
          }
        ]
      },
      {
        "site": "5291",
        "startTime": "2014-01-14 07:58:20.13",
        "endTime": "2014-01-14 08:09:24.95",
        "stopTime": 664,
        "isStop": false,
        "latitude": 28.011,
        "longitude": 120.6061
      },
      {
        "site": "20403",
        "startTime": "2014-01-14 08:09:24.95",
        "endTime": "2014-01-14 08:10:06.92",
        "stopTime": 41,
        "isStop": false,
        "latitude": 28.0174,
        "longitude": 120.6061,
        "topics": [
          {
            "topic": "Uptown",
            "val": 0.17861612730198448
          },
          {
            "topic": "Life",
            "val": 0.0719777272611178
          },
          {
            "topic": "Finance",
            "val": 0.06891267145155973
          },
          {
            "topic": "Education",
            "val": 0.06783990191821443
          },
          {
            "topic": "Traffic",
            "val": 0.06584761564200177
          },
          {
            "topic": "Shop",
            "val": 0.05269341779264905
          },
          {
            "topic": "Hospital",
            "val": 0.04901535082117966
          },
          {
            "topic": "Scenicspot",
            "val": 0.047304027994176524
          },
          {
            "topic": "Hotel",
            "val": 0.04577150008939768
          },
          {
            "topic": "Beauty",
            "val": 0.04367704528619991
          },
          {
            "topic": "Food",
            "val": 0.04091849505759799
          },
          {
            "topic": "Enterprise",
            "val": 0.040816326530612734
          },
          {
            "topic": "Government",
            "val": 0.040816326530612734
          }
        ]
      },
      {
        "site": "22279",
        "startTime": "2014-01-14 08:10:06.92",
        "endTime": "2014-01-14 08:10:16.17",
        "stopTime": 9,
        "isStop": false,
        "latitude": 28.0158,
        "longitude": 120.5944,
        "topics": [
          {
            "topic": "Uptown",
            "val": 0.08033067650352499
          },
          {
            "topic": "Food",
            "val": 0.06929714775047831
          },
          {
            "topic": "Traffic",
            "val": 0.06844081417561503
          },
          {
            "topic": "Shop",
            "val": 0.05961399117317777
          },
          {
            "topic": "Scenicspot",
            "val": 0.058066003557078714
          },
          {
            "topic": "Beauty",
            "val": 0.05776958039654912
          },
          {
            "topic": "Hotel",
            "val": 0.056979118635136806
          },
          {
            "topic": "Finance",
            "val": 0.056023977340097
          },
          {
            "topic": "Hospital",
            "val": 0.05539819511231224
          },
          {
            "topic": "Education",
            "val": 0.05358672024240912
          },
          {
            "topic": "Life",
            "val": 0.052796258480996824
          },
          {
            "topic": "Enterprise",
            "val": 0.052631578947369265
          },
          {
            "topic": "Government",
            "val": 0.052631578947369265
          }
        ]
      },
      {
        "site": "25872",
        "startTime": "2014-01-14 08:10:16.17",
        "endTime": "2014-01-14 08:10:28.18",
        "stopTime": 12,
        "isStop": false,
        "latitude": 28.0227,
        "longitude": 120.6045,
        "topics": [
          {
            "topic": "Beauty",
            "val": 0.07381449033514198
          },
          {
            "topic": "Enterprise",
            "val": 0.07348073981365641
          },
          {
            "topic": "Hospital",
            "val": 0.07125573633708882
          },
          {
            "topic": "Life",
            "val": 0.060742594910305134
          },
          {
            "topic": "Traffic",
            "val": 0.0575163398692815
          },
          {
            "topic": "Shop",
            "val": 0.05696008900013925
          },
          {
            "topic": "Hotel",
            "val": 0.052649144764288856
          },
          {
            "topic": "Finance",
            "val": 0.05189820609094704
          },
          {
            "topic": "Uptown",
            "val": 0.0509803921568628
          },
          {
            "topic": "Education",
            "val": 0.05009039076623556
          },
          {
            "topic": "Scenicspot",
            "val": 0.04856070087609508
          },
          {
            "topic": "Food",
            "val": 0.0445000695313585
          },
          {
            "topic": "Government",
            "val": 0.04444444444444431
          }
        ]
      },
      {
        "site": "4909",
        "startTime": "2014-01-14 08:10:28.18",
        "endTime": "2014-01-14 10:10:30.42",
        "stopTime": 7202,
        "isStop": true,
        "latitude": 28.0223,
        "longitude": 120.6044,
        "topics": [
          {
            "topic": "Finance",
            "val": 0.1441906549853978
          },
          {
            "topic": "Hospital",
            "val": 0.07867473230426918
          },
          {
            "topic": "Hotel",
            "val": 0.06478584341538034
          },
          {
            "topic": "Enterprise",
            "val": 0.06342998192184673
          },
          {
            "topic": "Food",
            "val": 0.06217841746627724
          },
          {
            "topic": "Life",
            "val": 0.058058684466694474
          },
          {
            "topic": "Education",
            "val": 0.05133152551800871
          },
          {
            "topic": "Shop",
            "val": 0.04973230426922564
          },
          {
            "topic": "Uptown",
            "val": 0.04653386177165927
          },
          {
            "topic": "Beauty",
            "val": 0.04403073286052045
          },
          {
            "topic": "Traffic",
            "val": 0.04283131692393322
          },
          {
            "topic": "Scenicspot",
            "val": 0.032418995967181674
          },
          {
            "topic": "Government",
            "val": 0.02781254345709962
          }
        ]
      },
      {
        "site": "58",
        "startTime": "2014-01-14 10:10:30.42",
        "endTime": "2014-01-14 10:14:16.82",
        "stopTime": 226,
        "isStop": false,
        "latitude": 28.0271,
        "longitude": 120.6009,
        "topics": [
          {
            "topic": "Enterprise",
            "val": 0.06455986649979234
          },
          {
            "topic": "Shop",
            "val": 0.06382978723404346
          },
          {
            "topic": "Finance",
            "val": 0.05899735780837252
          },
          {
            "topic": "Life",
            "val": 0.05565985259352062
          },
          {
            "topic": "Scenicspot",
            "val": 0.05559032123487788
          },
          {
            "topic": "Education",
            "val": 0.05559032123487787
          },
          {
            "topic": "Traffic",
            "val": 0.0555555555555565
          },
          {
            "topic": "Uptown",
            "val": 0.0555555555555565
          },
          {
            "topic": "Food",
            "val": 0.0555555555555565
          },
          {
            "topic": "Hospital",
            "val": 0.0555555555555565
          },
          {
            "topic": "Hotel",
            "val": 0.0555555555555565
          },
          {
            "topic": "Government",
            "val": 0.0555555555555565
          },
          {
            "topic": "Beauty",
            "val": 0.0555555555555565
          }
        ]
      },
      {
        "site": "1654",
        "startTime": "2014-01-14 10:14:16.82",
        "endTime": "2014-01-14 10:23:55.72",
        "stopTime": 578,
        "isStop": false,
        "latitude": 28.0246,
        "longitude": 120.5916,
        "topics": [
          {
            "topic": "Traffic",
            "val": 0.07750967779491742
          },
          {
            "topic": "Hotel",
            "val": 0.07500654888377827
          },
          {
            "topic": "Shop",
            "val": 0.07468638123235354
          },
          {
            "topic": "Life",
            "val": 0.06449922868702042
          },
          {
            "topic": "Food",
            "val": 0.059754926215908395
          },
          {
            "topic": "Finance",
            "val": 0.05652414355153155
          },
          {
            "topic": "Hospital",
            "val": 0.05445760689233548
          },
          {
            "topic": "Scenicspot",
            "val": 0.05425386384142882
          },
          {
            "topic": "Beauty",
            "val": 0.05131414267834719
          },
          {
            "topic": "Education",
            "val": 0.05049917047472064
          },
          {
            "topic": "Uptown",
            "val": 0.047646767762027586
          },
          {
            "topic": "Government",
            "val": 0.04654073405710585
          },
          {
            "topic": "Enterprise",
            "val": 0.04651162790697633
          }
        ]
      },
      {
        "site": "28685",
        "startTime": "2014-01-14 10:23:55.72",
        "endTime": "2014-01-14 10:24:48.85",
        "stopTime": 53,
        "isStop": false,
        "latitude": 28.0234,
        "longitude": 120.5928,
        "topics": [
          {
            "topic": "Hotel",
            "val": 0.12768678239103254
          },
          {
            "topic": "Traffic",
            "val": 0.08962289818795251
          },
          {
            "topic": "Government",
            "val": 0.08592262066713872
          },
          {
            "topic": "Food",
            "val": 0.0794471350057143
          },
          {
            "topic": "Scenicspot",
            "val": 0.05525929150568642
          },
          {
            "topic": "Beauty",
            "val": 0.05376285574359256
          },
          {
            "topic": "Shop",
            "val": 0.050171409914567124
          },
          {
            "topic": "Hospital",
            "val": 0.04905588507373346
          },
          {
            "topic": "Finance",
            "val": 0.04598138978070427
          },
          {
            "topic": "Uptown",
            "val": 0.045029112477553535
          },
          {
            "topic": "Education",
            "val": 0.04467540947924047
          },
          {
            "topic": "Life",
            "val": 0.04355988463840687
          },
          {
            "topic": "Enterprise",
            "val": 0.04347826086956539
          }
        ]
      },
      {
        "site": "19703",
        "startTime": "2014-01-14 10:24:48.85",
        "endTime": "2014-01-14 10:29:40.01",
        "stopTime": 291,
        "isStop": false,
        "latitude": 28.0238,
        "longitude": 120.5972,
        "topics": [
          {
            "topic": "Shop",
            "val": 0.11757879167140732
          },
          {
            "topic": "Beauty",
            "val": 0.09059051086585632
          },
          {
            "topic": "Hospital",
            "val": 0.08619865741267581
          },
          {
            "topic": "Education",
            "val": 0.058459437933780965
          },
          {
            "topic": "Finance",
            "val": 0.050267379679144526
          },
          {
            "topic": "Life",
            "val": 0.03750142223233553
          },
          {
            "topic": "Uptown",
            "val": 0.036431903515757987
          },
          {
            "topic": "Hotel",
            "val": 0.036431903515757987
          },
          {
            "topic": "Food",
            "val": 0.036409147798383994
          },
          {
            "topic": "Enterprise",
            "val": 0.036363636363636015
          },
          {
            "topic": "Traffic",
            "val": 0.036363636363636015
          },
          {
            "topic": "Scenicspot",
            "val": 0.036363636363636015
          },
          {
            "topic": "Government",
            "val": 0.036363636363636015
          }
        ]
      },
      {
        "site": "2795",
        "startTime": "2014-01-14 10:29:40.01",
        "endTime": "2014-01-14 10:36:47.0",
        "stopTime": 426,
        "isStop": false,
        "latitude": 28.0244,
        "longitude": 120.603,
        "topics": [
          {
            "topic": "Shop",
            "val": 0.12251425392852172
          },
          {
            "topic": "Finance",
            "val": 0.07731887081073538
          },
          {
            "topic": "Enterprise",
            "val": 0.06602388788454677
          },
          {
            "topic": "Hotel",
            "val": 0.055934115174832384
          },
          {
            "topic": "Beauty",
            "val": 0.05417265408921638
          },
          {
            "topic": "Food",
            "val": 0.04423739550981929
          },
          {
            "topic": "Hospital",
            "val": 0.03773235062346474
          },
          {
            "topic": "Traffic",
            "val": 0.03229345323629835
          },
          {
            "topic": "Uptown",
            "val": 0.02863146834778015
          },
          {
            "topic": "Scenicspot",
            "val": 0.026900910088227252
          },
          {
            "topic": "Education",
            "val": 0.025881116828133675
          },
          {
            "topic": "Life",
            "val": 0.025402123024150267
          },
          {
            "topic": "Government",
            "val": 0.024691358024691124
          }
        ]
      },
      {
        "site": "5694",
        "startTime": "2014-01-14 10:36:47.0",
        "endTime": "2014-01-14 10:46:18.05",
        "stopTime": 571,
        "isStop": false,
        "latitude": 28.0189,
        "longitude": 120.5962,
        "topics": [
          {
            "topic": "Beauty",
            "val": 0.10421881518564878
          },
          {
            "topic": "Uptown",
            "val": 0.09407592824363795
          },
          {
            "topic": "Hotel",
            "val": 0.0828379224030039
          },
          {
            "topic": "Hospital",
            "val": 0.07994367959950013
          },
          {
            "topic": "Shop",
            "val": 0.06664580725907367
          },
          {
            "topic": "Finance",
            "val": 0.051731330830204286
          },
          {
            "topic": "Food",
            "val": 0.05058406341259901
          },
          {
            "topic": "Education",
            "val": 0.044169795577805766
          },
          {
            "topic": "Life",
            "val": 0.04278785982478127
          },
          {
            "topic": "Scenicspot",
            "val": 0.04169274092615806
          },
          {
            "topic": "Enterprise",
            "val": 0.04169274092615805
          },
          {
            "topic": "Government",
            "val": 0.04169274092615805
          },
          {
            "topic": "Traffic",
            "val": 0.041666666666667025
          }
        ]
      },
      {
        "site": "8821",
        "startTime": "2014-01-14 10:46:18.05",
        "endTime": "2014-01-14 10:46:37.84",
        "stopTime": 19,
        "isStop": false,
        "latitude": 28.0211,
        "longitude": 120.601,
        "topics": [
          {
            "topic": "Hotel",
            "val": 0.11627945527936287
          },
          {
            "topic": "Shop",
            "val": 0.11145554459630719
          },
          {
            "topic": "Hospital",
            "val": 0.059577783487636975
          },
          {
            "topic": "Traffic",
            "val": 0.056668517766412733
          },
          {
            "topic": "Life",
            "val": 0.056030302779135566
          },
          {
            "topic": "Government",
            "val": 0.05252426460227516
          },
          {
            "topic": "Beauty",
            "val": 0.049150842526667675
          },
          {
            "topic": "Finance",
            "val": 0.043580966274067275
          },
          {
            "topic": "Enterprise",
            "val": 0.04223822824888691
          },
          {
            "topic": "Education",
            "val": 0.034405589768667436
          },
          {
            "topic": "Food",
            "val": 0.029822045769131677
          },
          {
            "topic": "Uptown",
            "val": 0.02968942966787925
          },
          {
            "topic": "Scenicspot",
            "val": 0.01847508060572383
          }
        ]
      },
      {
        "site": "22279",
        "startTime": "2014-01-14 10:46:37.84",
        "endTime": "2014-01-14 10:52:49.99",
        "stopTime": 372,
        "isStop": false,
        "latitude": 28.0158,
        "longitude": 120.5944,
        "topics": [
          {
            "topic": "Uptown",
            "val": 0.08033067650352499
          },
          {
            "topic": "Food",
            "val": 0.06929714775047831
          },
          {
            "topic": "Traffic",
            "val": 0.06844081417561503
          },
          {
            "topic": "Shop",
            "val": 0.05961399117317777
          },
          {
            "topic": "Scenicspot",
            "val": 0.058066003557078714
          },
          {
            "topic": "Beauty",
            "val": 0.05776958039654912
          },
          {
            "topic": "Hotel",
            "val": 0.056979118635136806
          },
          {
            "topic": "Finance",
            "val": 0.056023977340097
          },
          {
            "topic": "Hospital",
            "val": 0.05539819511231224
          },
          {
            "topic": "Education",
            "val": 0.05358672024240912
          },
          {
            "topic": "Life",
            "val": 0.052796258480996824
          },
          {
            "topic": "Enterprise",
            "val": 0.052631578947369265
          },
          {
            "topic": "Government",
            "val": 0.052631578947369265
          }
        ]
      },
      {
        "site": "6225",
        "startTime": "2014-01-14 10:52:49.99",
        "endTime": "2014-01-14 11:08:47.94",
        "stopTime": 957,
        "isStop": false,
        "latitude": 28.0252,
        "longitude": 120.6105,
        "topics": [
          {
            "topic": "Traffic",
            "val": 0.11666097773732463
          },
          {
            "topic": "Shop",
            "val": 0.09530852960139662
          },
          {
            "topic": "Enterprise",
            "val": 0.0667501042970388
          },
          {
            "topic": "Food",
            "val": 0.05180718322145188
          },
          {
            "topic": "Finance",
            "val": 0.04308415822808874
          },
          {
            "topic": "Life",
            "val": 0.04164296279440271
          },
          {
            "topic": "Scenicspot",
            "val": 0.04128266393598119
          },
          {
            "topic": "Education",
            "val": 0.04061895551257315
          },
          {
            "topic": "Hospital",
            "val": 0.03764174915614274
          },
          {
            "topic": "Beauty",
            "val": 0.037471081275837814
          },
          {
            "topic": "Hotel",
            "val": 0.037091819319604646
          },
          {
            "topic": "Uptown",
            "val": 0.03513862024500379
          },
          {
            "topic": "Government",
            "val": 0.03032199340084253
          }
        ]
      },
      {
        "site": "22279",
        "startTime": "2014-01-14 11:08:47.94",
        "endTime": "2014-01-14 11:10:31.38",
        "stopTime": 103,
        "isStop": false,
        "latitude": 28.0158,
        "longitude": 120.5944,
        "topics": [
          {
            "topic": "Uptown",
            "val": 0.08033067650352499
          },
          {
            "topic": "Food",
            "val": 0.06929714775047831
          },
          {
            "topic": "Traffic",
            "val": 0.06844081417561503
          },
          {
            "topic": "Shop",
            "val": 0.05961399117317777
          },
          {
            "topic": "Scenicspot",
            "val": 0.058066003557078714
          },
          {
            "topic": "Beauty",
            "val": 0.05776958039654912
          },
          {
            "topic": "Hotel",
            "val": 0.056979118635136806
          },
          {
            "topic": "Finance",
            "val": 0.056023977340097
          },
          {
            "topic": "Hospital",
            "val": 0.05539819511231224
          },
          {
            "topic": "Education",
            "val": 0.05358672024240912
          },
          {
            "topic": "Life",
            "val": 0.052796258480996824
          },
          {
            "topic": "Enterprise",
            "val": 0.052631578947369265
          },
          {
            "topic": "Government",
            "val": 0.052631578947369265
          }
        ]
      },
      {
        "site": "24824",
        "startTime": "2014-01-14 11:10:31.38",
        "endTime": "2014-01-14 11:10:37.2",
        "stopTime": 5,
        "isStop": false,
        "latitude": 28.0142,
        "longitude": 120.5975,
        "topics": [
          {
            "topic": "Shop",
            "val": 0.12987308515809998
          },
          {
            "topic": "Beauty",
            "val": 0.09217099887255777
          },
          {
            "topic": "Hospital",
            "val": 0.07489734068411938
          },
          {
            "topic": "Finance",
            "val": 0.06812234301140871
          },
          {
            "topic": "Education",
            "val": 0.06657081682681823
          },
          {
            "topic": "Uptown",
            "val": 0.054386164523836336
          },
          {
            "topic": "Hotel",
            "val": 0.045790709461206607
          },
          {
            "topic": "Food",
            "val": 0.033399187000279204
          },
          {
            "topic": "Traffic",
            "val": 0.033088881763361194
          },
          {
            "topic": "Life",
            "val": 0.03084434054965407
          },
          {
            "topic": "Scenicspot",
            "val": 0.03023407358371527
          },
          {
            "topic": "Government",
            "val": 0.024348617590169434
          },
          {
            "topic": "Enterprise",
            "val": 0.016539269127731883
          }
        ]
      },
      {
        "site": "22279",
        "startTime": "2014-01-14 11:10:37.2",
        "endTime": "2014-01-14 11:10:55.83",
        "stopTime": 18,
        "isStop": false,
        "latitude": 28.0158,
        "longitude": 120.5944,
        "topics": [
          {
            "topic": "Uptown",
            "val": 0.08033067650352499
          },
          {
            "topic": "Food",
            "val": 0.06929714775047831
          },
          {
            "topic": "Traffic",
            "val": 0.06844081417561503
          },
          {
            "topic": "Shop",
            "val": 0.05961399117317777
          },
          {
            "topic": "Scenicspot",
            "val": 0.058066003557078714
          },
          {
            "topic": "Beauty",
            "val": 0.05776958039654912
          },
          {
            "topic": "Hotel",
            "val": 0.056979118635136806
          },
          {
            "topic": "Finance",
            "val": 0.056023977340097
          },
          {
            "topic": "Hospital",
            "val": 0.05539819511231224
          },
          {
            "topic": "Education",
            "val": 0.05358672024240912
          },
          {
            "topic": "Life",
            "val": 0.052796258480996824
          },
          {
            "topic": "Enterprise",
            "val": 0.052631578947369265
          },
          {
            "topic": "Government",
            "val": 0.052631578947369265
          }
        ]
      },
      {
        "site": "20403",
        "startTime": "2014-01-14 11:10:55.83",
        "endTime": "2014-01-14 11:23:53.6",
        "stopTime": 777,
        "isStop": false,
        "latitude": 28.0174,
        "longitude": 120.6061,
        "topics": [
          {
            "topic": "Uptown",
            "val": 0.17861612730198448
          },
          {
            "topic": "Life",
            "val": 0.0719777272611178
          },
          {
            "topic": "Finance",
            "val": 0.06891267145155973
          },
          {
            "topic": "Education",
            "val": 0.06783990191821443
          },
          {
            "topic": "Traffic",
            "val": 0.06584761564200177
          },
          {
            "topic": "Shop",
            "val": 0.05269341779264905
          },
          {
            "topic": "Hospital",
            "val": 0.04901535082117966
          },
          {
            "topic": "Scenicspot",
            "val": 0.047304027994176524
          },
          {
            "topic": "Hotel",
            "val": 0.04577150008939768
          },
          {
            "topic": "Beauty",
            "val": 0.04367704528619991
          },
          {
            "topic": "Food",
            "val": 0.04091849505759799
          },
          {
            "topic": "Enterprise",
            "val": 0.040816326530612734
          },
          {
            "topic": "Government",
            "val": 0.040816326530612734
          }
        ]
      },
      {
        "site": "22279",
        "startTime": "2014-01-14 11:23:53.6",
        "endTime": "2014-01-14 11:24:36.94",
        "stopTime": 43,
        "isStop": false,
        "latitude": 28.0158,
        "longitude": 120.5944,
        "topics": [
          {
            "topic": "Uptown",
            "val": 0.08033067650352499
          },
          {
            "topic": "Food",
            "val": 0.06929714775047831
          },
          {
            "topic": "Traffic",
            "val": 0.06844081417561503
          },
          {
            "topic": "Shop",
            "val": 0.05961399117317777
          },
          {
            "topic": "Scenicspot",
            "val": 0.058066003557078714
          },
          {
            "topic": "Beauty",
            "val": 0.05776958039654912
          },
          {
            "topic": "Hotel",
            "val": 0.056979118635136806
          },
          {
            "topic": "Finance",
            "val": 0.056023977340097
          },
          {
            "topic": "Hospital",
            "val": 0.05539819511231224
          },
          {
            "topic": "Education",
            "val": 0.05358672024240912
          },
          {
            "topic": "Life",
            "val": 0.052796258480996824
          },
          {
            "topic": "Enterprise",
            "val": 0.052631578947369265
          },
          {
            "topic": "Government",
            "val": 0.052631578947369265
          }
        ]
      },
      {
        "site": "5291",
        "startTime": "2014-01-14 11:24:36.94",
        "endTime": "2014-01-14 11:26:43.12",
        "stopTime": 126,
        "isStop": false,
        "latitude": 28.011,
        "longitude": 120.6061
      },
      {
        "site": "20403",
        "startTime": "2014-01-14 11:26:43.12",
        "endTime": "2014-01-14 11:28:47.32",
        "stopTime": 124,
        "isStop": false,
        "latitude": 28.0174,
        "longitude": 120.6061,
        "topics": [
          {
            "topic": "Uptown",
            "val": 0.17861612730198448
          },
          {
            "topic": "Life",
            "val": 0.0719777272611178
          },
          {
            "topic": "Finance",
            "val": 0.06891267145155973
          },
          {
            "topic": "Education",
            "val": 0.06783990191821443
          },
          {
            "topic": "Traffic",
            "val": 0.06584761564200177
          },
          {
            "topic": "Shop",
            "val": 0.05269341779264905
          },
          {
            "topic": "Hospital",
            "val": 0.04901535082117966
          },
          {
            "topic": "Scenicspot",
            "val": 0.047304027994176524
          },
          {
            "topic": "Hotel",
            "val": 0.04577150008939768
          },
          {
            "topic": "Beauty",
            "val": 0.04367704528619991
          },
          {
            "topic": "Food",
            "val": 0.04091849505759799
          },
          {
            "topic": "Enterprise",
            "val": 0.040816326530612734
          },
          {
            "topic": "Government",
            "val": 0.040816326530612734
          }
        ]
      },
      {
        "site": "28682",
        "startTime": "2014-01-14 11:28:47.32",
        "endTime": "2014-01-14 11:34:37.34",
        "stopTime": 350,
        "isStop": false,
        "latitude": 28.019,
        "longitude": 120.6119,
        "topics": [
          {
            "topic": "Life",
            "val": 0.10001021685269881
          },
          {
            "topic": "Shop",
            "val": 0.09371408137723194
          },
          {
            "topic": "Uptown",
            "val": 0.08204132716916603
          },
          {
            "topic": "Government",
            "val": 0.08110903936042595
          },
          {
            "topic": "Education",
            "val": 0.06597532630073337
          },
          {
            "topic": "Beauty",
            "val": 0.06506858062373914
          },
          {
            "topic": "Finance",
            "val": 0.06343388419197486
          },
          {
            "topic": "Hospital",
            "val": 0.051901611708513345
          },
          {
            "topic": "Hotel",
            "val": 0.03856861893693669
          },
          {
            "topic": "Food",
            "val": 0.03473729917498923
          },
          {
            "topic": "Enterprise",
            "val": 0.030969834742407613
          },
          {
            "topic": "Scenicspot",
            "val": 0.0208423795049937
          },
          {
            "topic": "Traffic",
            "val": 0.020433705397052682
          }
        ]
      },
      {
        "site": "4909",
        "startTime": "2014-01-14 11:34:37.34",
        "endTime": "2014-01-14 11:34:45.39",
        "stopTime": 8,
        "isStop": false,
        "latitude": 28.0223,
        "longitude": 120.6044,
        "topics": [
          {
            "topic": "Finance",
            "val": 0.1441906549853978
          },
          {
            "topic": "Hospital",
            "val": 0.07867473230426918
          },
          {
            "topic": "Hotel",
            "val": 0.06478584341538034
          },
          {
            "topic": "Enterprise",
            "val": 0.06342998192184673
          },
          {
            "topic": "Food",
            "val": 0.06217841746627724
          },
          {
            "topic": "Life",
            "val": 0.058058684466694474
          },
          {
            "topic": "Education",
            "val": 0.05133152551800871
          },
          {
            "topic": "Shop",
            "val": 0.04973230426922564
          },
          {
            "topic": "Uptown",
            "val": 0.04653386177165927
          },
          {
            "topic": "Beauty",
            "val": 0.04403073286052045
          },
          {
            "topic": "Traffic",
            "val": 0.04283131692393322
          },
          {
            "topic": "Scenicspot",
            "val": 0.032418995967181674
          },
          {
            "topic": "Government",
            "val": 0.02781254345709962
          }
        ]
      },
      {
        "site": "22279",
        "startTime": "2014-01-14 11:34:45.39",
        "endTime": "2014-01-14 11:37:09.16",
        "stopTime": 143,
        "isStop": false,
        "latitude": 28.0158,
        "longitude": 120.5944,
        "topics": [
          {
            "topic": "Uptown",
            "val": 0.08033067650352499
          },
          {
            "topic": "Food",
            "val": 0.06929714775047831
          },
          {
            "topic": "Traffic",
            "val": 0.06844081417561503
          },
          {
            "topic": "Shop",
            "val": 0.05961399117317777
          },
          {
            "topic": "Scenicspot",
            "val": 0.058066003557078714
          },
          {
            "topic": "Beauty",
            "val": 0.05776958039654912
          },
          {
            "topic": "Hotel",
            "val": 0.056979118635136806
          },
          {
            "topic": "Finance",
            "val": 0.056023977340097
          },
          {
            "topic": "Hospital",
            "val": 0.05539819511231224
          },
          {
            "topic": "Education",
            "val": 0.05358672024240912
          },
          {
            "topic": "Life",
            "val": 0.052796258480996824
          },
          {
            "topic": "Enterprise",
            "val": 0.052631578947369265
          },
          {
            "topic": "Government",
            "val": 0.052631578947369265
          }
        ]
      },
      {
        "site": "10451",
        "startTime": "2014-01-14 11:37:09.16",
        "endTime": "2014-01-14 12:00:18.0",
        "stopTime": 1388,
        "isStop": true,
        "latitude": 28.0147,
        "longitude": 120.6101,
        "topics": [
          {
            "topic": "Uptown",
            "val": 0.11825828797625022
          },
          {
            "topic": "Life",
            "val": 0.08333090782082202
          },
          {
            "topic": "Enterprise",
            "val": 0.06091917222108938
          },
          {
            "topic": "Traffic",
            "val": 0.06027883691823973
          },
          {
            "topic": "Hospital",
            "val": 0.053788165439356474
          },
          {
            "topic": "Shop",
            "val": 0.05349710393806126
          },
          {
            "topic": "Education",
            "val": 0.05189626568093761
          },
          {
            "topic": "Scenicspot",
            "val": 0.05076112582588634
          },
          {
            "topic": "Finance",
            "val": 0.04924760601915125
          },
          {
            "topic": "Hotel",
            "val": 0.04654073405710585
          },
          {
            "topic": "Food",
            "val": 0.04651162790697633
          },
          {
            "topic": "Government",
            "val": 0.04651162790697633
          },
          {
            "topic": "Beauty",
            "val": 0.04651162790697633
          }
        ]
      },
      {
        "site": "22279",
        "startTime": "2014-01-14 12:00:18.0",
        "endTime": "2014-01-14 12:04:02.0",
        "stopTime": 224,
        "isStop": false,
        "latitude": 28.0158,
        "longitude": 120.5944,
        "topics": [
          {
            "topic": "Uptown",
            "val": 0.08033067650352499
          },
          {
            "topic": "Food",
            "val": 0.06929714775047831
          },
          {
            "topic": "Traffic",
            "val": 0.06844081417561503
          },
          {
            "topic": "Shop",
            "val": 0.05961399117317777
          },
          {
            "topic": "Scenicspot",
            "val": 0.058066003557078714
          },
          {
            "topic": "Beauty",
            "val": 0.05776958039654912
          },
          {
            "topic": "Hotel",
            "val": 0.056979118635136806
          },
          {
            "topic": "Finance",
            "val": 0.056023977340097
          },
          {
            "topic": "Hospital",
            "val": 0.05539819511231224
          },
          {
            "topic": "Education",
            "val": 0.05358672024240912
          },
          {
            "topic": "Life",
            "val": 0.052796258480996824
          },
          {
            "topic": "Enterprise",
            "val": 0.052631578947369265
          },
          {
            "topic": "Government",
            "val": 0.052631578947369265
          }
        ]
      },
      {
        "site": "6019",
        "startTime": "2014-01-14 12:04:02.0",
        "endTime": "2014-01-14 12:16:33.79",
        "stopTime": 751,
        "isStop": false,
        "latitude": 28.0259,
        "longitude": 120.6042,
        "topics": [
          {
            "topic": "Enterprise",
            "val": 0.0802670004171887
          },
          {
            "topic": "Shop",
            "val": 0.07028229731609004
          },
          {
            "topic": "Food",
            "val": 0.057627590043109876
          },
          {
            "topic": "Hotel",
            "val": 0.05740508969545288
          },
          {
            "topic": "Beauty",
            "val": 0.055819774718398156
          },
          {
            "topic": "Finance",
            "val": 0.05529133639271321
          },
          {
            "topic": "Uptown",
            "val": 0.04933945209289388
          },
          {
            "topic": "Life",
            "val": 0.04475038242247239
          },
          {
            "topic": "Hospital",
            "val": 0.044527882074815596
          },
          {
            "topic": "Education",
            "val": 0.044527882074815596
          },
          {
            "topic": "Traffic",
            "val": 0.04444444444444431
          },
          {
            "topic": "Scenicspot",
            "val": 0.04444444444444431
          },
          {
            "topic": "Government",
            "val": 0.04444444444444431
          }
        ]
      },
      {
        "site": "2795",
        "startTime": "2014-01-14 12:16:33.79",
        "endTime": "2014-01-14 13:06:10.68",
        "stopTime": 2976,
        "isStop": true,
        "latitude": 28.0244,
        "longitude": 120.603,
        "topics": [
          {
            "topic": "Shop",
            "val": 0.12251425392852172
          },
          {
            "topic": "Finance",
            "val": 0.07731887081073538
          },
          {
            "topic": "Enterprise",
            "val": 0.06602388788454677
          },
          {
            "topic": "Hotel",
            "val": 0.055934115174832384
          },
          {
            "topic": "Beauty",
            "val": 0.05417265408921638
          },
          {
            "topic": "Food",
            "val": 0.04423739550981929
          },
          {
            "topic": "Hospital",
            "val": 0.03773235062346474
          },
          {
            "topic": "Traffic",
            "val": 0.03229345323629835
          },
          {
            "topic": "Uptown",
            "val": 0.02863146834778015
          },
          {
            "topic": "Scenicspot",
            "val": 0.026900910088227252
          },
          {
            "topic": "Education",
            "val": 0.025881116828133675
          },
          {
            "topic": "Life",
            "val": 0.025402123024150267
          },
          {
            "topic": "Government",
            "val": 0.024691358024691124
          }
        ]
      },
      {
        "site": "20840",
        "startTime": "2014-01-14 13:06:10.68",
        "endTime": "2014-01-14 13:06:18.25",
        "stopTime": 7,
        "isStop": false,
        "latitude": 28.0246,
        "longitude": 120.5996,
        "topics": [
          {
            "topic": "Shop",
            "val": 0.13852913968547623
          },
          {
            "topic": "Finance",
            "val": 0.06597921314686858
          },
          {
            "topic": "Government",
            "val": 0.06468683680687923
          },
          {
            "topic": "Hospital",
            "val": 0.06414267834793513
          },
          {
            "topic": "Enterprise",
            "val": 0.050620340643195275
          },
          {
            "topic": "Life",
            "val": 0.04657996408554174
          },
          {
            "topic": "Traffic",
            "val": 0.04217228056810169
          },
          {
            "topic": "Beauty",
            "val": 0.03553354736899442
          },
          {
            "topic": "Food",
            "val": 0.027575229906949026
          },
          {
            "topic": "Education",
            "val": 0.026813408064428376
          },
          {
            "topic": "Scenicspot",
            "val": 0.02660934864232465
          },
          {
            "topic": "Hotel",
            "val": 0.023725308809925485
          },
          {
            "topic": "Uptown",
            "val": 0.022568972084671082
          }
        ]
      },
      {
        "site": "4909",
        "startTime": "2014-01-14 13:06:18.25",
        "endTime": "2014-01-14 13:11:04.66",
        "stopTime": 286,
        "isStop": false,
        "latitude": 28.0223,
        "longitude": 120.6044,
        "topics": [
          {
            "topic": "Finance",
            "val": 0.1441906549853978
          },
          {
            "topic": "Hospital",
            "val": 0.07867473230426918
          },
          {
            "topic": "Hotel",
            "val": 0.06478584341538034
          },
          {
            "topic": "Enterprise",
            "val": 0.06342998192184673
          },
          {
            "topic": "Food",
            "val": 0.06217841746627724
          },
          {
            "topic": "Life",
            "val": 0.058058684466694474
          },
          {
            "topic": "Education",
            "val": 0.05133152551800871
          },
          {
            "topic": "Shop",
            "val": 0.04973230426922564
          },
          {
            "topic": "Uptown",
            "val": 0.04653386177165927
          },
          {
            "topic": "Beauty",
            "val": 0.04403073286052045
          },
          {
            "topic": "Traffic",
            "val": 0.04283131692393322
          },
          {
            "topic": "Scenicspot",
            "val": 0.032418995967181674
          },
          {
            "topic": "Government",
            "val": 0.02781254345709962
          }
        ]
      },
      {
        "site": "58",
        "startTime": "2014-01-14 13:11:04.66",
        "endTime": "2014-01-14 14:03:49.87",
        "stopTime": 3165,
        "isStop": true,
        "latitude": 28.0271,
        "longitude": 120.6009,
        "topics": [
          {
            "topic": "Enterprise",
            "val": 0.06455986649979234
          },
          {
            "topic": "Shop",
            "val": 0.06382978723404346
          },
          {
            "topic": "Finance",
            "val": 0.05899735780837252
          },
          {
            "topic": "Life",
            "val": 0.05565985259352062
          },
          {
            "topic": "Scenicspot",
            "val": 0.05559032123487788
          },
          {
            "topic": "Education",
            "val": 0.05559032123487787
          },
          {
            "topic": "Traffic",
            "val": 0.0555555555555565
          },
          {
            "topic": "Uptown",
            "val": 0.0555555555555565
          },
          {
            "topic": "Food",
            "val": 0.0555555555555565
          },
          {
            "topic": "Hospital",
            "val": 0.0555555555555565
          },
          {
            "topic": "Hotel",
            "val": 0.0555555555555565
          },
          {
            "topic": "Government",
            "val": 0.0555555555555565
          },
          {
            "topic": "Beauty",
            "val": 0.0555555555555565
          }
        ]
      },
      {
        "site": "2795",
        "startTime": "2014-01-14 14:03:49.87",
        "endTime": "2014-01-14 14:06:46.03",
        "stopTime": 176,
        "isStop": false,
        "latitude": 28.0244,
        "longitude": 120.603,
        "topics": [
          {
            "topic": "Shop",
            "val": 0.12251425392852172
          },
          {
            "topic": "Finance",
            "val": 0.07731887081073538
          },
          {
            "topic": "Enterprise",
            "val": 0.06602388788454677
          },
          {
            "topic": "Hotel",
            "val": 0.055934115174832384
          },
          {
            "topic": "Beauty",
            "val": 0.05417265408921638
          },
          {
            "topic": "Food",
            "val": 0.04423739550981929
          },
          {
            "topic": "Hospital",
            "val": 0.03773235062346474
          },
          {
            "topic": "Traffic",
            "val": 0.03229345323629835
          },
          {
            "topic": "Uptown",
            "val": 0.02863146834778015
          },
          {
            "topic": "Scenicspot",
            "val": 0.026900910088227252
          },
          {
            "topic": "Education",
            "val": 0.025881116828133675
          },
          {
            "topic": "Life",
            "val": 0.025402123024150267
          },
          {
            "topic": "Government",
            "val": 0.024691358024691124
          }
        ]
      },
      {
        "site": "4909",
        "startTime": "2014-01-14 14:06:46.03",
        "endTime": "2014-01-14 16:06:47.91",
        "stopTime": 7201,
        "isStop": true,
        "latitude": 28.0223,
        "longitude": 120.6044,
        "topics": [
          {
            "topic": "Finance",
            "val": 0.1441906549853978
          },
          {
            "topic": "Hospital",
            "val": 0.07867473230426918
          },
          {
            "topic": "Hotel",
            "val": 0.06478584341538034
          },
          {
            "topic": "Enterprise",
            "val": 0.06342998192184673
          },
          {
            "topic": "Food",
            "val": 0.06217841746627724
          },
          {
            "topic": "Life",
            "val": 0.058058684466694474
          },
          {
            "topic": "Education",
            "val": 0.05133152551800871
          },
          {
            "topic": "Shop",
            "val": 0.04973230426922564
          },
          {
            "topic": "Uptown",
            "val": 0.04653386177165927
          },
          {
            "topic": "Beauty",
            "val": 0.04403073286052045
          },
          {
            "topic": "Traffic",
            "val": 0.04283131692393322
          },
          {
            "topic": "Scenicspot",
            "val": 0.032418995967181674
          },
          {
            "topic": "Government",
            "val": 0.02781254345709962
          }
        ]
      },
      {
        "site": "22279",
        "startTime": "2014-01-14 16:06:47.91",
        "endTime": "2014-01-14 17:14:24.45",
        "stopTime": 4056,
        "isStop": true,
        "stoppoint": 1,
        "latitude": 28.0158,
        "longitude": 120.5944,
        "topics": [
          {
            "topic": "Uptown",
            "val": 0.08033067650352499
          },
          {
            "topic": "Food",
            "val": 0.06929714775047831
          },
          {
            "topic": "Traffic",
            "val": 0.06844081417561503
          },
          {
            "topic": "Shop",
            "val": 0.05961399117317777
          },
          {
            "topic": "Scenicspot",
            "val": 0.058066003557078714
          },
          {
            "topic": "Beauty",
            "val": 0.05776958039654912
          },
          {
            "topic": "Hotel",
            "val": 0.056979118635136806
          },
          {
            "topic": "Finance",
            "val": 0.056023977340097
          },
          {
            "topic": "Hospital",
            "val": 0.05539819511231224
          },
          {
            "topic": "Education",
            "val": 0.05358672024240912
          },
          {
            "topic": "Life",
            "val": 0.052796258480996824
          },
          {
            "topic": "Enterprise",
            "val": 0.052631578947369265
          },
          {
            "topic": "Government",
            "val": 0.052631578947369265
          }
        ]
      }
    ],
    "matching": true
  },
  {
    "pid": "460000112828695",
    "traj": [
      {
        "site": "25950",
        "isStop": true,
        "startTime": "2014-01-14 01:48:49.41",
        "endTime": "2014-01-14 03:48:51.03",
        "stopTime": 7201,
        "stoppoint": 0,
        "latitude": 27.9561,
        "longitude": 120.6516,
        "topics": [
          {
            "topic": "Shop",
            "val": 0.14022651264900798
          },
          {
            "topic": "Beauty",
            "val": 0.09580110383881471
          },
          {
            "topic": "Hotel",
            "val": 0.06422987751082282
          },
          {
            "topic": "Hospital",
            "val": 0.053052996573585816
          },
          {
            "topic": "Enterprise",
            "val": 0.04390221383286483
          },
          {
            "topic": "Food",
            "val": 0.04095283038224008
          },
          {
            "topic": "Finance",
            "val": 0.03994234596524333
          },
          {
            "topic": "Education",
            "val": 0.03696731570200442
          },
          {
            "topic": "Government",
            "val": 0.028396150926362478
          },
          {
            "topic": "Life",
            "val": 0.023630973142657805
          },
          {
            "topic": "Uptown",
            "val": 0.016075422146535526
          },
          {
            "topic": "Traffic",
            "val": 0.016034387246353022
          },
          {
            "topic": "Scenicspot",
            "val": 0.010120232257535009
          }
        ]
      },
      {
        "site": "14253",
        "startTime": "2014-01-14 03:48:51.03",
        "endTime": "2014-01-14 07:48:54.26",
        "stopTime": 14403,
        "isStop": true,
        "latitude": 27.9524,
        "longitude": 120.6491,
        "topics": [
          {
            "topic": "Shop",
            "val": 0.1244530870199317
          },
          {
            "topic": "Beauty",
            "val": 0.09450863165734046
          },
          {
            "topic": "Life",
            "val": 0.0711012732858219
          },
          {
            "topic": "Hospital",
            "val": 0.06783272479028508
          },
          {
            "topic": "Food",
            "val": 0.058337384540592806
          },
          {
            "topic": "Education",
            "val": 0.046566472553501694
          },
          {
            "topic": "Enterprise",
            "val": 0.041580901747018444
          },
          {
            "topic": "Hotel",
            "val": 0.0325303323369088
          },
          {
            "topic": "Government",
            "val": 0.03243724076583319
          },
          {
            "topic": "Scenicspot",
            "val": 0.030492661281146936
          },
          {
            "topic": "Traffic",
            "val": 0.02827915059113151
          },
          {
            "topic": "Finance",
            "val": 0.024741670890265584
          },
          {
            "topic": "Uptown",
            "val": 0.017852894630684908
          }
        ]
      },
      {
        "site": "1180",
        "startTime": "2014-01-14 07:48:54.26",
        "endTime": "2014-01-14 07:53:49.77",
        "stopTime": 295,
        "isStop": false,
        "latitude": 27.951,
        "longitude": 120.6569,
        "topics": [
          {
            "topic": "Uptown",
            "val": 0.11924741993064933
          },
          {
            "topic": "Traffic",
            "val": 0.1069985022261426
          },
          {
            "topic": "Finance",
            "val": 0.09639098052893957
          },
          {
            "topic": "Enterprise",
            "val": 0.07058002831408126
          },
          {
            "topic": "Education",
            "val": 0.05457641724286526
          },
          {
            "topic": "Shop",
            "val": 0.04905722316830481
          },
          {
            "topic": "Life",
            "val": 0.04454338414821841
          },
          {
            "topic": "Scenicspot",
            "val": 0.04400993044584429
          },
          {
            "topic": "Hospital",
            "val": 0.04031678942940961
          },
          {
            "topic": "Beauty",
            "val": 0.032827920146083905
          },
          {
            "topic": "Hotel",
            "val": 0.0328074026959926
          },
          {
            "topic": "Food",
            "val": 0.0327868852459013
          },
          {
            "topic": "Government",
            "val": 0.0327868852459013
          }
        ]
      },
      {
        "site": "25950",
        "startTime": "2014-01-14 07:53:49.77",
        "endTime": "2014-01-14 07:55:46.74",
        "stopTime": 116,
        "isStop": false,
        "latitude": 27.9561,
        "longitude": 120.6516,
        "topics": [
          {
            "topic": "Shop",
            "val": 0.14022651264900798
          },
          {
            "topic": "Beauty",
            "val": 0.09580110383881471
          },
          {
            "topic": "Hotel",
            "val": 0.06422987751082282
          },
          {
            "topic": "Hospital",
            "val": 0.053052996573585816
          },
          {
            "topic": "Enterprise",
            "val": 0.04390221383286483
          },
          {
            "topic": "Food",
            "val": 0.04095283038224008
          },
          {
            "topic": "Finance",
            "val": 0.03994234596524333
          },
          {
            "topic": "Education",
            "val": 0.03696731570200442
          },
          {
            "topic": "Government",
            "val": 0.028396150926362478
          },
          {
            "topic": "Life",
            "val": 0.023630973142657805
          },
          {
            "topic": "Uptown",
            "val": 0.016075422146535526
          },
          {
            "topic": "Traffic",
            "val": 0.016034387246353022
          },
          {
            "topic": "Scenicspot",
            "val": 0.010120232257535009
          }
        ]
      },
      {
        "site": "1180",
        "startTime": "2014-01-14 07:55:46.74",
        "endTime": "2014-01-14 08:40:37.46",
        "stopTime": 2690,
        "isStop": true,
        "latitude": 27.951,
        "longitude": 120.6569,
        "topics": [
          {
            "topic": "Uptown",
            "val": 0.11924741993064933
          },
          {
            "topic": "Traffic",
            "val": 0.1069985022261426
          },
          {
            "topic": "Finance",
            "val": 0.09639098052893957
          },
          {
            "topic": "Enterprise",
            "val": 0.07058002831408126
          },
          {
            "topic": "Education",
            "val": 0.05457641724286526
          },
          {
            "topic": "Shop",
            "val": 0.04905722316830481
          },
          {
            "topic": "Life",
            "val": 0.04454338414821841
          },
          {
            "topic": "Scenicspot",
            "val": 0.04400993044584429
          },
          {
            "topic": "Hospital",
            "val": 0.04031678942940961
          },
          {
            "topic": "Beauty",
            "val": 0.032827920146083905
          },
          {
            "topic": "Hotel",
            "val": 0.0328074026959926
          },
          {
            "topic": "Food",
            "val": 0.0327868852459013
          },
          {
            "topic": "Government",
            "val": 0.0327868852459013
          }
        ]
      },
      {
        "site": "14253",
        "startTime": "2014-01-14 08:40:37.46",
        "endTime": "2014-01-14 09:03:27.39",
        "stopTime": 1369,
        "isStop": true,
        "latitude": 27.9524,
        "longitude": 120.6491,
        "topics": [
          {
            "topic": "Shop",
            "val": 0.1244530870199317
          },
          {
            "topic": "Beauty",
            "val": 0.09450863165734046
          },
          {
            "topic": "Life",
            "val": 0.0711012732858219
          },
          {
            "topic": "Hospital",
            "val": 0.06783272479028508
          },
          {
            "topic": "Food",
            "val": 0.058337384540592806
          },
          {
            "topic": "Education",
            "val": 0.046566472553501694
          },
          {
            "topic": "Enterprise",
            "val": 0.041580901747018444
          },
          {
            "topic": "Hotel",
            "val": 0.0325303323369088
          },
          {
            "topic": "Government",
            "val": 0.03243724076583319
          },
          {
            "topic": "Scenicspot",
            "val": 0.030492661281146936
          },
          {
            "topic": "Traffic",
            "val": 0.02827915059113151
          },
          {
            "topic": "Finance",
            "val": 0.024741670890265584
          },
          {
            "topic": "Uptown",
            "val": 0.017852894630684908
          }
        ]
      },
      {
        "site": "1180",
        "startTime": "2014-01-14 09:03:27.39",
        "endTime": "2014-01-14 10:19:55.49",
        "stopTime": 4588,
        "isStop": true,
        "latitude": 27.951,
        "longitude": 120.6569,
        "topics": [
          {
            "topic": "Uptown",
            "val": 0.11924741993064933
          },
          {
            "topic": "Traffic",
            "val": 0.1069985022261426
          },
          {
            "topic": "Finance",
            "val": 0.09639098052893957
          },
          {
            "topic": "Enterprise",
            "val": 0.07058002831408126
          },
          {
            "topic": "Education",
            "val": 0.05457641724286526
          },
          {
            "topic": "Shop",
            "val": 0.04905722316830481
          },
          {
            "topic": "Life",
            "val": 0.04454338414821841
          },
          {
            "topic": "Scenicspot",
            "val": 0.04400993044584429
          },
          {
            "topic": "Hospital",
            "val": 0.04031678942940961
          },
          {
            "topic": "Beauty",
            "val": 0.032827920146083905
          },
          {
            "topic": "Hotel",
            "val": 0.0328074026959926
          },
          {
            "topic": "Food",
            "val": 0.0327868852459013
          },
          {
            "topic": "Government",
            "val": 0.0327868852459013
          }
        ]
      },
      {
        "site": "25950",
        "startTime": "2014-01-14 10:19:55.49",
        "endTime": "2014-01-14 16:58:16.06",
        "stopTime": 23900,
        "isStop": true,
        "stoppoint": 1,
        "latitude": 27.9561,
        "longitude": 120.6516,
        "topics": [
          {
            "topic": "Shop",
            "val": 0.14022651264900798
          },
          {
            "topic": "Beauty",
            "val": 0.09580110383881471
          },
          {
            "topic": "Hotel",
            "val": 0.06422987751082282
          },
          {
            "topic": "Hospital",
            "val": 0.053052996573585816
          },
          {
            "topic": "Enterprise",
            "val": 0.04390221383286483
          },
          {
            "topic": "Food",
            "val": 0.04095283038224008
          },
          {
            "topic": "Finance",
            "val": 0.03994234596524333
          },
          {
            "topic": "Education",
            "val": 0.03696731570200442
          },
          {
            "topic": "Government",
            "val": 0.028396150926362478
          },
          {
            "topic": "Life",
            "val": 0.023630973142657805
          },
          {
            "topic": "Uptown",
            "val": 0.016075422146535526
          },
          {
            "topic": "Traffic",
            "val": 0.016034387246353022
          },
          {
            "topic": "Scenicspot",
            "val": 0.010120232257535009
          }
        ]
      }
    ],
    "matching": true
  }
]

let mockData20 = [
  {
    "pid": "460000102807196",
    "traj": [
      {
        "site": "8176",
        "startTime": "2014-01-14 08:11:27.72",
        "endTime": "2014-01-14 09:32:31.47",
        "stopTime": 4863,
        "isStop": true,
        "stoppoint": 0,
        "latitude": 28.0661,
        "longitude": 120.5849,
        "topics": [
          {
            "topic": "Finance",
            "val": 0.11324407307695748
          },
          {
            "topic": "Beauty",
            "val": 0.09246270067800577
          },
          {
            "topic": "Shop",
            "val": 0.09086898191084185
          },
          {
            "topic": "Life",
            "val": 0.07157327954907657
          },
          {
            "topic": "Government",
            "val": 0.07143821863660578
          },
          {
            "topic": "Education",
            "val": 0.06587370904277809
          },
          {
            "topic": "Hospital",
            "val": 0.057193794401274915
          },
          {
            "topic": "Uptown",
            "val": 0.045488515320409664
          },
          {
            "topic": "Enterprise",
            "val": 0.03375622405704983
          },
          {
            "topic": "Food",
            "val": 0.03163126570083121
          },
          {
            "topic": "Hotel",
            "val": 0.029524315466275285
          },
          {
            "topic": "Scenicspot",
            "val": 0.025859662707881276
          },
          {
            "topic": "Traffic",
            "val": 0.024689134799794756
          }
        ]
      },
      {
        "site": "293",
        "startTime": "2014-01-14 09:32:31.47",
        "endTime": "2014-01-14 09:39:05.54",
        "stopTime": 394,
        "isStop": false,
        "latitude": 28.0735,
        "longitude": 120.5847,
        "topics": [
          {
            "topic": "Uptown",
            "val": 0.08999886221413254
          },
          {
            "topic": "Shop",
            "val": 0.08118102173171084
          },
          {
            "topic": "Enterprise",
            "val": 0.06875071111616862
          },
          {
            "topic": "Finance",
            "val": 0.0548697235180345
          },
          {
            "topic": "Education",
            "val": 0.04633632950278818
          },
          {
            "topic": "Life",
            "val": 0.04568210262828601
          },
          {
            "topic": "Beauty",
            "val": 0.04559676868813354
          },
          {
            "topic": "Hospital",
            "val": 0.04551143474798108
          },
          {
            "topic": "Hotel",
            "val": 0.045511434747981076
          },
          {
            "topic": "Traffic",
            "val": 0.04545454545454611
          },
          {
            "topic": "Scenicspot",
            "val": 0.04545454545454611
          },
          {
            "topic": "Food",
            "val": 0.04545454545454611
          },
          {
            "topic": "Government",
            "val": 0.04545454545454611
          }
        ]
      },
      {
        "site": "8176",
        "startTime": "2014-01-14 09:39:05.54",
        "endTime": "2014-01-14 10:43:22.4",
        "stopTime": 3856,
        "isStop": true,
        "stoppoint": 1,
        "latitude": 28.0661,
        "longitude": 120.5849,
        "topics": [
          {
            "topic": "Finance",
            "val": 0.11324407307695748
          },
          {
            "topic": "Beauty",
            "val": 0.09246270067800577
          },
          {
            "topic": "Shop",
            "val": 0.09086898191084185
          },
          {
            "topic": "Life",
            "val": 0.07157327954907657
          },
          {
            "topic": "Government",
            "val": 0.07143821863660578
          },
          {
            "topic": "Education",
            "val": 0.06587370904277809
          },
          {
            "topic": "Hospital",
            "val": 0.057193794401274915
          },
          {
            "topic": "Uptown",
            "val": 0.045488515320409664
          },
          {
            "topic": "Enterprise",
            "val": 0.03375622405704983
          },
          {
            "topic": "Food",
            "val": 0.03163126570083121
          },
          {
            "topic": "Hotel",
            "val": 0.029524315466275285
          },
          {
            "topic": "Scenicspot",
            "val": 0.025859662707881276
          },
          {
            "topic": "Traffic",
            "val": 0.024689134799794756
          }
        ]
      }
    ],
    "matching": true
  },
  {
    "pid": "410060006060278",
    "traj": [
      {
        "site": "8176",
        "isStop": true,
        "startTime": "2014-01-13 23:54:27.51",
        "endTime": "2014-01-14 09:59:39.66",
        "stopTime": 36312,
        "stoppoint": 0,
        "latitude": 28.0661,
        "longitude": 120.5849,
        "topics": [
          {
            "topic": "Finance",
            "val": 0.11324407307695748
          },
          {
            "topic": "Beauty",
            "val": 0.09246270067800577
          },
          {
            "topic": "Shop",
            "val": 0.09086898191084185
          },
          {
            "topic": "Life",
            "val": 0.07157327954907657
          },
          {
            "topic": "Government",
            "val": 0.07143821863660578
          },
          {
            "topic": "Education",
            "val": 0.06587370904277809
          },
          {
            "topic": "Hospital",
            "val": 0.057193794401274915
          },
          {
            "topic": "Uptown",
            "val": 0.045488515320409664
          },
          {
            "topic": "Enterprise",
            "val": 0.03375622405704983
          },
          {
            "topic": "Food",
            "val": 0.03163126570083121
          },
          {
            "topic": "Hotel",
            "val": 0.029524315466275285
          },
          {
            "topic": "Scenicspot",
            "val": 0.025859662707881276
          },
          {
            "topic": "Traffic",
            "val": 0.024689134799794756
          }
        ]
      },
      {
        "site": "293",
        "startTime": "2014-01-14 09:59:39.66",
        "endTime": "2014-01-14 10:06:29.88",
        "stopTime": 410,
        "isStop": false,
        "latitude": 28.0735,
        "longitude": 120.5847,
        "topics": [
          {
            "topic": "Uptown",
            "val": 0.08999886221413254
          },
          {
            "topic": "Shop",
            "val": 0.08118102173171084
          },
          {
            "topic": "Enterprise",
            "val": 0.06875071111616862
          },
          {
            "topic": "Finance",
            "val": 0.0548697235180345
          },
          {
            "topic": "Education",
            "val": 0.04633632950278818
          },
          {
            "topic": "Life",
            "val": 0.04568210262828601
          },
          {
            "topic": "Beauty",
            "val": 0.04559676868813354
          },
          {
            "topic": "Hospital",
            "val": 0.04551143474798108
          },
          {
            "topic": "Hotel",
            "val": 0.045511434747981076
          },
          {
            "topic": "Traffic",
            "val": 0.04545454545454611
          },
          {
            "topic": "Scenicspot",
            "val": 0.04545454545454611
          },
          {
            "topic": "Food",
            "val": 0.04545454545454611
          },
          {
            "topic": "Government",
            "val": 0.04545454545454611
          }
        ]
      },
      {
        "site": "7883",
        "startTime": "2014-01-14 10:06:29.88",
        "endTime": "2014-01-14 12:07:04.99",
        "stopTime": 7235,
        "isStop": true,
        "latitude": 28.0858,
        "longitude": 120.5907,
        "topics": [
          {
            "topic": "Enterprise",
            "val": 0.13559502569701362
          },
          {
            "topic": "Finance",
            "val": 0.04257982052033083
          },
          {
            "topic": "Traffic",
            "val": 0.04257982052033083
          },
          {
            "topic": "Scenicspot",
            "val": 0.04257982052033083
          },
          {
            "topic": "Uptown",
            "val": 0.042553191489361264
          },
          {
            "topic": "Food",
            "val": 0.042553191489361264
          },
          {
            "topic": "Hospital",
            "val": 0.042553191489361264
          },
          {
            "topic": "Life",
            "val": 0.042553191489361264
          },
          {
            "topic": "Hotel",
            "val": 0.042553191489361264
          },
          {
            "topic": "Shop",
            "val": 0.042553191489361264
          },
          {
            "topic": "Government",
            "val": 0.042553191489361264
          },
          {
            "topic": "Beauty",
            "val": 0.042553191489361264
          },
          {
            "topic": "Education",
            "val": 0.042553191489361264
          }
        ]
      },
      {
        "site": "15365",
        "startTime": "2014-01-14 12:07:04.99",
        "endTime": "2014-01-14 12:07:54.47",
        "stopTime": 49,
        "isStop": false,
        "latitude": 28.0858,
        "longitude": 120.5908
      },
      {
        "site": "7883",
        "startTime": "2014-01-14 12:07:54.47",
        "endTime": "2014-01-14 12:07:38.03",
        "stopTime": 86383,
        "isStop": true,
        "latitude": 28.0858,
        "longitude": 120.5907,
        "topics": [
          {
            "topic": "Enterprise",
            "val": 0.13559502569701362
          },
          {
            "topic": "Finance",
            "val": 0.04257982052033083
          },
          {
            "topic": "Traffic",
            "val": 0.04257982052033083
          },
          {
            "topic": "Scenicspot",
            "val": 0.04257982052033083
          },
          {
            "topic": "Uptown",
            "val": 0.042553191489361264
          },
          {
            "topic": "Food",
            "val": 0.042553191489361264
          },
          {
            "topic": "Hospital",
            "val": 0.042553191489361264
          },
          {
            "topic": "Life",
            "val": 0.042553191489361264
          },
          {
            "topic": "Hotel",
            "val": 0.042553191489361264
          },
          {
            "topic": "Shop",
            "val": 0.042553191489361264
          },
          {
            "topic": "Government",
            "val": 0.042553191489361264
          },
          {
            "topic": "Beauty",
            "val": 0.042553191489361264
          },
          {
            "topic": "Education",
            "val": 0.042553191489361264
          }
        ]
      },
      {
        "site": "15365",
        "startTime": "2014-01-14 12:07:38.03",
        "endTime": "2014-01-14 12:07:21.55",
        "stopTime": 86383,
        "isStop": true,
        "latitude": 28.0858,
        "longitude": 120.5908
      },
      {
        "site": "7883",
        "startTime": "2014-01-14 12:07:21.55",
        "endTime": "2014-01-14 12:07:04.99",
        "stopTime": 86383,
        "isStop": true,
        "latitude": 28.0858,
        "longitude": 120.5907,
        "topics": [
          {
            "topic": "Enterprise",
            "val": 0.13559502569701362
          },
          {
            "topic": "Finance",
            "val": 0.04257982052033083
          },
          {
            "topic": "Traffic",
            "val": 0.04257982052033083
          },
          {
            "topic": "Scenicspot",
            "val": 0.04257982052033083
          },
          {
            "topic": "Uptown",
            "val": 0.042553191489361264
          },
          {
            "topic": "Food",
            "val": 0.042553191489361264
          },
          {
            "topic": "Hospital",
            "val": 0.042553191489361264
          },
          {
            "topic": "Life",
            "val": 0.042553191489361264
          },
          {
            "topic": "Hotel",
            "val": 0.042553191489361264
          },
          {
            "topic": "Shop",
            "val": 0.042553191489361264
          },
          {
            "topic": "Government",
            "val": 0.042553191489361264
          },
          {
            "topic": "Beauty",
            "val": 0.042553191489361264
          },
          {
            "topic": "Education",
            "val": 0.042553191489361264
          }
        ]
      },
      {
        "site": "15365",
        "startTime": "2014-01-14 12:07:04.99",
        "endTime": "2014-01-14 14:08:13.34",
        "stopTime": 7268,
        "isStop": true,
        "latitude": 28.0858,
        "longitude": 120.5908
      },
      {
        "site": "8176",
        "startTime": "2014-01-14 14:08:13.34",
        "endTime": "2014-01-14 14:20:44.15",
        "stopTime": 750,
        "isStop": false,
        "latitude": 28.0661,
        "longitude": 120.5849,
        "topics": [
          {
            "topic": "Finance",
            "val": 0.11324407307695748
          },
          {
            "topic": "Beauty",
            "val": 0.09246270067800577
          },
          {
            "topic": "Shop",
            "val": 0.09086898191084185
          },
          {
            "topic": "Life",
            "val": 0.07157327954907657
          },
          {
            "topic": "Government",
            "val": 0.07143821863660578
          },
          {
            "topic": "Education",
            "val": 0.06587370904277809
          },
          {
            "topic": "Hospital",
            "val": 0.057193794401274915
          },
          {
            "topic": "Uptown",
            "val": 0.045488515320409664
          },
          {
            "topic": "Enterprise",
            "val": 0.03375622405704983
          },
          {
            "topic": "Food",
            "val": 0.03163126570083121
          },
          {
            "topic": "Hotel",
            "val": 0.029524315466275285
          },
          {
            "topic": "Scenicspot",
            "val": 0.025859662707881276
          },
          {
            "topic": "Traffic",
            "val": 0.024689134799794756
          }
        ]
      },
      {
        "site": "26263",
        "startTime": "2014-01-14 14:20:44.15",
        "endTime": "2014-01-14 14:30:57.02",
        "stopTime": 612,
        "isStop": false,
        "latitude": 28.0604,
        "longitude": 120.5739,
        "topics": [
          {
            "topic": "Finance",
            "val": 0.05882352941176564
          },
          {
            "topic": "Enterprise",
            "val": 0.05882352941176564
          },
          {
            "topic": "Traffic",
            "val": 0.05882352941176564
          },
          {
            "topic": "Scenicspot",
            "val": 0.05882352941176564
          },
          {
            "topic": "Uptown",
            "val": 0.05882352941176564
          },
          {
            "topic": "Food",
            "val": 0.05882352941176564
          },
          {
            "topic": "Hospital",
            "val": 0.05882352941176564
          },
          {
            "topic": "Life",
            "val": 0.05882352941176564
          },
          {
            "topic": "Hotel",
            "val": 0.05882352941176564
          },
          {
            "topic": "Shop",
            "val": 0.05882352941176564
          },
          {
            "topic": "Government",
            "val": 0.05882352941176564
          },
          {
            "topic": "Beauty",
            "val": 0.05882352941176564
          },
          {
            "topic": "Education",
            "val": 0.05882352941176564
          }
        ]
      },
      {
        "site": "5341",
        "startTime": "2014-01-14 14:30:57.02",
        "endTime": "2014-01-14 15:09:24.13",
        "stopTime": 2307,
        "isStop": true,
        "stoppoint": 1,
        "latitude": 28.0645,
        "longitude": 120.5822,
        "topics": [
          {
            "topic": "Shop",
            "val": 0.16994190499318182
          },
          {
            "topic": "Beauty",
            "val": 0.06976070834812188
          },
          {
            "topic": "Food",
            "val": 0.05689014252890741
          },
          {
            "topic": "Government",
            "val": 0.044318457773709886
          },
          {
            "topic": "Life",
            "val": 0.043842116077933146
          },
          {
            "topic": "Hospital",
            "val": 0.04238507089085231
          },
          {
            "topic": "Education",
            "val": 0.03679973100704248
          },
          {
            "topic": "Finance",
            "val": 0.035520146451721364
          },
          {
            "topic": "Enterprise",
            "val": 0.029196943941120507
          },
          {
            "topic": "Scenicspot",
            "val": 0.025815851904432804
          },
          {
            "topic": "Uptown",
            "val": 0.02431210655109936
          },
          {
            "topic": "Traffic",
            "val": 0.02277100106476395
          },
          {
            "topic": "Hotel",
            "val": 0.020762893915902542
          }
        ]
      }
    ],
    "matching": true
  },
  {
    "pid": "460000050641956",
    "traj": [
      {
        "site": "8176",
        "isStop": true,
        "startTime": "2014-01-13 23:59:19.45",
        "endTime": "2014-01-14 10:40:47.22",
        "stopTime": 38487,
        "stoppoint": 0,
        "latitude": 28.0661,
        "longitude": 120.5849,
        "topics": [
          {
            "topic": "Finance",
            "val": 0.11324407307695748
          },
          {
            "topic": "Beauty",
            "val": 0.09246270067800577
          },
          {
            "topic": "Shop",
            "val": 0.09086898191084185
          },
          {
            "topic": "Life",
            "val": 0.07157327954907657
          },
          {
            "topic": "Government",
            "val": 0.07143821863660578
          },
          {
            "topic": "Education",
            "val": 0.06587370904277809
          },
          {
            "topic": "Hospital",
            "val": 0.057193794401274915
          },
          {
            "topic": "Uptown",
            "val": 0.045488515320409664
          },
          {
            "topic": "Enterprise",
            "val": 0.03375622405704983
          },
          {
            "topic": "Food",
            "val": 0.03163126570083121
          },
          {
            "topic": "Hotel",
            "val": 0.029524315466275285
          },
          {
            "topic": "Scenicspot",
            "val": 0.025859662707881276
          },
          {
            "topic": "Traffic",
            "val": 0.024689134799794756
          }
        ]
      },
      {
        "site": "14217",
        "startTime": "2014-01-14 10:40:47.22",
        "endTime": "2014-01-14 20:41:04.83",
        "stopTime": 36017,
        "isStop": true,
        "latitude": 28.0695,
        "longitude": 120.5852,
        "topics": [
          {
            "topic": "Traffic",
            "val": 0.07794743429286612
          },
          {
            "topic": "Scenicspot",
            "val": 0.07511889862327917
          },
          {
            "topic": "Enterprise",
            "val": 0.06655819774718384
          },
          {
            "topic": "Shop",
            "val": 0.06300375469336647
          },
          {
            "topic": "Government",
            "val": 0.05892365456821056
          },
          {
            "topic": "Life",
            "val": 0.05594493116395495
          },
          {
            "topic": "Hotel",
            "val": 0.05188986232790948
          },
          {
            "topic": "Food",
            "val": 0.05136420525657046
          },
          {
            "topic": "Beauty",
            "val": 0.05041301627033746
          },
          {
            "topic": "Finance",
            "val": 0.05011264080100076
          },
          {
            "topic": "Hospital",
            "val": 0.04760951188986181
          },
          {
            "topic": "Uptown",
            "val": 0.04608260325406702
          },
          {
            "topic": "Education",
            "val": 0.043629536921150854
          }
        ]
      },
      {
        "site": "8176",
        "startTime": "2014-01-14 20:41:04.83",
        "endTime": "2014-01-14 23:41:10.23",
        "stopTime": 10805,
        "isStop": true,
        "stoppoint": 1,
        "latitude": 28.0661,
        "longitude": 120.5849,
        "topics": [
          {
            "topic": "Finance",
            "val": 0.11324407307695748
          },
          {
            "topic": "Beauty",
            "val": 0.09246270067800577
          },
          {
            "topic": "Shop",
            "val": 0.09086898191084185
          },
          {
            "topic": "Life",
            "val": 0.07157327954907657
          },
          {
            "topic": "Government",
            "val": 0.07143821863660578
          },
          {
            "topic": "Education",
            "val": 0.06587370904277809
          },
          {
            "topic": "Hospital",
            "val": 0.057193794401274915
          },
          {
            "topic": "Uptown",
            "val": 0.045488515320409664
          },
          {
            "topic": "Enterprise",
            "val": 0.03375622405704983
          },
          {
            "topic": "Food",
            "val": 0.03163126570083121
          },
          {
            "topic": "Hotel",
            "val": 0.029524315466275285
          },
          {
            "topic": "Scenicspot",
            "val": 0.025859662707881276
          },
          {
            "topic": "Traffic",
            "val": 0.024689134799794756
          }
        ]
      }
    ],
    "matching": true
  },
  {
    "pid": "460000102243499",
    "traj": [
      {
        "site": "8176",
        "isStop": true,
        "startTime": "2014-01-13 23:50:15.58",
        "endTime": "2014-01-14 07:50:30.22",
        "stopTime": 28814,
        "stoppoint": 0,
        "latitude": 28.0661,
        "longitude": 120.5849,
        "topics": [
          {
            "topic": "Finance",
            "val": 0.11324407307695748
          },
          {
            "topic": "Beauty",
            "val": 0.09246270067800577
          },
          {
            "topic": "Shop",
            "val": 0.09086898191084185
          },
          {
            "topic": "Life",
            "val": 0.07157327954907657
          },
          {
            "topic": "Government",
            "val": 0.07143821863660578
          },
          {
            "topic": "Education",
            "val": 0.06587370904277809
          },
          {
            "topic": "Hospital",
            "val": 0.057193794401274915
          },
          {
            "topic": "Uptown",
            "val": 0.045488515320409664
          },
          {
            "topic": "Enterprise",
            "val": 0.03375622405704983
          },
          {
            "topic": "Food",
            "val": 0.03163126570083121
          },
          {
            "topic": "Hotel",
            "val": 0.029524315466275285
          },
          {
            "topic": "Scenicspot",
            "val": 0.025859662707881276
          },
          {
            "topic": "Traffic",
            "val": 0.024689134799794756
          }
        ]
      },
      {
        "site": "12722",
        "startTime": "2014-01-14 07:50:30.22",
        "endTime": "2014-01-14 10:43:37.31",
        "stopTime": 10387,
        "isStop": true,
        "latitude": 28.0691,
        "longitude": 120.5728,
        "topics": [
          {
            "topic": "Traffic",
            "val": 0.10678241418794678
          },
          {
            "topic": "Shop",
            "val": 0.07514712539610616
          },
          {
            "topic": "Enterprise",
            "val": 0.06367001304822459
          },
          {
            "topic": "Life",
            "val": 0.05834420685431212
          },
          {
            "topic": "Scenicspot",
            "val": 0.05424333608499939
          },
          {
            "topic": "Finance",
            "val": 0.052459191010038694
          },
          {
            "topic": "Hospital",
            "val": 0.05150054589513441
          },
          {
            "topic": "Education",
            "val": 0.04689372353740003
          },
          {
            "topic": "Uptown",
            "val": 0.04391127206880899
          },
          {
            "topic": "Beauty",
            "val": 0.04268633664420908
          },
          {
            "topic": "Food",
            "val": 0.04260644955130039
          },
          {
            "topic": "Hotel",
            "val": 0.04260644955130039
          },
          {
            "topic": "Government",
            "val": 0.04260644955130039
          }
        ]
      },
      {
        "site": "5341",
        "startTime": "2014-01-14 10:43:37.31",
        "endTime": "2014-01-14 10:43:48.6",
        "stopTime": 11,
        "isStop": false,
        "latitude": 28.0645,
        "longitude": 120.5822,
        "topics": [
          {
            "topic": "Shop",
            "val": 0.16994190499318182
          },
          {
            "topic": "Beauty",
            "val": 0.06976070834812188
          },
          {
            "topic": "Food",
            "val": 0.05689014252890741
          },
          {
            "topic": "Government",
            "val": 0.044318457773709886
          },
          {
            "topic": "Life",
            "val": 0.043842116077933146
          },
          {
            "topic": "Hospital",
            "val": 0.04238507089085231
          },
          {
            "topic": "Education",
            "val": 0.03679973100704248
          },
          {
            "topic": "Finance",
            "val": 0.035520146451721364
          },
          {
            "topic": "Enterprise",
            "val": 0.029196943941120507
          },
          {
            "topic": "Scenicspot",
            "val": 0.025815851904432804
          },
          {
            "topic": "Uptown",
            "val": 0.02431210655109936
          },
          {
            "topic": "Traffic",
            "val": 0.02277100106476395
          },
          {
            "topic": "Hotel",
            "val": 0.020762893915902542
          }
        ]
      },
      {
        "site": "12722",
        "startTime": "2014-01-14 10:43:48.6",
        "endTime": "2014-01-14 10:44:33.78",
        "stopTime": 45,
        "isStop": false,
        "latitude": 28.0691,
        "longitude": 120.5728,
        "topics": [
          {
            "topic": "Traffic",
            "val": 0.10678241418794678
          },
          {
            "topic": "Shop",
            "val": 0.07514712539610616
          },
          {
            "topic": "Enterprise",
            "val": 0.06367001304822459
          },
          {
            "topic": "Life",
            "val": 0.05834420685431212
          },
          {
            "topic": "Scenicspot",
            "val": 0.05424333608499939
          },
          {
            "topic": "Finance",
            "val": 0.052459191010038694
          },
          {
            "topic": "Hospital",
            "val": 0.05150054589513441
          },
          {
            "topic": "Education",
            "val": 0.04689372353740003
          },
          {
            "topic": "Uptown",
            "val": 0.04391127206880899
          },
          {
            "topic": "Beauty",
            "val": 0.04268633664420908
          },
          {
            "topic": "Food",
            "val": 0.04260644955130039
          },
          {
            "topic": "Hotel",
            "val": 0.04260644955130039
          },
          {
            "topic": "Government",
            "val": 0.04260644955130039
          }
        ]
      },
      {
        "site": "5341",
        "startTime": "2014-01-14 10:44:33.78",
        "endTime": "2014-01-14 10:45:10.18",
        "stopTime": 36,
        "isStop": false,
        "latitude": 28.0645,
        "longitude": 120.5822,
        "topics": [
          {
            "topic": "Shop",
            "val": 0.16994190499318182
          },
          {
            "topic": "Beauty",
            "val": 0.06976070834812188
          },
          {
            "topic": "Food",
            "val": 0.05689014252890741
          },
          {
            "topic": "Government",
            "val": 0.044318457773709886
          },
          {
            "topic": "Life",
            "val": 0.043842116077933146
          },
          {
            "topic": "Hospital",
            "val": 0.04238507089085231
          },
          {
            "topic": "Education",
            "val": 0.03679973100704248
          },
          {
            "topic": "Finance",
            "val": 0.035520146451721364
          },
          {
            "topic": "Enterprise",
            "val": 0.029196943941120507
          },
          {
            "topic": "Scenicspot",
            "val": 0.025815851904432804
          },
          {
            "topic": "Uptown",
            "val": 0.02431210655109936
          },
          {
            "topic": "Traffic",
            "val": 0.02277100106476395
          },
          {
            "topic": "Hotel",
            "val": 0.020762893915902542
          }
        ]
      },
      {
        "site": "12722",
        "startTime": "2014-01-14 10:45:10.18",
        "endTime": "2014-01-14 10:46:23.48",
        "stopTime": 73,
        "isStop": false,
        "latitude": 28.0691,
        "longitude": 120.5728,
        "topics": [
          {
            "topic": "Traffic",
            "val": 0.10678241418794678
          },
          {
            "topic": "Shop",
            "val": 0.07514712539610616
          },
          {
            "topic": "Enterprise",
            "val": 0.06367001304822459
          },
          {
            "topic": "Life",
            "val": 0.05834420685431212
          },
          {
            "topic": "Scenicspot",
            "val": 0.05424333608499939
          },
          {
            "topic": "Finance",
            "val": 0.052459191010038694
          },
          {
            "topic": "Hospital",
            "val": 0.05150054589513441
          },
          {
            "topic": "Education",
            "val": 0.04689372353740003
          },
          {
            "topic": "Uptown",
            "val": 0.04391127206880899
          },
          {
            "topic": "Beauty",
            "val": 0.04268633664420908
          },
          {
            "topic": "Food",
            "val": 0.04260644955130039
          },
          {
            "topic": "Hotel",
            "val": 0.04260644955130039
          },
          {
            "topic": "Government",
            "val": 0.04260644955130039
          }
        ]
      },
      {
        "site": "5341",
        "startTime": "2014-01-14 10:46:23.48",
        "endTime": "2014-01-14 11:51:46.07",
        "stopTime": 3922,
        "isStop": true,
        "stoppoint": 1,
        "latitude": 28.0645,
        "longitude": 120.5822,
        "topics": [
          {
            "topic": "Shop",
            "val": 0.16994190499318182
          },
          {
            "topic": "Beauty",
            "val": 0.06976070834812188
          },
          {
            "topic": "Food",
            "val": 0.05689014252890741
          },
          {
            "topic": "Government",
            "val": 0.044318457773709886
          },
          {
            "topic": "Life",
            "val": 0.043842116077933146
          },
          {
            "topic": "Hospital",
            "val": 0.04238507089085231
          },
          {
            "topic": "Education",
            "val": 0.03679973100704248
          },
          {
            "topic": "Finance",
            "val": 0.035520146451721364
          },
          {
            "topic": "Enterprise",
            "val": 0.029196943941120507
          },
          {
            "topic": "Scenicspot",
            "val": 0.025815851904432804
          },
          {
            "topic": "Uptown",
            "val": 0.02431210655109936
          },
          {
            "topic": "Traffic",
            "val": 0.02277100106476395
          },
          {
            "topic": "Hotel",
            "val": 0.020762893915902542
          }
        ]
      }
    ],
    "matching": true
  },
  {
    "pid": "460000102244539",
    "traj": [
      {
        "site": "8176",
        "isStop": true,
        "startTime": "2014-01-13 23:51:42.48",
        "endTime": "2014-01-14 09:51:52.68",
        "stopTime": 36010,
        "stoppoint": 0,
        "latitude": 28.0661,
        "longitude": 120.5849,
        "topics": [
          {
            "topic": "Finance",
            "val": 0.11324407307695748
          },
          {
            "topic": "Beauty",
            "val": 0.09246270067800577
          },
          {
            "topic": "Shop",
            "val": 0.09086898191084185
          },
          {
            "topic": "Life",
            "val": 0.07157327954907657
          },
          {
            "topic": "Government",
            "val": 0.07143821863660578
          },
          {
            "topic": "Education",
            "val": 0.06587370904277809
          },
          {
            "topic": "Hospital",
            "val": 0.057193794401274915
          },
          {
            "topic": "Uptown",
            "val": 0.045488515320409664
          },
          {
            "topic": "Enterprise",
            "val": 0.03375622405704983
          },
          {
            "topic": "Food",
            "val": 0.03163126570083121
          },
          {
            "topic": "Hotel",
            "val": 0.029524315466275285
          },
          {
            "topic": "Scenicspot",
            "val": 0.025859662707881276
          },
          {
            "topic": "Traffic",
            "val": 0.024689134799794756
          }
        ]
      },
      {
        "site": "19502",
        "startTime": "2014-01-14 09:51:52.68",
        "endTime": "2014-01-14 10:43:34.18",
        "stopTime": 3101,
        "isStop": true,
        "latitude": 28.0651,
        "longitude": 120.5755,
        "topics": [
          {
            "topic": "Education",
            "val": 0.0988125400653238
          },
          {
            "topic": "Government",
            "val": 0.09676730058914913
          },
          {
            "topic": "Traffic",
            "val": 0.06309716413809852
          },
          {
            "topic": "Shop",
            "val": 0.0627003266277959
          },
          {
            "topic": "Scenicspot",
            "val": 0.054641472572421926
          },
          {
            "topic": "Finance",
            "val": 0.0542141090997884
          },
          {
            "topic": "Hospital",
            "val": 0.05164992826398753
          },
          {
            "topic": "Uptown",
            "val": 0.04960468878781303
          },
          {
            "topic": "Life",
            "val": 0.048872065691869936
          },
          {
            "topic": "Hotel",
            "val": 0.048872065691869936
          },
          {
            "topic": "Beauty",
            "val": 0.048811013767208006
          },
          {
            "topic": "Enterprise",
            "val": 0.048780487804877044
          },
          {
            "topic": "Food",
            "val": 0.048780487804877044
          }
        ]
      },
      {
        "site": "5341",
        "startTime": "2014-01-14 10:43:34.18",
        "endTime": "2014-01-14 10:44:12.71",
        "stopTime": 38,
        "isStop": false,
        "latitude": 28.0645,
        "longitude": 120.5822,
        "topics": [
          {
            "topic": "Shop",
            "val": 0.16994190499318182
          },
          {
            "topic": "Beauty",
            "val": 0.06976070834812188
          },
          {
            "topic": "Food",
            "val": 0.05689014252890741
          },
          {
            "topic": "Government",
            "val": 0.044318457773709886
          },
          {
            "topic": "Life",
            "val": 0.043842116077933146
          },
          {
            "topic": "Hospital",
            "val": 0.04238507089085231
          },
          {
            "topic": "Education",
            "val": 0.03679973100704248
          },
          {
            "topic": "Finance",
            "val": 0.035520146451721364
          },
          {
            "topic": "Enterprise",
            "val": 0.029196943941120507
          },
          {
            "topic": "Scenicspot",
            "val": 0.025815851904432804
          },
          {
            "topic": "Uptown",
            "val": 0.02431210655109936
          },
          {
            "topic": "Traffic",
            "val": 0.02277100106476395
          },
          {
            "topic": "Hotel",
            "val": 0.020762893915902542
          }
        ]
      },
      {
        "site": "19502",
        "startTime": "2014-01-14 10:44:12.71",
        "endTime": "2014-01-14 10:46:56.61",
        "stopTime": 163,
        "isStop": false,
        "latitude": 28.0651,
        "longitude": 120.5755,
        "topics": [
          {
            "topic": "Education",
            "val": 0.0988125400653238
          },
          {
            "topic": "Government",
            "val": 0.09676730058914913
          },
          {
            "topic": "Traffic",
            "val": 0.06309716413809852
          },
          {
            "topic": "Shop",
            "val": 0.0627003266277959
          },
          {
            "topic": "Scenicspot",
            "val": 0.054641472572421926
          },
          {
            "topic": "Finance",
            "val": 0.0542141090997884
          },
          {
            "topic": "Hospital",
            "val": 0.05164992826398753
          },
          {
            "topic": "Uptown",
            "val": 0.04960468878781303
          },
          {
            "topic": "Life",
            "val": 0.048872065691869936
          },
          {
            "topic": "Hotel",
            "val": 0.048872065691869936
          },
          {
            "topic": "Beauty",
            "val": 0.048811013767208006
          },
          {
            "topic": "Enterprise",
            "val": 0.048780487804877044
          },
          {
            "topic": "Food",
            "val": 0.048780487804877044
          }
        ]
      },
      {
        "site": "8176",
        "startTime": "2014-01-14 10:46:56.61",
        "endTime": "2014-01-14 11:14:18.2",
        "stopTime": 1641,
        "isStop": true,
        "stoppoint": 1,
        "latitude": 28.0661,
        "longitude": 120.5849,
        "topics": [
          {
            "topic": "Finance",
            "val": 0.11324407307695748
          },
          {
            "topic": "Beauty",
            "val": 0.09246270067800577
          },
          {
            "topic": "Shop",
            "val": 0.09086898191084185
          },
          {
            "topic": "Life",
            "val": 0.07157327954907657
          },
          {
            "topic": "Government",
            "val": 0.07143821863660578
          },
          {
            "topic": "Education",
            "val": 0.06587370904277809
          },
          {
            "topic": "Hospital",
            "val": 0.057193794401274915
          },
          {
            "topic": "Uptown",
            "val": 0.045488515320409664
          },
          {
            "topic": "Enterprise",
            "val": 0.03375622405704983
          },
          {
            "topic": "Food",
            "val": 0.03163126570083121
          },
          {
            "topic": "Hotel",
            "val": 0.029524315466275285
          },
          {
            "topic": "Scenicspot",
            "val": 0.025859662707881276
          },
          {
            "topic": "Traffic",
            "val": 0.024689134799794756
          }
        ]
      }
    ],
    "matching": true
  },
  {
    "pid": "460000102824741",
    "traj": [
      {
        "site": "1764",
        "isStop": true,
        "startTime": "2014-01-14 01:10:08.81",
        "endTime": "2014-01-14 07:17:04.98",
        "stopTime": 22016,
        "stoppoint": 0,
        "latitude": 28.0485,
        "longitude": 120.6535,
        "topics": [
          {
            "topic": "Traffic",
            "val": 0.11944876150132806
          },
          {
            "topic": "Shop",
            "val": 0.09011264080100187
          },
          {
            "topic": "Uptown",
            "val": 0.06915237453410174
          },
          {
            "topic": "Enterprise",
            "val": 0.0622894002118036
          },
          {
            "topic": "Hospital",
            "val": 0.05577026227839777
          },
          {
            "topic": "Life",
            "val": 0.05545393280061638
          },
          {
            "topic": "Education",
            "val": 0.054339902900604
          },
          {
            "topic": "Food",
            "val": 0.04478125128938655
          },
          {
            "topic": "Finance",
            "val": 0.03222434636702461
          },
          {
            "topic": "Scenicspot",
            "val": 0.03076648007811953
          },
          {
            "topic": "Beauty",
            "val": 0.027933268233643612
          },
          {
            "topic": "Hotel",
            "val": 0.026351620844737154
          },
          {
            "topic": "Government",
            "val": 0.022019282344689035
          }
        ]
      },
      {
        "site": "23399",
        "startTime": "2014-01-14 07:17:04.98",
        "endTime": "2014-01-14 07:42:43.75",
        "stopTime": 1538,
        "isStop": true,
        "stoppoint": 1,
        "latitude": 28.0498,
        "longitude": 120.6511,
        "topics": [
          {
            "topic": "Enterprise",
            "val": 0.12873234400143027
          },
          {
            "topic": "Finance",
            "val": 0.06730351715154174
          },
          {
            "topic": "Traffic",
            "val": 0.06660110852851801
          },
          {
            "topic": "Life",
            "val": 0.05310209190059024
          },
          {
            "topic": "Food",
            "val": 0.04969221731245708
          },
          {
            "topic": "Shop",
            "val": 0.047546678245766534
          },
          {
            "topic": "Uptown",
            "val": 0.04233608336951831
          },
          {
            "topic": "Hospital",
            "val": 0.03860693213455612
          },
          {
            "topic": "Education",
            "val": 0.037406451942479324
          },
          {
            "topic": "Scenicspot",
            "val": 0.027151286046333455
          },
          {
            "topic": "Beauty",
            "val": 0.026819238333631354
          },
          {
            "topic": "Hotel",
            "val": 0.025567673878061883
          },
          {
            "topic": "Government",
            "val": 0.020420934331179523
          }
        ]
      }
    ],
    "matching": true
  },
  {
    "pid": "460000102839002",
    "traj": [
      {
        "site": "8176",
        "startTime": "2014-01-14 06:38:25.04",
        "endTime": "2014-01-14 07:50:37.72",
        "stopTime": 4332,
        "isStop": true,
        "stoppoint": 0,
        "latitude": 28.0661,
        "longitude": 120.5849,
        "topics": [
          {
            "topic": "Finance",
            "val": 0.11324407307695748
          },
          {
            "topic": "Beauty",
            "val": 0.09246270067800577
          },
          {
            "topic": "Shop",
            "val": 0.09086898191084185
          },
          {
            "topic": "Life",
            "val": 0.07157327954907657
          },
          {
            "topic": "Government",
            "val": 0.07143821863660578
          },
          {
            "topic": "Education",
            "val": 0.06587370904277809
          },
          {
            "topic": "Hospital",
            "val": 0.057193794401274915
          },
          {
            "topic": "Uptown",
            "val": 0.045488515320409664
          },
          {
            "topic": "Enterprise",
            "val": 0.03375622405704983
          },
          {
            "topic": "Food",
            "val": 0.03163126570083121
          },
          {
            "topic": "Hotel",
            "val": 0.029524315466275285
          },
          {
            "topic": "Scenicspot",
            "val": 0.025859662707881276
          },
          {
            "topic": "Traffic",
            "val": 0.024689134799794756
          }
        ]
      },
      {
        "site": "15553",
        "startTime": "2014-01-14 07:50:37.72",
        "endTime": "2014-01-14 08:06:12.02",
        "stopTime": 934,
        "isStop": false,
        "latitude": 28.0393,
        "longitude": 120.5877,
        "topics": [
          {
            "topic": "Enterprise",
            "val": 0.0665474700518508
          },
          {
            "topic": "Finance",
            "val": 0.05714285714285696
          },
          {
            "topic": "Traffic",
            "val": 0.05714285714285696
          },
          {
            "topic": "Scenicspot",
            "val": 0.05714285714285696
          },
          {
            "topic": "Uptown",
            "val": 0.05714285714285696
          },
          {
            "topic": "Food",
            "val": 0.05714285714285696
          },
          {
            "topic": "Hospital",
            "val": 0.05714285714285696
          },
          {
            "topic": "Life",
            "val": 0.05714285714285696
          },
          {
            "topic": "Hotel",
            "val": 0.05714285714285696
          },
          {
            "topic": "Shop",
            "val": 0.05714285714285696
          },
          {
            "topic": "Government",
            "val": 0.05714285714285696
          },
          {
            "topic": "Beauty",
            "val": 0.05714285714285696
          },
          {
            "topic": "Education",
            "val": 0.05714285714285696
          }
        ]
      },
      {
        "site": "3156",
        "startTime": "2014-01-14 08:06:12.02",
        "endTime": "2014-01-14 08:08:43.28",
        "stopTime": 151,
        "isStop": false,
        "latitude": 28.0279,
        "longitude": 120.5993,
        "topics": [
          {
            "topic": "Education",
            "val": 0.11141119381683424
          },
          {
            "topic": "Shop",
            "val": 0.09779768570362174
          },
          {
            "topic": "Finance",
            "val": 0.07166853303471526
          },
          {
            "topic": "Traffic",
            "val": 0.05669367411018206
          },
          {
            "topic": "Hospital",
            "val": 0.05289506620117318
          },
          {
            "topic": "Enterprise",
            "val": 0.04731791932898619
          },
          {
            "topic": "Food",
            "val": 0.04558329490810943
          },
          {
            "topic": "Scenicspot",
            "val": 0.040247678018576184
          },
          {
            "topic": "Beauty",
            "val": 0.0391717717322095
          },
          {
            "topic": "Hotel",
            "val": 0.038205651801594444
          },
          {
            "topic": "Uptown",
            "val": 0.03627341194036433
          },
          {
            "topic": "Life",
            "val": 0.03583426651735748
          },
          {
            "topic": "Government",
            "val": 0.03510967656939619
          }
        ]
      },
      {
        "site": "2795",
        "startTime": "2014-01-14 08:08:43.28",
        "endTime": "2014-01-14 08:09:47.65",
        "stopTime": 64,
        "isStop": false,
        "latitude": 28.0244,
        "longitude": 120.603,
        "topics": [
          {
            "topic": "Shop",
            "val": 0.12251425392852172
          },
          {
            "topic": "Finance",
            "val": 0.07731887081073538
          },
          {
            "topic": "Enterprise",
            "val": 0.06602388788454677
          },
          {
            "topic": "Hotel",
            "val": 0.055934115174832384
          },
          {
            "topic": "Beauty",
            "val": 0.05417265408921638
          },
          {
            "topic": "Food",
            "val": 0.04423739550981929
          },
          {
            "topic": "Hospital",
            "val": 0.03773235062346474
          },
          {
            "topic": "Traffic",
            "val": 0.03229345323629835
          },
          {
            "topic": "Uptown",
            "val": 0.02863146834778015
          },
          {
            "topic": "Scenicspot",
            "val": 0.026900910088227252
          },
          {
            "topic": "Education",
            "val": 0.025881116828133675
          },
          {
            "topic": "Life",
            "val": 0.025402123024150267
          },
          {
            "topic": "Government",
            "val": 0.024691358024691124
          }
        ]
      },
      {
        "site": "8176",
        "startTime": "2014-01-14 08:09:47.65",
        "endTime": "2014-01-14 08:06:11.97",
        "stopTime": 86184,
        "isStop": true,
        "stoppoint": 1,
        "latitude": 28.0661,
        "longitude": 120.5849,
        "topics": [
          {
            "topic": "Finance",
            "val": 0.11324407307695748
          },
          {
            "topic": "Beauty",
            "val": 0.09246270067800577
          },
          {
            "topic": "Shop",
            "val": 0.09086898191084185
          },
          {
            "topic": "Life",
            "val": 0.07157327954907657
          },
          {
            "topic": "Government",
            "val": 0.07143821863660578
          },
          {
            "topic": "Education",
            "val": 0.06587370904277809
          },
          {
            "topic": "Hospital",
            "val": 0.057193794401274915
          },
          {
            "topic": "Uptown",
            "val": 0.045488515320409664
          },
          {
            "topic": "Enterprise",
            "val": 0.03375622405704983
          },
          {
            "topic": "Food",
            "val": 0.03163126570083121
          },
          {
            "topic": "Hotel",
            "val": 0.029524315466275285
          },
          {
            "topic": "Scenicspot",
            "val": 0.025859662707881276
          },
          {
            "topic": "Traffic",
            "val": 0.024689134799794756
          }
        ]
      }
    ],
    "matching": true
  },
  {
    "pid": "460000102855683",
    "traj": [
      {
        "site": "2305",
        "isStop": true,
        "startTime": "2014-01-14 01:06:28.87",
        "endTime": "2014-01-14 07:06:32.88",
        "stopTime": 21604,
        "stoppoint": 0,
        "latitude": 27.7862,
        "longitude": 120.689,
        "topics": [
          {
            "topic": "Hospital",
            "val": 0.14748346146969452
          },
          {
            "topic": "Education",
            "val": 0.09898533881637712
          },
          {
            "topic": "Scenicspot",
            "val": 0.09181119256213081
          },
          {
            "topic": "Traffic",
            "val": 0.08494993742177692
          },
          {
            "topic": "Life",
            "val": 0.07010995887716794
          },
          {
            "topic": "Beauty",
            "val": 0.05491239048811022
          },
          {
            "topic": "Government",
            "val": 0.05261040586447339
          },
          {
            "topic": "Shop",
            "val": 0.046173788664401624
          },
          {
            "topic": "Finance",
            "val": 0.0399606651171103
          },
          {
            "topic": "Uptown",
            "val": 0.03991596638655423
          },
          {
            "topic": "Hotel",
            "val": 0.0368988020740208
          },
          {
            "topic": "Food",
            "val": 0.036697657786518574
          },
          {
            "topic": "Enterprise",
            "val": 0.035714285714285456
          }
        ]
      },
      {
        "site": "19912",
        "startTime": "2014-01-14 07:06:32.88",
        "endTime": "2014-01-14 07:55:28.56",
        "stopTime": 2935,
        "isStop": true,
        "latitude": 27.7898,
        "longitude": 120.6973,
        "topics": [
          {
            "topic": "Shop",
            "val": 0.0906587780179772
          },
          {
            "topic": "Enterprise",
            "val": 0.07834793491864862
          },
          {
            "topic": "Education",
            "val": 0.0575492092388213
          },
          {
            "topic": "Uptown",
            "val": 0.0546819888496986
          },
          {
            "topic": "Life",
            "val": 0.05006257822277862
          },
          {
            "topic": "Finance",
            "val": 0.048196609398111344
          },
          {
            "topic": "Food",
            "val": 0.047513937876891725
          },
          {
            "topic": "Beauty",
            "val": 0.040300375469336375
          },
          {
            "topic": "Hotel",
            "val": 0.039663215382864624
          },
          {
            "topic": "Hospital",
            "val": 0.03813858231880727
          },
          {
            "topic": "Traffic",
            "val": 0.03638639208101
          },
          {
            "topic": "Scenicspot",
            "val": 0.036363636363636015
          },
          {
            "topic": "Government",
            "val": 0.036363636363636015
          }
        ]
      },
      {
        "site": "2305",
        "startTime": "2014-01-14 07:55:28.56",
        "endTime": "2014-01-14 07:56:44.81",
        "stopTime": 76,
        "isStop": false,
        "latitude": 27.7862,
        "longitude": 120.689,
        "topics": [
          {
            "topic": "Hospital",
            "val": 0.14748346146969452
          },
          {
            "topic": "Education",
            "val": 0.09898533881637712
          },
          {
            "topic": "Scenicspot",
            "val": 0.09181119256213081
          },
          {
            "topic": "Traffic",
            "val": 0.08494993742177692
          },
          {
            "topic": "Life",
            "val": 0.07010995887716794
          },
          {
            "topic": "Beauty",
            "val": 0.05491239048811022
          },
          {
            "topic": "Government",
            "val": 0.05261040586447339
          },
          {
            "topic": "Shop",
            "val": 0.046173788664401624
          },
          {
            "topic": "Finance",
            "val": 0.0399606651171103
          },
          {
            "topic": "Uptown",
            "val": 0.03991596638655423
          },
          {
            "topic": "Hotel",
            "val": 0.0368988020740208
          },
          {
            "topic": "Food",
            "val": 0.036697657786518574
          },
          {
            "topic": "Enterprise",
            "val": 0.035714285714285456
          }
        ]
      },
      {
        "site": "19912",
        "startTime": "2014-01-14 07:56:44.81",
        "endTime": "2014-01-14 08:00:23.98",
        "stopTime": 219,
        "isStop": false,
        "latitude": 27.7898,
        "longitude": 120.6973,
        "topics": [
          {
            "topic": "Shop",
            "val": 0.0906587780179772
          },
          {
            "topic": "Enterprise",
            "val": 0.07834793491864862
          },
          {
            "topic": "Education",
            "val": 0.0575492092388213
          },
          {
            "topic": "Uptown",
            "val": 0.0546819888496986
          },
          {
            "topic": "Life",
            "val": 0.05006257822277862
          },
          {
            "topic": "Finance",
            "val": 0.048196609398111344
          },
          {
            "topic": "Food",
            "val": 0.047513937876891725
          },
          {
            "topic": "Beauty",
            "val": 0.040300375469336375
          },
          {
            "topic": "Hotel",
            "val": 0.039663215382864624
          },
          {
            "topic": "Hospital",
            "val": 0.03813858231880727
          },
          {
            "topic": "Traffic",
            "val": 0.03638639208101
          },
          {
            "topic": "Scenicspot",
            "val": 0.036363636363636015
          },
          {
            "topic": "Government",
            "val": 0.036363636363636015
          }
        ]
      },
      {
        "site": "6362",
        "startTime": "2014-01-14 08:00:23.98",
        "endTime": "2014-01-14 08:02:41.84",
        "stopTime": 137,
        "isStop": false,
        "latitude": 27.7817,
        "longitude": 120.7001,
        "topics": [
          {
            "topic": "Enterprise",
            "val": 0.0743917702005545
          },
          {
            "topic": "Government",
            "val": 0.07237705668671104
          },
          {
            "topic": "Shop",
            "val": 0.0720717970634014
          },
          {
            "topic": "Finance",
            "val": 0.055221465856710124
          },
          {
            "topic": "Scenicspot",
            "val": 0.04957416282548208
          },
          {
            "topic": "Life",
            "val": 0.0489025916542009
          },
          {
            "topic": "Beauty",
            "val": 0.04884153972953897
          },
          {
            "topic": "Hotel",
            "val": 0.048811013767208006
          },
          {
            "topic": "Education",
            "val": 0.048811013767208006
          },
          {
            "topic": "Traffic",
            "val": 0.048780487804877044
          },
          {
            "topic": "Uptown",
            "val": 0.048780487804877044
          },
          {
            "topic": "Food",
            "val": 0.048780487804877044
          },
          {
            "topic": "Hospital",
            "val": 0.048780487804877044
          }
        ]
      },
      {
        "site": "19912",
        "startTime": "2014-01-14 08:02:41.84",
        "endTime": "2014-01-14 08:40:47.45",
        "stopTime": 2285,
        "isStop": true,
        "latitude": 27.7898,
        "longitude": 120.6973,
        "topics": [
          {
            "topic": "Shop",
            "val": 0.0906587780179772
          },
          {
            "topic": "Enterprise",
            "val": 0.07834793491864862
          },
          {
            "topic": "Education",
            "val": 0.0575492092388213
          },
          {
            "topic": "Uptown",
            "val": 0.0546819888496986
          },
          {
            "topic": "Life",
            "val": 0.05006257822277862
          },
          {
            "topic": "Finance",
            "val": 0.048196609398111344
          },
          {
            "topic": "Food",
            "val": 0.047513937876891725
          },
          {
            "topic": "Beauty",
            "val": 0.040300375469336375
          },
          {
            "topic": "Hotel",
            "val": 0.039663215382864624
          },
          {
            "topic": "Hospital",
            "val": 0.03813858231880727
          },
          {
            "topic": "Traffic",
            "val": 0.03638639208101
          },
          {
            "topic": "Scenicspot",
            "val": 0.036363636363636015
          },
          {
            "topic": "Government",
            "val": 0.036363636363636015
          }
        ]
      },
      {
        "site": "2305",
        "startTime": "2014-01-14 08:40:47.45",
        "endTime": "2014-01-14 08:44:17.24",
        "stopTime": 209,
        "isStop": false,
        "latitude": 27.7862,
        "longitude": 120.689,
        "topics": [
          {
            "topic": "Hospital",
            "val": 0.14748346146969452
          },
          {
            "topic": "Education",
            "val": 0.09898533881637712
          },
          {
            "topic": "Scenicspot",
            "val": 0.09181119256213081
          },
          {
            "topic": "Traffic",
            "val": 0.08494993742177692
          },
          {
            "topic": "Life",
            "val": 0.07010995887716794
          },
          {
            "topic": "Beauty",
            "val": 0.05491239048811022
          },
          {
            "topic": "Government",
            "val": 0.05261040586447339
          },
          {
            "topic": "Shop",
            "val": 0.046173788664401624
          },
          {
            "topic": "Finance",
            "val": 0.0399606651171103
          },
          {
            "topic": "Uptown",
            "val": 0.03991596638655423
          },
          {
            "topic": "Hotel",
            "val": 0.0368988020740208
          },
          {
            "topic": "Food",
            "val": 0.036697657786518574
          },
          {
            "topic": "Enterprise",
            "val": 0.035714285714285456
          }
        ]
      },
      {
        "site": "19912",
        "startTime": "2014-01-14 08:44:17.24",
        "endTime": "2014-01-14 08:44:59.59",
        "stopTime": 42,
        "isStop": false,
        "latitude": 27.7898,
        "longitude": 120.6973,
        "topics": [
          {
            "topic": "Shop",
            "val": 0.0906587780179772
          },
          {
            "topic": "Enterprise",
            "val": 0.07834793491864862
          },
          {
            "topic": "Education",
            "val": 0.0575492092388213
          },
          {
            "topic": "Uptown",
            "val": 0.0546819888496986
          },
          {
            "topic": "Life",
            "val": 0.05006257822277862
          },
          {
            "topic": "Finance",
            "val": 0.048196609398111344
          },
          {
            "topic": "Food",
            "val": 0.047513937876891725
          },
          {
            "topic": "Beauty",
            "val": 0.040300375469336375
          },
          {
            "topic": "Hotel",
            "val": 0.039663215382864624
          },
          {
            "topic": "Hospital",
            "val": 0.03813858231880727
          },
          {
            "topic": "Traffic",
            "val": 0.03638639208101
          },
          {
            "topic": "Scenicspot",
            "val": 0.036363636363636015
          },
          {
            "topic": "Government",
            "val": 0.036363636363636015
          }
        ]
      },
      {
        "site": "2305",
        "startTime": "2014-01-14 08:44:59.59",
        "endTime": "2014-01-14 15:36:27.24",
        "stopTime": 24687,
        "isStop": true,
        "stoppoint": 1,
        "latitude": 27.7862,
        "longitude": 120.689,
        "topics": [
          {
            "topic": "Hospital",
            "val": 0.14748346146969452
          },
          {
            "topic": "Education",
            "val": 0.09898533881637712
          },
          {
            "topic": "Scenicspot",
            "val": 0.09181119256213081
          },
          {
            "topic": "Traffic",
            "val": 0.08494993742177692
          },
          {
            "topic": "Life",
            "val": 0.07010995887716794
          },
          {
            "topic": "Beauty",
            "val": 0.05491239048811022
          },
          {
            "topic": "Government",
            "val": 0.05261040586447339
          },
          {
            "topic": "Shop",
            "val": 0.046173788664401624
          },
          {
            "topic": "Finance",
            "val": 0.0399606651171103
          },
          {
            "topic": "Uptown",
            "val": 0.03991596638655423
          },
          {
            "topic": "Hotel",
            "val": 0.0368988020740208
          },
          {
            "topic": "Food",
            "val": 0.036697657786518574
          },
          {
            "topic": "Enterprise",
            "val": 0.035714285714285456
          }
        ]
      }
    ],
    "matching": true
  },
  {
    "pid": "460000112821423",
    "traj": [
      {
        "site": "2305",
        "startTime": "2014-01-14 07:55:23.7",
        "endTime": "2014-01-14 09:57:43.46",
        "stopTime": 7339,
        "isStop": true,
        "stoppoint": 0,
        "latitude": 27.7862,
        "longitude": 120.689,
        "topics": [
          {
            "topic": "Hospital",
            "val": 0.14748346146969452
          },
          {
            "topic": "Education",
            "val": 0.09898533881637712
          },
          {
            "topic": "Scenicspot",
            "val": 0.09181119256213081
          },
          {
            "topic": "Traffic",
            "val": 0.08494993742177692
          },
          {
            "topic": "Life",
            "val": 0.07010995887716794
          },
          {
            "topic": "Beauty",
            "val": 0.05491239048811022
          },
          {
            "topic": "Government",
            "val": 0.05261040586447339
          },
          {
            "topic": "Shop",
            "val": 0.046173788664401624
          },
          {
            "topic": "Finance",
            "val": 0.0399606651171103
          },
          {
            "topic": "Uptown",
            "val": 0.03991596638655423
          },
          {
            "topic": "Hotel",
            "val": 0.0368988020740208
          },
          {
            "topic": "Food",
            "val": 0.036697657786518574
          },
          {
            "topic": "Enterprise",
            "val": 0.035714285714285456
          }
        ]
      },
      {
        "site": "28422",
        "startTime": "2014-01-14 09:57:43.46",
        "endTime": "2014-01-14 11:41:14.62",
        "stopTime": 6211,
        "isStop": true,
        "latitude": 27.7932,
        "longitude": 120.6912,
        "topics": [
          {
            "topic": "Beauty",
            "val": 0.14197491389784678
          },
          {
            "topic": "Government",
            "val": 0.09408658633510862
          },
          {
            "topic": "Shop",
            "val": 0.09003042123822663
          },
          {
            "topic": "Hospital",
            "val": 0.06465198286178882
          },
          {
            "topic": "Life",
            "val": 0.054676009245133037
          },
          {
            "topic": "Food",
            "val": 0.04945049925545602
          },
          {
            "topic": "Uptown",
            "val": 0.04535779213067365
          },
          {
            "topic": "Traffic",
            "val": 0.044014872605355096
          },
          {
            "topic": "Scenicspot",
            "val": 0.0394288481039255
          },
          {
            "topic": "Education",
            "val": 0.03758347569498372
          },
          {
            "topic": "Finance",
            "val": 0.032705114970355144
          },
          {
            "topic": "Enterprise",
            "val": 0.03159971862638515
          },
          {
            "topic": "Hotel",
            "val": 0.027972922357326027
          }
        ]
      },
      {
        "site": "6053",
        "startTime": "2014-01-14 11:41:14.62",
        "endTime": "2014-01-14 11:42:10.81",
        "stopTime": 56,
        "isStop": false,
        "latitude": 27.7886,
        "longitude": 120.6826,
        "topics": [
          {
            "topic": "Hospital",
            "val": 0.14193668010939567
          },
          {
            "topic": "Government",
            "val": 0.13465906457145355
          },
          {
            "topic": "Finance",
            "val": 0.08726958080316445
          },
          {
            "topic": "Shop",
            "val": 0.06543673418934132
          },
          {
            "topic": "Life",
            "val": 0.05886988365085956
          },
          {
            "topic": "Scenicspot",
            "val": 0.05581050387057837
          },
          {
            "topic": "Enterprise",
            "val": 0.04196603779415612
          },
          {
            "topic": "Beauty",
            "val": 0.040729924751618816
          },
          {
            "topic": "Uptown",
            "val": 0.04008096540428649
          },
          {
            "topic": "Traffic",
            "val": 0.03464206801712006
          },
          {
            "topic": "Education",
            "val": 0.03096463171557008
          },
          {
            "topic": "Hotel",
            "val": 0.028446051391399496
          },
          {
            "topic": "Food",
            "val": 0.024737712263786286
          }
        ]
      },
      {
        "site": "28422",
        "startTime": "2014-01-14 11:42:10.81",
        "endTime": "2014-01-14 12:22:26.37",
        "stopTime": 2415,
        "isStop": true,
        "latitude": 27.7932,
        "longitude": 120.6912,
        "topics": [
          {
            "topic": "Beauty",
            "val": 0.14197491389784678
          },
          {
            "topic": "Government",
            "val": 0.09408658633510862
          },
          {
            "topic": "Shop",
            "val": 0.09003042123822663
          },
          {
            "topic": "Hospital",
            "val": 0.06465198286178882
          },
          {
            "topic": "Life",
            "val": 0.054676009245133037
          },
          {
            "topic": "Food",
            "val": 0.04945049925545602
          },
          {
            "topic": "Uptown",
            "val": 0.04535779213067365
          },
          {
            "topic": "Traffic",
            "val": 0.044014872605355096
          },
          {
            "topic": "Scenicspot",
            "val": 0.0394288481039255
          },
          {
            "topic": "Education",
            "val": 0.03758347569498372
          },
          {
            "topic": "Finance",
            "val": 0.032705114970355144
          },
          {
            "topic": "Enterprise",
            "val": 0.03159971862638515
          },
          {
            "topic": "Hotel",
            "val": 0.027972922357326027
          }
        ]
      },
      {
        "site": "26545",
        "startTime": "2014-01-14 12:22:26.37",
        "endTime": "2014-01-14 12:24:58.99",
        "stopTime": 152,
        "isStop": false,
        "latitude": 27.7819,
        "longitude": 120.6847,
        "topics": [
          {
            "topic": "Hospital",
            "val": 0.09505185052744469
          },
          {
            "topic": "Shop",
            "val": 0.07891560879670997
          },
          {
            "topic": "Beauty",
            "val": 0.07784283926336485
          },
          {
            "topic": "Uptown",
            "val": 0.06253352404791726
          },
          {
            "topic": "Education",
            "val": 0.06208653674235673
          },
          {
            "topic": "Life",
            "val": 0.06184069372429817
          },
          {
            "topic": "Scenicspot",
            "val": 0.05754961559091722
          },
          {
            "topic": "Hotel",
            "val": 0.054331306990881324
          },
          {
            "topic": "Food",
            "val": 0.053884319685320786
          },
          {
            "topic": "Finance",
            "val": 0.049436795994993454
          },
          {
            "topic": "Traffic",
            "val": 0.04429644198104733
          },
          {
            "topic": "Government",
            "val": 0.035736635079563484
          },
          {
            "topic": "Enterprise",
            "val": 0.035714285714285456
          }
        ]
      },
      {
        "site": "28422",
        "startTime": "2014-01-14 12:24:58.99",
        "endTime": "2014-01-14 12:25:33.63",
        "stopTime": 34,
        "isStop": false,
        "latitude": 27.7932,
        "longitude": 120.6912,
        "topics": [
          {
            "topic": "Beauty",
            "val": 0.14197491389784678
          },
          {
            "topic": "Government",
            "val": 0.09408658633510862
          },
          {
            "topic": "Shop",
            "val": 0.09003042123822663
          },
          {
            "topic": "Hospital",
            "val": 0.06465198286178882
          },
          {
            "topic": "Life",
            "val": 0.054676009245133037
          },
          {
            "topic": "Food",
            "val": 0.04945049925545602
          },
          {
            "topic": "Uptown",
            "val": 0.04535779213067365
          },
          {
            "topic": "Traffic",
            "val": 0.044014872605355096
          },
          {
            "topic": "Scenicspot",
            "val": 0.0394288481039255
          },
          {
            "topic": "Education",
            "val": 0.03758347569498372
          },
          {
            "topic": "Finance",
            "val": 0.032705114970355144
          },
          {
            "topic": "Enterprise",
            "val": 0.03159971862638515
          },
          {
            "topic": "Hotel",
            "val": 0.027972922357326027
          }
        ]
      },
      {
        "site": "6053",
        "startTime": "2014-01-14 12:25:33.63",
        "endTime": "2014-01-14 12:25:40.52",
        "stopTime": 6,
        "isStop": false,
        "latitude": 27.7886,
        "longitude": 120.6826,
        "topics": [
          {
            "topic": "Hospital",
            "val": 0.14193668010939567
          },
          {
            "topic": "Government",
            "val": 0.13465906457145355
          },
          {
            "topic": "Finance",
            "val": 0.08726958080316445
          },
          {
            "topic": "Shop",
            "val": 0.06543673418934132
          },
          {
            "topic": "Life",
            "val": 0.05886988365085956
          },
          {
            "topic": "Scenicspot",
            "val": 0.05581050387057837
          },
          {
            "topic": "Enterprise",
            "val": 0.04196603779415612
          },
          {
            "topic": "Beauty",
            "val": 0.040729924751618816
          },
          {
            "topic": "Uptown",
            "val": 0.04008096540428649
          },
          {
            "topic": "Traffic",
            "val": 0.03464206801712006
          },
          {
            "topic": "Education",
            "val": 0.03096463171557008
          },
          {
            "topic": "Hotel",
            "val": 0.028446051391399496
          },
          {
            "topic": "Food",
            "val": 0.024737712263786286
          }
        ]
      },
      {
        "site": "28422",
        "startTime": "2014-01-14 12:25:40.52",
        "endTime": "2014-01-14 12:26:41.35",
        "stopTime": 60,
        "isStop": false,
        "latitude": 27.7932,
        "longitude": 120.6912,
        "topics": [
          {
            "topic": "Beauty",
            "val": 0.14197491389784678
          },
          {
            "topic": "Government",
            "val": 0.09408658633510862
          },
          {
            "topic": "Shop",
            "val": 0.09003042123822663
          },
          {
            "topic": "Hospital",
            "val": 0.06465198286178882
          },
          {
            "topic": "Life",
            "val": 0.054676009245133037
          },
          {
            "topic": "Food",
            "val": 0.04945049925545602
          },
          {
            "topic": "Uptown",
            "val": 0.04535779213067365
          },
          {
            "topic": "Traffic",
            "val": 0.044014872605355096
          },
          {
            "topic": "Scenicspot",
            "val": 0.0394288481039255
          },
          {
            "topic": "Education",
            "val": 0.03758347569498372
          },
          {
            "topic": "Finance",
            "val": 0.032705114970355144
          },
          {
            "topic": "Enterprise",
            "val": 0.03159971862638515
          },
          {
            "topic": "Hotel",
            "val": 0.027972922357326027
          }
        ]
      },
      {
        "site": "26545",
        "startTime": "2014-01-14 12:26:41.35",
        "endTime": "2014-01-14 12:28:45.21",
        "stopTime": 123,
        "isStop": false,
        "latitude": 27.7819,
        "longitude": 120.6847,
        "topics": [
          {
            "topic": "Hospital",
            "val": 0.09505185052744469
          },
          {
            "topic": "Shop",
            "val": 0.07891560879670997
          },
          {
            "topic": "Beauty",
            "val": 0.07784283926336485
          },
          {
            "topic": "Uptown",
            "val": 0.06253352404791726
          },
          {
            "topic": "Education",
            "val": 0.06208653674235673
          },
          {
            "topic": "Life",
            "val": 0.06184069372429817
          },
          {
            "topic": "Scenicspot",
            "val": 0.05754961559091722
          },
          {
            "topic": "Hotel",
            "val": 0.054331306990881324
          },
          {
            "topic": "Food",
            "val": 0.053884319685320786
          },
          {
            "topic": "Finance",
            "val": 0.049436795994993454
          },
          {
            "topic": "Traffic",
            "val": 0.04429644198104733
          },
          {
            "topic": "Government",
            "val": 0.035736635079563484
          },
          {
            "topic": "Enterprise",
            "val": 0.035714285714285456
          }
        ]
      },
      {
        "site": "28422",
        "startTime": "2014-01-14 12:28:45.21",
        "endTime": "2014-01-14 12:35:28.66",
        "stopTime": 403,
        "isStop": false,
        "latitude": 27.7932,
        "longitude": 120.6912,
        "topics": [
          {
            "topic": "Beauty",
            "val": 0.14197491389784678
          },
          {
            "topic": "Government",
            "val": 0.09408658633510862
          },
          {
            "topic": "Shop",
            "val": 0.09003042123822663
          },
          {
            "topic": "Hospital",
            "val": 0.06465198286178882
          },
          {
            "topic": "Life",
            "val": 0.054676009245133037
          },
          {
            "topic": "Food",
            "val": 0.04945049925545602
          },
          {
            "topic": "Uptown",
            "val": 0.04535779213067365
          },
          {
            "topic": "Traffic",
            "val": 0.044014872605355096
          },
          {
            "topic": "Scenicspot",
            "val": 0.0394288481039255
          },
          {
            "topic": "Education",
            "val": 0.03758347569498372
          },
          {
            "topic": "Finance",
            "val": 0.032705114970355144
          },
          {
            "topic": "Enterprise",
            "val": 0.03159971862638515
          },
          {
            "topic": "Hotel",
            "val": 0.027972922357326027
          }
        ]
      },
      {
        "site": "26545",
        "startTime": "2014-01-14 12:35:28.66",
        "endTime": "2014-01-14 12:36:08.42",
        "stopTime": 39,
        "isStop": false,
        "latitude": 27.7819,
        "longitude": 120.6847,
        "topics": [
          {
            "topic": "Hospital",
            "val": 0.09505185052744469
          },
          {
            "topic": "Shop",
            "val": 0.07891560879670997
          },
          {
            "topic": "Beauty",
            "val": 0.07784283926336485
          },
          {
            "topic": "Uptown",
            "val": 0.06253352404791726
          },
          {
            "topic": "Education",
            "val": 0.06208653674235673
          },
          {
            "topic": "Life",
            "val": 0.06184069372429817
          },
          {
            "topic": "Scenicspot",
            "val": 0.05754961559091722
          },
          {
            "topic": "Hotel",
            "val": 0.054331306990881324
          },
          {
            "topic": "Food",
            "val": 0.053884319685320786
          },
          {
            "topic": "Finance",
            "val": 0.049436795994993454
          },
          {
            "topic": "Traffic",
            "val": 0.04429644198104733
          },
          {
            "topic": "Government",
            "val": 0.035736635079563484
          },
          {
            "topic": "Enterprise",
            "val": 0.035714285714285456
          }
        ]
      },
      {
        "site": "28422",
        "startTime": "2014-01-14 12:36:08.42",
        "endTime": "2014-01-14 12:36:55.3",
        "stopTime": 46,
        "isStop": false,
        "latitude": 27.7932,
        "longitude": 120.6912,
        "topics": [
          {
            "topic": "Beauty",
            "val": 0.14197491389784678
          },
          {
            "topic": "Government",
            "val": 0.09408658633510862
          },
          {
            "topic": "Shop",
            "val": 0.09003042123822663
          },
          {
            "topic": "Hospital",
            "val": 0.06465198286178882
          },
          {
            "topic": "Life",
            "val": 0.054676009245133037
          },
          {
            "topic": "Food",
            "val": 0.04945049925545602
          },
          {
            "topic": "Uptown",
            "val": 0.04535779213067365
          },
          {
            "topic": "Traffic",
            "val": 0.044014872605355096
          },
          {
            "topic": "Scenicspot",
            "val": 0.0394288481039255
          },
          {
            "topic": "Education",
            "val": 0.03758347569498372
          },
          {
            "topic": "Finance",
            "val": 0.032705114970355144
          },
          {
            "topic": "Enterprise",
            "val": 0.03159971862638515
          },
          {
            "topic": "Hotel",
            "val": 0.027972922357326027
          }
        ]
      },
      {
        "site": "26545",
        "startTime": "2014-01-14 12:36:55.3",
        "endTime": "2014-01-14 12:39:33.5",
        "stopTime": 158,
        "isStop": false,
        "latitude": 27.7819,
        "longitude": 120.6847,
        "topics": [
          {
            "topic": "Hospital",
            "val": 0.09505185052744469
          },
          {
            "topic": "Shop",
            "val": 0.07891560879670997
          },
          {
            "topic": "Beauty",
            "val": 0.07784283926336485
          },
          {
            "topic": "Uptown",
            "val": 0.06253352404791726
          },
          {
            "topic": "Education",
            "val": 0.06208653674235673
          },
          {
            "topic": "Life",
            "val": 0.06184069372429817
          },
          {
            "topic": "Scenicspot",
            "val": 0.05754961559091722
          },
          {
            "topic": "Hotel",
            "val": 0.054331306990881324
          },
          {
            "topic": "Food",
            "val": 0.053884319685320786
          },
          {
            "topic": "Finance",
            "val": 0.049436795994993454
          },
          {
            "topic": "Traffic",
            "val": 0.04429644198104733
          },
          {
            "topic": "Government",
            "val": 0.035736635079563484
          },
          {
            "topic": "Enterprise",
            "val": 0.035714285714285456
          }
        ]
      },
      {
        "site": "28422",
        "startTime": "2014-01-14 12:39:33.5",
        "endTime": "2014-01-14 12:44:19.62",
        "stopTime": 286,
        "isStop": false,
        "latitude": 27.7932,
        "longitude": 120.6912,
        "topics": [
          {
            "topic": "Beauty",
            "val": 0.14197491389784678
          },
          {
            "topic": "Government",
            "val": 0.09408658633510862
          },
          {
            "topic": "Shop",
            "val": 0.09003042123822663
          },
          {
            "topic": "Hospital",
            "val": 0.06465198286178882
          },
          {
            "topic": "Life",
            "val": 0.054676009245133037
          },
          {
            "topic": "Food",
            "val": 0.04945049925545602
          },
          {
            "topic": "Uptown",
            "val": 0.04535779213067365
          },
          {
            "topic": "Traffic",
            "val": 0.044014872605355096
          },
          {
            "topic": "Scenicspot",
            "val": 0.0394288481039255
          },
          {
            "topic": "Education",
            "val": 0.03758347569498372
          },
          {
            "topic": "Finance",
            "val": 0.032705114970355144
          },
          {
            "topic": "Enterprise",
            "val": 0.03159971862638515
          },
          {
            "topic": "Hotel",
            "val": 0.027972922357326027
          }
        ]
      },
      {
        "site": "18523",
        "startTime": "2014-01-14 12:44:19.62",
        "endTime": "2014-01-14 12:44:47.51",
        "stopTime": 27,
        "isStop": false,
        "latitude": 27.7956,
        "longitude": 120.6825,
        "topics": [
          {
            "topic": "Uptown",
            "val": 0.15101538213088805
          },
          {
            "topic": "Hospital",
            "val": 0.09316080584601613
          },
          {
            "topic": "Traffic",
            "val": 0.08094795914247553
          },
          {
            "topic": "Education",
            "val": 0.07682990835318272
          },
          {
            "topic": "Scenicspot",
            "val": 0.060438451289918385
          },
          {
            "topic": "Shop",
            "val": 0.056643384876256225
          },
          {
            "topic": "Life",
            "val": 0.053918204206871184
          },
          {
            "topic": "Beauty",
            "val": 0.048387096774192874
          },
          {
            "topic": "Enterprise",
            "val": 0.042997295005853815
          },
          {
            "topic": "Finance",
            "val": 0.04023174128951487
          },
          {
            "topic": "Hotel",
            "val": 0.03231862408655972
          },
          {
            "topic": "Government",
            "val": 0.03227825103960587
          },
          {
            "topic": "Food",
            "val": 0.03225806451612894
          }
        ]
      },
      {
        "site": "28422",
        "startTime": "2014-01-14 12:44:47.51",
        "endTime": "2014-01-14 12:44:53.55",
        "stopTime": 6,
        "isStop": false,
        "latitude": 27.7932,
        "longitude": 120.6912,
        "topics": [
          {
            "topic": "Beauty",
            "val": 0.14197491389784678
          },
          {
            "topic": "Government",
            "val": 0.09408658633510862
          },
          {
            "topic": "Shop",
            "val": 0.09003042123822663
          },
          {
            "topic": "Hospital",
            "val": 0.06465198286178882
          },
          {
            "topic": "Life",
            "val": 0.054676009245133037
          },
          {
            "topic": "Food",
            "val": 0.04945049925545602
          },
          {
            "topic": "Uptown",
            "val": 0.04535779213067365
          },
          {
            "topic": "Traffic",
            "val": 0.044014872605355096
          },
          {
            "topic": "Scenicspot",
            "val": 0.0394288481039255
          },
          {
            "topic": "Education",
            "val": 0.03758347569498372
          },
          {
            "topic": "Finance",
            "val": 0.032705114970355144
          },
          {
            "topic": "Enterprise",
            "val": 0.03159971862638515
          },
          {
            "topic": "Hotel",
            "val": 0.027972922357326027
          }
        ]
      },
      {
        "site": "6053",
        "startTime": "2014-01-14 12:44:53.55",
        "endTime": "2014-01-14 12:45:00.7",
        "stopTime": 7,
        "isStop": false,
        "latitude": 27.7886,
        "longitude": 120.6826,
        "topics": [
          {
            "topic": "Hospital",
            "val": 0.14193668010939567
          },
          {
            "topic": "Government",
            "val": 0.13465906457145355
          },
          {
            "topic": "Finance",
            "val": 0.08726958080316445
          },
          {
            "topic": "Shop",
            "val": 0.06543673418934132
          },
          {
            "topic": "Life",
            "val": 0.05886988365085956
          },
          {
            "topic": "Scenicspot",
            "val": 0.05581050387057837
          },
          {
            "topic": "Enterprise",
            "val": 0.04196603779415612
          },
          {
            "topic": "Beauty",
            "val": 0.040729924751618816
          },
          {
            "topic": "Uptown",
            "val": 0.04008096540428649
          },
          {
            "topic": "Traffic",
            "val": 0.03464206801712006
          },
          {
            "topic": "Education",
            "val": 0.03096463171557008
          },
          {
            "topic": "Hotel",
            "val": 0.028446051391399496
          },
          {
            "topic": "Food",
            "val": 0.024737712263786286
          }
        ]
      },
      {
        "site": "28422",
        "startTime": "2014-01-14 12:45:00.7",
        "endTime": "2014-01-14 12:58:34.44",
        "stopTime": 813,
        "isStop": false,
        "latitude": 27.7932,
        "longitude": 120.6912,
        "topics": [
          {
            "topic": "Beauty",
            "val": 0.14197491389784678
          },
          {
            "topic": "Government",
            "val": 0.09408658633510862
          },
          {
            "topic": "Shop",
            "val": 0.09003042123822663
          },
          {
            "topic": "Hospital",
            "val": 0.06465198286178882
          },
          {
            "topic": "Life",
            "val": 0.054676009245133037
          },
          {
            "topic": "Food",
            "val": 0.04945049925545602
          },
          {
            "topic": "Uptown",
            "val": 0.04535779213067365
          },
          {
            "topic": "Traffic",
            "val": 0.044014872605355096
          },
          {
            "topic": "Scenicspot",
            "val": 0.0394288481039255
          },
          {
            "topic": "Education",
            "val": 0.03758347569498372
          },
          {
            "topic": "Finance",
            "val": 0.032705114970355144
          },
          {
            "topic": "Enterprise",
            "val": 0.03159971862638515
          },
          {
            "topic": "Hotel",
            "val": 0.027972922357326027
          }
        ]
      },
      {
        "site": "6053",
        "startTime": "2014-01-14 12:58:34.44",
        "endTime": "2014-01-14 12:58:43.84",
        "stopTime": 9,
        "isStop": false,
        "latitude": 27.7886,
        "longitude": 120.6826,
        "topics": [
          {
            "topic": "Hospital",
            "val": 0.14193668010939567
          },
          {
            "topic": "Government",
            "val": 0.13465906457145355
          },
          {
            "topic": "Finance",
            "val": 0.08726958080316445
          },
          {
            "topic": "Shop",
            "val": 0.06543673418934132
          },
          {
            "topic": "Life",
            "val": 0.05886988365085956
          },
          {
            "topic": "Scenicspot",
            "val": 0.05581050387057837
          },
          {
            "topic": "Enterprise",
            "val": 0.04196603779415612
          },
          {
            "topic": "Beauty",
            "val": 0.040729924751618816
          },
          {
            "topic": "Uptown",
            "val": 0.04008096540428649
          },
          {
            "topic": "Traffic",
            "val": 0.03464206801712006
          },
          {
            "topic": "Education",
            "val": 0.03096463171557008
          },
          {
            "topic": "Hotel",
            "val": 0.028446051391399496
          },
          {
            "topic": "Food",
            "val": 0.024737712263786286
          }
        ]
      },
      {
        "site": "28422",
        "startTime": "2014-01-14 12:58:43.84",
        "endTime": "2014-01-14 12:59:15.87",
        "stopTime": 32,
        "isStop": false,
        "latitude": 27.7932,
        "longitude": 120.6912,
        "topics": [
          {
            "topic": "Beauty",
            "val": 0.14197491389784678
          },
          {
            "topic": "Government",
            "val": 0.09408658633510862
          },
          {
            "topic": "Shop",
            "val": 0.09003042123822663
          },
          {
            "topic": "Hospital",
            "val": 0.06465198286178882
          },
          {
            "topic": "Life",
            "val": 0.054676009245133037
          },
          {
            "topic": "Food",
            "val": 0.04945049925545602
          },
          {
            "topic": "Uptown",
            "val": 0.04535779213067365
          },
          {
            "topic": "Traffic",
            "val": 0.044014872605355096
          },
          {
            "topic": "Scenicspot",
            "val": 0.0394288481039255
          },
          {
            "topic": "Education",
            "val": 0.03758347569498372
          },
          {
            "topic": "Finance",
            "val": 0.032705114970355144
          },
          {
            "topic": "Enterprise",
            "val": 0.03159971862638515
          },
          {
            "topic": "Hotel",
            "val": 0.027972922357326027
          }
        ]
      },
      {
        "site": "6053",
        "startTime": "2014-01-14 12:59:15.87",
        "endTime": "2014-01-14 12:59:51.64",
        "stopTime": 35,
        "isStop": false,
        "latitude": 27.7886,
        "longitude": 120.6826,
        "topics": [
          {
            "topic": "Hospital",
            "val": 0.14193668010939567
          },
          {
            "topic": "Government",
            "val": 0.13465906457145355
          },
          {
            "topic": "Finance",
            "val": 0.08726958080316445
          },
          {
            "topic": "Shop",
            "val": 0.06543673418934132
          },
          {
            "topic": "Life",
            "val": 0.05886988365085956
          },
          {
            "topic": "Scenicspot",
            "val": 0.05581050387057837
          },
          {
            "topic": "Enterprise",
            "val": 0.04196603779415612
          },
          {
            "topic": "Beauty",
            "val": 0.040729924751618816
          },
          {
            "topic": "Uptown",
            "val": 0.04008096540428649
          },
          {
            "topic": "Traffic",
            "val": 0.03464206801712006
          },
          {
            "topic": "Education",
            "val": 0.03096463171557008
          },
          {
            "topic": "Hotel",
            "val": 0.028446051391399496
          },
          {
            "topic": "Food",
            "val": 0.024737712263786286
          }
        ]
      },
      {
        "site": "28422",
        "startTime": "2014-01-14 12:59:51.64",
        "endTime": "2014-01-14 13:00:04.88",
        "stopTime": 13,
        "isStop": false,
        "latitude": 27.7932,
        "longitude": 120.6912,
        "topics": [
          {
            "topic": "Beauty",
            "val": 0.14197491389784678
          },
          {
            "topic": "Government",
            "val": 0.09408658633510862
          },
          {
            "topic": "Shop",
            "val": 0.09003042123822663
          },
          {
            "topic": "Hospital",
            "val": 0.06465198286178882
          },
          {
            "topic": "Life",
            "val": 0.054676009245133037
          },
          {
            "topic": "Food",
            "val": 0.04945049925545602
          },
          {
            "topic": "Uptown",
            "val": 0.04535779213067365
          },
          {
            "topic": "Traffic",
            "val": 0.044014872605355096
          },
          {
            "topic": "Scenicspot",
            "val": 0.0394288481039255
          },
          {
            "topic": "Education",
            "val": 0.03758347569498372
          },
          {
            "topic": "Finance",
            "val": 0.032705114970355144
          },
          {
            "topic": "Enterprise",
            "val": 0.03159971862638515
          },
          {
            "topic": "Hotel",
            "val": 0.027972922357326027
          }
        ]
      },
      {
        "site": "6053",
        "startTime": "2014-01-14 13:00:04.88",
        "endTime": "2014-01-14 13:01:10.82",
        "stopTime": 65,
        "isStop": false,
        "latitude": 27.7886,
        "longitude": 120.6826,
        "topics": [
          {
            "topic": "Hospital",
            "val": 0.14193668010939567
          },
          {
            "topic": "Government",
            "val": 0.13465906457145355
          },
          {
            "topic": "Finance",
            "val": 0.08726958080316445
          },
          {
            "topic": "Shop",
            "val": 0.06543673418934132
          },
          {
            "topic": "Life",
            "val": 0.05886988365085956
          },
          {
            "topic": "Scenicspot",
            "val": 0.05581050387057837
          },
          {
            "topic": "Enterprise",
            "val": 0.04196603779415612
          },
          {
            "topic": "Beauty",
            "val": 0.040729924751618816
          },
          {
            "topic": "Uptown",
            "val": 0.04008096540428649
          },
          {
            "topic": "Traffic",
            "val": 0.03464206801712006
          },
          {
            "topic": "Education",
            "val": 0.03096463171557008
          },
          {
            "topic": "Hotel",
            "val": 0.028446051391399496
          },
          {
            "topic": "Food",
            "val": 0.024737712263786286
          }
        ]
      },
      {
        "site": "28422",
        "startTime": "2014-01-14 13:01:10.82",
        "endTime": "2014-01-14 13:10:45.28",
        "stopTime": 574,
        "isStop": false,
        "latitude": 27.7932,
        "longitude": 120.6912,
        "topics": [
          {
            "topic": "Beauty",
            "val": 0.14197491389784678
          },
          {
            "topic": "Government",
            "val": 0.09408658633510862
          },
          {
            "topic": "Shop",
            "val": 0.09003042123822663
          },
          {
            "topic": "Hospital",
            "val": 0.06465198286178882
          },
          {
            "topic": "Life",
            "val": 0.054676009245133037
          },
          {
            "topic": "Food",
            "val": 0.04945049925545602
          },
          {
            "topic": "Uptown",
            "val": 0.04535779213067365
          },
          {
            "topic": "Traffic",
            "val": 0.044014872605355096
          },
          {
            "topic": "Scenicspot",
            "val": 0.0394288481039255
          },
          {
            "topic": "Education",
            "val": 0.03758347569498372
          },
          {
            "topic": "Finance",
            "val": 0.032705114970355144
          },
          {
            "topic": "Enterprise",
            "val": 0.03159971862638515
          },
          {
            "topic": "Hotel",
            "val": 0.027972922357326027
          }
        ]
      },
      {
        "site": "18523",
        "startTime": "2014-01-14 13:10:45.28",
        "endTime": "2014-01-14 13:12:42.21",
        "stopTime": 116,
        "isStop": false,
        "latitude": 27.7956,
        "longitude": 120.6825,
        "topics": [
          {
            "topic": "Uptown",
            "val": 0.15101538213088805
          },
          {
            "topic": "Hospital",
            "val": 0.09316080584601613
          },
          {
            "topic": "Traffic",
            "val": 0.08094795914247553
          },
          {
            "topic": "Education",
            "val": 0.07682990835318272
          },
          {
            "topic": "Scenicspot",
            "val": 0.060438451289918385
          },
          {
            "topic": "Shop",
            "val": 0.056643384876256225
          },
          {
            "topic": "Life",
            "val": 0.053918204206871184
          },
          {
            "topic": "Beauty",
            "val": 0.048387096774192874
          },
          {
            "topic": "Enterprise",
            "val": 0.042997295005853815
          },
          {
            "topic": "Finance",
            "val": 0.04023174128951487
          },
          {
            "topic": "Hotel",
            "val": 0.03231862408655972
          },
          {
            "topic": "Government",
            "val": 0.03227825103960587
          },
          {
            "topic": "Food",
            "val": 0.03225806451612894
          }
        ]
      },
      {
        "site": "28422",
        "startTime": "2014-01-14 13:12:42.21",
        "endTime": "2014-01-14 13:12:53.07",
        "stopTime": 10,
        "isStop": false,
        "latitude": 27.7932,
        "longitude": 120.6912,
        "topics": [
          {
            "topic": "Beauty",
            "val": 0.14197491389784678
          },
          {
            "topic": "Government",
            "val": 0.09408658633510862
          },
          {
            "topic": "Shop",
            "val": 0.09003042123822663
          },
          {
            "topic": "Hospital",
            "val": 0.06465198286178882
          },
          {
            "topic": "Life",
            "val": 0.054676009245133037
          },
          {
            "topic": "Food",
            "val": 0.04945049925545602
          },
          {
            "topic": "Uptown",
            "val": 0.04535779213067365
          },
          {
            "topic": "Traffic",
            "val": 0.044014872605355096
          },
          {
            "topic": "Scenicspot",
            "val": 0.0394288481039255
          },
          {
            "topic": "Education",
            "val": 0.03758347569498372
          },
          {
            "topic": "Finance",
            "val": 0.032705114970355144
          },
          {
            "topic": "Enterprise",
            "val": 0.03159971862638515
          },
          {
            "topic": "Hotel",
            "val": 0.027972922357326027
          }
        ]
      },
      {
        "site": "6053",
        "startTime": "2014-01-14 13:12:53.07",
        "endTime": "2014-01-14 13:15:03.43",
        "stopTime": 130,
        "isStop": false,
        "latitude": 27.7886,
        "longitude": 120.6826,
        "topics": [
          {
            "topic": "Hospital",
            "val": 0.14193668010939567
          },
          {
            "topic": "Government",
            "val": 0.13465906457145355
          },
          {
            "topic": "Finance",
            "val": 0.08726958080316445
          },
          {
            "topic": "Shop",
            "val": 0.06543673418934132
          },
          {
            "topic": "Life",
            "val": 0.05886988365085956
          },
          {
            "topic": "Scenicspot",
            "val": 0.05581050387057837
          },
          {
            "topic": "Enterprise",
            "val": 0.04196603779415612
          },
          {
            "topic": "Beauty",
            "val": 0.040729924751618816
          },
          {
            "topic": "Uptown",
            "val": 0.04008096540428649
          },
          {
            "topic": "Traffic",
            "val": 0.03464206801712006
          },
          {
            "topic": "Education",
            "val": 0.03096463171557008
          },
          {
            "topic": "Hotel",
            "val": 0.028446051391399496
          },
          {
            "topic": "Food",
            "val": 0.024737712263786286
          }
        ]
      },
      {
        "site": "2305",
        "startTime": "2014-01-14 13:15:03.43",
        "endTime": "2014-01-14 22:27:12.18",
        "stopTime": 33128,
        "isStop": true,
        "stoppoint": 1,
        "latitude": 27.7862,
        "longitude": 120.689,
        "topics": [
          {
            "topic": "Hospital",
            "val": 0.14748346146969452
          },
          {
            "topic": "Education",
            "val": 0.09898533881637712
          },
          {
            "topic": "Scenicspot",
            "val": 0.09181119256213081
          },
          {
            "topic": "Traffic",
            "val": 0.08494993742177692
          },
          {
            "topic": "Life",
            "val": 0.07010995887716794
          },
          {
            "topic": "Beauty",
            "val": 0.05491239048811022
          },
          {
            "topic": "Government",
            "val": 0.05261040586447339
          },
          {
            "topic": "Shop",
            "val": 0.046173788664401624
          },
          {
            "topic": "Finance",
            "val": 0.0399606651171103
          },
          {
            "topic": "Uptown",
            "val": 0.03991596638655423
          },
          {
            "topic": "Hotel",
            "val": 0.0368988020740208
          },
          {
            "topic": "Food",
            "val": 0.036697657786518574
          },
          {
            "topic": "Enterprise",
            "val": 0.035714285714285456
          }
        ]
      }
    ],
    "matching": true
  },
  {
    "pid": "460000112826910",
    "traj": [
      {
        "site": "584",
        "startTime": "2014-01-14 05:50:54.91",
        "endTime": "2014-01-14 07:38:13.42",
        "stopTime": 6438,
        "isStop": true,
        "stoppoint": 0,
        "latitude": 27.785,
        "longitude": 120.6761,
        "topics": [
          {
            "topic": "Beauty",
            "val": 0.15814175614254664
          },
          {
            "topic": "Uptown",
            "val": 0.08891048020552089
          },
          {
            "topic": "Food",
            "val": 0.0810717344048491
          },
          {
            "topic": "Scenicspot",
            "val": 0.0788485607008769
          },
          {
            "topic": "Shop",
            "val": 0.07734997694486608
          },
          {
            "topic": "Education",
            "val": 0.06394506290758244
          },
          {
            "topic": "Hospital",
            "val": 0.061129042882550895
          },
          {
            "topic": "Hotel",
            "val": 0.0450398524471383
          },
          {
            "topic": "Finance",
            "val": 0.03795863250115318
          },
          {
            "topic": "Life",
            "val": 0.027353270535538262
          },
          {
            "topic": "Government",
            "val": 0.026365193333772904
          },
          {
            "topic": "Traffic",
            "val": 0.026332257427047392
          },
          {
            "topic": "Enterprise",
            "val": 0.026315789473684632
          }
        ]
      },
      {
        "site": "19912",
        "startTime": "2014-01-14 07:38:13.42",
        "endTime": "2014-01-14 07:47:00.28",
        "stopTime": 526,
        "isStop": false,
        "latitude": 27.7898,
        "longitude": 120.6973,
        "topics": [
          {
            "topic": "Shop",
            "val": 0.0906587780179772
          },
          {
            "topic": "Enterprise",
            "val": 0.07834793491864862
          },
          {
            "topic": "Education",
            "val": 0.0575492092388213
          },
          {
            "topic": "Uptown",
            "val": 0.0546819888496986
          },
          {
            "topic": "Life",
            "val": 0.05006257822277862
          },
          {
            "topic": "Finance",
            "val": 0.048196609398111344
          },
          {
            "topic": "Food",
            "val": 0.047513937876891725
          },
          {
            "topic": "Beauty",
            "val": 0.040300375469336375
          },
          {
            "topic": "Hotel",
            "val": 0.039663215382864624
          },
          {
            "topic": "Hospital",
            "val": 0.03813858231880727
          },
          {
            "topic": "Traffic",
            "val": 0.03638639208101
          },
          {
            "topic": "Scenicspot",
            "val": 0.036363636363636015
          },
          {
            "topic": "Government",
            "val": 0.036363636363636015
          }
        ]
      },
      {
        "site": "6362",
        "startTime": "2014-01-14 07:47:00.28",
        "endTime": "2014-01-14 07:49:56.13",
        "stopTime": 175,
        "isStop": false,
        "latitude": 27.7817,
        "longitude": 120.7001,
        "topics": [
          {
            "topic": "Enterprise",
            "val": 0.0743917702005545
          },
          {
            "topic": "Government",
            "val": 0.07237705668671104
          },
          {
            "topic": "Shop",
            "val": 0.0720717970634014
          },
          {
            "topic": "Finance",
            "val": 0.055221465856710124
          },
          {
            "topic": "Scenicspot",
            "val": 0.04957416282548208
          },
          {
            "topic": "Life",
            "val": 0.0489025916542009
          },
          {
            "topic": "Beauty",
            "val": 0.04884153972953897
          },
          {
            "topic": "Hotel",
            "val": 0.048811013767208006
          },
          {
            "topic": "Education",
            "val": 0.048811013767208006
          },
          {
            "topic": "Traffic",
            "val": 0.048780487804877044
          },
          {
            "topic": "Uptown",
            "val": 0.048780487804877044
          },
          {
            "topic": "Food",
            "val": 0.048780487804877044
          },
          {
            "topic": "Hospital",
            "val": 0.048780487804877044
          }
        ]
      },
      {
        "site": "19912",
        "startTime": "2014-01-14 07:49:56.13",
        "endTime": "2014-01-14 07:50:08.84",
        "stopTime": 12,
        "isStop": false,
        "latitude": 27.7898,
        "longitude": 120.6973,
        "topics": [
          {
            "topic": "Shop",
            "val": 0.0906587780179772
          },
          {
            "topic": "Enterprise",
            "val": 0.07834793491864862
          },
          {
            "topic": "Education",
            "val": 0.0575492092388213
          },
          {
            "topic": "Uptown",
            "val": 0.0546819888496986
          },
          {
            "topic": "Life",
            "val": 0.05006257822277862
          },
          {
            "topic": "Finance",
            "val": 0.048196609398111344
          },
          {
            "topic": "Food",
            "val": 0.047513937876891725
          },
          {
            "topic": "Beauty",
            "val": 0.040300375469336375
          },
          {
            "topic": "Hotel",
            "val": 0.039663215382864624
          },
          {
            "topic": "Hospital",
            "val": 0.03813858231880727
          },
          {
            "topic": "Traffic",
            "val": 0.03638639208101
          },
          {
            "topic": "Scenicspot",
            "val": 0.036363636363636015
          },
          {
            "topic": "Government",
            "val": 0.036363636363636015
          }
        ]
      },
      {
        "site": "2305",
        "startTime": "2014-01-14 07:50:08.84",
        "endTime": "2014-01-14 07:53:28.26",
        "stopTime": 199,
        "isStop": false,
        "latitude": 27.7862,
        "longitude": 120.689,
        "topics": [
          {
            "topic": "Hospital",
            "val": 0.14748346146969452
          },
          {
            "topic": "Education",
            "val": 0.09898533881637712
          },
          {
            "topic": "Scenicspot",
            "val": 0.09181119256213081
          },
          {
            "topic": "Traffic",
            "val": 0.08494993742177692
          },
          {
            "topic": "Life",
            "val": 0.07010995887716794
          },
          {
            "topic": "Beauty",
            "val": 0.05491239048811022
          },
          {
            "topic": "Government",
            "val": 0.05261040586447339
          },
          {
            "topic": "Shop",
            "val": 0.046173788664401624
          },
          {
            "topic": "Finance",
            "val": 0.0399606651171103
          },
          {
            "topic": "Uptown",
            "val": 0.03991596638655423
          },
          {
            "topic": "Hotel",
            "val": 0.0368988020740208
          },
          {
            "topic": "Food",
            "val": 0.036697657786518574
          },
          {
            "topic": "Enterprise",
            "val": 0.035714285714285456
          }
        ]
      },
      {
        "site": "19912",
        "startTime": "2014-01-14 07:53:28.26",
        "endTime": "2014-01-14 10:28:42.09",
        "stopTime": 9313,
        "isStop": true,
        "latitude": 27.7898,
        "longitude": 120.6973,
        "topics": [
          {
            "topic": "Shop",
            "val": 0.0906587780179772
          },
          {
            "topic": "Enterprise",
            "val": 0.07834793491864862
          },
          {
            "topic": "Education",
            "val": 0.0575492092388213
          },
          {
            "topic": "Uptown",
            "val": 0.0546819888496986
          },
          {
            "topic": "Life",
            "val": 0.05006257822277862
          },
          {
            "topic": "Finance",
            "val": 0.048196609398111344
          },
          {
            "topic": "Food",
            "val": 0.047513937876891725
          },
          {
            "topic": "Beauty",
            "val": 0.040300375469336375
          },
          {
            "topic": "Hotel",
            "val": 0.039663215382864624
          },
          {
            "topic": "Hospital",
            "val": 0.03813858231880727
          },
          {
            "topic": "Traffic",
            "val": 0.03638639208101
          },
          {
            "topic": "Scenicspot",
            "val": 0.036363636363636015
          },
          {
            "topic": "Government",
            "val": 0.036363636363636015
          }
        ]
      },
      {
        "site": "2305",
        "startTime": "2014-01-14 10:28:42.09",
        "endTime": "2014-01-14 10:46:23.64",
        "stopTime": 1061,
        "isStop": false,
        "latitude": 27.7862,
        "longitude": 120.689,
        "topics": [
          {
            "topic": "Hospital",
            "val": 0.14748346146969452
          },
          {
            "topic": "Education",
            "val": 0.09898533881637712
          },
          {
            "topic": "Scenicspot",
            "val": 0.09181119256213081
          },
          {
            "topic": "Traffic",
            "val": 0.08494993742177692
          },
          {
            "topic": "Life",
            "val": 0.07010995887716794
          },
          {
            "topic": "Beauty",
            "val": 0.05491239048811022
          },
          {
            "topic": "Government",
            "val": 0.05261040586447339
          },
          {
            "topic": "Shop",
            "val": 0.046173788664401624
          },
          {
            "topic": "Finance",
            "val": 0.0399606651171103
          },
          {
            "topic": "Uptown",
            "val": 0.03991596638655423
          },
          {
            "topic": "Hotel",
            "val": 0.0368988020740208
          },
          {
            "topic": "Food",
            "val": 0.036697657786518574
          },
          {
            "topic": "Enterprise",
            "val": 0.035714285714285456
          }
        ]
      },
      {
        "site": "584",
        "startTime": "2014-01-14 10:46:23.64",
        "endTime": "2014-01-14 12:16:58.92",
        "stopTime": 5435,
        "isStop": true,
        "latitude": 27.785,
        "longitude": 120.6761,
        "topics": [
          {
            "topic": "Beauty",
            "val": 0.15814175614254664
          },
          {
            "topic": "Uptown",
            "val": 0.08891048020552089
          },
          {
            "topic": "Food",
            "val": 0.0810717344048491
          },
          {
            "topic": "Scenicspot",
            "val": 0.0788485607008769
          },
          {
            "topic": "Shop",
            "val": 0.07734997694486608
          },
          {
            "topic": "Education",
            "val": 0.06394506290758244
          },
          {
            "topic": "Hospital",
            "val": 0.061129042882550895
          },
          {
            "topic": "Hotel",
            "val": 0.0450398524471383
          },
          {
            "topic": "Finance",
            "val": 0.03795863250115318
          },
          {
            "topic": "Life",
            "val": 0.027353270535538262
          },
          {
            "topic": "Government",
            "val": 0.026365193333772904
          },
          {
            "topic": "Traffic",
            "val": 0.026332257427047392
          },
          {
            "topic": "Enterprise",
            "val": 0.026315789473684632
          }
        ]
      },
      {
        "site": "19912",
        "startTime": "2014-01-14 12:16:58.92",
        "endTime": "2014-01-14 14:25:31.84",
        "stopTime": 7712,
        "isStop": true,
        "latitude": 27.7898,
        "longitude": 120.6973,
        "topics": [
          {
            "topic": "Shop",
            "val": 0.0906587780179772
          },
          {
            "topic": "Enterprise",
            "val": 0.07834793491864862
          },
          {
            "topic": "Education",
            "val": 0.0575492092388213
          },
          {
            "topic": "Uptown",
            "val": 0.0546819888496986
          },
          {
            "topic": "Life",
            "val": 0.05006257822277862
          },
          {
            "topic": "Finance",
            "val": 0.048196609398111344
          },
          {
            "topic": "Food",
            "val": 0.047513937876891725
          },
          {
            "topic": "Beauty",
            "val": 0.040300375469336375
          },
          {
            "topic": "Hotel",
            "val": 0.039663215382864624
          },
          {
            "topic": "Hospital",
            "val": 0.03813858231880727
          },
          {
            "topic": "Traffic",
            "val": 0.03638639208101
          },
          {
            "topic": "Scenicspot",
            "val": 0.036363636363636015
          },
          {
            "topic": "Government",
            "val": 0.036363636363636015
          }
        ]
      },
      {
        "site": "2305",
        "startTime": "2014-01-14 14:25:31.84",
        "endTime": "2014-01-14 14:38:43.91",
        "stopTime": 792,
        "isStop": false,
        "latitude": 27.7862,
        "longitude": 120.689,
        "topics": [
          {
            "topic": "Hospital",
            "val": 0.14748346146969452
          },
          {
            "topic": "Education",
            "val": 0.09898533881637712
          },
          {
            "topic": "Scenicspot",
            "val": 0.09181119256213081
          },
          {
            "topic": "Traffic",
            "val": 0.08494993742177692
          },
          {
            "topic": "Life",
            "val": 0.07010995887716794
          },
          {
            "topic": "Beauty",
            "val": 0.05491239048811022
          },
          {
            "topic": "Government",
            "val": 0.05261040586447339
          },
          {
            "topic": "Shop",
            "val": 0.046173788664401624
          },
          {
            "topic": "Finance",
            "val": 0.0399606651171103
          },
          {
            "topic": "Uptown",
            "val": 0.03991596638655423
          },
          {
            "topic": "Hotel",
            "val": 0.0368988020740208
          },
          {
            "topic": "Food",
            "val": 0.036697657786518574
          },
          {
            "topic": "Enterprise",
            "val": 0.035714285714285456
          }
        ]
      },
      {
        "site": "19912",
        "startTime": "2014-01-14 14:38:43.91",
        "endTime": "2014-01-14 14:39:24.48",
        "stopTime": 40,
        "isStop": false,
        "latitude": 27.7898,
        "longitude": 120.6973,
        "topics": [
          {
            "topic": "Shop",
            "val": 0.0906587780179772
          },
          {
            "topic": "Enterprise",
            "val": 0.07834793491864862
          },
          {
            "topic": "Education",
            "val": 0.0575492092388213
          },
          {
            "topic": "Uptown",
            "val": 0.0546819888496986
          },
          {
            "topic": "Life",
            "val": 0.05006257822277862
          },
          {
            "topic": "Finance",
            "val": 0.048196609398111344
          },
          {
            "topic": "Food",
            "val": 0.047513937876891725
          },
          {
            "topic": "Beauty",
            "val": 0.040300375469336375
          },
          {
            "topic": "Hotel",
            "val": 0.039663215382864624
          },
          {
            "topic": "Hospital",
            "val": 0.03813858231880727
          },
          {
            "topic": "Traffic",
            "val": 0.03638639208101
          },
          {
            "topic": "Scenicspot",
            "val": 0.036363636363636015
          },
          {
            "topic": "Government",
            "val": 0.036363636363636015
          }
        ]
      },
      {
        "site": "2305",
        "startTime": "2014-01-14 14:39:24.48",
        "endTime": "2014-01-14 15:09:01.2",
        "stopTime": 1776,
        "isStop": true,
        "stoppoint": 1,
        "latitude": 27.7862,
        "longitude": 120.689,
        "topics": [
          {
            "topic": "Hospital",
            "val": 0.14748346146969452
          },
          {
            "topic": "Education",
            "val": 0.09898533881637712
          },
          {
            "topic": "Scenicspot",
            "val": 0.09181119256213081
          },
          {
            "topic": "Traffic",
            "val": 0.08494993742177692
          },
          {
            "topic": "Life",
            "val": 0.07010995887716794
          },
          {
            "topic": "Beauty",
            "val": 0.05491239048811022
          },
          {
            "topic": "Government",
            "val": 0.05261040586447339
          },
          {
            "topic": "Shop",
            "val": 0.046173788664401624
          },
          {
            "topic": "Finance",
            "val": 0.0399606651171103
          },
          {
            "topic": "Uptown",
            "val": 0.03991596638655423
          },
          {
            "topic": "Hotel",
            "val": 0.0368988020740208
          },
          {
            "topic": "Food",
            "val": 0.036697657786518574
          },
          {
            "topic": "Enterprise",
            "val": 0.035714285714285456
          }
        ]
      }
    ],
    "matching": true
  },
  {
    "pid": "460000112828695",
    "traj": [
      {
        "site": "25950",
        "isStop": true,
        "startTime": "2014-01-14 01:48:49.41",
        "endTime": "2014-01-14 03:48:51.03",
        "stopTime": 7201,
        "stoppoint": 0,
        "latitude": 27.9561,
        "longitude": 120.6516,
        "topics": [
          {
            "topic": "Shop",
            "val": 0.14022651264900798
          },
          {
            "topic": "Beauty",
            "val": 0.09580110383881471
          },
          {
            "topic": "Hotel",
            "val": 0.06422987751082282
          },
          {
            "topic": "Hospital",
            "val": 0.053052996573585816
          },
          {
            "topic": "Enterprise",
            "val": 0.04390221383286483
          },
          {
            "topic": "Food",
            "val": 0.04095283038224008
          },
          {
            "topic": "Finance",
            "val": 0.03994234596524333
          },
          {
            "topic": "Education",
            "val": 0.03696731570200442
          },
          {
            "topic": "Government",
            "val": 0.028396150926362478
          },
          {
            "topic": "Life",
            "val": 0.023630973142657805
          },
          {
            "topic": "Uptown",
            "val": 0.016075422146535526
          },
          {
            "topic": "Traffic",
            "val": 0.016034387246353022
          },
          {
            "topic": "Scenicspot",
            "val": 0.010120232257535009
          }
        ]
      },
      {
        "site": "14253",
        "startTime": "2014-01-14 03:48:51.03",
        "endTime": "2014-01-14 07:48:54.26",
        "stopTime": 14403,
        "isStop": true,
        "latitude": 27.9524,
        "longitude": 120.6491,
        "topics": [
          {
            "topic": "Shop",
            "val": 0.1244530870199317
          },
          {
            "topic": "Beauty",
            "val": 0.09450863165734046
          },
          {
            "topic": "Life",
            "val": 0.0711012732858219
          },
          {
            "topic": "Hospital",
            "val": 0.06783272479028508
          },
          {
            "topic": "Food",
            "val": 0.058337384540592806
          },
          {
            "topic": "Education",
            "val": 0.046566472553501694
          },
          {
            "topic": "Enterprise",
            "val": 0.041580901747018444
          },
          {
            "topic": "Hotel",
            "val": 0.0325303323369088
          },
          {
            "topic": "Government",
            "val": 0.03243724076583319
          },
          {
            "topic": "Scenicspot",
            "val": 0.030492661281146936
          },
          {
            "topic": "Traffic",
            "val": 0.02827915059113151
          },
          {
            "topic": "Finance",
            "val": 0.024741670890265584
          },
          {
            "topic": "Uptown",
            "val": 0.017852894630684908
          }
        ]
      },
      {
        "site": "1180",
        "startTime": "2014-01-14 07:48:54.26",
        "endTime": "2014-01-14 07:53:49.77",
        "stopTime": 295,
        "isStop": false,
        "latitude": 27.951,
        "longitude": 120.6569,
        "topics": [
          {
            "topic": "Uptown",
            "val": 0.11924741993064933
          },
          {
            "topic": "Traffic",
            "val": 0.1069985022261426
          },
          {
            "topic": "Finance",
            "val": 0.09639098052893957
          },
          {
            "topic": "Enterprise",
            "val": 0.07058002831408126
          },
          {
            "topic": "Education",
            "val": 0.05457641724286526
          },
          {
            "topic": "Shop",
            "val": 0.04905722316830481
          },
          {
            "topic": "Life",
            "val": 0.04454338414821841
          },
          {
            "topic": "Scenicspot",
            "val": 0.04400993044584429
          },
          {
            "topic": "Hospital",
            "val": 0.04031678942940961
          },
          {
            "topic": "Beauty",
            "val": 0.032827920146083905
          },
          {
            "topic": "Hotel",
            "val": 0.0328074026959926
          },
          {
            "topic": "Food",
            "val": 0.0327868852459013
          },
          {
            "topic": "Government",
            "val": 0.0327868852459013
          }
        ]
      },
      {
        "site": "25950",
        "startTime": "2014-01-14 07:53:49.77",
        "endTime": "2014-01-14 07:55:46.74",
        "stopTime": 116,
        "isStop": false,
        "latitude": 27.9561,
        "longitude": 120.6516,
        "topics": [
          {
            "topic": "Shop",
            "val": 0.14022651264900798
          },
          {
            "topic": "Beauty",
            "val": 0.09580110383881471
          },
          {
            "topic": "Hotel",
            "val": 0.06422987751082282
          },
          {
            "topic": "Hospital",
            "val": 0.053052996573585816
          },
          {
            "topic": "Enterprise",
            "val": 0.04390221383286483
          },
          {
            "topic": "Food",
            "val": 0.04095283038224008
          },
          {
            "topic": "Finance",
            "val": 0.03994234596524333
          },
          {
            "topic": "Education",
            "val": 0.03696731570200442
          },
          {
            "topic": "Government",
            "val": 0.028396150926362478
          },
          {
            "topic": "Life",
            "val": 0.023630973142657805
          },
          {
            "topic": "Uptown",
            "val": 0.016075422146535526
          },
          {
            "topic": "Traffic",
            "val": 0.016034387246353022
          },
          {
            "topic": "Scenicspot",
            "val": 0.010120232257535009
          }
        ]
      },
      {
        "site": "1180",
        "startTime": "2014-01-14 07:55:46.74",
        "endTime": "2014-01-14 08:40:37.46",
        "stopTime": 2690,
        "isStop": true,
        "latitude": 27.951,
        "longitude": 120.6569,
        "topics": [
          {
            "topic": "Uptown",
            "val": 0.11924741993064933
          },
          {
            "topic": "Traffic",
            "val": 0.1069985022261426
          },
          {
            "topic": "Finance",
            "val": 0.09639098052893957
          },
          {
            "topic": "Enterprise",
            "val": 0.07058002831408126
          },
          {
            "topic": "Education",
            "val": 0.05457641724286526
          },
          {
            "topic": "Shop",
            "val": 0.04905722316830481
          },
          {
            "topic": "Life",
            "val": 0.04454338414821841
          },
          {
            "topic": "Scenicspot",
            "val": 0.04400993044584429
          },
          {
            "topic": "Hospital",
            "val": 0.04031678942940961
          },
          {
            "topic": "Beauty",
            "val": 0.032827920146083905
          },
          {
            "topic": "Hotel",
            "val": 0.0328074026959926
          },
          {
            "topic": "Food",
            "val": 0.0327868852459013
          },
          {
            "topic": "Government",
            "val": 0.0327868852459013
          }
        ]
      },
      {
        "site": "14253",
        "startTime": "2014-01-14 08:40:37.46",
        "endTime": "2014-01-14 09:03:27.39",
        "stopTime": 1369,
        "isStop": true,
        "latitude": 27.9524,
        "longitude": 120.6491,
        "topics": [
          {
            "topic": "Shop",
            "val": 0.1244530870199317
          },
          {
            "topic": "Beauty",
            "val": 0.09450863165734046
          },
          {
            "topic": "Life",
            "val": 0.0711012732858219
          },
          {
            "topic": "Hospital",
            "val": 0.06783272479028508
          },
          {
            "topic": "Food",
            "val": 0.058337384540592806
          },
          {
            "topic": "Education",
            "val": 0.046566472553501694
          },
          {
            "topic": "Enterprise",
            "val": 0.041580901747018444
          },
          {
            "topic": "Hotel",
            "val": 0.0325303323369088
          },
          {
            "topic": "Government",
            "val": 0.03243724076583319
          },
          {
            "topic": "Scenicspot",
            "val": 0.030492661281146936
          },
          {
            "topic": "Traffic",
            "val": 0.02827915059113151
          },
          {
            "topic": "Finance",
            "val": 0.024741670890265584
          },
          {
            "topic": "Uptown",
            "val": 0.017852894630684908
          }
        ]
      },
      {
        "site": "1180",
        "startTime": "2014-01-14 09:03:27.39",
        "endTime": "2014-01-14 10:19:55.49",
        "stopTime": 4588,
        "isStop": true,
        "latitude": 27.951,
        "longitude": 120.6569,
        "topics": [
          {
            "topic": "Uptown",
            "val": 0.11924741993064933
          },
          {
            "topic": "Traffic",
            "val": 0.1069985022261426
          },
          {
            "topic": "Finance",
            "val": 0.09639098052893957
          },
          {
            "topic": "Enterprise",
            "val": 0.07058002831408126
          },
          {
            "topic": "Education",
            "val": 0.05457641724286526
          },
          {
            "topic": "Shop",
            "val": 0.04905722316830481
          },
          {
            "topic": "Life",
            "val": 0.04454338414821841
          },
          {
            "topic": "Scenicspot",
            "val": 0.04400993044584429
          },
          {
            "topic": "Hospital",
            "val": 0.04031678942940961
          },
          {
            "topic": "Beauty",
            "val": 0.032827920146083905
          },
          {
            "topic": "Hotel",
            "val": 0.0328074026959926
          },
          {
            "topic": "Food",
            "val": 0.0327868852459013
          },
          {
            "topic": "Government",
            "val": 0.0327868852459013
          }
        ]
      },
      {
        "site": "25950",
        "startTime": "2014-01-14 10:19:55.49",
        "endTime": "2014-01-14 16:58:16.06",
        "stopTime": 23900,
        "isStop": true,
        "stoppoint": 1,
        "latitude": 27.9561,
        "longitude": 120.6516,
        "topics": [
          {
            "topic": "Shop",
            "val": 0.14022651264900798
          },
          {
            "topic": "Beauty",
            "val": 0.09580110383881471
          },
          {
            "topic": "Hotel",
            "val": 0.06422987751082282
          },
          {
            "topic": "Hospital",
            "val": 0.053052996573585816
          },
          {
            "topic": "Enterprise",
            "val": 0.04390221383286483
          },
          {
            "topic": "Food",
            "val": 0.04095283038224008
          },
          {
            "topic": "Finance",
            "val": 0.03994234596524333
          },
          {
            "topic": "Education",
            "val": 0.03696731570200442
          },
          {
            "topic": "Government",
            "val": 0.028396150926362478
          },
          {
            "topic": "Life",
            "val": 0.023630973142657805
          },
          {
            "topic": "Uptown",
            "val": 0.016075422146535526
          },
          {
            "topic": "Traffic",
            "val": 0.016034387246353022
          },
          {
            "topic": "Scenicspot",
            "val": 0.010120232257535009
          }
        ]
      }
    ],
    "matching": true
  },
  {
    "pid": "460000112841126",
    "traj": [
      {
        "site": "15870",
        "isStop": true,
        "startTime": "2014-01-14 01:19:34.47",
        "endTime": "2014-01-14 13:36:52.6",
        "stopTime": 44238,
        "stoppoint": 0,
        "latitude": 28.153,
        "longitude": 120.392,
        "topics": [
          {
            "topic": "Beauty",
            "val": 0.12420683364770695
          },
          {
            "topic": "Finance",
            "val": 0.08929909986407338
          },
          {
            "topic": "Government",
            "val": 0.08090453058639831
          },
          {
            "topic": "Hospital",
            "val": 0.07605405719885158
          },
          {
            "topic": "Life",
            "val": 0.07376873800664209
          },
          {
            "topic": "Hotel",
            "val": 0.06642282876646138
          },
          {
            "topic": "Shop",
            "val": 0.0653155091578649
          },
          {
            "topic": "Food",
            "val": 0.05267196750452089
          },
          {
            "topic": "Uptown",
            "val": 0.045978525788815
          },
          {
            "topic": "Traffic",
            "val": 0.044312016990119704
          },
          {
            "topic": "Education",
            "val": 0.0392509461259921
          },
          {
            "topic": "Enterprise",
            "val": 0.03241422119562631
          },
          {
            "topic": "Scenicspot",
            "val": 0.020070228007829632
          }
        ]
      },
      {
        "site": "22903",
        "startTime": "2014-01-14 13:36:52.6",
        "endTime": "2014-01-14 13:39:40.32",
        "stopTime": 167,
        "isStop": false,
        "latitude": 28.1555,
        "longitude": 120.3983,
        "topics": [
          {
            "topic": "Beauty",
            "val": 0.1297569450397475
          },
          {
            "topic": "Shop",
            "val": 0.11057200496053864
          },
          {
            "topic": "Life",
            "val": 0.06578428515095953
          },
          {
            "topic": "Enterprise",
            "val": 0.06304113017984818
          },
          {
            "topic": "Food",
            "val": 0.06216103462661673
          },
          {
            "topic": "Hospital",
            "val": 0.04055868922911634
          },
          {
            "topic": "Traffic",
            "val": 0.03494093644452829
          },
          {
            "topic": "Scenicspot",
            "val": 0.031186243077819937
          },
          {
            "topic": "Hotel",
            "val": 0.027505843491579123
          },
          {
            "topic": "Education",
            "val": 0.025854235602722715
          },
          {
            "topic": "Finance",
            "val": 0.02372829050011148
          },
          {
            "topic": "Government",
            "val": 0.017681919751287432
          },
          {
            "topic": "Uptown",
            "val": 0.011869860156245568
          }
        ]
      },
      {
        "site": "26978",
        "startTime": "2014-01-14 13:39:40.32",
        "endTime": "2014-01-14 13:39:50.54",
        "stopTime": 10,
        "isStop": false,
        "latitude": 28.1553,
        "longitude": 120.419,
        "topics": [
          {
            "topic": "Scenicspot",
            "val": 0.10711759264297713
          },
          {
            "topic": "Government",
            "val": 0.10698155302824079
          },
          {
            "topic": "Life",
            "val": 0.09773085922620618
          },
          {
            "topic": "Traffic",
            "val": 0.082412798606955
          },
          {
            "topic": "Hospital",
            "val": 0.05403493497306421
          },
          {
            "topic": "Hotel",
            "val": 0.052701746748653425
          },
          {
            "topic": "Education",
            "val": 0.050198617837514385
          },
          {
            "topic": "Uptown",
            "val": 0.05006257822277843
          },
          {
            "topic": "Beauty",
            "val": 0.04919192468846929
          },
          {
            "topic": "Finance",
            "val": 0.04502911247755359
          },
          {
            "topic": "Food",
            "val": 0.0436143004843012
          },
          {
            "topic": "Shop",
            "val": 0.04350546879251255
          },
          {
            "topic": "Enterprise",
            "val": 0.04347826086956539
          }
        ]
      },
      {
        "site": "15870",
        "startTime": "2014-01-14 13:39:50.54",
        "endTime": "2014-01-14 13:36:52.6",
        "stopTime": 86222,
        "isStop": true,
        "stoppoint": 1,
        "latitude": 28.153,
        "longitude": 120.392,
        "topics": [
          {
            "topic": "Beauty",
            "val": 0.12420683364770695
          },
          {
            "topic": "Finance",
            "val": 0.08929909986407338
          },
          {
            "topic": "Government",
            "val": 0.08090453058639831
          },
          {
            "topic": "Hospital",
            "val": 0.07605405719885158
          },
          {
            "topic": "Life",
            "val": 0.07376873800664209
          },
          {
            "topic": "Hotel",
            "val": 0.06642282876646138
          },
          {
            "topic": "Shop",
            "val": 0.0653155091578649
          },
          {
            "topic": "Food",
            "val": 0.05267196750452089
          },
          {
            "topic": "Uptown",
            "val": 0.045978525788815
          },
          {
            "topic": "Traffic",
            "val": 0.044312016990119704
          },
          {
            "topic": "Education",
            "val": 0.0392509461259921
          },
          {
            "topic": "Enterprise",
            "val": 0.03241422119562631
          },
          {
            "topic": "Scenicspot",
            "val": 0.020070228007829632
          }
        ]
      }
    ],
    "matching": true
  },
  {
    "pid": "460000122810648",
    "traj": [
      {
        "site": "8176",
        "isStop": true,
        "startTime": "2014-01-13 23:54:57.28",
        "endTime": "2014-01-14 08:10:38.79",
        "stopTime": 29741,
        "stoppoint": 0,
        "latitude": 28.0661,
        "longitude": 120.5849,
        "topics": [
          {
            "topic": "Finance",
            "val": 0.11324407307695748
          },
          {
            "topic": "Beauty",
            "val": 0.09246270067800577
          },
          {
            "topic": "Shop",
            "val": 0.09086898191084185
          },
          {
            "topic": "Life",
            "val": 0.07157327954907657
          },
          {
            "topic": "Government",
            "val": 0.07143821863660578
          },
          {
            "topic": "Education",
            "val": 0.06587370904277809
          },
          {
            "topic": "Hospital",
            "val": 0.057193794401274915
          },
          {
            "topic": "Uptown",
            "val": 0.045488515320409664
          },
          {
            "topic": "Enterprise",
            "val": 0.03375622405704983
          },
          {
            "topic": "Food",
            "val": 0.03163126570083121
          },
          {
            "topic": "Hotel",
            "val": 0.029524315466275285
          },
          {
            "topic": "Scenicspot",
            "val": 0.025859662707881276
          },
          {
            "topic": "Traffic",
            "val": 0.024689134799794756
          }
        ]
      },
      {
        "site": "5341",
        "startTime": "2014-01-14 08:10:38.79",
        "endTime": "2014-01-14 08:45:34.9",
        "stopTime": 2096,
        "isStop": true,
        "stoppoint": 1,
        "latitude": 28.0645,
        "longitude": 120.5822,
        "topics": [
          {
            "topic": "Shop",
            "val": 0.16994190499318182
          },
          {
            "topic": "Beauty",
            "val": 0.06976070834812188
          },
          {
            "topic": "Food",
            "val": 0.05689014252890741
          },
          {
            "topic": "Government",
            "val": 0.044318457773709886
          },
          {
            "topic": "Life",
            "val": 0.043842116077933146
          },
          {
            "topic": "Hospital",
            "val": 0.04238507089085231
          },
          {
            "topic": "Education",
            "val": 0.03679973100704248
          },
          {
            "topic": "Finance",
            "val": 0.035520146451721364
          },
          {
            "topic": "Enterprise",
            "val": 0.029196943941120507
          },
          {
            "topic": "Scenicspot",
            "val": 0.025815851904432804
          },
          {
            "topic": "Uptown",
            "val": 0.02431210655109936
          },
          {
            "topic": "Traffic",
            "val": 0.02277100106476395
          },
          {
            "topic": "Hotel",
            "val": 0.020762893915902542
          }
        ]
      }
    ],
    "matching": true
  },
  {
    "pid": "460000122810982",
    "traj": [
      {
        "site": "8176",
        "isStop": true,
        "startTime": "2014-01-14 01:32:21.54",
        "endTime": "2014-01-14 07:32:09.68",
        "stopTime": 21588,
        "stoppoint": 0,
        "latitude": 28.0661,
        "longitude": 120.5849,
        "topics": [
          {
            "topic": "Finance",
            "val": 0.11324407307695748
          },
          {
            "topic": "Beauty",
            "val": 0.09246270067800577
          },
          {
            "topic": "Shop",
            "val": 0.09086898191084185
          },
          {
            "topic": "Life",
            "val": 0.07157327954907657
          },
          {
            "topic": "Government",
            "val": 0.07143821863660578
          },
          {
            "topic": "Education",
            "val": 0.06587370904277809
          },
          {
            "topic": "Hospital",
            "val": 0.057193794401274915
          },
          {
            "topic": "Uptown",
            "val": 0.045488515320409664
          },
          {
            "topic": "Enterprise",
            "val": 0.03375622405704983
          },
          {
            "topic": "Food",
            "val": 0.03163126570083121
          },
          {
            "topic": "Hotel",
            "val": 0.029524315466275285
          },
          {
            "topic": "Scenicspot",
            "val": 0.025859662707881276
          },
          {
            "topic": "Traffic",
            "val": 0.024689134799794756
          }
        ]
      },
      {
        "site": "12722",
        "startTime": "2014-01-14 07:32:09.68",
        "endTime": "2014-01-14 07:50:35.91",
        "stopTime": 1106,
        "isStop": false,
        "latitude": 28.0691,
        "longitude": 120.5728,
        "topics": [
          {
            "topic": "Traffic",
            "val": 0.10678241418794678
          },
          {
            "topic": "Shop",
            "val": 0.07514712539610616
          },
          {
            "topic": "Enterprise",
            "val": 0.06367001304822459
          },
          {
            "topic": "Life",
            "val": 0.05834420685431212
          },
          {
            "topic": "Scenicspot",
            "val": 0.05424333608499939
          },
          {
            "topic": "Finance",
            "val": 0.052459191010038694
          },
          {
            "topic": "Hospital",
            "val": 0.05150054589513441
          },
          {
            "topic": "Education",
            "val": 0.04689372353740003
          },
          {
            "topic": "Uptown",
            "val": 0.04391127206880899
          },
          {
            "topic": "Beauty",
            "val": 0.04268633664420908
          },
          {
            "topic": "Food",
            "val": 0.04260644955130039
          },
          {
            "topic": "Hotel",
            "val": 0.04260644955130039
          },
          {
            "topic": "Government",
            "val": 0.04260644955130039
          }
        ]
      },
      {
        "site": "8176",
        "startTime": "2014-01-14 07:50:35.91",
        "endTime": "2014-01-14 07:51:23.7",
        "stopTime": 47,
        "isStop": false,
        "latitude": 28.0661,
        "longitude": 120.5849,
        "topics": [
          {
            "topic": "Finance",
            "val": 0.11324407307695748
          },
          {
            "topic": "Beauty",
            "val": 0.09246270067800577
          },
          {
            "topic": "Shop",
            "val": 0.09086898191084185
          },
          {
            "topic": "Life",
            "val": 0.07157327954907657
          },
          {
            "topic": "Government",
            "val": 0.07143821863660578
          },
          {
            "topic": "Education",
            "val": 0.06587370904277809
          },
          {
            "topic": "Hospital",
            "val": 0.057193794401274915
          },
          {
            "topic": "Uptown",
            "val": 0.045488515320409664
          },
          {
            "topic": "Enterprise",
            "val": 0.03375622405704983
          },
          {
            "topic": "Food",
            "val": 0.03163126570083121
          },
          {
            "topic": "Hotel",
            "val": 0.029524315466275285
          },
          {
            "topic": "Scenicspot",
            "val": 0.025859662707881276
          },
          {
            "topic": "Traffic",
            "val": 0.024689134799794756
          }
        ]
      },
      {
        "site": "12722",
        "startTime": "2014-01-14 07:51:23.7",
        "endTime": "2014-01-14 07:52:38.99",
        "stopTime": 75,
        "isStop": false,
        "latitude": 28.0691,
        "longitude": 120.5728,
        "topics": [
          {
            "topic": "Traffic",
            "val": 0.10678241418794678
          },
          {
            "topic": "Shop",
            "val": 0.07514712539610616
          },
          {
            "topic": "Enterprise",
            "val": 0.06367001304822459
          },
          {
            "topic": "Life",
            "val": 0.05834420685431212
          },
          {
            "topic": "Scenicspot",
            "val": 0.05424333608499939
          },
          {
            "topic": "Finance",
            "val": 0.052459191010038694
          },
          {
            "topic": "Hospital",
            "val": 0.05150054589513441
          },
          {
            "topic": "Education",
            "val": 0.04689372353740003
          },
          {
            "topic": "Uptown",
            "val": 0.04391127206880899
          },
          {
            "topic": "Beauty",
            "val": 0.04268633664420908
          },
          {
            "topic": "Food",
            "val": 0.04260644955130039
          },
          {
            "topic": "Hotel",
            "val": 0.04260644955130039
          },
          {
            "topic": "Government",
            "val": 0.04260644955130039
          }
        ]
      },
      {
        "site": "8176",
        "startTime": "2014-01-14 07:52:38.99",
        "endTime": "2014-01-14 07:52:52.17",
        "stopTime": 13,
        "isStop": false,
        "latitude": 28.0661,
        "longitude": 120.5849,
        "topics": [
          {
            "topic": "Finance",
            "val": 0.11324407307695748
          },
          {
            "topic": "Beauty",
            "val": 0.09246270067800577
          },
          {
            "topic": "Shop",
            "val": 0.09086898191084185
          },
          {
            "topic": "Life",
            "val": 0.07157327954907657
          },
          {
            "topic": "Government",
            "val": 0.07143821863660578
          },
          {
            "topic": "Education",
            "val": 0.06587370904277809
          },
          {
            "topic": "Hospital",
            "val": 0.057193794401274915
          },
          {
            "topic": "Uptown",
            "val": 0.045488515320409664
          },
          {
            "topic": "Enterprise",
            "val": 0.03375622405704983
          },
          {
            "topic": "Food",
            "val": 0.03163126570083121
          },
          {
            "topic": "Hotel",
            "val": 0.029524315466275285
          },
          {
            "topic": "Scenicspot",
            "val": 0.025859662707881276
          },
          {
            "topic": "Traffic",
            "val": 0.024689134799794756
          }
        ]
      },
      {
        "site": "8742",
        "startTime": "2014-01-14 07:52:52.17",
        "endTime": "2014-01-14 08:13:37.71",
        "stopTime": 1245,
        "isStop": true,
        "latitude": 28.0363,
        "longitude": 120.5857,
        "topics": [
          {
            "topic": "Finance",
            "val": 0.05882352941176564
          },
          {
            "topic": "Enterprise",
            "val": 0.05882352941176564
          },
          {
            "topic": "Traffic",
            "val": 0.05882352941176564
          },
          {
            "topic": "Scenicspot",
            "val": 0.05882352941176564
          },
          {
            "topic": "Uptown",
            "val": 0.05882352941176564
          },
          {
            "topic": "Food",
            "val": 0.05882352941176564
          },
          {
            "topic": "Hospital",
            "val": 0.05882352941176564
          },
          {
            "topic": "Life",
            "val": 0.05882352941176564
          },
          {
            "topic": "Hotel",
            "val": 0.05882352941176564
          },
          {
            "topic": "Shop",
            "val": 0.05882352941176564
          },
          {
            "topic": "Government",
            "val": 0.05882352941176564
          },
          {
            "topic": "Beauty",
            "val": 0.05882352941176564
          },
          {
            "topic": "Education",
            "val": 0.05882352941176564
          }
        ]
      },
      {
        "site": "8176",
        "startTime": "2014-01-14 08:13:37.71",
        "endTime": "2014-01-14 08:13:37.66",
        "stopTime": 86399,
        "isStop": true,
        "stoppoint": 1,
        "latitude": 28.0661,
        "longitude": 120.5849,
        "topics": [
          {
            "topic": "Finance",
            "val": 0.11324407307695748
          },
          {
            "topic": "Beauty",
            "val": 0.09246270067800577
          },
          {
            "topic": "Shop",
            "val": 0.09086898191084185
          },
          {
            "topic": "Life",
            "val": 0.07157327954907657
          },
          {
            "topic": "Government",
            "val": 0.07143821863660578
          },
          {
            "topic": "Education",
            "val": 0.06587370904277809
          },
          {
            "topic": "Hospital",
            "val": 0.057193794401274915
          },
          {
            "topic": "Uptown",
            "val": 0.045488515320409664
          },
          {
            "topic": "Enterprise",
            "val": 0.03375622405704983
          },
          {
            "topic": "Food",
            "val": 0.03163126570083121
          },
          {
            "topic": "Hotel",
            "val": 0.029524315466275285
          },
          {
            "topic": "Scenicspot",
            "val": 0.025859662707881276
          },
          {
            "topic": "Traffic",
            "val": 0.024689134799794756
          }
        ]
      }
    ],
    "matching": true
  },
  {
    "pid": "460000122834481",
    "traj": [
      {
        "site": "6163",
        "isStop": true,
        "startTime": "2014-01-14 00:10:02.67",
        "endTime": "2014-01-14 18:42:19.28",
        "stopTime": 66736,
        "stoppoint": 0,
        "latitude": 28.0434,
        "longitude": 120.6273,
        "topics": [
          {
            "topic": "Shop",
            "val": 0.12255961663309084
          },
          {
            "topic": "Beauty",
            "val": 0.09572125584788485
          },
          {
            "topic": "Uptown",
            "val": 0.07663322468593796
          },
          {
            "topic": "Education",
            "val": 0.07315293849932764
          },
          {
            "topic": "Food",
            "val": 0.05943927235247266
          },
          {
            "topic": "Hotel",
            "val": 0.05065824258933282
          },
          {
            "topic": "Government",
            "val": 0.04777362076927659
          },
          {
            "topic": "Life",
            "val": 0.044996084678040046
          },
          {
            "topic": "Hospital",
            "val": 0.03728591220308817
          },
          {
            "topic": "Enterprise",
            "val": 0.033926097461398866
          },
          {
            "topic": "Finance",
            "val": 0.01938251691619856
          },
          {
            "topic": "Scenicspot",
            "val": 0.01624356649019808
          },
          {
            "topic": "Traffic",
            "val": 0.010715265739928903
          }
        ]
      },
      {
        "site": "12012",
        "startTime": "2014-01-14 18:42:19.28",
        "endTime": "2014-01-14 18:45:07.28",
        "stopTime": 168,
        "isStop": false,
        "latitude": 28.0412,
        "longitude": 120.6286,
        "topics": [
          {
            "topic": "Government",
            "val": 0.17578345480870652
          },
          {
            "topic": "Education",
            "val": 0.10046872315885087
          },
          {
            "topic": "Enterprise",
            "val": 0.06532675648482214
          },
          {
            "topic": "Hotel",
            "val": 0.05879898893224467
          },
          {
            "topic": "Uptown",
            "val": 0.05619769810302165
          },
          {
            "topic": "Shop",
            "val": 0.04505632040050059
          },
          {
            "topic": "Finance",
            "val": 0.04149795086995988
          },
          {
            "topic": "Scenicspot",
            "val": 0.03980465778301295
          },
          {
            "topic": "Life",
            "val": 0.039436550590198405
          },
          {
            "topic": "Food",
            "val": 0.039240226754030647
          },
          {
            "topic": "Hospital",
            "val": 0.039240226754030647
          },
          {
            "topic": "Beauty",
            "val": 0.039240226754030647
          },
          {
            "topic": "Traffic",
            "val": 0.03921568627450968
          }
        ]
      },
      {
        "site": "6163",
        "startTime": "2014-01-14 18:45:07.28",
        "endTime": "2014-01-14 20:45:10.16",
        "stopTime": 7202,
        "isStop": true,
        "stoppoint": 1,
        "latitude": 28.0434,
        "longitude": 120.6273,
        "topics": [
          {
            "topic": "Shop",
            "val": 0.12255961663309084
          },
          {
            "topic": "Beauty",
            "val": 0.09572125584788485
          },
          {
            "topic": "Uptown",
            "val": 0.07663322468593796
          },
          {
            "topic": "Education",
            "val": 0.07315293849932764
          },
          {
            "topic": "Food",
            "val": 0.05943927235247266
          },
          {
            "topic": "Hotel",
            "val": 0.05065824258933282
          },
          {
            "topic": "Government",
            "val": 0.04777362076927659
          },
          {
            "topic": "Life",
            "val": 0.044996084678040046
          },
          {
            "topic": "Hospital",
            "val": 0.03728591220308817
          },
          {
            "topic": "Enterprise",
            "val": 0.033926097461398866
          },
          {
            "topic": "Finance",
            "val": 0.01938251691619856
          },
          {
            "topic": "Scenicspot",
            "val": 0.01624356649019808
          },
          {
            "topic": "Traffic",
            "val": 0.010715265739928903
          }
        ]
      }
    ],
    "matching": true
  },
  {
    "pid": "460000122835349",
    "traj": [
      {
        "site": "2305",
        "startTime": "2014-01-14 07:04:00.55",
        "endTime": "2014-01-14 07:55:18.19",
        "stopTime": 3077,
        "isStop": true,
        "stoppoint": 0,
        "latitude": 27.7862,
        "longitude": 120.689,
        "topics": [
          {
            "topic": "Hospital",
            "val": 0.14748346146969452
          },
          {
            "topic": "Education",
            "val": 0.09898533881637712
          },
          {
            "topic": "Scenicspot",
            "val": 0.09181119256213081
          },
          {
            "topic": "Traffic",
            "val": 0.08494993742177692
          },
          {
            "topic": "Life",
            "val": 0.07010995887716794
          },
          {
            "topic": "Beauty",
            "val": 0.05491239048811022
          },
          {
            "topic": "Government",
            "val": 0.05261040586447339
          },
          {
            "topic": "Shop",
            "val": 0.046173788664401624
          },
          {
            "topic": "Finance",
            "val": 0.0399606651171103
          },
          {
            "topic": "Uptown",
            "val": 0.03991596638655423
          },
          {
            "topic": "Hotel",
            "val": 0.0368988020740208
          },
          {
            "topic": "Food",
            "val": 0.036697657786518574
          },
          {
            "topic": "Enterprise",
            "val": 0.035714285714285456
          }
        ]
      },
      {
        "site": "19912",
        "startTime": "2014-01-14 07:55:18.19",
        "endTime": "2014-01-14 08:39:03.61",
        "stopTime": 2625,
        "isStop": true,
        "latitude": 27.7898,
        "longitude": 120.6973,
        "topics": [
          {
            "topic": "Shop",
            "val": 0.0906587780179772
          },
          {
            "topic": "Enterprise",
            "val": 0.07834793491864862
          },
          {
            "topic": "Education",
            "val": 0.0575492092388213
          },
          {
            "topic": "Uptown",
            "val": 0.0546819888496986
          },
          {
            "topic": "Life",
            "val": 0.05006257822277862
          },
          {
            "topic": "Finance",
            "val": 0.048196609398111344
          },
          {
            "topic": "Food",
            "val": 0.047513937876891725
          },
          {
            "topic": "Beauty",
            "val": 0.040300375469336375
          },
          {
            "topic": "Hotel",
            "val": 0.039663215382864624
          },
          {
            "topic": "Hospital",
            "val": 0.03813858231880727
          },
          {
            "topic": "Traffic",
            "val": 0.03638639208101
          },
          {
            "topic": "Scenicspot",
            "val": 0.036363636363636015
          },
          {
            "topic": "Government",
            "val": 0.036363636363636015
          }
        ]
      },
      {
        "site": "2305",
        "startTime": "2014-01-14 08:39:03.61",
        "endTime": "2014-01-14 08:45:59.31",
        "stopTime": 415,
        "isStop": false,
        "latitude": 27.7862,
        "longitude": 120.689,
        "topics": [
          {
            "topic": "Hospital",
            "val": 0.14748346146969452
          },
          {
            "topic": "Education",
            "val": 0.09898533881637712
          },
          {
            "topic": "Scenicspot",
            "val": 0.09181119256213081
          },
          {
            "topic": "Traffic",
            "val": 0.08494993742177692
          },
          {
            "topic": "Life",
            "val": 0.07010995887716794
          },
          {
            "topic": "Beauty",
            "val": 0.05491239048811022
          },
          {
            "topic": "Government",
            "val": 0.05261040586447339
          },
          {
            "topic": "Shop",
            "val": 0.046173788664401624
          },
          {
            "topic": "Finance",
            "val": 0.0399606651171103
          },
          {
            "topic": "Uptown",
            "val": 0.03991596638655423
          },
          {
            "topic": "Hotel",
            "val": 0.0368988020740208
          },
          {
            "topic": "Food",
            "val": 0.036697657786518574
          },
          {
            "topic": "Enterprise",
            "val": 0.035714285714285456
          }
        ]
      },
      {
        "site": "19912",
        "startTime": "2014-01-14 08:45:59.31",
        "endTime": "2014-01-14 09:13:53.87",
        "stopTime": 1674,
        "isStop": true,
        "latitude": 27.7898,
        "longitude": 120.6973,
        "topics": [
          {
            "topic": "Shop",
            "val": 0.0906587780179772
          },
          {
            "topic": "Enterprise",
            "val": 0.07834793491864862
          },
          {
            "topic": "Education",
            "val": 0.0575492092388213
          },
          {
            "topic": "Uptown",
            "val": 0.0546819888496986
          },
          {
            "topic": "Life",
            "val": 0.05006257822277862
          },
          {
            "topic": "Finance",
            "val": 0.048196609398111344
          },
          {
            "topic": "Food",
            "val": 0.047513937876891725
          },
          {
            "topic": "Beauty",
            "val": 0.040300375469336375
          },
          {
            "topic": "Hotel",
            "val": 0.039663215382864624
          },
          {
            "topic": "Hospital",
            "val": 0.03813858231880727
          },
          {
            "topic": "Traffic",
            "val": 0.03638639208101
          },
          {
            "topic": "Scenicspot",
            "val": 0.036363636363636015
          },
          {
            "topic": "Government",
            "val": 0.036363636363636015
          }
        ]
      },
      {
        "site": "2305",
        "startTime": "2014-01-14 09:13:53.87",
        "endTime": "2014-01-14 09:15:31.34",
        "stopTime": 97,
        "isStop": false,
        "latitude": 27.7862,
        "longitude": 120.689,
        "topics": [
          {
            "topic": "Hospital",
            "val": 0.14748346146969452
          },
          {
            "topic": "Education",
            "val": 0.09898533881637712
          },
          {
            "topic": "Scenicspot",
            "val": 0.09181119256213081
          },
          {
            "topic": "Traffic",
            "val": 0.08494993742177692
          },
          {
            "topic": "Life",
            "val": 0.07010995887716794
          },
          {
            "topic": "Beauty",
            "val": 0.05491239048811022
          },
          {
            "topic": "Government",
            "val": 0.05261040586447339
          },
          {
            "topic": "Shop",
            "val": 0.046173788664401624
          },
          {
            "topic": "Finance",
            "val": 0.0399606651171103
          },
          {
            "topic": "Uptown",
            "val": 0.03991596638655423
          },
          {
            "topic": "Hotel",
            "val": 0.0368988020740208
          },
          {
            "topic": "Food",
            "val": 0.036697657786518574
          },
          {
            "topic": "Enterprise",
            "val": 0.035714285714285456
          }
        ]
      },
      {
        "site": "19912",
        "startTime": "2014-01-14 09:15:31.34",
        "endTime": "2014-01-14 10:41:01.45",
        "stopTime": 5130,
        "isStop": true,
        "latitude": 27.7898,
        "longitude": 120.6973,
        "topics": [
          {
            "topic": "Shop",
            "val": 0.0906587780179772
          },
          {
            "topic": "Enterprise",
            "val": 0.07834793491864862
          },
          {
            "topic": "Education",
            "val": 0.0575492092388213
          },
          {
            "topic": "Uptown",
            "val": 0.0546819888496986
          },
          {
            "topic": "Life",
            "val": 0.05006257822277862
          },
          {
            "topic": "Finance",
            "val": 0.048196609398111344
          },
          {
            "topic": "Food",
            "val": 0.047513937876891725
          },
          {
            "topic": "Beauty",
            "val": 0.040300375469336375
          },
          {
            "topic": "Hotel",
            "val": 0.039663215382864624
          },
          {
            "topic": "Hospital",
            "val": 0.03813858231880727
          },
          {
            "topic": "Traffic",
            "val": 0.03638639208101
          },
          {
            "topic": "Scenicspot",
            "val": 0.036363636363636015
          },
          {
            "topic": "Government",
            "val": 0.036363636363636015
          }
        ]
      },
      {
        "site": "2305",
        "startTime": "2014-01-14 10:41:01.45",
        "endTime": "2014-01-14 12:31:36.98",
        "stopTime": 6635,
        "isStop": true,
        "stoppoint": 1,
        "latitude": 27.7862,
        "longitude": 120.689,
        "topics": [
          {
            "topic": "Hospital",
            "val": 0.14748346146969452
          },
          {
            "topic": "Education",
            "val": 0.09898533881637712
          },
          {
            "topic": "Scenicspot",
            "val": 0.09181119256213081
          },
          {
            "topic": "Traffic",
            "val": 0.08494993742177692
          },
          {
            "topic": "Life",
            "val": 0.07010995887716794
          },
          {
            "topic": "Beauty",
            "val": 0.05491239048811022
          },
          {
            "topic": "Government",
            "val": 0.05261040586447339
          },
          {
            "topic": "Shop",
            "val": 0.046173788664401624
          },
          {
            "topic": "Finance",
            "val": 0.0399606651171103
          },
          {
            "topic": "Uptown",
            "val": 0.03991596638655423
          },
          {
            "topic": "Hotel",
            "val": 0.0368988020740208
          },
          {
            "topic": "Food",
            "val": 0.036697657786518574
          },
          {
            "topic": "Enterprise",
            "val": 0.035714285714285456
          }
        ]
      }
    ],
    "matching": true
  },
  {
    "pid": "460000122851234",
    "traj": [
      {
        "site": "25950",
        "isStop": true,
        "startTime": "2014-01-13 23:56:00.14",
        "endTime": "2014-01-14 07:56:09.6",
        "stopTime": 28809,
        "stoppoint": 0,
        "latitude": 27.9561,
        "longitude": 120.6516,
        "topics": [
          {
            "topic": "Shop",
            "val": 0.14022651264900798
          },
          {
            "topic": "Beauty",
            "val": 0.09580110383881471
          },
          {
            "topic": "Hotel",
            "val": 0.06422987751082282
          },
          {
            "topic": "Hospital",
            "val": 0.053052996573585816
          },
          {
            "topic": "Enterprise",
            "val": 0.04390221383286483
          },
          {
            "topic": "Food",
            "val": 0.04095283038224008
          },
          {
            "topic": "Finance",
            "val": 0.03994234596524333
          },
          {
            "topic": "Education",
            "val": 0.03696731570200442
          },
          {
            "topic": "Government",
            "val": 0.028396150926362478
          },
          {
            "topic": "Life",
            "val": 0.023630973142657805
          },
          {
            "topic": "Uptown",
            "val": 0.016075422146535526
          },
          {
            "topic": "Traffic",
            "val": 0.016034387246353022
          },
          {
            "topic": "Scenicspot",
            "val": 0.010120232257535009
          }
        ]
      },
      {
        "site": "1180",
        "startTime": "2014-01-14 07:56:09.6",
        "endTime": "2014-01-14 09:08:26.29",
        "stopTime": 4336,
        "isStop": true,
        "latitude": 27.951,
        "longitude": 120.6569,
        "topics": [
          {
            "topic": "Uptown",
            "val": 0.11924741993064933
          },
          {
            "topic": "Traffic",
            "val": 0.1069985022261426
          },
          {
            "topic": "Finance",
            "val": 0.09639098052893957
          },
          {
            "topic": "Enterprise",
            "val": 0.07058002831408126
          },
          {
            "topic": "Education",
            "val": 0.05457641724286526
          },
          {
            "topic": "Shop",
            "val": 0.04905722316830481
          },
          {
            "topic": "Life",
            "val": 0.04454338414821841
          },
          {
            "topic": "Scenicspot",
            "val": 0.04400993044584429
          },
          {
            "topic": "Hospital",
            "val": 0.04031678942940961
          },
          {
            "topic": "Beauty",
            "val": 0.032827920146083905
          },
          {
            "topic": "Hotel",
            "val": 0.0328074026959926
          },
          {
            "topic": "Food",
            "val": 0.0327868852459013
          },
          {
            "topic": "Government",
            "val": 0.0327868852459013
          }
        ]
      },
      {
        "site": "14253",
        "startTime": "2014-01-14 09:08:26.29",
        "endTime": "2014-01-14 09:14:40.11",
        "stopTime": 373,
        "isStop": false,
        "latitude": 27.9524,
        "longitude": 120.6491,
        "topics": [
          {
            "topic": "Shop",
            "val": 0.1244530870199317
          },
          {
            "topic": "Beauty",
            "val": 0.09450863165734046
          },
          {
            "topic": "Life",
            "val": 0.0711012732858219
          },
          {
            "topic": "Hospital",
            "val": 0.06783272479028508
          },
          {
            "topic": "Food",
            "val": 0.058337384540592806
          },
          {
            "topic": "Education",
            "val": 0.046566472553501694
          },
          {
            "topic": "Enterprise",
            "val": 0.041580901747018444
          },
          {
            "topic": "Hotel",
            "val": 0.0325303323369088
          },
          {
            "topic": "Government",
            "val": 0.03243724076583319
          },
          {
            "topic": "Scenicspot",
            "val": 0.030492661281146936
          },
          {
            "topic": "Traffic",
            "val": 0.02827915059113151
          },
          {
            "topic": "Finance",
            "val": 0.024741670890265584
          },
          {
            "topic": "Uptown",
            "val": 0.017852894630684908
          }
        ]
      },
      {
        "site": "1180",
        "startTime": "2014-01-14 09:14:40.11",
        "endTime": "2014-01-14 09:17:17.28",
        "stopTime": 157,
        "isStop": false,
        "latitude": 27.951,
        "longitude": 120.6569,
        "topics": [
          {
            "topic": "Uptown",
            "val": 0.11924741993064933
          },
          {
            "topic": "Traffic",
            "val": 0.1069985022261426
          },
          {
            "topic": "Finance",
            "val": 0.09639098052893957
          },
          {
            "topic": "Enterprise",
            "val": 0.07058002831408126
          },
          {
            "topic": "Education",
            "val": 0.05457641724286526
          },
          {
            "topic": "Shop",
            "val": 0.04905722316830481
          },
          {
            "topic": "Life",
            "val": 0.04454338414821841
          },
          {
            "topic": "Scenicspot",
            "val": 0.04400993044584429
          },
          {
            "topic": "Hospital",
            "val": 0.04031678942940961
          },
          {
            "topic": "Beauty",
            "val": 0.032827920146083905
          },
          {
            "topic": "Hotel",
            "val": 0.0328074026959926
          },
          {
            "topic": "Food",
            "val": 0.0327868852459013
          },
          {
            "topic": "Government",
            "val": 0.0327868852459013
          }
        ]
      },
      {
        "site": "25950",
        "startTime": "2014-01-14 09:17:17.28",
        "endTime": "2014-01-14 09:18:15.66",
        "stopTime": 58,
        "isStop": false,
        "latitude": 27.9561,
        "longitude": 120.6516,
        "topics": [
          {
            "topic": "Shop",
            "val": 0.14022651264900798
          },
          {
            "topic": "Beauty",
            "val": 0.09580110383881471
          },
          {
            "topic": "Hotel",
            "val": 0.06422987751082282
          },
          {
            "topic": "Hospital",
            "val": 0.053052996573585816
          },
          {
            "topic": "Enterprise",
            "val": 0.04390221383286483
          },
          {
            "topic": "Food",
            "val": 0.04095283038224008
          },
          {
            "topic": "Finance",
            "val": 0.03994234596524333
          },
          {
            "topic": "Education",
            "val": 0.03696731570200442
          },
          {
            "topic": "Government",
            "val": 0.028396150926362478
          },
          {
            "topic": "Life",
            "val": 0.023630973142657805
          },
          {
            "topic": "Uptown",
            "val": 0.016075422146535526
          },
          {
            "topic": "Traffic",
            "val": 0.016034387246353022
          },
          {
            "topic": "Scenicspot",
            "val": 0.010120232257535009
          }
        ]
      },
      {
        "site": "1180",
        "startTime": "2014-01-14 09:18:15.66",
        "endTime": "2014-01-14 09:17:17.28",
        "stopTime": 86341,
        "isStop": true,
        "latitude": 27.951,
        "longitude": 120.6569,
        "topics": [
          {
            "topic": "Uptown",
            "val": 0.11924741993064933
          },
          {
            "topic": "Traffic",
            "val": 0.1069985022261426
          },
          {
            "topic": "Finance",
            "val": 0.09639098052893957
          },
          {
            "topic": "Enterprise",
            "val": 0.07058002831408126
          },
          {
            "topic": "Education",
            "val": 0.05457641724286526
          },
          {
            "topic": "Shop",
            "val": 0.04905722316830481
          },
          {
            "topic": "Life",
            "val": 0.04454338414821841
          },
          {
            "topic": "Scenicspot",
            "val": 0.04400993044584429
          },
          {
            "topic": "Hospital",
            "val": 0.04031678942940961
          },
          {
            "topic": "Beauty",
            "val": 0.032827920146083905
          },
          {
            "topic": "Hotel",
            "val": 0.0328074026959926
          },
          {
            "topic": "Food",
            "val": 0.0327868852459013
          },
          {
            "topic": "Government",
            "val": 0.0327868852459013
          }
        ]
      },
      {
        "site": "25950",
        "startTime": "2014-01-14 09:17:17.28",
        "endTime": "2014-01-14 09:18:15.66",
        "stopTime": 58,
        "isStop": false,
        "latitude": 27.9561,
        "longitude": 120.6516,
        "topics": [
          {
            "topic": "Shop",
            "val": 0.14022651264900798
          },
          {
            "topic": "Beauty",
            "val": 0.09580110383881471
          },
          {
            "topic": "Hotel",
            "val": 0.06422987751082282
          },
          {
            "topic": "Hospital",
            "val": 0.053052996573585816
          },
          {
            "topic": "Enterprise",
            "val": 0.04390221383286483
          },
          {
            "topic": "Food",
            "val": 0.04095283038224008
          },
          {
            "topic": "Finance",
            "val": 0.03994234596524333
          },
          {
            "topic": "Education",
            "val": 0.03696731570200442
          },
          {
            "topic": "Government",
            "val": 0.028396150926362478
          },
          {
            "topic": "Life",
            "val": 0.023630973142657805
          },
          {
            "topic": "Uptown",
            "val": 0.016075422146535526
          },
          {
            "topic": "Traffic",
            "val": 0.016034387246353022
          },
          {
            "topic": "Scenicspot",
            "val": 0.010120232257535009
          }
        ]
      },
      {
        "site": "1180",
        "startTime": "2014-01-14 09:18:15.66",
        "endTime": "2014-01-14 09:17:17.28",
        "stopTime": 86341,
        "isStop": true,
        "latitude": 27.951,
        "longitude": 120.6569,
        "topics": [
          {
            "topic": "Uptown",
            "val": 0.11924741993064933
          },
          {
            "topic": "Traffic",
            "val": 0.1069985022261426
          },
          {
            "topic": "Finance",
            "val": 0.09639098052893957
          },
          {
            "topic": "Enterprise",
            "val": 0.07058002831408126
          },
          {
            "topic": "Education",
            "val": 0.05457641724286526
          },
          {
            "topic": "Shop",
            "val": 0.04905722316830481
          },
          {
            "topic": "Life",
            "val": 0.04454338414821841
          },
          {
            "topic": "Scenicspot",
            "val": 0.04400993044584429
          },
          {
            "topic": "Hospital",
            "val": 0.04031678942940961
          },
          {
            "topic": "Beauty",
            "val": 0.032827920146083905
          },
          {
            "topic": "Hotel",
            "val": 0.0328074026959926
          },
          {
            "topic": "Food",
            "val": 0.0327868852459013
          },
          {
            "topic": "Government",
            "val": 0.0327868852459013
          }
        ]
      },
      {
        "site": "25950",
        "startTime": "2014-01-14 09:17:17.28",
        "endTime": "2014-01-14 10:23:08.85",
        "stopTime": 3951,
        "isStop": true,
        "stoppoint": 1,
        "latitude": 27.9561,
        "longitude": 120.6516,
        "topics": [
          {
            "topic": "Shop",
            "val": 0.14022651264900798
          },
          {
            "topic": "Beauty",
            "val": 0.09580110383881471
          },
          {
            "topic": "Hotel",
            "val": 0.06422987751082282
          },
          {
            "topic": "Hospital",
            "val": 0.053052996573585816
          },
          {
            "topic": "Enterprise",
            "val": 0.04390221383286483
          },
          {
            "topic": "Food",
            "val": 0.04095283038224008
          },
          {
            "topic": "Finance",
            "val": 0.03994234596524333
          },
          {
            "topic": "Education",
            "val": 0.03696731570200442
          },
          {
            "topic": "Government",
            "val": 0.028396150926362478
          },
          {
            "topic": "Life",
            "val": 0.023630973142657805
          },
          {
            "topic": "Uptown",
            "val": 0.016075422146535526
          },
          {
            "topic": "Traffic",
            "val": 0.016034387246353022
          },
          {
            "topic": "Scenicspot",
            "val": 0.010120232257535009
          }
        ]
      }
    ],
    "matching": true
  },
  {
    "pid": "460000122856246",
    "traj": [
      {
        "site": "23399",
        "isStop": true,
        "startTime": "2014-01-14 01:34:27.74",
        "endTime": "2014-01-14 05:34:19.29",
        "stopTime": 14391,
        "stoppoint": 0,
        "latitude": 28.0498,
        "longitude": 120.6511,
        "topics": [
          {
            "topic": "Enterprise",
            "val": 0.12873234400143027
          },
          {
            "topic": "Finance",
            "val": 0.06730351715154174
          },
          {
            "topic": "Traffic",
            "val": 0.06660110852851801
          },
          {
            "topic": "Life",
            "val": 0.05310209190059024
          },
          {
            "topic": "Food",
            "val": 0.04969221731245708
          },
          {
            "topic": "Shop",
            "val": 0.047546678245766534
          },
          {
            "topic": "Uptown",
            "val": 0.04233608336951831
          },
          {
            "topic": "Hospital",
            "val": 0.03860693213455612
          },
          {
            "topic": "Education",
            "val": 0.037406451942479324
          },
          {
            "topic": "Scenicspot",
            "val": 0.027151286046333455
          },
          {
            "topic": "Beauty",
            "val": 0.026819238333631354
          },
          {
            "topic": "Hotel",
            "val": 0.025567673878061883
          },
          {
            "topic": "Government",
            "val": 0.020420934331179523
          }
        ]
      },
      {
        "site": "1764",
        "startTime": "2014-01-14 05:34:19.29",
        "endTime": "2014-01-14 07:08:39.76",
        "stopTime": 5660,
        "isStop": true,
        "stoppoint": 1,
        "latitude": 28.0485,
        "longitude": 120.6535,
        "topics": [
          {
            "topic": "Traffic",
            "val": 0.11944876150132806
          },
          {
            "topic": "Shop",
            "val": 0.09011264080100187
          },
          {
            "topic": "Uptown",
            "val": 0.06915237453410174
          },
          {
            "topic": "Enterprise",
            "val": 0.0622894002118036
          },
          {
            "topic": "Hospital",
            "val": 0.05577026227839777
          },
          {
            "topic": "Life",
            "val": 0.05545393280061638
          },
          {
            "topic": "Education",
            "val": 0.054339902900604
          },
          {
            "topic": "Food",
            "val": 0.04478125128938655
          },
          {
            "topic": "Finance",
            "val": 0.03222434636702461
          },
          {
            "topic": "Scenicspot",
            "val": 0.03076648007811953
          },
          {
            "topic": "Beauty",
            "val": 0.027933268233643612
          },
          {
            "topic": "Hotel",
            "val": 0.026351620844737154
          },
          {
            "topic": "Government",
            "val": 0.022019282344689035
          }
        ]
      }
    ],
    "matching": true
  },
  {
    "pid": "460000132842232",
    "traj": [
      {
        "site": "27464",
        "startTime": "2014-01-14 01:22:17.59",
        "endTime": "2014-01-14 07:22:22.94",
        "stopTime": 21605,
        "isStop": true,
        "stoppoint": 0,
        "latitude": 27.5797,
        "longitude": 120.5455,
        "topics": [
          {
            "topic": "Beauty",
            "val": 0.18922011099733435
          },
          {
            "topic": "Food",
            "val": 0.1255546706109922
          },
          {
            "topic": "Life",
            "val": 0.09511889862328046
          },
          {
            "topic": "Finance",
            "val": 0.08403812846866761
          },
          {
            "topic": "Hospital",
            "val": 0.07847561977724767
          },
          {
            "topic": "Hotel",
            "val": 0.05870975082489547
          },
          {
            "topic": "Education",
            "val": 0.05277430120984632
          },
          {
            "topic": "Shop",
            "val": 0.048457035941391856
          },
          {
            "topic": "Enterprise",
            "val": 0.03519550953843858
          },
          {
            "topic": "Government",
            "val": 0.019848042376202805
          },
          {
            "topic": "Traffic",
            "val": 0.018489020366367306
          },
          {
            "topic": "Scenicspot",
            "val": 0.018014942921075847
          },
          {
            "topic": "Uptown",
            "val": 0.010777360589626053
          }
        ]
      },
      {
        "site": "25996",
        "startTime": "2014-01-14 07:22:22.94",
        "endTime": "2014-01-14 07:54:33.56",
        "stopTime": 1930,
        "isStop": true,
        "latitude": 27.6062,
        "longitude": 120.5431,
        "topics": [
          {
            "topic": "Hospital",
            "val": 0.15531609633993732
          },
          {
            "topic": "Traffic",
            "val": 0.09882780304649057
          },
          {
            "topic": "Food",
            "val": 0.09844622851735374
          },
          {
            "topic": "Beauty",
            "val": 0.09469153515064516
          },
          {
            "topic": "Life",
            "val": 0.05502304710155979
          },
          {
            "topic": "Hotel",
            "val": 0.0534356970603496
          },
          {
            "topic": "Shop",
            "val": 0.05313043743703995
          },
          {
            "topic": "Education",
            "val": 0.0523825513599313
          },
          {
            "topic": "Finance",
            "val": 0.048597332030891935
          },
          {
            "topic": "Uptown",
            "val": 0.04151530877010844
          },
          {
            "topic": "Scenicspot",
            "val": 0.03260172776946743
          },
          {
            "topic": "Enterprise",
            "val": 0.0282670411184708
          },
          {
            "topic": "Government",
            "val": 0.024405506883604003
          }
        ]
      },
      {
        "site": "27464",
        "startTime": "2014-01-14 07:54:33.56",
        "endTime": "2014-01-14 07:54:33.56",
        "stopTime": 0,
        "isStop": true,
        "latitude": 27.5797,
        "longitude": 120.5455,
        "topics": [
          {
            "topic": "Beauty",
            "val": 0.18922011099733435
          },
          {
            "topic": "Food",
            "val": 0.1255546706109922
          },
          {
            "topic": "Life",
            "val": 0.09511889862328046
          },
          {
            "topic": "Finance",
            "val": 0.08403812846866761
          },
          {
            "topic": "Hospital",
            "val": 0.07847561977724767
          },
          {
            "topic": "Hotel",
            "val": 0.05870975082489547
          },
          {
            "topic": "Education",
            "val": 0.05277430120984632
          },
          {
            "topic": "Shop",
            "val": 0.048457035941391856
          },
          {
            "topic": "Enterprise",
            "val": 0.03519550953843858
          },
          {
            "topic": "Government",
            "val": 0.019848042376202805
          },
          {
            "topic": "Traffic",
            "val": 0.018489020366367306
          },
          {
            "topic": "Scenicspot",
            "val": 0.018014942921075847
          },
          {
            "topic": "Uptown",
            "val": 0.010777360589626053
          }
        ]
      },
      {
        "site": "15473",
        "startTime": "2014-01-14 07:54:33.56",
        "endTime": "2014-01-14 07:55:05.52",
        "stopTime": 31,
        "isStop": false,
        "latitude": 27.6067,
        "longitude": 120.5362,
        "topics": [
          {
            "topic": "Education",
            "val": 0.08402394885498723
          },
          {
            "topic": "Hospital",
            "val": 0.07688664885160484
          },
          {
            "topic": "Enterprise",
            "val": 0.06278117917667368
          },
          {
            "topic": "Life",
            "val": 0.05520414031052344
          },
          {
            "topic": "Beauty",
            "val": 0.05408788012042089
          },
          {
            "topic": "Uptown",
            "val": 0.054087880120420886
          },
          {
            "topic": "Finance",
            "val": 0.05405405405405415
          },
          {
            "topic": "Traffic",
            "val": 0.05405405405405415
          },
          {
            "topic": "Scenicspot",
            "val": 0.05405405405405415
          },
          {
            "topic": "Food",
            "val": 0.05405405405405415
          },
          {
            "topic": "Hotel",
            "val": 0.05405405405405415
          },
          {
            "topic": "Shop",
            "val": 0.05405405405405415
          },
          {
            "topic": "Government",
            "val": 0.05405405405405415
          }
        ]
      },
      {
        "site": "22475",
        "startTime": "2014-01-14 07:55:05.52",
        "endTime": "2014-01-14 07:55:52.97",
        "stopTime": 47,
        "isStop": false,
        "latitude": 27.5982,
        "longitude": 120.5508,
        "topics": [
          {
            "topic": "Hotel",
            "val": 0.1724030037546929
          },
          {
            "topic": "Shop",
            "val": 0.10022471270906813
          },
          {
            "topic": "Finance",
            "val": 0.06802537262487215
          },
          {
            "topic": "Uptown",
            "val": 0.05994709295710541
          },
          {
            "topic": "Food",
            "val": 0.0585390829445899
          },
          {
            "topic": "Life",
            "val": 0.051129252474684556
          },
          {
            "topic": "Beauty",
            "val": 0.0493656843782001
          },
          {
            "topic": "Traffic",
            "val": 0.037746046194106694
          },
          {
            "topic": "Enterprise",
            "val": 0.030549550574582137
          },
          {
            "topic": "Hospital",
            "val": 0.0277193082261921
          },
          {
            "topic": "Education",
            "val": 0.02720730458527733
          },
          {
            "topic": "Scenicspot",
            "val": 0.02643929912390515
          },
          {
            "topic": "Government",
            "val": 0.022769939697349285
          }
        ]
      },
      {
        "site": "24048",
        "startTime": "2014-01-14 07:55:52.97",
        "endTime": "2014-01-14 07:58:09.87",
        "stopTime": 136,
        "isStop": false,
        "latitude": 27.5976,
        "longitude": 120.5419,
        "topics": [
          {
            "topic": "Traffic",
            "val": 0.11969229829970356
          },
          {
            "topic": "Food",
            "val": 0.08040538477975374
          },
          {
            "topic": "Education",
            "val": 0.07588754235477159
          },
          {
            "topic": "Scenicspot",
            "val": 0.06370768338471768
          },
          {
            "topic": "Beauty",
            "val": 0.05897615922341853
          },
          {
            "topic": "Hotel",
            "val": 0.055709881254005535
          },
          {
            "topic": "Hospital",
            "val": 0.055465673555357815
          },
          {
            "topic": "Uptown",
            "val": 0.05100888305503733
          },
          {
            "topic": "Life",
            "val": 0.04887206569186993
          },
          {
            "topic": "Government",
            "val": 0.048811013767208006
          },
          {
            "topic": "Finance",
            "val": 0.048780487804877044
          },
          {
            "topic": "Enterprise",
            "val": 0.048780487804877044
          },
          {
            "topic": "Shop",
            "val": 0.048780487804877044
          }
        ]
      },
      {
        "site": "26573",
        "startTime": "2014-01-14 07:58:09.87",
        "endTime": "2014-01-14 07:57:32.45",
        "stopTime": 86362,
        "isStop": true,
        "latitude": 27.5945,
        "longitude": 120.5451,
        "topics": [
          {
            "topic": "Uptown",
            "val": 0.08166458072590822
          },
          {
            "topic": "Shop",
            "val": 0.06299541093033047
          },
          {
            "topic": "Finance",
            "val": 0.05864970101515879
          },
          {
            "topic": "Education",
            "val": 0.05712001112501832
          },
          {
            "topic": "Beauty",
            "val": 0.05565985259352062
          },
          {
            "topic": "Life",
            "val": 0.05562508691419924
          },
          {
            "topic": "Hospital",
            "val": 0.05559032123487788
          },
          {
            "topic": "Food",
            "val": 0.05559032123487787
          },
          {
            "topic": "Enterprise",
            "val": 0.0555555555555565
          },
          {
            "topic": "Traffic",
            "val": 0.0555555555555565
          },
          {
            "topic": "Scenicspot",
            "val": 0.0555555555555565
          },
          {
            "topic": "Hotel",
            "val": 0.0555555555555565
          },
          {
            "topic": "Government",
            "val": 0.0555555555555565
          }
        ]
      },
      {
        "site": "9190",
        "startTime": "2014-01-14 07:57:32.45",
        "endTime": "2014-01-14 07:58:09.86",
        "stopTime": 37,
        "isStop": false,
        "latitude": 27.5897,
        "longitude": 120.5484,
        "topics": [
          {
            "topic": "Shop",
            "val": 0.10201776611007612
          },
          {
            "topic": "Finance",
            "val": 0.06190665160719091
          },
          {
            "topic": "Life",
            "val": 0.04908574742818668
          },
          {
            "topic": "Beauty",
            "val": 0.04887206569186993
          },
          {
            "topic": "Hotel",
            "val": 0.04884153972953897
          },
          {
            "topic": "Education",
            "val": 0.048811013767208006
          },
          {
            "topic": "Enterprise",
            "val": 0.048780487804877044
          },
          {
            "topic": "Traffic",
            "val": 0.048780487804877044
          },
          {
            "topic": "Scenicspot",
            "val": 0.048780487804877044
          },
          {
            "topic": "Uptown",
            "val": 0.048780487804877044
          },
          {
            "topic": "Food",
            "val": 0.048780487804877044
          },
          {
            "topic": "Hospital",
            "val": 0.048780487804877044
          },
          {
            "topic": "Government",
            "val": 0.048780487804877044
          }
        ]
      },
      {
        "site": "19549",
        "startTime": "2014-01-14 07:58:09.86",
        "endTime": "2014-01-14 09:43:27.61",
        "stopTime": 6317,
        "isStop": true,
        "stoppoint": 1,
        "latitude": 27.5928,
        "longitude": 120.555,
        "topics": [
          {
            "topic": "Traffic",
            "val": 0.13624789607699314
          },
          {
            "topic": "Shop",
            "val": 0.09521959921165822
          },
          {
            "topic": "Beauty",
            "val": 0.08010012515644527
          },
          {
            "topic": "Hospital",
            "val": 0.07523772531756624
          },
          {
            "topic": "Hotel",
            "val": 0.061412973112942415
          },
          {
            "topic": "Life",
            "val": 0.05919756016860131
          },
          {
            "topic": "Finance",
            "val": 0.05219167637708043
          },
          {
            "topic": "Food",
            "val": 0.051788874023563816
          },
          {
            "topic": "Government",
            "val": 0.03413749946053302
          },
          {
            "topic": "Scenicspot",
            "val": 0.032814006013263584
          },
          {
            "topic": "Education",
            "val": 0.02903054104987541
          },
          {
            "topic": "Enterprise",
            "val": 0.026771970710514455
          },
          {
            "topic": "Uptown",
            "val": 0.02575057902838294
          }
        ]
      }
    ],
    "matching": true
  },
  {
    "pid": "460000132848899",
    "traj": [
      {
        "site": "6498",
        "startTime": "2014-01-14 05:51:39.3",
        "endTime": "2014-01-14 07:51:42.65",
        "stopTime": 7203,
        "isStop": true,
        "stoppoint": 0,
        "latitude": 27.7834,
        "longitude": 120.6262,
        "topics": [
          {
            "topic": "Hospital",
            "val": 0.122943534490577
          },
          {
            "topic": "Beauty",
            "val": 0.1227621483375958
          },
          {
            "topic": "Life",
            "val": 0.10825125609910906
          },
          {
            "topic": "Food",
            "val": 0.09627977000235773
          },
          {
            "topic": "Education",
            "val": 0.08026337269412888
          },
          {
            "topic": "Hotel",
            "val": 0.07246376811594203
          },
          {
            "topic": "Government",
            "val": 0.05693711342076065
          },
          {
            "topic": "Finance",
            "val": 0.04485679563222148
          },
          {
            "topic": "Scenicspot",
            "val": 0.0443489144038745
          },
          {
            "topic": "Enterprise",
            "val": 0.03371968583918271
          },
          {
            "topic": "Uptown",
            "val": 0.03342946799441294
          },
          {
            "topic": "Traffic",
            "val": 0.02900364586167448
          },
          {
            "topic": "Shop",
            "val": 0.028985507246376375
          }
        ]
      },
      {
        "site": "16403",
        "startTime": "2014-01-14 07:51:42.65",
        "endTime": "2014-01-14 09:07:30.5",
        "stopTime": 4547,
        "isStop": true,
        "latitude": 27.7902,
        "longitude": 120.633,
        "topics": [
          {
            "topic": "Government",
            "val": 0.12449937421777217
          },
          {
            "topic": "Education",
            "val": 0.08757822277847341
          },
          {
            "topic": "Uptown",
            "val": 0.06714643304130169
          },
          {
            "topic": "Hotel",
            "val": 0.05779098873591978
          },
          {
            "topic": "Food",
            "val": 0.05644555694618241
          },
          {
            "topic": "Beauty",
            "val": 0.05553817271589457
          },
          {
            "topic": "Scenicspot",
            "val": 0.05050062578222764
          },
          {
            "topic": "Finance",
            "val": 0.050156445556946
          },
          {
            "topic": "Life",
            "val": 0.05009386733416753
          },
          {
            "topic": "Shop",
            "val": 0.05006257822277831
          },
          {
            "topic": "Hospital",
            "val": 0.05003128911138907
          },
          {
            "topic": "Enterprise",
            "val": 0.049999999999999836
          },
          {
            "topic": "Traffic",
            "val": 0.049999999999999836
          }
        ]
      },
      {
        "site": "21489",
        "startTime": "2014-01-14 09:07:30.5",
        "endTime": "2014-01-14 09:08:00.66",
        "stopTime": 30,
        "isStop": false,
        "latitude": 27.7901,
        "longitude": 120.63,
        "topics": [
          {
            "topic": "Enterprise",
            "val": 0.06490752329300606
          },
          {
            "topic": "Shop",
            "val": 0.06417744402725718
          },
          {
            "topic": "Finance",
            "val": 0.058893060770408366
          },
          {
            "topic": "Life",
            "val": 0.05565985259352062
          },
          {
            "topic": "Beauty",
            "val": 0.05562508691419924
          },
          {
            "topic": "Traffic",
            "val": 0.0555555555555565
          },
          {
            "topic": "Scenicspot",
            "val": 0.0555555555555565
          },
          {
            "topic": "Uptown",
            "val": 0.0555555555555565
          },
          {
            "topic": "Food",
            "val": 0.0555555555555565
          },
          {
            "topic": "Hospital",
            "val": 0.0555555555555565
          },
          {
            "topic": "Hotel",
            "val": 0.0555555555555565
          },
          {
            "topic": "Government",
            "val": 0.0555555555555565
          },
          {
            "topic": "Education",
            "val": 0.0555555555555565
          }
        ]
      },
      {
        "site": "15540",
        "startTime": "2014-01-14 09:08:00.66",
        "endTime": "2014-01-14 09:10:32.95",
        "stopTime": 152,
        "isStop": false,
        "latitude": 27.7836,
        "longitude": 120.6383,
        "topics": [
          {
            "topic": "Government",
            "val": 0.09633569739952773
          },
          {
            "topic": "Food",
            "val": 0.08813099707968325
          },
          {
            "topic": "Shop",
            "val": 0.08178626060353227
          },
          {
            "topic": "Education",
            "val": 0.07544152412738149
          },
          {
            "topic": "Life",
            "val": 0.07126964260881663
          },
          {
            "topic": "Traffic",
            "val": 0.0555207898762342
          },
          {
            "topic": "Beauty",
            "val": 0.051748713669865276
          },
          {
            "topic": "Uptown",
            "val": 0.050618829091920656
          },
          {
            "topic": "Hotel",
            "val": 0.04997566402447528
          },
          {
            "topic": "Finance",
            "val": 0.040693227645668656
          },
          {
            "topic": "Enterprise",
            "val": 0.03702544847726373
          },
          {
            "topic": "Hospital",
            "val": 0.035652204144069444
          },
          {
            "topic": "Scenicspot",
            "val": 0.03511333611458817
          }
        ]
      },
      {
        "site": "23850",
        "startTime": "2014-01-14 09:10:32.95",
        "endTime": "2014-01-14 09:22:22.38",
        "stopTime": 709,
        "isStop": false,
        "latitude": 27.7722,
        "longitude": 120.6565,
        "topics": [
          {
            "topic": "Food",
            "val": 0.07394957983193347
          },
          {
            "topic": "Beauty",
            "val": 0.06354371535848394
          },
          {
            "topic": "Hotel",
            "val": 0.06250670480958344
          },
          {
            "topic": "Finance",
            "val": 0.05714285714285696
          },
          {
            "topic": "Enterprise",
            "val": 0.05714285714285696
          },
          {
            "topic": "Traffic",
            "val": 0.05714285714285696
          },
          {
            "topic": "Scenicspot",
            "val": 0.05714285714285696
          },
          {
            "topic": "Uptown",
            "val": 0.05714285714285696
          },
          {
            "topic": "Hospital",
            "val": 0.05714285714285696
          },
          {
            "topic": "Life",
            "val": 0.05714285714285696
          },
          {
            "topic": "Shop",
            "val": 0.05714285714285696
          },
          {
            "topic": "Government",
            "val": 0.05714285714285696
          },
          {
            "topic": "Education",
            "val": 0.05714285714285696
          }
        ]
      },
      {
        "site": "556",
        "startTime": "2014-01-14 09:22:22.38",
        "endTime": "2014-01-14 09:40:31.19",
        "stopTime": 1088,
        "isStop": false,
        "latitude": 27.7721,
        "longitude": 120.6613,
        "topics": [
          {
            "topic": "Food",
            "val": 0.18556241278609767
          },
          {
            "topic": "Uptown",
            "val": 0.1226389308474671
          },
          {
            "topic": "Hospital",
            "val": 0.09428452231956555
          },
          {
            "topic": "Finance",
            "val": 0.09140736265159005
          },
          {
            "topic": "Shop",
            "val": 0.050076964021118296
          },
          {
            "topic": "Life",
            "val": 0.04753067771495952
          },
          {
            "topic": "Scenicspot",
            "val": 0.04029462115000081
          },
          {
            "topic": "Traffic",
            "val": 0.03956094543466685
          },
          {
            "topic": "Beauty",
            "val": 0.03813675139901884
          },
          {
            "topic": "Enterprise",
            "val": 0.034554687612389015
          },
          {
            "topic": "Hotel",
            "val": 0.03426697164559137
          },
          {
            "topic": "Education",
            "val": 0.02877159667975758
          },
          {
            "topic": "Government",
            "val": 0.023002891545465982
          }
        ]
      },
      {
        "site": "20550",
        "startTime": "2014-01-14 09:40:31.19",
        "endTime": "2014-01-14 09:41:04.96",
        "stopTime": 33,
        "isStop": false,
        "latitude": 27.7718,
        "longitude": 120.6569,
        "topics": [
          {
            "topic": "Government",
            "val": 0.08050603795284614
          },
          {
            "topic": "Uptown",
            "val": 0.07962656022731088
          },
          {
            "topic": "Food",
            "val": 0.07154213036565972
          },
          {
            "topic": "Beauty",
            "val": 0.05963535500456672
          },
          {
            "topic": "Hotel",
            "val": 0.05791022561986279
          },
          {
            "topic": "Education",
            "val": 0.05537327064235709
          },
          {
            "topic": "Scenicspot",
            "val": 0.05449379291682181
          },
          {
            "topic": "Finance",
            "val": 0.05418935831952111
          },
          {
            "topic": "Life",
            "val": 0.05412170618678763
          },
          {
            "topic": "Enterprise",
            "val": 0.05408788012042089
          },
          {
            "topic": "Traffic",
            "val": 0.05408788012042089
          },
          {
            "topic": "Hospital",
            "val": 0.054087880120420886
          },
          {
            "topic": "Shop",
            "val": 0.05405405405405415
          }
        ]
      },
      {
        "site": "4855",
        "startTime": "2014-01-14 09:41:04.96",
        "endTime": "2014-01-14 09:53:11.05",
        "stopTime": 726,
        "isStop": false,
        "latitude": 27.7809,
        "longitude": 120.6571,
        "topics": [
          {
            "topic": "Finance",
            "val": 0.05882352941176564
          },
          {
            "topic": "Enterprise",
            "val": 0.05882352941176564
          },
          {
            "topic": "Traffic",
            "val": 0.05882352941176564
          },
          {
            "topic": "Scenicspot",
            "val": 0.05882352941176564
          },
          {
            "topic": "Uptown",
            "val": 0.05882352941176564
          },
          {
            "topic": "Food",
            "val": 0.05882352941176564
          },
          {
            "topic": "Hospital",
            "val": 0.05882352941176564
          },
          {
            "topic": "Life",
            "val": 0.05882352941176564
          },
          {
            "topic": "Hotel",
            "val": 0.05882352941176564
          },
          {
            "topic": "Shop",
            "val": 0.05882352941176564
          },
          {
            "topic": "Government",
            "val": 0.05882352941176564
          },
          {
            "topic": "Beauty",
            "val": 0.05882352941176564
          },
          {
            "topic": "Education",
            "val": 0.05882352941176564
          }
        ]
      },
      {
        "site": "24296",
        "startTime": "2014-01-14 09:53:11.05",
        "endTime": "2014-01-14 09:56:08.17",
        "stopTime": 177,
        "isStop": false,
        "latitude": 27.7856,
        "longitude": 120.6578,
        "topics": [
          {
            "topic": "Education",
            "val": 0.09095553114863018
          },
          {
            "topic": "Uptown",
            "val": 0.08296084391203372
          },
          {
            "topic": "Life",
            "val": 0.06975556179918817
          },
          {
            "topic": "Enterprise",
            "val": 0.06909146637378362
          },
          {
            "topic": "Shop",
            "val": 0.05969196189113947
          },
          {
            "topic": "Food",
            "val": 0.053766187325994384
          },
          {
            "topic": "Traffic",
            "val": 0.05233582794820067
          },
          {
            "topic": "Finance",
            "val": 0.04796812341958071
          },
          {
            "topic": "Hospital",
            "val": 0.04630788485607026
          },
          {
            "topic": "Scenicspot",
            "val": 0.04531174171796401
          },
          {
            "topic": "Beauty",
            "val": 0.04531174171796399
          },
          {
            "topic": "Hotel",
            "val": 0.043958008735409344
          },
          {
            "topic": "Government",
            "val": 0.04084186866235905
          }
        ]
      },
      {
        "site": "11593",
        "startTime": "2014-01-14 09:56:08.17",
        "endTime": "2014-01-14 09:58:18.33",
        "stopTime": 130,
        "isStop": false,
        "latitude": 27.7849,
        "longitude": 120.6513,
        "topics": [
          {
            "topic": "Uptown",
            "val": 0.19069889994071546
          },
          {
            "topic": "Government",
            "val": 0.10455503590013991
          },
          {
            "topic": "Shop",
            "val": 0.06326987681970948
          },
          {
            "topic": "Traffic",
            "val": 0.05918582438574583
          },
          {
            "topic": "Education",
            "val": 0.058872933271853584
          },
          {
            "topic": "Finance",
            "val": 0.052269283973388245
          },
          {
            "topic": "Hospital",
            "val": 0.044479942032804635
          },
          {
            "topic": "Enterprise",
            "val": 0.044002371385284636
          },
          {
            "topic": "Food",
            "val": 0.043574204597853175
          },
          {
            "topic": "Life",
            "val": 0.035554311310190774
          },
          {
            "topic": "Scenicspot",
            "val": 0.03339700941966975
          },
          {
            "topic": "Beauty",
            "val": 0.03161847045649208
          },
          {
            "topic": "Hotel",
            "val": 0.030103418747118523
          }
        ]
      },
      {
        "site": "3333",
        "startTime": "2014-01-14 09:58:18.33",
        "endTime": "2014-01-14 10:06:22.71",
        "stopTime": 484,
        "isStop": false,
        "latitude": 27.7839,
        "longitude": 120.6593,
        "topics": [
          {
            "topic": "Enterprise",
            "val": 0.08931896578039557
          },
          {
            "topic": "Uptown",
            "val": 0.0731402057449851
          },
          {
            "topic": "Government",
            "val": 0.07262126438535874
          },
          {
            "topic": "Scenicspot",
            "val": 0.04923837723984147
          },
          {
            "topic": "Education",
            "val": 0.04887206569186993
          },
          {
            "topic": "Life",
            "val": 0.04884153972953897
          },
          {
            "topic": "Finance",
            "val": 0.048811013767208006
          },
          {
            "topic": "Hospital",
            "val": 0.048811013767208006
          },
          {
            "topic": "Traffic",
            "val": 0.048780487804877044
          },
          {
            "topic": "Food",
            "val": 0.048780487804877044
          },
          {
            "topic": "Hotel",
            "val": 0.048780487804877044
          },
          {
            "topic": "Shop",
            "val": 0.048780487804877044
          },
          {
            "topic": "Beauty",
            "val": 0.048780487804877044
          }
        ]
      },
      {
        "site": "11593",
        "startTime": "2014-01-14 10:06:22.71",
        "endTime": "2014-01-14 10:09:15.47",
        "stopTime": 172,
        "isStop": false,
        "latitude": 27.7849,
        "longitude": 120.6513,
        "topics": [
          {
            "topic": "Uptown",
            "val": 0.19069889994071546
          },
          {
            "topic": "Government",
            "val": 0.10455503590013991
          },
          {
            "topic": "Shop",
            "val": 0.06326987681970948
          },
          {
            "topic": "Traffic",
            "val": 0.05918582438574583
          },
          {
            "topic": "Education",
            "val": 0.058872933271853584
          },
          {
            "topic": "Finance",
            "val": 0.052269283973388245
          },
          {
            "topic": "Hospital",
            "val": 0.044479942032804635
          },
          {
            "topic": "Enterprise",
            "val": 0.044002371385284636
          },
          {
            "topic": "Food",
            "val": 0.043574204597853175
          },
          {
            "topic": "Life",
            "val": 0.035554311310190774
          },
          {
            "topic": "Scenicspot",
            "val": 0.03339700941966975
          },
          {
            "topic": "Beauty",
            "val": 0.03161847045649208
          },
          {
            "topic": "Hotel",
            "val": 0.030103418747118523
          }
        ]
      },
      {
        "site": "20979",
        "startTime": "2014-01-14 10:09:15.47",
        "endTime": "2014-01-14 10:29:53.39",
        "stopTime": 1237,
        "isStop": true,
        "latitude": 27.785,
        "longitude": 120.6618,
        "topics": [
          {
            "topic": "Government",
            "val": 0.08284661382283486
          },
          {
            "topic": "Food",
            "val": 0.07321652065081441
          },
          {
            "topic": "Beauty",
            "val": 0.06090947017104808
          },
          {
            "topic": "Hotel",
            "val": 0.06024892226394188
          },
          {
            "topic": "Scenicspot",
            "val": 0.056042275066055705
          },
          {
            "topic": "Life",
            "val": 0.05559032123487788
          },
          {
            "topic": "Finance",
            "val": 0.0555555555555565
          },
          {
            "topic": "Enterprise",
            "val": 0.0555555555555565
          },
          {
            "topic": "Traffic",
            "val": 0.0555555555555565
          },
          {
            "topic": "Uptown",
            "val": 0.0555555555555565
          },
          {
            "topic": "Hospital",
            "val": 0.0555555555555565
          },
          {
            "topic": "Shop",
            "val": 0.0555555555555565
          },
          {
            "topic": "Education",
            "val": 0.0555555555555565
          }
        ]
      },
      {
        "site": "11593",
        "startTime": "2014-01-14 10:29:53.39",
        "endTime": "2014-01-14 10:30:15.07",
        "stopTime": 21,
        "isStop": false,
        "latitude": 27.7849,
        "longitude": 120.6513,
        "topics": [
          {
            "topic": "Uptown",
            "val": 0.19069889994071546
          },
          {
            "topic": "Government",
            "val": 0.10455503590013991
          },
          {
            "topic": "Shop",
            "val": 0.06326987681970948
          },
          {
            "topic": "Traffic",
            "val": 0.05918582438574583
          },
          {
            "topic": "Education",
            "val": 0.058872933271853584
          },
          {
            "topic": "Finance",
            "val": 0.052269283973388245
          },
          {
            "topic": "Hospital",
            "val": 0.044479942032804635
          },
          {
            "topic": "Enterprise",
            "val": 0.044002371385284636
          },
          {
            "topic": "Food",
            "val": 0.043574204597853175
          },
          {
            "topic": "Life",
            "val": 0.035554311310190774
          },
          {
            "topic": "Scenicspot",
            "val": 0.03339700941966975
          },
          {
            "topic": "Beauty",
            "val": 0.03161847045649208
          },
          {
            "topic": "Hotel",
            "val": 0.030103418747118523
          }
        ]
      },
      {
        "site": "3333",
        "startTime": "2014-01-14 10:30:15.07",
        "endTime": "2014-01-14 10:31:14.45",
        "stopTime": 59,
        "isStop": false,
        "latitude": 27.7839,
        "longitude": 120.6593,
        "topics": [
          {
            "topic": "Enterprise",
            "val": 0.08931896578039557
          },
          {
            "topic": "Uptown",
            "val": 0.0731402057449851
          },
          {
            "topic": "Government",
            "val": 0.07262126438535874
          },
          {
            "topic": "Scenicspot",
            "val": 0.04923837723984147
          },
          {
            "topic": "Education",
            "val": 0.04887206569186993
          },
          {
            "topic": "Life",
            "val": 0.04884153972953897
          },
          {
            "topic": "Finance",
            "val": 0.048811013767208006
          },
          {
            "topic": "Hospital",
            "val": 0.048811013767208006
          },
          {
            "topic": "Traffic",
            "val": 0.048780487804877044
          },
          {
            "topic": "Food",
            "val": 0.048780487804877044
          },
          {
            "topic": "Hotel",
            "val": 0.048780487804877044
          },
          {
            "topic": "Shop",
            "val": 0.048780487804877044
          },
          {
            "topic": "Beauty",
            "val": 0.048780487804877044
          }
        ]
      },
      {
        "site": "11593",
        "startTime": "2014-01-14 10:31:14.45",
        "endTime": "2014-01-14 10:31:50.24",
        "stopTime": 35,
        "isStop": false,
        "latitude": 27.7849,
        "longitude": 120.6513,
        "topics": [
          {
            "topic": "Uptown",
            "val": 0.19069889994071546
          },
          {
            "topic": "Government",
            "val": 0.10455503590013991
          },
          {
            "topic": "Shop",
            "val": 0.06326987681970948
          },
          {
            "topic": "Traffic",
            "val": 0.05918582438574583
          },
          {
            "topic": "Education",
            "val": 0.058872933271853584
          },
          {
            "topic": "Finance",
            "val": 0.052269283973388245
          },
          {
            "topic": "Hospital",
            "val": 0.044479942032804635
          },
          {
            "topic": "Enterprise",
            "val": 0.044002371385284636
          },
          {
            "topic": "Food",
            "val": 0.043574204597853175
          },
          {
            "topic": "Life",
            "val": 0.035554311310190774
          },
          {
            "topic": "Scenicspot",
            "val": 0.03339700941966975
          },
          {
            "topic": "Beauty",
            "val": 0.03161847045649208
          },
          {
            "topic": "Hotel",
            "val": 0.030103418747118523
          }
        ]
      },
      {
        "site": "7533",
        "startTime": "2014-01-14 10:31:50.24",
        "endTime": "2014-01-14 10:38:07.64",
        "stopTime": 377,
        "isStop": false,
        "latitude": 27.7889,
        "longitude": 120.6339,
        "topics": [
          {
            "topic": "Uptown",
            "val": 0.07969200631223927
          },
          {
            "topic": "Scenicspot",
            "val": 0.07163846111987929
          },
          {
            "topic": "Hospital",
            "val": 0.069108124285793
          },
          {
            "topic": "Government",
            "val": 0.06431952984709258
          },
          {
            "topic": "Shop",
            "val": 0.062850302007945
          },
          {
            "topic": "Hotel",
            "val": 0.060401588942700264
          },
          {
            "topic": "Life",
            "val": 0.059721390869021534
          },
          {
            "topic": "Traffic",
            "val": 0.055150459813898024
          },
          {
            "topic": "Beauty",
            "val": 0.05381727158948688
          },
          {
            "topic": "Finance",
            "val": 0.0519399249061327
          },
          {
            "topic": "Enterprise",
            "val": 0.050906023834140536
          },
          {
            "topic": "Education",
            "val": 0.04891984545899769
          },
          {
            "topic": "Food",
            "val": 0.043695924253142664
          }
        ]
      },
      {
        "site": "8793",
        "startTime": "2014-01-14 10:38:07.64",
        "endTime": "2014-01-14 12:58:45.06",
        "stopTime": 8437,
        "isStop": true,
        "stoppoint": 1,
        "latitude": 27.7964,
        "longitude": 120.6275,
        "topics": [
          {
            "topic": "Government",
            "val": 0.11349901662792741
          },
          {
            "topic": "Education",
            "val": 0.10135884140890446
          },
          {
            "topic": "Beauty",
            "val": 0.08789558376542138
          },
          {
            "topic": "Uptown",
            "val": 0.062345789379581656
          },
          {
            "topic": "Food",
            "val": 0.05959234757732921
          },
          {
            "topic": "Shop",
            "val": 0.058036831753978634
          },
          {
            "topic": "Traffic",
            "val": 0.05621312354729149
          },
          {
            "topic": "Hospital",
            "val": 0.047541569819417595
          },
          {
            "topic": "Life",
            "val": 0.04716610048274666
          },
          {
            "topic": "Hotel",
            "val": 0.04496692293938895
          },
          {
            "topic": "Enterprise",
            "val": 0.04303593777936751
          },
          {
            "topic": "Finance",
            "val": 0.03929912390488128
          },
          {
            "topic": "Scenicspot",
            "val": 0.035401394600393446
          }
        ]
      }
    ],
    "matching": true
  }
]