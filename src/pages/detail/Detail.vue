<template>
  <div>
    <DetailBanner :bannerImg="bannerImg"></DetailBanner>
  </div>
</template>

<script>
import DetailBanner from './components/Banner.vue'
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

</style>