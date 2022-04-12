let mongoose=require('mongoose');
const emailValidator=require('email-validator');
const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validate:function(){
            return emailValidator.validate(this.email);
        }
    },
    password:{
        type:String,
        required:true
        
    },
    confirmPassword:{
        type:String,
        required:true,
        validate:function(){
            return this.password==this.confirmPassword;
        }
    },
});

let userModel=mongoose.model("user",userSchema);

module.exports=userModel;