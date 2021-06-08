<template>
  <img
    style="width: 20%"
    alt="bbv logo"
    src="https://quality.bbv.ch/bbv-logo.decc57bb.png"
  />
  <WebSocketDemo msgs="" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import WebSocketDemo from './components/WebSocketDemo.vue'

export default defineComponent({
  name: 'App',
  components: {
    WebSocketDemo
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
