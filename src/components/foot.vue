<template>
    <div class="box">
        <div class="ball">
             <img src="../../static/img/down.png" >
             <p>豆瓣</p>
             <span>我们的精神角落</span>
        </div>
        <a href="#"><p>去 App Store 免费下载 iOS 客户端</p></a>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .ball{
        width: 1.6rem;
        height: .5rem;
        margin: 0 auto;
        margin-bottom: .25rem;
    }
    .ball img{
        width: .5rem;
        height: .5rem;
        float: left;

    }
    .ball p{
        font-size: .24rem;
        float: right;
        margin-right: .5rem;
        margin-top: .05rem;

        margin-bottom: .02rem;
    }
    .ball span{
        display: block;
        font-size: .14rem;
        float: right;
    }
    .box p{
        text-align: center;
        color: #42bd56;
       
    }
    .box{
         margin: .6rem 0;
    }
</style>