"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Input, Textarea, Button, Form } from "@heroui/react";
import Modales from "./Modales";

export default function FormularioContacto() {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [mensaje, setMensaje] = useState("");
  const [type, setType] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .sendForm(
        "service_rg6xkpr",
        "template_ao90mof",
        form.current,
        "x3aNJYem7lH0_y1Fm"
      )
      .then(
        (result) => {
          console.log(result.text);
          //   alert("¡Mensaje enviado con éxito!");

          setMensaje("¡Mensaje enviado con éxito!");
          setType("success");
          setIsOpen(true);
          e.target.reset();
          setIsLoading(false);
        },
        (error) => {
          console.error(error.text);
          setMensaje("Error al enviar el mensaje.");
          setType("error");
          setIsOpen(true);
          setIsLoading(false);
        }
      );
  };

  return (
    <div className="w-full max-w-[500px]">
      <Form
        ref={form}
        onSubmit={sendEmail}
        className="space-y-4 p-8 md:p-12 bg-white rounded-xl shadow-lg"
      >
        <h3 className="text-2xl font-bold text-[#2d3e50] mb-6 text-center">
          Formulario de Contacto
        </h3>
        <Input
          type="text"
          name="to_name"
          label="Tu nombre"
          placeholder="Ingresa tu nombre"
          variant="bordered"
          size="lg"
          isRequired
          classNames={{
            input: "text-lg",
            inputWrapper: "border-2 hover:border-[#2d3e50]",
          }}
        />
        <Input
          type="email"
          name="from_name"
          label="Tu correo"
          placeholder="Ingresa tu email"
          variant="bordered"
          size="lg"
          isRequired
          classNames={{
            input: "text-lg",
            inputWrapper: "border-2 hover:border-[#2d3e50]",
          }}
        />
        <Textarea
          name="message"
          label="Tu mensaje"
          placeholder="Escribe tu mensaje aquí"
          variant="bordered"
          size="lg"
          minRows={5}
          isRequired
          classNames={{
            input: "text-lg",
            inputWrapper: "border-2 hover:border-[#2d3e50]",
          }}
        />
        <Button
          type="submit"
          color="primary"
          size="lg"
          className="w-full font-semibold text-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all text-white"
          isLoading={isLoading}
        >
          {isLoading ? "Enviando..." : "Enviar"}
        </Button>
      </Form>
      <Modales
        isOpen={isOpen}
        mensaje={mensaje}
        type={type}
        onClose={() => setIsOpen(false)}
      />
    </div>
  );
}
