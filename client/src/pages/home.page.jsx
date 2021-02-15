import React, { useState, useEffect } from "react";
import "./home.styles.css";
const quotes = require("../assets/quotes.asset.json");


export default function Home() {

    const [quote, setQuote] = useState({});
    const [animOn, setAnimOn] = useState(false);
    const [timer, setTimer] = useState("");

    // let timeout;

    const quoteshandler = () => {
        
        // CHANGING QUOTES BASED ON RANDOM NUMBERS
        let randomNum = Math.floor(Math.random() * quotes.length)
        while (quotes.indexOf(quote) === randomNum) {
            console.log("jumped num: ", randomNum)
            randomNum = Math.floor(Math.random() * quotes.length)
        }
        // console.log(randomNum)
        setQuote(quotes[randomNum])
    }

    const clickHandler = () => {
        // CLICK HANDLEING WITH FADING ANIMATION
        // setTimer(clearInterval(timer))

        setAnimOn(true)
        setTimeout(quoteshandler, 350)
        setTimeout(() => setAnimOn(false), 400)
    }

    const settingTimer = () => {
        let timeout = setInterval(clickHandler, 8000)
        return setTimer(timeout);
    }

    // componentDidMount Hook
    useEffect(() => {
        quoteshandler()
        settingTimer()
    }, [])



    return (
        <div className="home-container">
            <div className="home-main">

                <div className="quotes-container">

                    {quote && <h5 className={"quote" + (animOn ? " animation-active" : "")}>"{quote.quote}"</h5>}

                    <div className="quote-data">
                        {quote && <h6 className={"author" + (animOn ? " animation-active" : "")}>-- {quote.author}.</h6>}
                        {quote && <button className="next-quote" onClick={clickHandler}>Next quote {"->"}</button>}
                    </div>

                </div>

            </div>
        </div>
    )
}
