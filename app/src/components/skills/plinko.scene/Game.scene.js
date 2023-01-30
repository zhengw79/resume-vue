import Phaser from "phaser";

export default class Game extends Phaser.Scene {
	/** @type { Phaser.Physics.Matter.StaticGroup} */
	platforms;

	bins = [];

	constructor() {
		super("game");
	}

	init() { }

	preload() {
		// load all assets
		this.load.atlas("rollingball", "assets/imgs/plinko/rollingball.png", "assets/imgs/plinko/rollingball.json");

		this.load.json("shapes", "assets/imgs/plinko/rollingball-shapes.json");
	}

	create() {
		this.add
			.tileSprite(
				0,
				0,
				this.scale.width * 2,
				this.scale.height * 2,
				'rollingball',
				'background_blue.png').setScale(1, 1);
		const shapes = this.cache.json.get("shapes");

		// add left border
		for (let i = 0; i < 5; i++) {
			this.matter.add.image(16, 64 + 128 * i, 'rollingball', 'block_narrow.png', { isStatic: true });
		}

		// add left triangle
		for (let i = 0; i < 5; i++) {
			this.matter.add.sprite(16, 40 + 120 * i, "rollingball", "block_corner.png", { isStatic: true }).setAngle(-135).setScale(0.8);
		}

		// add right border
		for (let i = 0; i < 5; i++) {
			this.matter.add.image(485, 64 + 128 * i, 'rollingball', 'block_narrow.png', { isStatic: true });
		}

		// add right triangle
		for (let i = 0; i < 5; i++) {
			this.matter.add.sprite(485, 40 + 120 * i, "rollingball", "block_corner.png", { isStatic: true }).setAngle(45).setScale(0.8);
		}

		// add pin
		for (let j = 0; j < 5; j++) {
			for (let i = 0; i < 5; i++) {
				this.matter.add.sprite(95 + i * 72, 40 + j * 120, "rollingball", "particle_3.png", { shape: shapes.particle_3 }).setScale(0.4);
			}
		}

		for (let j = 0; j < 4; j++) {
			for (let i = 0; i < 6; i++) {
				this.matter.add.sprite(75 + i * 70, 100 + j * 120, "rollingball", "particle_3.png", { isStatic: true, shape: shapes.particle_3 }).setScale(0.4);
			}
		}

		// add bottom splitter
		for (let i = 0; i < 5; i++) {
			this.matter.add.sprite(90 + i * 80, 630, 'rollingball', 'laser.png', { shape: shapes.laser });
		}

		// add bottom
		for (let i = 0; i < 5; i++) {
			this.matter.add.image(45 + 128 * i, 625, "rollingball", "block_narrow.png", { isStatic: true }).setAngle(90);
		}

		// add left corner
		this.matter.add.sprite(25, 613, 'rollingball', 'block_corner.png', { shape: shapes.block_corner });

		// add right corner
		this.matter.add.sprite(475, 613, 'rollingball', 'block_corner.png', { shape: shapes["block_corner (2)"] }).setFlipX(true);

		const ball = this.matter
			.add
			.image(Phaser.Math.RND.realInRange(this.scale.width * 1 / 6, this.scale.width * 5 / 6), 0, "rollingball", "ball_red_small.png");
		ball.setBody({
			type: 'circle',
			radius: 24 * 0.7,
		});
		ball.setAngularVelocity(0);
		ball.setBounce(0.6);
		ball.setFriction(0, 0, 0);
		ball.setFrictionAir(0);

		const bin1 = this.matter.add.sprite(55, 590, "rollingball", "number_1.png").setOnCollideWith(ball, () => {
			console.info("bin1");
			this.matter.world.remove(bin1);
		});
		const bin2 = this.matter.add.sprite(130, 590, "rollingball", "number_2.png",).setOnCollideWith(ball, () => {
			console.info("bin2");
			this.matter.world.remove(bin2);

		});
		const bin3 = this.matter.add.sprite(210, 590, "rollingball", "number_3.png").setOnCollideWith(ball, () => {
			console.info("bin3");
			this.matter.world.remove(bin3);
		});
		const bin4 = this.matter.add.sprite(290, 590, "rollingball", "number_4.png").setOnCollideWith(ball, () => {
			console.log("bin4");
			this.matter.world.remove(bin4);
		});
		const bin5 = this.matter.add.sprite(370, 590, "rollingball", "number_5.png").setOnCollideWith(ball, () => {
			console.info("bin5");
			this.matter.world.remove(bin5);
		});
		const bin6 = this.matter.add.sprite(445, 590, "rollingball", "number_6.png").setOnCollideWith(ball, () => {
			console.log("bin6");
			this.matter.world.remove(bin6);
		});
	}
}