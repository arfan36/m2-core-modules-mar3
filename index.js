const other = require("./4.other");

// const res = other.subtract(5, 4);
// console.log("🚀 ~ res:", res);

const http = require("http");

const server = http.createServer((req, res) => {
	// console.log(req.url);
	if (req.url == "/") {
		res.writeHead(200, { "Content-type": "text/html" });
		res.write(JSON.stringify({ course: "ACC" }));
		res.end();
	} else if (req.url == "/contact") {
		res.writeHead(200, { "Content-Type": "text/html" });
		res.write("<p>This is contact Page</p>");
		res.end();
	}
	if (req.url == "/about-us") {
		res.writeHead(200, { "Content-Type": "text/html" });
		res.write("<p>This is About Us Page</p>");
		res.end();
	}
});

const PORT = 5000;
server.listen(PORT);

console.log(`server is running on port at ${PORT}`);
