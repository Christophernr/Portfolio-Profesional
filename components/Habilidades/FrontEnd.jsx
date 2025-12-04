"use client";
import { Card, CardBody,Chip } from "@heroui/react";
export default function FrontEnd({
  skillFront1,
  skillFront2,
  skillFront3,
  skillFront4,
  skillFront5,
  skillFront6,
  level2,
  level3,
}) {
  const skills = [
    { name: skillFront1, level: level3, color: "bg-green-500" },
    { name: skillFront2, level: level3, color: "bg-green-500" },
    { name: skillFront3, level: level2, color: "bg-yellow-500" },
    { name: skillFront4, level: level2, color: "bg-yellow-500" },
    { name: skillFront5, level: level2, color: "bg-yellow-500" },
    { name: skillFront6, level: level2, color: "bg-yellow-500" },
  ];

  return (
    <Card className="w-full max-w-[20rem] min-h-[32rem] flex flex-col items-center border border-gray-300 mt-12">
      <CardBody className="flex flex-col h-full">
        <h2 className="text-center text-2xl mb-4 mt-4">Frontend</h2>
        <ul className="m-0 p-0 w-full flex-1">
          {skills.map((skill, index) => (
            <li key={index} className="flex items-center justify-between p-6">
              <p className="text-lg font-medium text-gray-700">{skill.name}</p>
              <Chip
                className={`flex items-center justify-center text-white h-8 w-20 rounded-2xl ${skill.color}`}
              >
                {skill.level}
              </Chip>
            </li>
          ))}
        </ul>
      </CardBody>
    </Card>
  );
}
