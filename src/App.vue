<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>

    <input type="button" name="loadingBar1" value='3초 후 사라짐' @click='loadingbar1()'>
    <input type="button" name="loadingBar2" value='3초후 2 alert' @click='loadingbar2()'>
    <input type="button" name="loadingBar3" value='3초후 alert' @click='loadingbar3()'>
    <!-- <input type="button" name="loadingBar3" value='1' @click='loadingbar4()'> -->
    <input type="button" name="loadingBar3" value='showLoadingBar' @click='loadingbar5()'>
  </div>
</template>


<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods : {
    loadingbar1 : function() {
      this.showLoadingBar(3000)
    },
    loadingbar2 : function() {
      this.showLoadingBar({milliSec :3000, countDown:2, alertMsg : '응답시간 초과'})
    },
    loadingbar3 : function() {
      this.showLoadingBar({milliSec :3000, alertMsg : '응답시간 초과'})
    },
    loadingbar5 : function() {
      this.showLoadingBar()
    }
  }
}
</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
