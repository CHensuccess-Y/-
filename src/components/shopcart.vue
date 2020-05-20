<template>
    <footer class="cart">
        <div v-if="cartitem.length!=0" class="foodsform">
            <ul>
                <li v-for="item in cartitem" :key="item.key">
                    {{item.foodname}}
                    <span style="display:inline-block;float:right">{{item.foodamount}}</span>
                </li>
            </ul>
        </div>
        <div :class="{canpay:canpay,cannot:true}">
            <span style="display:inline-block;position:absolute;bottom:-40%" >
                <svg class="icon" aria-hidden="true" style="width:1em;heigth:1em;vertical-align: -1em;">
                    <use xlink:href="#icon-gouwuche1"></use>
                </svg>
            </span>
            <div style="display:inline-block;margin-left:15%;">
            <span style="display:inline-block;font-weight:900;color:white;font-size:20px;" id='info'>
                &nbsp;￥{{totalprice}}</span><br>
            <span style="font-size:13px;color:rgb(196, 196, 196);">    
                另需配送费￥{{peisongfei}}元
            </span>
            </div>
            <span style="display:inline-block;text-align:center;float:right;height:100%;width:30%;padding-top:4%;color:white;font-size:15px;background-color:rgb(111, 127, 158)" v-if="!canpay">
                ￥{{qisongfei}}元起送
            </span>
            <span style="display:inline-block;text-align:center;float:right;height:100%;width:30%;padding-top:4%;color:white;font-size:15px;background-color:rgb(98, 228, 93)" v-if="canpay">
                下单
            </span>
        </div>
    </footer>
</template>
<script>
import { mapGetters, mapMutations} from 'vuex';
export default {
    data:function(){
        return {
            
            
        }
    },
    props:['peisongfei','qisongfei','storename'],
    computed:{
        ...mapGetters(['cartitem']),
        totalprice:function(){
            let temp=0;
            for(let i=0;i<this.cartitem.length;i++)
                temp+=this.cartitem[i].price*this.cartitem[i].foodamount;
            if(temp==0)return temp;
            else return temp+this.peisongfei;
        },
        canpay:function(){
            if(this.totalprice>this.qisongfei)return true;
            else return false;
        }
    },
    methods:{
        ...mapMutations(['changeindexofstore'])
    },
    created:function(){
        console.log(this.storename+'shopcart');
        this.changeindexofstore(this.storename);
    }
}
</script>
<style scoped>
ul{ padding:0;margin:0;list-style:none}
li{ padding:2% 1%;margin:0;list-style:none}
.cart{
    z-index: 200;
    
    position: fixed;
    bottom: 0;
    width:100%;
    height: 6%;
}
.foodsform{
    position: absolute;
    bottom: 100%;
    width: 100%;
    max-height: 200%;
    overflow: scroll;
    background-color: rgb(216, 238, 238);

}
.icon {
       width: 3em; height: 3em;
       vertical-align: -1em;
       fill: currentColor;
       overflow: hidden;
       font-size: 2em;
    }
.cannot{
    padding-left:10% ;
    background-color:rgb(66, 81, 110);
    height: 100%;
}
.cannot info{
    width:10%;
    height: 30%;
}
</style>