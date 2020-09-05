import React from 'react';
import Cat from './Cat';

const CatList = ({ cats }) => {

    const catsArray = cats.map(cat => {
        return <Cat key={cat.id} cat={cat} />
    })

    return (
        <div className="cat-array">
            { catsArray }
        </div>
    )
}

export default CatList;
