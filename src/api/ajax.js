/**
 * 封装ajax请求
 * 返回一个Promise对象
 */
import { Toast } from "vant";
import axios from "axios";
import storageUtils from '@/utils/storageUtils'

export default function ajax(url,data={},type='GET') {
  
  return new Promise((resolve, _) => {
    let promise
    if(type==='GET') {
      promise = axios.get(url,{
        params:data,
        headers:{
          'authorization':'Bearer '+storageUtils.getToken()
        }
      })
    }else {
      promise = axios.post(url,data,{
        headers:{
          'authorization':'Bearer '+storageUtils.getToken()
        }
      })
    }

    promise.then(response=>{
      resolve(response.data)
    }).catch(error=>{
      console.log(_)
      Toast.fail('请求失败'+error.msg)
    })

  })
}