<template>
  <div>
    <DetailBanner :bannerImg="bannerImg"></DetailBanner>
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
      bannerImg: '',
      list: [
        {
          title: '成人票',
          children: [
            {
              title: '成人三馆联票',
              children: [
                {
                  title: '成人三馆联票 - 某连锁店销售'
                }
              ]

            },
            {
              title: '成人五馆联票'
            }
          ]
        },
        {
          title: '儿童票',
        },
        {
          title: '学生票',
        },
        {
          title: '特惠票',
        },

      ]
    }
  },
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
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
    margin-bottom: 50rem
</style>