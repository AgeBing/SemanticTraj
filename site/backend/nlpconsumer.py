import MySQLdb

import sys
import json
import os

from django.http import *
from channels.generic.websocket import WebsocketConsumer
from backend.nlputil import nlp

class NlpConsumer(WebsocketConsumer):
    def connect(self):
        self.accept()

    def disconnect(self, close_code):
        print('disconnect')
        pass

    def receive(self, text_data):
        data = json.loads(text_data)
        nlp_method = self.scope['url_route']["kwargs"]["method"]
        if nlp_method == 'participle':
          results = nlp.get_participle(data['text'])
          self._send(results)
        elif nlp_method == 'trajs':
          trajNode = nlp.get_similiar_sites(data['text'])
          trajs = trajNode.get_traj()
          self._send(trajs)

    def _send(self, data):
        self.send(text_data = json.dumps(data))