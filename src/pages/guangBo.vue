<template>
    <div>
        <hea></hea>
        <openApp></openApp>
        <userData></userData>
        <videoUnit v-for="(v,i) in arr" :key="i"></videoUnit>
        <foot></foot>
    </div>
</template>
<script>
import hea from '../components/header';
import openApp from '../components/openApp';
import userData from '../components/userData';
import videoUnit from '../components/videoUnit';
import foot from '../components/foot';
export default {
    components:{
        hea,
        openApp,
        userData,
        videoUnit,
        foot
    },
    data() {
        return {
            arr:["1","1","1","1","1","1","1"]
        }
    },
}
</script>
<style scoped>
    
</style>