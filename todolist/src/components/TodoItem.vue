<template>
  <div class="item-index" :style="{ color: todoItem.cardColor }">{{ shownIndex + 1 }}</div>
        <div class="item-content">
               <h3>{{ todoItem.title }}</h3>
        </div>
    
        <div>
          <button  class="buttonmore" @click="showDetails()" v-if="!EditSelect" >more...</button>
          <DetailModal :id="todoItem._id" v-if="showModal" @closeModal="showModal= false" />

          <button @click="showMassage()" class="buttonmore"  v-if="!EditSelect" > Delete</button>
          <DeleteMassage  :id="todoItem._id" :title="todoItem.title"  v-if="showDelete"  @closeModal="showDelete= false" @DeleteSelectItem="DeleteSelectItem" />
          
          <button @click="showEdit()" class="buttonmore"  v-if="!EditSelect" >Edit</button>
          <EditItem :title="todoItem.title" :id="todoItem._id" :cardColor="todoItem.cardColor"
           :onDate="todoItem.onDate" :description="todoItem.description" v-if="EditSelect" @UpdateSelectItem="UpdateItem"/>
        </div>
</template>

<script>
import DeleteMassage from './DeleteMassage.vue';
import DetailModal from './DetailModal.vue';
import EditItem from './EditItem.vue';
export default {
    name:'TodoItem',
    props:['todoItem', 'shownIndex'],
    components:{
        DetailModal ,DeleteMassage,EditItem,
    },
    data(){
        return{
            showModal: false,
            showDelete:false,
            deleteItem:false,
            EditSelect:false,
        }
    },
    methods: {
    showDetails() {
      this.showModal = true;
    },
    showMassage(){
      this.showDelete=true;
      

    },
    DeleteSelectItem(){
      this.deleteItem=true;
      this.showDelete=false;
      this.$emit('changeData');
        },
      

    
    showEdit(){
      this.deleteItem=false;
      this.showDelete=false;
      this.EditSelect=true;
      

    },
    UpdateItem(){
     this.EditSelect=false;
     this.$emit('changeData');
        

    }
    
 
  },
}
</script>

<style>
.backmodal{
  background-color: #ffffff;
    width: 100vw;
    height: 100vw;
      z-index: 1;
     transform: translate(-50%, -50%); 
  
    left:  420px;
    position: absolute;
    opacity: 0.5;
   
}

.item-index {
  font-size: 20px;
  font-weight: bold;
  color: #555;
  margin-right: 20px;
}
.buttonmore{
  width: 60px;
  height: 35px;
  background-color: #fff;
  border: none;
  color: rgb(0, 0, 0);
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 12px;
}
.item-content {
  flex-grow: 1;
 margin-right: 10px;
  
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