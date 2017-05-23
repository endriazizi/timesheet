import Vue from 'vue'
import App from './App.vue'

import Router from'./routes.js'

import VueResource from 'vue-resource'

Vue.use(VueResource)

new Vue({
  //id element goes to show up into index page between div tags,
  //el stands for element, ex:   <div id="app"></div>
  el: '#app',
  //for rendereing the page into index.html page view
  render: h => h(App),
  router: Router

})
