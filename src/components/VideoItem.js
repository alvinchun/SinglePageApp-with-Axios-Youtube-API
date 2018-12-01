import React from "react";

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div
      onClick={() => {
        onVideoSelect(video); // when we pass down data from parents to child, we use props to send them. But when we send data from child to parent, we use this kind of form of callback function to send data back.
        // we are getting the video from here first and then send it back to function called onVideoSelect App.js
      }}
      // we are trying to call particular or specific video on VideoSelect
      className="video-item item"
    >
      <img
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
        alt="thumbnails"
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
