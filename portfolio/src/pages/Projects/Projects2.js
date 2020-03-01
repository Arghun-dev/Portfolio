import React, { useContext } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import {Link} from 'react-router-dom';
import './Projects.css';
import {CardContext} from '../../context/CardContext';
import ChangePage from '../../components/ChangePage/ChangePage';

const Projects2 = () => {
    const {card} = useContext(CardContext);
    return (
        <div className='Projects'>
            <Navbar />
            <Link className='text-warning link' to='/myskills'>	&#8592;Back</Link>
            <h1 className='text-light mb-5 heading'>Projects2</h1>
            <div className='Projects-content'>
                <div className='card cardWidth card1'>
                    <img className='card-img-top' style={{height: '11rem'}} src='https://static.skillshare.com/uploads/project/62166/cover_1242_efeb689126e5fb2152bcb800887a06d6.png' alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">Todo App</h5>
                        <p className="card-text">Created with React Hooks</p>
                        <a href="http://world-shop.herokuapp.com/" className="btn btn-primary">Continue</a>
                    </div>     
                </div>
                <div className='card cardWidth card2'>
                    <img className='card-img-top' style={{height: '11rem'}} src='https://avatars.slack-edge.com/2018-08-17/419403887367_b8bdc08f13a40ee9f524_512.png' alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">Dog App</h5>
                        <p className="card-text">Created with React and React Router</p>
                        <a href="http://world-shop.herokuapp.com/" className="btn btn-primary">Continue</a>
                    </div>     
                </div>
                <div className='card cardWidth card3'>
                    <img className='card-img-top' style={{height: '11rem'}} src='https://lh3.googleusercontent.com/proxy/_11_m6PqTb7AKSzjLqSe789nIoeKPDYzF7JMpZBWJ3-QnQLnP-FQVl32OQc9YTwptPkFJZMKjw-N_1DppXHUvZeC7-qC45DGWGqUy9Rm-Ko4oQIFHXKL2f91IsCCbyM_CEM1e-0OMlo' alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">Flip Heads and Tails</h5>
                        <p className="card-text">Mini React Application</p>
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

export default Projects2;