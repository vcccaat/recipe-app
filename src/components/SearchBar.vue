<template>
  <div class="search">
    <div class="bar">
      <b-input-group size="sm" class="mb-2">
        <b-input-group-prepend is-text>
          <b-icon icon="search"></b-icon>
        </b-input-group-prepend>
        <b-form-input type="search" v-model="input" placeholder="Type here..."></b-form-input>
        <b-button variant="primary" v-on:click="send">Search</b-button>
      </b-input-group>
    <el-alert class="errmsg" :title="errMsg" type="error" v-show="showError" show-icon :closable="false"> </el-alert>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  data: function () {
    return {
      input: "", // Data properties go here.
      showError: false,
      errMsg: "",
    };
  },
  methods: {
    send: function () {
      // $emit code goes here
      let _this = this;
      // check all the inputs
      if (
        this.input.length == 0 ||
        this.input.split(" ").join("").length == 0 ||
        this.input == null
      ) {
        this.showError = true;
        this.errMsg = "Please input search content first";
        setTimeout(function () {
          _this.showError = false;
        }, 2000);
      }
      else {
        this.$emit("send", this.input);
        console.log("Sent input: ", this.input);
      }
    },
  },
};
</script>

<style>
.errmsg {
  color: darkred;
  margin: 8px;
}

.bar {
  margin: 100px;
  margin-bottom: 20px;
}
</style>
