<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import BackButton from './BackButton.vue';
import ZbarWasmClass from "./zbar/ZbarWasmClass";
import { fetch_imagedata_from_video } from "./zbar/img.utils";

let webcam;
let canvas;
let wasmCls;
let codes = ref(null);
let moduleExports;

const VIDEO_WIDTH = 480;
const VIDEO_HEIGHT = 480;

const importObj = {
	wasi_snapshot_preview1: {
		fd_seek: () => { },
		fd_close: () => { },
		fd_write: () => { },
		fd_read: () => { },
		environ_sizes_get: () => { },
		environ_get: () => { },
		proc_exit: () => { },
		clock_time_get: () => { },
	},
	env: {
		log_char_arr: (msg_ptr, size) => {
			// console.log(getStringFromMemory(msg_ptr, moduleExports));
		}
	}
};

function initScanner() {
	canvas = document.getElementById("canvas");
	webcam = document.getElementById("webcam");
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
		webcam.srcObject = localMediaStream;
		webcam.play();
	}).catch(function getWebcamNotAllowed(e) {
		// block
		console.error(e);
	});
}

function loadWASM() {

	webcam.addEventListener('play', () => {

		fetch("./assets/js/zbarapp.wasm").then(response => response.arrayBuffer()).then(bytes => WebAssembly.instantiate(bytes, importObj)).then(results => {
			moduleExports = results.instance.exports;
			wasmCls = new ZbarWasmClass({
				instance: moduleExports,
				wasm_func: "func_zbar",
				width: VIDEO_WIDTH,
				height: VIDEO_HEIGHT
			});

			tick();
		});
	});
}

function stopWebCam() {
	const tracks = webcam.srcObject.getTracks();
	tracks.forEach(track => track.stop());
	webcam.srcObject = null;
}

function tick() {
	if (webcam.paused || webcam.end) {
		return;
	}

	const img_data = fetch_imagedata_from_video(webcam, canvas, 1);

	if (img_data) {
		const _codes = wasmCls.process(img_data.data);
		if (_codes.length > 0) {
			// draw code boundary
			for (let i = 0; i < _codes.length; i++) {
				const { points: { x0, y0, x1, y1 } } = _codes[i];
				const ctx = canvas.getContext("2d");
				ctx.lineWidth = 5;
				ctx.strokeStyle = "#FF0000";
				ctx.beginPath();
				ctx.moveTo(x0, y0);
				ctx.lineTo(x0, y1);
				ctx.lineTo(x1, y1);
				ctx.lineTo(x1, y0);
				ctx.lineTo(x0, y0);
				ctx.stroke();
			}

			codes.value = _codes;
			webcam.pause();
		}
	}

	requestAnimationFrame(tick);
}

function onClickStart() {
	webcam.play();
}

onMounted(() => {
	initScanner();
	loadWASM();
});

onUnmounted(() => {
	if (webcam.srcObject) {
		stopWebCam();
	}

	if (wasmCls) {
		moduleExports.free(wasmCls.frame_buffer_ptr);
		moduleExports.free(wasmCls.result_buffer_ptr);
	}
});
</script>

<template>
	<div class="container-fluid">
		<div class="row">
			<BackButton />
		</div>

		<div class="row">
			<div class="col-sm-6">
				<h4>How to play?</h4>
				<ul>
					<li>Real-time bar-code scanner.</li>
					<li>Closely scan a barcode in front of webcam.</li>
					<li>App detect the bar code and render.</li>
					<li>Click <i class="fas fa-camera-alt"></i> to restart.</li>
				</ul>
			</div>
			<div class="col-sm-6">
				<h4>Tech Stack</h4>
				<ul>
					<li>WebAssembly</li>
					<li>Zbar library</li>
					<li>Webcam</li>
				</ul>
			</div>
		</div>

		<div class="row">
			<p class="code">
				{{ codes && codes.map((code, idx) => `${code.type} - ${code.data}`) }}
			</p>
		</div>

		<div class="row">
			<video autoPlay muted playsInline id="webcam" style="display:none"></video>
			<canvas id="canvas" class="scanner" />
		</div>

		<div class="row my-2">
			<div class="col-sm-12 col-md-6 d-flex justify-content-center">
				<button class="btn btn-lg btn-primary" @click="onClickStart"><i class="fas fa-camera-alt"></i></button>
			</div>
		</div>
	</div>
</template>

<style scoped>
.code {
	font-weight: bold;
}
.btn {
	color: white;
}

#canvas.scanner {
	width: 400px;

}

@media only screen and (max-width: 768px) {
	#canvas.scanner {
		max-width: 100%;
		height: auto;
	}

	.demo_img {
		max-width: 100%;
	}
}</style>