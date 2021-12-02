<template>
  <div class="button" style="margin: 1px 2px 0px">
    <input @click="handleClick" type="checkbox" class="btn-check" v-model="checked" :id=id autocomplete="off" ref="selectedButton">
    <label class="btn btn-outline-secondary" :for=id>{{name}}</label>
    <el-button :size="medium" @click="handleClick" type="checkbox" v-model="checked" :id=id ref="selectedButton" round>
      {{name}}
    </el-button>
    <!-- <label class="btn btn-outline-secondary" :for=id>{{name}}</label> -->


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
  mounted: function() {
    Ingredient.$on('clear', () => {
      this.checked = false
    })
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