//模拟数据进行调用

import {  setGlobalTrajData ,topicAdd } from '../app/app'

let mockData = [
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


export function mock() {
	console.log(mockData)
	setGlobalTrajData(mockData)
	topicAdd([mockData[0].pid])
}
