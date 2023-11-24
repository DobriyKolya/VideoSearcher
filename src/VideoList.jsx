import React from 'react';
import './VideoList.css';
import VideoItem from './VideoItem';

const VideoList = ({ videos }) => {
  return (
    <div className="video-list-container">
      <h2>Результаты поиска</h2>
      <ul>
        {videos.map((video, index) => (
          <VideoItem key={video.id} video={video} index={index} />
        ))}
      </ul>
    </div>
  );
};

export default VideoList;