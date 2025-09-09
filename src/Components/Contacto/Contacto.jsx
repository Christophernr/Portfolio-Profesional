import { RedesJS } from "../Redes/Redes";

import Email from "./Email";
import Telefono from "./Telefono";
import Ubicacion from "./Ubicacion";
import FormularioContacto from "./FormularioContacto";
import "./Contacto.css";

export default function Contacto() {
  return (
    <section className="Contacto-Main">
      <div className="Contacto-Info">
        <h2>Contacto</h2>
        <div className="Contacto-Container">
          
          <ul className="Contacto-List">
            <h3 className="h3">Información de Contacto</h3>
            <Email
              emailIcon={RedesJS[2].iconName}
              email={RedesJS[4].email}
              //   numero={RedesJS[4].numero}
              //   pais={RedesJS[4].pais}
              //   telefono={RedesJS[4].telefono}
              //   ubicacion={RedesJS[4].ubicacion}
            />
            <Telefono
              telefonoIcon={RedesJS[4].telefono}
              numero={RedesJS[4].numero}
              pais={RedesJS[4].pais}
            />

            <Ubicacion
                pais={RedesJS[4].pais}
                ubicacionIcon={RedesJS[4].ubicacion}
            />
          </ul>
          <FormularioContacto />
        </div>
        
      </div>

      
    </section>
  );
}
