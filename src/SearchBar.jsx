// SearchBar.jsx
import React, { useState } from 'react';
import Autocomplete from './Autocomplete';
import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (value) => {
    setQuery(value);
  };

  const handleSelect = (selectedValue) => {
    setQuery(selectedValue);
  };

  const handleSearch = (e) => {
    onSearch(query);
  };

  const handleEnterPress = () => {

    onSearch(query);
  };

  return (
    <div className="search-bar-container">
      <h1 className="search-title">Video search</h1>
      <p className="team-name">by TEAM №7</p>
      <div className="searcher">
        <Autocomplete
          onSelect={handleSelect}
          onInputChange={handleInputChange}
          inputValue={query}
          onEnterPress={handleEnterPress}
        />
        {/* <button className="search-button" onClick={handleSearch}>Поиск</button> */}
      </div>
    </div>
  );
};

export default SearchBar;
