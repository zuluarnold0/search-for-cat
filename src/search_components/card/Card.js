import React from 'react';
import "./Card.css";

const Card = ({ user }) => {
    return (
        <div className="card">
            <div className="card-image">
                <img src={ user.url } alt="img" />
            </div>
            <div className="card-text">
                <h2>{ user.name }</h2>
                <span className="date">
                    { user.age } years old
                </span>
                <p>{ user.info }</p>
            </div>
            <div className="card-stats">
                <div className="stat">
                    <div className="value">{ user.views }</div>
                    <div className="type">views</div>
                </div>
                <div className="stat border">
                    <div className="value">{ user.likes }</div>
                    <div className="type">likes</div>
                </div>
                <div className="stat">
                    <div className="value">{ user.friends }</div>
                    <div className="type">friends</div>
                </div>
            </div>
        </div>
    )
}

export default Card;
