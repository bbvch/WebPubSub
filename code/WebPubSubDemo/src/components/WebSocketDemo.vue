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
    {{ messages }}
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
import WebSocketHelper from "../WebSocketHelper";
export default defineComponent({
  name: "WebSocketDemo",
  setup: () => {
    const messages = ref("");
    const connected = ref(false);
    return { messages, connected };
  },
  methods: {
    connect() {
      // set up the helper
      this.webSocketHelper = new WebSocketHelper(
        "wss://demopubsubforbbv.webpubsub.azure.com",
        "chat",
        //"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MjQyNjc2MzIsImV4cCI6MTYyNDI3MTIzMiwiYXVkIjoiaHR0cHM6Ly9kZW1vcHVic3ViZm9yYmJ2LndlYnB1YnN1Yi5henVyZS5jb20vY2xpZW50L2h1YnMvY2hhdCJ9.um32hOXSGBDVYn9D_f5By4lj6L03vnNhkr5X0-DutoQ",
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJ3c3M6Ly9kZW1vcHVic3ViZm9yYmJ2LndlYnB1YnN1Yi5henVyZS5jb20vY2xpZW50L2h1YnMvY2hhdCIsImlhdCI6MTYyNDI2NjMwNCwiZXhwIjoxNjI0MzUyNzA0LCJyb2xlIjpbIndlYnB1YnN1Yi5zZW5kVG9Hcm91cCIsIndlYnB1YnN1Yi5qb2luTGVhdmVHcm91cCJdfQ._CW1oBynNj9JRKa3lvQyBPV7oSmYvf5L60s3yoq8eWU",
        (event) => {
          this.messages += JSON.stringify(event);
        },
        (message) => {
          this.messages += message;
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
    return { webSocketHelper: {} as WebSocketHelper };
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
