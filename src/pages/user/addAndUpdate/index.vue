<template>
  <div class="addAndUpdate-user">
    <NavBar :title="isUpdate?'更新信息':'添加用户'" />

    <ImgWall :imgUrl='user.portrait' class="img-wall"/>   
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field
          v-model="user.username"
          name="用户名"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-if="!isUpdate"
          v-model="user.password"
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <van-field
          v-model="user.email"
          name="email"
          label="邮箱"
          placeholder="邮箱"
        />
        <van-field name="gender" label="性别">
          <template #input>
            <van-radio-group v-model="user.gender" direction="horizontal">
              <van-radio name="male">男</van-radio>
              <van-radio name="female">女</van-radio>
            </van-radio-group>
          </template>
        </van-field>
        <van-field name='role' label='角色' v-model="user.role">
          <template #input>
            <van-dropdown-menu active-color="#FFC300" class="dropdown-menu">
              <van-dropdown-item v-model="user.role" :options="roleOptions" />
            </van-dropdown-menu>
          </template>
        </van-field>
        
      </van-cell-group>
      <div style="margin: 16px;">
        <van-button round block type="primary" native-type="submit" :text="isUpdate?'更新信息':'添加用户'">
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { defineComponent, onMounted, reactive,toRefs } from 'vue'
import {useRoute,useRouter} from 'vue-router'
import {reqUpdateUser,reqAddUser} from '@/api'
import { DropdownMenu, DropdownItem,Toast } from "vant";
import {SUCCESS} from '@/config'

import NavBar from '@/components/NavBar'
import ImgWall from '@/components/ImgWall'

export default defineComponent({
  name:'addAndUpdateUser',

  components:{
    'van-dropdown-menu':DropdownMenu,
    'van-dropdown-item':DropdownItem,
    NavBar,
    ImgWall
  },

  setup() {
    const route = useRoute()
    const router = useRouter()
    console.log(router,reqAddUser,SUCCESS,Toast)

    const roleOptions = [
      { text: '用户', value: '用户',icon:'contact' },
      { text: '管理员', value: '管理员',icon:'close' },
      { text: '文章审核员', value: '文章审核员' },
      { text: '用户管理员', value: '用户管理员' },
      { text: '测试', value: '测试' },
    ];
    console.log(route.params)
    const state = reactive({
      isUpdate:false,
      user:{
        username:'',
        password:'',
        gender:'male',
        email:'',
        role:'用户',
        portrait:'https://tse2-mm.cn.bing.net/th/id/OIP-C.AjC_T4iZJYRr-_fAGNI_igAAAA?pid=ImgDet&rs=1',
      }
    })
    
    onMounted(async()=>{
      if(route.params._id){
        state.isUpdate=true
        const result = await reqUpdateUser({_id:route.params._id})
        state.user = result.data
        console.log(state.user,result)
      }
    })

    const onSubmit = async(values)=>{
      console.log(values)
      if(state.isUpdate){
        console.log(state.user,'update')
        const result = await reqUpdateUser({...state.user,_id:route.params._id})
        if(result.status===SUCCESS){
          Toast.success('更新信息成功')
          // console.log(result)
          router.push('/login')
        }else{
          Toast.fail('更新信息失败')
        }
      }else{
        // console.log(state.user)
        const result = await reqAddUser(state.user)
        console.log(result)
        if(result.status===SUCCESS){
          Toast.success('添加成功')
          router.push('/login')
        }else{
          Toast.fail('添加失败')
        }
      }
    }

    return {
      roleOptions,
      ...toRefs(state),
      onSubmit
    }
  },
})
</script>

<style lang="less" scoped>
  .addAndUpdate-user{
    width: 100%;
    height: 30rem;
    // // background-color: skyblue;
    // .img-wall{
    //   margin-top:7rem
    // }
    .dropdown-menu{
      width: 25rem;
      // height: 5rem;
      margin:-1rem 0 0 -6rem;
      --van-dropdown-menu-height:5rem;
      --van-dropdown-menu-box-shadow:none;
    }
  }
</style>