import React from 'react';
import './AboutMe.css';
import Navbar from '../../components/Navbar/Navbar';
import {Link} from 'react-router-dom';

const AboutMe = () => {
    return (
        <div className='AboutMe'>
            <Navbar />
            <div className='AboutMe-content mb-5'>
                <h1>About Me</h1>
                <p className='mb-5'>Front end developer</p>
                <p className='text'>JavaScript and Front-end developer, developing and making Web applications using React.js framework. Working with both class based and functional components in React. Moreover, using very popular new technologies such as React Hooks which makes our code more Clear and Reusable and easier to read in functional programmig which makes our components stateful. Also, using Context API to manage our data and pass or states and data directly to children components without need to pass props in every component of tree.</p>  
            </div>
            <Link className='text-warning link' to='/'>&#8592; Back</Link>  
        </div>
    )
}

export default AboutMe;