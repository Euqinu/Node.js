/*

var http=require('http');

var fs=require('fs');

var stream= fs.createReadStream(__dirname + '/readMe.txt');

stream.on('data', function(chunk){
	console.log('new data received');
	console.log(chunk);
});
*/

 var http=require('http');

 var fs=require('fs');

 var stream=fs.createReadStream(__dirname + '/readMe.txt','utf8');
 var writeStream=fs.createWriteStream(__dirname + '/writeMe.txt');

 stream.on('data', function(chunks){
 	console.log('new data received');
 	writeStream.write(chunks);
 	console.log(chunks);
 });

