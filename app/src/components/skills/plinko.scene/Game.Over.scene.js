import Phaser from "phaser";

export default class GameOver extends Phaser.Scene {
	prize;

	constructor() {
		super("game-over");
	}

	init(prize) {
		console.log(prize);
		this.prize = prize;
	}

	create() {
		this.add.text(this.scale.width / 4, this.scale.height / 2, `${this.prize}`);
	}
}