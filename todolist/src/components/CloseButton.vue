<template>
  <div class="buttonX"><button @click="onCloseModal" class="closebutton">X</button></div>
</template>

<script>
export default {
    name:'CloseButton',
methods:{
    onCloseModal() {
          this.$emit('closebutton');
        }
    }
}
</script>

<style>

.closebutton {
  color: rgb(17, 20, 22);
  width: 30px;
  height: 30px;
  background: white;
  border: none;
  font-size: 18px;
  top: 10px;
  right: 10px;
  cursor: pointer;
  border-radius: 20%;
  
}

.closebutton:hover {
  background: #ccc;
}
.buttonX{
    width: 100%;
    height: 31Px;
    text-align: end;
    margin: 0%;
    padding: 0%;
}
</style>