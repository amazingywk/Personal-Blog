<template>
  <div class='footer'>
    鄂ICP备2021015304号-1
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name:'Footer',
  setup() {
    
  },
})
</script>

<style lang="less" scoped>
  .footer{
    position: absolute;
    bottom: 3rem;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    font-size: 3rem;
    color: #222;
  }
</style>