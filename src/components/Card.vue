<template>
	<div class="container">
		<div class="cardBox">
			<div class="card-top">
				<img :src="imgsrc" alt="Card-image" class="card-left-img" />
			</div>
			<div class="card-content">
				<h1>{{ recipe.name }}</h1>
				<p>Time: {{ recipe.time }} min</p>
				<p>Serving: {{ recipe.serving }}</p>
				<a :href="url" class="stretched-link"></a>
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
.cardBox {
	box-shadow: 6px 8px 6px -6px rgb(0 0 0 / 40%);
	border: 3px solid black;
	border-radius: 15px;
	transition: all 1s;
	display: block;
	/* background-color: rgba(16,154,167,.1); */
	height: 50%;
}
.card-top {
	width: 100%;
	height: 70%;
}
.card-left-img {
	margin: auto;
	/* height: 5rem; */
	border-top-right-radius: 15px;
	border-top-left-radius: 15px;
}
.card-content {
	text-align: left;
	padding: 7px;
}
</style>
