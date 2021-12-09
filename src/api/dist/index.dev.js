"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reqLogin = reqLogin;
exports.reqGetClassification = reqGetClassification;
exports.reqAddClassification = reqAddClassification;
exports.reqUpdateClassification = reqUpdateClassification;
exports.reqDeleteClassification = reqDeleteClassification;
exports.reqGetUser = reqGetUser;
exports.reqAddUser = reqAddUser;
exports.reqUpdateUser = reqUpdateUser;
exports.reqDeleteUser = reqDeleteUser;
exports.reqGetArticle = reqGetArticle;
exports.reqAddArticle = reqAddArticle;
exports.reqDeleteArticle = reqDeleteArticle;
exports.reqDetailArticle = reqDetailArticle;
exports.reqUpdateArticle = reqUpdateArticle;
exports.reqGetMessage = reqGetMessage;
exports.reqAddMessage = reqAddMessage;
exports.reqUploadImg = reqUploadImg;
exports.reqDeleteImg = reqDeleteImg;

var _axios = _interopRequireDefault(require("axios"));

var _ajax = _interopRequireDefault(require("./ajax"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * 根据接口文档定义接口需求
 * 包含应用中所有接口请求函数的模块
 * 每个函数的返回值都是promise
 */
// import { Toast } from "vant";
// const BASE = 'api'
var BASE = process.env.VUE_APP_BASE_URL; //登录

function reqLogin(formState) {
  console.log(formState);
  return (0, _ajax["default"])(BASE + '/login', formState, 'POST');
} // 获取分类列表


function reqGetClassification() {
  return (0, _ajax["default"])(BASE + '/classification/list');
} // 添加分类


function reqAddClassification(formState) {
  return (0, _ajax["default"])(BASE + '/classification/add', formState, 'POST');
} // 根据_id更新分类名称


function reqUpdateClassification(_ref) {
  var _id = _ref._id,
      name = _ref.name;
  return (0, _ajax["default"])(BASE + '/classification/update', {
    _id: _id,
    name: name
  }, 'POST');
} // 删除分类


function reqDeleteClassification(_ref2) {
  var _id = _ref2._id;
  return (0, _ajax["default"])(BASE + '/classification/delete', {
    _id: _id
  }, "POST");
} // 获取用户列表


function reqGetUser() {
  return (0, _ajax["default"])(BASE + '/user/list');
} // 添加用户


function reqAddUser(user) {
  return (0, _ajax["default"])(BASE + '/user/add', user, 'POST');
} // 根据传入新的user数据更新指定用户或者根据_id查找并返回user


function reqUpdateUser(user) {
  return (0, _ajax["default"])(BASE + '/user/update', user, 'POST');
} // 根据_id删除指定用户


function reqDeleteUser(_id) {
  return (0, _ajax["default"])(BASE + '/user/delete', {
    _id: _id
  }, 'POST');
} // 获取文章列表


function reqGetArticle() {
  return (0, _ajax["default"])(BASE + '/article/list');
} // 发布文章


function reqAddArticle(_ref3) {
  var _id = _ref3._id,
      article = _ref3.article;
  return (0, _ajax["default"])(BASE + '/article/add', {
    _id: _id,
    article: article
  }, "POST");
} // 删除文章


function reqDeleteArticle(_ref4) {
  var _id = _ref4._id;
  return (0, _ajax["default"])(BASE + '/article/delete', {
    _id: _id
  }, "POST");
} // 根据_id查找文章


function reqDetailArticle(_ref5) {
  var _id = _ref5._id;
  return (0, _ajax["default"])(BASE + '/article/update', {
    _id: _id,
    article: {}
  }, "POST");
} // 更新文章


function reqUpdateArticle(_ref6) {
  var _id = _ref6._id,
      article = _ref6.article;
  return (0, _ajax["default"])(BASE + '/article/update', {
    _id: _id,
    article: article
  }, "POST");
} // 获取消息总列表


function reqGetMessage() {
  return (0, _ajax["default"])(BASE + '/message/list');
} // 添加消息


function reqAddMessage(message) {
  return (0, _ajax["default"])(BASE + '/article/add', message, 'POST');
} // 上传图片


function reqUploadImg(file) {
  var fd = new FormData();
  fd.append('image', file.file);
  var url = BASE + '/img/upload';
  return _axios["default"].post(url, fd, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
} // 删除图片


function reqDeleteImg(_ref7) {
  var name = _ref7.name;
  return (0, _ajax["default"])(BASE + '/img/delete', {
    name: name
  }, 'POST');
}