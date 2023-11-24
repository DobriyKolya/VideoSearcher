
import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import './App.css';

const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState('');

  const fetchData = async (query) => {
    try {
      setLoading(true);
      const response = await fetch(`https://gruninhost.bsite.net/api/videos?search=${encodeURIComponent(query)}`);
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error('Ошибка при запросе к серверу:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (query) => {
    setQuery(query);
    fetchData(query);
  };

  useEffect(() => {

  }, []);

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <div className="loading-message">
        {loading && <p>Загрузка...</p>}
        {query && !loading && (!data || data.length === 0) && <p>Видео не найдено</p>}
        {data && data.length > 0 && <VideoList videos={data} />}
      </div>
    </div>
  );
};

export default App;

  // new Array(100).fill(null).map((_,i)=>({
  //  "id": i,
  // "title": "qweqwewqqqqqqqqqqqqe asdsa qweqweqwewqeqwrewr qweqweqwewqeqwrewr qw ewrwerwqerwr",
  //  "thumbnail": "string",
  //  "chanelName": "string",
  //  "issueDate": "2023-11-24T18:10:34.026Z"
  // }))
  
