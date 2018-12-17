import sys

import re
import time
import math
import heapq
import random
import multiprocessing as mp

from backend import pathutil

MAX_ARRAY_LEN = 1000

class Node(object):
  def __init__(self, site_id, id, val):
    self.site_id = site_id
    self.id = id
    self.val = val

  def __lt__(self, other):
    if (self.val != other.val):
      return self.val < other.val
    return self.site_id < other.site_id

def calc_cosine(A, B):
  product = 0.0
  A_square = 0.0
  B_square = 0.0
  for i in range(0, len(A)):
    product += A[i] * B[i];
    A_square += A[i] * A[i];
    B_square += B[i] * B[i];
  return product / math.sqrt(A_square) / math.sqrt(B_square)

def calc_word_doc_cosine(word_vec, ob):
  sum_cosine = 0.0
  for vec in ob['v']:
    sum_cosine += calc_cosine(word_vec, vec)
  return sum_cosine

def get_top_k(vecs, vec, K):
  que = []
  for v in vecs:
    val = calc_word_doc_cosine(vec, v)
    heapq.heappush(que, Node(v['site_id'], v['id'], val))
    if (len(que) > K):
      heapq.heappop(que)
  return que

def get_max_k_node(vec, K):
  # start_time = time.time()
  ans = []
  vecs = []
  pool = mp.Pool(processes = 6)
  with open(pathutil.VECTOR_PATH, 'r', encoding = 'utf-8') as this_file:
    for line in this_file:
      this_row = line.split(',')
      tmp = {}
      tmp['site_id'] = int(this_row[0])
      tmp['id'] = this_row[1]
      tmp['vn'] = int(this_row[2])
      tmp['v'] = []
      for i in range(0, tmp['vn']):
        tmp['v'].append(list(map(float, this_row[i * 100 + 2 : (i + 1) * 100 + 2])))
      vecs.append(tmp)
      if (len(vecs) % MAX_ARRAY_LEN == 0):
        ans.append(pool.apply_async(get_top_k, (vecs, vec, K)))
        vecs = []
  pool.close()
  pool.join()
  # end_time = time.time()
  # print (end_time - start_time,  ' ### ')
  ans[0] = ans[0].get()
  for i in range(1, len(ans)):
    ans[i] = ans[i].get()
    while len(ans[i]) > 0:
      heapq.heappush(ans[0], heapq.heappop(ans[i]))
      if (len(ans[0])) > K:
        heapq.heappop(ans[0])
  return sorted(ans[0], key = lambda x: x.val, reverse = True)

# if __name__ == '__main__':
#   start_time0 = time.time()
#   # now = get_max_k_val(test_arr, 20)
#   now = get_max_k_node(test_arr, 20)
#   end_time0 = time.time()
#   print(end_time0 - start_time0)
#   for x in now:
#     print(x.id, x.val)