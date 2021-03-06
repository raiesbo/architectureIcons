import { ACTIONS } from "./actions";


export const Reducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.ADD_USERNAME:
            // console.log(action.payload)
            return { ...state, username: action.payload.username };
        case ACTIONS.RESTORE_USERNAME:
            // console.log(action.payload)
            return { ...state, username: "" };
        case ACTIONS.ADD_QUIZMODE:
            // console.log(action.payload)
            return { ...state, quizMode: action.payload.mode };
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
        case ACTIONS.MINUS_SECONDS:
            // console.log("MINUS_SECONDS", state)
            return { ...state, seconds: state.seconds - 1 }
        case ACTIONS.RESTART_SECONDS:
            return { ...state, seconds: 30 }
        case ACTIONS.RESTORE_GAME:
            console.log("game restored")
            return {
                ...state,
                quizMode: "",
                isReady: false,
                isFinished: false,
                questionsList: [],
                answers: { total: 0, right: 0, wrong: 0 },
                seconds: 30
            };
        default:
            return state;
    }
}
