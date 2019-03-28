<!--
  background
  msg
  path
  flexFun
  ico

  示例
  <colorBtn :info="btn"></colorBtn>
  btn: {
    msg: '返回',
    ico: require('../assets/doorder.png'),
    flexFun: 'flexRow',
    path: 'main'
  },
 -->
<template lang="html">
  <div class="colorBtn"
    :class="{active:info.path?true:false}"
    :style="{background:info.background}"
  >
    <router-link :to="{ name: info.path, params: {} }"
      :class="info.flexFun?info.flexFun:'flexCol'"
      class="flex"
    >
      <img :src="info.ico" alt="">
      <span>{{info.msg}}</span>
    </router-link>
  </div>
</template>

<script>
export default {
  props:['info']
}
</script>

<style lang="scss" scoped>

.active:hover {
  opacity: .7
}
.colorBtn {
  border-radius: 50%;
  width: 6rem;
  height: 6rem;
  background: #333;
  opacity: .5;
  .flex {
    align-items: center;
    justify-content: center;
  }

  .flexRow {
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
  }

  .flexCol {
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
  }

  a {
    color: #fff;
    height: 100%;
  }

  img {
    width: 1.7333rem;
    height: 1.7333rem;
  }
}
</style>
