import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Reel from "./components/Reel";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Contact from "./components/Contact";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground"> 
      <Hero />
      <About />
      <Reel />
      <Portfolio />
      <Skills />
      <Services />
      <Contact />
      <ThemeToggle />
    </div>
  );
}

export default App;