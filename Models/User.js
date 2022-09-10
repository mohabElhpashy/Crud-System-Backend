const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const users_schema=new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },

    Phone:{
        type:String,
        required:true
    },

    FavPlayer:{
        type:String,
        required:true
    },
    

})
 
module.exports=mongoose.model('users',users_schema)