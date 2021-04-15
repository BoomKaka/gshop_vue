<template>
  <div id="app">
    <router-view/>
    <FooterGuide v-show="$route.meta.showFooter"></FooterGuide>
  </div>
</template>

<script>
  import FooterGuide from './components/FooterGuide/FooterGuide.vue'

  export default {
    components:{
      FooterGuide  //组件必须包含在div内
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .app 
    width 100%
    height 100%
    background #f5f5f5
</style>