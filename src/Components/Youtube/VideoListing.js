import React from 'react';
import YouTube from 'react-youtube';
import { useParams } from 'react-router-dom';

const VideoListing = () => {
  const { id } = useParams();
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 1,
    },
  };

  function _onReady(event) {
    event.target.pauseVideo();
  }

  return <YouTube videoId={id} opts={opts} onReady={_onReady} />;
}

export default VideoListing;
