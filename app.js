/*
setTimeout(function(){
	console.log("hello ninjas");
},3000);
*/
var time=0;
var timer=setInterval(function(){
	time=time+2;
	if(time<5)
console.log(time+"seconds have passed");
else
	clearInterval(timer);
},2000);