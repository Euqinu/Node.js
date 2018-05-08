var adder=function(a,b){
	return `The sum of two number is ${a+b}`;
}
 
 adder(5,6);

 var subtract= function(a,b){
 	return `The difference of two number is ${a-b}`;
 }

 subtract(10,5);

 var pi=3.142;
 
/*
 module.exports.adder=adder;
 module.exports.subtract=subtract;
 module.exports.pi=pi;
 */
 //Alternative

 module.exports={                    //(In literal form)
 	adder:adder,
 	subtract:subtract,
 	pi:pi
 };