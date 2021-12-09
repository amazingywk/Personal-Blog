<template>
  <div class="article-card" @click="toDetail">
    <div class="title">{{article.title}}</div>
    <div class="article-author" @click.stop="articleAuthor" >
      <img class="author-portrait" src='https://tse2-mm.cn.bing.net/th/id/OIP-C.AjC_T4iZJYRr-_fAGNI_igAAAA?pid=ImgDet&rs=1'/>
      <div class="author-name">{{article.author_name}}</div>
    </div>
    <div class="content">
      {{article.content}}
    </div>
    <div style="color:#777;margin:2rem 0 0 2rem;" v-if="isPublished">
      {{article.view_amount}}&nbsp;浏览量&nbsp;·&nbsp;{{article.collect_user.length}}&nbsp;收藏量
    </div>
    <div class="options" v-else>
      <van-button type="danger" @click.stop="onDelete(article)" style="padding:0;width:10rem;height:6rem">删除</van-button>
      <van-button type="primary" @click.stop="onPublish(article)" style="padding:0;width:12rem;height:6rem;margin-left:1rem">{{isP?'已通过':'通过审核'}}</van-button>
    </div>
  </div>
</template>

<script>
import { defineComponent, onMounted, reactive,  toRefs } from 'vue'
import {useRouter} from 'vue-router'
import {reqDeleteArticle} from '@/api'
import {SUCCESS} from '@/config'

import { reqDetailArticle } from "@/api";
import { Dialog, Toast } from 'vant';

export default defineComponent({
  name:'ArticleCard',

  props:{
    _id:{type:String},
    isPublished:{type:Boolean,default:true}
  },

  setup(props) {
    // const {_id} = ref(props._id)
    console.log(props._id)
    const router = useRouter()
    const state = reactive({
      article:{
        collect_user:0
      },
      isP:true
    })

    onMounted(async()=>{
      const result = await reqDetailArticle({_id:props._id})
      state.article = result.data
      state.isP = props.isPublished
      console.log(result.data)
    })

    const toDetail = ()=>{
      router.push({
        path:'/article/detail',
        query:{
          _id:props._id
        }
      })
    }

    const onDelete =(article)=>{
      Dialog.confirm({
        title:'删除',
        message:'确定删除该文章吗'
      })
      .then(async()=>{
        const result = await reqDeleteArticle({_id:article._id})
        if(result.status===SUCCESS){
          Toast.success('删除成功')
          router.replace('/article/manage')
          console.log(article)
        }else{
          Toast.fail('删除异常')
        }
      })
    }

    const onPublish= (article)=>{
      console.log(article)
      // const temp = state.isPublished
      if(state.isP===true){
        state.isP = !state.isP
        Toast.success('取消通过')
      }else{
        state.isP = !state.isP
        Toast.success('审核通过')
      }
    }

    const articleAuthor = ()=>{
      router.push({
        path:'/user/detail',
        // query:{

        // }
      })
    }

    return {
      ...toRefs(state),
      toDetail,
      articleAuthor,
      onDelete,
      onPublish
    }
  },
})
</script>

<style lang="less" scoped>
  .article-card{
    position: relative;
    width:94%;
    height: 25rem;
    border-radius: 2rem;
    overflow: hidden;
    background: #fff;
    margin:1rem auto 0;
    .title{
      margin:2rem 0 0 2rem;
      font-size: 4rem;
      font-weight: 500;
    }
    .article-author{
      width: 100%;
      height: 4rem;
      display: flex;
      line-height: 4rem;
      justify-content: left;
      align-items: center;
      margin: 1rem 0 1rem 1rem;
      .author-portrait{
        width: 4rem;
        height: 4rem;
        border-radius: 4rem;
        overflow: hidden;
        margin-right: 1rem;
      }
      .author-name{
        // display: inline-block;
      }
    }
    .content{
      font-size: 3rem;
      height: 5rem;
      line-height: 2.5rem;
      margin: 0 2rem;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    .options{
      position: absolute;
      bottom: 1.5rem;
      right:2rem;
    }
  }
</style>