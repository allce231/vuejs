import axios from 'axios'
import promise from 'es6-promise'
promise.polyfill() //promise 兼容ie9,10
import api from '@/config.js'
import storage from '@/service/storage'
import { resolve } from 'url';
import { rejects } from 'assert';

const $ajax = function(url,opt){
  const option =
    Object.assign({
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      url:  url
    },opt);
  let userToken = storage.get("userToken");
  if(userToken){
    let d = option.data ? option.data :{};
    option.data = Object.assign(d,{userToken: userToken})
  }

  return new Promise((resolve,rejects)=>{
    axios(option).then((data)=>{
      resolve(data)
    }).catch((e)=>{
      rejects(e)
    })
  })
}

export { $ajax };
