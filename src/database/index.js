const mongoose = require("mongoose");
require("dotenv").config();
const connectToDB = async ()=>{
    mongoose.connect(process.env.MongoDB_URL).then(()=>{
        console.log("Connected to MongoDB");
    }).catch((err)=>{
        console.log("Error connecting to MongoDB", err);
    })
}
export default connectToDB;