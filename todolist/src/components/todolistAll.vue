<template>
  <div class="container">
    <h1>{{ title }}</h1>
    <ul>
      <li v-for="(todoItem, index) in todolist" :key="todoItem._id" class="list-item">
        <TodoItem :todoItem="todoItem" :shownIndex="index" />
      </li> 
    </ul>
  </div>
</template>

<script>

import TodoItem from './TodoItem.vue';

export default {
  name: 'todolistAll',

  data() {
    return {
      todolist: [],
      title: 'Todo List',
    };
  },
  mounted() {
    this.$router.push('/App.vue');
    fetch('https://todoapi.arjoni.de/api/v1/todo')
      .then((res) => res.json())
      .then((data) => {
        console.log('Fetched data:', data);
        this.todolist = data.todos;
      })
      .catch((err) => console.error('Error fetching data:', err));
  },

  components: {
  TodoItem,
  },
};
</script>

<style > 
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


</style>