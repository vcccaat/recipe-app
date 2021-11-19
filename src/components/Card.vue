<template>
	<div class="container">
		<div class="cardBox">
			<div class="card-left">
				<a :href="url">
					<img :src="imgsrc" alt="Card-image" class="card-left-img" />
				</a>
			</div>
			<div class="card-content">
				<h1>{{ recipe.name }}</h1>
				<p>Time: {{ recipe.time }} min</p>
				<p>Serving: {{ recipe.serving }}</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Card',
	data: function () {
		return {
			imgsrc: require('/data/' + this.recipe.cover),
			url: '/recipe/' + this.recipe.name,
		};
	},
	props: {
		recipe: Object,
	},
	created() {
		//this.$set(this.itemInfo); //父组件传值时无法触发子组件watch监听, 利用set方法触发页面重新渲染
	},
};
</script>

<style>
.container {
	/* display: flex\; */
}
.cardBox {
	display: flex;
	box-shadow: 6px 8px 6px -6px rgb(0 0 0 / 40%);
	border: 3px solid grey;
	border-radius: 15px;
	margin-bottom: 20px;
	/* height: 50%; */
}
.card-left {
	height: 100%;
	width: 250px;
}
.card-left-img {
	margin: auto;
	border-radius: 15px;
	/* height: 5rem; */
	/* border-bottom-left-radius: 15px;
	border-top-left-radius: 15px; */
}
.card-content {
	text-align: left;
	padding: 20px;
}
</style>
