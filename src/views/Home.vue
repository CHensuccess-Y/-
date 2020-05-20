<template>
  <section class="home" key="home">
    <locationhead></locationhead>
    <swiper></swiper>
    <sortview></sortview>
    <shoplist></shoplist>
  </section>
</template>

<script>
// @ is an alias to /src
import swiper from '../components/swiper.vue'
import locationhead from '../components/locationhead.vue'
import shoplist from '../components/shoplist.vue'
import sortview from  '../components/sortview.vue'
export default {
  name: 'Home',
  components: {
    locationhead,
    swiper,shoplist,sortview
  }
}
</script>
<style scoped>
.home{
  height: 100%;
  
}

</style>
