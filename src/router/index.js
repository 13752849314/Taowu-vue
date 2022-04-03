import {createRouter, createWebHashHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
        children: [
            {
                path: '/index',
                name: 'index',
                component: () => import(/* webpackChunkName: "index" */'@/views/index')
            },
            {
                path: 'sys/User',
                name: 'user',
                component: () => import(/* webpackChunkName: "user" */'@/components/sys/User')
            }
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: () => import(/* webpackChunkName: "login" */'@/views/login')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
