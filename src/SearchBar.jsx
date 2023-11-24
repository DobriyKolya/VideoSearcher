import React, { useState } from 'react';
import './SearchBar.css';
import Autocomplete from './Autocomplete';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (value) => {
    setQuery(value);
  };

  const handleSelect = (selectedValue) => {
    setQuery(selectedValue);
  };

  const handleSearch = () => {
    onSearch(query);
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      handleSearch();
    }
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
        />
        <button onClick={handleSearch}>Поиск</button>
      </div>
    </div>
  );
};

export default SearchBar;