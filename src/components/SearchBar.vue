<template>
  <div class="search">
    <div class="bar">
      <el-input
        size="large"
        placeholder="Search something..."
        prefix-icon="el-icon-search"
        v-model="input"
        v-on:keyup.enter.native="sendSearch"
      >
        <el-button slot="append" v-on:click="sendSearch">Search</el-button>
      </el-input>
      <div class="alertbox">
        <el-alert
          style="margin-top: 5px"
          class="errmsg"
          :title="errMsg"
          type="error"
          v-show="showError"
          show-icon
          :closable="false"
        >
        </el-alert>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  data: function () {
    return {
      input: "", // Data properties go here.
    };
  },
  props: ["showError", "errMsg"],
  methods: {
    sendSearch: function () {
      this.$emit("search-sent", this.input);
      console.log("Sent search input: ", this.input);
    },
  },
};
</script>

<style>
.el-alert {
  color: darkred;
  margin: 8px;
}

.alertbox {
  height: 50px;
}

.bar {
  margin: 0px 100px 20px;
}
</style>
