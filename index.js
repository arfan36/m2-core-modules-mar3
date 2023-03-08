const other = require("./4.other");

// const res = other.subtract(5, 4);
// console.log("🚀 ~ res:", res);

const http = require("http");

const server = http.createServer((req, res) => {
	res.end("hello node.js");
});

const PORT = 5000;
server.listen(PORT);

console.log(`server is running on port ${PORT}`);
