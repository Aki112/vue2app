<template lang="html">
  <div class="colorBtn" :style="bg">
    <router-link :to="{ name: data.path, params: {} }">
      <img :src="data.ico" alt="" class="posa">
      {{data.msg}}
    </router-link>
  </div>
</template>

<script>
export default {
  props:['data'],
  data() {
    return {
      bg: {
        background:this.data.background,
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.colorBtn {
  position: relative;
  text-align: center;
  border-radius: 50%;
  width: 5rem;
  height: 5rem;
  line-height: 7rem;
  background: #333;
  opacity: .5;
  a {
    color: #fff;
  }
  img {
    width: 1.7333rem;
    left: 1.7rem;
    top: .7rem;
  }
}
</style>
