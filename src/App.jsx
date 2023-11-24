
import React, { useState } from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';

const App = () => {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (query) => {
    try {
      const response = await fetch(`http://localhost:5173/search?q=${query}`);
      const data = await response.json();
      setSearchResults(data);
    } catch (error) {
      console.error('Ошибка при запросе к серверу:', error);
    }
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <VideoList videos={searchResults} />
    </div>
  );
};

export default App;
