import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import TextForm from "./components/TextForm";
import React from "react";

function App() {
  return (
    <>
      <NavBar title="TextUtils" aboutText="About Us" />
      <div className="container">
        <TextForm heading="Enter text to analyze" />
      </div>
    </>
  );
}

export default App;
