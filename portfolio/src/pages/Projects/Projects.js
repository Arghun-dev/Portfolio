import React, { useContext } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import {Link} from 'react-router-dom';
import './Projects.css';
import Card from '../../components/Card/Card';
import {CardContext} from '../../context/CardContext';

const Projects = () => {
    const {card} = useContext(CardContext);
    console.log(card);
    return (
        <div className='Projects'>
            <Navbar />
            <Link className='text-warning link' to='/myskills'>	&#8592;Back</Link>
            <h1>Projects</h1>
            <div className='Projects-content'>
                <Card 
                    card_number={card[2].id} 
                    card_image={card[2].src} 
                    card_title={card[2].title} 
                    card_text={`My ${card[2].address}`}
                    className='card'
                />
            </div>
        </div>
    )
}

export default Projects;