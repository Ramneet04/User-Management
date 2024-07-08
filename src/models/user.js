const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    address: String,
});


const User = mongoose.models.User || mongoose.model("User", userSchema);


module.exports = User;