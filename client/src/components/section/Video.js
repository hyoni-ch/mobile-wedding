import React from "react";
import ReactPlayer from "react-player";
import couple_video from "../../assets/videos/couple_video.MP4";
import { VideoBox } from "../styles";

export default function Video() {
  return (
    <VideoBox>
      <ReactPlayer
        url={couple_video}
        muted={true}
        playing={true}
        controls={false}
        height={`${window.innerHeight}px`}
        width={`${window.innerWidth}px`}
      />
    </VideoBox>
  );
}
