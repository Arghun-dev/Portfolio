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
            <h1 className='text-light mb-5 heading'>Projects</h1>
            <div className='Projects-content'>
                <div className='card cardWidth card1'>
                    <img className='card-img-top' style={{height: '11rem'}} src='https://cmkt-image-prd.freetls.fastly.net/0.1.0/ps/941461/910/607/m1/fpnw/wm1/108-.jpg?1454576210&s=5f8edcb420e18b0db1a74597837d4ff1' alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">e-commerce project</h5>
                        <p className="card-text">Created with React and Redux</p>
                        <a href="http://world-shop.herokuapp.com/" className="btn btn-primary">Continue</a>
                    </div>     
                </div>
                <div className='card cardWidth card2'>
                    <img className='card-img-top' style={{height: '11rem'}} src='https://www.sketchappsources.com/resources/source-image/flatui-color-pallete.png' alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">Color App</h5>
                        <p className="card-text">Created with React</p>
                        <a href="http://world-shop.herokuapp.com/" className="btn btn-primary">Continue</a>
                    </div>     
                </div>
                <div className='card cardWidth card3'>
                    <img className='card-img-top' style={{height: '11rem'}} src='https://lh3.googleusercontent.com/proxy/hHuDgu7r5XCFQJCcgstGZhnvSPNvYgk2DdIIEgoP1qKIOsiwhesZPqn6Sq0j3vzqOhUhPQ1Gv82H4dieX0DNV6to' alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">Dad Jokes</h5>
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