<template>
  <div id="app">
    <transition mode="out-in"><router-view></router-view></transition>
    <footer id="nav">
      <span @click="go('/')" v-bind:class="{active: Activejudge('/')}"><i class='iconfont icon-yemian' ></i>首页</span>
      <span @click="go('/search')" v-bind:class="{active: Activejudge('/search')}"><i class='iconfont icon-soushuo1' ></i>搜索</span>
      <span @click="go('/order')" v-bind:class="{active: Activejudge('/order')}"><i class='iconfont icon-icon--copy1' ></i>订单</span>
      <span @click="go('/individual')" v-bind:class="{active: Activejudge('/individual')}"><i class='iconfont icon-ren1' ></i>个人</span>
    </footer>

  </div>
</template>
<script>
export default {
  methods:{
    go:function(s){
      this.$router.push(s);
    },
    Activejudge:function(s){
      return s==this.$route.path;
    }
  }
}
</script>
<style>
*{
  margin:0
}
 body,html{
   height: 100%;
   width:100%;
 }
 #app{
   height: 94%;
   width: 100%;
 }
 #nav{
   width:100%;
   height: 6%;
   bottom:0px;
   position: fixed;
   border-top:1px solid #e4e4e4;
   background-color: rgba(255, 255, 255, 0.959);
 }
#nav span{
  width: 25%;
  display: inline-block;
  text-align: center;
  padding:3% 0;
  margin: auto;
  color:#999999;
}
#nav span.active{
  color:#02a774;    
}
.v-enter,.v-leave-to{
  opacity: 0;
  width:0;
}
.v-enter-to,.v-leave{
  width:100%;
}
.v-enter-active,.v-leave-active{
    transition: all 0.5s;
}

</style>
