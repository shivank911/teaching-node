let express=require("express");

let userRouter=express.Router();
const { createUser, getUser, login} = require("../Controllers/userConrollers");
userRouter.route("/signup").post(createUser);

userRouter.route("/user/:id").get(getUser);
// .patch()
// .delete();

userRouter.route("/login").post(login);
// userRouter.route("/logout").get(logout);

module.exports = userRouter;