import Vue from 'vue'
import App from './App.vue'
import '@/assets/styles/reset.css'
import '@/assets/styles/iconfont.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper);
new Vue({
  render: h => h(App),
}).$mount('#app')
