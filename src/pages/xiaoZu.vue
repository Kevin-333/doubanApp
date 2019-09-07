<template>
    <div>
        <hea></hea>
        <userData></userData>
        <group :xiaozu="xiaozu.xiaozua" xiaozu1="租房找室友" xiaozu2="更多相关小组"></group>
        <group :xiaozu="xiaozu.xiaozub" xiaozu1="来聊五块钱" xiaozu2="来聊五块钱"></group>
        <group :xiaozu="xiaozu.xiaozuc" xiaozu1="买买买" xiaozu2="更多相关小组"></group>
        <foot></foot>
    </div>
</template>
<script>
import hea from '../components/header';
import userData from '../components/userData';
import group from '../components/group';
import foot from '../components/foot';
export default {
    components:{
        hea,
        userData,
        group,
        foot
    },
    methods: {
        fun(){
           
        }
    },
    created() {
        this.$store.dispatch("actionsfun")
        console.log(this.xiaozu.xiaozua)
    },
    mounted() {
        console.log(this.xiaozu.xiaozua)
    },
    computed:{
        xiaozu(){
            return this.$store.state.all
        }
    }
}
</script>
<style scoped>
    
</style>