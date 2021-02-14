import React, { useState, useContext } from "react";
import { Context } from "../components/store/store.component";
import "./contact.styles.css";


export default function Contact() {

    const [state, distpacth] = useContext(Context);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [topic, setTopic] = useState("");
    const [description, setDescription] = useState("");

    const [isSending, setIsSending] = useState(false);

    // useEffect(() => {
    //     menuStrongHandler("Icons")
    // }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(name, email, topic, description)

        setIsSending(true)

        // server request/email
        try {
            const res = await fetch(`${state.url}email`, {
                method: "POST",
                body: JSON.stringify({
                    name,
                    email,
                    topic,
                    description
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            })

            const data = await res.json();
            // console.log(data)
        }
        catch (e) {
            console.log(e)
        }

        setName("")
        setEmail("")
        setTopic("")
        setDescription("")

        setIsSending(false)
    }


    const formDisplay = () => {


        return (
            <form onSubmit={handleSubmit}>

                <label htmlFor="name">Name:</label>
                <input type="text" id="name" required maxLength="12" autoComplete="off" value={name} onChange={e => setName(e.target.value)} />

                <label htmlFor="email">Email:</label>
                <input type="text" id="email" required maxLength="20" autoComplete="off" value={email} onChange={e => setEmail(e.target.value)} />

                <label htmlFor="topic">Topic:</label>
                <input type="text" id="topic" required maxLength="20" autoComplete="off" value={topic} onChange={e => setTopic(e.target.value)} />

                <label htmlFor="description">Your thoughts:</label>
                <textarea
                    id="description"
                    required="true"
                    autoComplete="off"
                    placeholder="Enter your ideas here..."
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                ></textarea>

                <button>Submit</button>

            </form>
        )
    }


    return (
        <div className="contact-main">
            <div className="contact-container">

                {/* <h4>Contact</h4>

                <div className="lds-grid"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>

                <h5>Coming soon</h5> */}

                <h2 className="contact-title">Contact us!</h2>

                <p className="contact-description">If there is any mistake in the questions, the information or answers are not accurate or you simply wanna say hello, please fulfill the following form.</p>


                {isSending ? <div> <i class="fas fa-spinner fa-3x"></i> <p>Sending</p> </div> : formDisplay()}

                {/* <i class="fas fa-spinner fa-3x"></i> */}
                {/* <div><p>Sending...</p><i class="fas fa-spinner fa-3x"></i> </div> */}

            </div>
        </div>
    )
}