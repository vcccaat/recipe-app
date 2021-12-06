<template>
	<div >
		<div id="left-panel" class="fullPanel" v-if="showPanel">
			<div style="text-align: right">
				<button @click="onHide" class="bi bi-arrow-bar-left hidden-lg-and-up" style="font-size: 25px"></button>
			</div>
			<h5>Time I have for the meal (minutes)</h5>
			<div class="d-flex">
				<!-- <span class="">0</span> -->
				<form class="flex-grow-1">
					<!-- <input @change="handleTimeChange" v-model="time" style="width: 100%" type="range" min="0" max="100" /> -->
					<el-slider  @change="handleTimeChange" v-model="time" show-input :step="5" :max="60"> </el-slider>
				</form>
				<!-- <span class="">100 (Min)</span> -->
			</div>
			<div style="color: dimgrey;">{{ time }} Min</div>

			<h5>People need to serve</h5>
			<div class="d-flex">
				<!-- <span class="">0</span> -->
				<form class="flex-grow-1">
					<!-- <input @change="handleServingChange" v-model="serving" style="width: 100%" class="border-0" type="range" min="0" max="10" /> -->
					<el-slider  @change="handleServingChange" v-model="serving" show-input :max="8" :min="1"> </el-slider>
				</form>
				<!-- <span class="">10</span> -->
			</div>
			<div style="color:dimgrey;">{{ serving }} People</div>

			<div class="Diary" v-for="item in ingredients" :key="item.type">
				<h5>{{ item.type }}</h5>
				<table class="buttons" v-for="i in Math.ceil(item.ingredients.length / 4)" :key="i">
					<tr>
						<td v-for="ind in item.ingredients.slice((i - 1) * 4, i * 4)" :key="ind">
							<Button :name="ind" :id="ind" :styler="styler" />
						</td>
					</tr>
				</table>
			</div>
			<button type="button" class="btn btn-light" @click="handleClear">Clear</button>
			<button type="button" class="btn btn-primary" @click="handleConfirm">Confirm</button>
		</div>
		
		<div class="hidePanel" v-if="!showPanel">
			<button @click="onHide" class="bi bi-arrow-bar-right" style="font-size: 25px"></button>
		</div>
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
	data() {
		return {
			time: 30,
			serving: 3,
			ingredients: [],
			styler: "",
			screenWidth: "",
			showPanel: true

		};
	},
	created() {
		this.getIngredients();
	},
	mounted() {
		this.screenWidth = document.body.clientWidth;
		if (this.screenWidth <= 438) {
			this.styler = "el-button el-button--mini btn-outline-primary";
		}
		else {
		this.styler = "el-button el-button--medium is-round btn-outline-primary"
		}
		window.addEventListener("resize", () => {
			this.screenWidth = document.body.clientWidth;
			console.log(this.screenWidth);
			//this.screenHeight = document.body.clientHeight;
			if (this.screenWidth <= 438) {
			this.styler = "el-button el-button--mini btn-outline-primary";
			}
			else {
			this.styler = "el-button el-button--medium is-round btn-outline-primary"
			}
		});
	},
	methods: {
		onHide() {
			this.showPanel = !this.showPanel;
			this.$emit('movePanel', this.showPanel)
		},
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
	
};
// slider reference: https://mdbootstrap.com/snippets/jquery/mdbootstrap/944578
</script>
<style>

.buttons {
	width: 100%;
	/* table-layout: fixed; */
	/* border-collapse: collapse; */
}

.buttons label {
	width: 100%;
	margin: 0px;
}
#left-panel {
	display: flex;
	flex-direction: column;
	/* min-width: 400px; */

	padding: 20px;
	border-right: 3px solid #ddd;
	/* box-shadow: 6px 8px 6px -6px rgb(0 0 0 / 40%); */
}
#left-panel > * {
	margin: 10px 0;
}
</style>
