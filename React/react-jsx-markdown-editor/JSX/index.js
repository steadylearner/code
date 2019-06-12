import React from "react"; // https://medium.com/capital-one-developers/how-to-work-with-forms-inputs-and-events-in-react-c337171b923b
import { Link } from "react-router-dom";

import MetaTags from 'react-meta-tags';

import ConverterCSS from "../CSS";

import { setTitle } from "../../API/Functions";
export default class JSX extends React.Component { // HOC or render prop pattern later to extract for focus and screenIntoView
	constructor(props) {
		super(props);
		this.state = {
			input: "/* Type jsx here. */ For example, <h1 class=\"I want to learn React\"> I write jsx code.</h1> ",
			output: "/* Result */ ➡ \"use strict\" and more",
			err: "",
		};
	}

	componentDidMount() {
		setTitle("Steadylearner JSX Editor");
	}

	update = (e) => { // When you use controlled component -> handleChange part, don't use e.preventDefault and with handle submit part use e.preventDefault();
		// e.preventDefault();
		const code = e.target.value;
		try {
			this.setState({
				output: window.Babel // Window - DOM handles code -> defaultValue and uncontrolled component pattern
					.transform(code, { presets: ["es2015", "react"] })
					.code,
				err: "",
			});
		} catch (err) {
			console.log(err);
			this.setState({ err: err.message });
		}
	}

	render() {
		return (
			<>
				<MetaTags>
					<meta name="description" content="React JSX Editor" />
					<meta name="thumbnail" content={`https://www.steadylearner.com/static/images/page/jsx.png`} />
					<meta name="keywords" content="React, JSX Editor, React JSX Editor, Steadylearner, steadylearner, www.steadylearner, steadylearner blog, Steadylearner blog" />
					
					<meta property="og:locale" content="en_US" />
					<meta property="og:type" content="website" />
					<meta property="og:site_name" content="Steadylearner" />
					<meta property="og:url" content="https://steadylearner.com/jsx" />
					<meta property="og:title" content={`React JSX Editor by www.steadylearner.com`} />
					<meta property="og:description" content={`React JSX Editor by Steadylearner - www.steadylearner.com`} />
					<meta property="og:image" content={`https://www.steadylearner.com/static/images/page/jsx.png`} />

					<meta name="twitter:card" content="summary" />
					<meta name="twitter:site" content="@steadylearner_p" />
					<meta name="twitter:creator" content="www.steadylearner.com" />
					<meta name="twitter:title" content={`React JSX Editor by www.steadylearner.com`} />
					<meta name="twitter:description" content={`React JSX Editor by Steadylearner - www.steadylearner.com`} />
					<meta name="twitter:image" content={`https://www.steadylearner.com/static/images/page/jsx.png`} />
					{/* <meta id="jsx-description" name="description" content="React JSX Editor" />
					<meta id="jsx-keywords" name="keywords" content="React, JSX Editor, React JSX Editor, Steadylearner, steadylearner, www.steadylearner, steadylearner blog, Steadylearner blog" />
					
					<meta id="jsx-og-url" property="og:url" content="https://steadylearner.com/jsx" />
					<meta id={`jsx-og-title`} property="og:title" content={`React JSX Editor by www.steadylearner.com`} />
					<meta id={`jsx-og-description`} property="og:description" content={`React JSX Editor by Steadylearner - www.steadylearner.com`} />
					<meta id={`jsx-og-image`} property="og:image" content={`https://www.steadylearner.com/static/images/page/jsx.png`} />

					<meta id={`jsx-twitter-title`} name="twitter:title" content={`React JSX Editor by www.steadylearner.com`} />
					<meta id={`jsx-twitter-description`} name="twitter:description" content={`React JSX Editor by Steadylearner - www.steadylearner.com`} />
					<meta id={`JSX-twitter-image`} name="twitter:image" content={`https://www.steadylearner.com/static/images/page/jsx.png`} /> */}
				</MetaTags>
				<ConverterCSS converter="jsx">
					<section
						className="
							converter-header
							width-percent
							max-width
						"
					>
					<Link exact to="/markdown">
						<i style={{ color: "#6786fb", }}
							title="This is link to markdown converter page"
							className="fab fa-react react no-text-decoration hover x-outline" >
						</i>
					</Link>
					{" "}
					<span className="white padding-right-four"> React JSX Converter {" "}</span>
					{" "}
					</section>
					<section className="converter-container">   {/* defaultValeu does value and placeholder role at first render */}
						<textarea jsx className="converter-input" defaultValue={this.state.input} onChange={this.update} />  {/* Use default value here because dom handles data */}
						<pre className="converter-preview x-margin">
							{this.state.output}
						</pre>
					</section>
				</ConverterCSS>
			</>
		)
	}
}

// https://reactjs.org/docs/uncontrolled-components.html -> you have to use manipulation of DOM for eraser and show example here if you want

// 1. Define elements in render() using values from state.

// 2. Capture changes of a form element using onChange() as they happen.

// 3. Update the internal state in event handler.

// 4. New values are saved in state and then the view is updated by a new render()