import React from "react";
import styled from "styled-components";
import MarkdownCSS from "./MarkdownCSS";

const MarkdownPreviewCSS = styled.section`

    padding-bottom: 2.6rem;
    background-color: white;
    padding: 1rem;
    margin: 0;

    ${MarkdownCSS}
`;

export default props => <MarkdownPreviewCSS {...props} />;


