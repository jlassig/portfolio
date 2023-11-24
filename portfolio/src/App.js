
import './App.css';
import React from "react";
import About from "./components/About"
import Contact from "./components/Contact"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"

import Hero from "./components/Hero"
import Footer from "./components/Footer"

function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <div className="body-wrapper">
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer/>
      </div>
    </main>
  )
}

export default App;
