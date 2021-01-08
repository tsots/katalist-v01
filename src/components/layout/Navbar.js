import React from 'react';
import NavItems from './NavItems'
import {Nav} from '../styles/Index'

const Navbar = () => {
    return (
        
            <Nav>
            <div className="container">
            <NavItems />
            </div>
        </Nav>
    )
}

export default Navbar
