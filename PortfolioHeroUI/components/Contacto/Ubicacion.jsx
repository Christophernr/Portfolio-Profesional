"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Ubicacion({ ubicacionIcon, pais }) {
  return (
    <li className="flex items-center gap-5 w-full">
      <div className="bg-blue-100 text-blue-600 p-2 rounded-lg">
        <FontAwesomeIcon icon={ubicacionIcon} className="text-2xl" />
      </div>
      <span className="text-lg text-gray-700">{pais}</span>
    </li>
  );
}
