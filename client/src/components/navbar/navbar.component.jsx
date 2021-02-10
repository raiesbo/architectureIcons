import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "./navbar.styles.css";

export default function NavBar({ menuStrong }) {

    const [hidden, setHidden] = useState(false)

    const menuItems = [
        {
            name: 'Home',
            url: '/'
        },
        // {
        //     name: 'Icons',
        //     url: '/icons'
        // },
        {
            name: 'TrivialArch',
            url: '/trivialArch'
        },
        {
            name: 'Contact',
            url: '/contact'
        }
    ]

    const handleNav = () => {
        setHidden(!hidden)
    }

    return (
        <section className="navbar-main">


            <nav className="navbar-container">
                <div className="navbar-icons">
                    <h4 className="logo">A<span className="alt-text">rchitecture </span>I<span className="alt-text">cons</span>.</h4>
                </div>



                <ul className="menu-links" style={hidden ? { transform: "translateX(0%)" } : null} >
                    {
                        menuItems.map((item, id) => {
                            return (
                                <li key={id}
                                    style={hidden ? { animation: `navLinksFade 0.5s ease forwards ${id / menuItems.length + 0.4}s` } : null}
                                    onClick={handleNav}
                                >
                                    <Link to={item.url} className={menuStrong === item.name ? "strong-text" : undefined}>
                                        {item.name}
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>


                <div className="burger-container" onClick={handleNav}>
                    <div className={"burger line1" + (hidden && " toggle1")}></div>
                    <div className={"burger line2" + (hidden && " toggle2")}></div>
                    <div className={"burger line3" + (hidden && " toggle3")}></div>
                </div>

            </nav>
        </section>
    )
}