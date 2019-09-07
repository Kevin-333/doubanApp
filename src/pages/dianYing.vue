<template>
    <div> 
       <hea></hea>
       <huadong :mover="mover1" texnav="影院热映"></huadong>
       <huadong :mover="mover2" texnav="免费在线观影"></huadong>
       <huadong :mover="mover3" texnav="新片速递"></huadong>
       <faxian :goodM="goodM" fnav="发现好电影"></faxian>
       <fenlei :fenlei="fenlei"></fenlei>
       <foot></foot>
    </div>
</template>
<script>
import hea from '../components/header';
import huadong from '../components/huadong';
import faxian from '../components/faxian';
import fenlei from '../components/fenlei';
import foot from '../components/foot';

export default {
    components:{
        hea,
        huadong,
        faxian,
        fenlei,
        foot
    },
    data() {
        return {
            mover:[],
            goodM:[],
            fenlei:[]
        }
    },
    computed: {
        mover1(){
            let temp=this.mover.filter((v,i)=>{
                if(i<10&&i!=1){
                    return this.mover[i]
                }
            })
            return temp
        },
        mover2(){
            let temp=this.mover.filter((v,i)=>{
                if(i>=10&&i<20){
                    return this.mover[i]
                }
            })
            return temp
        },
        mover3(){
            let temp=this.mover.filter((v,i)=>{
                if(i>=20&&i<30){
                    return this.mover[i]
                }
            })
            return temp
        }
    },
    created() {
        this.axios({
            url:'/dianying',
            method:'get',
        }).then((ok)=>{
            this.mover=ok.data.movie;
            this.goodM=ok.data.faxianhaodianying;
            this.fenlei=ok.data.fenlei;
            console.log(ok.data.movie)
        })
    },
}
</script>
<style scoped>
    
</style>