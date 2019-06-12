import React from "react";

const YouTubeHeart = () => { // should use steadylearner channelId instead and controllable also
    return (<span className="social-heart heart hover">
        <a
            className="fa fa-youtube heart--youtube width-percent height-percent cursor-pointer no-text-decoration x-outline"
            href="https://www.youtube.com/channel/UCgDSoN04fuQfiMDPvlOHszQ"
            alt="external link to steadylearner youtube channel"
            title="external link to steadylearner youtube channel"
            target="_blank"
            rel="noopener noreferrer"
        />
    </span>);
};

const YouTubeHeartWithData = (channelId) => (channelTitle) => {
    return (<a
        href={`https://www.youtube.com/channel/${channelId}`}
        alt={`Link to ${channelTitle} YouTube Channel`}
        title={`Link to ${channelTitle} YouTube Channel`}
        target="_blank"
        rel="noopener noreferrer"
        className="heart x-outline hover-more-opacity transition"
    >
        <i className="fa fa-youtube heart--youtube" />
    </a>);
};

const YouTubeHeartImage = ({ channelId = "UCt_jsJOe91EVjd58kHpgTfw", channelTitle = "Steadylearner"}) => {
    return <a
        className="x-outline hover-more-opacity transition"
        href={`https://www.youtube.com/channel/${channelId}`}
        alt={`Link to ${channelTitle} YouTube Channel`}
        title={`Link to ${channelTitle} YouTube Channel`}
        target="_blank"
        rel="noopener noreferrer"
    >
        <img
            className="YouTube-heart-image"
            src="/static/images/brand/YouTube_heart_transparent_by_www.steadylearner.com.png"
            // alt="Steadylearner_YouTube.png"
            // alt="YouTube_Heart_by_steadylearner.png"
            title="YouTube_heart_transparnet_by_Steadylearner"
        />
    </a>
};

export default YouTubeHeart;

export {
    YouTubeHeartWithData,
    YouTubeHeartImage,
}
