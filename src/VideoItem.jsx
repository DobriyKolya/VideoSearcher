import React from 'react';
import './VideoItem.css';

const VideoItem = ({ video, index }) => {
  return (
    <li className="video-item">
      <p className='title'>{index + 1}. {video.title}</p>
      <p>Канал: {video.channel}</p>
      <p>Дата: {video.date}</p>
    </li>
  );
};

export default VideoItem;