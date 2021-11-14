<template>
	<div>
		<div id="demo" class="carousel slide" data-bs-ride="carousel">
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
						<img src="../../data/img/omelet_5.jpg" class="d-block w-100" alt="omelet_5" />
					</div>
					<div class="carousel-caption d-md-block">
						<h5>Omelet</h5>
					</div>
				</div>
				<!-- <div class="carousel-item" v-for="(item, index) in images" :key="index">
					<div class="carousel-img">
						<img :src="'../../data/' + item" class="d-block w-100" :alt="index" />
					</div>
					<div class="carousel-caption d-md-block">
						<h5>Step {{ index+1 }}</h5>
					</div>
				</div> -->
				<div class="carousel-item">
					<div class="carousel-img">
						<img src="../../data/img/omelet_1.jpg" class="d-block w-100" alt="omelet_1" />
					</div>
					<div class="carousel-caption  d-md-block">
						<h5>Step1</h5>
					</div>
				</div>
				<div class="carousel-item">
					<div class="carousel-img">
						<img src="../../data/img/omelet_2.jpg" class="d-block w-100" alt="omelet_2" />
					</div>
					<div class="carousel-caption d-md-block">
						<h5>Step2</h5>
					</div>
				</div>
				<div class="carousel-item">
					<div class="carousel-img">
						<img src="../../data/img/omelet_3.jpg" class="d-block w-100" alt="omelet_3" />
					</div>
					<div class="carousel-caption d-md-block">
						<h5>Step3</h5>
					</div>
				</div>
				<div class="carousel-item">
					<div class="carousel-img">
						<img src="../../data/img/omelet_4.jpg" class="d-block w-100" alt="omelet_4" />
					</div>
					<div class="carousel-caption d-md-block">
						<h5>Step4</h5>
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
			<h3 id="recipe-name">{{ this.recipe['name'] }}</h3>
			<div class="container">
				<div class="row" style="margin: 0px 30px">
					<div class="col-4">
						<div class="card">
							<i class="bi-alarm"></i>
							{{ this.recipe['time'] }}
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
	</div>
</template>

<script>
import mockData from '../../data/mock_data.json';

export default {
	created() {
		this.recipe = mockData['Omelet'];
		this.images = mockData['Omelet']['img'];
	},
	methods: {},
	components: {},
	data() {
		return {
			recipe: {},
			images: [],
		};
	},
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
#recipe-name {
	text-align: left;
	margin: 20px 0px;
}
</style>
