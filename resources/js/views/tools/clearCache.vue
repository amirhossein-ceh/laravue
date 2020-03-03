<template>
  <div class="container">
    <h1>Clear your application cache</h1>
    <button id="btn" type="button" class="clear-view-cache-button" @click="clearCache()">Clear !</button>
    <h3 id="msgView" />
    <hr>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'ClearCache',
  methods: {
    clearCache() {
      axios.get('/api/clear-cache')
        .then(({ data }) => {
          var msg = document.getElementById('msgView');
          msg.innerText = data.text;
        });
    },
  },
};
</script>

<style scoped>
  .container {
    text-align: center;
  }
  .clear-view-cache-button {
    color: #ffffff;
    background: #0a76a4;
    border: none;
    border-radius: 6px;
    padding: 9px;
    cursor: pointer;
  }
</style>
