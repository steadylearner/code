import React from "react";
import styled from "styled-components";

import ContentCSS from "../../CSS/ContentCSS";

const SlideshowCSS = styled.section.attrs({
    className: "theme--black-white-crossed-line",
})`

	padding-top: 5.8rem;
	/* padding-top: 6rem; */
	/* padding-bottom: 0.5rem; */
	font-size: 2rem;
	min-height: 85vh;

	/* for images without side content */

	.image-gallery-layout {
		flex: 1 1 auto;
		max-width: 64rem;
		width: 64rem;
		/* 0.8 because of outline from navbar, 0.1 just to pack the space */
		padding: 0.8rem 1rem 0.1rem 1rem;
		/* padding: 1rem 1rem 0.5rem 1rem; */
		/* padding: 1.5rem 1rem 0.5rem 1rem; */
		/* padding: 0 2rem 0 2rem; */
		margin: 0 auto;
	}

	/*  */

	/* .slideshow__image { */
	.image-gallery-image img:not(.steadylearner-brand--s) {
		/* // min-height: 34rem; */
		/* // max-height: 36rem; */
		max-width: 64rem;
		height: 36rem;
		max-height: 36rem;
		width: inherit;
	}
	/* } */

	/* .image-gallery-image img:not(.steadylearner-brand--s):hover {
		transform: scale(1.01);
		transition: transform 1s ease;
	} */

	.slideshow__thumbnail {
		.image-gallery-thumbnail-inner img {
			width: 10rem;
			max-height: 6rem;
		}
	}
	/*  */

	.image-title {
		font-size: 2.5rem;
		margin-left: 0.5rem;
		flex: 10;
	}

	.image-page-content {
		margin-top: 2rem;
		padding-left: 0.5rem;
		padding-right: 0.5rem;

		${ContentCSS}
	}

	.util-wrapper {
		font-size: 3.6rem;
		cursor: pointer;
		display: flex;
		flex: 1;
		justify-content: flex-end;
		align-items: center;
	}

	.category {
		display: flex;
		flex-flow: row;
		margin-left: 0.5rem;
		margin-top: 2rem;
		margin-bottom: 2rem;
	}

	.label {
		${'' /* opacity: 0.7; */}
		margin-right: 0.5rem;
		overflow: hidden;
	}

	.tag-wrapper {
		margin: 0;
		padding: 0;
		list-style: none;
		display: flex;
		flex-flow: row;
	}

	.tag {
		color: #08c;
		cursor: pointer;
		margin-right: 0.5rem;

		:hover {
			opacity: 0.8;
			text-decoration: underline;
		}
	}

	.appear-at-mobile {
		display: none;
	}
	/* .switch-description {
		display: none;
	} */

	@media all and (max-width: 75.6rem) {
		.appear-at-mobile {
			display: inherit;
		}
		/* .switch-description {
			display: inherit;
		} */
	}

	@media all and (max-width: 66rem) {

		.image-gallery-layout {
			width: inherit;
			padding: 1rem 1rem 0.5rem 1rem;
			/* padding: 0.5rem 0.5rem 1.5rem 0.5rem; */
			/* You need padding-bottom here for layout */
			/* padding: 0 0.5rem; */
		}

		.util-wrapper {
			font-size: 2.5rem;
		}

		.repeat {
			font-size: 2.8rem;
		}

		/* .category {
			font-size: 1.5rem;
		} */
	}

	/* @media all and (max-width: 48rem) { */
	@media all and (max-width: 48rem) {
		.image-title {
			font-size: 2rem;
		}

		.category {
			font-size: 1.5rem;
		}

		.disapper-at-mobile {
			display: none;
		}

		.slideshow__image {
			/* Because of space for left and right */
			max-height: 26.5rem;
			height: 26.5rem;
			/* max-height: 27rem; */
		}

		/* .slideshow__image { */
		.image-gallery-image img:not(.steadylearner-brand--s) {
			max-height: 26.5rem;
			height: 26.5rem;
		}
		/* } */

		.slideshow__thumbnail {
			.image-gallery-thumbnail-inner img {
				width: 8rem;
				max-height: 6rem;
			}
		}
	}

	/* + 1 rem for padding rem ? */

	/* @media all and (max-width: 38.4rem) { */
	@media all and (max-width: 38.4rem) {
		/* .image-title {
			font-size: 1.8rem;
		} */

		/* less than max-width here */

		/* .repeat {
			font-size: 2.6rem;
			margin-top: 0.2rem;
		} */

		/* Use it when you need tags and not pages*/
		/* .category {
			font-size: 1.2rem;
		} */
		/* .slideshow__thumbnail {
			.image-gallery-thumbnail-inner img {
				width: 8rem;
				max-height: 4rem;
			}
		} */
	}

	/* @media all and (max-width: 34rem) { */
	@media all and (max-width: 34rem) {
		.slideshow__image {
			/* Because of space for left and right */
			max-height: 17.5rem;
			height: 17.5rem;
			/* max-height: 18rem; */
		}

		/* .slideshow__image { */
		.image-gallery-image img:not(.steadylearner-brand--s) {
			max-height: 17.5rem;
			height: 17.5rem;
		}
		/* } */
	}

`;

export default SlideshowCSS;


