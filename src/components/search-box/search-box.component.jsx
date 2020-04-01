import React from 'react';

//Import files
import './search-box.styles.css';

export const SearchBox = ({placeHolder, handleChange}) => ( 
    <input
        className='search'
        type='search' 
        placeholder={placeHolder} 
        onChange={handleChange} 
    />     
);
