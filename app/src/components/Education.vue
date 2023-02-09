<script>
export default {
	data() {
		return {
			universities: [
				{
					name: "ontario tech university",
					logo: "./assets/imgs/ontario-tech-u.png",
					url: "https://ontariotechu.ca/",
					degree: "Master of Science (M.Sc.)",
					location: "Oshawa, Ontario, Canada",
					field: "Computer Science - Machine Learning, Computer Vision",
					memo: "Concentrate on machine learning, specifically computer vision. Meanwhile, two paper were published at the Tenth Conference on Computer and Robot Vision in 2013.",
					time: "Sep 2011 - Oct 2013"
				},
				{
					name: "the hong kong polytechnic university",
					logo: "./assets/imgs/poly-u.jpeg",
					url: "https://www.polyu.edu.hk/",
					degree: "master of science (M.Sc.)",
					location: "Hong Kong, China",
					field: "computer software engineering",
					memo: "Graduated with DISTINCTION. Focus on the study of modern web framework. Research area cover algorithm design, software quality, data mining and database.",
					time: "Sep 2005 - Sep 2007"
				},
				{
					name: "university of chinese academy of sciences",
					url: "https://english.ucas.ac.cn/",
					degree: "master of engineering (M.Eng.)",
					location: "Beijing, China",
					field: "computer science",
					memo: "Focus on software engineering, courses includes software architecture, software design pattern, software quality etc.",
					time: "Sep 2004 - Sep 2007"
				},
				{
					name: "beijing union university",
					url: "https://www.buu.edu.cn/indexe/indexe.htm",
					degree: "bachelor of technology (B.Tech.)",
					location: "Beijing, China",
					field: "electronics and information technology",
					memo: "Graduate with scholarship. Courses include computer programming (C/C++), algorithm design, digital circuits, and signal processing.",
					time: "Sep 1998 - Sep 2002"
				}
			]
		}
	}
}
</script>

<template>
	<section class="resume-section" id="education">
		<div class="resume-section-content">
			<h2 class="mb-5">Education</h2>
			<div class="d-flex flex-column flex-md-row justify-content-between mb-5" v-for="univ in universities">
				<div class="flex-grow-1">
					<h3 class="mb-0">{{ univ.name }}&nbsp;&nbsp;<a :href="univ.url" target="_blank" class="univ-link"><i class="fa-solid fa-building-columns"></i></a></h3>
					<div class="subheading mb-3">{{ univ.degree }}</div>
					<div class="field">{{ univ.field }}</div>
					<div>{{ univ.location }}</div>
					<p class="memo mt-4">{{ univ.memo }}</p>
				</div>
				<div class="flex-shrink-0">
					<span class="text-primary">{{ univ.time }}</span>
				</div>
			</div>
		</div>
	</section>
</template>

<style scoped>
.memo {
	font-size: small;
}

.field {
	text-transform: capitalize;
}

.univ-link {
	/* font-size: 18px; */
}
</style>