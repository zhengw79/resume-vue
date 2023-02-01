<script setup>
import { onMounted } from 'vue';

onMounted(() => {
	const navLinks = document.querySelectorAll('.nav-item');
	const menuToggle = document.getElementById('navbarResponsive');
	const bsCollapse = new bootstrap.Collapse(menuToggle);
	navLinks.forEach((l) => {
		l.addEventListener('click', () => {
			bsCollapse.toggle();
		})
	})
});
</script>
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
	}
}
</script>

<template>
	<!-- Navigation-->
	<nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
		<a class="navbar-brand js-scroll-trigger" href="#page-top">
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
					<router-link class="nav-link" :to="`/${item.url}`">{{ item.label }}</router-link>
				</li>
			</ul>
		</div>
	</nav>
</template>