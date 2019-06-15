import React from "react";
import styled from "styled-components";

const HomeCSS = styled.section`

    padding-top: 5.8rem;

    .home-first {
            background-image: url("https://cdn-images-1.medium.com/max/2000/1*5TRuG7tG0KrZJXKoFtHlSg.jpeg");
            padding-top: 30rem;
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

    /* Media Queries
    –––––––––––––––––––––––––––––––––––––––––––––––––– */
    /*
    Note: The best way to structure the use of media queries is to create the queries
    near the relevant code. For example, if you wanted to change the styles for buttons
    on small devices, paste the mobile query code up in the buttons section and style it
    there.
    */

    /* Larger than mobile */
    @media (min-width: 400px) {
        .home-first {
            padding-top: 5rem !important;
        }

        /* fon-tsize 2.1rem later with media query */
/* 
        .home-title {
            font-size: 2.5rem;
            line-height: 5rem;
        }

        .home-image__brand {
            width: 6rem;
            height: 6rem;
        } */
    }

    /* Larger than phablet (also point when grid becomes active) */
    @media (min-width: 550px) {
        .home-first {
            padding-top: 10rem !important;
        }

        .home-title {
            font-size: 1.2rem !important;
        }

        /* fon-tsize 2.1rem later with media query */

        /* .home-title {
            font-size: 2.5rem;
            line-height: 5rem;
        }

        .home-image__brand {
            width: 6rem;
            height: 6rem;
        } */
    }

    /* Larger than tablet */
    @media (min-width: 750px) {
        .home-first {
            padding-top: 15rem !important;
        }

        .home-title {
            font-size: 1.6rem !important;
        }
    }

    /* Larger than desktop */
    @media (min-width: 1000px) {
        /* .home-first {
            padding-top: 15rem;
        } */

        /* fon-tsize 2.1rem later with media query */

        .home-title {
            font-size: 2rem !important;
            line-height: 4.5rem !important;
            margin: 0rem 1rem 0rem 1rem !important;
        }
    }

    /* Larger than Desktop HD */
    @media (min-width: 1200px) {
        .home-first {
            background-image: url("https://cdn-images-1.medium.com/max/2000/1*5TRuG7tG0KrZJXKoFtHlSg.jpeg");
            padding-top: 30rem;
        }

        /* fon-tsize 2.1rem later with media query */

        .home-title {
            font-size: 2.5rem !important;
            line-height: 5rem !important;
            margin: 2rem 1rem 1rem 1rem !important;
        }

        .home-image__brand {
            width: 4rem !important;
            height: 4rem !important;
        }
    }

`;

export default props => <HomeCSS {...props} />;

// padding-top: 5.7rem;

