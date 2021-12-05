<template>
  <div class="container">
    <div :class="cardBox">
      <div :class="left" style="padding-left: 0px">
        <a :href="url">
          <img :src="imgsrc" alt="Card-image" class="card-left-img" />
        </a>
      </div>
      <div :class="right" style="padding-left: 0px">
        <h1>{{ recipe.name }}</h1>
        <p>Time: {{ recipe.time }} min</p>
        <p>Serving: {{ recipe.serving }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  data: function () {
    return {
      imgsrc: require("/data/" + this.recipe.cover),
      url: "/recipe/" + this.recipe.name,
      cardBox: "",
      right: "",
      left: "",
    };
  },
  props: {
    recipe: Object,
  },
  mounted: function () {
    var width = document.body.clientWidth;
    if (width <= 438) {
      this.cardBox = "row card-box-sm";
      this.left = "col-5 card-left";
      this.right = "col-7 card-content-sm";
      console.log("bbb");
    } else {
      this.cardBox = "row card-box-lg";
      this.left = "col-4 card-left";
      this.right = "col-8 card-content";
    }
    window.addEventListener("resize", () => {
      var width = document.body.clientWidth; 
        if (width <= 438) {
          console.log("变小");
          this.cardBox = "row card-box-sm";
          this.left = "col-5 card-left";
          this.right = "col-7 card-content-sm";
        } else {
          console.log("变大");
          this.cardBox = "row card-box-lg";
          this.left = "col-4 card-left";
          this.right = "col-8 card-content";
        }
    });

  },
};
</script>

<style>
.card-box-lg {
  display: flex;
  box-shadow: 6px 8px 6px -6px rgb(0 0 0 / 40%);
  border: 1px solid grey;
  border-radius: 15px;
  margin-bottom: 20px;
  height: 10em;
  /* height: 50%; */
}

.card-box-sm {
  display: flex;
  box-shadow: 6px 8px 6px -6px rgb(0 0 0 / 40%);
  border: 1px solid grey;
  border-radius: 15px;
  margin-bottom: 5px;
  height: 7em;
  /* height: 50%; */
}

.card-left {
  display: table-cell;
  text-align: center;
  vertical-align: middle;
  overflow: hidden;
  width: 100%;
  height: 100%;
}

.card-left-img {
  height: 100%;
  border-bottom-left-radius: 15px;
  border-top-left-radius: 15px;
}

.card-content {
  text-align: left;
  padding: 20px;
}

.card-content > * {
  margin-bottom: 5px;
}

.card-content-sm {
  padding: 5px;
  text-align: left;
}
.card-content-sm > * {
  margin-bottom: 0px;
}
.card-content-sm h1 {
  font-weight: 500;
  font-size: 18px;
  margin: 5px 0px 5px;
}
.card-content-sm p {
  font-size: 14px;
}
</style>
