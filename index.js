const express = require("express");
const app = express();
const { userRouter } = require("./routes/user");
const { courseRouter }= require("./routes/course");
const { adminRouter }= require("./routes/admin");



const port = 3000;

app.use("/api/v1/user",userRouter);
app.use("/api/v1/course",courseRouter);
app.use("/api/v1/admin",adminRouter);
app.listen(port);
console.log("Server running on port 3000");