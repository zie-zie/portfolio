<template>
    <div>
     <ColorPicker 
     :color="color"/>
    </div>
  </template>
  
  <script>
    import { ColorPicker } from 'vue-color-kit'
    import 'vue-color-kit/dist/vue-color-kit.css'
  
    export default {
      components: {
        ColorPicker,
      },
      data() {
        return {
          color: '#59c7f9',
          
        }
      },
      methods: {
        changeColor(color) {
          const hexcode = color.hex
          this.color = hexcode
          console.log(this.color)
        },
        debug(events){
            console.log(this.color)
        },
      
      },
    }
  </script>
  