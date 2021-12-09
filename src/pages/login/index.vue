<template>
  <div class="page-login">
    <!-- 导航栏 -->
    <NavBar title='登录' leftSlot='false' rightSlot='false'/>

    <div class="login-title">rewake.cn</div>

    <!-- 表单登录区域 -->
    <van-form @submit="onSubmit" class="form">
      <van-cell-group inset>
        <van-field
          v-model="formState.username"
          name="username"
          label="用户名"
          placeholder="请输入用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="formState.password"
          type="password"
          name="password"
          label="密码"
          placeholder="请输入密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
      </van-cell-group>
      <div style="margin:6rem 5rem;font-size:4rem">
        完整体验请登录 <br>
        或者自己注册然后登录<br>
        体验账号（admin   admin007）<br>
        <van-button round block type="primary" native-type="submit">
          登录
        </van-button>
      </div>
    </van-form>

    <van-button type="primary" @click="toHome()">提前预览（无token）</van-button>
    <br>
    <van-button type="primary" @click="register">注册</van-button>
    <!-- <Footer /> -->
  </div>
</template>

<script>
  import { defineComponent,onMounted,reactive} from 'vue';
  import {useRouter} from 'vue-router'
  import {Dialog, Toast} from 'vant'
  import {reqLogin} from '@/api'
  import {SUCCESS} from '@/config'
  import storageUtils from '@/utils/storageUtils'

  import NavBar from '@/components/NavBar'
  // import Footer from '@/components/Footer'

  export default defineComponent({
    name:'login',

    components:{
      NavBar,
      // Footer
    },

    setup() {
      const router = useRouter();

      const formState = reactive({
        username:'',
        password:''
      });
      const onSubmit = async (values) => {
        const result = await reqLogin(values)
        console.log(result,SUCCESS)
        storageUtils.saveToken(result.token)
        if(result.status==SUCCESS){
          console.log(result.data,this)
          Toast.success('登录成功')
          router.push('/home')
        }else {
          Toast.fail(result.data)
        }
        // console.log('submit', values, result);
      };

      const toHome = ()=>{router.push('/home')}
      const register =()=>{router.push('/user/add')}

      onMounted(()=>{
        Dialog.alert({
          title:'小建议',
          message:'由于目前仍处于开发初期阶段，适配仍然有一点点问题，主要体现在iPhoneX以上机型，建议使用手机打开，电脑模拟手机也会出现部分样式问题'
        })
        .then(()=>{
          Toast('非常感谢您的到来')
        })
      })

      return {
        formState,
        onSubmit,
        toHome,
        register
      };
    },
  })
</script>


<style scoped lang='less'>
  .page-login{
    width: 100%;
    height: 100vh;
    //https://pic.3gbizhi.com/2015/0212/20150212040645699.jpg
    background: url('https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fv1.qzone.cc%2Fskin%2F201901%2F21%2F10%2F40%2F5c4531386db0f087.jpeg%21600x600.jpg&refer=http%3A%2F%2Fv1.qzone.cc&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1635584696&t=44c3ef03b958e99499ffe6dc3c23dd35') no-repeat;
    background-size: 100%;
    overflow: hidden;
    .login-title{
      font-size: 10rem;
      width: 100%;
      text-align: center;
      margin-top: 4rem;
    }
    .form{
      margin-top: 8rem;
    }
  }
  
</style>