import React from 'react';
import { useLocation } from 'react-router';
// import { Link, NavLink } from 'react-router-dom';
import { LinkStyled, NavList } from './Navs.styled';

const LINKS = [
    { to: "/", text: "Home" },
    { to: "/starred", text: "Starred" },
    { to: "/contact", text: "Contact" }

]
const Navs = () => {
    const location = useLocation()
    console.log(location)
    return (
        <>
            <nav>
                <NavList>
                    {
                        LINKS.map(item =>
                            <li key={item.to}>
                                <LinkStyled to={item.to} className={item.to === location.pathname ? 'active' : ''}>{item.text}</LinkStyled>
                            </li>)
                    }
                </NavList>
            </nav >
        </>
    )
}

export default Navs;