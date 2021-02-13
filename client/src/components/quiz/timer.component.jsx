import { useEffect, useContext } from 'react';
import { ACTIONS } from "../store/actions";
import { Context } from "../store/store.component";




export default function Timer({ setCounter, handleSubmit }) {

    const [state, dispatch] = useContext(Context);

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

    return (
        <h4 className="timer">Time:
            <span
                style={{ color: state.seconds >= 10 ? "green" : "red" }}
            >
                {state.seconds}
            </span>
        </h4>
    )
}