var express=require('express');
var bodyParser=require('body-parser');
var routes=require('./router');
var mongoose=require('mongoose');


var app=express();
mongoose.connect('mongodB://localhost/ninjaco');
mongoose.Promise=global.Promise;
app.use(bodyParser.json());
app.use('/api',routes);
app.use(function(err,req,res,next){
	res.status(422).send({error: err.message});
});


app.listen(3000,function(req,res){
	console.log("the port is running well");
})