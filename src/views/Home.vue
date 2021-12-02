<template>
	<div class="home">
		<el-row>
			<el-col :xs="xsLeft" :sm="xsLeft" :lg="8">
				<LeftPanel @movePanel="movePanel" />
			</el-col>
			<el-col :xs="xsRight" :sm="xsRight" :lg="16">
				<b-modal ref="rewardPopup" id="modal-1" title="Welcome!" hide-footer>
					<p>Login First Time Today! Reward Points +1!</p>
				</b-modal>
				<div class="header-bar">
					<el-popover placement="top-start" width="200" trigger="click" :content="'Your current reward points: ' + this.rewardPoints">
						<el-button slot="reference">Reward points</el-button>
					</el-popover>
					<router-link to="/reward">
						<i class="bi bi-person-circle" style="font-size: 30px"></i>
					</router-link>
					<div>
						<SearchBar v-show="showSearch" @search-sent="search" :errMsg="errMsg" :showError="showError" />
						<div class="">
							<div class="card-container">
								<div class="cards" v-for="(item, index) in filteredList" :key="index">
									<Card :recipe="item" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</el-col>
		</el-row>
	</div>
</template>

<script>
// @ is an alias to /src
import 'bootstrap/dist/css/bootstrap.css';
import RecipeData from '/data/mock_data.json';
import LeftPanel from '@/views/LeftPanel.vue';
// Right panel components:
import SearchBar from '@/components/SearchBar.vue';
import Card from '@/components/Card.vue';
import Ingredient from '../components/Ingredient.js';

export default {
	name: 'Home',
	components: {
		LeftPanel,
		SearchBar,
		Card,
	},
	data() {
		return {
			xsLeft: 22,
			xsRight: 2,
			showSearch: true,
			showError: false,
			showPanel: true,
			errMsg: '',
			recipeList: {},
			filteredList: {},
			ingredients: new Set(),
			time: 0,
			serving: 0,
			rewardPoints: 0,
		};
	},
	created() {
		this.init();
	},
	mounted: function () {
		this.rewardPoints = 'rewardPoints' in localStorage ? localStorage.getItem('rewardPoints') : 10;
		console.log(this.$cookies.get('popped'));
		if (this.$cookies.get('popped') != 'yes') {
			//cookie 中没有 popped 则赋给他一个值（此时弹框显示）
			document.cookie = 'popped = yes';
			this.rewardPoints = Number(this.rewardPoints) + 1;
			this.$refs['rewardPopup'].show();
			this.$cookies.set('popped', 'yes', '1d');
		}
		localStorage.setItem('rewardPoints', this.rewardPoints);

		Ingredient.$on('confirm', () => {
			this.confirm();
		});
		Ingredient.$on('clear', () => {
			this.recipeList = RecipeData;
			this.filteredList = JSON.parse(JSON.stringify(this.recipeList));
		});
		Ingredient.$on('click-ingredient', (data) => {
			if (data[1] === false) {
				this.ingredients.add(data[0]);
			} else if (this.ingredients.has(data[0])) {
				this.ingredients.delete(data[0]);
			}
		});
		Ingredient.$on('slider', (data) => {
			// filter function reference: https://stackoverflow.com/questions/5072136/javascript-filter-for-objects/37616104
			Object.filter = function (obj, predicate) {
				let result = {},
					key;
				for (key in obj) {
					if (predicate(obj[key])) {
						result[key] = obj[key];
					}
				}
				return result;
			};
			if (data[1] === 'time') {
				this.time = data[0];
				this.filteredList = Object.filter(this.recipeList, (recipe) => recipe.time <= this.time);
			} else {
				this.serving = data[0];
				this.filteredList = Object.filter(this.recipeList, (recipe) => recipe.serving <= this.serving);
			}
		});
	},
	methods: {
		movePanel: function (showPanel) {
			if (!showPanel) {
				this.xsLeft = 2;
				this.xsRight = 22;
			} else {
				this.xsLeft = 22;
				this.xsRight = 2;
			}
		},
		init: function () {
			this.recipeList = RecipeData;
			this.filteredList = JSON.parse(JSON.stringify(this.recipeList));
		},
		confirm: function () {
			if (
				// if input is nothing, show all recipes
				!this.ingredients ||
				this.ingredients.size == 0
			) {
				this.recipeList = RecipeData;
				this.filteredList = JSON.parse(JSON.stringify(this.recipeList));
			} else {
				// if there is a search input, find if there has any matched content
				this.recipeList = {}; // clear the display list
				this.filteredList = {};
				this.ingredients.forEach((d) => {
					const regStr = '(' + d.toLowerCase() + ')([\\s]*)';
					const reg = new RegExp(regStr);
					for (let i in RecipeData) {
						for (let j in RecipeData[i].ingredients) {
							let name = RecipeData[i].ingredients[j].toLowerCase(); // make it match either lowercase / uppercase
							const recs = name.split(' ').join('');
							let regMatch = recs.match(reg);
							if (regMatch !== null) {
								this.$set(this.recipeList, i, RecipeData[i]); // if matched, add it to the display list
								this.filteredList = JSON.parse(JSON.stringify(this.recipeList));
							}
						}
					}
				});
			}
		},
		search: function (input) {
			console.log('Received serch input:', input);
			this.showError = false; // hide the error alert if it's not hidden yet
			if (
				// if input is nothing, show all recipes
				input.length == 0 ||
				input.split(' ').join('').length == 0 ||
				input == null
			) {
				this.recipeList = RecipeData;
				this.filteredList = JSON.parse(JSON.stringify(this.recipeList));
			} else {
				// if there is a search input, find if there has any matched content
				this.recipeList = {}; // clear the display list
				let regStr = ''; // 初始化正则表达式
				for (let i = 0; i < input.length; i++) {
					regStr = regStr + '(' + input[i] + ')([\\s]*)'; // 跨字匹配
				}
				let reg = new RegExp(regStr);
				// Start looping all the recipes
				for (let i in RecipeData) {
					let name = RecipeData[i].name.toLowerCase(); // make it match either lowercase / uppercase
					let regMatch = name.match(reg);
					if (regMatch !== null) {
						this.$set(this.recipeList, i, RecipeData[i]); // if matched, add it to the display list
						this.filteredList = JSON.parse(JSON.stringify(this.recipeList));
					}
				}
				// Show message if there's no result found
				if (JSON.stringify(this.recipeList) == '{}') {
					this.showError = true;
					this.errMsg = "Sorry, we didn't find any matched recipes";
				}
			}
		},
	},
};
</script>
<style>
.modal-backdrop {
	opacity: 0.3;
}

.header-bar {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 2vh;
	/* padding-bottom: 10px; */
	border-bottom: 2px solid #ddd;
	box-shadow: 6px 8px 6px -6px rgb(0 0 0 / 20%);
}
/* .header-bar > * {
	margin: 20px;
} */

.card-container {
	display: flex;
	flex-direction: column;
	/* width: 850px; */
	/* display: grid;
	grid-gap: 10px;
	grid-template-columns: 1fr 1fr;
	grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); */
}
a {
	text-decoration: none !important;
	color: #2c3e50 !important;
}
</style>
