<template>
  <div id="app">
    <p>
    <button class="opt" @click="showinfo = !showinfo ,showtodo=false">{{ showinfo ? 'Hide Info' : 'Show Info' }}</button>
    <button class="opt" @click="showtodo = !showtodo , showinfo=false">{{ showtodo ? 'Hide ToDo' : 'Show ToDo' }}</button>
    </p>
     <apiinfo v-if="showinfo"/>
    <todolistAll v-if="showtodo"/>
  </div>
</template>

<script>
import apiinfo from './components/apiinfo'
import todolistAll from './components/todolistAll'

export default {
  name: 'App',
  data() {
    return {
      showinfo: false,
      showtodo:false
    };
  },
  components: {
    apiinfo,todolistAll,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.opt {
  width: 100px;
  height: 40px;
  background-color: #666b67;
  border: none;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 12px;
}
button:hover.opt {
  background-color: #818167;
}
body{
  background: #d1d6db;
  position: relative;

}
</style>