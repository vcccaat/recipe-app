<template>
	<div class="header-bar" style="z-index: 2">
		<router-link to="/"> <i class="bi bi-house-door homeIcon"></i></router-link>

		<div class="leftPart">
			<div class="rewardPart">
				<img class="chiefIcon" :src="chiefIcon" />
				<p style="font-weight: bold; vertical-align: middle; display: inline; position: relative; top: 2px;"><i class="el-icon-close
" style="margin-left:1px"></i> {{ this.rewardPoints }}</p>
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
import Ingredient from "./Ingredient.js";
export default {
	name: 'HeaderBar',
	data() {
		return {
			chiefIcon: require('/public/img/icons/chief.svg'),
			rewardPoints: localStorage.getItem('rewardPoints') || 10
		};
	},
	created: function() {
		Ingredient.$on('reward', () => {
			this.rewardPoints = localStorage.getItem('rewardPoints')
		})
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
	position: relative;
	top: -2px;
}
/* .leftPart {
} */
.header-bar {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 1vh 3vw;
	border-bottom: 2px solid #eee;
	top: 0;
	position: fixed;
	z-index: 1;
	background-color: white;
	width: 100%;
}

@media (max-width: 600px){
	.header-bar{
		padding-left: 20px;
		padding-right: 20px;
	}
}
</style>
