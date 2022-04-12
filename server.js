let express=require('express');
let app=express();
let connectDatabase=require("./config/dbconnect");
const reviewRouter = require("./Router/reviewRouter");
const userRouter = require("./Router/userRouter");
let bodyParser=require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());

//Database connect
connectDatabase();


app.use('/',reviewRouter);
app.use('/',userRouter);


app.listen(5000,function(req,res){
    console.log("server is running");
    console.log("server is starting");
});
