let mongoose = require("mongoose");
let reviewSchema= new mongoose.Schema({
    review:{
        type:String,
        required:[true,'review is required'],
    },
    rating:{
        type:String,
        min:1,
        max:10,
        required:[true,'rating is required'],
    },
    createdAt:{
        type:Date,
        default:Date.now(),
    }
});

let reviewModel=mongoose.model('model',reviewSchema);
module.exports = reviewModel;
