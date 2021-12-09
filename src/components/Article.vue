<template>
  <div class="article" @click="ArticleDetail">
    <van-image
      style="width:100%"
      lazy-load
      :src="article.images[0]?article.images[0].url:'https://tse3-mm.cn.bing.net/th/id/OIP-C.Y2zc9lfEiyH6no7hd4fOPAHaGZ?w=189&h=180&c=7&r=0&o=5&dpr=2&pid=1.7'"
    />
    <div>{{article.title}}</div>
    <div style="text-align:center;margin:0 auto">admin</div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name:'Article',

  props:{
    article:{type:Object}
  },

  setup(props) {
    const router = useRouter()

    const ArticleDetail = ()=>{
      router.push({
        path:'/article/detail',
        query:{
          _id:props.article._id
        }
      })
    }

    return {
      ArticleDetail
    }
  },
})
</script>

<style lang="less" scoped>
  .article{
    // display: inline-block;
    width: 85%;
    background-color: #fff;
    border-radius: 3rem;
    overflow: hidden;
  }
</style>
