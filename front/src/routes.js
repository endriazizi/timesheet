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
            component: Login
        },
        {
            path: "/Register",
            component: Register
        }
    ]
})
export default router
