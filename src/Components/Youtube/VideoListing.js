import YouTube from "react-youtube";
import React from "react";
import { useParams } from "react-router-dom";
import "./VideoListing.css"
import Submit from "./Submit";

export default function VideoListing() {
  const { id } = useParams();

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1,
    },
  };

  function _onReady(event) {
    event.target.pauseVideo();
  }

  return (
    <>
  
  <YouTube videoId={id} opts={opts} onReady={_onReady} />
  <Submit/>
  </>
  
  );
  
  
  
}
