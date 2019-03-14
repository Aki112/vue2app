<template lang="html">
  <div class="hot">
    <div class="header">
      本店热销榜
    </div>
    <div class="item">
      <div>11</div>
      <div>11</div>
      <div>11</div>
      <div>11</div>
      <div>11</div>
      <div>11</div>
      <div>11</div>
      <div>11</div>
      <div>11</div>
      <div>11</div>
      <div>11</div>
      <div>11</div>
      <div>11</div>
      <div>11</div>
      <div>11</div>
      <div>11</div>
      <div>11</div>
      <div>11</div>
      <div>11</div>
      <div>11</div>
      <div>11</div>
      <div>11</div>
      <div>11</div>
      <div>11</div>
      <div>11</div>
      <div>11</div>
      <div>11</div>
      <div>11</div>
      <div>11</div>
      <div>11</div>
      <div>11</div>
      <div>11</div>
    </div>
    <div class="footer">
      <colorBtn :data="btn.navBtn"></colorBtn>
      <colorBtn :data="btn.backBtn"></colorBtn>
      <colorBtn :data="btn.buyBtn"></colorBtn>
    </div>
  </div>
</template>

<script>
import colorBtn from '../components/colorBtn'
export default {
  data() {
    return {
      btn: {
        navBtn: {
          msg: '导航',
          ico: require('../assets/navigation.png'),
          background: "rgb(62, 62, 62)",
          path: ''
        },
        backBtn: {
          msg: '继续点餐',
          ico: require('../assets/menu.png'),
          background: "rgb(62, 62, 62)"
        },
        buyBtn: {
          msg: '购物车',
          ico: require('../assets/cart.png'),
          background: "rgb(255, 73, 73)"
        }
      },
    }
  },
  components: {
    colorBtn
  }
}
</script>

<style lang="scss" scoped>
.hot {
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  height: 100vh;
}
.header {
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  border-bottom: 1px solid rgb(207, 207, 207)
}

.item {
  flex: 1;
  overflow: auto;
}

.footer {
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  justify-content: space-between
}
</style>
