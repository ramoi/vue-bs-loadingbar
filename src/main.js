import Vue from 'vue'
import App from './App.vue'
import loader from './components/Loader.js'

Vue.use( loader )

new Vue({
  el: '#app',
  render: h => h(App)
})
