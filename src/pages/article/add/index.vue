<template>
  <div class="article-add">
    <NavBar title="发布文章"/>

    <van-form class="article-form" @submit="onSubmit">
      <van-field 
        name='title'
        v-model="title"
        label='标题'
        placeholder="请输入文章标题"
        :rules="[ { required:true,message:'请输入文章标题' }]"
      ></van-field>
      <van-field 
        name='author' 
        v-model="author_name" 
        :disabled="true" 
        label="作者"
        :rules="[ { required:true,message:'请输入文章标题' }]"
      ></van-field>

      <van-field name='classification' label='分类' v-model="classification">
        <template #input>
          <van-dropdown-menu active-color="#FFC300" class="dropdown-menu">
            <van-dropdown-item v-model="classification" :options="classifications" />
          </van-dropdown-menu>
        </template>
      </van-field>

      <div>
        内容：<textarea cols="25" rows="5" v-model="content"></textarea>
      </div>
      
      配图(第一张为封面)：<van-uploader :after-read="afterRead" v-model="images" multiple :max-count="5" :beforeDelete="beforeDelete"/>

      <van-button round block type="primary" native-type="submit">发布</van-button>
    </van-form>

    
    <!-- <Footer /> -->
  </div>
</template>

<script>
import { onMounted, reactive, toRefs } from 'vue';
import { defineComponent } from '@vue/composition-api'
import {useRoute,useRouter} from 'vue-router'
import {reqGetClassification,reqAddArticle,reqUploadImg,reqDeleteImg} from '@/api'
import {SUCCESS} from '@/config'

import NavBar from "@/components/NavBar";
// import  Footer  from "@/components/Footer";
import {DropdownMenu, DropdownItem, Toast} from 'vant'

export default defineComponent({
  name:'articleAdd',

  components:{
    NavBar,
    // Footer,
    'van-dropdown-menu':DropdownMenu,
    'van-dropdown-item':DropdownItem
  },

  setup() {
    const route = useRoute()
    const router = useRouter()
    console.log(route,route.params)

    const state = reactive({
      title:'',
      author:route.params._id,
      author_name:route.params.username,
      classification:'',
      classifications:[],
      images:[],
      content:'',
    })

    onMounted(async ()=>{
      const result = await reqGetClassification()
      state.classification = result.data[0].name
      result.data.map(classification=>{
        let c = {
          'text':classification.name,
          'value':classification.name,
        }
        state.classifications.push(c)
      })
      // state.classifications = classifications
    })

    const afterRead = async(file)=>{
      const result = await reqUploadImg(file)
      console.log(result)
      if(result.data.status===SUCCESS){
        Toast.success('上传图片成功')
        const {name,url} = result.data.data
        file = state.images[state.images.length-1]
        file.name = name
        file.url = url
      }else{
        Toast.fail('上传图片失败')
      }
    }

    const beforeDelete = async(file)=>{
      // console.log(file,'delete')
      const result = await reqDeleteImg(file)
      if(result.status===SUCCESS){
        Toast.success('删除图片成功')
        return true
      }else {
        Toast.fail('删除图片失败')
      }
    }

    const onSubmit = async ()=>{
      let article = {
        title:state.title,
        author:state.author,
        author_name:state.author_name,
        classification:state.classification,
        content:state.content,
        images:state.images
      }
      const result = await reqAddArticle({_id:state.author,article})
      console.log('result',result)
      // console.log(article,'article',values)
      router.replace({
        path:'/article/detail',
        query:{_id:result.data._id}
      })
    }

    return {
      ...toRefs(state),
      afterRead,
      beforeDelete,
      onSubmit,
    }
  },
})
</script>

<style lang="less" scoped>
  .article-add{
    width: 100%;
    height: 100vh;
    overflow: hidden;
    background: url('https://tse1-mm.cn.bing.net/th/id/OIP-C.YKdzfu7F2nvlDjDmHOvcnwHaNK?w=187&h=333&c=7&r=0&o=5&dpr=2&pid=1.7') no-repeat;
    background-size: 100%;
    .article-form{
      width: 100%;
      height: 100rem;
      overflow: hidden;
      .dropdown-menu{
        width: 25rem;
        // height: 5rem;
        margin:-1rem 0 0 -6rem;
        --van-dropdown-menu-height:5rem;
        --van-dropdown-menu-box-shadow:none;
      }
    }
  }
</style>