<template>
  <div class="article-detail">
    <NavBar title="文章详情"/>
    <br />
    
    <div class="article-content">
      <div class="title">{{article.title}}</div>
      <div class="article-author" @click="articleAuthor" >
        <van-image class="author-portrait" src='https://tse2-mm.cn.bing.net/th/id/OIP-C.AjC_T4iZJYRr-_fAGNI_igAAAA?pid=ImgDet&rs=1' lazy-load/>
        <div class="author-name">{{article.author_name}}</div>
        <div class="classification">{{article.classification}}</div>
      </div>
      <div class="detail">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{article.content}}</div>

      <div style="width:100%;margin-top:2rem;" v-for="image in article.images" :key='image' >
        <img :src="image.url" alt="" style="display:block;width:90%;margin:0 auto">
      </div>
      
   
      <div class="view"> 
        <van-icon name='like-o'></van-icon>{{article.like_amount}}
        <van-icon name="browsing-history-o"></van-icon>{{article.view_amount}}
      </div>
    </div>

    <van-button type="primary" @click='liskArticle'>点赞</van-button>
    <van-button type="primary" @click='collectArticle'>收藏</van-button>
    <van-button type="primary" @click='deleteArticle'>删除</van-button>

  </div>
</template>

<script>
import { defineComponent,reactive, toRefs,onMounted } from 'vue';
import {useRoute, useRouter} from 'vue-router'
import {reqDetailArticle,reqDeleteArticle,reqUpdateArticle} from '@/api'

import NavBar from "@/components/NavBar";
import { Dialog, Toast } from 'vant';

export default defineComponent({
  name:'ArticleDetail',

  components:{
    NavBar,
  },

  setup() {
    const route = useRoute()
    const router = useRouter()
    const state = reactive({
      article:{
        like_amount:0,
        collect_user:[]
      },
      isLike:false
    })
    const {_id} = route.query
    console.log(_id)

    onMounted(async()=>{
      const result = await reqDetailArticle({_id})
      state.article = result.data
      console.log(state.article)
    })

    const articleAuthor=()=>{
      router.push('/user/detail')
    }

    const deleteArticle = async()=>{
      console.log('delete' ,reqDeleteArticle)
      Dialog.confirm({
        title:'删除',
        message:'确认要删除这个文章吗'
      })
        .then(async()=>{
          const result = await reqDeleteArticle({_id})
          console.log(result)
          Toast.success('删除成功')
          router.replace('/home')
        })
    }

    const liskArticle = async()=>{
      if(!state.isLike){
        const result = await reqUpdateArticle({_id,article:{like_amount:state.article.like_amount+1}})
        state.article = result.data
        state.isLike = true
        console.log(result)
      }else{
        console.log('已经点赞过了')
      }
    }

    const collectArticle = async()=>{
      // const result = reqUpdateArticle({_id,collecd})
      Toast.success('收藏成功')
    }

    return {
      ...toRefs(state),
      articleAuthor,
      deleteArticle,
      liskArticle,
      collectArticle
    }
  },
})
</script>

<style lang="less" scoped>
  .article-detail{
    width: 100%;
    height: 100vh;
    overflow-y: auto;
    background: url('https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fv1.qzone.cc%2Fskin%2F201901%2F21%2F10%2F40%2F5c4531386db0f087.jpeg%21600x600.jpg&refer=http%3A%2F%2Fv1.qzone.cc&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1635584696&t=44c3ef03b958e99499ffe6dc3c23dd35') no-repeat;
    background-size: 100%;
    .article-content{
      width:100%;
      .title{
        text-align: center;
        font-size: 6.5rem;
      }
      .detail{
        font-size: 4rem;
        margin:2rem 0;
      }
      
      .view{
        font-size: 4rem;
        margin:7rem 0 3rem 0;
      }
    }
    .article-author{
      width: 100%;
      height: 5rem;
      display: flex;
      line-height: 5rem;
      justify-content: center;
      align-items: center;
      margin-top: 1rem;
      .author-portrait{
        width: 5rem;
        height: 5rem;
        border-radius: 5rem;
        overflow: hidden;
        margin-right: 1rem;
      }
      .author-name{
        // display: inline-block;
      }
      .classification{
        height: 4rem;
        // display: inline-block;
        border:1px solid @mt;
        color: @mt;
        line-height: 4rem;
        margin-left: 2rem;
      }
    }
  }
</style>