<template lang="html">
  <div class="start">
    <div class="head"><span>用餐人数</span></div>
    <p>请选择正确的用餐人数，小二马上为你送餐具</p>
    <div class="option flex flexJs ">
      <button type="button" name="button"
        v-for="(all,index) in btn"
      >
      <span
      @click="getpp(index)"
      :class="{active:amount == index}"
      >{{index+1}}人</span></button>
    </div>
    <div class="end">
      <div class="endbox"
        @click="push()">
        <div>开始</div>
        <div>点餐</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      amount:null,
      btn:[1,2,3,4,5,6,7,8,9,10,11,12]
    }
  },
  methods: {
    getpp(n) {
      this.amount = n
    },
    push() {
      this.$router.push({name:'main'})
    }
  }
}
</script>

<style lang="scss" scoped>
.start {
  padding: 5rem 0;
  position: relative;
  height: 100%;
  p {
    text-align: center;
    margin-top: 1rem;
    color: #b5021d
  }
}

.head {
  padding: 1.5rem;
  text-align: center;
  span {
    padding: 1rem 2.5rem;
    border-radius: .5rem;
    background: #333;
    color: #fff;
  }
}

.option {
  flex-wrap: wrap;
  .active {
    border: 1px solid #fff;
    background: #333;
    color: #fff;
  }
  button {
    background: #fff;
    border: none;
    padding: 1rem;
    outline: none;
    flex: 0 0 calc(25.33% - 1rem);
    span {
      display: block;
      width: 8rem;
      margin: 0 auto;
      padding: 1rem 0;
      border: 1px solid #333;
      border-radius: .5rem
    }
  }
}

.end {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 5rem;
  text-align: center;
  .endbox {
    display: inline-block;
    background: rgb(255, 139, 183);
    width: 8rem;
    height: 8rem;
    border-radius: 5rem;
    color: #fff;
    font-weight: 600;
    div:nth-child(1) {
      margin-top: 2rem;
    }
  }
}
</style>
