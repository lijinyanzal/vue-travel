<template>
  <div class="gallary" 
    @click.stop="handleGallaryClick" 
  >
    <div class="container">
      <swiper class="swiper" 
        ref="mySwiper"
        :options="swiperOptions"
        >
        <swiper-slide v-for="item in gallaryImgs" :key="item">
          <img class="swiper-img"  :src="item">
        </swiper-slide>
        <div class="swiper-pagination"    slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonGallary',
  data() {
    return {
      swiperOptions: {
        pagination: ".swiper-pagination",
        paginationType: 'fraction',
        observeParents: true,
        observer: true,
      }
    }
  },
  props: {
    gallaryImgs: Array,
  },
  computed: {
    // eslint-disable-next-line vue/return-in-computed-property
    swiper() {
      if (this.$refs.mySwiper) {
        return this.$refs.mySwiper.$swiper
      }
      
    },

  },
  mounted() {
    if (this.swiper) {
      this.swiper.slideTo(3, 1000, false)
    }
  },
  methods: {
    handleGallaryClick() {
      this.$emit('close')
    }
  }
}
</script>

<style lang='stylus' scoped>
  @import '~@/assets/styles/varibles.styl'
  .gallary
    z-index: 0
    position: fixed
    display: flex
    flex-direction: column
    justify-content: center
    left: 0
    right: 0
    top: 0
    bottom: 0
    background: #fff
    .swiper
      width: 100%  
      overflow: inherit
      .swiper-img
        width: 100%
      .swiper-pagination
        color: #fff
        bottom: -1rem
      

</style>