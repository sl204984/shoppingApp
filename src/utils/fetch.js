import CONFIG from './config';

let token = '';
/**
 * @param {string} url 接口地址
 * @param {string} method 请求方法：GET、POST、PUT、DELETE，只能大写
 * @param {JSON} [body=''] body的请求参数，默认为空
 * @return {res: xxx, err: xxx}
 */
export const FetchRequest = async function ({
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
    return new Promise((_, reject) => {
      reject({
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
    return new Promise((_, reject) => {
      reject({
        res: null,
        err: err
      });
    });
  }
}

/** 
 * 使用fetch实现图片上传
 * @param {string} url  接口地址
 * @param {JSON} params body的请求参数
 * @return 返回Promise 
 */
export const UploadFile = function (url, params) {
  return new Promise(function (resolve, reject) {
    let formData = new FormData();
    for (var key in params) {
      formData.append(key, params[key]);
    }
    let file = {
      uri: params.path,
      type: 'application/octet-stream',
      name: 'image.jpg'
    };
    formData.append("file", file);
    fetch(CONFIG.HOST + url, {
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data;charset=utf-8',
          "x-access-token": token,
        },
        body: formData,
      }).then((response) => response.json())
      .then((responseData) => {
        console.log('uploadImage', responseData);
        resolve(responseData);
      })
      .catch((err) => {
        console.log('err', err);
        reject(err);
      });
  });
}


// 使用
// let params = {
//   userId: 'abc12345', //用户id
//   path: 'file:///storage/emulated/0/Pictures/image.jpg' //本地文件地址
// }
// uploadImage('app/uploadFile', params)
//   .then(res => {
//     //请求成功
//     if (res.header.statusCode == 'success') {
//       //这里设定服务器返回的header中statusCode为success时数据返回成功
//       upLoadImgUrl = res.body.imgurl; //服务器返回的地址
//     } else {
//       //服务器返回异常，设定服务器返回的异常信息保存在 header.msgArray[0].desc
//       console.log(res.header.msgArray[0].desc);
//     }
//   }).catch(err => {
//     //请求失败
//   })
