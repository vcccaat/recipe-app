<template>
  <div class="search">
    <div class="bar">
      <b-input-group size="sm" class="mb-2">
        <b-input-group-prepend is-text>
          <b-icon icon="search"></b-icon>
        </b-input-group-prepend>
        <b-form-input
          type="search"
          v-model="input"
          v-on:keyup.enter="sendSearch"
          placeholder="Type here..."
        ></b-form-input>
        <b-button variant="primary" v-on:click="sendSearch">Search</b-button>
      </b-input-group>
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
  methods: {
    sendSearch: function () {
      this.$emit("search-sent", this.input);
      console.log("Sent search input: ", this.input);
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
