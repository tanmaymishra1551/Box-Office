import React from 'react';
import { Link } from 'react-router-dom';

const LINKS = [
    { to: "/", text: "Home" },
    { to: "/starred", text: "Starred" },
    { to: "/contact", text: "Contact" }

]
const Navs = () => {
    return (
        <>
            <nav>
                <ul>
                    {
                        LINKS.map(item =>
                            <li key={item.to}>
                                <Link to={item.to}>{item.text}</Link>
                            </li>)
                    }
                </ul>
            </nav >
        </>
    )
}

export default Navs;