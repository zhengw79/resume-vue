<script setup>
import BackButton from './BackButton.vue';
import Phaser from "phaser";
import Game from "./jump.scene/Game.scene.js";
import GameOver from "./jump.scene/GameOver.scene.js";
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
		<BackButton />
		<div class="row">
			<div id="game" class="col-12 col-sm-12 col-md-12 col-lg-7 col-xl-7">
				<canvas id="canvas" width="480" height="640" class="rounded shadow"></canvas>
			</div>
			<div class="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5 text-primary">
				<p>Features</p>
				<ul>
					<li>Web Game in desktop browser</li>
					<li>Phaser Game Engine</li>
					<li>Arcade Physics - 2D JS Physics Engine</li>
					<li>Use arrow key (<i class="fa-solid fa-arrows-to-dot"></i>) to control "bunny"</li>
				</ul>
			</div>
		</div>

	</div>
</template>