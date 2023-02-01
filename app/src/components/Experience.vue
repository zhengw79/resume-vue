<script>
export default {
	data() {
		return {
			experiences: [
				{
					title: "senior software developer",
					company: "freelancer - mississauga, ontario, canada",
					description: "Developed an inventory system using microservice architecture. Constructed portal services using GraphQL. Built data service on Postgres using TypeOrm. Applied gRPC for high-performance remote procedure calls (RPC) between microservices. Test-driven development integrated with the CircleCI platform. Dockerized services and push images to the docker hub. Deployed the distributed system on a cloudy platform using Kubernetes.",
					time: "Apr 2022 - Present",
					techstacks: "NestJS / Typescript / Angular / PostgresSql / gRpc / Docker / Kubernete"
				},
				{
					title: "senior web developer",
					company: "nri industrial inc - mississauga, ontario, canada",
					description: "Maintained a legacy cross-platform inventory system connected with eBay, amazon and NRI online shopping websites through RESTful API. Optimized the system's performance on the large-scale database. Constructed search and analytics engine for products free text searching using Elasticsearch. Developed new function modules based on business requirements. Fixed system issues and data discrepancies on the company's production server.",
					time: "Nov 2021 - Apr 2022",
					techstacks: "Laravel / VueJS / Elasticsearch / MySql / LAMP"
				},
				{
					title: "senior web frontend developer",
					company: "freelancer - mississauga, ontario, canada",
					description: "Developed web-based real-time video processing application. Integrated OpenCV library into a web app using web assembly. Built web game using Phaser.",
					techstacks: "ReactJS / Phaser / Ionic Capacitor",
					time: "Mar 2021 - Nov 2021"
				},
				{
					title: "senior software developer",
					company: "wily global - burlington, ontario, canada",
					description: "Constructed responsive campaign-oriented web applications using Bootstrap, ReactJS and Laravel. Built web-based real-time video processing app and online game. Developed hybrid apps using Apache Cordova on both iOS and android platforms. ",
					time: "Jan 2017 - Mar 2021",
					techstacks: "Laravel / ReactJS / Adobe AnimateCC / Apache Codorva / MySQL"
				},
				{
					title: "junior software developer",
					company: "tate group - burlington, ontario, canada",
					description: "Constructed monolithic web architecture using the Laravel framework. Analyzed business data reports and exploited data warehouse utilizing MySql.",
					time: "Sep 2015 - Jan 2017",
					techstacks: "Javascript / Jquery / PHP / MySql"
				},
				{
					title: "Teaching assistant and reasearch assistant",
					company: "ontario tech university",
					description: "Provided support to professor and lecturer. Given tutorial to university students. Occasionally be a substitute teacher for regular lecturers. Work with instructuor doing research and working on paper.",
					time: "Sep 2011 - Dec 2015",
					techstacks: "Python / C++ / OpenCV"
				}
			]
		}
	}
}
</script>
<template>
	<section class="resume-section" id="experience">
		<div class="resume-section-content">
			<h2 class="mb-5">Experience</h2>
			<div class="d-flex flex-column flex-md-row justify-content-between mb-5" v-for="exp in experiences">
				<div class="flex-grow-1">
					<h3 class="mb-0">{{ exp.title }}</h3>
					<div class="subheading mb-3">{{ exp.company }}</div>
					<p>{{ exp.description }}</p>
					<p><u><span class="inline-title">Tech Stacks</span></u>:&nbsp;{{ exp.techstacks }}</p>
				</div>
				<div class="flex-shrink-0">
					<span class="text-primary">{{ exp.time }}</span>
				</div>
			</div>
		</div>
	</section>
</template>

<style scoped>
.inline-title {
	font-style: italic;
}
</style>