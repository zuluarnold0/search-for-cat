import React from 'react';
import Card from '../card/Card';
import "./ScrollBar.css";

const ScrollBar = ({ users }) => {
    const mapped = users.map((user, i) => {
        return <Card key={i} user={user}/>
    })
    return (
        <div className="userlist">
            {
                mapped.length ? 
                    mapped
                    :
                    <h3 className="no_matches">No Matches Found!</h3> 
            }
        </div>
    )
}

export default ScrollBar;
