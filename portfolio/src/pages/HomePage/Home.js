import React from 'react';
import './Home.css';
import {Link} from 'react-router-dom';

import Navbar from '../../components/Navbar/Navbar';

const Home = () => {
    return (
        <div className='Home'>
            <Navbar />
            <img src='https://www.buyholdlong.com/wp-content/uploads/2017/01/portfolio-logo1.jpg' className='logo' />
            <div className='Home-content'>   
                <h1 className='display-3 font-weight-light portfolio-heading'>Portfolio</h1>
                <h2 className='mt-5 rubberBand'>This is my portfolio project</h2>
                <Link className='mt-5 btn btn-outline-warning moveUp' to='/aboutme'>See More</Link>
            </div>
        </div>
    )
}

export default Home;