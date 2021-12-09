<template>
  <div class="nav-bar">
    <van-icon :name='leftSlot' style="float:left" @click="onClickLeft()"></van-icon>
    <div class="nav-title">{{title}}</div>
    <van-icon :name='rightSlot' style="float:right;margin-right:1rem" @click="onClickRight()"></van-icon>
    <van-icon v-if="isSearch" name='search' style="float:right" @click="onClickSearch()" />
    <!-- 左侧菜单点击弹出框 -->
    <!-- <div v-show="showSlide" class="slide"></div> -->
    <Slide v-show="showSlide" @shutSlide='onClickLeft' :list='ARTICLEAUTHORITY'/>
    <!-- 右侧头像点击弹出框 -->
    <div v-if="showPopover" class="popover" style="z-index:3">
      <div v-for="item in PERSONALAUTHORITY" :key="item.id" class="item" @click.stop="itemClick(item)">{{item.text}}</div>
    </div>
    <Mask v-if="showSlide" @shutMask='onClickLeft'/>
  </div>
</template>

<script>
import {reactive, toRefs,defineComponent} from 'vue'
import {useRouter} from 'vue-router'
import {PERSONALAUTHORITY,MANAGERAUTHORITY,ARTICLEAUTHORITY} from '@/config'
import storageUtils from '@/utils/storageUtils'

import {Icon} from 'vant'
import  Slide from '@/components/Slide'
import  Mask from '@/components/Mask'

export default defineComponent({
  name:'navbar',

  props:{
    title:{
      type: String,
      default: '标题',
    },
    leftSlot:{
      type:String,
      default: 'wap-nav'
    },
    rightSlot:{
      type:String,
      default: 'contact'
    },
    isSearch:{
      type:Boolean,
      default:false
    }
  },

  components:{
    'van-icon': Icon,
    Slide,
    Mask
  },

  setup() {
    console.log(MANAGERAUTHORITY,'MANAGERAUTHORITY')
    const router = useRouter()

    const state = reactive({
      showPopover : false,          // 控制右侧弹出变量
      showSlide : false,            // 控制左侧弹出变量
    })
    const onClickLeft = () => {
      // console.log('leftclick')
      state.showSlide = !state.showSlide
    };
    const onClickRight = () => {
      // console.log('rightClick')
      state.showPopover = !state.showPopover
    };
    const onClickSearch = () => {console.log('searchclick')};
    const itemClick = (item) => {
      state.showPopover = !state.showPopover
      const path = '/'+item.name
      if(item.name==='logout'){
        storageUtils.removeToken()
        router.replace('/login')
      }else{
        router.push(path)
      }
    };
    return {
      ...toRefs(state),
      PERSONALAUTHORITY,
      ARTICLEAUTHORITY,
      onClickLeft,
      onClickRight,
      onClickSearch,
      itemClick,
    };
  },
})
</script>

<style scoped lang='less'>
  @keyframes tToB {
    from {width: 0;}
  }
  .nav-bar{
    // display: flex;
    // justify-content: space-between;
    // align-items: center;
    position: relative;
    width: 100%;
    height: 5.5rem;
    margin: 0 auto;
    background-color: @mt;
    z-index: 2;
    // border-bottom: 0.1rem solid #000;
    .van-icon{
      font-size: 5rem;
      margin: 1.25rem 0 0 2rem;
    }
    .nav-title{
      display: inline-block;
      position: absolute;
      left:50%;
      transform: translateX(-50%);
      margin-top: 1rem;
      font-size: 4rem;
    }
    .popover{
      position: absolute;
      right:0;
      top:5.5rem;
      width: 14rem;
      animation: tToB 0.2s linear;
      // height: 20rem;
      background-color: @mt;
      border-radius: 1rem;
      overflow: hidden;
      .item{
        height: 5.5rem;
        text-align: center;
        font-size: 3rem;
        line-height: 5.5rem;
        border-bottom: 1px solid rgba(0,0,0,.1);
      }
    }
  }
  
</style>
