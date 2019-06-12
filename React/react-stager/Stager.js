import React, { Component } from "react";
import PropTypes from "prop-types";

import { StaggeredMotion, spring, presets } from "react-motion";

export default class Stager extends Component { // use same logic for videoList -> Use them together
	constructor(props) {
		super(props);
		this.state = { x: 250, y: 300 };
	}

	static propTypes = {
		list: PropTypes.arrayOf(PropTypes.object).isRequired,
	};

	// shouldComponentUpdate(nextProps, nextState, nextContext) {
	// 	if (nextProps.videoRandomAndNormalList.length !== this.props.videoRandomAndNormalList.length) {
	// 		return false;
	// 	}

	// 	return true;
	// }

	componentDidMount() {
		window.addEventListener("mousemove", this.handleMouseMove);
		window.addEventListener("touchmove", this.handleTouchMove);
	}

	handleMouseMove = ({ pageX: x, pageY: y }) => {
		this.setState({ x, y });
	};

	handleTouchMove = ({ touches }) => {
		this.handleMouseMove(touches[0]);
	};

	getStyles = (prevStyles) => {
		// `prevStyles` is the interpolated value of the last
		const endValue = prevStyles.map((_, i) => (i === 0
			? this.state
			: {
				x: spring(prevStyles[i - 1].x, presets.gentle),
				y: spring(prevStyles[i - 1].y, presets.gentle),
			}));
		return endValue;
	};

	render() {
		const { list } = this.props;

		return (
			<StaggeredMotion
				defaultStyles={list.map(() => ({ x: 0, y: 0 }))}
				styles={this.getStyles}>
				{
					videosInList => <span className="stager-wrapper">
						{
							videosInList.map(({ x, y }, i) => (x < window.innerWidth - 250 && y < window.innerHeight - 250)
								&& (
									<span
										key={list[i].thumbnail}
										className={"stager"}
										style={{
											WebkitTransform: `translate3d(${x - 25}px, ${y - 25}px, 0)`,
											transform: `translate3d(${x - 25}px, ${y - 25}px, 0)`,
											zIndex: videosInList.length - i,
											backgroundImage: `url(${list[i].thumbnail})`,
										}}
									/>
								)
							)
						}
					</span>
				}
			</StaggeredMotion>
		);
	}
}
