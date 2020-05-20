<template>
    <div class="shoplist">
        <store v-for="item in stores" v-bind:storeinfo="item" :key="item.key" @gostore="gostore"></store>
    </div>
</template>
<script>
import store from './store.vue'
import {mapState,mapActions,mapMutations} from 'vuex'
export default {
    computed:{...mapState(['stores','firstcreated','flagofassignedstore'])},
    components:{
        store
    },
    methods:{...mapActions(['initialstores','getstoreinfo']),...mapMutations(['changefirst']),
    gostore:function(arg){
        var t=this;
        return new Promise(       //使用promise封装异步操作 避免bug 否则按同步写会直接切换路由而此时商家数据未获取完导致无法读取的错误
            function(resolve){
                        t.getstoreinfo(arg);
                        
        setTimeout(function(){
        console.log('执行完成'); resolve(arg);},200);}
   ).then(//这里来个方法获取指定店家的信息给到VUEX
        function(){
        console.log('.then');
         t.$router.push('/store');
        //这里先尝试用 新路由 完全覆盖 再用routerback方法看下组件状态会不会保持
    });
    }
    },
    mounted:function(){
        if(this.firstcreated)
        {
            this.initialstores();
            this.changefirst();
    }
    }
}
</script>
<style scoped>
.shoplist{
    height: 50%;
    width:100%;
    overflow: scroll;
}
</style>