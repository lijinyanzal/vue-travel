<template>
  <div>
    <div class="title">
      周末去哪儿
    </div>
    <ul>
      <li class="item border" v-for="item in weekendList" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl">
        </div>
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{ item.desc }}</p>
        </div>
      </li>
    </ul>
  </div>
  
</template>

<script>
export default {
  name: 'HomeWeekend',
  data() {
    return {
      weekendList: [
        {
          id: '001',
          imgUrl: 'http://m.tuniucdn.com/fb2/t1/G5/M00/7A/74/Cii-s1qXzZyIc4pOAAotozDzW-8AADyOQCk-JcACi27497_w500_h280_c1_t0.jpg',
          title: '大连-圣亚海洋世界',
          desc: '浪漫的东方威尼斯水城，让您恍如来到异国他乡、梦幻城堡'
        },
        {
          id: '002',
          imgUrl: 'http://m.tuniucdn.com/fb2/t1/G5/M00/7A/74/Cii-s1qXzZyIc4pOAAotozDzW-8AADyOQCk-JcACi27497_w500_h280_c1_t0.jpg',
          title: '大连-圣亚海洋世界',
          desc: '浪漫的东方威尼斯水城，让您恍如来到异国他乡、梦幻城堡'
        },
        {
          id: '003',
          imgUrl: 'http://m.tuniucdn.com/fb2/t1/G5/M00/7A/74/Cii-s1qXzZyIc4pOAAotozDzW-8AADyOQCk-JcACi27497_w500_h280_c1_t0.jpg',
          title: '大连-圣亚海洋世界',
          desc: '浪漫的东方威尼斯水城，让您恍如来到异国他乡、梦幻城堡'
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
  .item-img-wrapper
    overflow: hidden
    height: 0
    width: 100%
    padding-bottom: 33.9%
    background: red
    .item-img
      width: 100%
  .item-info
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


</style>