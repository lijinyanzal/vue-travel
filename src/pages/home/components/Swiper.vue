<template>
  <swiper class="swiper" ref="mySwiper" :options="swiperOptions">
    <swiper-slide v-for="item in swiperList" :key="item.id">
      <img class="swiper-img"  :src="item.imgUrl">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data() {
    return {
      swiperOptions: {
        slidesPerView: 1, 
        spaceBetween: 30, 
        loop: true, 
        autoplay: 1500,
        autoplayDisableOnInteraction: false,
        pagination: {
          el: '.swiper-pagination'
        },
        // Some Swiper option/callback...
      },
      swiperList: [
        {
          id: '001',
          imgUrl: "https://imgs.qunarzz.com/vs_ceph_vcimg/b8c4527c41649814cc4cf86880abba54.jpeg"
        },
        {
          id: '002',
          imgUrl: "https://imgs.qunarzz.com/vc/6d/9f/35/b8ad5468f73fd60ec0ced086f6.jpg_92.jpg"
        },
        {
          id: '003',
          imgUrl: "https://imgs.qunarzz.com/vc/e3/a1/71/f498dfd3bed948d623c9093252.jpg_92.jpg"
        }
      ]
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper
    }
  },
  mounted() {
    console.log('Current Swiper instance object', this.swiper)
    if (this.swiper) {
      this.swiper.slideTo(3, 1000, false)
    }
  },
}
</script>

<style lang="stylus" scoped>
  .swiper 
    position: relative
  .swiper-img 
    width:100%
</style>