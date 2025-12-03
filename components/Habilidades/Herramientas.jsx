"use client";

import { Card, CardBody, Chip } from "@heroui/react";

export default function Herramientas({
  skillTools1,
  skillTools2,
  skillTools3,
  skillTools4,
  skillTools5,
  skillTools6,
  skillTools7,
  skillTools8,
  skillTools9,
}) {
  const tools = [
    skillTools1,
    skillTools2,
    skillTools3,
    skillTools4,
    skillTools5,
    skillTools6,
    skillTools7,
    skillTools8,
    skillTools9,
  ];

  return (
    <Card className="w-full max-w-[20rem] mt-12">
      <CardBody className="flex flex-col items-center p-4">
        <h2 className="text-center text-2xl mb-4 mt-2">
          Herramientas y Tecnologías
        </h2>
        <div className="flex flex-wrap w-full">
          {tools.map((tool, index) => (
            <Chip
              key={index}
              className="h-auto bg-[#edecec] rounded-[3rem] px-4 py-2 m-1"
            >
              {tool}
            </Chip>
          ))}
        </div>

      </CardBody>
    </Card>
  );
}
