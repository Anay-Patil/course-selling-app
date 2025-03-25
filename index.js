const express = require("express");
const app = express();
const { userRouter } = require("./user");
const { courseRouter }= require("./course");


const port = 3000;

app.use("/api/v1/user",userRouter);
app.use("/api/v1/course",courseRouter);

app.listen(port);
console.log("Server running on port 3000");