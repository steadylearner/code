import React from "react";
import styled, { keyframes } from "styled-components";

const rotate360 = keyframes`
  0% {
    opacity: 0;
    transform: rotate(0);
  }
  ${'' /* 60% {
    transform: rotate(100deg);
  } */}
  100% {
    opacity: 1;
    transform: rotate(360deg);
    ${""}
  }
`;

const rRotate360 = keyframes`
  0% {
    opacity: 0;
    transform: rotate(360deg);
  }
  ${'' /* 60% {
    transform: rotate(100deg);
  } */}
  100% {
    opacity: 1;
    transform: rotate(0);
    ${""}
  }
`;

// const circleRotate360 = keyframes`
//   0% {
//     opacity: 0.5;
//     transform: rotate();
//     /* left: -600px; */
//     /* border: 1rem solid white; */
//   }
//   /* 60% { transform: rotate(100deg); } */
//   100% {
//     opacity: 1;
//     /* left: 0px; */
//     border: 1rem solid red;
//     transform: rotate(360deg);
//   }
// `;

/* videoLoader */

const Loader = styled.section`

      .youtube-spinner {
        display: inline-block;
        animation: ${rotate360} 1.5s linear infinite 0.5s;
        /* forwards; */
        /* animation-delay: 0.5s; */
        font-size: 2rem;

        ${'' /* +1 than current highest z-index  */}
        z-index: 5;
        height: 1em;
        width: 1em;
        overflow: show;
        margin: auto;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;

        &:hover {
          color: black;
        }
      }

      .youtube-spinner--s {
        display: inline-block;
        animation: ${rotate360} 1s linear infinite 0.5s;
        /* forwards; */
        /* animation-delay: 0.5s; */
        font-size: 1rem;

        ${'' /* +1 than current highest z-index  */}
        z-index: 10;
        height: 1em;
        width: 1em;
        overflow: show;
        margin: auto;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;

        &:hover {
          color: black;
        }
      }

      .circle-spinner {
        animation: ${rotate360} 1.5s linear infinite 0.5s;

        border-top: 1rem solid #08c;
        border-left: 1rem solid forestgreen;
        border-right: 1rem solid red;
        border-bottom: 1rem solid yellow;

        z-index: 10;
        height: 5rem;
        width: 5rem;
        overflow: show;
        margin: auto;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
      }

      .circle-spinner--l {
        animation: ${rotate360} 1.5s linear infinite 0.5s;

        border-top: 2rem solid yellow;
        border-left: 2rem solid forestgreen;
        border-right: 2rem solid red;
        border-bottom: 2rem solid #08c;

        z-index: 10;
        height: 10rem;
        width: 10rem;
        overflow: show;
        margin: auto;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
      }

      .circle-spinner--s {
        animation: ${rotate360} 1s linear infinite 0.5s;

        border-top: 0.5rem solid #08c;
        border-left: 0.5rem solid forestgreen;
        border-right: 0.5rem solid red;
        border-bottom: 0.5rem solid yellow;

        z-index: 10;
        height: 2.5rem;
        width: 2.5rem;
        overflow: show;
        margin: auto;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
      }

      ${'' /* @media all and (max-width: 936px) {
        .youtube-spinner {
          font-size: 1rem;
        }

        .circle-spinner {
          border: 0.5rem solid red;;
          border-right: 0.5rem solid white; ;

          height: 4rem;
          width: 4rem;
        }
      } */}
`;

export default Loader;


// keyframes

// const rotate360 = keyframes`
//   from {
//     transform: rotate(0deg);
//   }

//   to {
//     transform: rotate(360deg);
//   }
// `;

// https://medium.com/learning-new-stuff/a-quick-introduction-to-css-animations-8ecb2f150792

// customize

/*
    animation-name
    animation-duration
    animation-delay
    animation-iteration-count
    animation-direction
    animation-timing-function (linear . ease . ease-in . ease-out . ease-in-out)
*/

// ease

/*
    linear
    ease (default)
    ease-in
    ease-out
    ease-in-out
*/

// const rotate360 = keyframes`
//   0% { transform: rotate(0deg); }
//   /* 60% { transform: rotate(100deg); } */
//   100% { transform: rotate(360deg); }
// `;