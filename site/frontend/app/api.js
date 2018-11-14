

let urlBase = 'http://localhost:8000'
let urlBase2 = 'http://localhost:3033'


async function _fetch(url = '', data = {}, type = 'GET', method = 'fetch'){
	
    // url = urlBase + url

  if (type == 'GET') {
        let dataStr = ''; //数据拼接字符串
        Object.keys(data).forEach(key => {
            dataStr += key + '=' + data[key] + '&';
        })

        if (dataStr !== '') {
            dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'));
            url = url + '?' + dataStr;
        }
    }

	let requestConfig = {
            // credentials: 'include',
            method: type,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            mode: "cors",
            // cache: "force-cache"
    }
    if (type == 'POST') {
        Object.defineProperty(requestConfig, 'body', {
            value: JSON.stringify(data)
        })
    }

    try {
        const response = await fetch(url, requestConfig);
        const responseJson = await response.json();
        return responseJson
    } catch (error) {
        throw new Error(error)
    }

}

export const apiTestGet = (data) => _fetch(urlBase + '/demo/test_get', data);

export const getTrajs = (data) => _fetch(urlBase  + '/data/trajs', data);
export const getTopics = (data) => _fetch(urlBase + '/data/topics', data);

export const _getApi = () => _fetch(urlBase2 + '/api');



