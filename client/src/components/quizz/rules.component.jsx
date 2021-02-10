import { useContext } from 'react';
import { ACTIONS } from "../store/actions";
import { Context } from "../store/store.component";
import "./rules.styles.css";

export default function Rules() {

    const [state, dispatch] = useContext(Context);

    return (
        <div className="rules-container">
            <h3 className="rules-title">Hi{state.username}, read carefully and lets go!</h3>

            <div className="rules-list">
                <ul>
                    <li>The quizz consists on 20 questions.</li>
                    <li>Each question will take no more than 30 seconds.</li>
                    <li>Whenever you are ready, click on the start button.</li>
                </ul>

            </div>

            <button
                onClick={() => dispatch({ type: ACTIONS.TOGGLE_ISREADY })}
            >Start</button>

        </div>
    )
}