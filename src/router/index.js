import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Pages/home.vue'
import Member from '../components/Pages/member.vue'
import Postbox from '../components/Pages/postbox.vue'
import Postdata from '../components/Pages/postdata.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: "home",
        component: Home
    },
    {
        path: '/member',
        name: "member",
        component: Member
    },
    {
        path: '/postbox',
        name: "PostBox",
        component: Postbox
    },
    {
        path: '/postdata',
        name: "PostData",
        component: Postdata
    }
]

const router = new VueRouter({
    routes
})

export default router