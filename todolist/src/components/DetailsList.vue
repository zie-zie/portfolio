<template>
<div>
  <DetailModal :id="idnumber" v-if="showmodal" @closeModal="showmodal= false" />
</div>
</template>

<script>
import DetailModal from "./DetailModal.vue"
export default {
  components:{DetailModal},
  name: 'DetailsList',
  props: ['idnumber'],
  data() {
    return {
    
      showmodal:true
    };
  },
  methods:{
    handleClickMore() {
      this.showmodal = !this.showmodal
      
    }
  }

};
</script>
<style>

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