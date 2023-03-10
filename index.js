const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
	if ((req.url = "/")) {
		// fs.readFile("data.txt", (err, data) => {
		// 	if (err) {
		// 		res.write("Failed to read data !!");
		// 		res.end();
		// 	} else {
		// 		res.write(data);
		// 		res.end();
		// 	}
		// });

		// const data = fs.readFileSync("data.txt");
		// res.write(data);
		// res.end();

		fs.writeFile("newData.txt", "hello node js!!", (err) => {
			if (err) {
				res.write("Data Failed to write");
				res.end();
			} else {
				res.write("data written successfully");
				res.end();
			}
		});
	}
});

const PORT = 5000;
server.listen(PORT);
console.log(`server is running on port at ${PORT}`);
