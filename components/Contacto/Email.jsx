"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modales from "./Modales";

export default function Email({ emailIcon, email }) {
    const [isModalOpen, setModal] = useState(false);
    const [mensaje, setMensaje] = useState("");
    const [isModalType, setModalType] = useState("info");

    const openConfirm = (e) => {
        e.preventDefault();
        setModalType("confirm");
        setMensaje("¿Desea enviar un correo a " + email + "?");
        setModal(true);


    };
    const handleConfirm = ()=>{
        window.location.href = `mailto:${email}`;
    }

  return (
    <>
      <li className="flex items-center gap-5 w-full">
        <div className="bg-purple-100 text-purple-600 p-2 rounded-lg">
          <FontAwesomeIcon icon={emailIcon} className="text-2xl" />
        </div>
        <a
          href={`mailto:${email}`}
            onClick={openConfirm}
          className="text-lg text-gray-700 hover:text-purple-600 transition-colors"
        >
          {email}
        </a>
      </li>

      <Modales 
        isOpen={isModalOpen}
        setIsOpen={setModal}
        mensaje={mensaje}
        type={isModalType}
        onConfirm={handleConfirm}
        onClose={() => setModal(false)}
      
      />
    </>
  );
}
