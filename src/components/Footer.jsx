import React from 'react';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>CBTA 134</h3>
          <p>San Francisco Tetlanohcan</p>
          <p>Educación de calidad para el futuro</p>
        </div>

    

        <div className="footer-section">
          <h3>Síguenos</h3>
          <div className="social-buttons">
            <a href="https://www.facebook.com" target="_blank" className="social-button facebook">
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" />
              Facebook
            </a>
            <a href="https://maps.google.com" target="_blank" className="social-button maps">
              <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Google_Maps_icon_%282020%29.svg" alt="Maps" />
              Maps
            </a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="footer-copyright">
          <p>&copy; 2025, Centro de Bachillerato Tecnológico Agropecuario No. 134.</p>
          <p><strong>Todos los derechos reservados.</strong></p>
          
          <div className="copyright-details">
            <p>El contenido de este sitio, incluyendo textos, imágenes, documentos, logotipos y demás materiales, es propiedad del Centro de Bachillerato Tecnológico Agropecuario No. 134 y se encuentra protegido por la legislación nacional e internacional sobre derechos de autor.</p>
            
            <p>Queda prohibida la reproducción, distribución, comunicación pública o modificación total o parcial de los materiales sin autorización previa y por escrito de los responsables del sitio.</p>
            
            <p>Este sitio tiene fines académicos y de divulgación estudiantil. Los contenidos compartidos pertenecen a sus autores originales y se citan únicamente con fines educativos.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;