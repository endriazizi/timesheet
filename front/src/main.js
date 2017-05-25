import Vue from 'vue'
import App from './App.vue'

import Router from './routes.js'

import VueResource from 'vue-resource'

import Auth from './packages/auth/Auth.js'

Vue.use(VueResource)
//notify Vue that we ant to use the following packeges
Vue.use(Auth)


Vue.http.options.root = 'http://127.0.0.1:8000'

//NAVIGATION GUARD
//whenever a navigation is trigger, we try to go to another page, navigation guard
Router.beforeEach(
  //'to' where we want to go, 'from' current route, 'next' is the funciton
  (to, from, next) => {
    //here the user is not required to be authenticated
    if (to.matched.some(record => record.meta.forVisitors)) {
      if (Vue.auth.isAuthenticated()) {
        //we can not to this because main.js in not a componet
        //**************this.$auth.isAuthenticated*************
        //we direct user to page feed
        next({
          path: '/feed'
        })
      }
      //the user can access the page requested
      else next()
    }

    else if (to.matched.some(record => record.meta.forAuth)) {
      if ( ! Vue.auth.isAuthenticated()) {

        next({
          path: '/login'
        })
      } else next()
    }

    else next()
  }
)


new Vue({
  //id element goes to show up into index page between div tags,
  //el stands for element, ex:   <div id="app"></div>
  el: '#app',
  //for rendereing the page into index.html page view
  render: h => h(App),
  router: Router

})
