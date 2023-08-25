import React, { useState } from "react";
// import PropTypes from "prop-types";
export default function TextForm(props) {
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/); //regex => agar ek ya ek se zada spaces hongi toh usko split krke array bana lega
    setText(newText.join(" "));
    props.showAlert("Removed Extra Spaces", "success");
  };
  const handleCopy = () => {
    let text = document.getElementById("myBox");
    text.select(); //used to select whole text
    navigator.clipboard.writeText(text.value); //goes to clipboard and write text value
    props.showAlert("Text Copied", "success");
  };
  const handleUpClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success");
  };
  const handleLoClick = () => {
    // console.log("Lowercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success");
  };
  const handleOnChange = (event) => {
    // console.log("onchange");
    setText(event.target.value); //sets value or key you press
  };
  const handleClClick = (event) => {
    // console.log("Clear was clicked" + text);
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared", "success");
  };
  const [text, setText] = useState("Enter text here... ");
  return (
    <>
      <div className="container my-4">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className={`form-control bg-${props.mode} text-${
              props.mode === "light" ? "dark" : "light"
            }`}
            id="myBox"
            value={text}
            rows="8"
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>
          Convert to Lowecase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClClick}>
          Clear
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>
          Copy
        </button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
      </div>
      <div className="container my-3">
        <h1>Your text summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
