<template>
    <div class="list" ref="wrapper">
        <div>
            <div class="area">
                <div class="title border-topbottom">您的位置</div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class="button">北京</div>
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">热门城市</div>
                <div class="button-list">
                    <div class="button-wrapper" v-for="item of hotCities" :key="item.id">
                        <div class="button">{{ item.name }}</div>
                    </div>
                </div>
            </div>
            <div class="area" v-for="(item, key) of cities" :key="key" :ref="key">
                <div class="title border-topbottom">{{ key }}</div>
                <div class="item-list">
                    <div class="item" v-for="items of item" :key="items.id">{{ items.name }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Better from 'better-scroll'
export default {
    name: "CityList",
    props: ['cities', 'hotCities', 'letter'],
    mounted() {
        this.scroll = new Better(this.$refs.wrapper, {
            observeDOM: true
        })
    },
    watch:{
        letter(){
            if(this.letter){
                const element = this.$refs[this.letter][0];
                this.scroll.scrollToElement(element);
            }
        }
    }
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