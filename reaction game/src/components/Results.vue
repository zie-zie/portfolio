<template>
  <p>reaction Time: {{score}} </p>
  <p>{{rank}}</p>
</template>

<script>
export default {
    props:['score'],
    data(){
        return{
            rank:null

        }
    },
 mounted(){
    if(this.score <250){
        this.rank="alii bood"
    }
    else if(this.score <450){
        this.rank="bad nist"
    }
    else {
        this.rank="halazooonnn"
    }
 }
}
</script>

<style>
.rank{
    font-size:1.4em ;
    color: rgb(7, 77, 77);
    font-weight: bold;
}

</style>