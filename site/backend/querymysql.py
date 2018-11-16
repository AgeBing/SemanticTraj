import MySQLdb

import sys
import json
import os

from django.http import *
from channels.generic.websocket import WebsocketConsumer

BASE_DIR = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
BASE_DATA_DIR = os.path.join(BASE_DIR, 'data')

class QueryMysql(WebsocketConsumer):
    def connect(self):
        self.accept()

    def disconnect(self, close_code):
        pass

    def receive(self, text_data):
        data = json.loads(text_data)
        if (data['reqType'] == 'queryDb' and data['operate'] == 'select'):
            self.querydb(data)
        elif (data['reqType'] == 'readText'):
            self.readText(data)
    """
    查询mysql，返回结果的字典数组
    """
    def querydb(self, data):
        sql_str = "select {0} from {1} {2}".format(data['column'], 
            data['table'], data['limit'])
        results = []
        results_dict = []
        try:
            conn = MySQLdb.connect(db = 'mobiledata', host = '10.76.0.184', 
            	user = 'root', passwd = '123456', use_unicode = True, 
                charset = "utf8")
            cursor = conn.cursor()
            cursor.execute(sql_str)
            column_names = tuple(map(lambda x: x[0], cursor.description))
            results_dict = [dict(zip(column_names, row)) 
                for row in cursor.fetchall()]
            conn.close()
        except Exception as e:
            print(e)
        finally:
            self.send(text_data = json.dumps(results_dict))

    def readText(self, data):
        with open(os.path.join(BASE_DATA_DIR, data['fileName']), 'r') as f:
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
            self.send(text_data = json.dumps(results))