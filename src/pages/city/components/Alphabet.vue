<template>
  <div class="list">
    <ul>
      <li class="item">A</li>
      <li class="item">B</li>
      <li class="item">A</li>
      <li class="item">A</li>
      <li class="item">A</li>
      <li class="item">A</li>
      <li class="item">A</li>
      <li class="item">A</li>
      <li class="item">A</li>
      <li class="item">A</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CityAlphabet',

}
</script>

<style lang="stylus" scoped>
  @import '~@/assets/styles/varibles.styl'
  .list
    display: flex
    flex-direction: column
    justify-content: center
    position: absolute 
    right: 0
    bottom: 0
    top: 1.58rem
    width: .4rem
    padding-right: .1rem
    .item
      line-height: .4rem
      text-align: center
      color: $bgColor
</style>