import React from "react";
import ReactDOM from "react-dom";
// import { MarkdownPreview } from "react-easy-md";

import { MarkdownPreview, copy, html } from "./react-easy-md";
// should be const { MarkdownPreview, copy, html, (save, load, delete), etc} = api
// or other package and upload it with real example 

// Refer to www.steadylearner.com/markdown page
import example from "./example"; // use example instead not to be confused with jest tests
import "./styles.css";

function App() {
  // console.log(html(test)); // or use {html(test) }
  const website = "https://www.steadylearner.com"; // use variable if kubjs have soome thing incommon
  return (
    <section className="App">
      <MarkdownPreview
        // value={html(test)} // Comment it to show default value
        value={example} // for we eallow sanitize false and allow html, it should show the same result
        markedOptions={{
          langPrefix: "hljs ", // hljs prefix for react-easy-md has its code part to used with it 
          sanitize: false, // allow html
          breaks: true,
          // baseUrl: "/s" This api is describe at "marked" webpage. 
          // but it doesn't seem to be working with react-easy-md 
          // and you can do the same with prefixWithReplacement
        }}
        prefixWithReplacement={[
          ["s-", `${website}`],
          ["l-", "https://www.linkedin.com/in"],
          ["y-", "https://www.youtube.com/channel/"],
          ["t-", "https://twitter.com/"],
          ["compare-", `${website}/blog/read`], // You should use absolute path
          ["g-", "https://www.github.com"]
        ]} // it can be plural and not compatible wtih a baseURL API
      />
      <button onClick={() => copy(example)} >Copy</button>
      {/* <br /> */}
      <span class="blue"> and paste it to <a href="www.steadylearner.com/markdown">www.steadylearner.com/markdown</a></span>
      {/* <section>{html(example)}</section> */}
    </section>
  );
}

// window.location.href shows current location
// Replace it with function used to get website location later? 
// prefixWithReplacement={["s-", "https://www.steadlyearner.com"]}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
