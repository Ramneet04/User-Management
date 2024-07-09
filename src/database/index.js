const mongoose = require("mongoose");
require("dotenv").config();

const connectToDB = async () => {
    try {
        await mongoose.connect(process.env.MongoDB_URL);
        console.log("Connected to MongoDB");
    } catch (err) {
        console.error("Error connecting to MongoDB:", err);
    }
};

export default connectToDB;
