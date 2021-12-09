<template>
  <div class="about">
    <NavBar title='关于'/>

    <div class="content">
      <!-- 版本号：0.0.0（问就是还不配作为1.0发布）<br> -->
      作者：袁文凯<br>
      联系方式：15671987239<br>
      项目开始日期：2021/10/01<br>
      适用设备：手机（最好用浏览器）<br>
      待实现：<br />
      &nbsp;&nbsp;&nbsp;1.适配问题（电脑与手机界面有偏差）<br />
      &nbsp;&nbsp;&nbsp;2.评论区<br>
      &nbsp;&nbsp;&nbsp;3.私聊功能（邮件形式）<br>
      &nbsp;&nbsp;&nbsp;4.公聊功能（类似群组）<br>
      &nbsp;&nbsp;&nbsp;5.文章相关功能，如收藏，私密...<br>
      &nbsp;&nbsp;&nbsp;6.权限问题<br>
      &nbsp;&nbsp;&nbsp;7.搜索功能<br>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

import NavBar from "@/components/NavBar";

export default defineComponent({
  name:'about',

  components:{
    NavBar,
  },

  setup() {
    
  },
})
</script>

<style lang="less" scoped>
  .about{
    overflow: hidden;
    .content{
      width: 100%;
      box-sizing: border-box;
      margin: 10rem 0 0 4rem;
      padding: 4rem;
      font-size: 3rem;
      text-align: left;
    }
  }
</style>
