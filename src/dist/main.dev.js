"use strict";

var _vue = require("vue");

var _App = _interopRequireDefault(require("./App.vue"));

var _router = _interopRequireDefault(require("./router"));

var _vant = require("vant");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import VueQuillEditor from 'vue-quill-editor'
var app = (0, _vue.createApp)(_App["default"]); // vant控件

app.use(_vant.Button).use(_vant.Form).use(_vant.Field).use(_vant.CellGroup).use(_vant.Radio).use(_vant.RadioGroup).use(_vant.Uploader);
app.use(_vant.PullRefresh).use(_vant.Popup).use(_vant.Icon).use(_vant.Image).use(_vant.Lazyload).use(_vant.Toast).use(_vant.Divider); // 富文本编辑器{
//   placeholder:'请输入content',
// }
// app.use(VueQuillEditor)

app.use(_router["default"]).mount('#app');