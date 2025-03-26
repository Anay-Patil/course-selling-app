const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;
const Schema = mongoose.Schema;
    console.log("connected to db");
    mongoose.connect("mongodb://localhost:27017/SkillSphere-app");

const userSchema = new Schema({
    email : { type: String, unique: true }, 
    password : String,
    firstName : String,
    lastName : String
})

const courseSchema = new Schema({
    title : String,
    description : String,
    price : Number,
    imageUrl : String,
    createId : ObjectId
})

const adminSchema = new Schema({
    email : { type: String, unique: true }, 
    password : String,
    firstName : String,
    lastName : String
})

const purchaseSchema = new Schema({
    courseId : ObjectId , 
    userId : ObjectId
})

const userModel = mongoose.model("user", userSchema);
const courseModel = mongoose.model("course", courseSchema);
const adminModel  = mongoose.model("admin", adminSchema);
const purchaseModel = mongoose.model("purchase", purchaseSchema);

module.exports = {
    userModel,
    courseModel,
    adminModel,
    purchaseModel
}