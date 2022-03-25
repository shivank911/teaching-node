const reviewModel = require("../Model/reviewModel");
module.exports.getReview=async function getreview(req,res){
    let data=await reviewModel.find();
    if(data){
        console.log(data);
        res.send({
            data:data,
            message:"get successfull",
        });
    }
    else{
        console.log("error");
    }

}

module.exports.postReview=async function postreview(req,res){
    try{
        let data=req.body;
        let db_data=await reviewModel.create(data);
        if(db_data){
           res.send({
               data:db_data,
               message:"data posted successfull",
            })
        }else{
            res.send({
                message:"data did not create",
            })
        }
    }
    catch(err){
        res.send({
            data:err.message,
        })
    }
    //console.log(data);
}

