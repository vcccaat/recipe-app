<template>
  <div class="cardView">
    <h1>This is card page, only for testing</h1>
    <div class="searchBar">
      <SearchBar v-show="showSearch" @send="outputData" />
    </div>
    <div class="cards">
      <Card />
    </div>
  </div>
</template>

<script>
import SearchBar from "@/components/SearchBar.vue";
import Card from "@/components/Card.vue";

export default {
  name: "CardView",
  components: {
    SearchBar,
    Card
  },
  data() {
    return {
      inputData: [],
      showSearch: true,
      time: 30,
      serving: 5,
      ingredients: [],
    };
  },
  methods: {
    outputData: function (data) {
      this.inputData = data;
      console.log("Card Received:", data);
      //this.showInputTask = false;
    },
  },
};
</script>
<style>
body {
    text-align: center;
}
</style>