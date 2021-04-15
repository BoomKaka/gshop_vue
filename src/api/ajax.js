/**
 * ajax请求函数模块
 * 返回值：promise对象（异步返回的数据：response.data）
 */

import axios from 'axios'

//export default 命令表示默认导出一个模块
export default function ajax(url = '', data={} , type="GET"){
  return new Promise(function(resolve, reject){
    let promise ;
    // 如果是GET请求,需要将数据拼接到url上
    if(type === 'GET'){
      let dataStr = ''
      Object.keys(data).forEach(key => {
        dataStr += '&' + key + '=' + data[key] + '&'
      })

      if(dataStr !== ''){
        dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
        url = url + '?' +dataStr
      }
      //发送get请求
      promise = axios.get(url)
    }else{
      //发送Post请求
      promise = axios.post(url,data)
    }
    
    promise.then(function (response){
      resolve(response.data)
    }).catch(function (error){
      reject(error)
    })
     //在promise外再包裹一层promise，使得ajax返回的是response.data而不是response
    //等价于
    /**
     * promise.then(response => {
          resolve(response.data)
        })
        .catch(error => {
          reject(error)
        })
     */

  })
  // const response = await ajax()
  // const result = response.data

  // const result = await ajax()
}