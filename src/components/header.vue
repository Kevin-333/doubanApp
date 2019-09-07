<template>
    <div class="fbox">
        <div class="box">
            <h2><router-link to="/">豆瓣</router-link></h2>
            <div class="navs">
                <router-link to="/dianYing">电影</router-link>  
                <router-link to="/tuShu">图书</router-link>  
                <router-link to="/guangBo">广播</router-link>  
                <router-link to="/xiaoZu">小组</router-link>
                <router-link to="/sousuo"><img src="(../../static/img/sousuo.png" alt=""></router-link>
            </div>
        </div>
                
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .fbox{
        width: 100%;
        height: 0.6rem;
    }
    .box{
        width: 100%;
        height: 0.6rem;
        background: white;
        border-bottom:1px solid #f3f3f3; 
        display: flex;
        padding: 0 0.2rem;
        justify-content: space-between;
        position: fixed;
        z-index: 999;
    }
    .box h2 a{
        color: #00b600;
        font-size: 0.3rem;
        line-height: 0.6rem;
        font-weight: 900;
    }
    .box a{
        line-height: 0.6rem;
        font-size: 0.16rem;
    }
    .box img{
        width: 0.28rem;
        margin: .22rem 0 0;
    }
    .navs{
        width: 2rem;
        display: flex;
        justify-content: space-between;
    }
</style>