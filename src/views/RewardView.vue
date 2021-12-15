<template>
	<div>
		<HeaderBar />
		<div class="container" style="margin-top:55px;">
			<div class="row">
				<div class="col">
					<h2 class="title" style="font-weight: 800">Profile</h2>
				</div>
			</div>

			<div class="card cardReward">
				<div class="row">
					<!-- <div class="col-3"></div> -->
					<div class="col-6" style="text-align: center;">
						<div class="row">
							<span style="margin-top: 8px">Reward Points</span>
						</div>
						<div class="row">
							<h1 style="font-weight: bold;">{{ rewardPoints }}</h1>
						</div>
					</div>
					<div class="col-6" style="text-align: center;">
						<img class="svg" :src="bowlIcon" />
					</div>
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

			<div class="row"><h5 style="text-align: left">My comments</h5></div>
			<div class="card cardReward" v-for="(item, index) in displayList" :key="index">
				<div class="row">
					<div class="col-6" style="text-align: left; padding-left: 20px">
						<div class="row">
							<h4 style="margin-bottom: 5px; font-weight: bold">{{ item[0] }}</h4>
						</div>
						<div class="row">
							<el-rate disabled v-model="item[2]" :colors="colors"> </el-rate>
						</div>
						<div class="row">
							<span style="margin: 5px 3px 2px"> {{ item[1] }} </span>
						</div>
					</div>
					<div class="col-6 block" style="text-align: right; padding-right: 20px">
						<el-image style="width: 100px; height: 100px; margin: 5px" v-for="(img, i) in item.slice(3)" :key="i" :src="img" fit="cover"></el-image>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
// import Button from '../components/Button.vue';
import HeaderBar from '@/components/HeaderBar.vue';

export default {
	created() {
		this.rewardPoints = localStorage.getItem('rewardPoints', this.rewardPoints);
		this.displayList = JSON.parse(localStorage.getItem('feedbackPics'));
	},
	mounted() {
		window.addEventListener('storage', (e) => {
			if (e.key && e.key == 'feedbackPics' && e.newValue) {
				console.log('storage值发生变化后触发:', e);
				this.displayList = JSON.parse(e.newValue);
				console.log(this.displayList);
			}
		});
	},
	methods: {},
	components: {
		HeaderBar,
	},
	data() {
		return {
			bowlIcon: require('/public/img/icons/bowl.svg'),
			vegIcon: require('/public/img/icons/vegetable.svg'),
			rewardPoints: 10,
			displayList: [],
			colors: ['#99A9BF', '#F7BA2A', '#FF9900']
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
	/* border: 3px solid black !important; */
	box-shadow: 6px 8px 6px -10px rgb(0 0 0 / 40%);
	border: 1px solid #aaa !important;
	border-radius: 6px !important;
	padding: 20px;
	margin-bottom: 20px;
}
.redeemBtn {
	width: fit-content;
	/* align-items: flex-end; */
	float: right;
}
@media (max-width: 600px){
	h5 {
		font-size: 18px !important;
	}
	.redeemBtn {
	width: fit-content;
	font-size: 13px !important;
	/* align-items: flex-end; */
	float: right;
	}
	.cardReward {
		padding: 15px;
		margin-bottom: 15px;
	}
}
</style>
