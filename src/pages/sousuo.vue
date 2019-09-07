<template>
    <div>
        <header>
            <span @click="back()">关闭</span>
            <div class="mui-input-row mui-search tinput">
                <input type="search" class="mui-input-clear mui-icon mui-icon-weixin" placeholder="">
            </div>
        </header>
        <div class="zhongBu">
            <sou v-for="(v,i) in arrdata" :key="i"
            :hrefs="v.href"
            :tit="v.tit"
            :text="v.text"
            :color="v.color"

            ></sou>
        </div>
        <div class="foot">          
            <router-link to="/reg">注册账号</router-link>
            <router-link to="/login">登录豆瓣</router-link> 
            <a href="#">使用桌面版</a>
            <a href="#">使用豆瓣APP</a>
        </div>
    </div>
</template>
<script>
import sou from '../components/sousuoS'

export default {
    components:{
        sou
    },
     data(){
        return {
            arrdata:[]
        }
    },
    methods: {
        back(){
             this.$router.go(-1)
        },
    },
    created() {
        this.axios({
            url:'/sousuo',
            method:'get',
        }).then((ok)=>{
            this.arrdata=ok.data.sousuo
        })
    },
}
</script>
<style scoped>
    header{
        width: 100%;
        height: 0.6rem;
        border-bottom:1px solid #f3f3f3; 
        display: flex;
        padding: .1rem 0.2rem;
        justify-content: space-between;
    }
    header span{
        color: #00b600;
        font-size: 0.18rem;
        line-height: 0.4rem;
    }
    header input{
        width: 2.8rem;
        height: .4rem;
        background: #f3f3f3;
    }
    .mui-placeholder{
        height: .4rem;
        top: .07rem;
    }
    .zhongBu{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        padding: 0 0.2rem;
    }
    .foot{
        width: 3.35rem;
        height: 1rem;
       margin: 0.16rem auto 0;
        border-bottom: 1PX solid #eee;
        border-right: 1PX solid #eee;
       display: flex;
       flex-wrap: wrap;
       justify-content: space-between;
    }
    .foot a{
        width: 50%;
        font-size: 0.14rem;
        line-height: 0.5rem;
        color: #42bd56;
        text-align: center;
        border-top: 1PX solid #eee;
        border-left: 1PX solid #eee;
    }
</style>