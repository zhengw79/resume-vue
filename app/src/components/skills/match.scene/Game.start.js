import Phaser from "phaser";

export default class GameStart extends Phaser.Scene {
	constructor() {
		super("game-start");
	}

	preload() {
		this.load.image("background", "assets/imgs/matching/backgroundColorForest.png");
		this.load.image("chick", "assets/imgs/matching/chick.png");
		this.load.image("crocodile", "assets/imgs/matching/crocodile.png");
		this.load.image("dog", "assets/imgs/matching/dog.png");
		this.load.image("horse", "assets/imgs/matching/horse.png");
		this.load.image("narwhal", "assets/imgs/matching/narwhal.png");
		this.load.image("whale", "assets/imgs/matching/whale.png");
		this.load.image("dirt", "assets/imgs/matching/dirt.png");
		this.load.image("button", "assets/imgs/matching/button_yellow.png");

		var progressBar = this.add.graphics();
		var progressBox = this.add.graphics();
		progressBox.fillStyle(0x222222, 0.8);
		progressBox.fillRect(256, 512, 320, 50);
		this.load.on('progress', function (value) {
			progressBar.clear();
			progressBar.fillStyle(0xffffff, 1);
			progressBar.fillRect(256, 512, 300 * value, 30);
		});

		this.load.on('complete', function () {
			console.log('complete');
			progressBar.destroy();
			progressBox.destroy();
		});
	}

	create() {
		this.add.image(this.scale.width / 2, this.scale.height / 2, "background");
		this.add.text(
			this.scale.width / 5,
			this.scale.height / 5,
			"Matching Game",
			{
				fontSize: 80,
				color: "black"
			}
		);

		this.add.image(
			this.scale.width / 2 - 30,
			this.scale.height / 2 + 200,
			"button"
		).setScale(2.2)
			.setInteractive({ cursor: "pointer" })
			.on("pointerdown", () => {
				this.scene.start("game");
			});

		this.add.text(
			this.scale.width / 2 - 120,
			this.scale.height / 2 + 165,
			"Start",
			{
				fontSize: 60,
				color: "black"
			}
		).setInteractive({ cursor: "pointer" }).on("pointerdown", () => {
			this.scene.start("game");
		});
	}
}