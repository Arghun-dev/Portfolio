import React from 'react';
import './AdvancedSkill.css';
import Navbar from '../../components/Navbar/Navbar';
import {Link} from 'react-router-dom';

const AdvancedSkill = () => {
    return (
        <div className='AdvanceSkill'>
        <Navbar />
            <Link className='text-warning link' to='/myskills'>&#8592;Back</Link>
            <div className='BasicSkill-content'>
                <div className='element el-1'>React</div>
                <div className='element el-2'>Redux</div>
                <div className='element el-3'>Context API</div>
                <div className='element el-1'>Styled Component</div>
                <div className='element el-2'>Bootstrap</div>
                <div className='element el-3'>Server Side Rendering (Next.js)</div>
                <div className='element el-1'>React Hooks</div>
                <div className='element el-2'>React Router</div>
                <div className='element el-3'>Animations in CSS</div>
                <div className='element el-1'>HOC pattern in React</div>
                <div className='element el-2'>Material UI</div>
                <div className='element el-3'>Semantic UI</div>
                <div className='element el-1'>Stripe</div>
                <div className='element el-2'>Firebase</div>
                <div className='element el-3'>jQuery</div>
            </div>
        </div>
    )
}

export default AdvancedSkill;