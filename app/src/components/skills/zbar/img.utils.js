/**
 * @function
 * @param {HTMLImageElement}: img
 * @return {ImageData}
*/
export const fetch_imgdata_from_image = (img) => {
	const { width, height } = img;
	// console.log(`${width}-${height}`);
	const canvas = window.document.createElement("canvas");
	canvas.width = width;
	canvas.height = height;
	const ctx = canvas.getContext("2d");
	ctx.drawImage(img, 0, 0, width, height);
	return ctx.getImageData(0, 0, width, height);
}

/**
 * @function
 * @param {HTMLVideoElement}: video
 * @param {HTMLCanvasElement}: canvas
 * @param {Number}: scale (0-1)
*/
export const fetch_imagedata_from_video = (video, canvas, scale) => {
	const { videoWidth, videoHeight } = video;
	if (!videoWidth || !videoHeight) {
		return null;
	}

	const _width = videoWidth * scale, _height = videoHeight * scale;
	const size = Math.min(_width, _height);
	const sx = Math.floor((_width - size) / 2), sy = Math.floor((_height - size) / 2);

	canvas.width = size;
	canvas.height = size;
	const context = canvas.getContext("2d");
	context.drawImage(video, sx, sy, size, size, 0, 0, size, size);
	try {
		const frame_imgdata = context.getImageData(0, 0, size, size);
		frame_imgdata['context'] = context;
		return frame_imgdata;
	} catch (e) {
		return null;
	}

}

export function getStringFromMemory(memoryOffset, moduleMemory, size = 256) {
	let returnValue = "";
	const bytes = new Uint8Array(moduleMemory.buffer, memoryOffset, size);

	let character = "";
	for (let i = 0; i < size; i++) {
		character = String.fromCharCode(bytes[i]);
		if (character === "\0") { break; }

		returnValue += character;
	}

	return returnValue;
}

export function convertDataURIToBinary(dataURI) {
	var raw = window.atob(dataURI);
	var rawLength = raw.length;
	var array = new Uint8Array(new ArrayBuffer(rawLength));

	for (let i = 0; i < rawLength; i++) {
		array[i] = raw.charCodeAt(i);
	}
	return array;
}