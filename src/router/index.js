import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from '@/page/home/HomePage'
import HomeCity from '@/page/city/HomeCity'

Vue.use(VueRouter);

const routes = [
    {
        path:'/',
        name:'home',
        component:HomePage
    },
    {
        path:'/city',
        name:"city",
        component:HomeCity
    }
];
const router = new VueRouter({
    mode:"history",
    base:process.env.BASE_URL,
    routes,
})
export default router