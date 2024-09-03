<template>

    <div class="editform">
        <form @submit.prevent="handleSubmit">
            <label>TITLE: </label>
            <input type="text" required v-model="inputTitle">

            <label>DESCRIPTION: </label>
            <input type="text" v-model="inputDescription">

            <br>
            <label for="date">onDate: </label>
            <input type="date" v-model="inputDate">

            <br><br>
            <input type="radio" value="#ff6c6c" id="red" name="color" v-model="selectedColor"><label for="red">Red</label>&nbsp;
            <input type="radio" value="#9ff179" id="green" name="color" v-model="selectedColor"><label for="green">Green</label>&nbsp;
            <input type="radio" value="#f1d579" id="yellow" name="color" v-model="selectedColor"><label for="yellow">Yellow</label>
            <br><br>
            <button type="submit">Update</button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'EditItem',
    props: {
        title: {
            type: String,
            default: ''
        },
        id: {
            type: String,
            default: ''
        },
        cardColor: {
            type: String,
            default: ''
        },
        onDate: {
            type: String,
            default: ''
        },
        description: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            inputTitle: this.title,
            inputId: this.id,
            selectedColor: this.cardColor,
            inputDate: this.formatDate(this.onDate), 
            inputDescription: this.description
        };
    },
    methods: {
        formatDate(dateString) {
            if (!dateString) return '';
            const date = new Date(dateString);
            return date.toISOString().split('T')[0]; 
        },
        handleSubmit() {
            
            const updatedTodo = {
                title: this.inputTitle,
                description: this.inputDescription,
                onDate: this.inputDate,
                color: this.selectedColor
            };

            fetch(`https://todoapi.arjoni.de/api/v1/todo/${this.inputId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedTodo)
            })
            .then((res) => res.json())
            .then((data) => {
                console.log('Update successful:', data);
               
            })
            .catch((err) => console.error('Error updating data:', err));
            this.$emit('UpdateSelectItem');
        }
    }
};
</script>
<style scoped>
.editform{
    background-color: #ffffff;
    padding: 20px;
    max-width: 600px;
    max-height: 300px;
    margin: 20px auto;
    font-family: 'Roboto', sans-serif;
  

}
</style>

