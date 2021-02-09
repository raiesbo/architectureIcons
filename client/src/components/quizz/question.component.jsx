import { useContext } from "react";
import { Context } from "../store/store.component";
import { ACTIONS } from "../store/actions";

import "./question.styles.css";



export default function Question() {

    const [state, dispatch] = useContext(Context);

    const handleSubmit = e => {
        e.preventDefault();
        console.log("hei")
        dispatch({ type: ACTIONS.ADD_ANSWER, payload: { right: 0, wrong: 0 } })
    }

    const questionTemplate = state.questionsList.map((item, id) => {
        return (
            <form onSubmit={handleSubmit}>

                <h3 className="question">{item.question}</h3>

                <input type="radio" value={0} name="answer1" className="input1" />
                <label htmlFor="answer1" className="answer1" >{item.answers[0].answer}</label>

                <input type="radio" value={1} name="answer2" className="input2" />
                <label htmlFor="answer2" className="answer2" >{item.answers[1].answer}</label>

                <input type="radio" value={2} name="answer3" className="input3" />
                <label htmlFor="answer3" className="answer3" >{item.answers[2].answer}</label>

                <input type="radio" value={3} name="answer4" className="input4" />
                <label htmlFor="answer4" className="answer4" >{item.answers[3].answer}</label>

                <button className="button">Next question</button>

            </form>
        )
    })


    console.log(state.questionsList)

    return (
        <div className="question-container">

            <h4 className="question-num">Question n° {state.answers.total + 1}</h4>
            <h4 className="topic">{state.quizzMode}</h4>
            <h4 className="correct">Correct: {state.answers.right}</h4>
            <h4 className="incorrect">Incorrect: {state.answers.wrong}</h4>

            {questionTemplate[state.answers.total]}


            <button>Cancel</button>

        </div>
    )
}