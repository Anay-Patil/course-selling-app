const { Router } = require("express");

const userRouter = Router();

userRouter.post("/signup",(req, res) => {
    res.json({
        message: "Sign Up endpoint"
    })
})

userRouter.post("/signin",(req, res) => {
    res.json({
        message: "Sign in endpoint"
    })
})

userRouter.post("/purchases",(req, res) => {
    res.json({
        message: "View User's purchased courses"
    })
})

module.exports = {
    userRouter : userRouter
}