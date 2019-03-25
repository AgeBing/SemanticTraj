import MySQLdb

import sys
import json
import os

from django.http import *
from channels.generic.websocket import WebsocketConsumer
from backend.nlputil import nlp
import numpy as np

from .import cachedata

class MyEncoder(json.JSONEncoder):
  def default(self, obj):
    if isinstance(obj, np.integer):
      return int(obj)
    elif isinstance(obj, np.floating):
      return float(obj)
    elif isinstance(obj, np.ndarray):
      return obj.tolist()
    else:
      return super(MyEncoder, self).default(obj)

class NlpConsumer(WebsocketConsumer):
    def connect(self):
        self.accept()

    def disconnect(self, close_code):
        print('disconnect')
        pass

    def receive(self, text_data):
        data = json.loads(text_data)
        nlp_method = self.scope['url_route']["kwargs"]["method"]
        # 获取简单的分词
        if nlp_method == 'participle':
          results = nlp.get_participle(data['text'])
          self._send(results)
        # 获取轨迹
        elif nlp_method == 'trajs':
          print('/trajs 接口已经弃用')
          return '[]'
          # trajNode = nlp.get_similiar_sites(data['text'])
          # trajs = trajNode.get_traj()
          # self._send(trajs)
        # 获取得到K近邻分词的MDS投影
        elif nlp_method == 'k_vecs':
          results = nlp.get_k_vecs(data['text'])
          self._send(results)
        # 获取POI的层次信息
        elif nlp_method == 'poi_layer':
          words = json.loads(data['text'])
          results = nlp.get_poi_layer(words)
          self._send(results)
        elif nlp_method == 'trajs_new':
          
          # words = json.loads(data['text'])
          # print(words)
          # trajNode = nlp.get_similiar_sites(words)
          # trajs = trajNode.get_traj()
          # self._send(trajs)


          sites = json.loads(data['text'])
          print(sites)
          trajNode = nlp.get_k_sites(sites)
          trajs = trajNode.get_traj()
          self._send(trajs)

        elif nlp_method == 'cache':
          trajs = data['trajs']
          cachedata.write_topic(trajs)
          self._send(1)

        elif nlp_method == 'sites':
          trajs = data['sites']
          print(len(trajs))
          cachedata.write_file(trajs,'sites.json')
          self._send(1)


    def _send(self, data):
        self.send(text_data = json.dumps(data, cls = MyEncoder))