<template>
  <teleport to="body">
    <div  v-show="show" class="mask" @click="shutModel()">
      <div class="model" :style="'width:'+width+'rem;height:'+height+'rem;'" @click.stop="">
        <div class="header">
          <slot name="header">
            <van-icon name="close" @click="shutModel()"></van-icon>
          </slot>
        </div>
        <div class="default">
          <slot name="default">
            <van-field placeholder="请输入用户名"/>
          </slot>
        </div>
        <div class="footer">
          <slot name="footer">
            <van-button type="primary">提交</van-button>
          </slot>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name:'model',

  props:{
    width:{
      type:Number,
      default:40
    },
    height:{
      type:Number,
      default:30
    },
    show:{
      type:Boolean
    },
  },

  emits:{
    changeShow:()=>{
      return true
    }
  },

  setup(props,{emit}) {
    const shutModel=()=>{
      emit('changeShow')
    }
    return {
      shutModel,
    }
  },
})
</script>

<style lang="less">
  .mask{
    position: absolute;
    top: 0;
    width: 100%;
    height:100vh;
    background-color: rgba(0,0,0,.5);
  }
  .model{
    position: absolute;
    top: 30rem;
    left: 50%;
    transform: translateX(-50%);
    width: 40rem;
    height: 30rem;
    border-radius: 2rem;
    background-color: #fff;
    z-index: 3;
    .header{
      position: absolute;
      top: 1rem;
      right:1rem;
      font-size: 4rem;
    }
    .default{
      margin: 8rem auto 0;
    }
    .footer{
      position: absolute;
      bottom:2rem;
      left:50%;
      transform: translateX(-50%);
      .van-button{
        width: 16rem;
        height: 8rem;
        border-radius: 2rem;
      }
    }
  }
</style>
