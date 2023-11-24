import React from 'react';
import VideoItem from './VideoItem';
import './VideoList.css';

function VideoList({ videos }) {
  return (
    <ul className="video-list">
      {videos.map((video) => (
        <VideoItem key={video.id} video={video} />
      ))}
    </ul>
  );
}

export default VideoList;
