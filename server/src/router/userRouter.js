import express from "express";
import * as loginController from "../controller/userController.js";

const userRouter = express.Router();

userRouter.post("/login", loginController.login);
userRouter.post("/signup", loginController.signup);
userRouter.post("/withdraw", loginController.withdraw);

userRouter.get("/:id", loginController.get);
userRouter.put("/:id", loginController.put);

export default userRouter;
