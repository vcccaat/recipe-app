<template>
    <div id="left-panel">
        <h3>how long would you like to spend on this meal?</h3>
        <div class="d-flex justify-content-center my-4">
            <span class="font-weight-bold indigo-text mr-2 mt-1">0</span>
            <form class="range-field w-25">
            <input @change="handleTimeChange" v-model="time" class="border-0" type="range" min="0" max="100" />
            </form>
            <span class="font-weight-bold indigo-text ml-2 mt-1">100</span>
        </div>  
        <div>{{time}}</div>

        <h3>How many people do you need to serve?</h3>
        <div class="d-flex justify-content-center my-4">
            <span class="font-weight-bold indigo-text mr-2 mt-1">0</span>
            <form class="range-field w-25">
            <input @change="handleServingChange" v-model="serving" class="border-0" type="range" min="0" max="10" />
            </form>
            <span class="font-weight-bold indigo-text ml-2 mt-1">10</span>
        </div>  
        <div>{{serving}}</div>

        <div class="Diary" v-for="item in ingredients" :key="item.type">
            <h2>{{item.type}}</h2>
            <table class="buttons" v-for="i in Math.ceil(item.ingredients.length / 4)" :key="i">
            <tr>
                <td v-for="ind in item.ingredients.slice((i-1) * 4, i * 4)" :key="ind"><Button :name="ind" :id="ind"/></td>
            </tr>
            </table>
        </div>
        <button type="button" class="btn btn-primary" @click="handleClear">Clear</button>
        <button type="button" class="btn btn-primary" @click="handleConfirm">Confirm</button>
    </div>
</template>

<script>
// @ is an alias to /src
import 'bootstrap/dist/css/bootstrap.css'
import Button from '@/components/Button.vue'
import ingredientData from '../../data/mockIngredients.json';
import Ingredient from '../components/Ingredient.js'

export default {
  name: 'Home',
  created() {
    this.getIngredients();
  },
  methods: {
    getIngredients() {
      this.ingredients = ingredientData
    },
    handleTimeChange() {
      Ingredient.$emit('slider', [this.time, 'time'])
    },
    handleServingChange() {
      Ingredient.$emit('slider', [this.serving, 'serving'])
    },
    handleConfirm() {
      Ingredient.$emit('confirm')
    },
    handleClear() {
      Ingredient.$emit('clear')
    }
  },
  components: {
    Button
  },
  data() {
    return {
      time: 30,
      serving: 5,
      ingredients: []
    }
  }
}
// slider reference: https://mdbootstrap.com/snippets/jquery/mdbootstrap/944578
</script>
<style>
  .buttons {
        width: 100%;
        table-layout: fixed;
        border-collapse: collapse;
    }

  .buttons button {
      width: 100%;
  }

</style>