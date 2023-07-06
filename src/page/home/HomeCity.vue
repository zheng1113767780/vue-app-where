<template>
    <div>
        <city-header></city-header>
        <home-swiper></home-swiper>
        <home-icons></home-icons>
        <home-recommend></home-recommend>
        <home-weekend></home-weekend>
    </div>
</template>

<script>
import CityHeader from './components/CityHeader.vue'
import HomeIcons from './components/HomeIcons.vue'
import HomeRecommend from './components/HomeRecommend.vue'
import HomeSwiper from './components/HomeSwiper.vue'
import HomeWeekend from './components/HomeWeekend.vue'
    export default {
  components: { CityHeader, HomeSwiper, HomeIcons, HomeRecommend, HomeWeekend },
        name:"HomeCity"
    }
</script>

<style lang="scss" scoped>

</style>