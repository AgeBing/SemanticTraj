"use strict";
let ReadText = {};

ReadText.readLineNum = 0;
ReadText.nowSiteIndex = 0;
ReadText.readStrs = [];
ReadText.result = {};
ReadText.readText = function (res, name, begin,limit) {
	let fs = require('fs'),
	readline = require('readline');
	console.log("read.....");
	ReadText.readLineNum = 0;
	ReadText.readStrs = [];
	ReadText.result = {};
	let rd = readline.createInterface({
		input: fs.createReadStream('database/' + name),
		console: false
	});

	rd.on('line', function(line) {
		ReadText.readLineNum ++;
		if (ReadText.readLineNum < parseInt(begin)) {
			return;
		}
		if (!line && ReadText.readStrs.length > 0) {
			ReadText.result[ReadText.nowSiteIndex] = ReadText.readStrs;
			ReadText.readStrs = [];
			return;
		}
		if (line.indexOf("\t") != -1) {
			ReadText.nowSiteIndex = line.split("\t")[0];
			ReadText.readStrs.push(line.split("\t")[1]);
		} else {
			ReadText.readStrs.push(line);
		}
		if(ReadText.readLineNum > parseInt(limit)) {
			rd.close();
		}
		// if (line.indexOf("Topic--Term Associations, Phi[k][w] (beta=0.5)") != -1) {
		// 	rd.close();
		// }
	});
	rd.on("close", function() {
		console.log("read: ", ReadText.readLineNum, ReadText.nowSiteIndex);
		res.send(JSON.stringify(ReadText.result));
	})
};

module.exports = ReadText;
