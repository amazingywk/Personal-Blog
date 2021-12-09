<template>
  <div class="article-check">
    <NavBar title='文章审核' />

    <ArticleCard v-for="article in articles" :key="article._id" :_id="article._id" :isPublished="false"/>
    
  </div>
</template>

<script>
import { defineComponent, onMounted, reactive, toRefs } from 'vue'
import {reqGetArticle} from '@/api'
import {useRouter} from 'vue-router'

import NavBar from '@/components/NavBar'
import ArticleCard from '@/components/ArticleCard'

export default defineComponent({
  name:'articleCheck',
  components:{
    NavBar,
    ArticleCard
  },
  setup() {
    const router = useRouter()
    console.log(reactive,toRefs)
    const state = reactive({
      articles:[]
    })

    onMounted(async()=>{
      const result = await reqGetArticle()
      state.articles = result.data
    })

    const articleDetail=(id)=>{
      router.push({
        path:'/article/detail',
        query:{
          _id:id
        }
      })
    }

    return {
      ...toRefs(state),
      articleDetail
    }
  },
})
</script>

<style lang="less" scoped>
  .article-check{
    width: 100%;
    height: 100vh;
    overflow-x: hidden;
    // overflow-y: auto;
     background: url('https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fv1.qzone.cc%2Fskin%2F201901%2F21%2F10%2F40%2F5c4531386db0f087.jpeg%21600x600.jpg&refer=http%3A%2F%2Fv1.qzone.cc&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1635584696&t=44c3ef03b958e99499ffe6dc3c23dd35') no-repeat;
    // background-image: url(./bg1.jpg);
    background-size: 100%;
    .commend{
      text-align: center;
      height: 3rem;
      line-height: 3rem;
      font-size: 3rem;
    }
  }
</style>