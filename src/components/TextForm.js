import React, { useState } from "react";

export default function TextForm(props) {
  const handleCopy = () => {
    let text = document.getElementById("myBox");
    text.select(); //used to select whole text
    navigator.clipboard.writeText(text.value); //goes to clipboard and write text value
  };
  const handleUpClick = () => {
    console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLoClick = () => {
    console.log("Lowercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleOnChange = (event) => {
    console.log("onchange");
    setText(event.target.value); //sets value or key you press
  };
  const handleClClick = (event) => {
    console.log("Clear was clicked" + text);
    let newText = "";
    setText(newText);
  };
  const [text, setText] = useState("Enter text here... ");
  return (
    <>
      <div className="container my-4">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
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
