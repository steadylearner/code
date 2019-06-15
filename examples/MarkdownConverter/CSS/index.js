import React from "react";
import styled from "styled-components";

const ConverterCSS = styled.section`

    font-size: 2.8rem;
    padding-bottom: 0.1rem;

    .converter-header {
        display: inline-flex;
        flex-flow: row;
        overflow: auto;
        align-content: center;
        justify-content: center;

        background: ${props => props.converter && "linear-gradient(#efefef, black, #efefef)"};
        text-shadow: 0.1rem 0.1rem 0.1rem black;

        margin-top: 5.8rem;
        border-top: 0.1rem solid black;
        padding-top: 0.4rem;
        padding-bottom: 0.5rem;

        .eraser {
            padding: 0.1rem 1.8rem 0 1rem;
        }

        .jsx-link {
            padding-right: 1rem;
        }

        .github {
            margin-left: 0.5rem;
        }

        .react {
            padding: 0.1rem;
            color: "#6786fb";
            margin-left: 0.1rem;
            padding-right: 0.5rem;
        }
    }

    .converter-container {

        height: calc(100vh - 5.6rem);
        display: flex;
        align-content: center;
        justify-content: center;
        outline: 0.1rem solid black;

        textarea {
            padding-bottom: 2.6rem;
            padding-top: 1.5rem;
            background-color: #efefef;
        }

        box-shadow: inset 0 0 0.4rem black;

        > * {
            flex: 1 1;
            color: black;
            /* font-weight: bold; */
            font-family: 'Times New Roman', Times, serif;
            font-size: 1.6rem;
            overflow: auto;
            padding: 1rem;
        }

        .converter-input {
            font-weight: bold;
        }

        .converter-preview {

            padding-bottom: 2.6rem;
            padding-top: 1.6rem;

            color: ${props => (props.converter === "jsx" && "blue")};
        }
    }

    @media all and (max-width: 852px) {
        display: none;
    }
`;

export default props => <ConverterCSS {...props} />;

