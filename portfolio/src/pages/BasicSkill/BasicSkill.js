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
                <div className='element el-1'>HTML</div>
                <div className='element el-2'>CSS</div>
                <div className='element el-3'>JavaScript</div>
                <div className='element el-1'>Flexbox</div>
                <div className='element el-2'>Responsive Design and Media Queries</div>
                <div className='element el-3'>CSS Grid</div>
                <div className='element el-1'>DOM Manipulation</div>
                <div className='element el-2'>Fetch API / Ajax (fetch, axios, ...)</div>
                <div className='element el-3'>ES6+</div>
                <div className='element el-1'>Advanced JavaScript Concept</div>
                <div className='element el-2'>Using Git and Github</div>
                <div className='element el-3'>npm and yarn package mamagers</div>
                <div className='element el-1'>BEM CSS Architecture</div>
                <div className='element el-2'>Sass CSS Pre-Processor</div>
                <div className='element el-3'>Task Runners (gulp)</div>
            </div>
        </div>
    )
}

export default BasicSkill;