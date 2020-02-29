import React from 'react';
import './MySkills.css';
import Navbar from '../../components/Navbar/Navbar';
import {Link} from 'react-router-dom';

const MySkills = () => {
    return (
        <div className='MySkills'>
            <Navbar />
            <h1 className='text-light MySkills-heading'>MySkills</h1>
            <div className='MySkills-content'>
                <div className="card cardWidth card1">
                    <img className="card-img-top img1" src="https://codecondo.com/wp-content/uploads/2016/11/Front-End-Development-Frameworks.jpg" alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">Basic</h5>
                        <p className="card-text">Basic knowledge for Front-end</p>
                        <Link href="#" className="btn btn-primary" to='/myskills/basic'>Continue</Link>
                    </div>     
                </div>
                <div className="card cardWidth card2">
                    <img className="card-img-top img2" src="https://www.nylas.com/wp-content/uploads/React_Plugins@2x.png" alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">Advanced</h5>
                        <p className="card-text">Advanced knowledge for Front-end</p>
                        <Link href="#" className="btn btn-primary" to='/myskills/advance'>Continue</Link>
                    </div>    
                </div>
            </div>
        </div>
    )
}

export default MySkills;