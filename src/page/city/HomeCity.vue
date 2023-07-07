<template>
    <div>
        <header-city></header-city>
        <city-search></city-search>
    </div>
</template>

<script>
import CitySearch from './components/CitySearch.vue'
import HeaderCity from './components/HeaderCity.vue'
export default {
    name: "HomeCity",
    components: { HeaderCity, CitySearch }
}

</script>

<style lang="stylus" scoped>

</style>