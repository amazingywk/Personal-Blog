"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

/**
 * 进行local数据存储管理的工具模块
 */
var USER_KEY = 'user_key';
var TOKEN_KEY = 'token_key';
var storeageUtils = {
  /**
   * store user
   * read user
   * delete user
   */
  saveUser: function saveUser(user) {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  },
  getUser: function getUser() {
    return JSON.parse(localStorage.getItem(USER_KEY) || '{}');
  },
  removeUser: function removeUser() {
    localStorage.removeItem(USER_KEY);
  },
  saveToken: function saveToken(token) {
    localStorage.setItem(TOKEN_KEY, token);
  },
  getToken: function getToken() {
    return localStorage.getItem(TOKEN_KEY || '');
  },
  removeToken: function removeToken() {
    localStorage.removeItem(TOKEN_KEY);
  }
};
var _default = storeageUtils;
exports["default"] = _default;