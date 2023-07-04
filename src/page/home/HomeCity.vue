<template>
    <div>
        <city-header></city-header>
        <home-swiper></home-swiper>
    </div>
</template>

<script>
import CityHeader from './components/CityHeader.vue'
import HomeSwiper from './components/HomeSwiper.vue'
    export default {
  components: { CityHeader, HomeSwiper },
        name:"HomeCity"
    }
</script>

<style lang="scss" scoped>

</style>