<template>
  <div class="cardBox">
    <b-card :img-src="imgsrc" img-alt="Card image" img-left>
      <card-body>
        <div class="card-content">
          <h1>{{ recipe.name }}</h1>
          <p>Time: {{ recipe.time }} min</p>
          <p>Serving: {{ recipe.serving }}</p>
          <a :href="url" class="stretched-link"></a>
        </div>
      </card-body>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "Card",
  data: function () {
    return {
      imgsrc: require("/data/" + this.recipe.cover),
      url: "/recipe/" + this.recipe.name
    };
  },
  props: {
    recipe: Object,
  },
  created() {
    //this.$set(this.itemInfo); //父组件传值时无法触发子组件watch监听, 利用set方法触发页面重新渲染
  },
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
/* 
.card-img-left {
  width: 30%;
  object-fit: cover;
  object-position: center;
} */
.card-img-left {
  width: 350px;
  height: 280px;
  border: 1px solid lightgray;
  object-fit: cover;
  object-position: center;
  vertical-align: middle;
}
.card-img-left img {
  max-width: 100%;
  max-height: 100%;
  display: block;
  margin: auto;
}
</style>
