"use client";

import NavFooter from "./NavFooter";
import Redes from "../Redes/Redes.jsx";
import { RedesJS } from "../Redes/Redes.js";

export default function Footer() {
  return (
    <footer className="flex flex-col items-start h-[35rem] justify-around w-full bg-[#111827] md:flex-row md:h-60 md:justify-around md:items-center md:min-w-full">
      <div className="text-left min-w-60 m-0 pl-4">
        <h2 className="text-3xl font-bold text-white">{"<Dev />"}</h2>
        <p className="text-gray-400 leading-relaxed mt-2">
          Desarrollador Jr con experiencia en HTML, CSS, JavaScript, React,
          C# y SQL Server.
        </p>
      </div>

      <div className="text-left min-w-60 m-0 pl-4">
        <h2 className="text-2xl font-bold text-white mb-2">Enlaces rápidos</h2>
        <NavFooter />
      </div>

      <div className="text-left min-w-60 m-0 pl-4">
        <h2 className="text-2xl font-bold text-white mb-2">Redes Sociales</h2>
        <div className="flex gap-4 [&_*]:text-gray-400 [&_*]:w-4">
          <Redes icono={RedesJS[0].iconName} link={RedesJS[0].link} />
          <Redes icono={RedesJS[1].iconName} link={RedesJS[1].link} />
          <Redes icono={RedesJS[2].iconName} link={RedesJS[2].link} />
        </div>
      </div>
    </footer>
  );
}
