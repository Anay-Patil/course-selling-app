const { Router } = require("express");
const adminRouter = Router();

adminRouter.post("/signup",(req, res) => {
    res.json({
        message: "Sign Up endpoint"
    })
})

adminRouter.post("/signin",(req, res) => {
    res.json({
        message: "Sign in endpoint"
    })
})

adminRouter.post("/course",(req, res) => {    //create course
    res.json({
        message: "Create course endpoint"
    })
})

adminRouter.post("/course/bulk",(req, res) => {    //create course
    res.json({
        message: "Create course endpoint"
    })
})

module.exports = {
    adminRouter
}