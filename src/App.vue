<template>
  <div id="app">
    <router-view/>
    <FooterGuide v-show="$route.meta.showFooter"></FooterGuide>
  </div>
</template>

<script>
  import {mapActions} from 'vuex'
  import FooterGuide from './components/FooterGuide/FooterGuide.vue'
  import {reqAddress} from './api/index.js'
 
  export default {
     mounted(){
      // const re = await reqFoodType()
      // console.log(re)
      
      // const re2 = await reqAddress('40.10038,116.36867');
      // console.log(re2)
      //this.$store.dispatch('getAddress')
      this.getAddress()

    },
    methods:{
      ...mapActions(['getAddress'])
    },
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