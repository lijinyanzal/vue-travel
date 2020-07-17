<template>
  <div>
    <DetailBanner :bannerImg="bannerImg"></DetailBanner>
    <DetailHeader></DetailHeader>
    <div class="content"></div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner.vue'
import DetailHeader from './components/Header.vue'
import axios from 'axios'

export default {
  name: 'Detail',
  data() {
    return {
      bannerImg: '',
    }
  },
  components: {
    DetailBanner,
    DetailHeader,
  },
  mounted() {
    this.getDetailInfo()
  },
  methods: {
    getDetailInfo() {
      axios.get('/api/mock/detail.json')
        .then(this.getDetailInfoSucc)
    },
    getDetailInfoSucc(res) {
      if (res.data) {
        res = res.data
        if (res && res.ret) {
          const data = res.data
          this.bannerImg = data.bannerImg
        }
      }
    }
  }
}
</script>

<style lang='stylus' scoped>
@import '~@/assets/styles/varibles.styl'
  .content
    height: 50rem
</style>