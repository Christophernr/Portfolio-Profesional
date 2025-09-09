import Nav from "../Header/NavHeader";
import Redes from "../Redes/Redes.jsx";
import { RedesJS } from "../Redes/Redes.js";

import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer-main">
      <div className="footer-info div-texto">
        <h2>{"<Dev />"}</h2>
        <p className="p-footer">
          Desarrollador Jr con experiencia en HTML, CSS, JavaScript, React, C# y
          Sql server.
        </p>
      </div>

      <div className="footer-info div-nav-footer">
        <h2>Enlaces rápidos</h2>
        <Nav className="p-footer" menuAbierto={true} toggleMenu={() => {}} variant="footer" />
      </div>

      <div className="footer-info div-redes">
        <h2>Redes Sociales</h2>
        <Redes className="p-footer" icono={RedesJS[0].iconName} link={RedesJS[0].link} />

        <Redes className="p-footer" icono={RedesJS[1].iconName} link={RedesJS[1].link} />

        <Redes className="p-footer" icono={RedesJS[2].iconName} link={RedesJS[2].link} />
      </div>
    </footer>
  );
}
