import React, { useReducer, createContext } from "react"


// REDUX HOOKS
import { Reducer } from "./reducer";
// import { ACTIONS } from "./actions";


const initialState = {
    url: "http://localhost:5000/",
    // url: "https://architectureicons-server.herokuapp.com/",
    username: "",
    quizzMode: "",
    isReady: false,
    isFinished: false,
    questionsList: [],
    answers: {
        total: 0,
        right: 0,
        wrong: 0
    }
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