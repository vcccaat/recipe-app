<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <h2 class="title" style="font-weight: 800">Rewards</h2>
      </div>
    </div>

    <div class="card cardReward">
      <div class="row">
        <div class="col-3"></div>
        <div class="col-3" style="text-align: left">
          <div class="row">
            <span>Reward Points</span>
          </div>
          <div class="row">
            <h1>{{ rewardPoints }}</h1>
          </div>
        </div>
        <div class="col-3">
          <img class="svg" :src="bowlIcon" />
        </div>
        <div class="col-3"></div>
      </div>
    </div>
    <div class="row"><h5 style="text-align: left">Rewards</h5></div>

    <div class="card cardReward">
      <div class="row">
        <div class="col-4">
          <img class="svg" :src="vegIcon" />
        </div>
        <div class="col align-self-center" style="text-align: left">
          <div class="row"><h5>20% Grocery Discount</h5></div>
          <div class="row"><h5>on points: 2000</h5></div>
          <button type="button" class="btn btn-outline-dark redeemBtn">
            REDEEM
          </button>
        </div>
      </div>
    </div>

    <div class="card cardReward">
      <div class="row">
        <div class="col-4">
          <img class="svg" :src="vegIcon" />
        </div>
        <div class="col align-self-center" style="text-align: left">
          <div class="row"><h5>15% Grocery Discount</h5></div>
          <div class="row"><h5>on points: 1500</h5></div>
          <button type="button" class="btn btn-outline-dark redeemBtn">
            REDEEM
          </button>
        </div>
      </div>
    </div>

    <div class="card cardReward">
      <div class="row">
        <div class="col-4">
          <img class="svg" :src="vegIcon" />
        </div>
        <div class="col align-self-center" style="text-align: left">
          <div class="row"><h5>10% Grocery Discount</h5></div>
          <div class="row"><h5>on points: 1000</h5></div>
          <button type="button" class="btn btn-outline-dark redeemBtn">
            REDEEM
          </button>
        </div>
      </div>
    </div>

    <div class="card cardReward">
      <div class="row">
        <div class="col-4">
          <img class="svg" :src="vegIcon" />
        </div>
        <div class="col align-self-center" style="text-align: left">
          <div class="row"><h5>5% Grocery Discount</h5></div>
          <div class="row"><h5>on points: 500</h5></div>
          <button type="button" class="btn btn-outline-dark redeemBtn">
            REDEEM
          </button>
        </div>
      </div>
    </div>

    <div class="row"><h5 style="text-align: left">My comments</h5></div>
    <div class="card cardReward"  v-for="(item, index) in displayList" :key="index">
			<div class="row">
        <div class="col-6" style="text-align: left">
          <div class="row">
            <span>My comment</span>
          </div>
          <div class="row">
            <span> abcabc </span>
          </div>
        </div>
				<div class="col-6 block">
					<el-image
					style="width: 100px; height: 100px; margin: 5px"
					v-for="(img,i) in item" :key="i" :src="img"
					fit="cover"></el-image>
				</div>
			</div>
    </div>
  </div>
</template>

<script>
// import Button from '../components/Button.vue';
export default {
  created() {
    this.rewardPoints = localStorage.getItem("rewardPoints", this.rewardPoints);
  },
	mounted() {
		window.addEventListener('storage', (e) => {
			if (e.key && e.key=="feedbackPics" && e.newValue){
				console.log("storage值发生变化后触发:", e)
				this.displayList = JSON.parse(e.newValue)
				console.log(this.displayList);
			}
    });
	},
  methods: {},
  components: {},
  data() {
    return {
      bowlIcon: require("/public/img/icons/bowl.svg"),
      vegIcon: require("/public/img/icons/vegetable.svg"),
      rewardPoints: 10,
			displayList: []
    };
  },
};
</script>
<style>
.svg {
  width: 80px;
  height: 80px;
}
.cardReward {
  border: 3px solid black !important;
  padding: 20px;
  margin-bottom: 20px;
}
.redeemBtn {
  width: fit-content;
  /* align-items: flex-end; */
  float: right;
}
</style>
