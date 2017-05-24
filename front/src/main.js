import Vue from 'vue'
import App from './App.vue'

import Router from'./routes.js'

import VueResource from 'vue-resource'

import Auth from './packages/auth/Auth.js'

Vue.use(VueResource)
//notify Vue that we ant to use the following packeges
Vue.use(Auth)

new Vue({
  //id element goes to show up into index page between div tags,
  //el stands for element, ex:   <div id="app"></div>
  el: '#app',
  //for rendereing the page into index.html page view
  render: h => h(App),
  router: Router

})
