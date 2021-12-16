<template>
	<div class="fullPanel">
		<div id="left-panel" v-if="showPanel">
			<div style="text-align: right;">
				<el-button @click="onHide" size="small" icon="el-icon-caret-left" class="hidden-md-and-up"></el-button>
			</div>
			<h5 style="font-weight:bold;">Time I have for the meal (minutes)</h5>
			<div class="d-flex" style="margin-bottom: 20px">
				<form class="flex-grow-1" style="z-index: 1" >
					<el-slider  @change="handleTimeChange" v-model="time" show-input :step="5" :max="60"> </el-slider>
				</form>
			</div>
			<!-- <div style="color: dimgrey; margin: 0px">{{ time }} Minutes</div> -->

			<h5 style="font-weight:bold;">People need to serve</h5>
			<div class="d-flex" style="margin-bottom: 20px">
				<form class="flex-grow-1">
					<el-slider  @change="handleServingChange" v-model="serving" show-input :max="8" :min="1"> </el-slider>
				</form>
			</div>
			<!-- <div style="color:dimgrey; margin: 0px">{{ serving }} People</div> -->

			<h5 style="font-weight:bold;">Pick the ingredients I have</h5>
			<div class="ingredients" v-for="item in ingredients" :key="item.type">
				<h6>{{ item.type }}</h6>
				<table class="buttons" v-for="i in Math.ceil(item.ingredients.length / 4)" :key="i">
					<tr>
						<td v-for="ind in item.ingredients.slice((i - 1) * 4, i * 4)" :key="ind">
							<Button :name="ind" :id="ind" :styler="styler" />
						</td>
					</tr>
				</table>
			</div>
			<div class="d-flex buttons">
				<el-button class="flex-grow-1" type="info"  @click="handleClear" plain round style="margin-bottom: 0px">Clear</el-button>
				<el-button class="flex-grow-1" type="primary" @click="handleConfirm" round>Confirm</el-button>
			</div>
		</div>
		
		<div class="hidePanel" v-if="!showPanel">
			<button class="pop-btn el-icon-caret-right" @click="onHide" icon="el-icon-caret-right"></button>
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
		if (this.screenWidth <= 950) {
			this.styler = "el-button el-button--mini btn-outline-primary";
		}
		else {
		this.styler = "el-button el-button--medium is-round btn-outline-primary"
		}
		window.addEventListener("resize", () => {
			this.screenWidth = document.body.clientWidth;
			console.log(this.screenWidth);
			//this.screenHeight = document.body.clientHeight;
			if (this.screenWidth <= 950) {
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
			var width = document.body.clientWidth;
			console.log(width)
			Ingredient.$emit('confirm');
			if( width < 600 ){
				this.showPanel = false;
				this.$emit('movePanel', this.showPanel)
			}
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
 .el-input--small {
	pointer-events: none !important;
 }
.fullPanel {
	height: 100%;
}
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
	height: 100%;
	display: flex;
	flex-direction: column;
	/* min-width: 400px; */
	padding: 0px 20px 20px 20px;
	border-right: 1px solid #ddd;
	box-shadow: 6px 0px 6px -6px rgb(0 0 0 / 40%);
}


#left-panel > * {
	margin: 10px 0;
}

@media (max-width: 968px){
	#left-panel > * {
		margin: 5px 0;
	}
}

.hidePanel {
	position: absolute;
	top: 60px;
	/* margin-top: 5px; */
	text-align: left;
	font-size: 16px;
}

.pop-btn::before{
	position: relative;
	left: -8px;
	color: #777;
}

.pop-btn {
	width: 18px;
	height: 50px;
	background-color: #eee;
	border: 0.75px solid #ddd;
	border-bottom-right-radius: 10px;
	border-top-right-radius: 10px;
	border-left: none;
}
</style>
