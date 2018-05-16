var mongoose=require('mongoose');

var Schema=mongoose.Schema;

var NinjaSchema=new Schema({
	name:{
	type: String,
	required:[true,'Name field is required']
},
rank:{
	type:String
},
available:{
	type:Boolean,
	default:false
}
});

//Now we want to create a model

var Ninja=mongoose.model('ninja12',NinjaSchema);


//Now we want to export this file

module.exports=Ninja;