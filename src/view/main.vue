<template lang="html">
  <div class="main">
    <div class="header">
      <div class="nav flex">
        <router-link :to="{ name: '', params: {} }" class="biu"
          v-for="(all,index) in list">
          <div class="navimg">
            <img :src="all.ico" alt="">
            <span class="posa">{{all.name}}</span>
          </div>
        </router-link>
      </div>
      <div class="item"
        v-for="(all,index) in item">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {name: '热销榜', ico: require("../assets/rexiao.png")},
        {name: '点过的菜', ico: require("../assets/caidan.png")},
        {name: '搜你喜欢', ico: require("../assets/sousuo.png")},
      ],
      item: [
        {name: '大蒜腊肉', price: 26, img: require('../assets/1.jpg')}
        {name: '家乡扣肉', price: 26, img: require('../assets/2.jpg')}
        {name: '主打鸡', price: 26, img: require('../assets/3.jpg')}
        {name: '酸辣土豆丝', price: 26, img: require('../assets/4.jpg')}
        {name: '家乡扣肉', price: 26, img: require('../assets/5.jpg')}
        {name: '长沙臭豆腐', price: 26, img: require('../assets/6.jpg')}
        {name: '腊肉', price: 26, img: require('../assets/7.jpg')}
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  .nav {
    padding: 2rem 0;
    .navimg {
      position: relative;
      width: 5rem;
      margin: 0 auto;
      transform: translateY(-.5rem);
      span {
        left: -1rem;
        right: -1rem;
        top: 3rem
      }
      img {
        width: 100%;
      }
    }
    .biu {
      flex: 1;
      text-align: center;
      line-height: 6rem
      }
    .biu:nth-child(2) {
      border-left: 1px solid #333;
      border-right: 1px solid #333
    }
  }
}
</style>
