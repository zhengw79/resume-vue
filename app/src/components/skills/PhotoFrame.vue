<script setup>
import BackButton from './BackButton.vue';
import { onMounted, onUnmounted, ref, reactive } from 'vue';

let canvas, webcamEl, hmap = new Map;
let captured = ref(false);
let frameIdx = ref(0);

function initCanvas() {
	canvas = new fabric.Canvas("canvas");

	webcamEl = document.getElementById("webcam");
	const webcam = new fabric.Image(webcamEl, { left: 180, top: 180, angle: 0, originX: "center", originY: "center", objectCaching: false, selectable: false });
	canvas.add(webcam);

	// init mediaDevices
	if (navigator.mediaDevices === undefined) {
		navigator.mediaDevices = {};
	}

	if (navigator.mediaDevices.getUserMedia === undefined) {
		navigator.mediaDevices.getUserMedia = function (constraints) {
			const getUserMedia = navigator.webkitGetUserMedia || nagivator.mozGetUserMedia || navigator.msGetUserMedia;

			if (!getUserMedia) {
				return Promise.reject(new Error("getUserMedia is not supported in this browser."));
			}

			return new Promise(function (resolve, reject) {
				getUserMedia.call(navigator, constraints, resolve, reject);
			});
		}
	}

	// add webcam element
	navigator.mediaDevices.getUserMedia({ video: true }).then(function getWebcamAllowed(localMediaStream) {
		webcamEl.srcObject = localMediaStream;

		webcam.moveTo(0);
		webcam.getElement().play();
	}).catch(function getWebcamNotAllowed(e) {
		// block
		console.error(e);
	});

	fabric.util.requestAnimFrame(function render() {
		canvas.renderAll();
		fabric.util.requestAnimFrame(render);
	});
}

function initFrames() {
	let frames = [
		{ url: "/assets/imgs/photo/frame1.png", ratio: 0.2 },
		{ url: "/assets/imgs/photo/frame2.png", ratio: 0.3 }
	];
	frames.forEach((frame, idx) => {
		fabric.Image.fromURL(frame.url, function (fr_img) {
			fr_img.scale(frame.ratio);
			fr_img.selectable = false;
			if (idx != 0) {
				fr_img.visible = false;
			}
			canvas.add(fr_img);
			hmap.set(idx, fr_img);
		});
	});
}

function switchFrame(frame_idx) {
	hmap.forEach(val => val.visible = false);
	hmap.get(frame_idx).visible = true;
	frameIdx.value = frame_idx;
}

function onClickShot() {
	captured.value = true;
	document.getElementById("photo").src = canvas.toDataURL({ format: "jpeg", quality: 0.8 });
}

onMounted(() => {
	initCanvas();
	initFrames(1);
});

onUnmounted(() => {
	const tracks = webcamEl.srcObject.getTracks();
	tracks.forEach(track => track.stop());
	webcamEl.srcObject = null;
});
</script>

<template>
	<div class="container-fluid">
		<div class="row">
			<BackButton />
		</div>
		<!-- <div class="container"> -->
		<div class="row">
			<div class="col-sm-6">
				<h4>How to play?</h4>
				<ul>
					<li>Real-time image processing.</li>
					<li>Click button "Frame 1" or "Frame 2" to switch frame.</li>
					<li>Click <i class="fas fa-camera-alt"></i> to take a snapshot.</li>
				</ul>
			</div>
			<div class="col-sm-6">
				<h4>Tech Stack</h4>
				<ul>
					<li>Fabric.js</li>
					<li>Webcam</li>
				</ul>
			</div>
		</div>

		<div class="row">
			<div class="col-sm-6 d-flex justify-content-center">
				<div class="button-group">
					<button :class="[{ active: frameIdx == 0 }, 'btn', 'btn-primary']" @click="switchFrame(0)">Frame
						1</button>&nbsp;
					<button :class="[{ active: frameIdx == 1 }, 'btn', 'btn-primary']" @click="switchFrame(1)">Frame 2</button>
				</div>
			</div>
		</div>

		<div class="row my-2">
			<div class="col-sm-12 col-md-6 d-flex justify-content-center">
				<canvas id="canvas" width="360" height="360" class="img-fluid" />
			</div>
			<div class="col-sm-12 col-md-6 d-flex justify-content-center" :if="captured">
				<img id="photo" width="360" height="360" />
			</div>
		</div>

		<div class="row my-2">
			<div class="col-sm-12 col-md-6 d-flex justify-content-center">
				<button class="btn btn-lg btn-primary" @click="onClickShot"><i class="fas fa-camera-alt"></i></button>
			</div>
		</div>
		<!-- </div> -->

		<video id="webcam" muted height="360" width="360" style="display:none" />
	</div>
</template>

<style scoped>
.btn {
	color: white
}
</style>