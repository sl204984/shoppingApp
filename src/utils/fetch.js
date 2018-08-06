import CONFIG from './config';

let token = '';
/**
 * @param {string} url 接口地址
 * @param {string} method 请求方法：GET、POST、PUT、DELETE，只能大写
 * @param {JSON} [body=''] body的请求参数，默认为空
 * @return {res: xxx, err: xxx}
 */
export const FetchRequest = async function({
  url,
  method,
  body = {}
}) {
  const request = {
    method: method || 'GET',
    headers: {
      "Content-Type": "application/json;charset=UTF-8"
    }
  };

  if(method !== 'GET') {
    request.body = JSON.stringify(body);
  }

  // 添加网络超时机制
  const timeoutId = setTimeout(() => {
    // Alert({ text: '您的网络不给力' });
    return new Promise((resolve) => {
      resolve({
        res: null,
        err: 'timeout'
      });
    });
  }, CONFIG.HTTP_TIME_OUT * 1000);

  try {
    const response = await fetch(CONFIG.HOST + url, request);

    clearTimeout(timeoutId);
    const responseData = await response.json();

    const {
      statusInfo,
      data,
      ok,
      status
    } = responseData;

    const _ok = status === 0 && ok;
    
    return new Promise(resolve => {
      resolve({
        // 有时会返回0的结果
        res: _ok ? data : null,
        err: _ok ? null : statusInfo,
        ok: _ok
      })
    });
  } catch (err) {
    clearTimeout(timeoutId);
    return new Promise((resolve) => {
      resolve({
        res: null,
        err: err
      });
    });
  }
}

/** 
 * 使用fetch实现图片上传
 * @param {string} url  接口地址
 * @param {JSON} body body的请求参数
 * @return 返回Promise 
 */
export const UploadFile = async function ({
  url, 
  body = {},
  multi = false
}) {
  let formData = new FormData();
  for (let key in body) {
    formData.append(key, body[key]);
  }
  if(multi) {
    // 多文件上传
    for(let uri of body.files) {
      let file = {
        uri: uri,
        type: 'multipart/form-data',
        name: 'image.jpg'
      };
      formData.append("files", file);
    }
  } else {
    // 单文件上传
    let file = {
      uri: body.path,
      type: 'multipart/form-data',
      name: 'files'
    };
    formData.append("file", file);
  }
  // 添加网络超时机制
  const timeoutId = setTimeout(() => {
    // Alert({ text: '您的网络不给力' });
    return new Promise((resolve) => {
      resolve({
        res: null,
        err: 'timeout'
      });
    });
  }, CONFIG.HTTP_TIME_OUT * 1000);
  try {
    const response = await fetch(CONFIG.HOST + url, {
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data;charset=utf-8',
        "x-access-token": token,
      },
      body: formData,
    });
    clearTimeout(timeoutId);
    const responseData = await response.json();
    const {
      statusInfo,
      data,
      ok,
      status
    } = responseData;

    const _ok = status === 0 && ok;
    
    return new Promise(resolve => {
      resolve({
        // 有时会返回0的结果
        res: _ok ? data : null,
        err: _ok ? null : statusInfo,
        ok: _ok
      })
    });
  } catch(err) {
    clearTimeout(timeoutId);
    return new Promise(resolve => {
      resolve({
        res: null,
        err: err
      });
    });
  }
}