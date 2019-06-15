import React, { Component } from "react";
import { MarkdownInput, MarkdownPreview, copy, html } from "../react-easy-md";
import { saveStateToLocalStorage, loadStateFromLocalStorage } from "../store/localStorage";

import { debounce } from "lodash";
// import { debounce } from "lodash/fp";

import example from "../example";
import ConverterCSS from "./CSS/ConverterCSS";
import MarkdownPreviewCSS from "./CSS/MarkdownPreviewCSS";

class LiveMarkdownEdtior extends Component {

	constructor(props) {
		super(props);
		this.state = {
			value: "",
			copySuccess: "Copy",
			allowCode: true,
        };

        // https://lodash.com/docs/4.17.11#debounce
        this.saveDraft = debounce(this.saveDraft, 5000, {
            'leading': true,
            'trailing': false,
            'maxWait': 60000,
        });
        // this.saveDraft = debounce(5000)(this.saveDraft);
    }

    showExample() {
		this.setState({
			value: example,
		});
    }
    
    saveDraft(value) {
        saveStateToLocalStorage("markdown", value);
    }

	setText(e) {
        const { value } = e.target;
        this.setState({ value, copySuccess: "Copy" });
        this.saveDraft(value);
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

    copyToClipboardWithCode(value) {
		copy(value);
		this.setState({
			copySuccess: "Copied",
		})
    }

    setCodeUsability(e) {
		e.preventDefault();
		const { allowCode } = this.state;
		this.setState({
			allowCode: !allowCode,
		});
	}

    toHTML() {
        const HTML = html(this.state.value);
		this.setState({
			value: HTML,
		})
	}

    eventWithKeyDown = (e) => {
		if (this.state.value !== "" && e.keyCode === 82 && e.shiftKey) {
			e.preventDefault();
			this.copyToClipboardWithCode(this.state.value);
			// this.clear();
		}
	}

	componentDidMount() {
        document.onkeydown = this.eventWithKeyDown;
    }

	componentWillUnmount() {
		document.removeEventListener("keydown", this.eventWithKeyDown);
	}

    render() {
        const { value, copySuccess, allowCode } = this.state;
        const isThereDraft = loadStateFromLocalStorage("markdown");
        return (
            <ConverterCSS>
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
                        <span
                            className="hover transition cursor-pointer no-text-decoration margin-right-one-and-a-half"
                            onClick={e => this.setCodeUsability(e)}
                        >
                            <i
                                title="Click this to not allow or allow html"
                                
                                className={`far fa-file-code white ${allowCode ? "link--active-blue" : ""}`}
                            />
                        </span>
                        <span
                            className="transition text-shadow-red-hover cursor-pointer no-text-decoration margin-right-one-and-a-half"
                            onClick={() => this.toHTML()}
                        >
                            <i
                                title="Click this to turn your draft to html"
                                className={`fab fa-html5 white`}
                            />
                        </span>
                        <span
                            className="transition hover cursor-pointer no-text-decoration margin-right-one-and-a-half"
                        >
                                <i
                                    title="This is link to JSX Converter"
                                    className="fab fa-react white"
                                />
                        </span>
                            Markdown Converter
                        <span
                            className="fas fa-eraser transition hover cursor-pointer margin-left-one"
                            onClick={() => this.clear()}
                            title="Clcik it to clear the draft."
                        />
                        <span
                            className={`hover cursor-pointer transition margin-left-one-and-a-half`}
                            onClick={(e) => this.callDraftFromLocalStorage(e)}
                            title="Clcik it to load your last draft."
                        >
                            <i className={`fas fa-database ${isThereDraft && "red-white"}`}></i>
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
                    >
                        <span>{copySuccess}</span>
                        <i className="fas fa-copy text-init" />
                    </span>
                </section>
                <section className="converter-container">
                        <MarkdownInput
                            onChange={(e) => this.setText(e)}
                            className="converter-input"
                            placeholder={"/* Write Markdown here(Escreve Markdown aqui) */"}
                            value={value}
                        />
                        <MarkdownPreviewCSS>
                            <MarkdownPreview
                                value={value}
                                markedOptions={{
                                    langPrefix: "hljs ", // hljs prefix hljs relevant classes for styling
                                    // sanitize: false, // allow html
                                    sanitize: !allowCode, // allow html
                                    breaks: true,
                                }}
                                prefixWithReplacement={[
                                    ["s-", "https://www.steadlyearner.com"],
                                    ["l-", "https://www.linkedin.com/in/steady-learner-3151b7164/"],
                                    ["n-", "https://www.npmjs.com/package/"],
                                    ["y-", "https://www.youtube.com/channel/UCt_jsJOe91EVjd58kHpgTfw"],
                                    ["t-", "https://twitter.com/steadylearner_p"],
                                    ["g-", "https://www.github.com"],
                                ]}
                                // className
                                // titleMessage
                            />
                        </MarkdownPreviewCSS>
                </section>
            </ConverterCSS>
        )
    }
}

export default LiveMarkdownEdtior;

