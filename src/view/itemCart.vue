<template lang="html">
  <div class="itemCart">
    <colorBtn :data="btn"></colorBtn>
    <div class="itemList">
      <div class="item"
        v-for="(all,index) in itemList"
      >
        <div>商品详情</div>
        <div class="itemImg"><img :src="all.img" alt=""></div>
        <b>{{all.name}}</b>
        <span>{{all.price}}/一份</span>
      </div>
    </div>
    <div class="footer">
      <div>
        <span>数量:</span>
        <b @click="减法(1)">-</b>
        <span>{{count}}</span>
        <b @click="add(1)">+</b>
      </div>
      <div class="addBuy">
        加入购物车
      </div>
    </div>
  </div>
</template>

<script>
import colorBtn from '../components/colorBtn.vue'
export default {
  data() {
    return {
      btn: {
        msg: '返回',
        ico: require('../assets/doorder.png'),
        flexFun: 'flexRow',
        path: 'main'
      },
      count: 0,
      itemList: [
        {
          img:require('../assets/product.jpg'),
          name: '小炒肉',
          price: 22.00,
        },
        {
          img:require('../assets/product.jpg'),
          name: '小炒肉',
          price: 22.00,
        },
        {
          img:require('../assets/product.jpg'),
          name: '小炒肉',
          price: 22.00,
        },
        {
          img:require('../assets/product.jpg'),
          name: '小炒肉',
          price: 22.00,
        },
      ]
    }
  },

  methods: {
    add(n) {
      this.count == 30 ? 30:this.count += n
    },
    减法(n) {
      this.count == 0 ? null:this.count -= n
    },
    back() {
      this.$router.push(-1)
    }
  },

  components: {
    colorBtn
  }
}
</script>

<style lang="scss" scoped>
.colorBtn {
  position: fixed;
}

.itemCart {
  background: #ececec;
  height: 100vh;
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
}

.itemList {
  flex: 1;
  overflow: auto;
  .item {
    background: #fff;
    margin-bottom: 1rem;
    display: -webkit-flex;
    display: -ms-flex;
    display: flex;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    b {
      font-size: 2rem;
    }

    span {
      color: rgb(255, 80, 80)
    }

    .itemImg {
      img {
        width: 100%;
      }
    }
  }
}

.footer {
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  justify-content: space-between;
  background: #fff;
  align-items: center;
  padding: .5rem;
  .addBuy {
    padding: .8rem;
    color: #fff;
    background: #ff4646;
    border-radius: 1rem;
  }
  b {
    font-size: 2rem;
    color: #ff2121
  }

  span {
    padding: 0 .8rem;
  }
}
</style>
