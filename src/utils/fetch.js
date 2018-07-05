import CONFIG from './config';

let token = '';
/**
 * @param {string} url 接口地址
 * @param {string} method 请求方法：GET、POST、PUT、DELETE，只能大写
 * @param {JSON} [body=''] body的请求参数，默认为空
 * @return 返回Promise
 */
const FetchRequest = function ({
  url,
  method,
  body = ''
}) {
  let header = {
    "Content-Type": "application/json;charset=UTF-8",
    "accesstoken": token //用户登陆后返回的token，某些涉及用户数据的接口需要在header中加上token
  };

  // console.log('request url:', url, body); //打印请求参数
  return new Promise((resolve, reject) => {
    fetch(CONFIG.HOST + url, {
        method: method,
        headers: header,
        credentials: "include", // 带cookie
        body: body && JSON.stringify(body) //body参数，通常需要转换成字符串后服务器才能解析
      })
      .then((response) => response.json())
      .then((responseData) => {
        // console.log('res:', url, responseData); //网络请求成功返回的数据
        resolve(responseData);
      })
      .catch((err) => {
        // console.log('err:', url, err); //网络请求失败返回的数据  
        reject(err);
      });
  });
}

// 使用
// fetchRequest({url: 'app/book', method: 'GET'})
//   .then(res => {
//     //请求成功
//     if (res.header.statusCode == 'success') {
//       //这里设定服务器返回的header中statusCode为success时数据返回成功

//     } else {
//       //服务器返回异常，设定服务器返回的异常信息保存在 header.msgArray[0].desc
//       console.log(res.header.msgArray[0].desc);
//     }
//   }).catch(err => {
//     //请求失败
//   })

// let body = {
//   username: 'admin',
//   password: '123456'
// }
// fetchRequest({url: 'app/signin', method: 'POST', body})
//   .then(res => {
//     //请求成功
//     if (res.header.statusCode == 'success') {
//       //这里设定服务器返回的header中statusCode为success时数据返回成功

//     } else {
//       //服务器返回异常，设定服务器返回的异常信息保存在 header.msgArray[0].desc 
//       console.log(res.header.msgArray[0].desc);
//     }
//   }).catch(err => {
//     //请求失败
//   })

/** 
 * 使用fetch实现图片上传
 * @param {string} url  接口地址
 * @param {JSON} params body的请求参数
 * @return 返回Promise 
 */
const uploadFile = function (url, params) {
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

export default {
  FetchRequest,
  uploadFile
};