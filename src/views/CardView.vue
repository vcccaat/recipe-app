<template>
  <div class="cardView">
    <h1>This is card page, only for testing</h1>
    <div class="searchBar">
      <SearchBar v-show="showSearch" @send="getInput" />
    </div>

    <div class="cards" v-for="(item,index) in recipes" :key="index">
      <Card :itemInfo="item" />
    </div>
  </div>
</template>

<script>
import SearchBar from "@/components/SearchBar.vue";
import Card from "@/components/Card.vue";
import RecipeData from "../../data/mock_data.json";

export default {
  name: "CardView",
  components: {
    SearchBar,
    Card,
  },
  data() {
    return {
      showSearch: true,
      inputData: [],
      recipes: [],
    };
  },
  created(){
    this.getRecipes();
  },
  methods: {
    getInput: function (data) {
      this.inputData = data;
      console.log("Search Input Received:", data);
    },
    getRecipes: function () {
      this.recipes = RecipeData
      console.log('Card View: ', this.recipes)
    },
  },
};
</script>
<style>
body {
  text-align: center;
}
</style>