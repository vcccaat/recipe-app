<template>
  <div class="container">
    <div
      :class="cardBox"
      :style="{ 'background': 'linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) ), url(' + imgsrc + ')', 'background-size': '100%'}"
    >
      <div :class="left" style="padding-left: 0px">
        <a :href="url">
          <!-- <img :src="imgsrc" alt="Card-image" class="card-left-img"  /> -->
          <div :class="right">
            <h1 style="font-weight: bold">{{ recipe.name }}</h1>
            <p style="font-weight: bold">Time: {{ recipe.time }} min</p>
            <p style="font-weight: bold"> Serving: {{ recipe.serving }}</p>
          </div>
        </a>
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
      // this.cardBox = "row card-box-lg";
      // this.left = "col-4 card-left";
      // this.right = "col-8 card-content";
      this.cardBox = " card-box-lg";
      this.left = " card-left";
      this.right = " card-content";
    }
    window.addEventListener("resize", () => {
      var width = document.body.clientWidth;
      if (width <= 550) {
        //console.log("变小");
        this.cardBox = " card-box-sm";
        this.left = " card-left";
        this.right = " card-content-sm";
      } else {
        //console.log("变大");
        this.cardBox = " card-box-lg";
        this.left = " card-left";
        this.right = " card-content";
      }
    });
  },
};
</script>

<style>
.card-box-lg {
  display: flex;
  box-shadow: 6px 8px 6px -8px rgb(0 0 0 / 40%);
  border: 1px solid #bbb;
  border-radius: 15px;
  margin-bottom: 15px;
  height: 13em;
  position: relative;
  /* height: 50%; */
}

.card-left {
  display: table-cell;
  text-align: center;
  vertical-align: middle;
  overflow: hidden;
  height: 100%;
  /* position: absolute; */
}

.card-left-img {
  object-fit: cover;
  /* height: 100%; */
  width: 100%;
  border-radius: 15px;
  top: 50%;
  left: 50%;
}

.card-box-sm {
  display: flex;
  box-shadow: 6px 8px 6px -8px rgb(0 0 0 / 40%);
  border: 1px solid #bbb;
  border-radius: 15px;
  margin-bottom: 5px;
  height: 7em;
  /* height: 50%; */
}

.card-content {
  color: white;
  position: absolute;
  text-align: left;
  padding: 20px;
}

.card-content > * {
  margin-bottom: 5px;
}

.card-content-sm {
  padding-left: 0px !important;
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
