import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
// import VueQuillEditor from 'vue-quill-editor'


import { 
  Button,Form,Field,PullRefresh,Popup,
  Icon,Image,Lazyload,CellGroup,Radio,RadioGroup,Uploader,Toast as VanToast,Divider
} from "vant"

const app = createApp(App)
// vant控件
app.use(Button).use(Form).use(Field).use(CellGroup).use(Radio).use(RadioGroup).use(Uploader)
app.use(PullRefresh).use(Popup).use(Icon).use(Image).use(Lazyload).use(VanToast).use(Divider)

// 富文本编辑器{
//   placeholder:'请输入content',
// }
// app.use(VueQuillEditor)

app.use(router).mount('#app')
