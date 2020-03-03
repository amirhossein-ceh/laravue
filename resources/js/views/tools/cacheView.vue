<template>
  <div class="container">
    <h1>Cache your view's to have better performance</h1>
    <button id="btn" type="button" class="clear-view-cache-button" @click="viewCache()">Cache !</button>
    <h3 id="msgView" />
    <hr>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Tools',
  methods: {
    viewCache() {
      axios.get('/api/view-cache')
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
