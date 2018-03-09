<template>
  <div id="app">
    <router-link to="/"></router-link>
    <router-view/>
  </div>
</template>

<script>
import reviewCard from './components/reviewCard.vue'
export default {
  name: 'App'
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
</style>
