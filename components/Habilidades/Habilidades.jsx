"use client";

import FrontEnd from "./FrontEnd.jsx";
import BackEnd from "./BackEnd.jsx";
import Herramientas from "./Herramientas.jsx";
import { DataHabilidades } from "./Data.js";

export default function Habilidades() {
  return (
    <section
      id="Habilidades"
      className="flex flex-col items-center text-center mt-8 mb-8"
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#2d3e50] mb-4">
          Mis Habilidades
        </h2>
        <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Tecnologías y herramientas que domino para crear soluciones completas
        </p>

        <div className="flex flex-col items-center">
          <div className="flex flex-col lg:flex-row justify-center w-full lg:w-[55rem] gap-5 mt-12">
            <FrontEnd
              skillFront1={DataHabilidades[0].skillFront1}
              skillFront2={DataHabilidades[0].skillFront2}
              skillFront3={DataHabilidades[0].skillFront3}
              skillFront4={DataHabilidades[0].skillFront4}
              skillFront5={DataHabilidades[0].skillFront5}
              skillFront6={DataHabilidades[0].skillFront6}
              level1={DataHabilidades[3].level1}
              level2={DataHabilidades[3].level2}
              level3={DataHabilidades[3].level3}
            />
            <BackEnd
              skillBack1={DataHabilidades[1].skillBack1}
              skillBack2={DataHabilidades[1].skillBack2}
              skillBack3={DataHabilidades[1].skillBack3}
              skillBack4={DataHabilidades[1].skillBack4}
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
            skillTools8={DataHabilidades[2].skillTools8}
            skillTools9={DataHabilidades[2].skillTools9}
            // skillTools10={DataHabilidades[2].skillTools10}
          />
        </div>
      </div>
    </section>
  );
}
