import React from "react";
// VideoBackground component for the homepage
const VideoBackground = () => {
    return (
        <div className="video-intro inline-block">
        <video
        className="top-0 left-0 w-[100vw] md:h-[93vh] md:object-cover phone:object-fit z-[-1]"
        autoPlay
        loop
        muted
        src="/videos/bg1.mp4"
      ></video></div>
    )
}

export default VideoBackground;