<template>
    <header>
        <span><i class='iconfont icon-location'></i></span>
        <span>当前位置:</span>
            <span></span>
        <span class="register">登录/注册</span>
    </header>
</template>
<script>
export default {
    data:function(){
        return {
            location:'获取地理位置失败'
        }
    },
    created:function(){

    }
}
</script>
<style scoped>
header{
    height: 7%;
    background-color:hsla(213, 24%, 93%,1);
    color:hsla(213, 23%, 51%,1);
    border-bottom:1px solid hsla(132, 6%, 83%,1);
}
i{
    display: inline-block;
    padding:10px;
    font-size: 30px;
}
span{
    padding:5px;
}
.register{
    float: right;
    padding-top: 20px;
}
</style>