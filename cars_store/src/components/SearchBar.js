// src/components/SearchBar.jsx
import React from 'react';

const SearchBar = ({  value, onChange ,onSearch}) => {

    return (
        <div className='search-bar'>    
    <input
      type="text"
      placeholder={ 'Search...'}
      value={value}
      onChange={onChange}
        onKeyDown={(e) => {
            if (e.key === 'Enter') {
            onSearch();
            }
        }}
      style={{
        padding: '8px',
        width: '300px',
        fontSize: '16px',
        marginBottom: '20px',
        borderRadius: '4px',
        border: '1px solid #ccc'
      }}

    />
        </div>
  );
  
};

export default SearchBar;
