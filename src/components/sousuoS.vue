<template>
    <div class="box">
        <a :href="hrefs">
            <h1 :style="color">{{tit}}</h1>
            <p>{{text}}</p>
        </a>
        
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
        color:{
            type:String,
            required:true
        }
    }   
}
</script>
<style scoped>
    .box{
        width: 31%;
        height: 0.8rem;
        text-align: center;
    }
    .box h1{
        font-weight: 400;
        font-size: .24rem;
        line-height: .28rem;
        margin-top: 0.16rem;
    }
    .box p{
        color: #999;
        font-size: .14rem;
    }
</style>