import "./Habilidades.css";

import FrontEnd from "./FrontEnd.jsx";
import BackEnd from "./BackEnd.jsx";
import Herramientas from "./Herramientas.jsx";

import { DataHabilidades } from "./Data.js";

export default function Habilidades() {
  return (
    <section className="habilidades-container">
      <h2>Mis Habilidades</h2>
      <p>
        Tecnologías y herramientas que domino para crear soluciones completas
      </p>

      <div className="habilidades-lista">
        <div className="front-back-div">
          <FrontEnd
            skillFront1={DataHabilidades[0].skillFront1}
            skillFront2={DataHabilidades[0].skillFront2}
            skillFront3={DataHabilidades[0].skillFront3}
            //   skillTools1={DataHabilidades[2].skillTools1}
            //   skillTools2={DataHabilidades[2].skillTools2}
            //   skillTools3={DataHabilidades[2].skillTools3}
            //   skillTools4={DataHabilidades[2].skillTools4}
            //   skillTools5={DataHabilidades[2].skillTools5}
            //   skillTools6={DataHabilidades[2].skillTools6}
            //   skillTools7={DataHabilidades[2].skillTools7}
            level1={DataHabilidades[3].level1}
            level2={DataHabilidades[3].level2}
            level3={DataHabilidades[3].level3}
          />
          <BackEnd
            skillBack2={DataHabilidades[1].skillBack2}
            skillBack3={DataHabilidades[1].skillBack3}

            level2={DataHabilidades[3].level2}
            level3={DataHabilidades[3].level3}
          />
        </div>

        <Herramientas
          skillTools1={DataHabilidades[2].skillTools1}
          skillTools2={DataHabilidades[2].skillTools2}
          skillTools3={DataHabilidades[2].skillTools3}
          skillTools4={DataHabilidades[2].skillTools4}
          skillTools5={DataHabilidades[2].skillTools5}
          skillTools6={DataHabilidades[2].skillTools6}
          skillTools7={DataHabilidades[2].skillTools7}
        />
      </div>
    </section>
  );
}
