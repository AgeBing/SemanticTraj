"""
Copyright 2017 VAG (Visual Analytics Group), Zhejiang Univ.

Find all kinds of data, and return with a json type.

The returned json file contains objects which described in the /doc drirectory.

Author Shengjie Gao.

"""

import sys
import json

from django.http import *

def get_bus(request):
    try:
        flow_id = int(request.GET['flow'])
    except(ValueError, Exception):
        return HttpResponseBadRequest('parameter is invalid!')
    else:
        datas = readdata.readLPrefixFile(_get_LF_path(flow_id, 
            path.l1_file_name))
        result = _get_format_data(datastruct.L1_fields, datas)
        return JsonResponse(result)