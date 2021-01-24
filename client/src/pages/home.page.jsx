import React, { useState, useEffect } from "react";
import "./home.styles.css";
import quotes from "../assets/quotes.asset";


const Home = () => {

    const [ quote, setQuote ] = useState({});

    // let timing;

    // const quoteTimer = () => {
    //     timing = setTimeout(() => { quoteshandler() }, 7000)
    // }

    const quoteshandler = () => {
        // clearTimeout(timing)
        let randomNum = Math.floor( Math.random() * quotes.length)
        setQuote( quotes[randomNum] )
        // return quoteTimer()
    }

    useEffect(() => {
        quoteshandler()
    }, [])




    return (
        <div className="home-container">
            <div className="home-main">



                <div className="quotes-container">

                    {quote && <h5 className="quote" >"{ quote.quote }"</h5>}

                    <div className="quote-data">
                        {quote && <h6 className="author">-- { quote.author }</h6>}
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

export default Home;