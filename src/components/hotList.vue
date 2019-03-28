<template lang="html">
  <div class="hotList">
   <div 
    class="list"
    v-for="(all,index) in info"
   >
    <div class="img">
      <img :src="all.img" alt="">
    </div>

    <div class="info">
      <span class="name">{{all.name}}</span>
      <span class="price">￥{{all.price}}</span>
      <span class="count">已售:{{all.count}}</span>
    </div>
   </div>
  </div>
</template>

<script>
export default {
  props:['info']
}
</script>

<style lang="scss" scoped>
.hotList {
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
}

.img {
  width: 100px;
  img {
    width: 100%;
  }
}

// .info {
//   // .name {

//   // }

//   // .price {

//   // }

//   // .count {

//   // }
// }
</style>
