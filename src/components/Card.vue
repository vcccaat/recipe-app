<template>
  <div class="cardBox">
    <b-card :img-src="imgsrc" img-alt="Card image" img-left class="mb-3">
      <b-card-text>
        <div class="card-content">
          <h1>{{ recipe.name }}</h1>
          <p>Time: {{ recipe.time }} min</p>
          <p>Serving: {{ recipe.serving }}</p>
        </div>
      </b-card-text>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "Card",
  data: function () {
    return {
      imgsrc: require("/data/" + this.recipe.cover),
    };
  },
  props: {
    recipe: Object,
  },
  created() {
    //this.imgsrc = require("/data/" + this.recipe.cover);
    //this.$set(this.itemInfo); //父组件传值时无法触发子组件watch监听, 利用set方法触发页面重新渲染
  },
  watch: {
    // recipe: function () {},
  },
  methods: {},
};
</script>

<style>
.cardBox {
  margin: 100px;
  margin-bottom: 20px;
  margin-top: 20px;
}

.card-body {
  text-align: left;
}

.card-content {
  padding: 50px;
}

.card-img-left {
  width: 30%;
  object-fit: cover;
  object-position: center;
}
</style>
