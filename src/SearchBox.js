import React from 'react';

const SearchBox = ({ onSearch }) => {
    return (
        <div className='pa2'>
            <input
                type='search'
                placeholder='Search'
                onChange={onSearch}
            />
        </div>
    );
}

export default SearchBox;
