let express = require('express');
let app = express();
var expressWs = require('express-ws')(app);
let http = require('http');
let path = require('path');
let util = require('util');
let timeout = require('connect-timeout')
let bodyParser = require('body-parser');
var cors = require('cors')
let multer = require('multer'); 
let client = require('./database/connect')
let db = require('./database/querydb.js');
let readText = require('./database/readtxt')

app.use(cors());
app.use(express.static('./public'));
app.use(express.static('./database'));
app.use(express.static('./build'))

app.use(timeout('1200s'))
app.use(require('body-parser').urlencoded({limit: '1000mb', extended: true}));
app.get('/', function(req, res) {
		res.sendFile("index.html");
});

function parseReqJson(json, res, client) {
  if (json.reqType === 'queryPoiByTraj') {
    db.readText(res);
  } else if (json.reqType === 'queryDb') {
    db.query(res, client, json);
  } else if (json.reqType === 'readText') {
    readText.readText(res, json.fileName, json.begin, json.readLineLimit);
  }
}

//nors
app.all('*', function(req, res, next) {  
    res.header("Access-Control-Allow-Origin", "*");  
    res.header("Access-Control-Allow-Headers", "X-Requested-With");  
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");  
    res.header("X-Powered-By",' 3.2.1')  
    res.header("Content-Type", "application/json;charset=utf-8");  
    next();  
});

app.ws("/ws", function(ws, req) {
  ws.on('message', function(msg) {
    parseReqJson(JSON.parse(msg), ws, client);
  })
})

// app.post("/",function(req, res, next) {
//   console.log(req);
// 	console.log(req.body);
// 	parseReqJson(req.body, res, client);
// });

let server = app.listen(3001, function () {
  let host = server.address().address;
  let port = server.address().port;

  console.log('My web is listening at http://%s:%s', host, port);
});
