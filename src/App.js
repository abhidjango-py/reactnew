import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import TextForm from "./components/TextForm";
import React from "react";
import About from "./components/About";

function App() {
  return (
    <>
      <NavBar title="TextUtils" aboutText="About Us" />
      <div className="container">
        <TextForm heading="Enter text to analyze" />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
