import React from 'react';

const SearchBar = ({ onSearchChange }) => {
    return (
        <div className="searchBar">
            <input 
                type="search"
                onChange={onSearchChange}
                placeholder="seach here..."
            />
        </div>
    )
}

export default SearchBar;
