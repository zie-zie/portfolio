<template>
  <div class="container">
    <h1>{{ title }}</h1>
    <ul>
      <li v-for="(list, index) in todolist" :key="list._id" class="list-item">
        <div class="item-index">{{ index + 1 }}</div>
        <div class="item-content">
          <h3>{{ list.title }}</h3>
        </div>
        <div>
          <button  class="buttonmore" @click="showDetails(list._id)">more...</button>
          
          <detailsList v-if="idnumber === list._id" :idnumber="idnumber" :key="idnumber"/>
        </div>
      </li> 
    </ul>
  </div>
</template>

<script>
import detailsList from './detailsList.vue';

export default {
  name: 'todolistAll',
  data() {
    return {
      todolist: [],
      title: 'Todo List',
      idnumber: null,
    };
  },
  mounted() {
    fetch('http://localhost:3000/api/v1/todo')
      .then((res) => res.json())
      .then((data) => {
        console.log('Fetched data:', data);
        this.todolist = data.todos;
      })
      .catch((err) => console.error('Error fetching data:', err));
  },
  methods: {
    showDetails(id) {
      this.idnumber = id;
    },
  },
  components: {
    detailsList,
  },
};
</script>

<style>
body {
  font-family: Arial, sans-serif;
  background-color: #f0f0f0;
  margin: 0;
  padding: 0;
}

.container {
  width: 90%;
  max-width: 800px;
  margin: auto;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;
}

h1 {
  text-align: center;
  color: #333;
  margin-bottom: 20px;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.list-item {
  display: flex;
  align-items: center;
  padding: 15px;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
  transition: background-color 0.3s ease;
}

.list-item:hover {
  background-color: #b1d3d1;
}

.item-index {
  font-size: 20px;
  font-weight: bold;
  color: #555;
  margin-right: 20px;
}

.item-content {
  flex-grow: 1;
}

.item-content h3 {
  margin: 0;
  font-size: 22px;
  color: #333;
}
.buttonmore{
  width: 100px;
  height: 40px;
  background-color: #fff;
  border: none;
  color: rgb(0, 0, 0);
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 12px;
}

button:hover {
  background-color: #acb1b6;
}
</style>