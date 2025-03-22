import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ThemeProvider } from "./ThemeContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";
import Skills from "./components/Skills";


const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact-form" element={<ContactForm />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </Router>
      <Contact />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
