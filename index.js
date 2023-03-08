// const { add } = require("./4.other");

// core modules
const http = require("http");

// third party modules -> underscore
const _ = require("underscore");

const server = http.createServer(function (req, res) {
	//write code here
	// console.log(`server is running`);
});

server.listen(5000);

// const result = add(2, 3);
// console.log(result);

var stooges = [
	{ name: "moe", age: 40 },
	{ name: "larry", age: 50 },
	{ name: "curly", age: 60 },
];

const res = _.pluck(stooges, "age");
console.log(res);
