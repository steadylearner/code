import React from "react";
import Typist from "react-typist";
import MetaTags from "react-meta-tags";

import StyledLink from "../Reusable/StyledLink";

import HomeCSS from "./CSS";

import { setTitle } from "../API/Functions";

// https://medium.freecodecamp.org/beginners-guide-to-react-router-4-8959ceb3ad58,
// Don't use state inside class but use path as a state

export default class HomePage extends React.Component {

	componentDidMount() {
		setTitle("Welcome to Steadylearner! I am a Rust, Python and JavaScript Developer.")
	}

	render() {

		return (
			<>
				<MetaTags>
					<meta name="description" content="Welcome to Steadylearner Website. I am a Rust, JavaScript and Python Developer" />
					<meta name="thumbnail" content="https://www.steadylearner.com/static/images/brand/prop-passer_original.png" />
					<meta name="keywords" content="Steadylearner homepage Steadylearner, steadylearner, www.steadylearner, steadylearner blog, Steadylearner blog" />
					
					<meta property="og:locale" content="en_US" />
					<meta property="og:type" content="website" />
					<meta property="og:site_name" content="Steadylearner" />
					<meta property="og:url" content="https://steadylearner.com/" />
					<meta property="og:title" content="Steadylearner Temporary Homepage with React-Typist" />
					<meta property="og:description" content="This is www.steadylearner.com Homepage. The site is made with React, Rust and Python" />
					<meta property="og:image" content="https://www.steadylearner.com/static/images/page/homepage_placeholder.jpeg" />
					
					<meta name="twitter:card" content="summary" />
					<meta name="twitter:site" content="@steadylearner_p" />
					<meta name="twitter:creator" content="www.steadylearner.com" />
					<meta name="twitter:description" content="Steadylearner Homepage, It is site to share images, posts, codes and videos by Steadylearner" />
					<meta name="twitter:title" content="Steadylearner Website Homepage" />
					<meta name="twitter:image" content="https://www.steadylearner.com/static/images/page/homepage_placeholder.jpeg" />
					{/* <meta id="home-description" name="description" content="Welcome to Steadylearner Website. I am a Rust, JavaScript and Python Developer" />
					<meta id="home-keywords" name="keywords" content="Steadylearner homepage Steadylearner, steadylearner, www.steadylearner, steadylearner blog, Steadylearner blog" />

					<meta id="home-og:url" property="og:url" content="https://steadylearner.com/" />
					<meta id="home-og:title" property="og:title" content="Steadylearner Temporary Homepage with React-Typist" />
					<meta id="home-og:description" property="og:description" content="This is www.steadylearner.com Homepage. The site is made with React, Rust and Python" />
					<meta id="home-og:image" property="og:image" content="https://www.steadylearner.com/static/images/page/homepage_placeholder.jpeg" />

					<meta id="home-twitter:description" name="twitter:description" content="Steadylearner Homepage, It is site to share images, posts, codes and videos by Steadylearner" />
					<meta id="home-twitter:title" name="twitter:title" content="Steadylearner Website Homepage" />
					<meta id="home-twitter:image" name="twitter:image" content="https://www.steadylearner.com/static/images/page/homepage_placeholder.jpeg" /> */}
				</MetaTags>
				<HomeCSS>
					<section
						className="
							home-first
							width-percent
							height-vh max-width
							background-cover
						"
					>
						<span
							className="
								white
								center-percent-absolute
								text-center
							"
						>
							<Typist cursor={{
								show: true,
								blink: false,
								element: '',
								hideWhenDone: true,
								hideWhenDoneDelay: 500,
							}}>
								<h1 className="home-title border-round">
									<span className="home-title__welcome white">
										{/* Delay to wait for image to upload  */}
										<Typist.Delay ms={2000} />
										I am a Rust
										<Typist.Delay ms={1000} />
										<Typist.Backspace count={15} delay={200} />
										Python and JavaScript
										<Typist.Delay ms={1000} />
										<Typist.Backspace count={25} delay={200} />
										Developer
										<Typist.Delay ms={1000} />
										<Typist.Backspace count={15} delay={200} />
										Welcome
									</span>
								</h1>
							</Typist>
							<span className="home-image-wrapper">
								<StyledLink to="/about" >
									<img
										className="
											home-image__brand
											border-round
											hover
											cursor-pointer
										"
										src="/static/images/brand/prop-passer_ls.png"
										title="link to steadylearner about page"
									/>
								</StyledLink>
							</span>
						</span>
					</section>
				</HomeCSS >
			</>
		);
	}
}


