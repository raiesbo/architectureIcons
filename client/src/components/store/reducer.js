import { ACTIONS } from "./actions";


export const Reducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.ADD_USERNAME:
            // console.log(action.payload)
            return { ...state, username: action.payload.username };
        case ACTIONS.RESTORE_USERNAME:
            // console.log(action.payload)
            return { ...state, username: "" };
        case ACTIONS.ADD_QUIZZMODE:
            // console.log(action.payload)
            return { ...state, quizzMode: action.payload.mode };
        case ACTIONS.TOGGLE_ISREADY:
            // console.log(action.payload)
            return { ...state, isReady: !state.isReady };
        case ACTIONS.TOGGLE_ISFINISHED:
            console.log("state from inside", state)
            return { ...state, isFinished: !state.isFinished };
        case ACTIONS.ADD_QUESTIONS:
            // console.log(action.payload)
            return { ...state, questionsList: action.payload.questions };
        case ACTIONS.ADD_ANSWER:
            // console.log(action.payload)
            return {
                ...state, answers: {
                    total: state.answers.total + 1,
                    right: state.answers.right + action.payload.right,
                    wrong: state.answers.wrong + action.payload.wrong
                }
            };
        case ACTIONS.RESTORE_GAME:
            console.log("game restored")
            return {
                ...state,
                quizzMode: "",
                isReady: false,
                isFinished: false,
                questionsList: [],
                answers: { total: 0, right: 0, wrong: 0 }
            };
        default:
            return state;
    }
}
