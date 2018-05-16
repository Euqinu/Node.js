var express=require('express');
var router=express.Router();			//creating a router
var Ninja=require('./models/ninja');

router.get('/ninjas',function(req,res){
	res.send({type:'GET'});
});

router.post('/ninjas',function(req,res){
	//res.send({type:"POST"});
	
		Ninja.create(req.body).then(function(ninja){
			res.send(ninja);
		}).catch(next);
		
});

router.put('/ninjas/:id',function(req,res){
	Ninja.findByIdAndUpdate({_id:req.params.id},req.body).then(function(){
		Ninja.findOne({_id:req.params.id}).then(function(ninja){
			res.send(ninja);
		});
	});
	//res.send({type:"PUT"});
});

router.delete('/ninjas/:id',function(req,res){
	Ninja.findByIdAndRemove({_id:req.params.id}).then(function(ninja){
		res.send(ninja);
	});
	//res.send({type:"DELETE"});
});

//Now we have to export this to index.js

module.exports=router;