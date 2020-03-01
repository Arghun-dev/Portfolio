import React, { useContext } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import {Link} from 'react-router-dom';
import './Projects.css';
import {CardContext} from '../../context/CardContext';
import ChangePage from '../../components/ChangePage/ChangePage';

const Projects = () => {
    const {card} = useContext(CardContext);
    return (
        <div className='Projects'>
            <Navbar />
            <Link className='text-warning link' to='/myskills'>	&#8592;Back</Link>
            <h1 className='text-light mb-5 heading'>Projects3</h1>
            <div className='Projects-content'>
                <div className='card cardWidth card1'>
                    <img className='card-img-top' src='https://i.stack.imgur.com/KXJzi.png' alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">Recipe App</h5>
                        <p className="card-text">React Application</p>
                        <a href="http://world-shop.herokuapp.com/" className="btn btn-primary">Continue</a>
                    </div>     
                </div>
            </div>
            <div className='change-page'>
                <ChangePage />
            </div>
        </div>
    )
}

export default Projects;