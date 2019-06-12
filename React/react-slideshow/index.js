import React, { Component } from "react";
import { withRouter, Link, Route} from "react-router-dom";
import MetaTags from "react-meta-tags";
import ImageGallery from "react-image-gallery";

import axios from "axios";

import { shuffle } from "lodash/fp";

// I can still reduce code size with new react api
// use lazy when becomes compatible with react-router

import SlideshowCSS from "./CSS/SlideshowCSS";

import YouTubeSubscribe from "../Side/YouTubeSubscribe";
import Stager from "../Side/Stager";
import MarkdownResult from "../Side/MarkdownResult";

import ImageModal from "../Reusable/Modal/ImageModal";
import setTheme from "../Reusable/setTheme";

// # Webpack CSS for react-image-gallery
import "react-image-gallery/styles/css/image-gallery.css";

class SlideShow extends Component { 
	constructor(props) {
		super(props);
		this.state = {
			data: [
				{
					original: "http://placehold.it/1000x400/ffffff/c0392b/&text=slide1",
					thumbnail: "http://placehold.it/1000x400/ffffff/c0392b/&text=slide1",
					originalClass: "hover cursor-pointer",
					thumbnailClass: "hover cursor-pointer",
				},
				{
					original: "http://placehold.it/1000x400/ffffff/c0392b/&text=slide2",
					thumbnail: "http://placehold.it/1000x400/ffffff/c0392b/&text=slide2",
					originalClass: "hover cursor-pointer",
					thumbnailClass: "hover cursor-pointer",
				},
				{
					original: "http://placehold.it/1000x400/ffffff/c0392b/&text=slide3",
					thumbnail: "http://placehold.it/1000x400/ffffff/c0392b/&text=slide3",
					originalClass: "hover cursor-pointer",
					thumbnailClass: "hover cursor-pointer",
				},
				{
					original: "http://placehold.it/1000x400/ffffff/c0392b/&text=slide4",
					thumbnail: "http://placehold.it/1000x400/ffffff/c0392b/&text=slide4",
					originalClass: "hover cursor-pointer",
					thumbnailClass: "hover cursor-pointer",
				},
				{
					original: "http://placehold.it/1000x400/ffffff/c0392b/&text=slide5",
					thumbnail: "http://placehold.it/1000x400/ffffff/c0392b/&text=slide5",
					originalClass: "hover cursor-pointer",
					thumbnailClass: "hover cursor-pointer",
				},
				{
					original: "http://placehold.it/1000x400/ffffff/c0392b/&text=slide6",
					thumbnail: "http://placehold.it/1000x400/ffffff/c0392b/&text=slide6",
					originalClass: "hover cursor-pointer",
					thumbnailClass: "hover cursor-pointer",
				},
				{
					original: "http://placehold.it/1000x400/ffffff/c0392b/&text=slide7",
					thumbnail: "http://placehold.it/1000x400/ffffff/c0392b/&text=slide7",
					originalClass: "hover cursor-pointer",
					thumbnailClass: "hover cursor-pointer",
				},
				{
					original: "http://placehold.it/1000x400/ffffff/c0392b/&text=slide8",
					thumbnail: "http://placehold.it/1000x400/ffffff/c0392b/&text=slide8",
					originalClass: "hover cursor-pointer",
					thumbnailClass: "hover cursor-pointer",
				},
			],

			randomData: [],

			optionSwitch: true,
			showIndex: true,
			showNav: true,
			showThumbnails: true,
			showFullscreenButton: false,
			showPlayButton: true,

			//

			stager: false,
			grayscale: false,
			contrast: false,
			random: false,
			content: "This is image slide show made with React. You can make grayscale, contrast and random images.",
			descriptionShow: true,

			// modal

			imageIndex: 0,
		};
	}

	setDescription(e) {
		const { descriptionShow } = this.state;
		e.preventDefault();
		this.setState({
			descriptionShow: !descriptionShow,
		})
	}

	onImageClick() {
		this.setState({
			imageIndex: this._imageGallery.getCurrentIndex(),
		});
	}

	setOptionSwtich(e) {
		e.preventDefault();

		const {
			optionSwitch,
			showIndex,
			showNav,
			// showThumbnails,
			// showFullscreenButton,
			showPlayButton,
		} = this.state;

		this.setState({
			optionSwitch: !optionSwitch,
			showIndex: !showIndex,
			showNav: !showNav,
			// showThumbnails: !showThumbnails,
			// showFullscreenButton: !showFullscreenButton,
			showPlayButton: !showPlayButton,
		});

		// const descriptions = document.getElementsByClassName("image-gallery-description");
	}

	setImageRandom(e) {
		e.preventDefault();
		const { data, random } = this.state;

		this.setState({
			randomData: shuffle(data),
			random: !random,
		});
	}

	setImageStager(e) {
		e.preventDefault();
		const { stager } = this.state;

		this.setState({
			stager: !stager,
		});
	}

