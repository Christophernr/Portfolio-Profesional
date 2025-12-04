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

        <div className="flex w-full justify-center">
          <div className="flex flex-col w-full items-center justify-center gap-5 mt-12 lg:w-[55rem]">
            {/* Primera fila: FrontEnd + BackEnd */}
            <div className="flex flex-col w-full items-center gap-5 lg:flex-row lg:justify-center lg:items-stretch">
              <FrontEnd
                className="w-full h-full"
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
                className="w-full h-full"
                skillBack1={DataHabilidades[1].skillBack1}
                skillBack2={DataHabilidades[1].skillBack2}
                skillBack3={DataHabilidades[1].skillBack3}
                skillBack4={DataHabilidades[1].skillBack4}
                level2={DataHabilidades[3].level2}
                level3={DataHabilidades[3].level3}
              />
            </div>

            {/* Segunda fila: Herramientas */}
            <div className="flex w-full justify-center lg:items-stretch">
              <Herramientas
                className="w-full h-full"
                skillTools1={DataHabilidades[2].skillTools1}
                skillTools2={DataHabilidades[2].skillTools2}
                skillTools3={DataHabilidades[2].skillTools3}
                skillTools4={DataHabilidades[2].skillTools4}
                skillTools5={DataHabilidades[2].skillTools5}
                skillTools6={DataHabilidades[2].skillTools6}
                skillTools7={DataHabilidades[2].skillTools7}
                skillTools8={DataHabilidades[2].skillTools8}
                skillTools9={DataHabilidades[2].skillTools9}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
