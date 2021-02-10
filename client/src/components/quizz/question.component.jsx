import { useState, useEffect, useContext } from "react";
import { Context } from "../store/store.component";
import { ACTIONS } from "../store/actions";

import "./question.styles.css";



export default function Question() {

    const [state, dispatch] = useContext(Context);

    const [questionsAnswer, setQuestionsAnswer] = useState(false);
    const [seconds, setSeconds] = useState(30);
    const [counter, setCounter] = useState("");

    const handleSubmit = e => {
        e && e.preventDefault();
        let right = 0;
        let wrong = 0;
        questionsAnswer ? right++ : wrong++
        dispatch({ type: ACTIONS.ADD_ANSWER, payload: { right, wrong } })
        setQuestionsAnswer(false)
        setCounter(clearTimeout(counter))
        setSeconds(30)
        if (state.answers.total === state.questionsList.length - 1) {

            // congratulations and score


            dispatch({ type: ACTIONS.RESTORE_GAME })
        }
    }

    const questionTemplate = state.questionsList.map((item, id) => {
        return (
            <form onSubmit={handleSubmit} key={id}>

                <h3 className="question">{item.question}</h3>

                <input
                    type="radio"
                    name="answer"
                    id="answer1"
                    className="input1"
                    onChange={() => setQuestionsAnswer(item.answers[0].isCorrect)}
                />
                <label htmlFor="answer1" className="answer1" >{item.answers[0].answer}</label>

                <input
                    type="radio"
                    name="answer"
                    id="answer2"
                    className="input2"
                    onChange={() => setQuestionsAnswer(item.answers[1].isCorrect)}
                />
                <label htmlFor="answer2" className="answer2" >{item.answers[1].answer}</label>

                <input
                    type="radio"
                    name="answer"
                    id="answer3"
                    className="input3"
                    onChange={() => setQuestionsAnswer(item.answers[2].isCorrect)}
                />
                <label htmlFor="answer3" className="answer3" >{item.answers[2].answer}</label>

                <input
                    type="radio"
                    name="answer"
                    id="answer4"
                    className="input4"
                    onChange={() => setQuestionsAnswer(item.answers[3].isCorrect)}
                />
                <label htmlFor="answer4" className="answer4" >{item.answers[3].answer}</label>

                <button className="button" type="submit">Next question</button>

            </form>
        )
    })

    useEffect(() => {
        let timing = setTimeout(() => {
            if (seconds === 0) {
                handleSubmit()
            } else {
                setSeconds(seconds - 1)
            }
        }, 1000)
        setCounter(timing)
    }, [seconds])



    return (
        <div className="question-container">

            <h4 className="question-num">Question n° {state.answers.total + 1}</h4>
            <h4 className="topic">Mode: {state.quizzMode}</h4>
            <h4 className="correct">Correct: {state.answers.right}</h4>
            <h4 className="incorrect">Incorrect: {state.answers.wrong}</h4>
            <h4 className="timer">Time:
                <span
                    style={{ color: seconds >= 15 ? "green" : "red" }}
                >{seconds}</span>
            </h4>

            {questionTemplate[state.answers.total]}


        </div>
    )
}