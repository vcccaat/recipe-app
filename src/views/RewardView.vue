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
						<h1>15</h1>
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
          <button type="button" class="btn btn-outline-dark redeemBtn">REDEEM</button>
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
          <button type="button" class="btn btn-outline-dark redeemBtn">REDEEM</button>
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
          <button type="button" class="btn btn-outline-dark redeemBtn">REDEEM</button>
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
          <button type="button" class="btn btn-outline-dark redeemBtn">REDEEM</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
// import Button from '../components/Button.vue';
export default {
	created() {},
	methods: {},
	components: {},
	data() {
		return {
			bowlIcon: require('/public/img/icons/bowl.svg'),
			vegIcon: require('/public/img/icons/vegetable.svg'),
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
