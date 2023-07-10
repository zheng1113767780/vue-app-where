import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from '@/page/home/HomePage'
import HomeCity from '@/page/city/HomeCity'
import DetailHome from '@/page/detail/DetailHome'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomePage
    },
    {
        path: '/city',
        name: "city",
        component: HomeCity
    },
    {
        path: '/detail/:id',
        name: 'detail',
        component: DetailHome
    }
];
const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
    scrollBehavior() {
        return { x: 0, y: 0 }
    }
})
export default router