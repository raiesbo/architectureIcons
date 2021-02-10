const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    username: {
        type: String
    },
    score: {
        type: Number
    },
    date: {
        type: Date
    }
})


const User = mongoose.model("User", UserSchema);

module.exports = User;