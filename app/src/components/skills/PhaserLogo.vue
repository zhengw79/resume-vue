<script setup>
import BackButton from './BackButton.vue';
import { onMounted } from 'vue';
import Phaser from "phaser";

function preload() {
	this.load.setBaseURL('./');
	this.load.image('sky', './assets/imgs/phaser/space3.png');
	this.load.image('logo', './assets/imgs/phaser/sprites/phaser3-logo.png');
	this.load.image('red', './assets/imgs/phaser/particles/red.png');
}

function create() {
	this.add.image(400, 300, 'sky');
	const particles = this.add.particles('red');
	const emitter = particles.createEmitter({
		speed: 100,
		scale: { start: 1, end: 0 },
		blendMode: 'ADD'
	});

	let logo = this.physics.add.image(400, 100, 'logo');
	logo.setVelocity(100, 200);
	logo.setBounce(1, 1);
	logo.setCollideWorldBounds(true);

	emitter.startFollow(logo);
}

onMounted(() => {
	const config = {
		type: Phaser.CANVAS,
		parent: "game",
		width: 800,
		height: 600,
		canvas: document.getElementById("canvas"),
		physics: {
			default: 'arcade',
			arcade: {
				gravity: { y: 200 }
			}
		},
		scene: {
			preload: preload,
			create: create
		}
	};
	new Phaser.Game(config);
});
</script>

<template>
	<div class="container-fluid">
		<div class="row"><BackButton /></div>
		<div id="game" class="row">
			<canvas id="canvas" class="rounded img-fluid" />
		</div>
	</div>
</template>

<style scoped>
a {
	cursor: pointer;
}
canvas {
	max-width: 600px;
}
</style>