<template>
	<div id="left-panel">
		<div style="text-align: right">
			<i class="bi bi-arrow-bar-left" style="font-size: 25px"></i>
		</div>
		<h5>How long would you like to spend on this meal?</h5>
		<div class="d-flex">
			<span class="">0</span>
			<form class="flex-grow-1">
				<input @change="handleTimeChange" v-model="time" style="width: 100%" type="range" min="0" max="100" />
			</form>
			<span class="">100 Min</span>
		</div>
		<div>{{ time }} Min</div>

		<h5>How many people do you need to serve?</h5>
		<div class="d-flex">
			<span class="">0</span>
			<form class="flex-grow-1">
				<input @change="handleServingChange" v-model="serving" style="width: 100%" class="border-0" type="range" min="0" max="10" />
			</form>
			<span class="">10</span>
		</div>
		<div>{{ serving }} People</div>

		<div class="Diary" v-for="item in ingredients" :key="item.type">
			<h5>{{ item.type }}</h5>
			<table class="buttons" v-for="i in Math.ceil(item.ingredients.length / 4)" :key="i">
				<tr>
					<td v-for="ind in item.ingredients.slice((i - 1) * 4, i * 4)" :key="ind"><Button :name="ind" :id="ind" /></td>
				</tr>
			</table>
		</div>
		<button type="button" class="btn btn-light" @click="handleClear">Clear</button>
		<button type="button" class="btn btn-primary" @click="handleConfirm">Confirm</button>
	</div>
</template>

<script>
// @ is an alias to /src
import 'bootstrap/dist/css/bootstrap.css';
import Button from '@/components/Button.vue';
import ingredientData from '../../data/mockIngredients.json';
import Ingredient from '../components/Ingredient.js';

export default {
	name: 'Home',
	created() {
		this.getIngredients();
	},
	methods: {
		getIngredients() {
			this.ingredients = ingredientData;
		},
		handleTimeChange() {
			Ingredient.$emit('slider', [this.time, 'time']);
		},
		handleServingChange() {
			Ingredient.$emit('slider', [this.serving, 'serving']);
		},
		handleConfirm() {
			Ingredient.$emit('confirm');
		},
		handleClear() {
			Ingredient.$emit('clear');
		},
	},
	components: {
		Button,
	},
	data() {
		return {
			time: 30,
			serving: 5,
			ingredients: [],
		};
	},
};
// slider reference: https://mdbootstrap.com/snippets/jquery/mdbootstrap/944578
</script>
<style>
.buttons {
	width: 100%;
	table-layout: fixed;
	border-collapse: collapse;
}

.buttons button {
	width: 100%;
}
#left-panel {
	display: flex;
	flex-direction: column;
	/* min-width: 400px; */

	padding: 20px;
	border-right: 3px solid grey;
	box-shadow: 6px 8px 6px -6px rgb(0 0 0 / 40%);
}
#left-panel > * {
	margin: 10px 0;
}
</style>
