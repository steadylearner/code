import React from "react";
import ReactDOM from "react-dom";
import ShareForm from "./components/shareForm";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <ShareForm />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
