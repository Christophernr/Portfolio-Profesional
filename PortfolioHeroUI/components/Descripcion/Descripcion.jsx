"use client";

import { Button } from "@heroui/react";

export default function Descripcion() {
  return (
    <section className="pt-[6rem] pb-20 w-full flex justify-center">
      <div className="max-w-5xl w-full px-6 text-center flex flex-col items-center">
        {/* Título */}
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#1f2937]">
          Soy{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            Desarrollador Web Jr
          </span>
        </h2>

        {/* Subtítulo */}
        <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed">
          Especializado en crear experiencias web modernas, combinando
          desarrollo Front End y Back End con tecnologías actuales, bases de
          datos y buenas prácticas.
        </p>

        {/* Botones */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            as="a"
            href="https://github.com/Christophernr"
            target="_blank"
            size="lg"
            className="h-12 w-56 font-semibold text-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:opacity-90 transition rounded-xl shadow-md"
          >
            Ver Proyectos
          </Button>
          
          <Button
            as="a"
            href="/assets/CV_Cristhofer_Narvaez_Rivas.pdf"
            download
            size="lg"
            variant="flat"
            color="primary"
            className="h-12 w-56 font-semibold text-lg border-gray-400 text-gray-700 hover:bg-gray-50 rounded-xl"
          >
            Descargar CV
          </Button>
          {/* <Button color="primary" variant="flat">
            Flat
          </Button> */}
        </div>
      </div>
    </section>
  );
}
