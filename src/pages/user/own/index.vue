<template>
  <div class="own">
    <NavBar title='个人主页'/>

    <ImgWall />
  </div>
</template>

<script>
import { defineComponent,onMounted,ref } from 'vue'

import NavBar from "@/components/NavBar";
import ImgWall from "@/components/ImgWall";

export default defineComponent({
  name:'own',

  components:{
    NavBar,
    ImgWall
  },

  setup() {
    const uploader = ref(null)

    const upload = ()=>{
      uploader.value.chooseFile()
    }
    
    onMounted(()=>{
      console.log(uploader.value)
      
    })

    return {
      uploader,
      upload
    }
  },
})
</script>

<style lang="less" scoped>
  
</style>
