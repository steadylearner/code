import React, { Component } from "react";
import PropTypes from "prop-types";

export default class YouTubeButton extends Component {
	constructor(props) {
		super(props);
		this.youtubeShareNode = React.createRef();
	}

	state = {
		initialized: false,
	}

	// NPM for this module

	static propTypes = {
		// channelName: PropTypes.string,
		channelid: PropTypes.string.isRequired,
		channelTitle: PropTypes.string,
		layout: PropTypes.string,
		theme: PropTypes.string,
		count: PropTypes.string,
	};

	static defaultProps = {
		// channelName: "", YouTube API don't care about channelName
		channelid: "UCt_jsJOe91EVjd58kHpgTfw",
		channelTitle: "Steadylearner",
		layout: "full",
		theme: "default",
		count: "default",
	};

	initialized() {
		this.setState({
			initialized: true,
		});
	}

	componentDidMount() {
		if (this.state.initialized) {
			return;
		}

		const rust = import("./web/javascript_and_web");

		rust.then(({ create_stuff }) => {
                // rust.then((fn) => {
	        // fn.create_stuff();
                   create_stuff();
		}).then(() => {
			const youtubescript = document.getElementById("youtube-subscribe");
			this.youtubeShareNode.current.parentNode.appendChild(youtubescript);
			this.initialized();
		}).catch((e) => {
			console.error("failed to read wasm file and use javascript instead", e);
			const youtubescript = document.createElement("script");
			youtubescript.src = "https://apis.google.com/js/platform.js";
			this.youtubeShareNode.current.parentNode.appendChild(youtubescript);
			this.initialized();
		});
	}

	shouldComponentUpdate(nextProps, nextState) {
		// if (this.props.channelName === nextProps.channelName) {
		// 	return false;
		// }

		if (this.props.channelid === nextProps.channelid) {
			return false;
		}

		return true;
	}

	render() {
		const {
			channelid,
			channelTitle = "Stadylearner",
			layout,
			theme,
			count,
		} = this.props;
		return (
			<>
				{layout === "default" && <a
					className="no-text-decoration underline-hover"
					href={`https://www.youtube.com/channel/${channelid}`}
					alt={`Link to ${channelTitle} YouTube Channel`}
					title={`Link to ${channelTitle} YouTube Channel`}
					target="_blank"
					rel="noopener noreferrer"
				>
					<span className="video-content__channel-title black cursor-pointer">
						{channelTitle}
					</span>
				</a>}
				<div
					ref={this.youtubeShareNode}
					data-theme={theme}
					data-layout={layout}
					data-count={count}
					data-channelid={channelid}
					className="g-ytsubscribe left-auto"
					// data-channel={channelName}
				/>
			</>
		);
	}
}
