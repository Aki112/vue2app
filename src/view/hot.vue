<template lang="html">
  <div class="hot">
    <div class="header">
      本店热销榜
    </div>
    <div class="item">
      <hotlist></hotlist>
    </div>
    <div class="footer">
      <colorBtn :info="btn.navBtn"></colorBtn>
      <colorBtn :info="btn.backBtn"></colorBtn>
      <colorBtn :info="btn.buyBtn"></colorBtn>
    </div>
  </div>
</template>

<script>
import colorBtn from '../components/colorBtn'
import hotlist from '../components/hotList'
export default {
  data() {
    return {
      btn: {
        navBtn: {
          msg: '导航',
          ico: require('../assets/navigation.png'),
          background: "rgb(62, 62, 62)",
          path: 'main'
        },
        backBtn: {
          msg: '继续点餐',
          ico: require('../assets/menu.png'),
          background: "rgb(62, 62, 62)",
          path: 'main'
        },
        buyBtn: {
          msg: '购物车',
          ico: require('../assets/cart.png'),
          background: "rgb(255, 73, 73)",
          path: 'main'
        }
      },

      list: [
        {
          img: require('../assets/cart.png')
        }
      ]
    }
  },
  components: {
    colorBtn,
    hotlist
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
