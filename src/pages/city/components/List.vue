<template>
  <div class="list" ref="wrapper">
    <div class="wrapper">
      <div class="area">
        <div class="title border border-top">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
          
        </div>
      </div>
      <div class="area">
        <div class="title border border-top">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
          
        </div>
      </div>
      <div class="area">
        <div class="title border border-top">A</div>
        <div class="item-list">
          <div class="item border">阿拉尔</div>
          <div class="item border">阿拉尔</div>
          <div class="item border">阿拉尔</div>
          <div class="item border">阿拉尔</div>
          <div class="item border">阿拉尔</div>
          <div class="item border">阿拉尔</div>
          <div class="item border">阿拉尔</div>
          <div class="item border">阿拉尔</div>
        </div>
        <div class="title border border-top">A</div>
        <div class="item-list">
          <div class="item border">阿拉尔</div>
          <div class="item border">阿拉尔</div>
          <div class="item border">阿拉尔</div>
          <div class="item border">阿拉尔</div>
          <div class="item border">阿拉尔</div>
          <div class="item border">阿拉尔</div>
          <div class="item border">阿拉尔</div>
          <div class="item border">阿拉尔</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'CityList',
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper)
  }
}
</script>

<style lang="stylus" scoped>
  @import '~@/assets/styles/varibles.styl'
  .border
    &:after
      border-color: #ccc
  .border-top 
    &:before 
      border-color: #ccc
  .list
    position: absolute 
    top: 1.68rem
    left: 0
    right: 0
    bottom: 0
    overflow: hidden
    .title
      height: .54rem
      line-height: .54rem
      background: #eee
      padding-left: .2rem
      color: #666
      font-size: .26rem
    .button-list
      overflow: hidden
      padding: .1rem .6rem .1rem .1rem
      .button-wrapper
        width: 33.33%
        float: left
        .button
          padding: .1rem 0
          margin: .1rem
          text-align: center
          border: .02rem solid #ccc
          border-radius: .06rem
    .item-list
      overflow: hidden
      .item
        padding-left: .2rem
        height: .76rem
        line-height: .76rem
        color: #666


      
</style>