"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.allRoutes = void 0;

var _vueRouter = require("vue-router");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// import NavBar from "@/components/NavBar";
var allRoutes = [{
  path: '/',
  redirect: '/login'
}, {
  path: '/login',
  name: 'Login',
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('@/pages/login'));
    });
  }
}, {
  path: '/home',
  name: 'Home',
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('@/pages/home'));
    });
  }
}, {
  path: '/article/add',
  name: 'ArticleAdd',
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('@/pages/article/add'));
    });
  }
}, {
  path: '/article/detail',
  name: 'ArticleDetail',
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('@/pages/article/detail'));
    });
  }
}, {
  path: '/classification',
  name: 'Classification',
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('@/pages/classification'));
    });
  }
}, {
  path: '/message/manage',
  name: 'MessageManage',
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('@/pages/message/manage'));
    });
  }
}, {
  path: '/message/add',
  name: 'MessageAdd',
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('@/pages/message/add'));
    });
  }
}, {
  path: '/user/manage',
  name: 'UserManage',
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('@/pages/user/manage'));
    });
  }
}, {
  path: '/user/add',
  name: 'addUser',
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('@/pages/user/addAndUpdate'));
    });
  },
  children: [{
    path: '/user/update',
    name: 'UpdateUser',
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('@/pages/user/addAndUpdate'));
      });
    }
  }]
}, {
  path: '/user/detail',
  name: 'UserDetail',
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('@/pages/user/detail'));
    });
  }
}, {
  path: '/article/manage',
  name: 'ArticleCheck',
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('@/pages/article/manage'));
    });
  }
}, {
  path: '/user/own',
  name: 'Own',
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('@/pages/user/own'));
    });
  }
}, {
  path: '/sponsor',
  name: 'Sponsor',
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('@/pages/sponsor'));
    });
  }
}, {
  path: '/about',
  name: 'About',
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('@/pages/about'));
    });
  }
}];
exports.allRoutes = allRoutes;
var router = (0, _vueRouter.createRouter)({
  history: (0, _vueRouter.createWebHashHistory)(),
  routes: allRoutes
});
var _default = router;
exports["default"] = _default;