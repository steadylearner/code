import React, { Component } from "react";

class ScrollToTop extends Component {

	scrollToTop(e) {
		e.preventDefault();
		document.body.scrollTop = 0; // For Safari
		document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
	}

	scrollEvent() {
		// If you need wrtie more conditions to remove it when it reach bottom. 
		if (document.body.scrollTop > 280 || document.documentElement.scrollTop > 280) {
			document.querySelector(".scroll-top").style.display = "block";
		} else {
			document.querySelector(".scroll-top").style.display = "none";
		}
	}

	componentDidMount = () => {
		window.onscroll = this.scrollEvent;
	}

	componentWillUnmount() {
		window.removeEventListener("scroll", this.scrollEvent);
	}

	render() {

		return (
            <span
                className="scroll-top margin-for-sub-navbar black"
                onClick={this.scrollToTop}
                title="
                    This will send you to the top of this page.
                    You can either use [Home] or [Page Up] buttons on keyboard instead also.
                "
            >
                <span className="disappear-at-mobile">Top</span> {" "}
                <i className="fas fa-arrow-circle-up" />
            </span>
		);
	}
}

export default ScrollToTop;