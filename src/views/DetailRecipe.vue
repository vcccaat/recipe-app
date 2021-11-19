<template>
	<div>
		<div id="demo" class="carousel slide" data-bs-ride="carousel">
			<b-modal ref="sharePopup" id="modal-1" title="Thank you!" hide-footer>
				<p>Thanks for your sharing! Reward Points +1!</p>
			</b-modal>
			<div class="carousel-indicators">
				<button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
				<button type="button" data-bs-target="#demo" data-bs-slide-to="1" aria-label="Slide 2"></button>
				<button type="button" data-bs-target="#demo" data-bs-slide-to="2" aria-label="Slide 3"></button>
				<button type="button" data-bs-target="#demo" data-bs-slide-to="3" aria-label="Slide 4"></button>
				<button type="button" data-bs-target="#demo" data-bs-slide-to="4" aria-label="Slide 5"></button>
			</div>
			<div class="carousel-inner">
				<div class="carousel-item active">
					<div class="carousel-img">
						<img :src="require('../../data/' + frontImage)" class="d-block w-100" alt="frontimg" />
					</div>
					<div class="carousel-caption d-md-block">
						<h5>{{this.recipeName}}</h5>
					</div>
				</div>
				<div class="carousel-item" v-for="(item, index) in carousel" :key="index">
					<div class="carousel-img">
						<img :src="require('../../data/' + item)" class="d-block w-100" :alt="index" />
					</div>
					<div class="carousel-caption d-md-block">
						<h5>Step {{ index+1 }}</h5>
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
		<div class="container">
      <div class='row'>
			<div class='col'><h3 class="title">{{ this.recipe['name'] }}</h3></div>
      <div class='col  text-end align-center'><button type="button" class="btn btn-outline-warning  btn-sm">Rating {{this.recipe['rating']}}</button></div>
      </div>
      <div class="container">
		<div class="row" style="margin: 0px 30px">
			<div class="col-4">
				<div class="card">
					<i class="bi-alarm"></i>
					{{ this.recipe['time'] }} Min
				</div>
			</div>

			<div class="col-4">
				<div class="card"><i class="bi bi-emoji-smile"></i>{{ this.recipe['difficulty'] }}</div>
			</div>

			<div class="col-4">
				<div class="card">{{ this.recipe['serving'] }}<span>Serving</span></div>
			</div>
		</div>
	</div>
    </div>

    <div class="container">
		<h5 class="title">Ingredients</h5>
		<ul>
			<li v-for="item,index in this.recipe['ingredients']" :key="index" class="text-start">
				{{item}}
			</li>
		</ul>
		<h5 class="title">Steps</h5>
		<ul>
			<li v-for="item,index in this.recipe['steps']" :key="index" class="text-start">
				{{item}}
			</li>
		</ul>
		<el-upload
			class="upload-demo"
			action="https://jsonplaceholder.typicode.com/posts/"
			ref="upload"
			:on-preview="handlePreview"
			:auto-upload='false'
			:on-remove="handleRemove"
			:on-success="handleSuccess"
			:file-list="this.fileList"
			list-type="picture">
			<el-button size="large" type="primary">Share my dishes</el-button>
			<div slot="tip" class="el-upload__tip">Only allowed png/jpg no larger than 2MB</div>
		</el-upload>
		<el-button @click="handleShare" size="large" type="success">Confirm</el-button>
		</div>
	</div>
</template>

<script>
import mockData from '../../data/mock_data.json';

export default {
	data() {
		return {
			recipe: {},
			carousel: [],
			recipeName: this.$route.params.name,
			fileList: []
		};
	},
	created() {
		console.log(this.recipeName)
		this.recipe = mockData[this.recipeName];
		this.frontImage = mockData[this.recipeName]['img'].slice(-1)[0];
		this.carousel = mockData[this.recipeName]['img'].slice(0,-1);
	},
	methods: {    
		submitRating(){
		},
		handleSuccess() {
			console.log('upload success')
		},
		handleRemove(file, fileList) {
			console.log(file, fileList);
		},
		handlePreview(file) {
			console.log(file);
		},
		handleShare() {
			if (this.$refs.upload.uploadFiles.length > 0) {
				const currentPoints = localStorage.getItem('rewardPoints')
				localStorage.setItem('rewardPoints', Number(currentPoints)+1)
				this.$refs["sharePopup"].show()
				this.$refs.upload.uploadFiles = []
			}
		}
	},
	components: {
	}
};
</script>
<style>
.container {
	padding: 5px;
}
#demo {
	padding: 5px;
	margin: auto;
}
img {
  height: 13rem;
	width: 100%;
  object-fit: cover;
  object-position: center;
}
.title {
	text-align: left;
	margin: 20px 0px;
}

</style>
