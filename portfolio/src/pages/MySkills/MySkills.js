import React, {useContext} from 'react';
import './MySkills.css';
import Navbar from '../../components/Navbar/Navbar';
import Card from '../../components/Card/Card';
import {CardContext} from '../../context/CardContext';

const MySkills = () => {
    const {card} = useContext(CardContext);
    console.log(card);
    return (
        <div className='MySkills'>
            <Navbar />
            <h1 className='text-light MySkills-heading'>MySkills</h1>
            <div className='MySkills-content'>
                <Card 
                    card_number={card[0].id} 
                    card_image={card[0].src} 
                    card_title={card[0].title} 
                    card_text={`My ${card[0].title} front-end skills`} 
                />
                <Card 
                    card_number={card[1].id} 
                    card_image={card[1].src} 
                    card_title={card[1].title} 
                    card_text={`My ${card[1].title} front-end skills`} 
                />
            </div>
        </div>
    )
}

export default MySkills;