<template>
<div class="fBox">
    <router-link :to="{name:'details',params:{id:idd}}">
        <div class="box">
            <div class="left">
                <h3>{{tit}}</h3>
                <p>{{text}}</p>               
            </div>
            <div class="right">
                <img :src="imgurl" alt="">                
            </div>
        </div>
        <p>{{tempa}}<span>本栏目来自&nbsp;{{tempb}}</span></p>
    </router-link>
    
</div>
    
</template>
<script>
export default {
    props:{
        hrefs:{
            type:String,
            required:true
        },
        
        tit:{
            type:String,
            required:true
        },
        text:{
            type:String,
            required:true
        },
        imgurl:{
            type:String,
            required:true
        },
        tempa:{
            type:String,
            required:true
        },
        tempb:{
            type:String,
        },
        idd:{
            required:true
        }
        
    }
}
</script>
<style scoped>
    .fBox{
        border-bottom:1px solid #e3e3e3;
        margin: 0 0.2rem 0.2rem;
    }
    .box{
        display: flex;
        justify-content: space-between;              
    }
    .left{
        width: 2.16rem;
    }
    
    .left h3{
        margin-bottom: .16rem;
        font-size: .16rem;
        line-height: 0.2rem;
        font-weight: 500;
        color: #494949;
    }
    .left p{
        margin-bottom: .16rem;
        font-size: .12rem;
        height: 0.38rem;
        overflow: hidden;
    }
    
    .right{
        width: 0.85rem;
    }
    .right img{
        display: block;
        width: 100%;
        height: 1rem;
    }
    .fBox>a>p{
        margin: .16rem 0;
        font-size: .12rem;
        color: #ccc;
    }
    .fBox span{
        float: right;
    }
    
     
</style>