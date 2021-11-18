<template>
  <div class="button">
    <input @click="handleClick" type="checkbox" class="btn-check" v-model="checked" :id=id autocomplete="off" ref="selectedButton">
    <label class="btn btn-outline-secondary" :for=id>{{name}}</label>
  </div>
</template>

<script>
import Ingredient from './Ingredient.js'
export default {
  name: 'Button',
  props: {
    name: String,
    id: String
  },
  data: function () {
    return {
      checked: false
    };
  },
  methods: {
    select: function (){
      if(this.$refs.selectedButton.checked == true) {
        console.log(`select, ${this.id}`)
      }
    },
    handleClick: function() {
      Ingredient.$emit('click-ingredient', [this.name, this.checked])
    }
  }
}
</script>