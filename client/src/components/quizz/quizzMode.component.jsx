import "./quizzMode.styles.css"
import { ACTIONS } from "../store/actions";

export default function QuizzMode({ dispatch, state }) {

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
            mode: "history"
        },
        {
            title: "General",
            img: "general_v3.jpg",
            mode: "history"
        }
    ]

    return (
        <div className="quizzMode-container">

            {
                modes.map((item, id) => {
                    const modeImage = images(`./${item.img}`).default;
                    return (
                        <div
                            key={id}
                            className="mode"
                            // style={{ backgroundImage: `url("../../assets/img/${item.img}")` }}
                            style={{ backgroundImage: `url("${modeImage}")` }}
                            onClick={() => dispatch({ type: ACTIONS.ADD_QUIZZMODE, payload: { mode: item.mode } })}
                        >
                            <h2>{item.title}</h2>
                        </div>
                    )
                })
            }

        </div>
    )
}

