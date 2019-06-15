import React from "react";
// import { ReactMarkdownInput } from "react-easy-md";
// import { ReactMarkdownInput } from "../../react-easy-md";
import { MarkdownInput } from "react-easy-md";
import { Link } from "react-router-dom";
import MetaTags from "react-meta-tags";

// https://css-tricks.com/debouncing-throttling-explained-examples/
import { debounce } from "lodash/fp"; // Use it for fast input, wait for function execution before others stop for x seconds
// import { throttle } from "lodash"; // USe it for large input that given at once such as Redux store, limit function not to execute more than once for every x seconds, It would execute once at least. 

import ConverterCSS from "../CSS";
import MarkdownCSS from "../CSS/MarkdownCSS";

import MarkdownResult from "../../Side/MarkdownResult";
import exampleFromLatestPost from "./Example";

import { setTitle } from "../../API/Functions";

import { saveStateToLocalStorage, loadStateFromLocalStorage } from "../../../store/localStorage";

// React Controlled Component


export default class MarkdownPage extends React.Component { // Refer this page https://www.npmjs.com/package/react-marked-markdown
	constructor(props) {
		super(props);
		this.state = {
			value: "",
			copySuccess: "Copy",
		};
	}

	handleTextChange(e) {
		e.preventDefault();
		this.setState({ value: e.target.value, copySuccess: "Copy" })
		if (this.props.onTextChange) {
			this.props.onTextChange(e.target.value);
		}

		debounce(1000)(saveStateToLocalStorage("markdown", this.state.value));
		// debounce(1000)(saveStateToLocalStorage("markdown", e.target.value));
	}

	callDraftFromLocalStorage(e) {
		e.preventDefault();
		const lastDraft = loadStateFromLocalStorage("markdown");

		if (lastDraft !== undefined) {
			this.setState({ value: lastDraft, copySuccess: "Copy" });
		}
	}

	clear() {
		this.setState({ value: "" });
	}

	showExample() {
		this.setState({
			value: exampleFromLatestPost,
		});
	}

	copyToClipboardWithCode(value) {
		const textField = document.createElement("textarea");
		const brRegex = /<br\s*[\/]?>/gi;

		const leftHTMLrapperRegex = /&lt;/g;
		const rightHTMLWrapperRegex = /&gt;/g;

		// [1]
		textField.innerText = value;
		// [2]
		document.body.appendChild(textField);

		// console.log(textField.innerHTML.replace(brRegex, "\r\n"));

		// [3]

		textField.value = textField.innerHTML.replace(brRegex, "\r\n").replace(leftHTMLrapperRegex, "<").replace(rightHTMLWrapperRegex, ">");

		// [4]

		textField.select(); // select copies html value
		document.execCommand("copy");
		textField.remove();
		this.setState({
			copySuccess: "Copied",
		})
	}


	// copyToClipboard(value) {
	// 	const textField = document.createElement("textarea");
	// 	const brRegex = /<br\s*[\/]?>/gi;

	// 	// [1]
	// 	textField.innerText = value;
	// 	document.body.appendChild(textField);

	// 	// console.log(textField.innerHTML.replace(brRegex, "\r\n"));

	// 	textField.value = textField.innerHTML.replace(brRegex, "\r\n");

	// 	textField.select(); // select copies html value
	// 	document.execCommand("copy");
	// 	textField.remove();
	// 	this.setState({
	// 		copySuccess: "Copied",
	// 		// value: "",
	// 	})
	// }
	
	// simpleCopyToClipboard(value) {
	// 	const textField = document.createElement("textarea");
	// 	textField.innerText = value;
	// 	document.body.appendChild(textField);
		
	// 	console.log(textField);
		
	// 	textField.select();
	// 	document.execCommand("copy");
	// 	textField.remove();
	// 	this.setState({
	// 		copySuccess: "Copied",
	// 	})
	// }

	eventWithKeyDown = (e) => {
		if (this.state.value !== "" && e.keyCode === 82 && e.shiftKey) {
			e.preventDefault();
			this.copyToClipboard(this.state.value);
			this.clear();
		}
	}

	componentDidMount() {
		document.onkeydown = this.eventWithKeyDown;

		setTitle("Steadylearner Markdown Editor");
		// this.setState({
		// 	value: loadStateFromLocalStorage("markdown"),
		// });
	}

	componentWillUnmount() {
		document.removeEventListener("keydown", this.eventWithKeyDown);
	}

