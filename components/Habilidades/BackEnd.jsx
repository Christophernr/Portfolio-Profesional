"use client";
import { Card, CardBody,Chip } from "@heroui/react";
export default function BackEnd({
  skillBack1,
  skillBack2,
  skillBack3,
  skillBack4,
  level2,
  level3,
}) {
  const skills = [
    { name: skillBack2, level: level2, color: "bg-yellow-500" },
    { name: skillBack3, level: level3, color: "bg-green-500" },
    { name: skillBack1, level: level2, color: "bg-yellow-500" },
    { name: skillBack4, level: level2, color: "bg-yellow-500" },
  ];

  return (
    <Card className="w-full max-w-[20rem] flex flex-col items-center border border-gray-300 mt-12 max-h-[40rem]">
      <CardBody>
        <h2 className="text-center text-2xl mb-4 mt-4">Backend</h2>
        <ul className="m-0 p-0 w-full">
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
