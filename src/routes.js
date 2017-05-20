import Vue from 'vue'
import VueRouter from'vue-router'


import Login from './components/authentication/Login.vue'

Vue.use(VueRouter)


const router = new VueRouter ({
    routes: [
        {
            path: "/Login",
            component: Login
        }
    ]
})
export default router
