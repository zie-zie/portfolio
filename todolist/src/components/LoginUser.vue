<template>
    <div class="backlogin"></div>
    <div class="contForm">
      <form class="loginform" @submit.prevent="handleSubmit">
        <label>Name: </label><input type="text" required v-model="name">
        <label>Pass: </label><input type="password" required v-model="pass">
        <button type="submit">Login</button>
      </form>
    </div>
  </template>
  
  <script>
  import { mapStores } from 'pinia';
  import { useLoginStore } from '../stores/LoginStore';
  export default {
    computed:{
    ...mapStores(useLoginStore)
  },
    data() {
      return {
        inputName:'',
        inputPass:'',
      };
    },
    methods: {
      handleSubmit() {
       
        if(
            this.name==this.LoginStoreStore.name && this.pass==this.LoginStoreStore.Pass
        ){     
            console.log('Name:','true');
            this.$emit('loginIsTrue');
        }
        else{ console.log('false');

        }
      
      }
    }
  };
  </script>
  
<style>
.backlogin{
    background-color: #ffffff;
    width: 154.5vw;
    height: 100vw;
     transform: translate(-50%, -50%);
    left:  420px;
    position: absolute;
    opacity: 0.5;
    
    
   
}

 input{
    width: calc(100% - 20px);
    padding: 12px;
    margin: 5px 0;
    border-radius: 8px;
    border: 1px solid #ccc;
    font-size: 16px;
    box-sizing: border-box;
    transition: border-color 0.3s ease, box-shadow 0.3s ease;
  }

.loginform{
    background-color: #e7e7e7;
    padding: 20px;
    width: 550px;
    height: 300px;
    margin: 20px auto;
    font-family: 'Roboto', sans-serif;
      z-index: 1;
      left: 50%;
      transform: translate(-50%, -50%); 
    top:400px;
    position: absolute;
    border-radius: 20px;
}

</style>