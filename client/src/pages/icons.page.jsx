// import React, { useState, useEffect } from "react"
import "./icons.styles.css";

import { useParams } from "react-router-dom";


export default function Icons() {

    let { architect } = useParams();

    // useEffect(() => {
    //         menuStrongHandler("Icons")
    // }, [])
    

    return (
        <div className="icons-main">
            <div className="icons-container">

                <h4>{architect ? architect : "Icons"}</h4>

                <div className="lds-grid"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>

                <h5>Coming soon</h5>


            </div>
        </div>
    )
}