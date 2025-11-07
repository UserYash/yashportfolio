import React from "react";
//import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Publications from "./components/Publications";
import Tools from "./components/Tools";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Hero />
      <Skills />
      <Projects />
      <Publications />
      <Tools />
      <Footer />
    </div>
  );
}

export default App;
