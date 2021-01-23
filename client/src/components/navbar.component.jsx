import { Link } from 'react-router-dom';
import "./navbar.styles.css";

export default function NavBar() {

    const menuItems = [
        {
            name: 'Home',
            url: '/'
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


    return(
        <section className="navbar-main">


            <div className="navbar-container">
                <div className="navbar-icons">
                    <h4>AI.</h4>
                </div>

                <nav>
                    <ul className="menu-links">
                        {
                            menuItems.map((item, id) => {
                                return (<li key={ id }><Link to={item.url}>{ item.name }</Link></li>)
                            })
                        }
                    </ul>
                </nav>

            </div>
        </section>
    )
}