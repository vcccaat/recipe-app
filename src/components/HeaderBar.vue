<template>
	<div class="header-bar" style="z-index: 2; margin-top: 2px; width: 100%;">
		<router-link to="/"> <img class="profileIcon" style="position: relative;
	top: -2px;" :src="homeIcon" /></router-link>
		<div class="logo" style="position: relative; top: 1px;">
				<img class="logoIcon" :src="logoIcon" />
		</div>
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
			<div style="vertical-align: middle; display: inline; position: relative; top: -1px;">
				<router-link to="/reward">
					<img class="profileIcon" :src="profileIcon" />
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
			logoIcon: require('/public/img/icons/logo_tag.svg'),
			homeIcon: require('/public/img/icons/home.svg'),
			chiefIcon: require('/public/img/icons/chief.svg'),
			profileIcon: require('/public/img/icons/profile.svg'),
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
.logo,
.logoIcon {
	width: 65px;
	height: 30px;
}
.chiefIcon {
	width: 30px;
	height: 30px;
}
.profileIcon {
	width: 30px;
	height: 30px;
}
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
