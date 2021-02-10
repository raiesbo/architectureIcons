import { useState, useContext } from 'react';
import { Context } from '../store/store.component';
import { ACTIONS } from "../store/actions";
import "./score.styles.css";


export default function Score() {

    const [state, dispatch] = useContext(Context);
    const [name, setName] = useState("")

    const handleCancel = e => {
        e.preventDefault();
        if (name !== "" ) {
            dispatch({ type: ACTIONS.ADD_USERNAME, payload: { username: name } })
        }
        dispatch({ type: ACTIONS.RESTORE_GAME })
    }



    return (
        <div className="score-container" >

            <h3>Congratulations!</h3>
            <h4>you completed the challenge with a score of: <span>{state.answers.right}</span>!</h4>
            <div className="username-form">
                <label htmlFor="username">Username:</label>
                <input id="username" type="text" value={name} onChange={e => setName(e.target.value)} />
                <p>If you want to be immortalized in the ranking, enter a username and brag to your friends!</p>
            </div>

            <button onClick={handleCancel}>Finish</button>

        </div>
    )
}