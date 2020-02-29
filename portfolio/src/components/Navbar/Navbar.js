import React from 'react';
import './Navbar.css';

import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <Link className='navbar-link right hvr-bounce-to-right' to='/aboutme'>About Me</Link>
            <Link className='navbar-link left hvr-bounce-to-right' to='/myskills'>My Skills</Link>
            <Link className='navbar-link right hvr-bounce-to-right' to='/projects'>Projects</Link>
            <Link className='navbar-link left hvr-bounce-to-right' to='/contact'>Contact</Link>
        </nav>
    )
}

export default Navbar;