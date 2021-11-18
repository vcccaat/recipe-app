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
        <div class="cards" v-for="(item, index) in filteredList" :key="index">
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
import Ingredient from '../components/Ingredient.js'

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
      filteredList: {},
      ingredients: new Set(),
      time: 0,
      serving: 0
    };
  },
  created() {
    this.init();
  },
  mounted: function() {
    Ingredient.$on('confirm', () => {
      this.confirm()
      console.log('confirm', this.ingredients)
    })
    Ingredient.$on('click-ingredient', data => {
      if (data[1] === false) {
        this.ingredients.add(data[0])
      } else if (this.ingredients.has(data[0])) {
        this.ingredients.delete(data[0])
      }
    })
    Ingredient.$on('slider', data => {
      // filter function reference: https://stackoverflow.com/questions/5072136/javascript-filter-for-objects/37616104
      Object.filter = function( obj, predicate) {
        let result = {}, key;
        for (key in obj) {
            if (obj.hasOwnProperty(key) && predicate(obj[key])) {
                result[key] = obj[key];
              }
          }
          return result;
      };
      if (data[1] === 'time') {
        this.time = data[0]
        this.filteredList = Object.filter(this.recipeList, recipe => recipe.time <= this.time)
      } else {
        this.serving = data[0]
        this.filteredList = Object.filter(this.recipeList, recipe => recipe.serving <= this.serving)
      }
      
    })
  },
  methods: {
    init: function () {
      this.recipeList = RecipeData;
      this.filteredList = JSON.parse(JSON.stringify(this.recipeList));
    },
    confirm: function () {
      if (
        // if input is nothing, show all recipes
        !this.ingredients || this.ingredients.size == 0
      ) {
        this.recipeList = RecipeData;
        this.filteredList = JSON.parse(JSON.stringify(this.recipeList));
      } else {
        // if there is a search input, find if there has any matched content
        this.recipeList = {}; // clear the display list
        this.filteredList = {};
        console.log('this', this.ingredients)
        this.ingredients.forEach((d, i) => {
          const regStr = "(" + d.toLowerCase() + ")([\\s]*)";
          const reg = new RegExp(regStr);
          for (let i in RecipeData) {
            
            for (let j in RecipeData[i].ingredients) {
              let name = RecipeData[i].ingredients[j].toLowerCase(); // make it match either lowercase / uppercase
              const recs = name.split(" ").join("")
              let regMatch = recs.match(reg);
              if (regMatch !== null) {
                this.$set(this.recipeList, i, RecipeData[i]); // if matched, add it to the display list
                this.filteredList = JSON.parse(JSON.stringify(this.recipeList))
              }
            }
            
          }
        })

        // for (let i = 0; i < input.length; i++) {
        //   regStr = regStr + "(" + input[i] + ")([\\s]*)"; // 跨字匹配
        // }
        // let reg = new RegExp(regStr);

        // // Start looping all the recipes
        // for (let i in RecipeData) {
        //   let name = RecipeData[i].name.toLowerCase(); // make it match either lowercase / uppercase
        //   let regMatch = name.match(reg);
        //   if (regMatch !== null) {
        //     this.$set(this.recipeList, i, RecipeData[i]); // if matched, add it to the display list
        //     this.filteredList = JSON.parse(JSON.stringify(this.recipeList))
        //   }
        // }

        // Show message if there's no result found
        // if (JSON.stringify(this.recipeList) == "{}") {
        //   console.log("no search result");
        //   this.showError = true;
        //   this.errMsg = "Sorry, we didn't find any matched recipes";
        // }
      }
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
        this.filteredList = JSON.parse(JSON.stringify(this.recipeList));
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
            this.filteredList = JSON.parse(JSON.stringify(this.recipeList))
          }
        }

        // Show message if there's no result found
        if (JSON.stringify(this.recipeList) == "{}") {
          console.log("no search result");
          this.showError = true;
          this.errMsg = "Sorry, we didn't find any matched recipes";
        }
      }
    },
  },
};
</script>