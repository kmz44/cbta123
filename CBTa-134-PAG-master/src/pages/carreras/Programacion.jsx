import "../../styles/Planes.css";

export default function Programacion() {
  return (
    <div className="container">
      <h1>Plan de Estudios - Técnico en Programación</h1>

      <section className="description">
        <h2>Descripción General de la Carrera</h2>
        <p>
          La carrera de Técnico en Programación forma al estudiante en el desarrollo de software para sistemas informáticos,
          herramientas orientadas a la productividad, administración de bases de datos, aplicaciones web y móviles multiplataforma.
          Esta formación permite al egresado integrarse al mundo laboral, continuar sus estudios o emprender proyectos propios.
        </p>
      </section>

      <section className="objective">
        <h2>Objetivo de la Carrera</h2>
        <p>
          El Técnico en Programación está diseñado para desarrollar competencias laborales que permitan a los estudiantes
          integrarse al mercado laboral en áreas de desarrollo y administración de software, incluyendo aplicaciones web y móviles.
          Las competencias cubren desde el diseño hasta la implementación de sistemas informáticos, con un enfoque en sostenibilidad
          y resolución de problemas. También se fomenta el desarrollo de habilidades para la vida y el trabajo, como la empatía,
          el trabajo en equipo y la creatividad, que refuerzan su perfil profesional.
        </p>
      </section>

      <section className="competencies">
        <h2>Competencias Laborales</h2>
        <ul>
          <li>Desarrollar software de sistemas informáticos.</li>
          <li>Usar herramientas de productividad para el desarrollo de software.</li>
          <li>Administrar bases de datos en sistemas de información.</li>
          <li>Desarrollar aplicaciones web.</li>
          <li>Crear aplicaciones móviles multiplataforma.</li>
        </ul>
      </section>

      <section className="modules">
        <h2>Tabla de Módulos de Estudio</h2>
        <table>
          <thead>
            <tr>
              <th>Módulo</th>
              <th>Competencia Laboral</th>
              <th>Submódulos</th>
              <th>Duración (Horas)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Módulo I</td>
              <td>Desarrolla software de sistemas informáticos</td>
              <td>
                1. Diseña software de sistemas informáticos<br />
                2. Codifica software de sistemas informáticos<br />
                3. Implementa software de sistemas informáticos
              </td>
              <td>272</td>
            </tr>
            <tr>
              <td>Módulo II</td>
              <td>Desarrolla software con herramientas orientadas a la productividad</td>
              <td>
                1. Emplea frameworks para el desarrollo de software<br />
                2. Aplica metodologías ágiles para el desarrollo de software
              </td>
              <td>272</td>
            </tr>
            <tr>
              <td>Módulo III</td>
              <td>Administra bases de datos en un sistema de información</td>
              <td>
                1. Implementa bases de datos relacionales<br />
                2. Implementa bases de datos no relacionales
              </td>
              <td>272</td>
            </tr>
            <tr>
              <td>Módulo IV</td>
              <td>Desarrolla aplicaciones web en un sistema de información</td>
              <td>
                1. Construye aplicaciones web<br />
                2. Implementa aplicaciones web
              </td>
              <td>192</td>
            </tr>
            <tr>
              <td>Módulo V</td>
              <td>Desarrolla aplicaciones móviles multiplataforma</td>
              <td>
                1. Diseña aplicaciones móviles multiplataforma<br />
                2. Implementa aplicaciones móviles multiplataforma
              </td>
              <td>192</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="types-of-competencies">
        <h2>Tipos de Competencias Laborales</h2>
        <h3>Competencias Laborales Básicas</h3>
        <p>
          Aplicación de conocimientos, habilidades y actitudes en funciones laborales simples y específicas, en contextos conocidos.
          Estas competencias permiten desempeñar funciones de nivel 2 y se certifican oficialmente dentro del Sistema Educativo Nacional.
        </p>
        <h3>Competencias Laborales Extendidas</h3>
        <p>
          Aplicación de conocimientos en funciones más complejas, utilizando procedimientos técnicos específicos. Estas competencias
          permiten desempeñar funciones de nivel 3, y se certifican oficialmente mediante el título de Técnico en Programación.
        </p>
      </section>

      <section className="skills">
        <h2>Habilidades para la Vida y el Trabajo</h2>
        <ul>
          <li><strong>Empoderamiento:</strong> Autoconocimiento, comunicación, regulación emocional.</li>
          <li><strong>Empleabilidad:</strong> Autonomía, toma de decisiones, logro de metas.</li>
          <li><strong>Aprendizaje:</strong> Creatividad, mentalidad de crecimiento, resolución de problemas.</li>
          <li><strong>Ciudadanía:</strong> Trabajo en equipo, empatía, conciencia social.</li>
        </ul>
      </section>

      <section className="development-sustainability">
        <h2>Conceptos de Desarrollo Sostenible (CoCEDS)</h2>
        <ul>
          <li>Nexo Agua – Energía – Alimentación</li>
          <li>Servicios ecosistémicos</li>
          <li>Sistemas socioecológicos</li>
          <li>Economía ecológica</li>
        </ul>
      </section>

      <a href="/cbta/programas" className="back-button">
        Volver a Carreras
      </a>
    </div>
  );
}
