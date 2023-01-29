<script>
export default {
	data() {
		return {
			skills: ["fa-html5", "fa-css3-alt", "fa-js-square", "fa-angular", "fa-react", "fa-node-js", "fa-wordpress", "fa-npm"],
			workflows: ["Mobile-First, Responsive Design", "Cross Browser Testing & Debugging"]
		}
	}
}
</script>

<template>
	<section class="resume-section" id="skills">
		<router-view></router-view>
	</section>
</template>

<style>
.game_url {
	text-decoration: none;
}
</style>