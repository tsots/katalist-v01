import React from 'react';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

const NavLinks = styled.ul`
display: flex;
height:60px;
`;

const Link = styled(NavLink)`
color: white;
text-decoration: none;
display:flex;
align-items:center;
height:100%;
margin-right:.5rem;

&:hover{
    border-bottom: 1px solid orange;
    height: 59px;
}
`;

const navItems = () => {
    return (
        <>
        <div className="logo">
        <Link to="/">Katalist</Link></div>
        <NavLinks className="links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/design">Design</Link>
            <Link to="/digital">Digital</Link>
            <Link to="/contact">Contact</Link>
        </NavLinks>
        </>
    )
}

export default navItems
