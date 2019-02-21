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

from sklearn import manifold
from sklearn.metrics import euclidean_distances
import numpy as np

# from . import compare
from backend import pathutil
from backend import traj
from backend import datamanager
from . import nlpqueryutil
import logging
from backend.mylib import custom_decorator

MAX_K_NUM = 200
K_NEARST_NUM = 5

word_cache = {}

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


def get_similiar_sites(words):
  """
  @return 获取词意最相近的基站ID，以set形式返回
  """
  sites = set()
  _site_cover = {}
  pois = []
  for i in range(0, len(words)):
    nlp_socket = nlpqueryutil.NlpSocket()
    poi_complex = nlp_socket.query_nlp_new(words[i][0].split('_'), 
        MAX_K_NUM, K_NEARST_NUM)
    if len(poi_complex['simple']) == 0:
      print(words, 'has no vector')
    for node in poi_complex['simple']:
      pois.append("'" + str(node['id']) + "'")
      sites.add(node['site_id'])
      state = _site_cover.get(node['site_id'], 0)
      _site_cover[node['site_id']] = state | (1 << i)
    if words[i][0] not in word_cache:
      word_cache[words[i][0]] = {
        'name': words[i][0],
        'data': poi_complex['complex']
      }
  # print(','.join(pois))
  print('sites:', sites)
  datamanager.update_pois(pois)
  logging.info('get_similiar_sites done!')
  return traj.Traj(len(words), sites, _site_cover)

def get_poi_layer(words):
  results = []
  for word, word_type in words:
    if word in word_cache:
      for split_word in word_cache[word]['data']:
        for relation_word in split_word['data']:
          for poi in relation_word['data']:
            if poi['id'] in datamanager.pois:
              poi.update(datamanager.pois[poi['id']])
      results.append(word_cache[word])
  return results

def get_k_vecs(word):
  nlp_socket = nlpqueryutil.NlpSocket()
  k_words_vecs = nlp_socket.query_vecs(word, K_NEARST_NUM)
  seed = np.random.RandomState(seed=3)
  k_matrics = [x[2] for x in k_words_vecs]
  similarities = euclidean_distances(k_matrics)
  mds = manifold.MDS(n_components=2, max_iter=3000, eps=1e-9, random_state=seed,
      dissimilarity="precomputed", n_jobs=1)
  pos = mds.fit(similarities).embedding_
  words = [x[0] for x in k_words_vecs]
  ratios = [x[1] for x in k_words_vecs]
  return list(zip(words, ratios, pos))