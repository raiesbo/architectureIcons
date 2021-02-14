const mongoose = require('mongoose');


const questionSchema = mongoose.Schema({
    question: {
        type: Array,
        required: true
    },
    answers: {
        type: Array,
        required: true
    },
    tags: {
        type: Array,
        required: true
    },
    date: {
        type: Date,
        defaultValue: new Date()
    }
})


const Question = mongoose.model("Question", questionSchema);


module.exports = Question;