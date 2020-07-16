<template>
  <div class="home">
    <HomeHeader ></HomeHeader>
    <HomeSwiper :swiperList="swiperList"></HomeSwiper>
    <HomeIcons :iconList="iconList"></HomeIcons>
    <HomeRecommend :recommendList="recommendList"></HomeRecommend>
    <HomeWeekend :weekendList="weekendList"></HomeWeekend>
  </div>
  
</template>

<script>
import HomeHeader from './components/Header.vue'
import HomeSwiper from './components/Swiper.vue'
import HomeIcons from './components/Icons.vue'
import HomeRecommend from './components/Recommend.vue'
import HomeWeekend from './components/Weekend.vue'
import axios from 'axios'
import { mapState } from 'vuex'

export default {
  name: 'Home',
  data() {
    return {
      lastCity: '',
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend,
  },
  computed: {
    ...mapState(['city'])
  },
  mounted() {
    this.lastCity = this.city
    this.getHomeInfo()
  },
  activated() {
    if (this.lastCity !== this.city) {
      this.lastCity = this.city
      this.getHomeInfo()
    }

  },
  methods: {
    getHomeInfo() {
      axios.get('api/mock/index.json?city=' + this.city)
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc(res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
      }
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>