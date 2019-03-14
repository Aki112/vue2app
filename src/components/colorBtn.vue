<!--
  background
  msg
  path
  flexFun
  ico
 -->
<template lang="html">
  <div class="colorBtn" :style="{background:data.background}">
    <router-link :to="{ name: data.path, params: {} }"
      :class="data.flexFun?data.flexFun:'flexCol'"
      class="flex"
    >
      <img :src="data.ico" alt="">
      <span>{{data.msg}}</span>
    </router-link>
  </div>
</template>

<script>
export default {
  props:['data']
}
</script>

<style lang="scss" scoped>
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
