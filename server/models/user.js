const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    score: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: new Date()
    },
    quizzMode: {
        type: String,
        required: true
    }
})


const User = mongoose.model("User", UserSchema);

module.exports = User;