"use client";

import { RedesJS } from "../Redes/Redes.js";
import Email from "./Email";
import Telefono from "./Telefono";
import Ubicacion from "./Ubicacion";
import FormularioContacto from "./FormularioContacto";

export default function Contacto() {
  return (
    <section id="Contacto" className="py-20 px-6 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#2d3e50] mb-12">
          Contacto
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-8 md:gap-12">
          <div className="flex flex-col justify-center max-w-xs">
            <h3 className="text-3xl font-bold text-[#2d3e50] mb-6 text-center">
              Información de Contacto
            </h3>
            <ul className="space-y-6">
              <Email
                emailIcon={RedesJS[2].iconName}
                email={RedesJS[4].email}
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
          </div>
          <FormularioContacto />
        </div>
      </div>
    </section>
  );
}
