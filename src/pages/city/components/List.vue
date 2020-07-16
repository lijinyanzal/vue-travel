<template>
  <div class="list" ref="wrapper">
    <div class="wrapper">
      <div class="area">
        <div class="title border border-top">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{ currentCity }}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border border-top">热门城市</div>
        <ul class="button-list">
          <li class="button-wrapper" 
            v-for="item of hotCities" 
            :key="item.id"
            @click="handleCityClick(item.name)"
          >
            <div class="button">{{ item.name }}</div>
          </li>   
        </ul>
      </div>
      <ul class="area">
        <li 
          v-for="(cities, key) of cities" 
          :key="key"
          :ref="key"
        >
          <div class="title border border-top">{{ key }}</div>
          <div class="item-list" 
            v-for="city of cities" 
            :key="city.id"
            @click="handleCityClick(city.name)"
          >
            <div class="item border">{{ city.name }}</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'CityList',
  props: {
    hotCities: Array,
    cities: Object, 
    letter: String,
  },
  computed: {
    ...mapState({
      currentCity: 'city'
    })
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper)
  },
  watch: {
    letter() {
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    }
  },
  methods: {
    handleCityClick(city) {
      this.changeCity(city)
      // this.$store.commit('changeCity', city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  }
}
</script>

<style lang="stylus" scoped>
  @import '~@/assets/styles/varibles.styl'
  .border
    &:after
      border-color: #ccc
  .border-top 
    &:before 
      border-color: #ccc
  .list
    position: absolute 
    top: 1.68rem
    left: 0
    right: 0
    bottom: 0
    overflow: hidden
    .title
      height: .54rem
      line-height: .54rem
      background: #eee
      padding-left: .2rem
      color: #666
      font-size: .26rem
    .button-list
      overflow: hidden
      padding: .1rem .6rem .1rem .1rem
      .button-wrapper
        width: 33.33%
        float: left
        .button
          padding: .1rem 0
          margin: .1rem
          text-align: center
          border: .02rem solid #ccc
          border-radius: .06rem
    .item-list
      overflow: hidden
      .item
        padding-left: .2rem
        height: .76rem
        line-height: .76rem
        color: #666


      
</style>