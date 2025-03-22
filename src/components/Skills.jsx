import React, { useState, useEffect } from "react";

const Skills = () => {
  const [lenguajes, setLenguajes] = useState([]);
  const [maquetado, setMaquetado] = useState([]);
  const [basesDatos, setBasesDatos] = useState([]);
  const [frameworks, setFrameworks] = useState([]);
  const [repositorios, setRepositorios] = useState([]);

  useEffect(() => {
    // Simulando la carga de datos
    setLenguajes([
      { name: "C" },
      { name: "C++" },
      { name: "Csharp" },
      { name: "Java" },
      { name: "Python" },
      { name: "Go" },
      { name: "PHP" },
      { name: "Kotlin" }
    ]);
    setMaquetado([
      { name: "HTML" },
      { name: "CSS" },
      { name: "Javascript" },
      { name: "JQuery" },
      { name: "Typescript" }
    ]);
    setBasesDatos([
      { name: "MySQL" },
      { name: "MariaDB" },
      { name: "PostgreSQL" },
      { name: "SQLite" },
      { name: "SQL Server" },
      { name: "Ms Access" },
      { name: "IBM DB2" },
      { name: "Oracle" }
    ]);
    setFrameworks([
      { name: "Angular", tipo: "frontend" },
      { name: "React", tipo: "frontend" },
      { name: "Vue", tipo: "frontend" },
      { name: "Laravel", tipo: "backend" },
      { name: "CodeIgniter", tipo: "backend" },
      { name: "Django", tipo: "backend" },
      { name: "Bootstrap", tipo: "CSS" },
      { name: "Tailwind", tipo: "CSS" }
    ]);
    setRepositorios([
      { name: "Git" },
      { name: "GitHub" },
      { name: "GitLab" }
    ]);
  }, []);

  return (
    <section id="skills" className="p-10 bg-yellow-500">
      <h2 className="text-3xl font-bold text-center">Habilidades</h2>
      <div className="mt-4 space-y-4">
        <SkillCategory title="Lenguajes de Programación" data={lenguajes} folder="lenguajes" />
        <SkillCategory title="Maquetado de Sitios Web" data={maquetado} folder="maquetado" />
        <SkillCategory title="Bases de Datos" data={basesDatos} folder="bd" />
        <SkillCategory title="Frameworks" data={frameworks} folder="frameworks" showType />
        <SkillCategory title="Repositorios" data={repositorios} folder="repositorios" />
      </div>
    </section>
  );
};

// Componente reutilizable para cada categoría
const SkillCategory = ({ title, data, folder, showType = false }) => (
  <div>
    <h3 className="text-2xl font-bold">{title}:</h3>
    <div className="flex flex-wrap gap-4">
      {data.map((item) => (
        <div key={item.name} className="p-4 text-center">
          <img src={`/imagenes/${folder}/${item.name}.png`} alt={item.name} className="w-auto h-24 object-cover rounded-md shadow-md" />
          <strong className="block mt-2">{item.name}</strong>
          {showType && <p className="text-sm text-gray-600">{item.tipo}</p>}
        </div>
      ))}
    </div>
  </div>
);

export default Skills;