	render() {
		const { placeholder } = {
			placeholder: "/* Write Markdown here(Escreve Markdown aqui) */",
		};

		const { value, copySuccess } = this.state;

		const testDraft = loadStateFromLocalStorage("markdown");

		return (
			<>
				<MetaTags>
					<meta name="description" content="React Markdown Editor" />
					<meta name="thumbnail" content={`https://www.steadylearner.com/static/images/page/markdown.png`} />
					<meta name="keywords" content="React, Markdown Editor, React Markdown Editor, Steadylearner, steadylearner, www.steadylearner, steadylearner blog, Steadylearner blog" />
					
					<meta property="og:locale" content="en_US" />
					<meta property="og:type" content="website" />
					<meta property="og:site_name" content="Steadylearner" />
					<meta property="og:url" content="https://steadylearner.com/markdown" />
					<meta property="og:title" content={`React Markdown Editor by www.steadylearner.com`} />
					<meta property="og:description" content={`React Markdown Editor by Steadylearner - www.steadylearner.com`} />
					<meta property="og:image" content={`https://www.steadylearner.com/static/images/page/markdown.png`} />

					<meta name="twitter:card" content="summary" />
					<meta name="twitter:site" content="@steadylearner_p" />
					<meta name="twitter:creator" content="www.steadylearner.com" />
					<meta name="twitter:title" content={`React Markdown Editor by www.steadylearner.com`} />
					<meta name="twitter:description" content={`React Markdown Editor by Steadylearner - www.steadylearner.com`} />
					<meta name="twitter:image" content={`https://www.steadylearner.com/static/images/page/markdown.png`} />
					{/* <meta id="markdown-description" name="description" content="React Markdown Editor" />
					<meta id="markdown-keywords" name="keywords" content="React, Markdown Editor, React Markdown Editor, Steadylearner, steadylearner, www.steadylearner, steadylearner blog, Steadylearner blog" />
					
					<meta id="markdown-og-url" property="og:url" content="https://steadylearner.com/markdown" />
					<meta id={`markdown-og-title`} property="og:title" content={`React Markdown Editor by www.steadylearner.com`} />
					<meta id={`markdown-og-description`} property="og:description" content={`React Markdown Editor by Steadylearner - www.steadylearner.com`} />
					<meta id={`markdown-og-image`} property="og:image" content={`https://www.steadylearner.com/static/images/page/markdown.png`} />

					<meta id={`markdown-twitter-title`} name="twitter:title" content={`React Markdown Editor by www.steadylearner.com`} />
					<meta id={`markdown-twitter-description`} name="twitter:description" content={`React Markdown Editor by Steadylearner - www.steadylearner.com`} />
					<meta id={`markdown-twitter-image`} name="twitter:image" content={`https://www.steadylearner.com/static/images/page/markdown.png`} /> */}
				</MetaTags>
				<ConverterCSS converter="markdown" >
					<section
						className="
							converter-header
							white
							width-percent
							max-width
						"
					>
						<span
							className="
								hover
								cursor-pointer
								margin-left-four
							"
							onClick={() => this.showExample()}
							title="Click this will show example to write markdown."
						>
							<i className="fas fa-hand-point-right " />
							{" "}Example
						</span>
						<span className="center-auto" >
						{/* <span className="center-auto padding-right-four" > */}
							<Link exact to="/jsx">
								<span className="hover cursor-pointer no-text-decoration jsx-link" >
									<i
										title="This is link to JSX Converter"
										className="fab fa-react white"
									/>
								</span>
							</Link>
								Markdown Converter
							<span
								className="fas fa-eraser eraser hover cursor-pointer"
								onClick={() => this.clear()}
								title="Clcik it to clear the draft."
							/>
							<span
								className={`hover cursor-pointer `}
								onClick={(e) => this.callDraftFromLocalStorage(e)}
								title="Clcik it to load your last draft."
							>
								<i className={`fas fa-database ${testDraft && "red-white"}`}></i>
							</span>
						</span>
						<span
							className={`
								hover
								cursor-pointer
								margin-right-four
								${copySuccess === "Copied" && "link--active-blue"}
							`}
							onClick={() => this.copyToClipboardWithCode(value)}
							title="Click it or ⌨ Press shift+r to copy the text"
							// title="Click it or ⌨ Press shift+r to copy and then clear the text"
						>
							<span>{copySuccess}</span>
							<i className="fas fa-copy text-init" />
						</span>
					</section>
					<section className="converter-container">
						<MarkdownInput
							className="converter-input"
							value={value}
							placeholder={placeholder}
							onChange={e => this.handleTextChange(e)}
						/>
						<MarkdownCSS>
							<MarkdownResult value={value} />
						</MarkdownCSS>
					</section>
				</ConverterCSS>
			</>
		);
	}
}
