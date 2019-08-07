import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';

const Nav = styled.nav`
    background: #003F62;
    width: 10rem;
    color: #fff;

    > ul {
        margin: 0;
        padding: 0;
    }

    li {
        list-style: none;
        display: inline-block;

        > a {
            display: inline-block;
            padding: .5rem 1rem;
            text-decoration: none;
            color: #fff;
        }
    }
`;

function NavBar() {
    return (
    <Nav>
        <ul>
        <li>
            <Link to="/">Agenda</Link>
        </li>
        <li>
            <Link to="/timer/">Timer</Link>
        </li>
        </ul>
    </Nav>
    )
}

NavBar.propTypes = {}

export default NavBar
