import React from 'react';
import './Navbar.css';

import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <Link className='navbar-link right' to='/'>About Me</Link>
            <Link className='navbar-link left' to='/myskills'>My Skills</Link>
            <Link className='navbar-link right' to='/projects'>Projects</Link>
            <Link className='navbar-link left' to='/contact'>Contact</Link>
        </nav>
    )
}

export default Navbar;