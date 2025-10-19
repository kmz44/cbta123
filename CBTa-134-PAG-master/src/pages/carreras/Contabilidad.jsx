import "../../styles/Planes.css";

export default function Contabilidad() {
  return (
    <div className="container">
      <h1>Plan de Estudios - Técnico en Contabilidad</h1>

      <section className="objective">
        <h2>Descripción General</h2>
        <p>
          El plan de estudios del Bachillerato Tecnológico en Contabilidad forma parte del Marco Curricular Común de la Educación Media Superior. 
          Su estructura contempla seis semestres con asignaturas de formación básica, extendida y profesional, abarcando áreas como Lengua, 
          Matemáticas, Humanidades, Cultura Digital, Ciencias, Inglés y Formación Socioemocional. La formación laboral inicia en segundo semestre 
          y se desarrolla en cinco módulos transdisciplinarios que suman 1200 horas de formación con mediación docente.
        </p>
      </section>

      <section className="objective">
        <h2>Justificación de la Carrera</h2>
        <p>
          La carrera de Técnico en Contabilidad responde a la necesidad de formar profesionales capaces de registrar operaciones financieras, 
          calcular impuestos, colaborar en auditorías y analizar información económica de forma ética, responsable y con dominio tecnológico. 
          Esto facilita su inserción laboral, continuidad educativa y desarrollo de emprendimientos, además de fortalecer su rol como agentes 
          de cambio comprometidos con el desarrollo sostenible.
        </p>
      </section>

      <section className="modules">
        <h2>Mapa de Competencias Profesionales</h2>
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
              <td>Registra información financiera de una entidad económica</td>
              <td>
                1. Registra operaciones contables<br />
                2. Formula información financiera
              </td>
              <td>272</td>
            </tr>
            <tr>
              <td>Módulo II</td>
              <td>Registra costos y nómina de una entidad económica</td>
              <td>
                1. Elabora contabilidad de costos<br />
                2. Realiza nómina en forma electrónica
              </td>
              <td>272</td>
            </tr>
            <tr>
              <td>Módulo III</td>
              <td>Realiza operaciones tributarias de personas físicas y morales</td>
              <td>
                1. Determina contribuciones fiscales de personas físicas<br />
                2. Determina contribuciones fiscales de personas morales
              </td>
              <td>272</td>
            </tr>
            <tr>
              <td>Módulo IV</td>
              <td>Auxilia en actividades de auditoría</td>
              <td>
                1. Verifica operaciones contables<br />
                2. Asiste en el cierre de auditoría
              </td>
              <td>192</td>
            </tr>
            <tr>
              <td>Módulo V</td>
              <td>Asiste en el análisis financiero de una entidad económica</td>
              <td>
                1. Colabora en el análisis financiero<br />
                2. Contribuye en la planeación financiera
              </td>
              <td>192</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="competencies">
        <h2>Perfil de Egreso</h2>
        <p>
          El egresado será capaz de desempeñar funciones contables en distintos sectores económicos, con conocimientos técnicos actualizados y un enfoque 
          sostenible. Además, fortalecerá habilidades clave agrupadas en cuatro dimensiones:
        </p>
        <ul>
          <li><strong>Empoderamiento:</strong> Autoconocimiento, comunicación y regulación emocional.</li>
          <li><strong>Empleabilidad:</strong> Autonomía, toma de decisiones y logro de metas.</li>
          <li><strong>Aprendizaje:</strong> Resolución de problemas, creatividad y mentalidad de crecimiento.</li>
          <li><strong>Ciudadanía:</strong> Trabajo en equipo, empatía y conciencia social.</li>
        </ul>
        <p>
          También aplicará conceptos clave del Desarrollo Sostenible, como el nexo agua-energía-alimentación, servicios ecosistémicos y economía ecológica.
        </p>
      </section>

      <a href="/cbta/programas" className="back-button">
        Volver a Carreras
      </a>
    </div>
  );
}
