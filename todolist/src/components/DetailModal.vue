<template>
    <div class="modal" >
          <CloseButton @closebutton="onCloseModal"/>
          <h2>Details</h2>
          <p>{{ list?.description }}</p>
    </div>
</template>
    
    <script>
    import CloseButton from './CloseButton.vue';
    export default {
      name: 'DetailModal',
      props: ['id'],
      components:{
       CloseButton,
      },
      data() {
        return {
          list: null,
        };
      },
      methods: {
        fetchDetails(id) {
          fetch('https://todoapi.arjoni.de/api/v1/todo')
            .then((res) => res.json())
            .then((data) => {
              this.list = data.todos.find(item => item._id === id);
              console.log('Fetched data:',this.list );
            })
            .catch((err) => console.error('Error fetching data:', err));
        },

        onCloseModal() {
          this.$emit('closeModal');
        }
      },
      mounted() {
        this.fetchDetails(this.id)
        },
      
    };
    </script>
    <style>
    .modal {
      background: rgb(223, 224, 224);
      padding: 20px;
      border-radius: 8px;
      width: 400px;
      max-width: 100%;
      text-align: center;
      z-index: 1;
      left: 50%;
      transform: translate(-50%, -50%); 
    top:200px ;
    left:  450px;
    position: absolute;
    }
    
    </style>