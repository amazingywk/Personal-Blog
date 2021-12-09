<template>
  <teleport to="body">
    <div  class="mask" @click="shutMask()">
      <slot></slot>
    </div>
  </teleport>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'mask',

  props:{
    // showMask:{type:Boolean},
  },

  setup(_,{emit}) {
    const shutMask=()=>{
      emit('shutMask')
    }

    return {
      shutMask,
    }
  },
})
</script>

<style lang="less" scoped>
  @keyframes bToT {
    from{top:3%}
  }
  .mask{
    position: absolute;
    top: 0;
    width: 100%;
    height:100vh;
    overflow: hidden;
    background-color: rgba(0,0,0,.5);
    animation: bToT 0.2s;
  }
  &:deep(.uploadBottom div){
    font-size: 3rem;
    height: 6rem;
    line-height: 6rem;
    text-align: center;
    background-color: #fff;
    &:nth-child(3){
      height: 2rem;
      background-color: rgba(0,0,0,.1);
    }
  }
</style>
