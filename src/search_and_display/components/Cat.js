import React from 'react';

const Cat = ({ cat }) => {
    return (
        <div className="cat">
            <img src={`https://robohash.org/${cat.id}?size=200x200&set=set4`} alt="img" />
            <div className="cat-profile">
                <h3>{ cat.name }</h3>
            </div>
        </div>
    )
}

export default Cat;
