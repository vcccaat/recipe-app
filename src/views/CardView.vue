<template>
  <div class="cardView">
    <div class="searchBar">
      <SearchBar v-show="showSearch" @search-sent="search" />
      <el-alert
        class="errmsg"
        :title="errMsg"
        type="error"
        v-show="showError"
        show-icon
        :closable="false"
      >
      </el-alert>
    </div>
    <div class="cards" v-for="(item, index) in recipeList" :key="index">
      <Card :recipe="item" />
    </div>
  </div>
</template>

<script>
import SearchBar from "@/components/SearchBar.vue";
import Card from "@/components/Card.vue";
import RecipeData from "/data/mock_data.json";

export default {
  name: "CardView",
  components: {
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
        let _this = this;
        if (JSON.stringify(this.recipeList) == "{}") {
          console.log("no search result");
          this.showError = true;
          this.errMsg = "Sorry we didn't find any matched recipes";
          setTimeout(function () {
            _this.showError = false;
          }, 3000);
        }
      }
    },
  },
};
</script>
<style>
body {
  text-align: center;
}
</style>