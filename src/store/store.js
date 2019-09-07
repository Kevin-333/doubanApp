import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
Vue.use(Vuex)
export var store=new Vuex.Store({
    state:{
        all:{}
    },
    mutations:{
        
        axiosmutitions(state,payload){
            state.all=payload;
        }
    },
    actions:{
        actionsfun(storeobj){
            axios({
                url:"/all",
                method:"get"
            }).then((ok)=>{
                // 把请求过来的数据传递给mutitons
                storeobj.commit("axiosmutitions",ok.data)
            })
        }
    }
})