"""
分词采用清华大学此法分析包:
n/名词 np/人名 ns/地名 ni/机构名 nz/其它专名
m/数词 q/量词 mq/数量词 t/时间词 f/方位词 s/处所词
v/动词 vm/能愿动词 vd/趋向动词 a/形容词 d/副词
h/前接成分 k/后接成分 i/习语 j/简称
r/代词 c/连词 p/介词 u/助词 y/语气助词
e/叹词 o/拟声词 g/语素 w/标点 x/其它 
"""
import gensim, logging
import thulac
import jieba
from . import compare

MAX_K_NUM = 1000

logging.basicConfig(format='%(asctime)s : %(levelname)s : %(message)s', level=logging.INFO)

#Load word2vec model
model = gensim.models.KeyedVectors.load_word2vec_format('model_2.bin', binary=True)
#load thu lac
thul = thulac.thulac()

def get_word_vec(word):
  try:
    vec = model.get_vector(word)
    return vec
  except Exception as e:
    print('word: ', word, ' has no vector')
    return -1

def get_similiar_poi(sentence):
  words = filter(lambda x: x[1] == 'n1' or x[1] == 'ns' or x[1] == 'nz',
      thul.cut(sentence))
  print(words)
  pois = set()
  for word in words:
    word_vec = get_word_vec(word)
    if (word_vec == -1):
      continue
    pois = pois | set(map(lambda x: x.id, compare.get_max_k_node(word_vec, MAX_K_NUM)))
  return pois
  