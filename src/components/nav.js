import React from 'react';
import { NavLink } from "react-router-dom";
import styled from 'styled-components';
import zmlogo from '../logo.png';
const SM = '767px'

const ZMLogo = styled.span.attrs({ className: 'zmLogo' })`
    width: 36px;
    height: 36px;
    display: block;
    background-size: cover;
    background-repeat: no-repeat;
    left: 3rem;
    position: sticky;
    top: 0.5rem;
    @media only screen and (max-width: ${SM}) {
        position: fixed;
        top: 1rem;
        left: 2rem;
    }
`;
const Nav = styled.nav`
    background-color: #fff;
    border-bottom: 1px solid #eee;
    box-shadow: rgba(0 ,0, 0, 0.08) 0 0.5rem 2.5rem;
    width: 100%;
    color: #292c2d;
    position: sticky;
    top:0;
    z-index: 1089;
    margin-bottom: 2rem;
    display: flex;
    @media print {
        display: none;
    }

    > ul {
        margin: 0 auto;
        padding: 0;
        display: flex;
        flex-direction: row;
        height: 100%;
        width: 100%;
        justify-content: center;
    }

    li {
        list-style: none;
        flex: 0 0 auto;
        height: 100%;
        border-radius: 0;
        
        > a {
            display: block;
            padding: 1.5rem 2rem;
            border-radius: 0;
            font-size: 1rem;
            text-decoration: none;
            color: rgba(0, 0, 0, 0.6);
            text-align: center;
            text-transform: uppercase;
            font-weight: bold;
            border-right: 1px solid #eee;
            border-left: 1px solid #eee;
            margin-left: -1px;
            &:focus {
                outline: 2px solid transparent;
            }
            &.is-active {
                box-shadow:inset #007bff 0 -2px 0;
                color: #007bff;

            }
        }
    }
    @media only screen and (max-width: ${SM}) {
        position: fixed;
        top: auto;
        bottom: 0;
        background-color: #fff;
        color: #000;
        height: 6rem;
        border-bottom: none;
        border-top: 1px solid #ddd;
        margin: 0;
        z-index: 1092;
        li {
            flex: 0 0 33.333333%;
            a {
                
                line-height: 6rem;
                padding: 0;
                font-size: 1.1rem;
                background-color: none;
                color: rgba(0, 0, 0, 0.6);
                border: none;
                &.is-active {
                    background-color: transparent;
                    box-shadow:inset #007bff 0 2px 0;
                    color: #007bff;

                }
            }
        }

    }

`;

function NavBar() {
    return (
    <Nav>
        <ZMLogo style={{ backgroundImage: `url(${zmlogo})`}} />
        <ul>
            <li>
                <NavLink exact={true} activeClassName='is-active' to="/">Agenda</NavLink>
            </li>
            <li>
                <NavLink activeClassName='is-active' to="/timer/">Timer</NavLink>
            </li>
            <li>
                <NavLink activeClassName='is-active' to="/help/">Need Help?</NavLink>
            </li>
        </ul>
    </Nav>
    )
}

NavBar.propTypes = {}

export default NavBar
