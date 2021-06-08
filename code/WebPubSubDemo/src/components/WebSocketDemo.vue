<template>
  <div>
    <p>See <code>README.md</code> for more information.</p>
    <div class="buttons">
      <button @click="connect">Connect to the Web Socket</button>
      <button @click="send">Send a message</button>
    </div>
    <p>
      <a href="https://vitejs.dev/guide/features.html" target="_blank">
        Vite Docs
      </a>
      |
      <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
    </p>
    {{ msgs }}
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import WebSocketHelper from '../WebSocketHelper'
export default defineComponent({
  name: 'WebSocketDemo',
  
  props: {
    msgs: {
      type: String,
      required: true
    }
  },
  setup: (props) => {
    const count = ref(0)
    const webSocketHelper = new WebSocketHelper(props.msgs);
    return { webSocketHelper, count }

  },
  methods: {
    connect: function()  {
this.webSocketHelper.connect()    
  }, 
  send() { 
    this.webSocketHelper.send("hello")
  }
    }
})
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
