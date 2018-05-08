var fs=require('fs');

//fs.mkdirSync('stuff');   (making a directory Synchronous)

//fs.rmdirSync('stuff');   (Removing Directory Synchronous)

/*
fs.mkdir('stuff', function(){
	fs.readFile('readMe.txt','utf8', function(err,data){
	fs.writeFile('./stuff/writeMe.txt',data);
	});
})
*/

fs.unlink('./stuff/writeMe.txt', function(){
	fs.rmdir('stuff');
});
