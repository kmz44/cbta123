import "../../styles/Planes.css";

export default function Agropecuario() {
  const redireccionar = (url) => {
    window.location.href = url;
  };

  return (
    <>
      <nav>
        <ul>
          <li>
            <button onClick={() => redireccionar("/cbta/programas")}>
              Programas
            </button>
          </li>
        </ul>
      </nav>

      <div className="container">
        <h1>Plan de Estudios - Técnico Agropecuario</h1>

        <section className="justification">
          <h2>1.2 Justificación de la Carrera</h2>
          <p>
            El currículum laboral tiene como objetivo desarrollar competencias laborales básicas y extendidas, integrando conocimientos, habilidades,
            actitudes y valores con responsabilidad y autonomía para desenvolverse en contextos personales, académicos, sociales y profesionales.
          </p>
          <p>
            Esta carrera proporciona preparación en: producción de cultivos para la alimentación e industria, manejo de especies pecuarias,
            procesamiento e inocuidad de productos agropecuarios y desarrollo de modelos de negocios. Facilita la incorporación al mundo laboral,
            emprendimiento o continuación de estudios superiores.
          </p>
        </section>

        <section className="competencies">
          <h2>1.3 Perfil de Egreso</h2>
          <p>
            El egresado podrá realizar actividades de producción agrícola y pecuaria, agricultura protegida, producción de insumos orgánicos,
            procesamiento de productos, comprobación de inocuidad, y diseño de planes de negocio agropecuario.
          </p>
          <h3>Competencias Laborales:</h3>
          <ul>
            <li>Produce cultivos para la alimentación e industria.</li>
            <li>Maneja especies pecuarias para la producción.</li>
            <li>Procesa productos agropecuarios.</li>
            <li>Verifica la inocuidad de productos agropecuarios.</li>
            <li>Desarrolla modelos de negocio de productos agropecuarios.</li>
          </ul>

          <h3>Habilidades para la Vida y el Trabajo (HVyT)</h3>
          <ul>
            <li><strong>Empoderamiento:</strong> Autoconocimiento, comunicación, regulación emocional.</li>
            <li><strong>Empleabilidad:</strong> Autonomía, toma de decisiones, logro de metas.</li>
            <li><strong>Aprendizaje:</strong> Creatividad, mentalidad de crecimiento, resolución de problemas.</li>
            <li><strong>Ciudadanía:</strong> Trabajo en equipo, empatía, conciencia social.</li>
          </ul>

          <h3>Conceptos de Educación para el Desarrollo Sostenible (CoCEDS)</h3>
          <ul>
            <li>Nexo Agua – Energía – Alimentación</li>
            <li>Servicios ecosistémicos</li>
            <li>Sistemas socioecológicos</li>
            <li>Economía ecológica</li>
          </ul>
        </section>

        <section className="modules">
          <h2>1.4 Mapa de Competencias Laborales</h2>
          <table>
            <thead>
              <tr>
                <th>Módulo</th>
                <th>Competencia Laboral</th>
                <th>Submódulos</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Módulo I</td>
                <td>Produce cultivos para la alimentación e industria</td>
                <td>
                  1. Cultivos agrícolas a cielo abierto<br />
                  2. Agricultura protegida<br />
                  3. Insumos orgánicos para la agricultura
                </td>
              </tr>
              <tr>
                <td>Módulo II</td>
                <td>Maneja especies pecuarias para la producción</td>
                <td>
                  1. Especies monogástricas<br />
                  2. Especies poligástricas<br />
                  3. Aves y especies alternas
                </td>
              </tr>
              <tr>
                <td>Módulo III</td>
                <td>Procesa productos agropecuarios</td>
                <td>
                  1. Productos hortofrutícolas<br />
                  2. Productos lácteos<br />
                  3. Productos cárnicos
                </td>
              </tr>
              <tr>
                <td>Módulo IV</td>
                <td>Verifica la inocuidad de productos agropecuarios</td>
                <td>
                  1. Productos agrícolas<br />
                  2. Productos pecuarios<br />
                  3. Productos agroindustriales
                </td>
              </tr>
              <tr>
                <td>Módulo V</td>
                <td>Desarrolla modelo de negocios de productos agropecuarios</td>
                <td>
                  1. Plan de negocios<br />
                  2. Plan de comercialización
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="changes">
          <h2>1.5 Cambios Principales del Programa 2024</h2>
          <ul>
            <li>
              <strong>Competencias laborales básicas:</strong> Funciones simples en contextos conocidos (nivel 2), con certificación oficial.
            </li>
            <li>
              <strong>Competencias laborales extendidas:</strong> Funciones de mayor complejidad técnica (nivel 3), acreditadas con título.
            </li>
            <li>
              Formación en escenarios reales: integración de saberes, trabajo interdisciplinario, y actividades clave observables y evaluables.
            </li>
            <li>
              Integración del Currículum Fundamental, Ampliado, HVyT y CoCEDS mediante transversalidad curricular.
            </li>
          </ul>
        </section>

        <section className="socioemotional">
          <h2>1.6 Formación Socioemocional (por semestre)</h2>
          <ul>
            <li>1º - Formación Socioemocional I</li>
            <li>2º - Formación Socioemocional II</li>
            <li>3º - Formación Socioemocional III</li>
            <li>4º - Formación Socioemocional IV</li>
            <li>5º - Formación Socioemocional V</li>
            <li>6º - Formación Socioemocional VI</li>
          </ul>
        </section>

        <a href="/cbta/programas" className="back-button">
          Volver a Carreras
        </a>
      </div>
    </>
  );
}
