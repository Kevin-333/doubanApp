<template>
    <div class="box">
        <img src="../../static/img/down.png" >
        <div class="left">
            <h1>豆瓣<span>写了日记</span></h1>
            <p class="riqi">2019-09-01 19:30:41</p>
            <div class="content">
                <h2>豆瓣App 4.12.0 主要更新</h2>
                <p>- 可以写读书笔记了，同时支持编辑。随时随地，摘录怦然心动的段落，写下阅读时的随感。来写笔记吧，可以写读书笔记了，同时支持编辑。随时随地，摘录怦然心动的段落，写下阅读时的随感。来写笔记吧，你你...</p>
            </div>
            <div class="dibu">
                <span><img src="https://img3.doubanio.com/f/talion/7a0756b3b6e67b59ea88653bc0cfa14f61ff219d/pics/card/ic_like_gray.svg" alt=""><b>4</b></span>
                <span><img src="https://img3.doubanio.com/f/talion/ac8a7e0d5f471480549c7abf45fc0fa4c3b4184f/pics/card/ic_comment.svg" alt=""><b>0</b></span>
                <span><img src="https://img3.doubanio.com/f/talion/8604ef3950b947d55406e2a6f5cf6ca7f0b934e3/pics/card/ic_retweet_gray.svg" alt=""><b>1</b></span>
                <span><img src="https://img3.doubanio.com/f/talion/be268c0a1adb577c8dfdcfbe48c818af3983ed62/pics/card/more.svg" alt=""></span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .box{
        widows: 100%;
        margin: .2rem;
        overflow: hidden;
        border-bottom: 1px solid #ddd;
        padding-bottom: .24rem;
    }
    .box>img{
        width: .48rem;
        border-radius: 50%;
        float: left;
    }
    .left{
        float: right;
        width: 2.7rem;
    }
    .left h1{
        font-size: .18rem;
        color: #494949;
        margin-top: .08rem;
    }
    .left h1 span{
        color: #aaa;
        font-weight: 100;
    }
    .riqi{
        font-size: .14rem;
        margin-top: .06rem;
        color: #aaa;
    }
    .content{
        margin: .1rem 0 .2rem;
        padding: .15rem;
        border-radius: .02rem;
        border: .01rem solid #d8d8d8;
    }
    .content>h2{
        font-size: .17rem;
        font-weight: 500;
        color: #494949;
        margin-bottom: .05rem;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .content>p{
        height: .48rem;
        font-size: .12rem;
        line-height: .16rem;
        color: #aaa;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .dibu span{
        display: inline-block;
        margin-right: .2rem;
    }
    .dibu span:last-child{
        float: right;
        margin: 0;
        margin-top: .06rem;
    }
    .dibu img{
        width: .24rem;
        float: left;
    }
    .dibu b{
        font-weight: 100;
        font-size: .16rem;
        color: #ccc;
        margin-left: .06rem;
    }
</style>