<template>
    <div>
        <header-city></header-city>
        <city-search></city-search>
        <city-list></city-list>
        <city-alphabet></city-alphabet>
    </div>
</template>

<script>
import CityAlphabet from './components/CityAlphabet.vue'
import CityList from './components/CityList.vue'
import CitySearch from './components/CitySearch.vue'
import HeaderCity from './components/HeaderCity.vue'
export default {
    name: "HomeCity",
    components: { HeaderCity, CitySearch, CityList, CityAlphabet }
}

</script>

<style lang="stylus" scoped>

</style>