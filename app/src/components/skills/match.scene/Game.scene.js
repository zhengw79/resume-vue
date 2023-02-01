import Phaser from "phaser";
import * as _ from "lodash";

export default class Game extends Phaser.Scene {
	cards;

	flipped_cards;
	matched;

	timer;
	initialTime; // seconds

	constructor() {
		super("game");
	}

	init() {
		this.flipped_cards = [];
		this.matched = 0;
		this.initialTime = 30;
		this.cards = [];
	}

	preload() { }

	create() {
		this.add.image(this.scale.width / 2, this.scale.height / 2, "background");

		const textures = ["chick", "crocodile", "dog", "horse", "narwhal", "whale"];

		// add cards
		for (let i = 0; i < textures.length; i++) {
			this.cards.push(this.buildCard(-128, -128, textures[i]));
			this.cards.push(this.buildCard(-128, -128, textures[i]));
		}

		this.cards = _.shuffle(this.cards);

		let j = 0;
		for (let i = 0; i < 12; i++) {
			const card = this.cards[i];
			if (Math.floor(i % 4) == 0) {
				j = 0;
			} else {
				j++;
			}
			card.x = this.scale.width / 5.5 + 220 * j;
			card.y = this.scale.height / 2.5 + 220 * Math.floor(i / 4);
		}

		// add timer
		this.timer = this.add.text(this.scale.width / 3, this.scale.height / 15, `00:${this.initialTime}`, { fontSize: 150, fontFamily: "Digital-7 Mono", color: "black" });

		this.time.addEvent({
			delay: 1000,
			callback: () => {
				this.initialTime--;
				this.timer.setText(`00:${this.initialTime >= 10 ? this.initialTime : "0" + this.initialTime}`);

				if (this.initialTime <= 0 || this.matched === 6) {
					this.time.removeAllEvents();
					// this.scene.pause();
					// this.matched = 0;
					// this.initialTime = 30;
					// this.flipped_cards = [];

					this.scene.start("game-over", { result: this.matched });
				}
			},
			callbackScope: this,
			loop: true
		});
	}

	update() {
		let matched = false;
		if (this.flipped_cards.length == 2) {
			const card1 = this.flipped_cards[0];
			const card2 = this.flipped_cards[1];
			if (card1.name == card2.name) {
				this.matched++;
				matched = true;
			}

			if (!matched) {
				this.flipped_cards.forEach(card => {
					this.tweens.add({
						targets: card,
						scaleX: { value: 0, duration: 300, yoyo: true, ease: "Quint.easeIn" },
						onYoyo: function () {
							card.bringToTop(card.first);
						},
						onComplete: function () {
							card.setInteractive(
								new Phaser.Geom.Rectangle(-80, -80, 160, 160),
								Phaser.Geom.Rectangle.Contains);
						}
					});
				});
			}
			this.flipped_cards = [];
		}
	}

	/**
	 *
	 * @param {number} x,
	 * @param {number} y,
	 * @param {string} texture
	 * @returns {Phaser.GameObjects.Container}
	 */
	buildCard(x, y, texture) {
		const card = this.add.container(x, y);
		card.name = texture;
		const chick = this.add.image(0, 0, texture);
		const dirt = this.add.image(0, 0, 'dirt').setScale(1.25);
		card.add([chick, dirt]);
		card.setInteractive(
			new Phaser.Geom.Rectangle(-80, -80, 160, 160),
			Phaser.Geom.Rectangle.Contains)
			.on("pointerdown", () => {
				if (this.flipped_cards.length < 2) {


					this.tweens.add({
						targets: card,
						scaleX: { value: 0, duration: 300, yoyo: true, ease: "Quint.easeIn" },
						onStart: function () {
							card.removeInteractive();
						},
						onYoyo: () => {
							card.bringToTop(chick);
						},
						// onActive: function () { addEvent('onActive') },
						// onStart: function () { addEvent('onStart') },
						// onLoop: function () { addEvent('onLoop') },
						// onRepeat: function () { addEvent('onRepeat') },
						onComplete: function () {
							// flip the card back
							this.flipped_cards.push(card);
						}.bind(this)
					});
				}
			});

		return card;
	}
}