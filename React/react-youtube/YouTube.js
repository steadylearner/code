import React from "react";
import YouTubePlayer from "react-youtube";

const YouTube = ({videoId = "", repeat = false}) => {
    const opts = {
        width: "100%",
        // height: "100%",
        playerVars: {
            autoplay: 0,
            frameborder: 0,
            allowfullscreen: 1,
            encrypted: 1,
            loop: repeat ? 1 : 0,
            playlist: repeat ? videoId : true,
            rel: 0, // not to show relevant videos
        },
    };

    return (<YouTubePlayer
        videoId={videoId}
        opts={opts}
        containerClassName="vlog-ytb" // nothing speical just use think it as className
    />)
};

export default YouTube;

// width: "100%",
// height: "100%",
// playerVars: {
//     // https://developers.google.com/youtube/player_parameters should be inside here
//     autoplay: autoplay ? 1 : 0,
//     frameborder: 0,
//     allowfullscreen: 1,
//     encrypted: 1,
//     loop: videoRepeat ? 1 : 0,
//     playlist: videoRepeat ? videos[0]?.id.videoId : true,
//     rel: 0,
//     // color: "white"