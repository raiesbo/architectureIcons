import React, { useReducer, createContext } from "react"


// REDUX HOOKS
import { Reducer } from "./reducer";
// import { ACTIONS } from "./actions";


const initialState = {
    // url: "http://localhost:5000/",
    url: "https://archicons-server.herokuapp.com/",
    username: "",
    quizMode: "",
    isReady: false,
    isFinished: false,
    questionsList: [],
    answers: {
        total: 0,
        right: 0,
        wrong: 0
    },
    seconds: 30
}


export const Context = createContext(initialState);


export default function Store({ children }) {

    const [state, dispatch] = useReducer(Reducer, initialState);


    return (
        <Context.Provider value={[state, dispatch]}>

            {children}

        </Context.Provider>
    )
}