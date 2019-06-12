import React from "react";
import styled from "styled-components";

const HomeCSS = styled.section`

    padding-top: 5.8rem;

    .home-first {
        background-image: url("/static/images/page/homepage_placeholder.jpeg");
        /* padding-top: 30rem; */
    }

    /* fon-tsize 2.1rem later with media query */

    .home-title {
        font-size: 2.5rem;
        line-height: 5rem;
        margin: 2rem 1rem 1rem 1rem;
    }

    .home-image__brand {
        width: 4rem;
        height: 4rem;
    }

    @media all and (min-width: 160rem) {
        .home-first {
            background-image: url("/static/images/page/homepage_placeholder_original.jpeg");
        }
	}

    @media all and (max-width: 64rem) {
        .home-first {
            background-image: url("/static/images/page/homepage_placeholder_mobile.jpeg");
        }
	}

    /* Media Queries
    –––––––––––––––––––––––––––––––––––––––––––––––––– */
    /*
    Note: The best way to structure the use of media queries is to create the queries
    near the relevant code. For example, if you wanted to change the styles for buttons
    on small devices, paste the mobile query code up in the buttons section and style it
    there.
    */
`;

export default props => <HomeCSS {...props} />;

// padding-top: 5.7rem;

