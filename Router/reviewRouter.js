const express=require("express");
const {getReview , postReview}= require("../Controllers/reviewControllers");

let reviewRouter=express.Router();

reviewRouter.route('/reviews')
.get(getReview)
.post(postReview)


module.exports=reviewRouter;