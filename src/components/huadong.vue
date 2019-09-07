<template>

<div class="fbox">
    <p>{{texnav}}<span>更多</span></p>
    <div class="box">     
        <div class="bosCla" v-for="(v,i) in mover" :key="i">
            <img :src="v.images.small" alt="">
            <p>{{v.title}}</p>
            <score :elmScore="v.rating.average"></score>
        </div>
    </div>
</div>   
</template>
<script>
import score from './score';
export default {
    components:{
        score       
    },
    props:{
        texnav:{
            type:String,
            required:true
        },
        mover:{
            type:Array
        }
    },
    
}
</script>
<style scoped>
    .fbox>p{
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
        width: 3.35rem;
        margin: 0 auto;
        display: flex;
        overflow: auto;
        flex-shrink: 0;
    }
    .bosCla{
        margin-right: 0.1rem;
    }
    .bosCla img{
        display: inline-block;
        width: 1.1rem;
        height: 1.5rem;
    }
    .bosCla p{
        font-size: 0.14rem;
        color: black;
        text-align: center;
        width: 1.1rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
</style>