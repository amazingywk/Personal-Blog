<template>
  <div class="notice">
    <slot name='header'>
      <van-icon name='close' @click="shutNotice"></van-icon>
    </slot>    
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name:'notice',

  setup(_,{emit}) {
    const shutNotice = ()=>{
      emit('shutNotice')
    }
    return {
      shutNotice,
    }
  },
})
</script>

<style lang="less" scoped>
  .notice{
    width: 70%;
    height: 30rem;
    
  }
</style>