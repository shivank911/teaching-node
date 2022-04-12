let mongoose=require("mongoose");
let dblink="mongodb+srv://shivank:123@cluster0.emlzo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

let connectDatabase = () =>{ 
    mongoose.connect(dblink)
.then(function(db){
    console.log("connection successful");
})
.catch(function(err){
    console.log(err);
});
}

module.exports=connectDatabase;
