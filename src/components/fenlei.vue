<template>
    <div class="fbox">
        <p>分类浏览</p>
        <div class="box">
            <a v-for="(v,i) in fenlei" :key="i" :href="v.href">{{v.title}}<span class="mui-icon mui-icon-arrowright"></span></a>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        
        fenlei:{
            type:Array
        }
    }
}
</script>
<style scoped>
    .fbox{
        width: 3.35rem;
        margin: 0 auto;
    }
    .fbox>p{
        height: .4rem;
        font-size: .16rem;
        line-height: .4rem;
        color: black;
    }
    .box{
        display: flex;
        flex-wrap: wrap;
        /* justify-content: space-between; */
    }
    .box a{
        width: 50%;
        height: .5rem;
        line-height: .5rem;
        color: #42bd56;
        border-top: 1px solid #eee;
        border-right: 1px solid #eee;
        border-left: none;
        text-indent: .2rem;
    }
    .box a span{
        float: right;
        line-height: .5rem;
        color: #ccc;
    }
</style>