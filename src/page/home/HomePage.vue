<template>
    <div>
        <city-header></city-header>
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
import {mapState} from 'vuex'
export default {
    components: { CityHeader, HomeSwiper, HomeIcons, HomeRecommend, HomeWeekend },
    name: "HomePage",
    data() {
        return {
            lastCity:"",
            swiperList: [],
            iconList: [],
            recommendList: [],
            weekendList: []
        }
    },
    computed:{
        ...mapState(['city'])
    },
    methods: {
        getHomeInfo() {
            axios.get('/api/index.json?city=' + this.city)
                .then(res => {
                    res = res.data;
                    if (res.ret && res.data) {
                        const data = res.data;
                        this.swiperList = data.swiperList;
                        this.iconList = data.iconList;
                        this.recommendList = data.recommendList;
                        this.weekendList = data.weekendList
                    }
                })
        }
    },
    mounted() {
        this.lastCity = this.city;
        this.getHomeInfo()
    },
    activated(){
        if(this.lastCity !== this.city){
            this.lastCity = this.city;
            this.getHomeInfo()
        }
    }
}
</script>

<style lang="scss" scoped></style>