/*
var http=require('http');
var fs=require('fs');

var readStream=fs.createReadStream(__dirname + '/readMe.txt');
var writeStream=fs.createWriteStream(__dirname + '/writeMe.txt');

readStream.pipe(writeStream);

*/
/*
var http=require('http');
var fs=require('fs');

var server=http.createServer(function(req,res){
	console.log("request was made: " + req.url);
	res.writeHead(200,{'Content-Type':'text/plain'});
	var readStream=fs.createReadStream(__dirname + '/readMe.txt');


readStream.pipe(res);
	});

	server.listen(3000,'127.0.0.1');
	*/

//For html page link

var http=require('http');
var fs=require('fs');

var server=http.createServer(function(req,res){
	console.log("request was made: " + req.url);
	res.writeHead(200,{'Content-Type':'text/html'});
	var readStream=fs.createReadStream(__dirname + '/index.html');


readStream.pipe(res);
	});

	server.listen(3000,'127.0.0.1');



