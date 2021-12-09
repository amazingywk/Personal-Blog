<template>
  <div class="slide" @click.stop="">
    <div v-for='item in list' :key='item' class="slide-item" @click="toPage(item)">
      {{item.text}}
    </div>
  </div>
</template>

<script>
import { defineComponent, } from 'vue'
import {useRouter} from 'vue-router'

import {Toast} from 'vant'

export default defineComponent({
  name:'slide',

  props:{
    list:{type:Array}
  },

  setup() {
    const router = useRouter();

    const toPage=(item)=>{
      const path = '/'+item.name
      // console.log('toPage',router,path)
      if(path === router.currentRoute.value.path){
        Toast.fail('已经在'+item.text+'页面')
      }else{
        router.push(path)
      }
    }

    return {
      toPage,
    }
  },
})
</script>

<style lang="less" scoped>
  @keyframes lToR {
    from {width:0;height:100%}
  }
  .slide{
    position: fixed;
    width: 40%;
    top: 5.5rem;
    height:100vh;
    background-color: #FFC300;
    animation: lToR 0.5s;
    z-index: 2;
    .slide-item{
      width: 100%;
      text-align: center;
      font-size: 3rem;
      height: 5.5rem;
      line-height: 5.5rem;
      &:first-child{
        border-top: 1px solid rgba(0,0,0,.1);
      }
      border-bottom: 1px solid rgba(0,0,0,.1);
    }
  }
</style>