import React, { useState, useEffect } from "react";

const Projects = () => {
  const [repos, setRepos] = useState([]);
  const GITHUB_USERNAME = "boadita"; 

  useEffect(() => {
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos`)
      .then((response) => response.json())
      .then((data) => setRepos(data))
      .catch((error) => console.error("Error al obtener repos:", error));
  }, []);

  return (
    <section className="bg-yellow-500 text-black text-center p-10">
      <h2 className="text-3xl font-bold text-center">Mis Proyectos en GitHub</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        {repos.map((repo) => (
          <div key={repo.id} className="bg-white p-4 rounded-lg shadow-md">
            <img src={`/imagenes/proyectos/${repo.name}.png`} alt={repo.name} className="w-auto h-48 object-cover rounded-md shadow-md mx-auto"/>
            <h3 className="text-xl font-semibold">{repo.name}</h3>
            <p className="text-gray-600">{repo.description || "Sin descripción"}</p>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="block mt-2 text-blue-500">
              Ver en GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
