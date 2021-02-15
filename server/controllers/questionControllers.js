const Question = require("../models/question");



module.exports.question_post = async (req, res) => {
    const { quest, answersIndex } = req.body;

    // console.log(answersIndex)

    try {
        const currentQuestion = await Question.findOne({ question: quest.question })


        // if exists, update document
        if (currentQuestion) {

            const updatedQuestion = await Question.findOneAndUpdate(
                {
                    _id: currentQuestion._id
                }, // filter
                {
                    answers: [
                        ...currentQuestion.answers,
                        currentQuestion.answers[answersIndex].timesAnswered = currentQuestion.answers[answersIndex].timesAnswered + 1
                    ]
                }, // update
                {
                    useFindAndModify: false
                }
            )


            // console.log("updatedQuestion ", updatedQuestion)
            return res.status(200).json({ message: "Question updated correctly" })


        } else {
            // if doest exist, create document
            const createdQuestion = await Question.create({
                question: quest.question,
                answers: [
                    {
                        answer: quest.answers[0].answer,
                        isCorrect: quest.answers[0].isCorrect,
                        timesAnswered: answersIndex == 0 ? 1 : 0
                    },
                    {
                        answer: quest.answers[1].answer,
                        isCorrect: quest.answers[1].isCorrect,
                        timesAnswered: answersIndex == 1 ? 1 : 0
                    },
                    {
                        answer: quest.answers[2].answer,
                        isCorrect: quest.answers[2].isCorrect,
                        timesAnswered: answersIndex == 2 ? 1 : 0
                    },
                    {
                        answer: quest.answers[3].answer,
                        isCorrect: quest.answers[3].isCorrect,
                        timesAnswered: answersIndex == 3 ? 1 : 0
                    }
                ],
                tags: quest.tags
            })

            // console.log("createdQuestion: ", createdQuestion)

            return res.status(200).json({ message: "Question created correctly" })
        }

    }
    catch (e) {
        console.log(e, answersIndex)
        res.status(400).json({message: e.message })
    }
}