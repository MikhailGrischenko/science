<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import 'vue-awesome/icons'
import store from '@/store'
export default {
  name: 'App',
  store
}
</script>

<style>
#app {
  font-family: 'Roboto', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
