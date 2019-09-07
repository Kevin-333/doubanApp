<template>
    <div>
        <hea></hea>
        <img src="../../static/img/loading_green.c0f9be0.gif" v-if="arrdata.length<=0">
        <div v-else>
            <div class="qiTaa">
                <a href="#">影院热映</a>
                <a href="#">欧美新碟榜</a>
                <router-link to="/reg">注册账号</router-link>
                <router-link to="/login">登录豆瓣</router-link> 
            </div>
            <call v-for="(v,i) in arrdata" :key="i" 
            :idd="i"
            :hrefs="v.adapt_url"
            :tit="v.title"
            :text="v.content"
            :imgurl="v.image"
            :tempa="v.category_name"
            :tempb="v.category_name"
            ></call>
        </div>
    </div>
</template>
<script>
import hea from '../components/header'
import call from '../components/shouyecall'
$(document).ready(()=>{
   
})
export default {
    components:{
        hea,
        call
    },
    data(){
        return {
            arrdata:[]
        }
    },
    created() {
        this.axios({
            url:'/shouye',
            method:'get',
        }).then((ok)=>{
            this.arrdata=ok.data.shouye
        })
    },
}
</script>
<style scoped>
    img{
        display: block;
        width: 1.5rem;
        margin: 0 auto;
    }
   .qiTaa{
       width: 100%;
       padding: 0.2rem;
       display: flex;
       flex-wrap: wrap;
       justify-content: space-between;
   }
    .qiTaa a{
        display: block;
        width: 48%;
        height: 0.5rem;
        font-size: 0.16rem;
        line-height: 0.5rem;
        color: #494949;
        background: #f6f6f6;
        text-align: center;
        margin-bottom: 0.1rem;
    }
</style>