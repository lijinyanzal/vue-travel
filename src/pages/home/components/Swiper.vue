<template>
  <div class="wrapper" v-if="swiperList.length">
    <swiper class="swiper" ref="mySwiper" :options="swiperOptions" >
      <swiper-slide v-for="item in swiperList" :key="item.id">
        <img class="swiper-img"  :src="item.imgUrl">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
  
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    swiperList: Array,
  },
  data() {
    return {
      swiperOptions: {
        slidesPerView: 1, 
        spaceBetween: 30, 
        loop: true, 
        autoplay: false,
        autoplayDisableOnInteraction: false,
        pagination: {
          el: '.swiper-pagination'
        },
        // Some Swiper option/callback...
      },
    }
  },
  computed: {
    // eslint-disable-next-line vue/return-in-computed-property
    swiper() {
      if (this.$refs.mySwiper) {
        return this.$refs.mySwiper.$swiper
      }
      
    }
  },
  mounted() {
    if (this.swiper) {
      this.swiper.slideTo(3, 1000, false)
    }
  },
}
</script>

<style lang="stylus" scoped>
  .wraper 
    width: 100%
    height: 0
    overflow: hidden
    padding-bottom: 31.25%
    backgroud: #ccc
  .swiper-img 
    width:100%
</style>