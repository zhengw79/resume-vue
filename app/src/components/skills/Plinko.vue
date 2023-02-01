<script setup>
import BackButton from './BackButton.vue';
import Phaser from 'phaser';
import { onMounted, onUnmounted } from 'vue';
import Game from "./plinko.scene/Game.scene";
import GameStart from './plinko.scene/Game.Start.scene';

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
		scene: [GameStart, Game],
		physics: {
			default: "matter",
			matter: {
				debug: false,
				gravity: {
					y: 0.7
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
		<div class="row">
			<div id="game" class="col-12 col-sm-12 col-md-12 col-lg-7 col-xl-7"><canvas id="canvas" class="rounded shadow"
					width="500" height="640"></canvas></div>
			<div class="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5 text-primary">
				<p>Features</p>
				<ul>
					<li>Phaser Game Engine</li>
					<li>MatterJS - Comprehensive physics engine.</li>
					<li>PhysicsEditor - Physics edtor for 2D collision shapes</li>
					<li>If the ball stopped by a pin, please refresh the page to restart.</li>
				</ul>
			</div>
		</div>
	</div>
</template>

