<script setup>
import BackButton from './BackButton.vue';
import Phaser from 'phaser';
import { onMounted, onUnmounted } from 'vue';
import Game from "./plinko.scene/Game.scene";

let game;

onMounted(() => {
	const config = {
		type: Phaser.CANVAS,
		parent: "game",
		width: 500,
		height: 640,
		canvas: document.getElementById("canvas"),
		render: {
			antialias: true,
			antialiasGL: true
		},
		scene: [Game],
		physics: {
			default: "matter",
			matter: {
				debug: false,
				gravity: {
					y: 1
				}
			}
		}
	};

	game = new Phaser.Game(config);
});

onUnmounted(() => {
	game.destroy(true, false);
});
</script>

<template>
	<div class="container-fluid">
		<div class="row">
			<BackButton />
		</div>
		<div id="game" class="row container">
			<canvas id="canvas" width="500" height="640"></canvas>
		</div>
	</div>
</template>

<style scoped>
#canvas {
	max-width: 480px;
}
</style>