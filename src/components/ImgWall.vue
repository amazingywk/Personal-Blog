<template>
  <div 
    @click="showBottom(false)"
    class="img-wall" :style="'background:url('+bgUrl?bgUrl:'https://tse3-mm.cn.bing.net/th/id/OIP-C.4ERSnCLmq2h64BjhZUVhWQHaNK?w=187&h=333&c=7&r=0&o=5&dpr=2&pid=1.7'+') no-repeat'"
  >
    <van-image
      round
      fit="cover"
      class="img-portrait"
      :src="imgUrl"
      @click.stop="showBottom(true)"
    />
      
    <van-uploader style="width:0;height:0;display:none" ref="uploader" />

    <!-- 底部动作面板弹出,待改进 -->
    <Mask v-if="uploadBottom" @shutMask="shutBottom">
      <div v-show='uploadBottom' class="uploadBottom" style="position:absolute;bottom:0;width:100%;height:20rem" @click.stop="">
          <div @click="showUpload(isPortrait)">{{isPortrait?'上传头像':'上传背景图'}}</div>
          <div>预览图片</div>
          <div></div>
          <div @click="shutBottom">取消</div>
      </div>
    </Mask>
  </div>
</template>

<script>
import { defineComponent,reactive,ref, toRefs } from 'vue'

import Mask from '@/components/Mask'
import { Toast } from "vant";

export default defineComponent({
  name:'imgWall',

  components:{
    Mask
  },

  props:{
    imgUrl:{type:String},
    bgUrl:{type:String}
  },

  setup() {
    const uploader = ref(null)
    const state = reactive({
      isPortrait:false,
      uploadBottom:false,
      user:{
        portrait:'https://tse2-mm.cn.bing.net/th/id/OIP-C.AjC_T4iZJYRr-_fAGNI_igAAAA?pid=ImgDet&rs=1'
      }
    })

    const showUpload = (isPortrait)=>{
      console.log(uploader.value,console.log(isPortrait))
      uploader.value.chooseFile()
      state.isPortrait = isPortrait 
      Toast.fail('抱了个歉，暂未实现')
    }

    const showBottom = (isPortrait)=>{
      state.isPortrait = isPortrait
      state.uploadBottom=true
    }

    const shutBottom = ()=>{
      state.uploadBottom=false
    }

    return {
      uploader,
      ...toRefs(state),
      showUpload,
      showBottom,
      shutBottom
    }
  },
})
</script>

<style lang="less" scoped>
  @keyframes bToT {
    from{top:99%}
  }
  .img-wall{
    position: relative;
    width: 100%;
    height: 20rem;
    background-color: skyblue;
    margin-bottom: 10rem;
    .img-portrait{
      position: absolute;
      width: 14rem;
      height: 14rem;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%) translateY(50%);
    }
    // &:deep(.uploadBottom div){
    //   font-size: 30rem;
    //   height: 20rem;
    // }
  }
</style>
