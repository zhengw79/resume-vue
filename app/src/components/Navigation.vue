<script>
export default {
	data() {
		return {
			profile: "./assets/imgs/profile.jpeg",
			items: [
				{
					url: "about",
					label: "about"
				}, {
					url: "experience",
					label: "experiences"
				},
				{
					url: "education",
					label: 'education'
				},
				{
					url: "skills",
					label: "skills & demos"
				},
				{
					url: "publications",
					label: "publications"
				}
			],
		}
	},
	methods: {
		clickNavLink(url) {
			console.log(url);
			this.$router.replace(`/${url}`);
		}
	}
}
</script>

<template>
	<!-- Navigation-->
	<nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
		<a class="navbar-brand js-scroll-trigger" href="#">
			<span class="d-block d-lg-none">Zheng Wang</span>
			<span class="d-none d-lg-block">
				<img class="img-fluid img-profile rounded-circle mx-auto mb-2" :src="profile" alt="zheng" />
			</span>
		</a>
		<button class="navbar-toggler" type="button" data-bs-toggle="collapse"
			data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
			aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
		<div class="collapse navbar-collapse" id="navbarResponsive">
			<ul class="navbar-nav">
				<li class="nav-item" v-for="item in items">
					<a :class="this.$route.name===item.url ? 'nav-link active':'nav-link'" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show" href="" @click='clickNavLink(item.url)'>{{ item.label }}</a>
				</li>
			</ul>
		</div>
	</nav>
</template>