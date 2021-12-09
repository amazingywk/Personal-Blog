<template>
  <div class="message">
    <NavBar title="消息"/>

<br />
    <div v-for="message in messages" :key="message._id" style="display:inline-block;border:1px solid #000">
      <div>发送人：{{message.from_id}}</div>
      <div>接收人：{{message.to_id}}</div>
      <div>标题：{{message.title}}</div>
      <div>内容{{message.content}}</div>
    </div>
    <van-button type='primary'>dsflks</van-button>
    <!-- <Footer /> -->
  </div>
</template>

<script>
import { defineComponent,onMounted, reactive,toRefs } from 'vue'
import { reqGetMessage } from "@/api";

import NavBar from '@/components/NavBar';
// import  Footer  from "@/components/Footer";

export default defineComponent({
  name:'message',

  components:{
    NavBar,
    // Footer,
  },

  setup() {
    const state = reactive({
      messages:[]
    })

    onMounted(async()=>{
      const result = await reqGetMessage()
      state.messages = result.data
    })

    return {
      ...toRefs(state)
    }
  },
})
</script>

<style lang="less" scoped>
  .message{
    width: 100%;
    height: 100vh;
    overflow: hidden;
    background: url('https://tse1-mm.cn.bing.net/th/id/OIP-C.YKdzfu7F2nvlDjDmHOvcnwHaNK?w=187&h=333&c=7&r=0&o=5&dpr=2&pid=1.7') no-repeat;
    background-size: 100%;
  }
</style>
