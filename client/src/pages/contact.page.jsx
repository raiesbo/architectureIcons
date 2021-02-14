import React, { useState } from "react"
import "./contact.styles.css";


export default function Contact() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [topic, setTopic] = useState("");
    const [description, setDescription] = useState("");

    // useEffect(() => {
    //     menuStrongHandler("Icons")
    // }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, email, topic, description)

        setName("")
        setEmail("")
        setTopic("")
        setDescription("")
    }


    return (
        <div className="contact-main">
            <div className="contact-container">

                {/* <h4>Contact</h4>

                <div className="lds-grid"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>

                <h5>Coming soon</h5> */}

                <h2 className="contact-title">Contact us!</h2>

                <p className="contact-description">If there is any mistake in the questions, the information or answers are not accurate or you simply wanna say hello, please fulfill the following form.</p>


                <form onSubmit={handleSubmit}>

                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" required maxLength="12" autoComplete="off" value={name} onChange={e => setName(e.target.value)} />

                    <label htmlFor="email">Email:</label>
                    <input type="text" id="email" required maxLength="20" autoComplete="off" value={email} onChange={e => setEmail(e.target.value)} />

                    <label htmlFor="topic">Topic:</label>
                    <input type="text" id="topic" required maxLength="20" autoComplete="off" value={topic} onChange={e => setTopic(e.target.value)} />

                    <label htmlFor="description">Description:</label>
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

            </div>
        </div>
    )
}