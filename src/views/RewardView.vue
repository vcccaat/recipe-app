<template>
	<div>
    Rewards
    <div class='container'>
  <div class="card cardReward">
    Reward Points

    <img class="svg" :src="bowlIcon" />
  </div>
  </div>

<img class="svg" :src="vegIcon" />
  </div>
</template>

<script>
export default {
	created() {

	},
	methods: {    
 
 },
	components: {

  },
	data() {
		return {
bowlIcon: require("/public/img/icons/bowl.svg"),
vegIcon: require("/public/img/icons/vegetable.svg"),
		};
	},
};
</script>
<style>
.svg {
  width: 100px;
  height: 100px;
}
.cardReward {
  border: 2px solid black !important;
}
</style>