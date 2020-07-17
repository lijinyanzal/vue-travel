<template>
  <div class="wrapper" 
    @click="handleBannerClick"
  >
    <div class="banner">
      <img class="banner-img" :src="bannerImg"/>
      <div class="banner-info">
        <div class="banner-title">
          {{ sightName }}
        </div>
        <div class="banner-number">
          <span class="iconfont header-back banner-icon">&#xe635;</span>
          39
        </div>
      </div>
    </div>
    <CommonGallary 
      :gallaryImgs="gallaryImgs"
      v-if="showGallary"
      @close="handleGallaryClose"
    ></CommonGallary>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary.vue'

export default {
  name: 'DetailBanner',
  data() {
    return {
      showGallary: false
    }
  },
  props: {
    sightName: String,
    bannerImg: String,
    gallaryImgs: Array,
  },
  components: {
    CommonGallary,
  },
  methods: {
    handleBannerClick() {
      this.showGallary = true
    },
    handleGallaryClose() {
      this.showGallary = false
    }
  }
}
</script>

<style lang='stylus' scoped>
@import '~@/assets/styles/varibles.styl'
  .banner 
    position: relative
    overflow: hidden
    height: 0
    padding-bottom: 55%
    .banner-img
      width: 100%
    .banner-info
      display: flex
      position: absolute 
      left: 0
      right: 0
      bottom: 0
      line-height: .6rem
      color: #fff
      background: linear-gradient(to bottom, rgba(0, 0, 0, 0),rgba(0, 0, 0, 0.8))
      .banner-title
        flex: 1
        font-size: .32rem
        padding: 0 .2rem
      .banner-number
        line-height: .32rem
        height: .32rem
        padding: 0 .4rem
        margin-top: .14rem
        border-radius: .2rem
        background: rgba(0, 0, 0, .8)
        font-size: .24rem
        .banner-icon
          font-size: .24rem
</style>