

import React, { useState } from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import './App.css';

const App = () => {
  const [searchResults, setSearchResults] = useState([]);
  // new Array(100).fill(null).map((_,i)=>({
  //  "id": i,
  // "title": "qweqwewqqqqqqqqqqqqe asdsa qweqweqwewqeqwrewr qweqweqwewqeqwrewr qw ewrwerwqerwr",
  //  "thumbnail": "string",
  //  "chanelName": "string",
  //  "issueDate": "2023-11-24T18:10:34.026Z"
  // }))

  const handleSearch = async (query) => {
    try {
      const response = await fetch(`https://gruninhost.bsite.net/api/videos?search=${encodeURIComponent(query)}`);
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
