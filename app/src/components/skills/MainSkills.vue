<script>
export default {
	data() {
		return {
			skills: ["fab fa-html5", "fab fa-css3-alt", "fab fa-js-square", "fab fa-angular", "fab fa-react", "fab fa-node-js", "fab fa-wordpress", "fa-brands fa-laravel", "fab fa-npm"],
			workflows: ["Mobile-First, Responsive Design", "Cross Browser Testing & Debugging"],
			demos: [
				{ url: "/skills/game", txt: "Phaser Animation in Vue" },
				{ url: "/skills/jump", txt: "Infinity Jump" },
				{ url: "/skills/plinko", txt: "Plinko"},
				{ url: "/skills/matching", txt: "Matching"}
			],
			images: [
				{ url: "/skills/photo-frame", txt: "Photo Frame" }
			]
		}
	}
}
</script>

<template>
	<div class="resume-section-content">
		<h2 class="mb-5">Skills</h2>
		<div class="subheading mb-3">Programming Languages & Tools</div>
		<ul class="list-inline dev-icons">
			<li class="list-inline-item mx-3" v-for="skill in skills"><i :class="`${skill}`"></i></li>
		</ul>
		<div class="subheading mb-3">Workflow</div>
		<ul class="fa-ul mb-0">
			<li v-for="wf in workflows">
				<span class="fa-li"><i class="fas fa-check"></i>
				</span>
				{{ wf }}
			</li>
		</ul>
		<div class="subheading my-3">Game Demo</div>
		<ul class="fa-ul mb-0">
			<li v-for="demo in demos">
				<span class="fa-li"><i class="fa-solid fa-wand-magic-sparkles"></i></span>&nbsp;
				<router-link :to="demo.url" class="game_url">{{ demo.txt }}</router-link>
			</li>
		</ul>
		<div class="subheading my-3">Real-time image & video processing</div>
		<ul class="fa-ul mb-0">
			<li v-for="img in images">
				<span class="fa-li"><i class="fa-solid fa-wand-magic-sparkles"></i></span>&nbsp;
				<router-link :to="img.url" class="game_url">{{ img.txt }}</router-link>
			</li>
		</ul>
	</div>
</template>

<style>
.game_url {
	text-decoration: none;
}
</style>