	setGrayscale(e) {
		e.preventDefault();
		const { contrast, grayscale } = this.state;
		this.setState({
			grayscale: !grayscale,
		});

		if (contrast) {
			this.setContrast(e);
		}

		const gallery = document.getElementsByClassName("image-gallery")[0];

		if (!grayscale) {
			gallery.className = "image-gallery filter-grayscale";
		} else {
			gallery.className = "image-gallery";
		}
	}

	setContrast(e) {
		e.preventDefault();
		const { contrast, grayscale } = this.state;
		this.setState({
			contrast: !contrast,
		});

		if (grayscale) {
			this.setGrayscale(e);
		}

		const gallery = document.getElementsByClassName("image-gallery")[0];

		if (!contrast) {
			gallery.className = "image-gallery filter-contrast";
		} else {
			gallery.className = "image-gallery";
		}
	}

	requestImagesData() {
		const index = "/api/image/search";

		axios.get(index).then((response) => {
			let {
				data,
			} = response;

			data = data.map(x => ({
					original: x.media_url,
					thumbnail: x.media_url,
					originalClass: "hover cursor-pointer slideshow__image x-overflow",
					thumbnailClass: "hover cursor-pointer slideshow__thumbnail x-overflow",
					originalAlt: x.media_url,
					thumbnailAlt: x.media_url,
					originalTitle: x.title,
					thumbnailTitle: x.title,
					description: <span>{setTheme(x.place)}</span>, // this is to show location
					// content: x.content,
					// description: x.title,
					// description: x.content,
				}));

			// console.log("Find", data);

			this.setState({
				data,
			});
		}).catch((error) => {
			console.log(error);
		}).then(() => {

		});
	}

	componentDidMount() {
		this.requestImagesData();
	}

	componentDidUpdate(prevProps, prevState) {
		const { match, location, history } = this.props;
		const { pathname } = location;

		const { path, params } = match;

		const { query } = params;

		if (prevState.imageIndex !== this.state.imageIndex) {
			this.requestImagesData(query);
		}
	}

