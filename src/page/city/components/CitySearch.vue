<template>
    <div>
        <div class="search">
            <input type="text" v-model="keyword" class="search-input" placeholder="输入城市名或拼音">
        </div>
        <div class="search-content" ref="search" v-show="keyword">
            <ul>
                <li class="search-item" v-for="item of list" :key="item.id" @click="handleCityClick(item.name)">
                    {{ item.name }}
                </li>
                <li class="search-item" v-show="hasNoData">
                    没有找到匹配数据
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
import {mapMutations} from 'vuex'
export default {
    name: "CitySearch",
    props: ['cities'],
    data() {
        return {
            keyword: '',
            list: [],
            timer: null,
        }
    },
    methods: {
        handleCityClick(city) {
            this.changeCity(city)
            this.$router.push('/')
        },
        ...mapMutations(['changeCity'])
    },
    computed: {
        hasNoData() {
            return !this.list.length
        }
    },
    watch: {
        keyword() {
            if (this.timer) {
                clearTimeout(this.timer)
            }
            this.timer = setTimeout(() => {
                const result = [];
                for (let i in this.cities) {
                    if (!this.keyword) {
                        this.list = [];
                        return
                    }
                    this.cities[i].forEach(value => {
                        if (value.spell.indexOf(this.keyword) - -1 || value.name.indexOf(this.keyword) - -1) {
                            result.push(value);
                        }
                    })
                    this.list = result;
                }
            }, 100)
        }
    },
    mounted() {
        this.scroll = new BScroll(this.$refs.search, {
            click:true,
            taps:true,
            observeDOM: true
        })
    }
}
</script>

<style lang="stylus" scoped>
@import '@/assets/styles/varibles.styl'
.search
 height: .72rem;
 padding: 0 .1rem;
 background: $bgColor;
 .search-input
  box-sizing:border-box; 
  width 100%;
  height: .62rem;
  padding: 0 .1rem;
  line-height: .62rem;
  text-align: center
  border-radius: .06rem;
  color:#666;
.search-content
 z-index 1;
 overflow: hidden;
 position: absolute;
 top: 1.58rem;
 left: 0;
 right: 0;
 bottom: 0;
 background: #eee;
 .search-item
  line-height: .62rem;
  padding-left: .2rem;
  background: #fff;
  color: #666;
  border-bottom: 1px solid #eee;
</style>