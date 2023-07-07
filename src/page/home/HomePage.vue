<template>
    <div>
        <city-header :city="city"></city-header>
        <home-swiper :list="swiperList"></home-swiper>
        <home-icons :iconList="iconList"></home-icons>
        <home-recommend :recommendList="recommendList"></home-recommend>
        <home-weekend :weekendList="weekendList"></home-weekend>
    </div>
</template>

<script>
import axios from 'axios'
import CityHeader from './components/CityHeader.vue'
import HomeIcons from './components/HomeIcons.vue'
import HomeRecommend from './components/HomeRecommend.vue'
import HomeSwiper from './components/HomeSwiper.vue'
import HomeWeekend from './components/HomeWeekend.vue'
export default {
    components: { CityHeader, HomeSwiper, HomeIcons, HomeRecommend, HomeWeekend },
    name: "HomePage",
    data() {
        return {
            city: "",
            swiperList: [],
            iconList: [],
            recommendList: [],
            weekendList: []
        }
    },
    methods: {
        getHomeInfo() {
            axios.get('mock/index.json')
                .then(res => {
                    res = res.data;
                    if (res.ret && res.data) {
                        const data = res.data;
                        this.city = data.city;
                        this.swiperList = data.swiperList;
                        this.iconList = data.iconList;
                        this.recommendList = data.recommendList;
                        this.weekendList = data.weekendList
                    }
                })
        }
    },
    mounted() {
        this.getHomeInfo()
    }
}
</script>

<style lang="scss" scoped></style>