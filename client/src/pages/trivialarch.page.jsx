import React, { useState, useEffect, useReducer } from "react"
import "./trivialarch.styles.css";
import QuizzMode from "../components/quizz/quizzMode.component";
import Rules from "../components/quizz/rules.component";
import Question from "../components/quizz/question.component";

const questions = require("../assets/questions.asset.json");

export const ACTIONS = {
    ADD_USERNAME: "ADD_USERNAME",
    RESTORE_USERNAME: "RESTORE_USERNAME",
    ADD_QUIZZMODE: "ADD_QUIZZMODE",
    ADD_QUESTIONS: "ADD_QUESTIONS",
    ADD_ANSWER: "ADD_ANSWER",
    RESTORE_GAME: "RESTORE_GAME"
}

const reducer = (state, action) => {
    switch (state.type) {
        case ACTIONS.ADD_USERNAME:
            console.log(action.payload)
            return { ...state, username: action.payload.username };
        case ACTIONS.RESTORE_USERNAME:
            console.log(action.payload)
            return { ...state, username: "" };
        case ACTIONS.ADD_QUIZZMODE:
            console.log(action.payload)
            return { ...state, quizzMode: action.payload.mode };
        case ACTIONS.ADD_QUESTIONS:
            return { ...state, questionsList: action.payload.questions };
        case ACTIONS.ADD_ANSWER:
            return state;
        case ACTIONS.RESTORE_GAME:
            console.log("game restored")
            return { ...state, quizzMode: "", isReady: false, questionsList: [], answers: { total: 0, right: 0, wrong: 0 } };
        default:
            return state;
    }
}

const initialState = {
    username: "",
    quizzMode: "",
    isReady: false,
    questionsList: [],
    answers: {
        total: 0,
        right: 0,
        wrong: 0
    }
}


export default function TrivialArch() {

    const [state, dispatch] = useReducer(reducer, initialState);

    console.log("State: ", state)

    useEffect(() => {

        const sortedQuestions = [];
        const randomIndex = [];

        if (state.quizzMode === "") {
            dispatch({ type: ACTIONS.ADD_QUESTIONS, payload: { questions: [] } })
        } else {
            for (let question of questions) {
                if (question.tags.includes(state.quizzMode)) {
                    sortedQuestions.push(question)
                }
            }

            while (randomIndex.length <= 10) {
                const randomNum = Math.floor(Math.random() * sortedQuestions.length);
                if (randomIndex.includes(randomNum)) {
                    randomIndex.push(randomNum)
                }
            }

            console.log("sorted questions: ", sortedQuestions)
            dispatch({ type: ACTIONS.ADD_QUESTIONS, payload: { questions: sortedQuestions } })
        }

    }, [state.quizzMode])


    return (
        <div className="trivialarch-main">
            <div className="trivialarch-container">


                {state.quizzMode === "" && <QuizzMode dispatch={dispatch} state={state}/>}
                {!state.isReady && state.quizzMode !== "" ? <Rules dispatch={dispatch} /> : null}
                {state.isReady && state.quizzMode !== "" ? <Question dispatch={dispatch} /> : null}


            </div>
        </div>
    )
}