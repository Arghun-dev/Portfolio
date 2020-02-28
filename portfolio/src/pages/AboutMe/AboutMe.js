import React from 'react';
import './AboutMe.css';
import Navbar from '../../components/Navbar/Navbar';

const AboutMe = () => {
    return (
        <div className='AboutMe'>
            <Navbar />
            <div className='AboutMe-content'>
                <h1>About Me</h1>
            </div>  
        </div>
    )
}

export default AboutMe;