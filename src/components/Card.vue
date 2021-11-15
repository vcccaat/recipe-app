<template>
  <div class="cardBox">
    <b-card :img-src="imgsrc" img-alt="Card image" img-left class="mb-3">
      <b-card-text>
        <div class="card-content">
          <h1>{{ item.name }}</h1>
          <p>Time: {{ item.time }} min</p>
          <p>Serving: {{ item.serving }}</p>
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
      imgsrc: "",
      item: [],
    };
  },
  props: {
    itemInfo: {
      type: Object,
    },
  },
  created() {
    //this.$set(this.itemInfo); //父组件传值时无法触发子组件watch监听, 利用set方法触发页面重新渲染
  },
  watch: {
    itemInfo: {
      immediate: true,
      handler: function () {
        this.item = this.itemInfo;
        this.imgsrc = require("/data/" + this.item.cover);
        //this.imgsrc = "https://placekitten.com/300/300";
        console.log("Item info got:", this.item);
      },
      deep: true,
    },
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
  height: 20%;
  width: 30%;
  object-fit: cover;
  object-position: center;
}
</style>
