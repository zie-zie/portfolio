<template>
   <div class="block" v-if="showBlock" @click="stopTimer">click me c: </div>
</template>

<script>
export default {
    props:['delay'],
    data(){
        return{
        showBlock:false,
        timer:null,
        reactionTimer:0
        }

    },
    mounted(){
        setTimeout(()=>{
            this.showBlock=true
            this.startTimer()
        },this.delay )
    },
    methods:{
        startTimer(){
            this.timer= setInterval(()=>{
                this.reactionTimer+=10
            },10)

        },
        stopTimer(){
            clearInterval(this.timer)
            this.$emit('end',this.reactionTimer)
            console.log(this.reactionTimer)

        }
    }

}
</script>

<style>
.block{
    width: 400px;
    border-radius: 20px;
    background: rgb(122, 212, 170);
    color: white;
    text-align: center;
    padding: 100px 0;
    margin: 40px auto;
}
</style>