<script>
export default {
	data() {
		return {
			first_name: "zheng",
			last_name: "wang",
			address: "Shoreline Dr. · Mississauga, Ontario, (647) 608-6213 ·",
			email: "zhengwang1279@outlook.com",
			blog: [
				"I have over ten years of experience in web application development and currently work as a freelancer focusing on microservice and cloudy platforms. I dedicate to implementing single-page apps (SPA) using Angular, ReactJS, and VueJS backed by a microservice system deployed on a cloudy platform.",
				" As a full-stack developer, my projects encompass monolithic and microservice apps. I am good at leveraging agile frameworks to support business philosophy and adopt an iterative approach for long-term software development."],
			social_urls: [
				{ url: "https://www.linkedin.com/in/zheng-wang-2797a558/", icon_class: "fab fa-linkedin-in" },
				{ url: "https://github.com/zhengw79/", icon_class: "fab fa-github" }
			]
		}
	}
}
</script>

<template>
	<!---------|| About ||--------->
	<section class="resume-section" id="about">
		<div class="resume-section-content">
			<h1 class="mb-0">
				{{ first_name }}
				<span class="text-primary" v-text="last_name"></span>
			</h1>
			<div class="subheading mb-5">
				{{ address }}
				<a :href="`mailto:${email}`">{{ email }}</a>
			</div>
			<p class="lead mb-5" v-for="b in blog">
				{{ b }}
			</p>
			<div class="social-icons">
				<a v-for="item in social_urls" class="social-icon" :href="item.url"><i :class="item.icon_class"></i></a>
			</div>
		</div>
	</section>
</template>