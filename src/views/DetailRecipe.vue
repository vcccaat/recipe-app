<template>
	<div>
		<HeaderBar />

		<!-- Part for Display Feature -->
		<div class="container" style="padding: 0px !important; margin-top:55px;">
		<div id="demo" class="carousel slide" data-bs-ride="carousel">
			<!-- <b-modal ref="sharePopup" id="modal-1" title="Thank you!" hide-footer>
				<p>Thanks for your sharing! Reward Points +1!</p>
			</b-modal> -->
			
			<div class="carousel-indicators" v-for="(item, index) in carousel" :key="index">
				<div>
					<button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
				</div>
				<div v-for="(item, index) in carousel" :key="index">
					<button type="button" data-bs-target="#demo" :data-bs-slide-to="index + 1"></button>
				</div>
			</div>
			<div class="carousel-inner">
				<div class="carousel-item active">
					<div class="carousel-img">
						<img :src="require('../../data/' + frontImage)" class="d-block w-100" alt="frontimg" />
					</div>
					<div class="carousel-caption d-md-block">
						<h5>{{ this.recipeName }}</h5>
					</div>
				</div>
				<div class="carousel-item" v-for="(item, index) in carousel" :key="index">
					<div class="carousel-img">
						<img :src="require('../../data/' + item)" class="d-block w-100" :alt="index" />
					</div>
					<div class="carousel-caption d-md-block">
						<h5>Step {{ index + 1 }}</h5>
					</div>
				</div>
			</div>

			<button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
				<span class="carousel-control-prev-icon" aria-hidden="true"></span>
				<span class="visually-hidden">Previous</span>
			</button>
			<button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
				<span class="carousel-control-next-icon" aria-hidden="true"></span>
				<span class="visually-hidden">Next</span>
			</button>
		</div>
		</div>
		<div class="container">
			<div class="row">
				<div class="col-8">
					<h3 class="title" style="margin: 10px 0 20px; font-weight: bold;">{{ this.recipe['name'] }}</h3>
				</div>
				<div class="col-4 text-end align-center" style="margin: 5px 0 20px;">
					<button type="button" class="btn btn-outline-warning btn-sm">Rating {{ this.recipe['rating'] }}</button>
				</div>
			</div>
			<div class="container">
				<div class="row" style="margin: 0px 30px">
					<div class="col-4">
						<div class="card" style="padding: 5px;">
							<i class="bi-alarm"></i>
							{{ this.recipe['time'] }} Min
						</div>
					</div>

					<div class="col-4">
						<div class="card" style="padding: 5px;"><i class="bi bi-emoji-smile"></i>{{ this.recipe['difficulty'] }}</div>
					</div>

					<div class="col-4">
						<div class="card" style="padding: 5px;">{{ this.recipe['serving'] }}<span>Serving</span></div>
					</div>
				</div>
			</div>
		</div>

		<div class="container">
			<h5 class="title" style="margin-top: 5px">Ingredients</h5>
			<ul>
				<li v-for="(item, index) in this.recipe['ingredients']" :key="index" class="text-start">
					{{ item }}
				</li>
			</ul>
			<h5 class="title">Steps</h5>
			<ul>
				<li v-for="(item, index) in this.recipe['steps']" :key="index" class="text-start">
					{{ item }}
				</li>
			</ul>
		</div>

		<!-- Part for Feedback Feature -->
		<el-button style="margin-bottom: 5vh" round size="large" type="primary" icon="el-icon-edit" @click="handleUpload">Share to earn rewards!</el-button>
		<el-dialog title="Feedback" :visible.sync="dialogVisible">
			<div class="block" style="margin-bottom: 10px">
				<span class="demonstration">Satisfied with the recipe?</span>
				<el-rate v-model="rating" :colors="colors"> </el-rate>
			</div>

			<!-- Upload pictures -->
			<span class="demonstration">Share picture of your dishes for rewards!</span>
			<el-upload
				style="padding: 10px"
				list-type="picture-card"
				action="https://jsonplaceholder.typicode.com/posts/"
				ref="upload"
				:auto-upload="false"
				:on-remove="handleRemove"
				:on-change="handleChange"
				:on-success="handleSuccess"
				:file-list="this.fileList"
			>
				<i slot="default" class="el-icon-plus"></i>
			</el-upload>

			<!--Input comment -->
			<el-input
				type="textarea"
				:autosize="{ minRows: 2, maxRows: 4 }"
				placeholder="Please type your comments here..."
				maxlength="200"
				show-word-limit
				v-model="comment"
			>
			</el-input>

			<span slot="footer" class="dialog-footer">
				<el-button @click="dialogVisible = false">Cancel</el-button>
				<el-button @click="handleShare" type="success">Confirm</el-button>
			</span>
		</el-dialog>
	</div>
</template>

