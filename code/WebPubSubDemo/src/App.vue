<template>
  <nav
    class="
      font-sans
      flex flex-col
      text-center
      content-center
      sm:flex-row
      sm:text-left
      sm:justify-between
      py-2
      px-6
      bg-white
      shadow
      sm:items-baseline
      w-full
    "
  >
    <div class="mb-2 sm:mb-0 inner">
      <img
        style="width: 20%"
        alt="bbv logo"
        src="https://quality.bbv.ch/bbv-logo.decc57bb.png"
      />
    </div>
    <div class="sm:mb-0 self-center">
      <div class="h-10" style="display: table-cell, vertical-align: middle;">
        <button @click="setSimple">Simple WebSockets</button>
        <button @click="setPubSub">Azure Web PubSub</button>
      </div>
    </div>
  </nav>
  <!-- <WebSocketDemo v-show="simple"/>
  <azure-pub-sub-demo v-show="pubsub"/> -->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AzurePubSubDemo from "./components/AzurePubSubDemo.vue";
import WebSocketDemo from "./components/WebSocketDemo.vue";

export default defineComponent({
  name: "App",
  components: {
    WebSocketDemo,
    AzurePubSubDemo,
  },
  methods: {
    setPubSub() {
      this.simple = false;
      this.pubsub = true;
    },
    setSimple() {
      this.simple = true;
      this.pubsub = false;
    },
  },
  data() {
    return {
      simple: false,
      pubsub: false,
    };
  },
});
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
nav {
  margin-bottom: 2em;
}
button {
  margin-right: 2em !important;
}
</style>
