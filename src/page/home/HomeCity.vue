<template>
    <div>
        <city-header></city-header>
        <home-swiper></home-swiper>
        <home-icons></home-icons>
    </div>
</template>

<script>
import CityHeader from './components/CityHeader.vue'
import HomeIcons from './components/HomeIcons.vue'
import HomeSwiper from './components/HomeSwiper.vue'
    export default {
  components: { CityHeader, HomeSwiper, HomeIcons },
        name:"HomeCity"
    }
</script>

<style lang="scss" scoped>

</style>