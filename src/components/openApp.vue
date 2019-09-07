<template>
    <div class="box">
        <p>
            打开App, 浏览更多
            <span>
                <button>极速下载</button>
                <button>打开</button>
            </span>
        </p>
        
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .box{
        background: url(../../static/img/promotion_bg.b7abee9.jpg) no-repeat;
        background-size: 100%;
        width: 100%;
        height: .8rem;
        padding: 0 .2rem;
        overflow: hidden;
    }
    .box p{
        width: 100%;
        height: .3rem;
        padding-left: .18rem;
        margin-top: .25rem;
        font-size: .14rem;
        line-height: .3rem;
        color: #2ca532;
    }
    .box p span{
        float: right;
    }
    .box span button:first-child{
        height: .3rem;
        padding: 0 .16rem;
        line-height: .3rem;
        color: #fff;
        background: #42bd56;
        border: none;

    }
    .box span button:last-child{
        height: .3rem;
        padding: 0 .16rem;
        line-height: .3rem;
        color: #42bd56;
        background: transparent;
        border-color: #42bd56;
    }
</style>