import React from 'react';

const AppHeader = () => {
    return (
        <div>
            <header>
                <label htmlFor="check">
                    <i className="fas fa-bars" id="sidebar_btn"></i>
                </label>
                <div className="left_area">
                    <h3>Search <span>App</span></h3>
                </div>
                <div className="right_area">
                    <div className="logout_btn">Log Out</div>
                </div>
            </header>
        </div>
    )
}

export default AppHeader;
