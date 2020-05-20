<template>
    <div class="store" @click="gostore">
    <img class='shopimg' :src="storeinfo.srcofshop">
    <div class='shopinfo'>
        <i v-if="storeinfo.pinpai" class="iconfont icon-pinpai" style="color:red"></i>&nbsp;&nbsp;<span style="font-size:16px;font-weight:900;font-family:宋体;">{{storeinfo.name}}</span><br>
        <star :rate="storeinfo.rate"></star><span style="font-size:15px;color:rgb(255, 196, 0);">{{storeinfo.rate}}</span>
        <span style="font-size:12px;">&nbsp;&nbsp;月售{{storeinfo.orderamount}}单</span><br>
        <span style="font-size:10px;">起送价:{{storeinfo.qisongjia}}元 / 配送费约{{storeinfo.peisongfei}}元</span>
    </div>
    </div>
</template>
<script>
import star from './star.vue'
export default {
    components:{
        star
    },
    props:['storeinfo'],
    methods:{
        gostore:function(){
            this.$emit('gostore',this.storeinfo.name)
        }
    }
}
</script>
<style scoped>
.store{
    padding-top: 5%;
    height: 20%;
    width:100%;
    
}
.shopimg{
    width:25%;
    height: 100%;
    float:left;
    padding-left: 2%;
}
.shopinfo{
    margin-left: 30%;
}
</style>