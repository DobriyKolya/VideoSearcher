import React from 'react';
import VideoItem from './VideoItem';
import './VideoList.css';

const VideoList = ({ videos }) => {
  return (
    <div className="video-list-container">
      <h2>Результаты поиска</h2>
      <ul>
        {videos.map((video) => (
          <VideoItem key={video.id} video={video} />
        ))}
      </ul>
    </div>
  );
};

export default VideoList;
