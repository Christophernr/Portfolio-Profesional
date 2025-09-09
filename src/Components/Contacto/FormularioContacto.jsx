import { useRef } from "react";
import emailjs from "@emailjs/browser";
import'./Contacto.css';
export default function FormularioContacto() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

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
          alert("¡Mensaje enviado con éxito!");
            e.target.reset(); // Resetea el formulario después de enviar
        },
        (error) => {
          console.error(error.text);
          alert("Error al enviar el mensaje.");
        }
      );
  };
  return (
    
    <div className="div-formulario-contacto">
        
      <form ref={form} onSubmit={sendEmail} className="formulario-contacto">
        <h3>Formulario de Contacto</h3>
        <input type="text" name="to_name" placeholder="Tu nombre" required />
        <input type="email" name="from_name" placeholder="Tu correo" required />
        <textarea name="message" placeholder="Tu mensaje" required></textarea>
        <button type="submit" className="btn-formulario">Enviar</button>
      </form>
    </div>
  );
}
