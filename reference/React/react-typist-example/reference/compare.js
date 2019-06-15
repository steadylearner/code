import React from "react";
import MetaTags from "react-meta-tags";

import StyledLink from "../Reusable/StyledLink";

import HomeCSS from "./CSS";

export default class HomePage extends React.Component {

	render() {

		return (
			<>
				<MetaTags>
					<title>Steadylearner Home</title>
					<meta name="description" content="Welcome to Steadylearner. It is built with Rust, JavaScript and Python" />
					<meta name="thumbnail" content="https://avatars0.githubusercontent.com/u/32325099?s=460&v=4" />

					{/*  */}

					<meta property="og:title" content="Steadylearner Home" />
					<meta property="og:description" content="Welcome to Steadylearner. It is built with Rust, JavaScript and Python" />
					<meta property="og:image" content="https://avatars0.githubusercontent.com/u/32325099?s=460&v=4" />

					<meta property="og:locale" content="en_US" />
					<meta property="og:type" content="website" />
					<meta property="og:site_name" content="Steadylearner" />
					<meta property="og:url" content="https://steadylearner.com/" />

					{/*  */}

					<meta name="twitter:title" content="Steadylearner Home" />
					<meta name="twitter:description" content="Welcome to Steadylearner. It is built with Rust, JavaScript and Python" />
					<meta name="twitter:image" content="https://avatars0.githubusercontent.com/u/32325099?s=460&v=4" />

					<meta name="twitter:card" content="summary" />
					<meta name="twitter:site" content="@steadylearner_p" />
					<meta name="twitter:creator" content="www.steadylearner.com" />

					{/*  */}

					<meta name="keywords" content="Steadylearner Home, Steadylearner, steadylearner, www.steadylearner, steadylearner blog, steadylearner website" />
				</MetaTags>
				<HomeCSS>
						<section
							className="
								height-main
								width-percent
								max-width
								theme-black
								flex
								center
								center-auto
								width-percent
							"
							title="Link to Steadylearner About Page"
						>
							<StyledLink to="/about" >
								<span class="font-main bold white hover transition-half">
									©ode
								</span>
							</StyledLink>
						</section>
						{/* <section
							className="
								home-first
								width-percent
								height-vh max-width
								background-cover
							"
							title="Link to Steadylearner About Page"
						>
						</section> */}
				</HomeCSS>
			</>
		);
	}
}


