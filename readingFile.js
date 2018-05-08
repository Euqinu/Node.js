//Synchronous way
/*
var fs=require('fs');

var readMe= fs.readFileSync('readMe.txt','utf8');
fs.writeFileSync('writeMe.txt',readMe);

*/
//Asynchronous way


var fs=require('fs');

fs.readFile('readMe.txt','utf8', function(err,data){
	fs.writeFile('writeMe.txt',data);
});