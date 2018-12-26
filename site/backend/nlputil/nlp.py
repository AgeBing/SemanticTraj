"""
分词采用清华大学此法分析包:
n/名词 np/人名 ns/地名 ni/机构名 nz/其它专名
m/数词 q/量词 mq/数量词 t/时间词 f/方位词 s/处所词
v/动词 vm/能愿动词 vd/趋向动词 a/形容词 d/副词
h/前接成分 k/后接成分 i/习语 j/简称
r/代词 c/连词 p/介词 u/助词 y/语气助词
e/叹词 o/拟声词 g/语素 w/标点 x/其它 
"""
# import gensim, logging
import thulac
import jieba

# from . import compare
from backend import pathutil
from backend import traj
from . import nlpqueryutil
import logging

MAX_K_NUM = 1000

# logging.basicConfig(format='%(asctime)s : %(levelname)s : %(message)s', level=logging.INFO)

# Load word2vec model, lazy load
# model = None
# model = gensim.models.KeyedVectors.load_word2vec_format(pathutil.MODEL_PATH, binary=True)
# load thu lac
thul = thulac.thulac()

# def get_word_vec(word):
#   try:
#     # if model is None:
#     #   model = gensim.models.KeyedVectors.load_word2vec_format(pathutil.MODEL_PATH, binary=True)
#     vec = model.get_vector(word)
#     return vec
#   except Exception as e:
#     print('word: ', word, ' has no vector')
#     return None

def get_participle(sentence):
  return thul.cut(sentence)

def get_similiar_sites(sentence):
  """
  @return 获取词意最相近的基站ID，以set形式返回
  """
  words = list(filter(lambda x: x[1] == 'n' or x[1] == 'ns' or x[1] == 'nz',
      thul.cut(sentence)))
  print('participle: ', words)
  sites = set()
  _site_cover = {}
  for i in range(0, len(words)):
    # word_vec = get_word_vec(words[i][0])
    # if word_vec is None:
    #   continue
    nlp_socket = nlpqueryutil.NlpSocket()
    most_similiar_node = nlp_socket.query_nlp(words[i][0], MAX_K_NUM)
    if len(most_similiar_node) == 0:
      print(words, 'has no vector')
    for node in most_similiar_node:
      sites.add(node['site_id'])
      state = _site_cover.get(node['site_id'], 0)
      _site_cover[node['site_id']] = state | (1 << i)
  logging.info('get_similiar_sites done!')
  return traj.Traj(len(words), sites, _site_cover)
  