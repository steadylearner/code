import React from "react";
import styled from "styled-components";

/**
 * No visual syntax helpers as Visual Studio Code does
 * So I let compare.css inside Compare folder
 */

/*==========================================*/
/* YouTube Subscribe and other share button */
/*==========================================*/

const ShareCSS = styled.section`
  box-shadow: inset 1px 1px 10px #08c;
  padding: 0.5rem;
  height: 100%;
  max-width: 38.4rem;

  /* css from react share demo */
  .c-network {
    width: 100%;
    max-width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: flex-start;
  }

  .network {
    vertical-align: top;
    display: inline-block;
    text-align: center;
    margin: 1.5rem 0.5rem 1.5rem;
  }

  .network__share-button {
    cursor: pointer;
  }

  .network__share-button:hover:not(:active) {
    opacity: 0.75;
  }

  .network__share__count {
    margin-top: 0.1rem;
    font-size: 0.5rem;
  }
`;

export default ShareCSS;
