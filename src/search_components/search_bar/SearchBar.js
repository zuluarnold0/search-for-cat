import React from 'react';
import "./SearchBar.css"

const SearchBar = ({ handleInputChange }) => {
    return (
        <div className='search-box'>
            <input
                className='search-txt'
                type='text'
                name='searchField'
                placeholder='Type name to search'
                onChange={handleInputChange}
            />
        </div>
    )
}

export default SearchBar;

