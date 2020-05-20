import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    stores:null,
    firstcreated:true,
    assignedstore:null,
    allitems:[{storename:null,items:[]}],
    indexforstore:0        //这边购物车信息存在本地客户端 
  },
  getters:{
    cartitem(state){
      return state.allitems[state.indexforstore].items
    }
  },
  mutations: {
    changeindexofstore(state,payload){
      let flag=true;
      console.log(payload);
      for(let i=0;i<state.allitems.length;i++){
        if(state.allitems[i].storename==payload)
        {
          console.log('same one');
          state.indexforstore=i;flag=false;break;}
      }
      if(flag){
        
        state.indexforstore=state.allitems.length;
        state.allitems.push({storename:payload,items:[]})
        console.log(state.allitems);
        console.log(state.indexforstore+'index');
      }

    },
    initial(state,payload){
      state.stores=payload.shopinfo;
    },
    changefirst(state){
      state.firstcreated=false;
    },
    changestore(state,payload){
      state.assignedstore=payload.shopinfo;
      console.log(state.assignedstore.name+'changestore');
    },
    changeshopcart(state,payload){
      switch (payload.case){
        case  'addfoodsort':state.allitems[state.indexforstore].items.push(payload.item);console.log(state.allitems[state.indexforstore].items); break;
        case 'addfoodamount':state.allitems[state.indexforstore].items[payload.index].foodamount++;console.log(state.allitems);break;
        case 'reducefoodsort':state.allitems[state.indexforstore].items.splice(payload.index,1);break;
        case 'reducefoodamount':state.allitems[state.indexforstore].items[payload.index].foodamount--;break;
      }
    }
  },
  actions: {
    initialstores({commit}){
      axios.get('/shopinfo'
    ).then(function(res){
        commit('initial',res.data);
        console.log(res.data.shopinfo);
    }).catch(function (error) {
        console.log(error);
    });
    },       //待会写promise 思考promise有什么用 为什么用它来封装  仅仅是为了编程同步化？没必要
    getstoreinfo({commit},payload){
      console.log(payload);
      axios.get('/assignedshopinfo'
      ).then(function(res){
        console.log(res.data.shopinfo.name+'getstoreinfo');
        commit('changestore',res.data);
          
      }).catch(function (error) {
          console.log(error);
      });
    },
 
  addfood({state,commit},payload){
    let flag=true;
      for(let i=0;i<state.allitems[state.indexforstore].items.length;i++){
        if(state.allitems[state.indexforstore].items[i].foodname==payload.name){ //虽然action不能修改状态 但应该能读取
           commit('changeshopcart',{case:'addfoodamount',index:i})
           flag=false;
        }
      }
    if(flag){
          let x={
            foodname:payload.name,
            foodamount:1,
            price:payload.price
          };
          commit('changeshopcart',{case:'addfoodsort',item:x})
        }
      },
    reducefood({state,commit},payload){
      
          for(let i=0;i<state.allitems[state.indexforstore].items.length;i++){
            if(state.allitems[state.indexforstore].items[i].foodname==payload.name&&state.allitems[state.indexforstore].items[i].foodamount>1) //虽然action不能修改状态 但应该能读取
               commit('changeshopcart',{case:'reducefoodamount',index:i});
            else if(state.allitems[state.indexforstore].items[i].foodname==payload.name)
               commit('changeshopcart',{case:'reducefoodsort',index:i});
          }
        
          }
},

  modules: {
  }
})
