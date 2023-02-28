import Phaser from "phaser";

export default class GameStart extends Phaser.Scene {
	constructor() {
		super("photo-start");
	}

	init() { }

	preload() {
		this.load.image("background", "assets/imgs/matching/backgroundColorForest.png");
	}

	create() {
		// this.add.image(this.scale.width / 2, this.scale.height / 2, "background");
		this.add.image()

		const all_mediaDevices = navigator.mediaDevices;
		if (!all_mediaDevices || !all_mediaDevices.getUserMedia) {
			alert("No camera device supported.");
		}

		all_mediaDevices
			.getUserMedia({ audio: false, video: true })
			.then((vidStream) => {
				const video = document.getElementById("video");

				if ("srcObject" in video) {
					video.srcObject = vidStream;
				} else {
					video.src = window.URL.createObjectURL(vidStream);
				}
				video.onloadedmetadata = e => { video.play(); }
				video.playsinline = true;
				video.width = 512;
				video.height = 512;
				video.autoplay = true;



				this.add.dom(this.scale.width / 2, this.scale.height / 2, video);

			});
	}
}