"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ajax;

var _vant = require("vant");

var _axios = _interopRequireDefault(require("axios"));

var _storageUtils = _interopRequireDefault(require("@/utils/storageUtils"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * 封装ajax请求
 * 返回一个Promise对象
 */
function ajax(url) {
  var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'GET';
  return new Promise(function (resolve, _) {
    var promise;

    if (type === 'GET') {
      promise = _axios["default"].get(url, {
        params: data,
        headers: {
          'authorization': 'Bearer ' + _storageUtils["default"].getToken()
        }
      });
    } else {
      promise = _axios["default"].post(url, data, {
        headers: {
          'authorization': 'Bearer ' + _storageUtils["default"].getToken()
        }
      });
    }

    promise.then(function (response) {
      resolve(response.data);
    })["catch"](function (error) {
      console.log(_);

      _vant.Toast.fail('请求失败' + error.msg);
    });
  });
}