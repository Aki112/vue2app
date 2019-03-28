<template lang="html">
  <div class="mainPage" @click="stop(0)">
    <div class="header">
      <div class="nav flex">
        <router-link :to="{ name: all.path, params: {} }" class="biu"
          v-for="(all,index) in list" :key="index">
          <div class="navimg">
            <img :src="all.ico" alt="">
            <span class="posa">{{all.name}}</span>
          </div>
        </router-link>
      </div>
    </div>
    <div class="item flex flexJs">
      <div class="items" v-for="(all,index) in item">
        <img :src="all.img" alt="">
        <div>{{all.name}}</div>
        <div>￥{{all.price}}</div>
      </div>
    </div>
    <div
      @click.stop="stop(1)"
      class="aside"
      :class="{active:status == 1}"
      style="transition: all .5s">
      <router-link class="" :to="{ name: '', params: {} }" v-for="(all,index) in aside" :key="index">
        <p>{{all.name}}</p>
      </router-link>
      <div
        class="asideBtn" style="transition: all .5s"
        @click.stop="asideTg()"
        :class="{active:status == 1}"
      >
        <img :src="asideBtn" alt="">
      </div>
    </div>
    <div class="footer">
      <div class="flex flexJs posr">
        <colorBtn :info="childBtn.navBtn" class="posa"></colorBtn>
        <colorBtn :info="childBtn.buyBtn" class="posa"></colorBtn>
      </div>
    </div>
  </div>
</template>

<script>
import colorBtn from '../components/colorBtn.vue'
export default {
  data() {
    return {
      status: 0,
      childBtn:{
        navBtn:{
          msg: '导航',
          ico: require('../assets/navigation.png'),
          path: 'start',
          background: '#333',
        },
        buyBtn:{
          msg: '购物车',
          ico: require('../assets/cart.png'),
          path: 'itemCart',
          background: '#e33434',
        },
      },
      asideBtn: require("../assets/nav.png"),
      list: [
        {
          path:'hot',
          name: '热销榜',
          ico: require("../assets/rexiao.png")
        },
        {
          path:'hot',
          name: '点过的菜',
          ico: require("../assets/caidan.png")
        },
        {
          path:'hot',
          name: '搜你喜欢',
          ico: require("../assets/sousuo.png")
        },
      ],
      item: [
        {name: '大蒜腊肉', price: 26, img: require('../assets/7.jpg')},
        {name: '大蒜腊肉', price: 16, img: require('../assets/3.jpg')},
        {name: '大蒜腊肉', price: 22, img: require('../assets/2.jpg')},
        {name: '大蒜腊肉', price: 26, img: require('../assets/5.jpg')},
        {name: '大蒜腊肉', price: 24, img: require('../assets/4.jpg')},
        {name: '大蒜腊肉', price: 26, img: require('../assets/2.jpg')},
        {name: '大蒜腊肉', price: 20, img: require('../assets/3.jpg')},
        {name: '大蒜腊肉', price: 26, img: require('../assets/6.jpg')},
        {name: '家乡扣肉', price: 21, img: require('../assets/2.jpg')},
        {name: '主打鸡', price: 26, img: require('../assets/3.jpg')},
        {name: '主打鸡', price: 22, img: require('../assets/3.jpg')},
        {name: '酸辣土豆丝', price: 52, img: require('../assets/4.jpg')},
        {name: '酸辣土豆丝', price: 29, img: require('../assets/4.jpg')},
        {name: '家乡扣肉', price: 20, img: require('../assets/5.jpg')},
        {name: '长沙臭豆腐', price: 21, img: require('../assets/6.jpg')},
        {name: '腊肉', price: 24, img: require('../assets/7.jpg')},
      ],
      aside: [
        {name:'精品美食'},
        {name:'精品小面'},
        {name:'饮料酒水'},
        {name:'新品推荐'},
        {name:'舌尖美食'},
        {name:'老板推荐'},
      ]
    }
  },
  components: {
    colorBtn
  },
  methods: {
    asideTg() {
      this.status = this.status == 1 ? 0 : 1
    },
    stop(x) {
      this.status = x
    }
  }
}
</script>

<style lang="scss" scoped>
.mainPage {
  height: 100vh;
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  flex-direction: column;
  position: relative;
}

.footer {
  position: absolute;
  padding: 1rem 2rem;
  // flex: 0 0 auto;
  bottom: 10%;
  width: 100%;
  .posr {
    .posa:nth-child(1) {
      left: 0;
    }

    .posa:nth-child(2) {
      right: 0;
    }
  }
}

.aside {
  position: fixed;
  top: 0;
  left: 0;
  transform: translateX(-8rem);
  height: 100%;
  padding: 2rem 1rem;
  background: #dedede;
  z-index: 2;
  .asideBtn {
    position: absolute;
    left: 8rem;
    width: 50%;
    transform: scale(.8) rotate(0deg);
    opacity: .3;
    img {
      width: 100%;
    }
  }
  .active {
    transform: scale(0) rotate(360deg);
    opacity: 1;
  }
}
.active {
  transform: rotateX(0);
}

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
.item {
  flex-wrap: wrap;
  align-content: flex-start;
  padding: 0 .4rem;
  flex: 1;
  overflow: auto;
  .items {
    flex: 0 0 33.33333333%;
    text-align: center;
    padding: 10px .4rem;
  }
}

@media screen and (max-width: 380px) {
  .items {
    img {
      width: 80%;
    }
  }
}

</style>
