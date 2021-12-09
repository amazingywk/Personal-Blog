<template>
  <div class="home">
    <NavBar title='主页' :isSearch='true'/>

    <!-- 轮播图 -->
    <van-swipe :autoplay="3000" lazy-render class="my-swipe">
      <van-swipe-item v-for="image in images" :key="image">
        <img :src="image" style="width:100%;height:100%;"/>
      </van-swipe-item>
    </van-swipe>
    <!-- 滚动通知栏 -->
    <van-notice-bar
      left-icon="volume-o"
      :text='NOTICE'
      style="height:5rem;width:100%;"
      @click="Notice(NOTICE)"
    />
    

    <!-- 文章展示区 -->
    <van-pull-refresh v-model="loading" @refresh="onRefresh" style="width:100%;">
      <!-- <van-divider> 文章展示区，可下拉刷新</van-divider>  -->
      <van-tabs v-model:active="active" swipeable lazy-render style="width:100%;overflow-x:auto">
        <van-tab :title="classification.name" v-for="classification in classificationList" :key="classification._id">
          <div class="article-area">
            <Article class="article" v-for="article in articles" :key='article._id' :article="article"/>
          </div>
        </van-tab>
      </van-tabs>

      <van-button 
        type='primary' 
        @click="publishArticle('61531e11f0e09cc3e3f3d9c7','admin')"
        style="display:block;width:100%;text-align:center"
      >发布文章</van-button>
      <!-- <Footer /> -->
    </van-pull-refresh>
    

  </div>
</template>

<script>
import { useRouter } from "vue-router";
import {NOTICE,SUCCESS,BACKGROUNDURL} from '@/config';
import {defineComponent,onMounted,reactive,toRefs} from 'vue'
import {reqGetClassification,reqGetArticle} from '@/api'

import  NavBar  from "@/components/NavBar";
// import  Footer  from "@/components/Footer";
import  Article from "@/components/Article";
import {Swipe,SwipeItem,NoticeBar,Toast,Tab,Tabs, Dialog} from 'vant';

export default defineComponent({

  name:'home',

  components:{
    'van-notice-bar':NoticeBar,
    'van-swipe':Swipe,
    'van-swipe-item':SwipeItem,
    'van-tabs':Tabs,
    'van-tab':Tab,
    NavBar,
    // Footer,
    Article,
  },

  setup() {
    const router = useRouter()

    const state = reactive({
      loading : false,          // 下拉刷新的loading
      active  : 0,              // 标签栏显示下标初始值
      classificationList: [],   // 分类列表
      articles:{},              // 文章
    })

    // 下拉刷新模块
    const onRefresh = () => {
      setTimeout(() => {
        Toast('刷新成功');
        state.loading = false;
      }, 1000);
    };

    
    // 轮播图模块
    const images = [
        'https://img.yzcdn.cn/vant/apple-1.jpg',
        'https://img.yzcdn.cn/vant/apple-2.jpg',
    ];

    // 滚动通知栏
    const Notice = (content)=>{
      Dialog.alert({
        title:'公告',
        message:content
      })
        
    }

    // 文章区域
    onMounted(async()=>{
      const result = await reqGetClassification()
      if(result.status===SUCCESS){
        state.classificationList = result.data
      }else{
        Toast.fail('获取分类列表失败')
      }
      const articleResult = await reqGetArticle()
      console.log('article',articleResult.data)
      state.articles = articleResult.data
      console.log('articles',state.articles)
    })

    //发布文章按钮
    const publishArticle = (_id,username)=> {
      console.log('clickPublishArticle',_id,username)
      router.push({
        name:'ArticleAdd',
        params:{
          _id,
          username,
        }
      })
    }
    
    return {
      images,
      publishArticle,
      BACKGROUNDURL,
      NOTICE,
      Notice,
      onRefresh,
      ...toRefs(state)
    }
  },
})
</script>

<style lang="less" scoped>
  .home{
    width: 100%;
    height: 100vh;
    overflow-x: hidden;
    // overflow-y: auto;
    background: url(@homeBGURL) no-repeat;
    background-size: 100%;
    .my-swipe {
      width: 100%;
      height: 35rem;
      margin: 0 auto;
    }
    .article-area{
      // display: flex;
      // justify-content: space-between;
      width: 100%;
      margin: 4rem auto;
      columns:2;
      column-gap: 0rem;
      // height: 300rem;
      overflow-y: auto;
      .article{
        break-inside: avoid;
        margin:0 0 3rem 2rem;
      }
    }
  }
</style>
