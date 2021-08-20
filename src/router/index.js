import {createRouter, createWebHistory} from 'vue-router'
import About from '../views/About'
import Home from '../views/Home'
import Testing from '../views/Testing'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/testing',
        name: 'Testing',
        component: Testing
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router 