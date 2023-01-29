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
	<div class="resume-section-content">
		<h2 class="mb-5">Skills</h2>
		<div class="subheading mb-3">Programming Languages & Tools</div>
		<ul class="list-inline dev-icons">
			<li class="list-inline-item mx-3" v-for="skill in skills"><i :class="`fab ${skill}`"></i></li>
		</ul>
		<div class="subheading mb-3">Workflow</div>
		<ul class="fa-ul mb-0">
			<li v-for="wf in workflows">
				<span class="fa-li"><i class="fas fa-check"></i>
				</span>
				{{ wf }}
			</li>
		</ul>
		<div class="subheading my-3">Demo</div>
		<ul class="fa-ul mb-0">
			<li>
				<span class="fa-li"><i class="fa-solid fa-wand-magic-sparkles"></i></span>&nbsp;
				<router-link to="/skills/game" class="game_url">Phaser Animation in Vue</router-link>
			</li>
		</ul>
	</div>
</template>

<style>
.game_url {
	text-decoration: none;
}
</style>