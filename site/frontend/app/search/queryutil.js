const IPADDRESS = 'ws://localhost:8000/';

function _query(url, myData = {}) {
  return new Promise((resolve, reject) => {
    const ws = new WebSocket(IPADDRESS + url);
    ws.onopen = function() {
      ws.send(JSON.stringify(myData));
    }
    ws.onmessage = function(e) {
      resolve(JSON.parse(e.data));
    }
  });
}

export function pquery(myData) {
  return new Promise((resolve, reject) => {
    const ws = new WebSocket(IPADDRESS);
    ws.onopen = function() {
      // console.log(JSON.stringify(myData));
      ws.send(JSON.stringify(myData));
    }
    ws.onmessage = function(e) {
      resolve(JSON.parse(e.data));
    }
  });
}

export function get_participle(data) {
  return _query('nlp/participle/', {'text': data});
}

export function get_trajs(data) {
  return _query('nlp/trajs/', {'text': data});
}

export function get_k_vecs(data) {
  return _query('nlp/k_vecs/', {'text': data});
}


export function send_cache(data) {
  return _query('nlp/cache/', {'trajs': data});
}
