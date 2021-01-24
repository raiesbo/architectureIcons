import React, { useState, useEffect } from "react";
import "./home.styles.css";
import quotes from "../assets/quotes.asset";


export default function Home( props ) {

    // console.log(props)

    const [quote, setQuote] = useState({});

    // let timing;

    // const quoteTimer = () => {
    //     timing = setTimeout(() => { quoteshandler() }, 7000)
    // }

    let timeout;

    const quoteshandler = () => {
        let randomNum = Math.floor(Math.random() * quotes.length)
        while (quotes.indexOf(quote) === randomNum) {
            console.log("jumped num: ", randomNum)
            randomNum = Math.floor(Math.random() * quotes.length)
        }
        console.log(randomNum)
        setQuote(quotes[randomNum])
    }

    useEffect(() => {
        quoteshandler()
        // menuStrongHandler("Home")
    }, [])


    return (
        <div className="home-container">
            <div className="home-main">



                <div className="quotes-container">

                    {quote && <h5 className="quote" >"{quote.quote}"</h5>}

                    <div className="quote-data">
                        {quote && <h6 className="author">-- {quote.author}.</h6>}
                        {quote && <button className="next-quote" onClick={quoteshandler}>Next quote {"->"}</button>}
                    </div>


                </div>

                {/* <h4>Architecture Icons</h4>

                <div class="lds-grid"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>

                <h5>Coming soon</h5> */}



            </div>
        </div>
    )
}
