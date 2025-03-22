import React from "react";

const About = () => {
  return (
    <section id="about" className="bg-yellow-500 text-black text-center p-10">
      <h2 className="text-3xl font-bold">Sobre mí</h2>

      {/* Contenedor que centra la imagen y el texto */}
      <div className="flex flex-col items-center justify-center mt-6">
        <div className="w-40 h-40 overflow-hidden rounded-full border-4 shadow-lg">
          <img
            src="imagenes/foto.jpg"
            alt="yo"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <p className="mt-6 text-justify font-bold">
        Desde niño tuve pasión por las computadoras, ya que me gustaba jugar los juegos, era una forma de aprender jugando y también una forma de diversión.
      </p>
      <p className="mt-6 text-justify font-bold">
        Debido a que siempre he sido amante de los números y las computadoras, es que decidí estudiar la carrera de Ingeniería de Sistemas, de la cual me titulé en el año 2011 luego de 5 años de estudio en la Universidad Católica Boliviana “San Pablo” de la ciudad de La Paz, tierra que me vio nacer.
      </p>
      <p className="mt-6 text-justify font-bold">
        La carrera tiene muchos campos. Sin embargo, yo encontré mi fortaleza en el diseño y desarrollo de aplicaciones ya sean Web, de escritorio o móviles.
      </p>
      <p className="mt-6 text-justify font-bold">
        El primer lenguaje de programación que aprendí fue C y luego C++. Con el tiempo también aprendí la sintaxis de Visual Basic y C#. También tengo nociones de la programación en Java. Desde los primeros años, la programación me pareció interesante, por lo que decidí aprender lenguajes de entorno Web como PHP, Javascript y .Net, todos estos embebidos en HTML, que se utiliza para el desarrollo de páginas Web.
      </p>

      <p className="mt-6 text-justify font-bold">
        Cabe mencionar que, para mi Proyecto de Grado, utilicé el lenguaje .Net para la realización de mi Sistema de registro de colegios de la ciudad de La Paz. Para lo cual utilicé el programa ArcGis para determinar la ubicación de las unidades educativas mencionadas.
      </p>

      <p className="mt-6 text-justify font-bold">
        Con los años surgieron los dispositivos móviles como tablets y smartphones, por lo que estuve interesado en aprender programación para Android, que es el sistema operativo móvil más utilizado. Es por ello que aprendí a programar primero en Java y luego en Kotlin.
      </p>

      <p className="mt-6 text-justify font-bold">
        Además, a pesar de tener una sintaxis diferente, tengo conocimiento en el lenguaje Python, que hoy en día es el más utilizado. También estoy aprendiendo el lenguaje de programación Go, desarrollado por Google.
      </p>

      <p className="mt-6 text-justify font-bold">
        En cuanto a gestores de bases de datos, tengo conocimientos en MySQL y MariaDB, que se utilizan sobre todo con el lenguaje PHP. Así como también PostgreSQL y los gestores de Microsoft como Access y SQL Server. Además de SQLite, que se utiliza con el lenguaje Python y otras aplicaciones como en la programación móvil. Todos ellos son utilizados para insertar, modificar, borrar o seleccionar datos a través de los lenguajes de programación.
      </p>

      <p className="mt-6 text-justify font-bold">
        No puedo dejar de mencionar que, como apasionado del desarrollo, tengo conocimientos del Lenguaje de Modelado Unificado (UML), que presenta diferentes diagramas utilizados para diseñar una nueva aplicación.
      </p>

      <p className="mt-6 text-justify font-bold">
        Como utilidad, también utilizo algunos frameworks para el desarrollo de dichas aplicaciones como Angular, React y Vue para frontend; también Laravel, CodeIgniter y Django para backend. Además de Bootstrap y Tailwind para CSS.
      </p>

      <p className="mt-6 text-justify font-bold">
        También me desempeño como docente universitario en materias de Ingeniería de Sistemas, donde guío a mis estudiantes en proyectos prácticos que fortalecen sus conocimientos en modelado de bases de datos, escritura de sentencias SQL y desarrollo de sitios web.
      </p>

      <p className="mt-6 text-justify font-bold">
        Soy un apasionado del fútbol y fiel hincha de The Strongest, Boca Juniors y FC Barcelona. Me inspira la disciplina y estrategia del deporte para aplicarlas en mi vida profesional. Mi compromiso con la tecnología, la educación y el análisis de datos me motiva a seguir aprendiendo y desarrollando soluciones innovadoras.
      </p>
    </section>
  );
};

export default About;
