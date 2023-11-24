import React from 'react';
import './VideoItem.css';

function VideoItem({ video }) {
  return (
    <li className="video-item">
      <img src={video.thumbnail} alt={video.title} />
      <p>{video.title}</p>
    </li>
  );
}

export default VideoItem;
