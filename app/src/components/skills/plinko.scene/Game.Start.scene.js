import Phaser from "phaser";

export default class GameStart extends Phaser.Scene {
	start = false;

	constructor() {
		super("game-start");
	}

	preload() {
		this.load.atlas("rollingball", "assets/imgs/plinko/rollingball.png", "assets/imgs/plinko/rollingball.json");
	}

	create() {
		this.add.tileSprite(0, 0, this.scale.width * 2, this.scale.height * 2, 'rollingball', 'background_green.png');

		this.add.text(this.scale.width / 4 + 10, this.scale.height * 1 / 4, "Click Start to\nPlay Plinko", { align: "center", color: "black", fontSize: "25px" });

		this.add.image(256, this.scale.height * 3 / 4, "rollingball", "button_blue.png").setInteractive({ cursor: "pointer" }).on('pointerdown', () => {
			this.scene.start("game");
		});
		this.add.text(235, this.scale.height * 3 / 4 - 10, "START");
	}
}