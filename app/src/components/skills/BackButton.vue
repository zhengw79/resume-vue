<script>
export default {
	methods: {
		backToHome() {
			this.$router.push({ path: "/skills" });
		}
	}
}
</script>
<template>
	<a class="nav-link" @click="backToHome"><i class="fa-solid fa-arrow-left"></i> &nbsp;Back</a>
</template>