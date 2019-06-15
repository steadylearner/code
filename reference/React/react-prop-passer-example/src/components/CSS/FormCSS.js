import React from "react";
import styled from "styled-components";

/**
 * No visual syntax helpers as Visual Studio Code does
 * So I let compare.css inside Compare folder
 */

/*==========================================*/
/* YouTube Subscribe and other share button */
/*==========================================*/

const FormCSS = styled.section`
  padding: 0.5rem 2rem 1rem 2rem;

  h1 {
    font-size: 1.8rem;
  }

  // Below are CSS from Formik Example

  code {
    background: #eee;
    padding: 0.1rem;
    font-family: "Menlo";
    font-size: 13px;
    color: #ff00aa;
  }

  input {
    padding: 0.5rem;
    font-size: 16px;
    width: 100%;
    display: block;
    border-radius: 4px;
    border: 1px solid #ccc;
  }

  input:focus {
    border-color: #007eff;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
      0 0 0 3px rgba(0, 126, 255, 0.1);
    outline: none;
  }

  input.error {
    border-color: red;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
      0 0 0 3px rgba(255, 0, 0, 0.1);
  }

  label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
  }

  .input-feedback {
    color: red;
    margin-top: 0.25rem;
  }

  button {
    max-width: 150px;
    margin: 20px 0;
    padding: 12px 20px;
    border-style: none;
    border-radius: 5px;
    background-color: #08c;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
    font-size: 17px;
    font-weight: 500;
    color: #fff;
    cursor: pointer;
    outline: none;
    -webkit-appearance: none;
  }

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed !important;
  }

  button + button {
    margin-left: 0.5rem;
  }

  button.outline {
    background-color: #eee;
    border: 1px solid #aaa;
    color: #555;
  }
`;

export default FormCSS;
