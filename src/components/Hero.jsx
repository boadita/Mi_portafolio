import React, { useEffect, useState } from "react";

const Hero = () => {
  const [mensaje, setMensaje] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setMensaje("¡Bienvenido a mi portafolio! 🚀");
    }, 2000);
  }, []);

  return (
    <section className="text-center p-20 bg-yellow-500 text-black">
      <h1 className="text-4xl font-bold animate-bounce">{mensaje}</h1>
      <p className="text-lg mt-2 font-bold">Desarrollador de Software | Ingeniero de Sistemas</p>
      <p className="text-black mt-3 text-4xl font-bold">"Apasionado por resolver problemas complejos con código elegante y escalable."</p>
    </section> 
  );
};

export default Hero;
