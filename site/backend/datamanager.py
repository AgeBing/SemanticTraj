import sys
import json
import os

from . import pathutil
from . import querymysqlutil

type17CN = ["公司企业","购物","丽人","休闲娱乐","医疗","教育培训","汽车服务","美食","宾馆","旅游景点",
"生活服务","运动健身","交通设施","政府机构","房地产","自然地物","金融", '医疗生活'];
type17 = ['Enterprise', 'Shop', 'Beauty', 'Entertainment', 'Hospital', 
    'Education', 'Car', 'Food', 'Hotel', 'Tourist_attractions', 'Life', 'Sports',
    'Traffic', 'Government', 'Uptown', 'Scenicspot', 'Finance', 'Hospital'];

wordIndex2Topic = {}
topic2WordIndex = {}
siteTopic = {}
sites = {}
pois = {}

def readText(data):
    with open(os.path.join(pathutil.BASE_DATA_DIR, data['fileName']), 'r') as f:
        lines = f.readlines()[data['begin']-1 : data['readLineLimit']]
        idx = -1
        results = {}
        for line in lines:
            line = line.strip()
            if (line.find('\t') != -1):
                idx = int(line.split('\t')[0])
                val = line.split('\t')[1]
                results[idx] = [float(val.split(',')[0])]
            elif len(line) > 0 :
                v = float(line.split(',')[0])
                results[idx].append(v)
        return results

def get_topic_poi(data):
    for k, v in data.items():
        max_index = -1
        max_value = 0
        for i, tmp_value in enumerate(v):
            if max_value < tmp_value:
                max_value = tmp_value
                max_index = i
        wordIndex2Topic[k] = type17[max_index]
        topic2WordIndex[type17[max_index]] = k

def get_index_topic(data):
    for site_id, v in data.items():
        tmp = {}
        for i, x in enumerate(v):
            topic = wordIndex2Topic[i]
            if not topic in tmp:
                tmp[topic] = x
            tmp[topic] = max(tmp[topic], x)
        topics = [{'topic': k, 'val': v} for k, v in tmp.items()]
        siteTopic[str(site_id)] = sorted(topics, 
                key = lambda x: x['val'], reverse = True)


def load_data():
    get_topic_poi(readText(
            {'begin': 3, 'fileName': "type.txt", 'readLineLimit': 308}))
    get_index_topic(readText(
            {'begin': 23, 'fileName': "topic17.txt", 'readLineLimit': 496678}))
    get_sites()

def get_sites():
    data = {
        'reqType': "queryDb",
        'operate': "select",
        'column': "id, longitude, latitude, vertice, neighbor, base_station",
        'table': "site",
        'limit': 'where id >= 0 and id <= 28746', # all stations in 温州
    };
    db = querymysqlutil.Mysql()
    res = db.query(data)
    for d in res:
        sites[d['id']] = {
            'longitude': d['longitude'],
            'latitude': d['latitude'],
            'vertice': d['vertice'],
            'neighbor': d['neighbor'],
            'base_station': d['base_station']
        }
    print('initialize data successfully!')

def update_pois(pois_set):
    pois_str = ','.join(pois_set)
    pois_sql = 'select * from poi where uid in ({0})'.format(pois_str)
    db = querymysqlutil.Mysql()
    res = db.get_all(pois_sql)
    for poi in res:
        if poi['uid'] not in pois:
            pois[poi['uid']] = {
                'name': poi['name'],
                'type': poi['type'],
                'longitude': poi['longitude'],
                'latitude': poi['latitude']
            }

load_data()
    