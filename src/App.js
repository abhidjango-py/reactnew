import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import About from "./components/About";

function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  };
  return (
    <>
      <NavBar
        title="TextUtils"
        aboutText="About Us"
        mode={mode}
        toggleMode={toggleMode}
      />
      <div className="container">
        <TextForm heading="Enter text to analyze" />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
