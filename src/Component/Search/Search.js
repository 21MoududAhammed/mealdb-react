import React, { useState } from 'react';
import './Search.css'

const Search = () => {
    return (
        <div className='search-field'>
            <input type="text"  placeholder='Search by name---' />
            <button>Click Here</button>
        </div>
    );
};

export default Search;