import React, { useState, useEffect, useContext } from "react"
import "./trivialarch.styles.css";
import QuizMode from "../components/quiz/quizMode.component";
import Rules from "../components/quiz/rules.component";
import Question from "../components/quiz/question.component";
import Score from "../components/quiz/score.component";
import Ranking from "../components/quiz/ranking.component";


// REDUX HOOKS
import { Context } from "../components/store/store.component";
import { ACTIONS } from "../components/store/actions";


const questions = require("../assets/questions.asset.json");



export default function TrivialArch() {

    const [state, dispatch] = useContext(Context);
    const [showRanking, setShowRanking] = useState(false);

    useEffect(() => {

        const sortedQuestions = [];
        const sortedReducedQuestions = [];
        const randomIndex = [];

        if (state.quizMode === "") {
            dispatch({ type: ACTIONS.ADD_QUESTIONS, payload: { questions: [] } })
        } else {
            for (let question of questions) {
                if (question.tags.includes(state.quizMode)) {
                    sortedQuestions.push(question)
                }
            }

            while (randomIndex.length < 20) {
                const randomNum = Math.ceil(Math.random() * sortedQuestions.length);
                if (!randomIndex.includes(randomNum)) {
                    randomIndex.push(randomNum)
                }
            }

            for (let index of randomIndex) {
                sortedReducedQuestions.push(sortedQuestions[index - 1])
            }

            // console.log("sorted questions: ", sortedReducedQuestions)
            dispatch({ type: ACTIONS.ADD_QUESTIONS, payload: { questions: sortedReducedQuestions } })
        }

    }, [state.quizMode])

    const handleCancel = e => {
        e.preventDefault();
        dispatch({ type: ACTIONS.RESTORE_GAME })
    }

    const handleRanking = () => {
        setShowRanking(!showRanking)
    }


    const quizDisplay = () => {

        if (showRanking) {
            return <Ranking />
        } else if (state.quizMode === "") {
            return <QuizMode />
        } else if (!state.isReady && state.quizMode !== "") {
            return <Rules />
        } else if (state.isReady && state.quizMode !== "" && !state.isFinished) {
            return <Question />
        } else if (state.isFinished) {
            return <Score />
        }

    }


    return (
        <div className="trivialarch-main">
            <div className="trivialarch-container">

                {quizDisplay()}

                {/* <QuizMode /> */}
                {/* <Rules /> */}
                {/* <Question /> */}
                {/* <Score /> */}
                {/* <Ranking /> */}


                {state.quizMode !== "" && !state.isFinished && <button onClick={handleCancel} className="cancel-btn">Restart</button>}
                {state.quizMode === "" && <button onClick={handleRanking} className="cancel-btn">{!showRanking ? "Ranking" : "Menu"}</button>}

            </div>
        </div>
    )
}