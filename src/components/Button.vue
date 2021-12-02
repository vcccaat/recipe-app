<template>
  <div class="button" style="margin: 1px 2px 0px">
    <input
      @click="handleClick"
      type="checkbox"
      class="btn-check"
      v-model="checked"
      :id="id"
      autocomplete="off"
      ref="selectedButton"
    />
    <label :class="styler" :for="id">{{ name }}</label>
    <!-- <el-checkbox @change="handleClick" type="checkbox" v-model="checked" :id=id ref="selectedButton" :label="name" border>
      
    </el-checkbox> -->
    <!-- <label class="btn btn-outline-secondary" :for=id>{{name}}</label> -->
  </div>
</template>

<script>
import Ingredient from "./Ingredient.js";
export default {
  name: "Button",
  props: {
    name: String,
    id: String,
    styler: String
  },
  data: function () {
    return {
      checked: false,
      //style: "el-button el-button--medium is-round btn-outline-primary",
    };
  },
  mounted: function () {
    
    Ingredient.$on("clear", () => {
      this.checked = false;
    });
    
  },
  methods: {
    select: function () {
      if (this.$refs.selectedButton.checked == true) {
        console.log(`select, ${this.id}`);
      }
    },
    handleClick: function () {
      Ingredient.$emit("click-ingredient", [this.name, this.checked]);
      console.log("emited", this.name, this.checked);
    },
  },
};
</script>