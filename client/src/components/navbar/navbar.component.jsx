import { Link } from 'react-router-dom';
import "./navbar.styles.css";

export default function NavBar({ menuStrong }) {

    const menuItems = [
        {
            name: 'Home',
            url: '/'
        },
        {
            name: 'Icons',
            url: '/icons'
        },
        {
            name: 'TrivialArch',
            url: '/trivialArch'
        },
        {
            name: 'Contact',
            url: '/contact'
        }
    ]

    return (
        <section className="navbar-main">


            <div className="navbar-container">
                <div className="navbar-icons">
                    <h4 className="logo">A<span className="alt-text">rchitecture </span>I<span className="alt-text">cons</span>.</h4>
                </div>

                <nav>
                    <ul className="menu-links">
                        {
                            menuItems.map((item, id) => {
                                return (
                                    <li key={id}>
                                        <Link to={item.url} className={menuStrong === item.name && "strong-text"}>
                                            {item.name}
                                        </Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </nav>

            </div>
        </section>
    )
}