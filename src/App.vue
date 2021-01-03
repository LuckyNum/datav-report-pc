<template>
  <div id="app">
    <home></home>
  </div>
</template>

<script>
import Home from './views/Home'

export default {
  name: 'app',
  components: {
    Home
  }
}
</script>

<style>
  html, body, #app {
    font-family: 'JetBrains Mono', Helvetica, Arial, sans-serif;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
  }
</style>
