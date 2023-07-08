<template>
    <div>
        <header-city></header-city>
        <city-search></city-search>
        <city-list :cities="cities" :hotCities="hotCities" :letter="letter"></city-list>
        <city-alphabet :cities="cities" @change="handleLetterChange"></city-alphabet>
        <city-search :cities="cities"></city-search>
        <city-list :cities="cities" :hotCities="hotCities"></city-list>
        <city-alphabet :cities="cities"></city-alphabet>
    </div>
</template>

<script>
import axios from 'axios'
import CityAlphabet from './components/CityAlphabet.vue'
import CityList from './components/CityList.vue'
import CitySearch from './components/CitySearch.vue'
import HeaderCity from './components/HeaderCity.vue'
export default {
    name: "HomeCity",
    components: { HeaderCity, CitySearch, CityList, CityAlphabet },
    data() {
        return {
            cities: {},
            hotCities: [],
            letter: ""
        }
    },
    methods: {
        getCityInfo() {
            axios.get('mock/city.json')
                .then(res => {
                    res = res.data
                    if (res.ret && res.data) {
                        const data = res.data;
                        this.cities = data.cities;
                        this.hotCities = data.hotCities;
                    }
                })
        },
        handleLetterChange(letter) {
            this.letter = letter
        }
    },
    mounted() {
        this.getCityInfo()
    },
}

</script>

<style lang="stylus" scoped>

</style>