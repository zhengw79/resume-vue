<script setup>
import { onMounted, onUnmounted } from 'vue';
import BackButton from './BackButton.vue';
import Game from "./match.scene/Game.scene";
import GameStart from './match.scene/Game.start';
import GameOver from "./match.scene/Game.over";

let game;

onMounted(() => {
	const config = {
		type: Phaser.CANVAS,
		parent: "game",
		width: 1024,
		height: 1024,
		canvas: document.getElementById("canvas"),
		render: {
			antialias: true,
			antialiasGL: true
		},
		scene: [GameStart, Game, GameOver],
	};

	game = new Phaser.Game(config);
});

onUnmounted(() => {
	game.destroy();
});
</script>

<template>
	<div class="container-fluid">
		<BackButton />
		<div class="row">
			<div id="game" class="col-12 col-sm-12 col-md-12 col-lg-7 col-xl-7">
				<canvas id="canvas" class="rounded shadow" width="1024" height="1024"></canvas>
			</div>
			<div class="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5 text-primary">
				<h4>How to play?</h4>
				<ul>
					<li>Click "Start" button to play.</li>
					<li>Find all image pairs in 30 seconds.</li>
				</ul>
				<h4>Features</h4>
				<ul>
					<li>Phaser Game Engine - Multiple Scenes Game</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<style scoped>
#game {
	font-family: "digital7";
	font-style: italic;
}
</style>