"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Telefono({ telefonoIcon, numero, pais }) {
  return (
    <li className="flex items-center gap-5 w-full">
      <div className="bg-green-100 text-green-600 p-2 rounded-lg">
        <FontAwesomeIcon icon={telefonoIcon} className="text-2xl" />
      </div>
      <span className="text-lg text-gray-700">{numero}</span>
    </li>
  );
}
