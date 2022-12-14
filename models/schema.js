const mongoose=require("mongoose");

const UserSchema=new mongoose.Schema({
    title:{
        type:String,    
    },
    description:{
        type:String,
    },
    isCompleted:{
        type:Boolean,
        default:false        
    }
});

const User=mongoose.model("User",UserSchema);
module.exports=User;