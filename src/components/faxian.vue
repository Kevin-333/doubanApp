<template>
<div class="fbox">
    <p>{{fnav}}<span>更多</span></p>
    <ul class="box">
        <li v-for="(v,i) in goodM" :key="i">
            <a href="#" :style="{color:v.color}" v-if="!v.line">{{v.title}}</a>
        </li>          
    </ul>
</div>
    
</template>
<script>
export default {
    props:{
        fnav:{
            type:String,
            required:true
        },
        goodM:{
            type:Array
        }
    }
}
</script>
<style scoped>

    .fbox>p{
        height: .4rem;
        font-size: .16rem;
        line-height: .4rem;
        color: black;
        padding: 0 0.2rem;
    }
    .fbox>p>span{
        float: right;
        color:#42bd56;
    }
    .box{
        /* display: flex; */
        white-space: nowrap;
        overflow: auto;
    }
    
    .box li{
        display: inline-block;
        height: 0.6rem;
        border: 1px solid rgb(255, 172, 45);
        border-radius: .05rem;
        line-height: 0.6rem;
        padding: 0 0.3rem;
        margin-left: 0.16rem;
        margin-bottom: 0.1rem;
    }
    .box li:empty{
        widows: 100%;
        height: .01rem;
        display: block;
        border: none;
        margin: 0;
        padding: 0;
    }
</style>