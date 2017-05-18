import Vue from 'vue'
import App from './App.vue'

new Vue({
  //id element goes to show up into index page between div tags,
  //el stands for element, ex:   <div id="app"></div>
  el: '#app',
  //for rendereing the page into index.html page view
  render: h => h(App)
})
