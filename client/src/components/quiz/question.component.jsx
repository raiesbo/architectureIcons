import { useState, useEffect, useContext } from "react";
import { Context } from "../store/store.component";
import { ACTIONS } from "../store/actions";

import "./question.styles.css";



export default function Question() {

    const [state, dispatch] = useContext(Context);

    const [questionsAnswer, setQuestionsAnswer] = useState(false);
    const [answersIndex, setAnswersIndex] = useState("");
    const [counter, setCounter] = useState("");
    // const [randomIndexes, setRandomIndexes] = useState([]);

    const handleSubmit = async e => {
        e && e.preventDefault();
        let right = 0;
        let wrong = 0;
        questionsAnswer ? right++ : wrong++
        dispatch({ type: ACTIONS.ADD_ANSWER, payload: { right, wrong } })


        // handle server post
        if (answersIndex !== "") {
            try {
                const res = await fetch(`${state.url}question`, {
                    method: "POST",
                    body: JSON.stringify({
                        quest: state.questionsList[state.answers.total],
                        answersIndex,
                    }),
                    headers: {
                        "Content-Type": "application/json"
                    }
                })

                // const data = await res.json()
                // console.log(data)
            }
            catch (e) {
                console.log(e)
            }
        }


        // reset/next question
        setQuestionsAnswer(false)
        setAnswersIndex("")
        setCounter(clearTimeout(counter))
        dispatch({ type: ACTIONS.RESTART_SECONDS })
        if (state.answers.total === state.questionsList.length - 1) {
            // congratulations and score
            dispatch({ type: ACTIONS.TOGGLE_ISFINISHED })
        }
    }

    const questionTemplate = () => {

        return (
            state.questionsList.map((item, id) => {

                // let randomAnswersOrder = []
                // console.log(randomAnswersOrder)

                // for (let i of randomIndexes) {
                //     randomAnswersOrder.push(item.answers[i])
                // }

                // console.log(randomAnswersOrder)
                return (
                    <form onSubmit={handleSubmit} key={id}>

                        <h3 className="question">{item.question}</h3>

                        {
                            item.answers.map((item, i) => {

                                return (
                                    <>
                                        <input
                                            key={i}
                                            type="radio"
                                            name="answer"
                                            id={"answer" + i + 1}
                                            className={"input" + i + 1}
                                            onChange={() => {
                                                setAnswersIndex(i)
                                                setQuestionsAnswer(item.isCorrect)
                                            }}
                                        />
                                        <label htmlFor={"answer" + i + 1} className={"answer" + i + 1} >{item.answer}</label>
                                    </>
                                )
                            })
                        }

                        <button className="button" type="submit">Next question</button>

                    </form>
                )
            })
        )
    }


    useEffect(() => {
        let timing = setTimeout(() => {
            if (state.seconds <= 0) {
                handleSubmit()
            } else {
                dispatch({ type: ACTIONS.MINUS_SECONDS })
            }
        }, 1000)
        setCounter(timing)
    }, [state.seconds])

    // useEffect(() => {
    //     let newIndexes = []
    //     while (newIndexes.length < 4) {
    //         const randomNum = Math.floor(Math.random() * 4)
    //         !newIndexes.includes(randomNum) && newIndexes.push(randomNum)
    //     }
    //     setRandomIndexes([...newIndexes])
    //     console.log(newIndexes)
    // }, [state.answers.total])


    return (
        <div className="question-container">

            <h4 className="question-num">Question n° {state.answers.total + 1}</h4>
            <h4 className="topic">Mode: {state.quizzMode}</h4>
            <h4 className="correct">Correct: {state.answers.right}</h4>
            <h4 className="incorrect">Incorrect: {state.answers.wrong}</h4>
            <h4 className="timer">Time:
                <span
                    style={{ color: state.seconds >= 10 ? "green" : "red" }}
                >
                    {state.seconds}
                </span>
            </h4>

            {questionTemplate()[state.answers.total]}


        </div>
    )
}