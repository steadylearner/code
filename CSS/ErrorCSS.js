import React from "react";
import styled from "styled-components";

// Is it useful?

const ErrorCSS = styled.section`

    /* layout */
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 100%;
    height: 100vh;

    /* style */
    font-size: 1.6rem;
    /* box-shadow: inset 0 0 0.5rem 0.5rem black; */

    .error__title {
        /* color: red; */
    }

    .error__content {
        /* color: #08c; */
    }

    /* @media all and (max-width: 76.8rem) {
        font-size: 1.5rem;
    } */

    @media all and (max-width: 66rem) {
        .error__title {
            font-size: 1.5rem;
        }

        .error__content {
            font-size: 1.25rem;
        }
    }

    @media all and (max-width: 38.4rem) {
        .error__title {
            font-size: 1.25rem;
        }

        .error__content {
            /* color: #08c; */
        }
    }

`;

export default props => <ErrorCSS {...props} />;

