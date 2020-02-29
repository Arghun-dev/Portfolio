import React from 'react';
import './Card.css';
import {Link} from 'react-router-dom';

const Card = ({card_number, card_image, card_text, card_title}) => {
    return (
        <div className={`card cardWidth card${card_number}`}>
            <img className='card-img-top' src={`${card_image}`} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{card_title}</h5>
                <p className="card-text">{card_text}</p>
                <Link href="#" className="btn btn-primary" to={`/myskills/${card_title}`}>Continue</Link>
            </div>     
        </div>
    )
}

export default Card;