<script>
import Ingredient from "../components/Ingredient.js";
import mockData from '../../data/mock_data.json';
import HeaderBar from '@/components/HeaderBar.vue';
export default {
	components: {
		HeaderBar,
	},
	data() {
		return {
			dialogVisible: false,
			recipe: {},
			carousel: [],
			recipeName: this.$route.params.name,
			fileList: [],
			rating: null,
			comment: '',
			colors: ['#99A9BF', '#F7BA2A', '#FF9900'],
			cacheList: [],
			sendList: [],
			src: '',
			noUploadPic: require('/data/img/NoImgUploaded.jpeg'),
		};
	},
	created() {
		console.log('mockdata', this.recipeName, mockData[this.recipeName]);
		this.recipe = mockData[this.recipeName];
		this.frontImage = mockData[this.recipeName]['img'].slice(-1)[0];
		this.carousel = mockData[this.recipeName]['img'].slice(0, -1);
		// this.sendList.push(this.cacheList)
		// var parsed = JSON.stringify(this.sendList);
		// localStorage.setItem('feedback', parsed);
	},
	methods: {
		submitRating() {},
		handleSuccess() {
			console.log('upload success');
		},
		handleRemove(file, fileList) {
			console.log("file:", file, "filelist:", fileList);
			this.cacheList.splice(-1,1);
			// return false;
		},
		handleChange(file, fileList) {
			console.log("file:", file, "filelist:", fileList);
			const isJPG = /\.(?:jpg|png|jpeg)$/.test(file.name.toLowerCase());
			const isLt2M = file.size / 1024 / 1024 < 2;
			if (!isJPG) {
				this.$message.error('Sorry we only support JPG/JPEG/PNG!');
				fileList.splice(-1, 1); //移除选中图片
				return false;
			}
			if (!isLt2M) {
				this.$message.error('上传头像图片大小不能超过 2MB!');
				fileList.splice(-1, 1); //移除选中图片
				return false;
			}
			this.getBase64(file.raw).then((res) => {
				this.cacheList.push(res);
				this.src = res;
				const params = res.split(',');
				console.log(params, 'params');
				if (params.length > 0) {
					this.proofImage = params[1];
				}
			});
			console.log("cache:", this.cacheList)

		},
		handleUpload() {
			this.dialogVisible = true;
			this.cacheList = [];
			this.cacheList.push(this.recipeName);
			this.cacheList.push('No comment content.');
			this.cacheList.push(NaN);
		},
		handleShare() {
			if (this.$refs.upload.uploadFiles.length == 0 && this.comment == '' && !this.rating){
				this.$message.error("Please don't leave a blank feedback.");
				return false;
			}
			// Transfer the feedback content to the profile page
			if (this.$refs.upload.uploadFiles.length > 0) {
				const currentPoints = localStorage.getItem('rewardPoints');
				localStorage.setItem('rewardPoints', Number(currentPoints) + 1);
				// this.$refs['sharePopup'].show();
				this.$message({
				message: 'Thanks for your sharing! Reward Points +1!',
				type: 'success'
				});
				this.$refs.upload.uploadFiles = [];
			}
			if (this.cacheList.length == 3) {
				// handle image uploaded
				this.cacheList.push(this.noUploadPic);
			}
			if (this.comment != '') {
				// handle comment uploaded
				this.cacheList[1] = this.comment;
			}
			if (this.rating) {
				// handle ratings uploaded
				this.cacheList[2] = this.rating;
			}
			if (localStorage.getItem('feedbackPics')) {
				this.sendList = JSON.parse(localStorage.getItem('feedbackPics'));
				console.log('已有feedback存在,添加中...', this.sendList);
			}
			this.sendList.push(this.cacheList);
			var parsed = JSON.stringify(this.sendList);
			localStorage.setItem('feedbackPics', parsed);
			console.log('放入后的数组', this.sendList);
			this.cacheList = [];

			Ingredient.$emit('reward');

			(this.rating = null), (this.comment = ''), (this.dialogVisible = false);
		},
		getBase64(file) {
			return new Promise(function (resolve, reject) {
				let reader = new FileReader();
				let imgResult = '';
				reader.readAsDataURL(file);
				reader.onload = function () {
					imgResult = reader.result;
				};
				reader.onerror = function (error) {
					reject(error);
				};
				reader.onloadend = function () {
					resolve(imgResult);
				};
			});
		},
	},
};
</script>
<style>
.el-textarea {
	width: 50% !important;
}

@media (max-width: 768px){
  .el-textarea {
	width: 100% !important;
	}
}

.container {
	padding: 5px;
}
#demo {
	padding: 5px;
	margin: auto;
}
img {
	height: 40vh;
	width: 100%;
	object-fit: cover;
	object-position: center;
}
.title {
	text-align: left;
	margin: 20px 0px;
}
.el-dialog {
	width: 80vw !important;
}
</style>
