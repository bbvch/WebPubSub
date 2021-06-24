<template>
  <div class="container mx-auto">
    <div class="flex flex-row gap-7 justify-center">
      <button
        :disabled="connected"
        @click="connect"
        class="
          disabled:opacity-50
          bg-green-500
          hover:bg-green-700
          text-white
          font-bold
          py-2
          px-4
          rounded
        "
      >
        Connect to the Web Socket
      </button>
      <button
        :disabled="!connected"
        @click="send"
        class="
          disabled:opacity-50
          bg-blue-500
          hover:bg-blue-700
          text-white
          font-bold
          py-2
          px-4
          rounded
        "
      >
        Send a message
      </button>
    </div>
    <div class="relative pt-1">
      <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-pink-200">
        <div
          style="width: 50%"
          class="
            shadow-none
            flex flex-col
            text-center
            whitespace-nowrap
            text-white
            justify-center
            bg-pink-500
          "
        ></div>
      </div>
    </div>
    <p>
      <a href="https://vitejs.dev/guide/features.html" target="_blank">
        Vite Docs
      </a>
      |
      <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
    </p>
    <ul ref="messages"></ul>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
import WebSocketHelper from "../WebSocketHelper";
export default defineComponent({
  name: "WebSocketDemo",
  setup: () => {
    const messages = ref(null);
    const connected = ref(false);
    return { messages, connected };
  },
  methods: {
    connect() {
      // set up the helper
      this.webSocketHelper = new WebSocketHelper(
        "wss://demopubsubforbbv.webpubsub.azure.com",
        "pubnub",
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MjQ1MTc1OTIsImV4cCI6MTYyNDUyMTE5MiwiYXVkIjoiaHR0cHM6Ly9kZW1vcHVic3ViZm9yYmJ2LndlYnB1YnN1Yi5henVyZS5jb20vY2xpZW50L2h1YnMvcHVibnViIn0.7VSqoMbJsBWGrfdTwloW4hoeeX_0ztno--OyfM_xhP8",
        (event) => {
          let item = document.createElement("li");
          item.innerText = event;
          this.messages.appendChild(item);
        },
        (message) => {
          let item = document.createElement("li");
          item.innerText = message;
          this.messages.appendChild(item);
          this.connected = true;
        }
      );
      // connect through the helper
      this.webSocketHelper.connect();
    },
    send() {
      this.webSocketHelper.send("hello");
    },
  },
  data() {
    return {
      webSocketHelper: {} as WebSocketHelper,
    };
  },
  computed() {
    return {
      messages: this.$refs.messages as HtmlElement,
    };
  },
});
</script>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
button {
  width: 10%;
}
.buttons {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
