import MySQLdb

import sys
import json
import os

from django.http import *
from channels.generic.websocket import WebsocketConsumer
from . import pathutil
from . import querymysqlutil

class QueryMysql(WebsocketConsumer):
    def connect(self):
        self.accept()

    def disconnect(self, close_code):
        pass

    def receive(self, text_data):
        data = json.loads(text_data)
        if (data['reqType'] == 'queryDb' and data['operate'] == 'select'):
            mysql = querymysqlutil.Mysql()
            results_dict = mysql.query(data)
            self.send(text_data = json.dumps(results_dict))
        elif (data['reqType'] == 'readText'):
            self.readText(data)

    # def send(self, data):
    #     self.send(text_data = json.dumps(data))

    def querydb(self, data):
        """
        查询mysql，返回结果的字典数组
        """
        print('This method is deprecated. Please use querymysqlutil.Mysql.query() method.')

    def readText(self, data):
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
            self.send(text_data = json.dumps(results))