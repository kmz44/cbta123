import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Inicio from "./pages/inicio";
import Nosotros from "./pages/Cbta/Nosotros";
import Programas from "./pages/Cbta/Programas";
import Saetam from "./pages/Cbta/Saetam";
import Monumentos from "./pages/Cbta/Murales";
import GuardianesMalinche from "./pages/Cbta/Guardianes";
import Galeria from "./pages/Cbta/Galeria";
import Agropecuario from "./pages/carreras/Agropecuario";
import SPP from "./pages/carreras/SPP";
import Ofimatica from "./pages/carreras/Ofimatica";
import Programacion from "./pages/carreras/Programacion";
import Contabilidad from "./pages/carreras/Contabilidad";
import Clubs from "./pages/Cbta/Clubs";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/cbta/nosotros" element={<Nosotros />} />
        <Route path="/cbta/programas" element={<Programas />} />
        <Route path="/cbta/galeria" element={<Galeria />} />
        <Route path="/cbta/contacto" element={<div>Contacto (por crear)</div>} />
        <Route path="/cbta/saetam" element={<Saetam />} />
        <Route path="/cbta/clubes-monumentos" element={<Monumentos />} />
        <Route path="/cbta/guardianes-malinche" element={<GuardianesMalinche />} />
        <Route path="/carreras/agropecuario" element={<Agropecuario />} />
        <Route path="/carreras/spp" element={<SPP />} />
        <Route path="/carreras/ofimatica" element={<Ofimatica />} />
        <Route path="/carreras/programacion" element={<Programacion />} />
        <Route path="/carreras/contabilidad" element={<Contabilidad />} />
        <Route path="/cbta/clubs" element={<Clubs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
