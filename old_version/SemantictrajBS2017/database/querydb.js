"use strict";
const fs = require("fs");
var db = {};

function stringFormat() {
	if (arguments.length == 0)
		return null;
	var str = arguments[0];
	for (var i = 1; i < arguments.length; i++) {
		var re = new RegExp('\\{' + (i - 1) + '\\}', 'gm');
		str = str.replace(re, arguments[i]);
	}
	return str;
}

function readJson(path) {
	return new Promise(function(resolve, reject) {
		fs.readFile(path, function(err, data) {
			if (err) {
				reject(err);
				return;
			}
			resolve(JSON.parse(data));
		});
	});
}

function writeJson(path, data) {
	return new Promise(function (resolve, reject) {
		fs.open(path, 'w', function(err, fd) {
			if (err) {
				reject(err);
			}
			fs.write(fd, JSON.stringify(data));
			resolve();
		});
	});
}

// it will be 
const cache = new Map();
let queryContents = {};
db.query = async function (res, client, json) {
	var queryStr;
	if (json.operate === 'select') {
		queryStr = stringFormat('select {0} from {1} {2}', json.column, json.table,
			  json.limit ? json.limit : '');
	}
	// if (!fs.existsSync('database/query.json')) {
	// 	console.log('query.json does not exist!');
	// 	return;
	// }
	// queryContents = await readJson('database/query.json');
	// if (queryContents[queryStr]) {
	// 	console.log('sql results exist in file!');
	// 	res.send(queryContents[queryStr]);
	// 	return;
	// }
	// if (cache.has(queryStr)) {
	// 	console.log("cache:", queryStr);
	// 	res.send(cache.get(queryStr));
	// 	return;
	// }
	console.log('query sql');
	client.query(queryStr, function(err, result) {
		if (err) {
			console.log(err.message);
			return;
		}
		// if (json.table == 'blog') {
		// 	console.log(result, 'wocao');
		// }
		let resJ = JSON.stringify(result);
		// cache.set(queryStr, resJ);
		console.log("success!!");
		// queryContents[queryStr] = resJ;
		// writeJson('database/query.json', queryContents)
				// .then(function() {
		console.log(resJ[0]);
		res.send(resJ);
				// });
	});
};

module.exports = db;