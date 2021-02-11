import React, { useState, useEffect, useContext } from "react"
import "./trivialarch.styles.css";
import QuizzMode from "../components/quizz/quizzMode.component";
import Rules from "../components/quizz/rules.component";
import Question from "../components/quizz/question.component";
import Score from "../components/quizz/score.component";
import Ranking from "../components/quizz/ranking.component";


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

        if (state.quizzMode === "") {
            dispatch({ type: ACTIONS.ADD_QUESTIONS, payload: { questions: [] } })
        } else {
            for (let question of questions) {
                if (question.tags.includes(state.quizzMode)) {
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

            console.log("sorted questions: ", sortedReducedQuestions)
            dispatch({ type: ACTIONS.ADD_QUESTIONS, payload: { questions: sortedReducedQuestions } })
        }

    }, [state.quizzMode])

    const handleCancel = e => {
        e.preventDefault();
        dispatch({ type: ACTIONS.RESTORE_GAME })
    }

    const handleRanking = () => {
        setShowRanking(!showRanking)
    }


    const quizzDisplay = () => {

        if (showRanking) {
            return <Ranking />
        } else if (state.quizzMode === "") {
            return <QuizzMode />
        } else if (!state.isReady && state.quizzMode !== "") {
            return <Rules />
        } else if (state.isReady && state.quizzMode !== "" && !state.isFinished) {
            return <Question />
        } else if (state.isFinished) {
            return <Score />
        } else {
            return ""
        }

    }


    return (
        <div className="trivialarch-main">
            <div className="trivialarch-container">


                {quizzDisplay()}

                {/* <QuizzMode /> */}
                {/* <Rules /> */}
                {/* <Question /> */}
                {/* <Score /> */}
                {/* <Ranking /> */}


                {state.quizzMode !== "" && !state.isFinished && <button onClick={handleCancel} className="cancel-btn">Restart</button>}
                {state.quizzMode === "" && <button onClick={handleRanking} className="cancel-btn">{!showRanking ? "Ranking" : "Menu"}</button>}

            </div>
        </div>
    )
}