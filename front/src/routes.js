import Vue from 'vue'
import VueRouter from'vue-router'


import Login from './components/authentication/Login.vue'
import Register from './components/authentication/Register.vue'

Vue.use(VueRouter)


const router = new VueRouter ({
    //object array to define routes
    routes: [
        {
            path: "/Login",
            component: Login,
            meta: {
                forVisitors: true
            }
        },

        {
            path: "/Register",
            component: Register,
            meta: {
                forVisitors: true
            }
        }
    ]
})
export default router
