import React from 'react';
import { user } from '../store/actions/users/Users';

const AppSideBar = () => {
    return (
        <div className="sidebar">
            <center>
                <img src={ user.url } className="profile_image" alt="img" />
                <h3>{ user.name }</h3>
            </center>
            <p><i className="fas fa-house-user"></i><span>Home</span></p>
            <p><i className="fas fa-user-circle"></i><span>Profile</span></p>
            <p><i className="fas fa-envelope"></i><span>Messages</span></p>
            <p><i className="fas fa-bell"></i><span>Notifications</span></p>
        </div>
    )
}

export default AppSideBar;
