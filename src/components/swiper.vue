<template>
    <transition><div class="swiper" :style="{backgroundImage:src_ad[index], backgroundSize:'100% 100%', backgroundRepeat: 'no-repeat'}">

    </div>
    </transition>
</template>
<script>
export default {
    data:function(){
        return {
            src_ad:["url(" + require("../assets/logo.png") + ")",
            "url(" + require("../assets/logo.png") + ")",
            "url(" + require("../assets/logo.png") + ")"],
            index:0,
            addevent:null
        }//style="backgroundImage:'url(../assets/logo.png)', backgroundSize:'100% 100%', backgroundRepeat: 'no-repeat'"
    },//这里先暂时把数据都写在组件里 其实不是共享的数据可以直接些这里 但不好维护 还是写在vuex里
    methods:{
        addindex:function(){
            //alert(this.index);
            if(this.index<2)this.index++; //这里为什么通过setinterval调用的this会指向VUE实例 因为是通过vue实例去调用的方法
            else this.index=0;
        }
    },
    created:function(){
        this.addevent=setInterval(this.addindex,3000);                    //这里已开始想用闭包 但是this的指向会指向外层的嵌套函数 可以用变量传递this 但麻烦
        },
    destroyed:function(){
        clearInterval(this.addevent);
    }
    
}
</script>
<style scoped>
.swiper{
    height: 25%;
    width:100%;
}
</style>