<template>
  <div class="user-detail">
    <NavBar title='个人主页'/>

    <ImgWall />

    <div class="options">
      <div class="follow" @click="changeFollow">
        {{isFollowed?'取消关注':'关注'}}
        <van-icon :name="isFollowed?'success':'plus'"></van-icon>
      </div>
      <div class="message-add" @click="massageAdd">发消息
        <van-icon name='chat-o' style="margin-left:1rem"></van-icon>
        </div>
    </div>
  </div>
</template>

<script>
import { defineComponent,reactive, toRefs } from 'vue'
import { useRouter } from "vue-router";

import NavBar from "@/components/NavBar";
import ImgWall from "@/components/ImgWall";

export default defineComponent({
  name:'UserDetail',

  components:{
    NavBar,
    ImgWall
  },

  setup() {
    const router = useRouter()

    const state = reactive({
      isFollowed:false
    })

    const massageAdd=()=>{
      router.push({
        name:'MessageAdd',
        params:{_id:'615884c0621e8a9b3114fee6'}
      })
    }

    const changeFollow =()=>{
      state.isFollowed = !state.isFollowed
    }

    return {
      ...toRefs(state),
      massageAdd,
      changeFollow
    }
  },
})
</script>

<style lang="less" scoped>
  .user-detail{
    width: 100%;
    height: 100vh;
    overflow: hidden;
    background: url('https://tse1-mm.cn.bing.net/th/id/OIP-C.YKdzfu7F2nvlDjDmHOvcnwHaNK?w=187&h=333&c=7&r=0&o=5&dpr=2&pid=1.7') no-repeat;
    background-size: 100%;
    .options{
      display: flex;
      width:50rem;
      height: 5rem;
      margin:0 auto;
      text-align: center;
      font-size: 3rem;
      border: 1px solid #000;
      text-shadow: 5rem;
      border-radius: 2rem;
      overflow: hidden;
      .follow{
        flex:1;
        border-right:1px solid rgba(0,0,0,.2)
      }
      .message-add{
        flex:1;
      }
    }
  }
</style>
