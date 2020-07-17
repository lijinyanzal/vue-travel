<template>
  <div>
    <DetailBanner 
      :bannerImg="bannerImg"
      :sightName="sightName"
      :gallaryImgs="gallaryImgs"
    ></DetailBanner>
    <DetailHeader></DetailHeader>
    <div class="content">
      <DetailList :list="list"></DetailList>
    </div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner.vue'
import DetailHeader from './components/Header.vue'
import DetailList from './components/List.vue'
import axios from 'axios'

export default {
  name: 'Detail',
  data() {
    return {
      sightName: '',
      bannerImg: '',
      gallaryImgs: [],
      list: [],
    }
  },
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },

  activated() {
    this.getDetailInfo()
  },
  methods: {
    getDetailInfo() {
      axios.get('/api/mock/detail.json?id=', {
        params: {
          id: this.$route.params.id
        }
      })
        .then(this.handleGetDetailInfoSucc)
    },
    handleGetDetailInfoSucc(res) {
      res = res.data
      if (res && res.ret) {
        const data = res.data
        this.bannerImg = data.bannerImg
        this.sightName = data.sightName
        this.gallaryImgs = data.gallaryImgs
        this.list = data.categoryList
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