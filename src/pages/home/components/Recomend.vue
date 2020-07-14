<template>
  <div>
    <div class="title">
      热销推荐
    </div>
    <ul>
      <li class="item border" v-for="item in recomendList" :key="item.id">
        <img class="item-img" :src="item.imgUrl">
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{ item.desc }}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
  
</template>

<script>
export default {
  name: 'HomeRecomend',
  data() {
    return {
      recomendList: [
        {
          id: '001',
          imgUrl: 'https://imgs.qunarzz.com/sight/p0/2005/9e/9e643f96c84b5c2ea3.water.jpg_200x200_2a3eef5b.jpg',
          title: '上海欢乐谷',
          desc: '敢上1200米长的木质过山车吗？'
        },
        {
          id: '002',
          imgUrl: 'https://imgs.qunarzz.com/sight/p0/1412/9f/fbff2a5302c0ce906ef9b64159730f89.water.jpg_200x200_87806940.jpg',
          title: '上海海洋水族馆',
          desc: '亲眼见证鲨鱼的恐怖'
        },
        {
          id: '003',
          imgUrl: 'https://imgs.qunarzz.com/tuan/team2/1507/2c/83e0e0e7ae082a.jpg_200x200_6d7378b2.jpg',
          title: '东方明珠',
          desc: '259米透明悬空观光廊了解一下~'
        },
        {
          id: '004',
          imgUrl: 'https://imgs.qunarzz.com/sight/p0/2005/a9/a9411416ff215fe2a3.water.jpg_200x200_3110fb7b.jpg',
          title: '上海迪士尼乐园',
          desc: '全球最大的迪士尼城堡'
        },
        {
          id: '005',
          imgUrl: 'https://imgs.qunarzz.com/sight/p0/2005/23/23c1b2b13230b966a3.water.jpg_200x200_f3a19805.jpg',
          title: '上海野生动物园',
          desc: '会跳芭蕾的小海狮们~'
        },
        {
          id: '006',
          imgUrl: 'https://imgs.qunarzz.com/sight/p0/1412/ef/4357142a1ecc7fbe9e0183f6861eafcc.water.jpg_200x200_4dafdb62.jpg',
          title: '金茂大厦88层观光厅',
          desc: '上海就在脚下'
        },
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~@/assets/styles/mixins.styl'
  .title
    margin-top: .2rem
    line-height: .8rem
    background: #eee
    text-indent: .2rem
  .item
    overflow: hidden
    display: flex
    height: 1.9rem
    .item-img
      width: 1.7rem
      height: 1.7rem
      padding: .1rem
    .item-info
      flex: 1
      padding: .1rem
      min-width: 0
      .item-title
        line-height: .54rem
        font-size: .32rem
        ellipsis()
      .item-desc
        line-height: .4rem
        color: #ccc
        ellipsis()
      .item-button
        line-height: .44rem
        margin-top: .16rem
        background: #ff9300
        padding: 0 .2rem
        border-radius: .06rem
        color: #fff 


</style>