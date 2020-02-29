import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import './Contact.css';

const Contact = () => {
    return (
        <div className='Contact'>
            <Navbar />
            <h1 className='text-light'>Contact</h1>
            <div className="row contact-row">
                <div className="col-4">
                    <div className="list-group" id="list-tab" role="tablist">
                    <a className="list-group-item list-group-item-action active" id="list-home-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home">Email</a>
                    <a className="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list" href="#list-profile" role="tab" aria-controls="profile">LinkedIn</a>
                    <a className="list-group-item list-group-item-action" id="list-messages-list" data-toggle="list" href="#list-messages" role="tab" aria-controls="messages">GitHub</a>
                    <a className="list-group-item list-group-item-action" id="list-settings-list" data-toggle="list" href="#list-settings" role="tab" aria-controls="settings">Phone</a>
                    </div>
                </div>
                <div className="col-8 text-light">
                    <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list"><h3>arghun.developer@gmail.com</h3></div>
                    <div className="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list"><a href='https://www.linkedin.com/in/arghun-mousanezhad-06575618a/' className='text-primary hvr-underline-from-center'><h3 className='aaa'>LinkedIn Profile</h3></a></div>
                    <div className="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list"><a href='https://github.com/Arghun-dev' className='text-primary hvr-underline-from-center'><h3 className='aaa'>Github Account</h3></a></div>
                    <div className="tab-pane fade" id="list-settings" role="tabpanel" aria-labelledby="list-settings-list"><h3>+989147141544</h3></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;