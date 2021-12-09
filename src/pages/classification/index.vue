<template>
  <div class="classification">
    <NavBar title="分类管理"/>

    <Table 
      :titles="titles" 
      style="margin:5rem auto 10rem;" 
      :list="classificationList"
      @onChange="onChange"
      @onDelete="onDelete"
    />
    <div style="width:100%;text-align:center">
      <van-button type="primary" @click="showModel('add')">添加分类</van-button>
    </div>

    <!-- 弹出框 -->
    <Model :show="!!show" @changeShow='changeShow'>
      <template v-slot:default>
        <div style="margin-left:3rem;display:inline-block;">
          名称：<input type="text" placeholder="请输入分类名称" v-model="name" style="height:4rem;width:24rem"/>
        </div>
      </template>
      <template v-slot:footer>
        <van-button type="primary" @click="onSubmit">{{show===1?'更新':'添加'}}</van-button>
      </template>
    </Model>

    <!-- <Footer /> -->
  </div>
</template>

<script>
import {reactive,onMounted,toRefs,defineComponent,ref} from 'vue'
import {SUCCESS} from '@/config'
import {reqGetClassification,reqUpdateClassification,reqAddClassification,reqDeleteClassification} from '@/api'

import  NavBar  from "@/components/NavBar";
// import  Footer  from "@/components/Footer";
import  Model   from "@/components/Model";
import  Table   from "@/components/Table";
import { Dialog, Toast } from 'vant';

export default defineComponent({
  name:'classification',

  components:{
    NavBar,
    // Footer,
    Model,
    Table
  },

  setup() {
    const titles = [{
      text:'分类_id',
      name:'_id'
    },{
      text:'分类名称',
      name:'name'
    }]

    const state = reactive({
      classificationList:[],
      name:'',
      _id:''
    })

    onMounted(async ()=>{
      console.log('onmounted')
      const result = await reqGetClassification()
      if(result.status===SUCCESS){
        state.classificationList = result.data
      }else{
        Toast.fail('获取分类列表失败')
      }
    })
    // 弹出框
    const show = ref(0);
    const showModel=(type,_id='',name)=>{
      if(type==='update'){
        show.value = 1
        state.name = name
        state._id = _id
      }else {
        show.value = 2
        state.name = ''
        state._id = ''
        console.log('add')
      }
    }
    const onSubmit=async ()=>{
      console.log('onSubmit',state.name,state._id)
      if(show.value===1){
        const result = await reqUpdateClassification({_id:state._id,name:state.name})
        console.log(result)
        if(result.status===SUCCESS){
          Toast.success('更新分类名称成功')
        }else{
          Toast.fail('更新分类名称失败')
        }
      }else if(show.value===2){
        const result = await reqAddClassification({name:state.name})
        console.log(result)
        if(result.status===SUCCESS){
          Toast.success('添加分类名称成功')
        }else{
          Toast.fail('添加分类名称失败')
        }
      }
      show.value = 0
      const result = await reqGetClassification()
      if(result.status===SUCCESS){
        state.classificationList = result.data
      }else{
        Toast.fail('获取分类列表失败')
      }
    }

    const onChange = (item)=>{
      showModel('update',item._id,item.name)
      console.log('cOnChange',item)
    }
    const onDelete = (item)=>{
      console.log('cOnDelete',item)
      Dialog.confirm({
        title:'删除分类',
        message: "确认删除‘"+item.name+"’分类吗？"
      })
        .then(async()=>{
          await reqDeleteClassification({_id:item._id})
          const result = await reqGetClassification()
          if(result.status===SUCCESS){
            state.classificationList = result.data
          }else{
            Toast.fail('获取分类列表失败')
          }
          Toast.success('删除成功')
        })
        .catch(()=>{
          // Toast.fail('您取消了删除该分类')
        })
    }

    const changeShow=()=>{
      show.value = 0
    }

    return {
      titles,
      ...toRefs(state),
      showModel,
      show,
      onSubmit,
      changeShow,
      onChange,
      onDelete
    }
  },
})
</script>

<style lang="less" scoped>
  .classification{
    width: 100%;
    height: 100vh;
    overflow: hidden;
    //https://tse1-mm.cn.bing.net/th/id/OIP-C.YKdzfu7F2nvlDjDmHOvcnwHaNK?w=187&h=333&c=7&r=0&o=5&dpr=2&pid=1.7
    background: url('https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fv1.qzone.cc%2Fskin%2F201901%2F21%2F10%2F40%2F5c4531386db0f087.jpeg%21600x600.jpg&refer=http%3A%2F%2Fv1.qzone.cc&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1635584696&t=44c3ef03b958e99499ffe6dc3c23dd35') no-repeat;
    background-size: 100%;
    // .van-button {
    //   width: 5rem;
    //   height: 3rem;
    // }
    .popup-button {
      position: absolute;
      bottom: 3rem;
      left: 50%;
      transform: translateX(-50%);
    }
    .name-input{
      width: 24rem;
      height: 6rem;
    }
  }
</style>
