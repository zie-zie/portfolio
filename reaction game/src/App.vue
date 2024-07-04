<template>
<h1>Reactin timer</h1>
<button @click="start" :disabled="isplaying">play</button>
<!--<p v-if="showResalt">reaction: {{score}} ms </p>!-->
<Block v-if="isplaying" :delay="delay" @end="endGame"/>
<Results v-if="showResalt" :score="score"/>
</template>

<script>
import Block from './components/Block.vue'
import Results from './components/Results.vue'
export default { 
  name:"App",
  components:{Block,Results},
  data() {
    return{
      delay:null,
      isplaying:false,
      showResalt:false,
      score:null,

    }
  },

  methods:{
    start(){
      this.delay=2000 + Math.random()*5000
     this.isplaying=true
     console.log(this.delay)
      this.showResalt=false
      
    },
    endGame(reaction){
      this.score = reaction
      this.isplaying=false
      this.showResalt=true

    }
  }

}
</script>

<style>



#app{
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
color:#444;
margin-top: 60px;
 width:1000px;
  height:1000px;
  background: rgb(240, 223, 252);
  padding: 16px;
  margin: auto;


}
button{
  background: rgb(2, 91, 107) ;
color: white;
border: none;
padding: 8px 16px;
border-radius: 4px;
font-size: 16px;
letter-spacing: 1px;
cursor: pointer;
margin: 10px;
}
button[disabled]
{
  opacity:0.2;
  cursor: not-allowed;
}
body{
  background-image: url('@/../public/img1.jpg');
  background-position: center center;
 
}
</style>