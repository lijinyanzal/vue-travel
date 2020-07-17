<template>
  <div>
    <div class="item" v-for="(item, index) of list" :key="index">
      <div class="item-title border">
        <span class="item-title-icon">
        </span>
        {{ item.title }}
      </div>
      <div v-if="item.children" class="item-children">
        <DetailList :list="item.children"></DetailList>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailList',
  props: {
    list: Array,
  }
}
</script>

<style lang='stylus' scoped>
@import '~@/assets/styles/varibles.styl'
  .item-title
    line-height: .8rem
    font-size: .32rem
    padding: 0 .2rem
  .item-title-icon
    display: inline-block
    width: .3rem
    height: .3rem
    background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 .12rem no-repeat
    margin-right: .1rem
    background-size: .4rem .3rem
  .item-children
    padding: 0 .2rem
</style>