"use client";

import { Button } from "@heroui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Redes({ icono, link }) {
  return (
    <Button
      as="a"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      isIconOnly
      variant="light"
      className="bg-transparent p-0 w-6 scale-[1.8] mx-4 min-w-0"
      disableAnimation
    >
      <FontAwesomeIcon icon={icono} className="text-black" />
    </Button>
  );
}
