<template>
  <div class="item-index">{{ shownIndex + 1 }}</div>
        <div class="item-content">
               <h3>{{ todoItem.title }}</h3>
        </div>
        <div>
          <button  class="buttonmore" @click="showDetails()">more...</button>
          
          <DetailModal :id="todoItem._id" v-if="showModal" @closeModal="showModal= false" />
        </div>
</template>

<script>
import DetailModal from './DetailModal.vue';
export default {
    name:'TodoItem',
    props:['todoItem', 'shownIndex'],
    components:{
        DetailModal ,
    },
    data(){
        return{
            showModal: false,
        }
    },
    methods: {
    showDetails() {
      this.showModal = true;
    },
  },
}
</script>

<style>

.item-index {
  font-size: 20px;
  font-weight: bold;
  color: #555;
  margin-right: 20px;
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
.item-content {
  flex-grow: 1;
}

.item-content h3 {
  margin: 0;
  font-size: 22px;
  color: #333;
}

button:hover {
  background-color: #acb1b6;
}
</style>