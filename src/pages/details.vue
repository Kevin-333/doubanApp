<template>
    <div>
        <hea></hea>
        <openApp></openApp>
        <div>{{mover[id].title}}</div>
        <faxian :goodM="goodM" fnav="推荐的豆列"></faxian>
        <foot></foot>
    </div>
</template>
<script>
import hea from '../components/header';
import openApp from '../components/openApp';

import faxian from '../components/faxian';
import foot from '../components/foot';
export default {
    components:{
        hea,
        openApp,
        faxian,
        foot
    },
    data() {
        return {
            mover:[],
            goodM:[],
            id:0
        }
    },
    created() {
        this.id=this.$route.params.id
        this.axios({
            url:'/dianying',
            method:'get',
        }).then((ok)=>{
            this.mover=ok.data.movie;
            this.goodM=ok.data.faxianhaodianying;
        })
    },
}
</script>
<style scoped>

</style>