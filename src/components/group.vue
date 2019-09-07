<template>
    <div class="box">
        <h3>{{xiaozu1}}</h3>
        <div class="zbox" v-for="(v,i) in xiaozu" :key="i">
            <div class="aaa">
                <img :src="v.images.small" alt="">
                <h3>{{v.title}}</h3>
                <span>20005人</span>
            </div>
            <p><span>{{v.group_topic.time}}</span>{{v.group_topic.title}}</p>
        </div>
        <p>{{xiaozu2}}</p>
    </div>
</template>
<script>
export default {
    props:{
        
        xiaozu:{
            type:Array
        },
        xiaozu1:{
            type:String
        },
        xiaozu2:{
            type:String
        }
    }

}
</script>
<style scoped>
    .box{
        width:100%;
        padding: .2rem;
    }
    .box>h3{
        font-size: .18rem;
        font-weight: 400;
        color: #111;
    }
    .aaa{
        padding: .2rem 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .aaa>img{
        width: .48rem;
        height: .48rem;
    }
    .aaa>h3{
        font-weight: 100;
        width: 2rem;
        font-size: .18rem;
        color: #111;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .aaa>span{
        color: #ccc;
        font-size: .15rem;
        
    }
    .zbox>p{
        width: 100%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .box>p{
        margin: .2rem 0;
        font-size: .16rem;
        text-align: center;
        color: #42bd56;
    }
</style>