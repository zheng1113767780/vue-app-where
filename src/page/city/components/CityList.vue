<template>
    <div class="list" ref="wrapper">
        <div>
            <div class="area">
                <div class="title border-topbottom">您的位置</div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class="button">{{ this.city }}</div>
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">热门城市</div>
                <div class="button-list">
                    <div class="button-wrapper" v-for="item of hotCities" :key="item.id"
                        @click="handleCityClick(item.name)">
                        <div class="button">{{ item.name }}</div>
                    </div>
                </div>
            </div>
            <div class="area" v-for="(item, key) of cities" :key="key" :ref="key">
                <div class="title border-topbottom">{{ key }}</div>
                <div class="item-list">
                    <div class="item" v-for="items of item" :key="items.id" @click="handleCityClick(items.name)">
                        {{ items.name }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Bscroll from 'better-scroll'
import  {mapState, mapMutations}  from 'vuex'
export default {
    name: "CityList",
    props: ['cities', 'hotCities', 'letter'],
    computed:{
        ...mapState(['city'])
    },
    methods: {
        handleCityClick(city) {
            this.changeCity(city)
            this.$router.push('/')
        },
        ...mapMutations(['changeCity'])
    },
    watch: {
        letter() {
            if (this.letter) {
                const element = this.$refs[this.letter][0];
                this.scroll.scrollToElement(element);
            }
        }
    },
    mounted() {
        this.scroll = new Bscroll(this.$refs.wrapper, {
            click: true,
            taps: true,
            observeDOM: true
        })
    },
}
</script>

<style lang="stylus" scoped>
.border-topbottom
 &:before
  content: ""
  border-color: #777;
 &:after
  content: ""
  border-color: #777;
.list
 position: absolute;
 overflow: hidden;
 top: 1.58rem;
 left: 0;
 right: 0;
 bottom: 0;
 .title
  line-height: .54rem;
  background: #eee;
  padding-left: .2rem;
  border-bottom: 0.02rem solid #ccc; 
  color: #666;
  font-size: .26rem;
 .button-list
  overflow: hidden;
  padding: .1rem .6rem .1rem .1rem;
  .button-wrapper
   float left
   width 33.33%
   .button
    margin: .1rem;
    padding: .1rem 0;
    text-align: center;
    border-radius: .06rem;
    border: .02rem solid #ccc;
 .item-list
  .item
    border-bottom: .02rem solid #ccc;
    line-height: .76rem;
    padding-left: .2rem;
</style>