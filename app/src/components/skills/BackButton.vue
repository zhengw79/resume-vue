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
	<div class="row col-2 m-2">
		<button type="button" class="btn btn-warning mb-1" @click="backToHome">
			<i class="fa-solid fa-arrow-left"></i> &nbsp;Back
		</button>
	</div>
</template>

<style scoped>
a {
	cursor: pointer;
}
.btn {
	color: white;
}
</style>