import React from 'react';
import './BasicSkill.css';

import Navbar from '../../components/Navbar/Navbar';
import {Link} from 'react-router-dom';

const BasicSkill = () => {
    return (
        <div className='BasicSkill'>
            <Navbar />
            <Link className='text-warning link' to='/myskills'>&#8592;Back</Link>
            <div className='BasicSkill-content'>
                <div className='element el-1 rounded-circle'>HTML</div>
                <div className='element el-2 rounded-circle'>CSS</div>
                <div className='element el-3 rounded-circle'>JavaScript</div>
                <div className='element el-1 rounded-circle'>Flexbox</div>
                <div className='element el-2 rounded-circle'>Responsive Design and Media Queries</div>
                <div className='element el-3 rounded-circle'>CSS Grid</div>
                <div className='element el-1 rounded-circle'>DOM Manipulation</div>
                <div className='element el-2 rounded-circle'>Fetch API / Ajax (fetch, axios, ...)</div>
                <div className='element el-3 rounded-circle'>ES6+</div>
                <div className='element el-1 rounded-circle'>Advanced JavaScript Concept</div>
                <div className='element el-2 rounded-circle'>Using Git and Github</div>
                <div className='element el-3 rounded-circle'>npm and yarn package mamagers</div>
                <div className='element el-1 rounded-circle'>BEM CSS Architecture</div>
                <div className='element el-2 rounded-circle'>Sass CSS Pre-Processor</div>
                <div className='element el-3 rounded-circle'>Task Runners (gulp)</div>
            </div>
        </div>
    )
}

export default BasicSkill;