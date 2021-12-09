"use strict";

/*
配置
 */
var config = {
  SUCCESS: 1,
  //接口返回的成功的状态
  FAIL: 0,
  //接口返回的失败的状态
  NOTICE: '热烈庆祝社区正式开始了开发，更多精彩的页面及功能敬请期待。',
  //首页滚动通知栏内容
  BACKGROUNDURL: 'https://tse1-mm.cn.bing.net/th/id/R-C.d8dfd08893b58d08d74b38ad8870a48d?rik=FOH776EhG01I%2bA&riu=http%3a%2f%2fstatic.cntonan.com%2fuploadfile%2f2020%2f0318%2f20200318122901txdvkwgvpsw.jpg&ehk=2OKIaIz3xTccGgjf5DFKNDfJLcPfvXjuF%2bJbC6GJk6w%3d&risl=&pid=ImgRaw&r=0',
  PERSONALAUTHORITY: [{
    text: '个人主页',
    name: 'user/own'
  }, {
    text: '消息',
    name: 'message/manage'
  }, {
    text: '注销',
    name: 'logout'
  }],
  // 右侧头像弹出框内容
  USERAUTHORITY: [{
    text: '主页',
    name: 'home'
  }, {
    text: '赞助作者',
    name: 'sponsor'
  }, {
    text: '关于',
    name: 'about'
  }],
  // 左侧菜单弹出框内容
  MANAGERAUTHORITY: [{
    text: '主页',
    name: 'home'
  }, {
    text: '用户管理',
    name: 'user/manage'
  }, {
    text: '分类管理',
    name: 'classification'
  }, {
    text: '文章审核',
    name: 'article/manage'
  }, {
    text: '赞助作者',
    name: 'sponsor'
  }, {
    text: '关于',
    name: 'about'
  }],
  ARTICLEAUTHORITY: [{
    text: '主页',
    name: 'home'
  }, {
    text: '分类管理',
    name: 'classification'
  }, {
    text: '文章审核',
    name: 'article/manage'
  }, {
    text: '赞助作者',
    name: 'sponsor'
  }, {
    text: '关于',
    name: 'about'
  }]
};
module.exports = config;