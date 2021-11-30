<template>
  <div class="home">
    <p>Time</p>
    <div class="d-flex justify-content-center my-4">
      <span class="font-weight-bold indigo-text mr-2 mt-1">0</span>
      <form class="range-field w-25">
        <input v-model="time" class="border-0" type="range" min="0" max="100" />
      </form>
      <span class="font-weight-bold indigo-text ml-2 mt-1">100</span>
    </div>  
    <div>{{time}}</div>

    <p>Serving</p>
    <div class="d-flex justify-content-center my-4">
      <span class="font-weight-bold indigo-text mr-2 mt-1">0</span>
      <form class="range-field w-25">
        <input v-model="time" class="border-0" type="range" min="0" max="100" />
      </form>
      <span class="font-weight-bold indigo-text ml-2 mt-1">10</span>
    </div>  
    <div>{{time}}</div>

    
    <div class="Meat">
    <h2>Meat</h2>
    <table class="buttons">
      <tr>
          <td><Button name="Bacon" id="Bacon"/></td>
          <td><Button name="Beaf" id="Beaf"/></td>
          <td><Button name="Ham" id="Ham"/></td>
          <td><Button name="Pork" id="Pork"/></td>
      </tr>
    </table>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import 'bootstrap/dist/css/bootstrap.css'
import Button from '@/components/Button.vue'

export default {
  name: 'Home',
  components: {
    Button
  },
  data() {
    return {
      time: 30
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

  .home {
    width: 500px
  }
</style>