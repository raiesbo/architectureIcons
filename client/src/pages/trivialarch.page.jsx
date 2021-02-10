import React, { useState, useEffect, useReducer, createContext, useContext } from "react"
import "./trivialarch.styles.css";
import QuizzMode from "../components/quizz/quizzMode.component";
import Rules from "../components/quizz/rules.component";
import Question from "../components/quizz/question.component";


// REDUX HOOKS
import { Context } from "../components/store/store.component";
import { ACTIONS } from "../components/store/actions";


const questions = require("../assets/questions.asset.json");



export default function TrivialArch() {

    const [state, dispatch] = useContext(Context);

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

            while (randomIndex.length < 10) {
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


    return (
        <div className="trivialarch-main">
            <div className="trivialarch-container">



                {state.quizzMode === "" && <QuizzMode dispatch={dispatch} />}
                {!state.isReady && state.quizzMode !== "" ? <Rules dispatch={dispatch} /> : null}
                {state.isReady && state.quizzMode !== "" ? <Question dispatch={dispatch} /> : null}
                {/* <Rules /> */}
                {/* <Question /> */}


                {state.quizzMode !== "" && <button onClick={handleCancel} className="cancel-btn">Restart</button>}

            </div>
        </div>
    )
}