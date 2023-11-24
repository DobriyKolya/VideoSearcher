import React from 'react';
import './VideoItem.css';

const VideoItem = ({ video }) => {
  return (
    <li className="video-item">
      <p>{video.title}</p>
      <p>Канал: {video.channel}</p>
      <p>Дата: {video.date}</p>
    </li>
  );
};

export default VideoItem;
