<template>
<div>
    <div v-if="list&&showmodal" :key="list._id" >
      <div class="modal" >
        <div><button @click="showmodal=!showmodal" class="closemodalbuttom">X</button></div>
        <h2>Details</h2>
      <p>{{ list.description }}</p>
    </div>
  </div>

</div>
</template>

<script>
export default {
  name: 'detailsList',
  props: ['idnumber'],
  data() {
    return {
      list: null,
      showmodal:true
    };
  },
  watch: {
    idnumber: {
      immediate: true,
      handler(newVal) {
        this.fetchDetails(newVal);
      },
    },
  },
  methods: {
    fetchDetails(id) {
      fetch('http://localhost:3000/api/v1/todo')
        .then((res) => res.json())
        .then((data) => {
          this.list = data.todos.find(item => item._id === id);
          console.log('Fetched data:',this.list );
        })
        .catch((err) => console.error('Error fetching data:', err));
    },
    
    
  },
};
</script>
<style>
.modal {
  background: rgb(211, 233, 235);
  padding: 20px;
  border-radius: 8px;
  width: 400px;
  max-width: 100%;
  text-align: center;
  z-index: 1;
  position: fixed; 
  left: 50%;
  transform: translate(-50%, -50%); 
}

.closemodal {
  color: rgb(17, 20, 22);
  width: 30px;
  height: 30px;
  background: white;
  border: none;
  font-size: 18px;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  border-radius: 20%;
}

.closemodal:hover {
  background: #ccc;
}
</style>