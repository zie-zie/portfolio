<template>
    <div class="del">
        {{ massage }} <b>{{ titleMass }}</b> 
        <div>
            <br>
            <button @click="DeleteTodo">Yes</button>
            <button @click="onCloseModal">Cancel</button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: ''
        },
        id: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            massage: 'Are you sure you want to delete?',
            titleMass: this.title,
        };
    },
    methods: {
        onCloseModal() {
            this.$emit('closeModal');
        },
        DeleteTodo() {
            
            this.$emit('DeleteSelectItem');
            
            
            fetch(`https://todoapi.arjoni.de/api/v1/todo/${this.id}`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' }
            })
            .then((res) => res.json())
            .then((data) => {
                console.log('Deleted data:', data);
                
                this.$router.go(0); 
            })
            .catch((err) => console.error('Error fetching data:', err));
        }
    }
}
</script>

<style>
.del{
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