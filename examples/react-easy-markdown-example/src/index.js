import React from "react";
import ReactDOM from "react-dom";

import LiveMarkdownEditor from "./LiveMarkdownEditor";
import SteadylearenerCSS from "./CSS/SteadylearnerCSS";

import "./normalize.css";

function App() {
  return (
    <section className="App">
      <SteadylearenerCSS>
        <LiveMarkdownEditor />
      </SteadylearenerCSS>
    </section>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
