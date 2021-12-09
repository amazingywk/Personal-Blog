<template>
  <div class="sponsor">
    <NavBar title='赞助作者'/>

    <div class="content">您的好意，作者心领了，赞助就不用了，天凉了，记得给自己点一杯奶茶喝！</div>
    <div style="width:100%;text-align:center">
      <img src="https://www.zbzcml.net/uploads/e876e6b758b2668f00c0f86d9d6b3649.jpg" alt="" >
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

import NavBar from "@/components/NavBar";

export default defineComponent({
  name:'sponsor',

  components:{
    NavBar,
  },

  setup() {
    
  },
})
</script>

<style lang="less" scoped>
  .content{
    width: 100%;
    box-sizing: border-box;
    margin-top: 10rem;
    padding: 4rem;
    font-size: 4rem;
    text-align: center;
  }
</style>
