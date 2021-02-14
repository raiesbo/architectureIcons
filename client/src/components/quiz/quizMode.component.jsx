import { useContext } from 'react';
import "./quizMode.styles.css"
import { ACTIONS } from "../store/actions";
import { Context } from "../store/store.component";


export default function QuizMode() {

    const [state, dispatch] = useContext(Context);

    const images = require.context(`../../assets/img/`, true);

    const modes = [
        {
            title: "History",
            img: "history_v3.jpg",
            mode: "history"
        },
        {
            title: "Modernism",
            img: "modernism_v3.jpg",
            mode: "general"
        },
        {
            title: "General",
            img: "general_v3.jpg",
            mode: "general"
        }
    ]

    return (
        <div className="quizMode-container">

            {
                modes.map((item, id) => {
                    const modeImage = images(`./${item.img}`).default;
                    return (
                        <div
                            key={id}
                            className="mode"
                            style={{ backgroundImage: `url("${modeImage}")` }}
                            onClick={() => dispatch({ type: ACTIONS.ADD_QUIZMODE, payload: { mode: item.mode } })}
                        >
                            <h2>{item.title}</h2>
                        </div>
                    )
                })
            }

        </div>
    )
}

