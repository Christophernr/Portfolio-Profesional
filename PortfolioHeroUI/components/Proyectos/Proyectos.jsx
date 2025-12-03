"use client";

import { Button, Card, CardBody, Chip } from "@heroui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Proyectos({
  title,
  description,
  video,
  icono,
  tools,
  link,
}) {
  return (
    <Card className="border border-gray-200 max-w-[20rem] lg:max-w-[25rem] h-auto rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
      <CardBody className="p-0 flex flex-col h-full">

        {/* VIDEO */}
        <div className="bg-gray-100 h-40 md:h-44 w-full overflow-hidden">
          <video
            controls
            className="w-full h-full object-cover"
          >
            <source src={video} type="video/mp4" />
            Tu navegador no soporta videos.
          </video>
        </div>

        {/* CONTENIDO */}
        <div className="px-5 py-4 flex flex-col flex-grow">
          <h3 className="text-xl font-bold text-[#2d3e50] mb-2">
            {title}
          </h3>

          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            {description}
          </p>

          {/* CHIPS */}
          <div className="flex flex-wrap gap-1.5">
            {tools?.map((tool, index) => (
              <Chip
                key={index}
                className="px-2 py-1 text-xs font-semibold bg-gray-100 border border-gray-300"
                variant="flat"
              >
                {tool}
              </Chip>
            ))}
          </div>
        </div>

        {/* BOTÓN FOOTER */}
        <div className="px-5 pb-4 mt-auto">
          <Button
            as="a"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-white border border-gray-300 text-sm font-semibold rounded-md py-2 hover:bg-gray-50"
            startContent={<FontAwesomeIcon icon={icono} />}
          >
            Código
          </Button>
        </div>

      </CardBody>
    </Card>
  );
}