	render() {
		const {
			data,
			randomData,
			//
			optionSwitch,
			showIndex,
			showNav,
			showThumbnails,
			showFullscreenButton,
			showPlayButton,
			//
			stager,
			grayscale,
			contrast,
			random,
			content,
			descriptionShow,
			//
			imageIndex,
		} = this.state;

		const { handleModal: setModal, navigation } = this.props;
		const { modalIsOpen } = navigation;

		// const { match, location, history } = this.props;
		// const { pathname } = location;

		// const { path, params } = match;

		// const { query } = params;

		const youtubeSubscribe = <YouTubeSubscribe
			layout="full"
			theme="default"
			count="default"
		/>;

		const lastData = random ? randomData.slice(0, 8) : data.slice(0, 8);

		const currentImageData = lastData[imageIndex];

		return (
			<>
				<MetaTags>
					<title id={"slideshow"} >{`${random ? "Random" : "Latest"} Images`}</title>
					<meta name="description" content="Steadylearner Image Slideshow" />
					<meta name="thumbnail" content="https://www.steadylearner.com/static/images/brand/prop-passer_original.png" />
					<meta name="keywords" content="Steadylearner, steadylearner, www.steadylearner.com, steadylearner image, Steadylearner image" />
					
					<meta property="og:locale" content="en_US" />
					<meta property="og:type" content="website" />
					<meta property="og:site_name" content="Steadylearner" />
					<meta property="og:url" content={`https://steadylearner.com/slideshow`} />
					<meta property="og:title" content={`Image Slideshow by www.steadylearner.com`} />
					<meta property="og:description" content={`Visit Image Slideshow by www.steadylearner.com`} />
					<meta property="og:image" content={`https://www.steadylearner.com/static/images/brand/prop-passer_original.png`} />
					
					<meta name="twitter:card" content="summary" />
					<meta name="twitter:site" content="@steadylearner_p" />
					<meta name="twitter:creator" content="www.steadylearner.com" />
					<meta name="twitter:title" content={`Image Slideshow by www.steadylearner.com`} />
					<meta name="twitter:description" content={`Visit Image Slideshow by www.steadylearner.com`} />
					<meta name="twitter:image" content={`https://www.steadylearner.com/static/images/brand/prop-passer_original.png`} />
				</MetaTags>
				{stager && <Stager
					list={lastData}
				/>}
				<SlideshowCSS>
					<section
						className={`
							image-gallery-layout
							theme-white
							min-height-percent
							box-shadow-black
							${modalIsOpen ? "x-opacity" : ""}
						`}
					>
						{lastData && <ImageGallery
							ref={i => this._imageGallery = i}
							items={lastData}
							// items={lastData}
							defaultImage="/static/images/brand/prop-passer_for_slideshow.png"
							// use modal instead?
							// onClick={this._onImageClick.bind(this)}
							showIndex={showIndex}
							showNav={showNav}
							showThumbnails={showThumbnails}
							showFullscreenButton={showFullscreenButton}
							showPlayButton={showPlayButton}
							//
							onClick={(e) => {
								// if (!random) {
								e.preventDefault();
								this.onImageClick();
								setModal(!modalIsOpen);
								// }
							}}
						/>}
						<span className="center margin-bottom-half">
							<h1 className={"black image-title"} >{`${random ? "Random" : "Latest"} Images`}</h1>
							<a
								href="https://twitter.com/steadylearner_p"
								className="
									no-text-decoration
								"
								target="_blank"
								rel="noopener noreferrer"
								title="Steadylearner Twitter Llink"
							>
								<i
									className={"fa fa-twitter margin-left-half x-outline margin-right-half hover cursor-pointer blue"}
								/>
							</a>
							<a
								href="https://www.linkedin.com/in/steady-learner-3151b7164/"
								className="
									no-text-decoration
								"
								target="_blank"
								rel="noopener noreferrer"
								title="Steadylearner LinkedIn Link"
							>
								<i
									className={"fab fa-linkedin margin-left-half x-outline margin-right-half hover cursor-pointer blue"}
								/>
							</a>
							<a
								href="https://github.com/steadylearner"
								className="no-text-decoration"
								title="Steadylearner GitHub Link"
								target="_blank"
								rel="noopener noreferrer"
								style={{
									textShadow: "0 0 0.2rem yellow",
								}}
							>
								<i
									className={"disapper-at-mobile fa fa-github margin-left-half x-outline margin-right-half hover cursor-pointer blue"}
								/>
							</a>
							<span
								onClick={
									e => this.setOptionSwtich(e)
								}
							>
								<i
									className={`fas fa-gear margin-left-half x-outline margin-right-half hover cursor-pointer ${optionSwitch ? "blue" : "black"}`}
									// className={`fas fa-gear margin-left-half margin-bottom-half margin-right-half hover cursor-pointer ${optionSwitch ? "blue" : "black"}`}
									title="Click this to switch image gallery options"
								/>
							</span>
							{/* <span
								onClick={
									e => this.setDescription(e)
								}
							>
								<i
									className={`appear-at-mobile fas fa-caret-down margin-left-half margin-right-half hover cursor-pointer ${descriptionShow ? "blue" : "black"}` }
									// className={`switch-description fas fa-caret-down margin-left-half margin-right-half hover cursor-pointer ${descriptionShow ? "blue" : "black"}` }
									title="Click this to switch image descriiption"
								/>
							</span> */}
						</span>
						<section
							className="flex margin-left-half"
						>
							{youtubeSubscribe}
							<span className="util-wrapper">
								<i
									// className={`fas fa-mouse-pointer cursor-pointer text-end green`}
									className={`disapper-at-mobile fas fa-mouse-pointer cursor-pointer margin-right-two ${stager ? "green" : "black"}`}
									onClick={e => this.setImageStager(e)}
									title="Click this for traiing images."
								/>
								<i
									className={`fas fa-file-image cursor-pointer margin-right-two ${!grayscale ? "green" : "black"}`}
									onClick={e => this.setGrayscale(e)}
									title="Click this for grayscale images. It only works for the image slide"
								/>
								<i
									className={`disapper-at-mobile fas fa-fill cursor-pointer margin-right-two ${contrast ? "green" : "black"}`}
									onClick={e => this.setContrast(e)}
									title="Click this for images with contrast. It only works for the image slide"
								/>
								<i
									className={`fa fa-random hover cursor-pointer ${random ? "green" : "black"}`}
									onClick={e => this.setImageRandom(e)}
									title="Click this for random images."
								/>
							</span>
						</section>
						<section className={`image-page-content ${descriptionShow ? "" : "x-display"}` } >
							<MarkdownResult value={content} />
							{/* <MarkdownResult value={currentImageData?.content} /> */}
                        </section>
						<hr className="content-break" />
						<section className="category">
							<span className="label" >
								<i className="fas fa-info-circle" /> Pages - {" "}
							</span>
							<ul className="tag-wrapper">
								{["video", "image", "blog", "code"].map(t => <Route key={t} render={({ history }) => ( // key to top-level child component?
									<li
										className="tag"
										title={`Click this to navigate to /${t} page.`}
										alt={`category link that sends users to /${t} page.`}
										onClick={(e) => {
											e.preventDefault();
											history.push(`/${t}`);
										}}
									>
										{t}
									</li>
								)}/>)}
                            </ul>
						</section>
						<hr className="content-break" />
					</section>
				</SlideshowCSS>
				<ImageModal
					modalIsOpen={modalIsOpen}
					setModal={setModal}
					mediaUrl={currentImageData?.original} // to current Index later
					mediaTitle={currentImageData?.original}
					avatar="/static/images/brand/prop-passer_s.png/"
				/>
			</>
		);
	}
}

export default withRouter(SlideShow);