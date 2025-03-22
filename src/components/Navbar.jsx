import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

const Navbar = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <nav className={`p-4 ${darkMode ? "bg-black text-white font-bold" : "bg-gray text-black font-bold"}`}>
      <ul className="flex justify-center space-x-6">
      <li><a href="/">Inicio</a></li>
        <li><a href="/about">Sobre mí</a></li>
        <li><a href="/projects">Proyectos</a></li>
        <li><a href="/skills">Habilidades</a></li>
        <li><a href="/contact-form">Contacto</a></li>
      </ul>
      <button 
        onClick={() => setDarkMode(!darkMode)} 
        className="ml-4 p-2 border rounded"
      >
        {darkMode ? "Modo Claro" : "Modo Oscuro"}
      </button>
    </nav>
  );
};

export default Navbar;
