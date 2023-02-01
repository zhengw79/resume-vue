import Phaser from "phaser";

export default class GameOver extends Phaser.Scene {
	result;
	constructor() {
		super("game-over");
	}

	init(data) {
		this.result = data.result;
	}

	preload() { }

	create() {
		this.add.image(this.scale.width / 2, this.scale.height / 2, "background");

		this.add.text(
			this.scale.width / 4,
			this.scale.height / 3,
			`Congratulations!\nYou made ${this.result} pairs.`,
			{
				fontSize: 60,
				color: "black",
				lineSpacing: 20
			}
		);

		this.add.image(
			this.scale.width / 2,
			this.scale.height / 1.5,
			"button"
		).setScale(2.2)
			.setInteractive({ cursor: "pointer" })
			.on("pointerdown", () => {
				this.scene.start("game");
			});

		this.add.text(
			this.scale.width / 2.8 + 25,
			this.scale.height / 1.5 - 25,
			"Re-start",
			{
				fontSize: 50,
				color: "black"
			}
		).setInteractive({ cursor: "pointer" })
			.on("pointerdown", () => {
				this.scene.start("game");
			});
	}
}