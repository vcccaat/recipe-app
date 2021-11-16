<template>
  <div class="home">
    <div class="row">
      <div class="col-sm-4">
        <LeftPanel />
      </div>
      <div class="col-sm-8">
        <div class="searchBar">
          <SearchBar
            v-show="showSearch"
            @search-sent="search"
            :errMsg="errMsg"
            :showError="showError"
          />
        </div>
        <div class="cards" v-for="(item, index) in recipeList" :key="index">
          <Card :recipe="item" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import "bootstrap/dist/css/bootstrap.css";
import RecipeData from "/data/mock_data.json";
import LeftPanel from "@/views/LeftPanel.vue";
// Right panel components:
import SearchBar from "@/components/SearchBar.vue";
import Card from "@/components/Card.vue";

export default {
  name: "Home",
  components: {
    LeftPanel,
    SearchBar,
    Card,
  },
  data() {
    return {
      showSearch: true,
      showError: false,
      errMsg: "",
      recipeList: {},
    };
  },
  created() {
    this.init();
  },
  methods: {
    init: function () {
      this.recipeList = RecipeData;
    },
    search: function (input) {
      console.log("Received serch input:", input);
      this.showError = false; // hide the error alert if it's not hidden yet
      if (
        // if input is nothing, show all recipes
        input.length == 0 ||
        input.split(" ").join("").length == 0 ||
        input == null
      ) {
        this.recipeList = RecipeData;
      } else {
        // if there is a search input, find if there has any matched content
        this.recipeList = {}; // clear the display list
        let regStr = ""; // 初始化正则表达式
        for (let i = 0; i < input.length; i++) {
          regStr = regStr + "(" + input[i] + ")([\\s]*)"; // 跨字匹配
        }
        let reg = new RegExp(regStr);
        // Start looping all the recipes
        for (let i in RecipeData) {
          let name = RecipeData[i].name.toLowerCase(); // make it match either lowercase / uppercase
          let regMatch = name.match(reg);
          if (regMatch !== null) {
            this.$set(this.recipeList, i, RecipeData[i]); // if matched, add it to the display list
          }
        }
        // Show message if there's no result found
        if (JSON.stringify(this.recipeList) == "{}") {
          this.showError = true;
          this.errMsg = "Sorry, we didn't find any matched recipes";
        }
      }
    },
  },
};
</script>