/**
 * 根据接口文档定义接口需求
 * 包含应用中所有接口请求函数的模块
 * 每个函数的返回值都是promise
 */
import axios from "axios";
import ajax from "./ajax";
// import { Toast } from "vant";

// const BASE = 'api'
const BASE = process.env.VUE_APP_BASE_URL

//登录
export function reqLogin(formState) {
  console.log(formState)
  return ajax(BASE+'/login',formState,'POST')
}

// 获取分类列表
export function reqGetClassification() {
  return ajax(BASE+'/classification/list')
}

// 添加分类
export function reqAddClassification(formState) {
  return ajax(BASE+'/classification/add',formState,'POST')
}

// 根据_id更新分类名称
export function reqUpdateClassification({_id,name}) {
  return ajax(BASE+'/classification/update',{_id,name},'POST')
}

// 删除分类
export function reqDeleteClassification({_id}) {
  return ajax(BASE+'/classification/delete',{_id},"POST")
}

// 获取用户列表
export function reqGetUser() {
  return ajax(BASE+'/user/list')
}

// 添加用户
export function reqAddUser(user) {
  return ajax(BASE+'/user/add',user,'POST')
}

// 根据传入新的user数据更新指定用户或者根据_id查找并返回user
export function reqUpdateUser(user) {
  return ajax(BASE+'/user/update',user,'POST')
}

// 根据_id删除指定用户
export function reqDeleteUser(_id) {
  return ajax(BASE+'/user/delete',{_id},'POST')
}

// 获取文章列表
export function reqGetArticle(){
  return ajax(BASE+'/article/list')
}

// 发布文章
export function reqAddArticle({_id,article}){
  return ajax(BASE+'/article/add',{_id,article},"POST")
}

// 删除文章
export function reqDeleteArticle({_id}) {
  return ajax(BASE+'/article/delete',{_id},"POST")
}

// 根据_id查找文章
export function reqDetailArticle({_id}) {
  return ajax(BASE+'/article/update',{_id,article:{}},"POST")
}

// 更新文章
export function reqUpdateArticle({_id,article}) {
  return ajax(BASE+'/article/update',{_id,article},"POST")
}

// 获取消息总列表
export function reqGetMessage() {
  return ajax(BASE+'/message/list')
}

// 添加消息
export function reqAddMessage(message) {
  return ajax(BASE+'/article/add',message,'POST')
}

// 上传图片
export function reqUploadImg(file) {
  let fd = new FormData()
  fd.append('image',file.file)
  let url = BASE + '/img/upload'
  return axios.post(url,fd,{
    headers:{
      'Content-Type':'multipart/form-data'
    }
  })
}

// 删除图片
export function reqDeleteImg({name}) {
  return ajax(BASE+'/img/delete',{name},'POST')
}