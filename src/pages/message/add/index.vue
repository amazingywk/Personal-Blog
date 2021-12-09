<template>
  <div class="message-add">
    <NavBar title='发消息'/>
    <van-form class="article-form" @submit="onSubmit">
      <van-field 
        v-model="message.title"
        label='标题'
        placeholder="请输入消息标题"
        :rules="[ { required:true,message:'请输入消息标题' }]"
      ></van-field>
      <van-field label='接受者' v-model="message.to_id">
        <template #input>
          <van-dropdown-menu active-color="#FFC300" class="dropdown-menu">
            <van-dropdown-item v-model="message.to_id" :options="user" />
          </van-dropdown-menu>
        </template>
      </van-field>

      <div>
        内容：<textarea cols="25" rows="5" v-model="message.content"></textarea>
      </div>

      <van-button round block type="primary" native-type="submit">发送</van-button>
    </van-form>
  </div>
</template>

<script>
import { defineComponent, toRefs,reactive, onMounted } from 'vue'
import {useRoute} from 'vue-router'
import {reqGetUser} from '@/api'
import { DropdownItem,DropdownMenu } from "vant";


import NavBar from "@/components/NavBar";

export default defineComponent({
  name:'MessageAdd',

  components:{
    NavBar,
    'van-dropdown-menu':DropdownMenu,
    'van-dropdown-item':DropdownItem
  },

  setup() {
    const route = useRoute()
    const state = reactive({
      message:{
        from_id:route.params._id,
        to_id:'615bbf17d14ca27b569aade4',
        title:'',
        content:'',
      },
      users:[],
      user:{}
    })

    onMounted(async()=>{
      const result = await reqGetUser()
      state.user = result.data[0]
      result.data.map(user=>{
        let c = {
          text:user.username,
          value:user._id
        }
        state.users.push(c)
      })
    })

    const sendMessage = ()=>{
      state.message.create_time = Date.now
      console.log(state.message)
      // const result = await reqAddMessage(message)
    }

    const onSubmit =()=>{
      console.log(state.message)
    }

    return {
      ...toRefs(state),
      sendMessage,
      onSubmit
    }
  },
})
</script>

<style lang="less" scoped>
  .message-add{
    width: 100%;
    height: 100vh;
    overflow: hidden;
    background: url('https://tse1-mm.cn.bing.net/th/id/OIP-C.YKdzfu7F2nvlDjDmHOvcnwHaNK?w=187&h=333&c=7&r=0&o=5&dpr=2&pid=1.7') no-repeat;
    background-size: 100%;
    .dropdown-menu{
      width: 25rem;
      // height: 5rem;
      margin:-1rem 0 0 -6rem;
      --van-dropdown-menu-height:5rem;
      --van-dropdown-menu-box-shadow:none;
    }
  }
</style>
