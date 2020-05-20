<template>
   <span class="star">
       <i v-for="n in 5" :key="n" class="iconfont icon-xing1" ></i>
    <span class="shadow" v-bind:style="{width:width+'%'}"></span>   
    </span> 
</template>
<script>
export default {
    props:['rate'],
    computed:{
        width:function(){
            return (5-this.rate)/5*100
        }
    }
}
</script>
<style scoped>
.star{
    color:rgb(241, 207, 12)
}
span{
    display: inline-block;
    position: relative;
    margin: 0;
}
i{
    font-size: 16px;
}
.shadow{
    display: inline-block;
    position: absolute;
    right:0;
    height: 100%;
    z-index:100;
    background-color: rgb(255, 255, 255);
}
</style>