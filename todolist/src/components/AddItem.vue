<template>
    <div>
      
     <form @submit.prevent="handleSubmit">
          <label>TITLE: </label><input type="text" required v-model="inputTitle">
          <label>DESCRIPTION: </label><input type="text" v-model="inputDescription">
          <br>
          <label for="date">onDate: </label><input type="date" v-model="inputDate">
          <br><br>
         <input type="radio" value="Red" id="red" name="color" v-model="selectedColor"><label> red</label>&nbsp;
         <input type="radio" value="Green" id="green" name="color" v-model="selectedColor"><label> green</label>&nbsp;
         <input type="radio" value="Yellow" id="yellow" name="color" v-model="selectedColor"><label> yellow</label>
          <br><br>
         <button type="submit">add</button>
     </form>
   </div>
   </template>
   
   <script>
   import CloseButton from './CloseButton.vue';
   export default {
    name:'AddItem',
     data() {
       return {
         inputTitle: null,
         inputDescription: null,
         inputDate: null,
         selectedColor: null,
       };
     },
     components:{
      CloseButton,
     },
     methods: {
       handleSubmit() {
         let newList = {
           title: this.inputTitle,
           description: this.inputDescription,
           onDate: this.inputDate,
           color: this.selectedColor,
           isCompleted:false,
         };
   
         console.log('newList', newList);
   
         fetch('https://todoapi.arjoni.de/api/v1/todo', {
           method: 'POST',
           headers: { 'Content-Type': 'application/json' },
           body: JSON.stringify(newList),
         })
           .then((response) => response.json())
           .then((data) => {
             console.log('Success:', data);
             this.$router.push('/App.vue');
           })
           .catch((error) => {
             console.error('Error:', error);
           });
       },
     },
     
   };
   </script>
   
  
  <style>

  p {
    margin-bottom: 20px;
  }
  
  input[type="text"] {
    width: calc(100% - 20px);
    padding: 12px;
    margin: 5px 0;
    border-radius: 8px;
    border: 1px solid #ccc;
    font-size: 16px;
    box-sizing: border-box;
    transition: border-color 0.3s ease, box-shadow 0.3s ease;
  }
  
  input[type="text"]:focus {
    border-color: #1abc9c;
    box-shadow: 0 0 8px rgba(26, 188, 156, 0.3);
    outline: none;
  }
  
  label {
    font-size: 16px;
    color: #34495e;
    margin-right: 15px;
    font-weight: 500;
  }
  
  input[type="radio"] {
    margin-right: 5px;
    cursor: pointer;
  }
  
  input[type="radio"]:checked + label {
    color: #1abc9c;
    font-weight: bold;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  }
  input[type="radio"] {
    appearance: none;
    background-color: #f0f0f0;
    margin: 0;
    font: inherit;
    color: #1abc9c;
    width: 18px;
    height: 18px;
    border: 1px solid #ccc;
    border-radius: 50%;
    display: inline-block;
    position: relative;
    vertical-align: middle;
  }
  
  input[type="radio"]:checked::before {
    content: '';
    display: block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #1abc9c;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  
  button {
    width: 110px;
    height: 35px;
    background-color: #1abc9c;
    color: #000000;
    border: none;
    border-radius: 20px;
    font-size: 17px;
    cursor: pointer;
    transition: background-color 0.3s ease, box-shadow 0.3s ease;
  }
  button:hover {
    background-color: #0b795f;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    color: #ffffff;
  }
  </style>