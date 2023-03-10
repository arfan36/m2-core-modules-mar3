const fs = require("fs");

const readStream = fs.createReadStream("./data.txt");

readStream.on("data", (chunk) => {
	console.log("..........");
	console.log(chunk);
});

readStream.on("open", () => {
	console.log("stream is open");
});

setTimeout(() => {
	readStream.pause();
	console.log("streaming is paused now");
}, 15);

setTimeout(() => {
	readStream.resume();
	console.log("stream is resumed now");
}, 3000);
