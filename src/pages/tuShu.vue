<template>
    <div>
        <hea></hea>
       <huadong :mover="book1" texnav="最受关注书 | 虚构类"></huadong>
       <huadong :mover="book2" texnav="最受关注书 | 非虚构类"></huadong>
       <huadong :mover="book3" texnav="豆瓣纸书"></huadong>
       <faxian :goodM="goodb" fnav="发现好书"></faxian>
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
            book:[],
            goodb:[],
            fenlei:[]
        }
    },
    computed: {
        book1(){
            let temp=this.book.filter((v,i)=>{
                if(i<5){
                    return this.book[i]
                }
            })
            return temp
        },
        book2(){
            let temp=this.book.filter((v,i)=>{
                if(i>=2&&i<5){
                    return this.book[i]
                }
            })
            return temp
        },
        book3(){
            let temp=this.book.filter((v,i)=>{
                if(i>=4){
                    return this.book[i]
                }
            })
            return temp
        }
    },
    created() {
        this.axios({
            url:'/tushu',
            method:'get',
        }).then((ok)=>{
            this.book=ok.data.books;
            this.goodb=ok.data.goodBook;
            this.fenlei=ok.data.fenlei;

        })
    },

    
}
</script>
<style scoped>
    
</style>