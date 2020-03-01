import React from 'react';
import {NavLink} from 'react-router-dom';

const ChangePage = () => {
    return (
        <nav aria-label="Page navigation example">
            <ul class="pagination">
                <li class="page-item"><NavLink activeStyle={{backgroundColor: '#ccc'}} class="page-link" to="/projects">1</NavLink></li>
                <li class="page-item"><NavLink activeStyle={{backgroundColor: '#ccc'}} class="page-link" to="/projects/projects2">2</NavLink></li>
                <li class="page-item"><NavLink activeStyle={{backgroundColor: '#ccc'}} class="page-link" to="/projects/projects3">3</NavLink></li>
            </ul>
        </nav>
    )
}

export default ChangePage;