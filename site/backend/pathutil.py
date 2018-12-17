import os

BASE_DIR = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

BASE_DATA_DIR = os.path.join(BASE_DIR, 'data')

MODEL_PATH = os.path.join(BASE_DATA_DIR, 'model_2.bin')

VECTOR_PATH = os.path.join(BASE_DATA_DIR, 'site_split_vector')