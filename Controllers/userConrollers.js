let userModel=require("../Model/userModel");
let jwt = require( "jsonwebtoken");
JWT_KEY="JANKJSDNA";

module.exports.createUser=async function createUser(req,res){
    let data=req.body;
    let user= await userModel.create(data);
    if(user){
        res.send({
            message:"user created successfull",
            data:user        
        });
    }
    else{
        res.send({
            message:"user creation unsuccessful",
        })
    }
}

module.exports.getUser=async function getUser(req,res){
    let id=req.params;
    let user=await userModel.findById(id);
    if(user){
        res.send({
            message:"user found",
            data:user
        });
    }
    else{
        res.send({
            message:"user not found"
        })
    }
}

module.exports.login = async function login(req,res){
    let {email,password} = req.body;
    console.log(req.body.password);
    let data = await userModel.findOne({email:email});
    console.log(data.password);
    if(data){
        if(password === data.password){
            let id = data._id;
            let token = jwt.sign({payload:id},JWT_KEY);
            res.cookie('Login',token,{expires:new Date(Date.now()+100000)});
            res.json({
                message:"Login successful",
                data:data,
            });
        }else{
            res.send({
                message:"Password dosent match",
            })
        }
    }
    else{
        res.send({
            message:"User not found",
        });
    }
}

module.exports.logout = async function logout (req,res){
    res.cookie('Login',' ',{maxAge:1});
    res.send({
        message:"Logout successful",
    })

}