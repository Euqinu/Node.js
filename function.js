
//Normal function
function calculate(){
	console.log ('hello');
}
calculate();

//Function expressions

var total;
total=function(){
	console.log("hello unique");
}
total();

//calling function inside function

function result(res){
	res();
}
 var final=function(){
 	console.log("hii");
 }

 result(final);