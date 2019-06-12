import React, { Component } from "react";
import { Prop } from "prop-passer";

import { debounce } from "lodash";
// import { debounce } from "lodash/fp";

import {
    MarkdownInput,
    MarkdownPreview,
    html,
    markdown,
    copy,
} from "../../react-easy-md";
import {
    saveStateToLocalStorage,
    loadStateFromLocalStorage
} from "../../store/localStorage";

import example from "../../example";

import ConverterCSS from "./CSS/ConverterCSS";
import MarkdownPreviewCSS from "./CSS/MarkdownPreviewCSS";

const ClassProp = Prop({
    className: "hover transition cursor-pointer"
});

class LiveMarkdownEdtior extends Component {

	constructor(props) {
		super(props);
		this.state = {
			value: "",
			copySuccess: "Copy",
			allowCode: true,
            // exampleShow: false,
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
            // exampleShow: true,
		});
    }

    saveDraft(value) {
        saveStateToLocalStorage("markdown", value);
    } // This is just to use debounce

	setText(e) {
        const { value } = e.target;
        this.setState({ value, copySuccess: "Copy" });
        this.saveDraft(value);
    }

    callDraftFromLocalStorage() {
		const lastDraft = loadStateFromLocalStorage("markdown");

		if (lastDraft !== undefined) {
			this.setState({ value: lastDraft, copySuccess: "Copy" });
		}
	} // l

    clear() {
        if (this.state.value !== "") {
            this.setState({ value: "" });
        }
	} // r

    copyToClipboardWithCode(value) {
        if (this.state.value !== "") {
            copy(value);
            this.setState({
                copySuccess: "Copied",
            })
        }
    } // c

    setCodeUsability(e) {
		e.preventDefault();
		const { allowCode } = this.state;
		this.setState({
			allowCode: !allowCode,
		});
	}

    toHTML() {
        const { value } = this.state;
        if (value !== "") {
            const HTML = html(value);
            this.setState({
                value: HTML,
            })
        }
    } // h

    toMarkdown() {
        const { value } = this.state;
        if (value !== "") {
            const result = markdown(value);
            this.setState({
                value: result,
            })
        }
    } // p

    eventWithKeyDown = (e) => {
        if ( e.keyCode === 82 && e.shiftKey) {
			e.preventDefault();
			this.clear();
		} // R

		if (e.keyCode === 67 && e.shiftKey) {
			e.preventDefault();
			this.copyToClipboardWithCode(this.state.value);
		} // C

		if (e.keyCode === 76 && e.shiftKey) {
			e.preventDefault();
			this.callDraftFromLocalStorage(e);
        } // L

		if (e.keyCode === 72 && e.shiftKey) {
			e.preventDefault();
			this.toHTML();
        } // H

		if (e.keyCode === 80 && e.shiftKey) {
			e.preventDefault();
			this.toMarkdown();
        } // P

        if (e.keyCode === 83 && e.shiftKey) {
			e.preventDefault();
			this.showExample();
		} // S
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

        const set = [
            ["s-", "https://www.steadlyearner.com"],
            ["l-", "https://www.linkedin.com/in/steady-learner-3151b7164/"],
            ["n-", "https://www.npmjs.com/package/"],
            ["y-", "https://www.youtube.com/channel/UCt_jsJOe91EVjd58kHpgTfw"],
            ["t-", "https://twitter.com/steadylearner_p"],
            ["g-", "https://www.github.com"],
        ];

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
                    <ClassProp>
                        <span
                            className="no-text-decoration margin-left-two"
                            onClick={e => this.setCodeUsability(e)}
                        >
                            <i
                                title="Click this to not allow or allow html"
                                className={`far fa-file-code white ${allowCode ? "link--active-blue" : ""}`}
                            />
                        </span>
                        <span
                            className="no-text-decoration margin-left-one"
                        >
                            <a
                                href="https://github.com/steadylearner/react-easy-md#readme"
                                title="This is link to React Easy Markdown Github Page."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="white no-text-decoration hover"
                            >
                                <i
                                    className={`fab fa-github white`}
                                />
                            </a>
                        </span>
                        <span
                            className={`
                                margin-left-one
                            `}
                            onClick={() => this.showExample()}
                            title="Click it or ⌨ Press shift+S to show example by Steadylearner"
                        >
                            <i className="fas fa-hand-point-right " />
                            {" "}
                            <span>
                                Example
                            </span>
                        </span>
                    </ClassProp>
                    <span className="center-auto" >
                        <span
                            className="transition text-shadow-blue-hover cursor-pointer no-text-decoration margin-right-one font-two-and-a-half"
                            onClick={() => this.toMarkdown()}
                            title="Click it or ⌨ Press shift+p to turn your HTML to Markdown."
                        >
                            <i
                                className="fas fa-code"
                            />
                        </span>
                        <span>
                            <a
                                href="https://github.com/steadylearner/react-easy-md#readme"
                                title="This is link to React Easy Markdown Github Page."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="white no-text-decoration hover transition"
                            >
                                React Easy Markdown
                            </a>
                        </span>
                        <span
                            className="transition text-shadow-red-hover font-two-and-a-half cursor-pointer no-text-decoration margin-left-one margin-right-six"
                            onClick={() => this.toHTML()}
                            title="Click it or ⌨ Press shift+h to turn your content to HTML"
                        >
                            <i
                                className={`fab fa-html5 white`}
                            />
                        </span>
                    </span>
                    <ClassProp>
                        <span
                            className={`
                                margin-right-one
                                ${copySuccess === "Copied" && "link--active-blue"}
                            `}
                            onClick={() => this.copyToClipboardWithCode(value)}
                            title="Click it or ⌨ Press shift+c to copy the content"
                        >
                            <span>{copySuccess}</span>
                            <i className="fas fa-copy text-init" />
                        </span>
                        <span
                            className="fas fa-eraser margin-right-one"
                            onClick={() => this.clear()}
                            title="Click it or ⌨ Press shift+r to remove the content"
                        />
                        <span
                            className={`margin-right-two`}
                            onClick={() => this.callDraftFromLocalStorage()}
                            title="Click it or ⌨ Press shift+l to load the last draft"
                        >
                            <i className={`fas fa-database ${isThereDraft && "red-white"}`}></i>
                        </span>
                    </ClassProp>
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
                                set={set}
                                // className
                                // titleMessage
                            />
                        </MarkdownPreviewCSS>
                </section>
                <footer className={`sub-navbar--about nav-height width-vw theme-black border-white center `} >
                    <span
                        title={`This is link to /about`}
                        className="font-normal"
                    >
                        <a
                            href="https://www.steadylearner.com"
                            title="This is to link to Steadylearner Website built with React and Rust."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="no-text-decoration hover white transition"
                        >
                            © Steadylearner
                        </a>
                        {/* <a
                            href="https://www.youtube.com/channel/UCt_jsJOe91EVjd58kHpgTfw"
                            className="
                                no-text-decoration
                                white
                                hover margin-left-half
                            "
                            target="_blank"
                            rel="noopener noreferrer"
                            title="steadylearner YouTube link"
                        >
                            <i className="fa fa-youtube" />
                        </a>
                        <a
                            href="https://github.com/steadylearner"
                            className="no-text-decoration white margin-left-half"
                            title="steadylearner GitHub"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fab fa-github" />
                        </a> */}
                        <a
                            href="https://www.linkedin.com/in/steady-learner-3151b7164/"
                            className="no-text-decoration white hover margin-left-half"
                            title="steadylearner LinkedIn"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fab fa-linkedin" />
                        </a>
                        <a
                            href="https://twitter.com/steadylearner_p"
                            className="
                                no-text-decoration
                                white
                                hover margin-left-half
                            "
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Steadylearner Twitter"
                        >
                            <i className="fa fa-twitter" />
                        </a>
                    </span>
                </footer>
            </ConverterCSS>
        )
    }
}

export default LiveMarkdownEdtior;




