<template>
    <div class="sortview">
        <span v-for="item in sortitem" :key="item.key"><i :class="item.class" :style="{color:item.color}"></i><br>{{item.name}}</span>
    </div>
</template>
<script>
export default {
    data:function(){
        return {
            sortitem:[{class:'iconfont icon-dangao',name:'蛋糕',color:'hsl(6, 63%, 46%)',key:'1'},
            {class:'iconfont icon-meishi2',name:'快餐',color:'hsl(48, 100%, 51%)',key:'2'},
            {class:'iconfont icon-taiwanzhaji',name:'炸鸡',color:'hsl(6, 69%, 35%)',key:'3'},
            {class:'iconfont icon-weibiaoti--8',name:'美食',color:'hsl(23, 95%, 52%)',key:'4'}
           
            ] //这里到时从VUEx返回数据 VUEX用action异步请求数据
        }
    }
}
</script>
<style scoped>
.sortview{
    height: 18%;
    width:100%;
    background-color: hsla(0,0%,93%,1);
}
.sortview span{
    width: 25%;
    display: inline-block;
    text-align: center;
    font-size: 15px;
}
.sortview span i{
    font-size: 50px;
}
</style>