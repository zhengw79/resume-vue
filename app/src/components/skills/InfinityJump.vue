<script setup>
import BackButton from './BackButton.vue';
import Phaser from "phaser";
import Game from "./scenes/Game.scene.js";
import GameOver from "./scenes/GameOver.scene.js";
import { onMounted, onUnmounted } from 'vue';

let game;

onMounted(() => {
	const config = {
		type: Phaser.CANVAS,
		parent: "game",
		width: 480,
		height: 640,
		canvas: document.getElementById("canvas"),
		scene: [Game, GameOver],
		render: {
			antialias: true,
			antialiasGL: true
		},
		// scale: {
		// 	mode: Phaser.Scale.FIT,
		// 	autoCenter: Phaser.Scale.CENTER_BOTH,
		// 	width: '100%',
		// 	height: '100%'
		// },
		physics: {
			default: "arcade",
			arcade: {
				gravity: {
					y: 200
				},
				debug: false
			}
		}
	}

	game = new Phaser.Game(config);
});

onUnmounted(() => {
	if (game) {
		game.destroy(true, false);
	}
});
</script>
<template>
	<div class="container-fluid">
		<div class="row">
			<BackButton />
		</div>
		<div id="game" class="row container">
			<canvas id="canvas" width="480" height="640"/>
		</div>
	</div>
</template>

<style scoped>
a {
	cursor: pointer;
}

#canvas {
	max-width: 480px;
}
</style>