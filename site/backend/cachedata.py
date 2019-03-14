

###
###  读取本地样本数据传给前端
###

import json
import os

BASE_DIR = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
BASE_DIR_DATA = os.path.join(BASE_DIR,'data')

print(BASE_DIR_DATA)


filename = '医院和学校结果.json'
# filename = '医院和学校结果_2000.json'

filename_topic = '医院和学校_包含Topic.json'


def write(data):
	f = open(os.path.join(BASE_DIR_DATA,filename),'w')
	json.dump(data,f)
	f.close()

def write_topic(data):
	f = open(os.path.join(BASE_DIR_DATA,filename_topic),'w')
	json.dump(data,f)
	f.close()


def read():
	f = open(os.path.join(BASE_DIR_DATA,filename),'r')
	a = f.read()
	data = json.loads(a)
	return data

def write_file(data,file):
	f = open(os.path.join(BASE_DIR_DATA,file),'w')
	json.dump(data,f)
	f.close()

def read_file(file):
	f = open(os.path.join(BASE_DIR_DATA,file),'r')
	a = f.read()
	data = json.loads(a)
	return data
