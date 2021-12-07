<template>
	<div class="header-bar">
		<router-link to="/"> <i class="bi bi-house-door homeIcon"></i></router-link>

		<div class="leftPart">
			<div class="rewardPart">
				<img class="chiefIcon" :src="chiefIcon" />
				<p style="font-weight: bold; vertical-align: middle; display: inline">X {{ this.rewardPoints }}</p>
			</div>
			<!-- <el-popover placement="top-start" width="200" trigger="click" :content="'Your current reward points: ' + this.rewardPoints">
				<el-button slot="reference" style="margin-right: 20px">
					Reward Points
				</el-button>
			</el-popover> -->
			<div style="vertical-align: middle; display: inline">
				<router-link to="/reward">
					<i class="bi bi-person-circle personIcon"></i>
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'HeaderBar',
	data() {
		return {
			chiefIcon: require('/public/img/icons/chief.svg'),
			rewardPoints: 0,
		};
	},
	mounted: function () {
		this.rewardPoints = localStorage.getItem('rewardPoints');
	},
	methods: {},
};
</script>
<style>
.chiefIcon {
	width: 30px;
	height: 30px;
}
.personIcon,
.homeIcon {
	font-size: 25px;
}
.rewardPart {
	display: inline-block;
	width: 100px;
}
.leftPart {
}
.header-bar {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 1vh 3vw;
	/* padding-bottom: 10px; */
	border-bottom: 1.5px solid #eee;
	box-shadow: 6px 8px 6px -6px rgb(0 0 0 / 20%);
}
</style>
