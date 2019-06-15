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
		setTitle("Steadylearner")
	}

	render() {

		return (
			<>
				<MetaTags>
					<title>Steadylearner Homepage</title>
					<meta name="description" content="Welcome to Steadylearner. It is built with Rust, JavaScript and Python" />
					<meta name="thumbnail" content="https://avatars0.githubusercontent.com/u/32325099?s=460&v=4" />
					
					{/*  */}

					<meta property="og:title" content="Steadylearner Homepage" />
					<meta property="og:description" content="Welcome to Steadylearner. It is built with Rust, JavaScript and Python" />
					<meta property="og:image" content="https://avatars0.githubusercontent.com/u/32325099?s=460&v=4" />

					<meta property="og:locale" content="en_US" />
					<meta property="og:type" content="website" />
					<meta property="og:site_name" content="Steadylearner" />
					<meta property="og:url" content="https://steadylearner.com/" />
					
					{/*  */}

					<meta name="twitter:title" content="Steadylearner Homepage" />
					<meta name="twitter:description" content="Welcome to Steadylearner. It is built with Rust, JavaScript and Python" />
					<meta name="twitter:image" content="https://avatars0.githubusercontent.com/u/32325099?s=460&v=4" />
					
					<meta name="twitter:card" content="summary" />
					<meta name="twitter:site" content="@steadylearner_p" />
					<meta name="twitter:creator" content="www.steadylearner.com" />

					{/*  */}

					<meta name="keywords" content="Steadylearner homepage, Steadylearner, steadylearner, www.steadylearner, steadylearner blog, steadylearner website" />
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
										<Typist.Delay ms={2500} />
										Welcome
									</span>
								</h1>
							</Typist>
							<span className="home-image-wrapper">
								<StyledLink to="/about" >
									<span
										className="
											hover
											cursor-pointer
											white
											font-four
											bold
										"
										title="link to steadylearner about page"
									>
										©
									</span>
								</StyledLink>
							</span>
						</span>
					</section>
				</HomeCSS>
			</>
		);
	}
}


