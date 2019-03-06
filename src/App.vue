<template>
  <div id="app">
    <div class="main">
      <transition name="router-fade" mode="out-in" style="height:100%">
          <router-view/>
      </transition>
    </div>
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {
  },
  mounted() {
  },
  created() {
  }
}

</script>

<style>
.router-fade-enter-active, router-fade-leave-active {
  transition:all .2s;
}
.router-fade-enter, .router-fade-leave-active {
  opacity:0;
}
.router-fade-leave {
  opacity:0;
}

#app {
  /* padding-bottom: 5rem; */
  height: 100%;
  max-width: 768px;
  margin: 0 auto;
}
.load {
  height: .35rem;
}

.main {
  height: 100%;
}
.container {
  position: relative;
}

</style>
