from socket import socket, AF_INET, SOCK_STREAM
import json
import struct

HOST = '10.76.0.183'
PORT = 7777

class NlpSocket:
  def __init__(self):
    self.sock = socket(AF_INET, SOCK_STREAM)

  def connect(self, host, port):
    self.sock.connect((host, port))

  def send_msg(self, msg):
    totalsent = 0
    while True:
      sent = self.sock.send(msg[totalsent:])
      if sent == 0:
        break
      totalsent = totalsent + sent

  def recvall(self, n):
    data = b''
    while len(data) < n:
        packet = self.sock.recv(n - len(data))
        if not packet:
            return None
        data += packet
    return data

  def receive_msg(self):
    msg_len_raw = self.recvall(8)
    msg_len = struct.unpack('>q', msg_len_raw)[0]
    if msg_len is not None: 
      raw_data = self.recvall(msg_len)
      return raw_data.decode()

  def query_nlp(self, word, K, K_nearst_num):
    query_dict = {'type': 'query_new', 'word': word, 'K': K, 'K_nearst_num': K_nearst_num}
    self.connect(HOST, PORT)
    self.send_msg(json.dumps(query_dict).encode())
    return json.loads(self.receive_msg())

  def query_vecs(self, word, K_nearst_num):
    query_dict = {'type': 'get_k_words_vecs', 'word': word, 'K_nearst_num': K_nearst_num}
    self.connect(HOST, PORT)
    self.send_msg(json.dumps(query_dict).encode())
    return json.loads(self.receive_msg())
