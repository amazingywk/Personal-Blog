<template>
  <div class="userManage">
    <NavBar title="用户管理" />

    <Table 
      :titles='titles' 
      :list="userList" 
      style="margin-top:5rem" 
      @onChange='updateUser'
      @onDelete='deleteUser'
    />

    <van-button type="primary" @click="AddUser">添加用户</van-button>
    <!-- <van-button type="primary" @click="UpdateUser">更新用户</van-button> -->
  </div>
</template>

<script>
import { defineComponent,reactive,toRefs,onMounted } from 'vue'
import {useRouter} from 'vue-router'
import { SUCCESS } from "@/config";
import {reqGetUser,reqDeleteUser} from '@/api'

import NavBar from '@/components/NavBar'
import Table from '@/components/Table'
import { Toast,Dialog } from 'vant';

export default defineComponent({
  name:'UserManage',

  components:{
    NavBar,
    Table
  },

  setup() {
    const router = useRouter()

    const state = reactive({
      UserId:'6154719279064b1843011a60',
      userList:[]
    })
    const titles = [{
      text:'用户名',
      name:'username'
    },{
      text:'邮箱',
      name:'email'
    },{
      text:'角色',
      name:'role'
    }]

    onMounted(async()=>{
      const result = await reqGetUser()
      if(result.status===SUCCESS){
        state.userList = result.data
      }
    })

    const AddUser=()=>{
      router.push('/user/add')
    }

    const updateUser=(item)=>{
      router.push({
        name:'UpdateUser',
        params:{'_id':item._id}
      })
    }

    const deleteUser=(item)=>{
      Dialog.confirm({
        title:'删除用户',
        message:"确认删除‘"+item.username+"’用户吗？"
      })
        .then(async()=>{
          const result = await reqDeleteUser({_id:item._id})
          if(result.status===SUCCESS){
            Toast.success('删除用户成功')
            const res = await reqGetUser()
            state.userList = res.data
          }else{
            Toast.fail('删除用户失败，请重新尝试')
          }
        })
        .catch(()=>{
          // Toast.fail('您取消了删除用户')
        })
      
    }

    return {
      titles,
      ...toRefs(state),
      AddUser,
      updateUser,
      deleteUser
    }
  },
})
</script>

<style lang="less" scoped>
  .userManage{
    width: 100%;
    height: 100vh;
    overflow: hidden;
    background: url('https://tse1-mm.cn.bing.net/th/id/OIP-C.YKdzfu7F2nvlDjDmHOvcnwHaNK?w=187&h=333&c=7&r=0&o=5&dpr=2&pid=1.7') no-repeat;
    background-size: 100%;
  }
</style>