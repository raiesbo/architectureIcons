import React, { useReducer, createContext } from "react"


// REDUX HOOKS
import { Reducer } from "./reducer";
// import { ACTIONS } from "./actions";


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


export const Context = createContext(initialState);


export default function Store({ children }) {

    const [state, dispatch] = useReducer(Reducer, initialState);


    return (
        <Context.Provider value={[state, dispatch]}>

            {children}

        </Context.Provider>
    )
}