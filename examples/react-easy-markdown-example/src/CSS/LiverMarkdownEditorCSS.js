import React from "react";
import styled from "styled-components";
import MarkdownCSS from "../../CSS/MarkdownCSS";

const LiveMarkdownEditorCSS = styled.section`

    padding-bottom: 2.6rem;
    background-color: white;
    padding: 1rem;
    margin: 0;

    ${ContentCSS}
`;

export default props => <LiveMarkdownEditorCSS {...props} />;

