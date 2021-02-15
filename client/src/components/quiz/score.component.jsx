import { useState, useContext } from 'react';
import { Context } from '../store/store.component';
import { ACTIONS } from "../store/actions";
import "./score.styles.css";


export default function Score() {

    const [state, dispatch] = useContext(Context);
    const [name, setName] = useState("")

    const handleCancel = async (e) => {
        e.preventDefault();
        if (name !== "") {
            // dispatch({ type: ACTIONS.ADD_USERNAME, payload: { username: name } })

            try {
                const res = await fetch(`${state.url}champion`, {
                    method: "POST",
                    body: JSON.stringify({
                        username: name,
                        score: state.answers.right * 4,
                        quizzMode: state.quizMode
                    }),
                    headers: {
                        "Content-Type": "application/json"
                    }
                })

                const user = res.json();
                console.log(user)
            }
            catch (e) {
                console.log(e)
            }

        }
        dispatch({ type: ACTIONS.RESTORE_GAME })
    }



    return (
        <div className="score-container" >

            <h3>Congratulations!</h3>
            <h4>you completed the challenge with a score of: <span>{state.answers.right * 4}</span> points!</h4>
            <div className="username-form">
                <label htmlFor="username">Username:</label>
                <input id="username" type="text" value={name} onChange={e => setName(e.target.value)} maxLength="15" autoComplete="off" />
                <p>If you want to be immortalized in the ranking, enter a username and brag to your friends!</p>
            </div>

            <button onClick={handleCancel}>Finish</button>

        </div>
    )
}