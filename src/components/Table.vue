<template>
  <div class="table">
    <div class="table-title">
      <div class="table-title-item" v-for="title in titles" :key="title">{{title.text}}</div>
      <div class="table-title-item">操作</div>
    </div>
    <div class="table-content">
      <div class="table-item" v-for="item in list" :key="item._id">
        <div v-for="title in titles" :key="title" class="item-content">
          {{item[title.name]}}
        </div>
        <div class="item-content">
          <slot>
            <van-button type="warning" @click="changeItem(item)">修改</van-button>
            <van-button type="danger" @click="deleteItem(item)">删除</van-button>
          </slot>
        </div>
        <!-- {{
          titles.forEach(title=>{
            console.log(item,title)
            if(item.hasOwnProperty(title.name)){return item[title.name]}
          })
        }} -->
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
// import {Toast} from 'vant'

export default defineComponent({
  name:'table',

  props:{
    titles:{type:Array},
    list:{type:Array}
  },

  setup(_,{emit}) {

    const changeItem=(item)=>{
      // console.log('tChange',item)
      emit('onChange',item)
    }

    const deleteItem=(item)=>{
      // Toast.fail('别想了，你没有权限')
      // console.log('tDelete',item)
      emit('onDelete',item)
    }

    return {
      changeItem,
      deleteItem
    }
  },
})
</script>

<style lang="less" scoped>
  .table-title{
    width: 100%;
    height: 6rem;
    line-height: 6rem;
    background-color: #FFC300;
    display: flex;
    .table-title-item{
      flex: 1;
      height: 100%;
      border-right: 1px solid rgba(0,0,0,.1);
      text-align: center;
    }
  }
  .table-content{
    .table-item{
      width:100%;
      height: 6rem;
      display: flex;
      font-size: 1rem;
      .item-content{
        display: flex;
        flex:1;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        border-right: 1px solid rgba(0,0,0,.1);
        border-bottom: 1px solid rgba(0,0,0,.1);
      }
    }
  }
  &:deep(.item-content .van-button){
    width: 7rem;
    height: 4rem;
    padding: 0;
    margin: 0 1rem;
    font-size: 1rem;
  }
</style>
