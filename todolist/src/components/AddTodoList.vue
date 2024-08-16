<template>

  <div class="add">
    <CloseButton @closebutton="backpage"/>
    <h1 style="margin-top: 0%;">Add New Todo</h1>
    <AddItem />
  </div>
</template>

<script>
import AddItem from './AddItem.vue';
import CloseButton from './CloseButton.vue';

export default {
  components: {
    AddItem,CloseButton,
  },
  methods:{
    backpage(){
    this.$router.push('/App.vue');
    }
  },
};
</script>


<style>
.add{
 
  background-color: #ffffff;
    padding: 30px;
    border-radius: 12px;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
    max-width: 500px;
    max-height: 400px;
    margin: 40px auto;
    font-family: 'Roboto', sans-serif;
    transition: box-shadow 0.3s ease;
}
 
.add:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  }

</style>